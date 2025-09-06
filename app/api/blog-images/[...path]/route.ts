import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const imagePath = params.path.join('/')
    const fullPath = path.join(process.cwd(), 'data', 'blog-content', imagePath)
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return new NextResponse('Image not found', { status: 404 })
    }
    
    // Read the file
    const imageBuffer = fs.readFileSync(fullPath)
    
    // Determine content type based on file extension
    const ext = path.extname(fullPath).toLowerCase()
    const contentType = {
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml'
    }[ext] || 'application/octet-stream'
    
    // Get file stats for ETag and last modified
    const stats = fs.statSync(fullPath)
    const etag = `"${stats.mtime.getTime()}-${stats.size}"`
    const lastModified = stats.mtime.toUTCString()
    
    // Check if client has current version
    const ifNoneMatch = request.headers.get('if-none-match')
    if (ifNoneMatch === etag) {
      return new NextResponse(null, { status: 304 })
    }
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, must-revalidate', // 1 hour cache with revalidation
        'ETag': etag,
        'Last-Modified': lastModified
      }
    })
  } catch (error) {
    return new NextResponse('Error serving image', { status: 500 })
  }
}