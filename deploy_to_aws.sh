#!/bin/bash

# Exit on error
set -e

echo "Starting deployment for ISUC-2026..."

# 1. Update and install basic dependencies
sudo apt update
sudo apt install -y nginx git curl

# 2. Install Node.js 20 (LTS) if not present
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
else
    echo "Node.js already installed: $(node -v)"
fi

# 3. Handle Repository
REPO_DIR="/var/www/isuc-2026"
echo "Setting up project in $REPO_DIR..."
sudo mkdir -p $REPO_DIR
sudo chown -R ubuntu:ubuntu $REPO_DIR

if [ -d "$REPO_DIR/.git" ]; then
    echo "Updating repository (force reset)..."
    cd "$REPO_DIR"
    git fetch origin
    git reset --hard origin/main
else
    echo "Cloning repository..."
    sudo rm -rf $REPO_DIR/*
    git clone https://github.com/Kabish20/Project_ISUC-2026 $REPO_DIR
    cd "$REPO_DIR"
fi

# 4. Install and Build
echo "Cleaning old dependencies..."
rm -rf node_modules package-lock.json

echo "Installing dependencies..."
npm install

echo "Fixing permissions..."
chmod +x node_modules/.bin/vite

echo "Building project..."
npm run build

# 5. Configure Nginx (only if not already configured with SSL)
echo "Checking Nginx configuration..."
CONF_FILE="/etc/nginx/sites-available/isuc-project"
if ! sudo grep -q "ssl_certificate" $CONF_FILE 2>/dev/null; then
    echo "Configuring basic Nginx..."
    sudo tee $CONF_FILE <<EOF
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name isuc2026.com www.isuc2026.com 54.81.193.26;

    root $REPO_DIR/dist;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF
    # Enable site
    sudo ln -sf $CONF_FILE /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
else
    echo "SSL detected, skipping Nginx config overwrite to preserve certificates."
fi

# 6. Final checks and restart
sudo nginx -t
sudo systemctl restart nginx

echo "------------------------------------------------"
echo "Deployment Successful!"
echo "Project is live at http://54.81.193.26"
echo "------------------------------------------------"
