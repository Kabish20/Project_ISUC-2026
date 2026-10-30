#!/bin/bash
# ==============================================================================
# ISUC-2026 Production Deployment & Server Hardening Script
# ==============================================================================
set -euo pipefail

# Configurable environment variables (override as needed via shell env)
SERVER_IP="${SERVER_IP:-54.81.193.26}"
DOMAIN_NAME="${DOMAIN_NAME:-isuc2026.com}"
REPO_DIR="${REPO_DIR:-/var/www/isuc-2026}"
GIT_REPO="${GIT_REPO:-https://github.com/Kabish20/Project_ISUC-2026}"
CONF_FILE="/etc/nginx/sites-available/isuc-project"

echo "=========================================================="
echo " Starting Secure Deployment for ISUC-2026"
echo " Host: ${DOMAIN_NAME} (${SERVER_IP})"
echo " Target Root: ${REPO_DIR}"
echo "=========================================================="

# 1. Update system packages and install secure baseline
echo "[1/6] Installing system prerequisites..."
sudo apt-get update -qq
sudo apt-get install -y --no-install-recommends nginx git curl ufw

# 2. Configure Node.js 20 (LTS) safely if not installed
if ! command -v node &> /dev/null; then
    echo "[2/6] Installing Node.js LTS (20.x)..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "[2/6] Node.js is already installed: $(node -v)"
fi

# 3. Synchronize Repository Securely
echo "[3/6] Setting up project workspace..."
sudo mkdir -p "$REPO_DIR"
sudo chown -R ubuntu:ubuntu "$REPO_DIR"

if [ -d "$REPO_DIR/.git" ]; then
    echo "  -> Updating repository from origin/main..."
    cd "$REPO_DIR"
    git fetch origin
    git reset --hard origin/main
else
    echo "  -> Cloning fresh repository..."
    sudo rm -rf "${REPO_DIR:?}/*"
    git clone "$GIT_REPO" "$REPO_DIR"
    cd "$REPO_DIR"
fi

# 4. Deterministic, Secure Build (npm ci enforces integrity hashes from lockfile)
echo "[4/6] Installing dependencies and building production bundle..."
if [ -f "package-lock.json" ]; then
    npm ci --prefer-offline --no-audit
else
    npm install
fi

echo "  -> Building Vite production distribution..."
npm run build

# Secure file permissions on the compiled webroot (Principle of Least Privilege)
echo "  -> Enforcing secure filesystem permissions on dist..."
sudo chmod -R 755 "$REPO_DIR/dist"
sudo find "$REPO_DIR/dist" -type f -exec chmod 644 {} +

# 5. Hardened Nginx Configuration
echo "[5/6] Hardening Nginx Web Server configuration..."

if ! sudo grep -q "ssl_certificate" "$CONF_FILE" 2>/dev/null; then
    echo "  -> Writing hardened baseline HTTP server block with security headers..."
    sudo tee "$CONF_FILE" > /dev/null <<EOF
# Hardened Nginx Configuration for ISUC-2026
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name ${DOMAIN_NAME} www.${DOMAIN_NAME} ${SERVER_IP};

    root ${REPO_DIR}/dist;
    index index.html;

    # Defense-in-Depth: Hide Nginx server version tokens
    server_tokens off;

    # HTTP Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://forms.zohopublic.in; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; frame-src 'self' https://forms.zohopublic.in; connect-src 'self' https://forms.zohopublic.in; object-src 'none'; base-uri 'self'; form-action 'self' https://forms.zohopublic.in;" always;

    # Gzip Compression Optimization
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css text/xml application/javascript application/x-javascript application/json application/xml application/rss+xml image/svg+xml;

    # SPA routing
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Static Assets Long-Term Caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|pdf|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # Attack Prevention: Block all hidden/dot files (.git, .env, .vscode, etc.)
    location ~ /\.(?!well-known) {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Attack Prevention: Block sensitive backup and source configuration files
    location ~* \.(bak|conf|config|sql|fla|psd|ini|log|sh|inc|swp|dist|env|git|yml|yaml)$ {
        deny all;
        access_log off;
        log_not_found off;
    }
}
EOF
    # Enable site link
    sudo ln -sf "$CONF_FILE" /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
else
    echo "  -> SSL detected in ${CONF_FILE}, preserving certificates while verifying syntax."
fi

# 6. Syntax Check & Reload
echo "[6/6] Verifying Nginx syntax and reloading service..."
sudo nginx -t
sudo systemctl reload nginx || sudo systemctl restart nginx

echo "=========================================================="
echo " ISUC-2026 Hardened Deployment Complete!"
echo " URL: http://${SERVER_IP} or https://${DOMAIN_NAME}"
echo "=========================================================="
