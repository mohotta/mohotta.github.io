#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting Portfolio & Blog Development Servers${NC}"
echo -e "${YELLOW}Portfolio will run on: http://localhost:3000${NC}"
echo -e "${YELLOW}Blog will run on: http://localhost:3001${NC}"
echo ""

# Check if concurrently is installed
if ! npm list concurrently > /dev/null 2>&1; then
    echo -e "${YELLOW}Installing concurrently...${NC}"
    npm install --save-dev concurrently
fi

# Start both servers
npm run dev:both