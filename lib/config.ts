// Configuration utility to detect which app instance is running
export const getAppConfig = () => {
  // Check if we're running with the blog config
  const isBlogInstance = process.env.NEXT_CONFIG_FILE?.includes('blog') || 
                        process.env.APP_MODE === 'blog'
  
  return {
    isBlogInstance,
    isPortfolioInstance: !isBlogInstance
  }
}