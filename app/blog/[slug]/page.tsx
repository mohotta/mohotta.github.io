'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { ModeToggle } from '@/components/shared/ModeToggle'
import ClientAnimatedBackground from '@/app/components/ClientAnimatedBackground'
import blogConfig from '@/data/blog.json'
import heroConfig from '@/data/hero.json'
import { getPortfolioUrl, getBlogUrl } from '@/lib/env'

interface BlogPostProps {
  params: {
    slug: string
  }
}

interface Article {
  id: string
  title: string
  excerpt: string
  date?: string
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

const BlogPost = ({ params }: BlogPostProps) => {
  const { slug } = params
  const { articles, comingSoon } = blogConfig
  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Get article metadata from JSON (including coming soon)
  const allArticles = [
    ...articles.filter(article => article.published),
    ...comingSoon
  ]
  const articleMeta = allArticles.find(article => article.slug === slug)
  
  useEffect(() => {
    const fetchContent = async () => {
      if (!articleMeta || !('date' in articleMeta)) {
        setLoading(false)
        return
      }
      
      try {
        const response = await fetch(`/api/blog-content/${slug}`)
        if (!response.ok) {
          throw new Error('Article not found')
        }
        const data = await response.text()
        setContent(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load article')
      } finally {
        setLoading(false)
      }
    }
    
    fetchContent()
  }, [slug, articleMeta])
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 section flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    )
  }

  if (error || !articleMeta || (!content && 'date' in articleMeta)) {
    return (
      <>
        <title>Article Not Found - Blog</title>
        <meta name="description" content="The requested article could not be found." />
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 section flex items-center justify-center">
          <ClientAnimatedBackground />
          <div className="text-center">
            <div className="text-muted-foreground/40 text-6xl mb-4">📄</div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog">
              <Button variant="outline">← Back to Blog</Button>
            </Link>
          </div>
        </div>
      </>
    )
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
      <span className={`px-3 py-1 text-sm font-medium rounded-full border ${colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground border-border'}`}>
        {category}
      </span>
    )
  }

  return (
    <>
      <title>{articleMeta.title} - Blog</title>
      <meta name="description" content={articleMeta.excerpt} />
      <meta name="author" content={articleMeta.author} />
      <meta name="keywords" content={articleMeta.tags.join(', ')} />
      <meta property="og:title" content={articleMeta.title} />
      <meta property="og:description" content={articleMeta.excerpt} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`${getBlogUrl()}/${slug}`} />
      {'date' in articleMeta && <meta property="article:published_time" content={(articleMeta as any).date} />}
      <meta property="article:author" content={articleMeta.author} />
      <meta property="article:section" content={articleMeta.category} />
      {articleMeta.tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={articleMeta.title} />
      <meta name="twitter:description" content={articleMeta.excerpt} />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 section">
        <ClientAnimatedBackground />
        {/* Header */}
        <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link 
                href="/blog" 
                className="text-muted-foreground hover:text-foreground transition-colors font-mono flex items-center"
              >
                ← blog
              </Link>
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

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <CategoryBadge category={articleMeta.category} />
            {articleMeta.featured && (
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            {articleMeta.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <span>{formatDate('date' in articleMeta ? (articleMeta as any).date : undefined)}</span>
            <span>•</span>
            <span>{articleMeta.readTime}</span>
            <span>•</span>
            <span>by {articleMeta.author}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {articleMeta.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full hover:bg-muted/80 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              // Custom components for better styling
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {children}
                </p>
              ),
              code: ({ className, children }) => {
                const isInline = !className
                if (isInline) {
                  return (
                    <code className="bg-muted text-foreground px-1 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  )
                }
                return (
                  <code className={className}>
                    {children}
                  </code>
                )
              },
              pre: ({ children }) => (
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 [&>code]:bg-transparent [&>code]:text-inherit">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg mb-6 italic text-muted-foreground">
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-6 text-foreground/80">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-6 text-foreground/80">
                  {children}
                </ol>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border border-border rounded-lg bg-card">
                    {children}
                  </table>
                </div>
              ),
              th: ({ children }) => (
                <th className="bg-muted border border-border px-4 py-2 text-left font-semibold text-foreground">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-border px-4 py-2 text-foreground/80">
                  {children}
                </td>
              ),
              img: ({ src, alt }) => {
                // Handle relative paths by converting them to API route
                const imageSrc = src?.startsWith('./') 
                  ? `/api/blog-images/${slug}/${src.slice(2)}` 
                  : src
                
                return (
                  <Image 
                    src={imageSrc || ''} 
                    alt={alt || ''} 
                    width={800}
                    height={400}
                    className="rounded-lg shadow-md mx-auto max-w-full h-auto mb-6"
                    unoptimized={imageSrc?.startsWith('/api')}
                  />
                )
              },
              a: ({ href, children }) => (
                <a 
                  href={href} 
                  className="text-primary hover:text-primary/80 underline"
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col gap-6">
            <div className="text-muted-foreground">
              <p className="font-medium mb-1">Written by {articleMeta.author}</p>
              <p className="text-sm">Published on {formatDate('date' in articleMeta ? (articleMeta as any).date : undefined)}</p>
            </div>
            
            <div className="text-center">
              <Link href="/blog">
                <Button variant="outline">← Back to Blog</Button>
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
    </>
  )
}

export default BlogPost