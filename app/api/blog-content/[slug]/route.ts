import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const filePath = path.join(process.cwd(), 'data', 'blog-content', slug, 'article.md')
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Article not found', { status: 404 })
    }
    
    // Read and parse the markdown file
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContents)
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      }
    })
  } catch (error) {
    return new NextResponse('Error loading article', { status: 500 })
  }
}