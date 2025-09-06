'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/shared/ModeToggle'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import AnimatedBackground from '@/app/components/AnimatedBackground'
import blogConfig from '@/data/blog.json'
import heroConfig from '@/data/hero.json'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiUser, FiChevronLeft, FiChevronRight, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { getPortfolioUrl } from '@/lib/env'

interface Article {
  id: string
  title: string
  excerpt: string
  date?: string // Make date optional as coming soon articles don't have dates
  readTime: string
  tags: string[]
  category: string
  featured: boolean
  published: boolean
  author: string
  slug: string
}

// Icon mapping for social links
const iconMap: Record<string, React.ReactNode> = {
  FaLinkedin: <FaLinkedin/>,
  FaTwitter: <FaTwitter/>
}

const Blog = () => {
  const { settings, articles, comingSoon } = blogConfig
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = React.useState(0)
  const [currentArticleCount, setCurrentArticleCount] = React.useState(0)
  const [isExpanding, setIsExpanding] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(0)

  // Combine published articles with coming soon articles
  const allArticles = [
    ...articles.filter(article => article.published),
    ...comingSoon
  ]

  // Sort articles: articles without dates (coming soon) first, then by date (newest first)
  const sortedAllArticles = allArticles.sort((a, b) => {
    const aHasDate = 'date' in a
    const bHasDate = 'date' in b
    
    // Articles without dates (coming soon) always come first
    if (!aHasDate && bHasDate) return -1
    if (aHasDate && !bHasDate) return 1
    
    // If both have dates, sort by date (newest first)
    if (aHasDate && bHasDate) {
      return new Date((b as any).date).getTime() - new Date((a as any).date).getTime()
    }
    
    // If both don't have dates, keep original order
    return 0
  })
  
  const featuredArticles = sortedAllArticles.filter(article => article.featured)
  const otherArticles = sortedAllArticles.filter(article => !article.featured)
  
  // Carousel logic for featured articles
  const ARTICLES_PER_PAGE_LARGE = 2
  const ARTICLES_PER_PAGE_SMALL = 1
  
  // All articles stepwise expansion logic (like portfolio)
  const getStepSize = React.useCallback(() => {
    if (windowWidth < 768) { // Mobile (md breakpoint)
      return 3
    }
    return 6 // For larger screens
  }, [windowWidth])
  
  const STEP_SIZE = getStepSize()
  const INITIAL_ARTICLES_COUNT = STEP_SIZE
  
  // All articles including featured ones for the "All Articles" section
  const allArticlesForSection = sortedAllArticles
  const displayedArticles = allArticlesForSection.slice(0, currentArticleCount)
  const hasMoreArticles = currentArticleCount < allArticlesForSection.length
  const canShowLess = currentArticleCount > INITIAL_ARTICLES_COUNT
  
  // Carousel navigation
  const nextFeatured = () => {
    setCurrentFeaturedIndex(prev => {
      const newIndex = prev + ARTICLES_PER_PAGE_LARGE
      // Don't go beyond what would result in empty pages
      if (newIndex >= featuredArticles.length) {
        return prev
      }
      return newIndex
    })
  }
  
  const prevFeatured = () => {
    setCurrentFeaturedIndex(prev => Math.max(prev - ARTICLES_PER_PAGE_LARGE, 0))
  }
  
  const nextFeaturedSmall = () => {
    const maxIndex = Math.max(0, featuredArticles.length - ARTICLES_PER_PAGE_SMALL)
    setCurrentFeaturedIndex(prev => Math.min(prev + ARTICLES_PER_PAGE_SMALL, maxIndex))
  }
  
  const prevFeaturedSmall = () => {
    setCurrentFeaturedIndex(prev => Math.max(prev - ARTICLES_PER_PAGE_SMALL, 0))
  }
  
  // Handle window resize for responsive article count
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    // Set initial window width and article count
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  
  // Initialize and update current article count based on window width
  React.useEffect(() => {
    if (windowWidth > 0) {
      const stepSize = getStepSize()
      // Reset to initial count when screen size changes
      if (currentArticleCount === 0 || currentArticleCount < stepSize) {
        setCurrentArticleCount(stepSize)
      }
    }
  }, [windowWidth, currentArticleCount, getStepSize])
  
  const showMoreArticles = () => {
    setIsExpanding(true)
    const newCount = Math.min(currentArticleCount + STEP_SIZE, allArticlesForSection.length)
    setCurrentArticleCount(newCount)
    
    // Reset expanding state after animation
    setTimeout(() => {
      setIsExpanding(false)
    }, 500)
  }
  
  const showLessArticles = () => {
    setIsExpanding(true)
    setCurrentArticleCount(INITIAL_ARTICLES_COUNT)
    
    // Reset expanding state after animation
    setTimeout(() => {
      setIsExpanding(false)
    }, 500)
  }

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'Coming Soon'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const CategoryBadge = ({ category }: { category: string }) => {
    const colors = {
      Tutorial: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
      Technical: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
      Career: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800',
      Experience: 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800'
    }
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'}`}>
        {category}
      </span>
    )
  }

  const ArticleCard = ({ article, featured = false }: { article: Article, featured?: boolean }) => {
    const isComingSoon = !('date' in article)
    
    return (
      <article className={`group ${isComingSoon ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'} ${featured 
        ? 'bg-card/70 border-2 border-primary/30 backdrop-blur-sm' 
        : 'bg-card/50 border border-border/50 backdrop-blur-sm'
      } rounded-xl p-6 ${!isComingSoon && 'hover:bg-card/70 hover:shadow-lg hover:scale-105'} transition-all duration-300 flex flex-col h-full`}>
        {isComingSoon ? (
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-3">
              <CategoryBadge category={article.category} />
              <div className="flex items-center gap-2">
                {featured && (
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                    Featured
                  </span>
                )}
                <span className="text-xs font-medium text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-1 rounded-full border border-orange-200 dark:border-orange-800">
                  Coming Soon
                </span>
              </div>
            </div>
            
            <h2 className={`font-bold mb-3 text-muted-foreground ${featured ? 'text-xl' : 'text-lg'}`}>
              {article.title}
            </h2>
            
            <p className="text-muted-foreground/70 mb-4 leading-relaxed flex-grow">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs text-muted-foreground/60 bg-muted/60 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
              {article.tags.length > 3 && (
                <span className="text-xs text-muted-foreground/40">+{article.tags.length - 3} more</span>
              )}
            </div>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground/60 mt-auto">
              <span>{formatDate('date' in article ? (article as any).date : undefined)}</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        ) : (
          <Link href={`/blog/${article.slug}`} className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-3">
              <CategoryBadge category={article.category} />
              {featured && (
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                  Featured
                </span>
              )}
            </div>
            
            <h2 className={`font-bold mb-3 text-foreground group-hover:text-primary transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
              {article.title}
            </h2>
            
            <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
              {article.tags.length > 3 && (
                <span className="text-xs text-muted-foreground/60">+{article.tags.length - 3} more</span>
              )}
            </div>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
              <span>{formatDate('date' in article ? (article as any).date : undefined)}</span>
              <span>{article.readTime}</span>
            </div>
          </Link>
        )}
      </article>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 section">
      <AnimatedBackground />
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground font-mono">
                {settings.title}
              </h1>
              <p className="text-muted-foreground font-mono text-sm mt-1">
                {settings.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <TooltipProvider>
                <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide max-w-[calc(100vw-8rem)] md:max-w-none p-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href={getPortfolioUrl()} aria-label="Portfolio" className="relative z-10">
                        <Button 
                          size="icon" 
                          variant="outline" 
                          className="w-10 h-10 rounded-full border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 flex-shrink-0 hover:z-20"
                        >
                          <FiUser />
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Portfolio</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  {heroConfig.socialLinks.filter(social => social.icon === 'FaLinkedin' || social.icon === 'FaTwitter').map(social => (
                    <Tooltip key={social.name}>
                      <TooltipTrigger asChild>
                        <a 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Visit ${social.name}`}
                          className="inline-block relative z-10"
                        >
                          <Button 
                            size="icon" 
                            variant="outline" 
                            className="w-10 h-10 rounded-full border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 flex-shrink-0 hover:z-20"
                          >
                            {iconMap[social.icon]}
                          </Button>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{social.name.charAt(0).toUpperCase() + social.name.slice(1)}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
              
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground flex items-center">
                <span className="w-8 h-0.5 bg-primary mr-3"></span>
                Featured Articles
              </h2>
              {featuredArticles.length > ARTICLES_PER_PAGE_LARGE && (
                <div className="hidden lg:flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={prevFeatured}
                          disabled={currentFeaturedIndex === 0}
                          className="w-10 h-10 rounded-full"
                        >
                          <FiChevronLeft />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Previous</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span className="text-sm text-muted-foreground mx-2">
                    {Math.floor(currentFeaturedIndex / ARTICLES_PER_PAGE_LARGE) + 1} / {Math.ceil(featuredArticles.length / ARTICLES_PER_PAGE_LARGE)}
                  </span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={nextFeatured}
                          disabled={currentFeaturedIndex + ARTICLES_PER_PAGE_LARGE >= featuredArticles.length}
                          className="w-10 h-10 rounded-full"
                        >
                          <FiChevronRight />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Next</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
              {featuredArticles.length > ARTICLES_PER_PAGE_SMALL && (
                <div className="flex lg:hidden items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={prevFeaturedSmall}
                          disabled={currentFeaturedIndex === 0}
                          className="w-10 h-10 rounded-full"
                        >
                          <FiChevronLeft />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Previous</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span className="text-sm text-muted-foreground mx-2">
                    {currentFeaturedIndex + 1} / {featuredArticles.length}
                  </span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={nextFeaturedSmall}
                          disabled={currentFeaturedIndex + ARTICLES_PER_PAGE_SMALL >= featuredArticles.length}
                          className="w-10 h-10 rounded-full"
                        >
                          <FiChevronRight />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Next</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
            </div>
            
            <div className="overflow-visible p-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Large screens: show 2 articles */}
                <div className="hidden lg:contents">
                  {featuredArticles.slice(currentFeaturedIndex, currentFeaturedIndex + ARTICLES_PER_PAGE_LARGE).map((article, index) => (
                    <div key={article.id} className="relative z-10 hover:z-30">
                      <ArticleCard article={article} featured={true} />
                    </div>
                  ))}
                </div>
                {/* Small screens: show 1 article */}
                <div className="lg:hidden col-span-1">
                  {featuredArticles.slice(currentFeaturedIndex, currentFeaturedIndex + ARTICLES_PER_PAGE_SMALL).map((article) => (
                    <div key={article.id} className="relative z-10 hover:z-30">
                      <ArticleCard article={article} featured={true} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <span className="w-8 h-0.5 bg-muted-foreground mr-3"></span>
            All Articles
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-500 p-2 ${isExpanding ? 'transform scale-[0.98]' : ''}`}>
            {displayedArticles.map((article, index) => (
              <div key={article.id} className="relative z-10 hover:z-30">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
          
          {(hasMoreArticles || canShowLess) && (
            <div className="flex justify-center items-center w-full mt-8 gap-4">
              {hasMoreArticles && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        onClick={showMoreArticles}
                        variant="outline"
                        className="px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-primary/10 border-2 hover:border-primary/50"
                      >
                        <span className="flex items-center gap-2">
                          Show More
                          <FiChevronDown className="w-4 h-4 transition-transform duration-300" />
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Show more articles</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              
              {canShowLess && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        onClick={showLessArticles}
                        variant="outline"
                        className="px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-secondary/10 border-2 hover:border-secondary/50"
                      >
                        <span className="flex items-center gap-2">
                          Show Less
                          <FiChevronUp className="w-4 h-4 transition-transform duration-300" />
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Show fewer articles</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          )}
        </section>

        {/* Empty state if no articles */}
        {articles.length === 0 && (
          <div className="text-center py-16">
            <div className="text-muted-foreground/40 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No articles yet</h3>
            <p className="text-muted-foreground">Check back soon for new content!</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-4 border-t border-border/30 bg-card/20 backdrop-blur-sm mt-16">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kumudu Mohottala. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Redesigned by{' '}
            <a 
              href="https://claude.ai/code" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors duration-200"
            >
              Claude Code
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Blog