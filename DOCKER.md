# Docker Deployment Guide

This project supports Docker deployment with separate containers for the portfolio and blog applications.

## Architecture

- **Portfolio**: Runs on port 3000 (mohotta.site)
- **Blog**: Runs on port 3001 (blog.mohotta.site)
- Both applications are built from the same codebase with different Next.js configurations

## Quick Start

### Development Deployment

```bash
# Using the deployment script (recommended)
./deploy.sh dev

# Or manually
docker-compose -f docker-compose.dev.yml up --build -d
```

Access the applications:
- Portfolio: http://localhost:3000
- Blog: http://localhost:3001

### Production Deployment

```bash
# Using the deployment script (recommended)
./deploy.sh prod

# Or manually
docker-compose up --build -d
```

## Environment Configuration

The deployment uses different environment variables for development and production:

### Development (.env.local)
- Portfolio: http://localhost:3000
- Blog: http://localhost:3001

### Production (.env.production)
- Portfolio: https://mohotta.site
- Blog: https://blog.mohotta.site

## Docker Commands

### Build and Run
```bash
# Development
docker-compose -f docker-compose.dev.yml up --build -d

# Production
docker-compose up --build -d
```

### Stop Services
```bash
# Development
docker-compose -f docker-compose.dev.yml down

# Production
docker-compose down
```

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f portfolio
docker-compose logs -f blog
```

### Check Status
```bash
docker ps | grep mohotta
```

## Caddy Integration

For production deployment with Caddy reverse proxy, your Caddyfile should include:

```caddy
mohotta.site {
    reverse_proxy localhost:3000
}

blog.mohotta.site {
    reverse_proxy localhost:3001
}
```

## File Structure

```
├── Dockerfile                 # Multi-stage build for both apps
├── docker-compose.yml         # Production configuration
├── docker-compose.dev.yml     # Development configuration
├── .dockerignore             # Files to exclude from Docker build
├── deploy.sh                 # Deployment script
├── next.config.portfolio.js  # Portfolio-specific Next.js config
├── next.config.blog.js       # Blog-specific Next.js config
├── .env.local               # Development environment variables
└── .env.production          # Production environment variables
```

## Troubleshooting

### Port Conflicts
If ports 3000 or 3001 are already in use, modify the port mappings in the docker-compose files.

### Build Issues
If you encounter build issues, try rebuilding without cache:
```bash
docker-compose build --no-cache
```

### Data Persistence
The `data/` directory is mounted as a read-only volume in both containers to provide access to blog content and configuration files.

## Development vs Production

- **Development**: Uses localhost URLs, enables hot reloading through volume mounts
- **Production**: Uses production URLs, optimized build with minimal container size
- Both use the same Docker build targets but with different environment configurations