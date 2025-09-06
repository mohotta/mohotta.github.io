// Environment configuration utility
export const env = {
  // Environment
  NODE_ENV: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // Site URLs
  PORTFOLIO_URL: process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://mohotta.site',
  BLOG_URL: process.env.NEXT_PUBLIC_BLOG_URL || 'https://blog.mohotta.site',
  
  // Domains
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN || 'mohotta.site',
  PORTFOLIO_DOMAIN: process.env.NEXT_PUBLIC_PORTFOLIO_DOMAIN || 'mohotta.site',
  BLOG_DOMAIN: process.env.NEXT_PUBLIC_BLOG_DOMAIN || 'blog.mohotta.site',
  
  // API
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://mohotta.site/api',
  
  // Server configuration
  PORT: parseInt(process.env.PORT || '3000', 10),
  HOSTNAME: process.env.HOSTNAME || '0.0.0.0',
}

// Helper functions
export const getPortfolioUrl = () => env.PORTFOLIO_URL
export const getBlogUrl = () => env.BLOG_URL
export const getApiUrl = () => env.API_URL

// Navigation helper
export const getNavigationUrls = () => ({
  portfolio: env.PORTFOLIO_URL,
  blog: env.BLOG_URL,
  api: env.API_URL,
})