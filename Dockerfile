# Dockerfile for Portfolio Website with Blog
# Multi-stage build for production deployment

FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Build portfolio application
FROM base AS portfolio-builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment to production for build
ENV NODE_ENV=production
ENV APP_MODE=portfolio


RUN npm run build

# Build blog application  
FROM base AS blog-builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment to production for build
ENV NODE_ENV=production
ENV APP_MODE=blog


RUN NEXT_CONFIG_FILE=next.config.blog.js npm run build

# Production image for portfolio
FROM base AS portfolio-runner
WORKDIR /app

ENV NODE_ENV=production
ENV APP_MODE=portfolio

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=portfolio-builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the built application
COPY --from=portfolio-builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=portfolio-builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Copy portfolio config
COPY --from=portfolio-builder /app/next.config.portfolio.js ./next.config.js

CMD ["npm", "start"]

# Production image for blog
FROM base AS blog-runner
WORKDIR /app

ENV NODE_ENV=production
ENV APP_MODE=blog

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=blog-builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the built application
COPY --from=blog-builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=blog-builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

USER nextjs

EXPOSE 3001

ENV PORT 3001
ENV HOSTNAME "0.0.0.0"

# Copy blog config
COPY --from=blog-builder /app/next.config.blog.js ./next.config.js

CMD ["npm", "start"]