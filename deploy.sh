#!/bin/bash

# Deployment script for Portfolio Website with Blog
# Usage: ./deploy.sh [dev|prod]

set -e

ENVIRONMENT=${1:-prod}

echo "🚀 Deploying Portfolio Website in $ENVIRONMENT mode..."

if [ "$ENVIRONMENT" == "dev" ]; then
    echo "📦 Building and starting development containers..."
    docker-compose -f docker-compose.dev.yml down
    docker-compose -f docker-compose.dev.yml build --no-cache
    docker-compose -f docker-compose.dev.yml up -d
    
    echo "✅ Development deployment complete!"
    echo "🌐 Portfolio: http://localhost:3000"
    echo "📝 Blog: http://localhost:3001"
    
elif [ "$ENVIRONMENT" == "prod" ]; then
    echo "📦 Building and starting production containers..."
    docker-compose down
    docker-compose build --no-cache
    docker-compose up -d
    
    echo "✅ Production deployment complete!"
    echo "🌐 Portfolio: https://mohotta.site"
    echo "📝 Blog: https://blog.mohotta.site"
    
else
    echo "❌ Invalid environment. Use 'dev' or 'prod'"
    exit 1
fi

echo "📊 Checking container status..."
docker ps | grep mohotta

echo "🎉 Deployment completed successfully!"