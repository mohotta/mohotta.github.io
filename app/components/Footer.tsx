'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 border-t border-border/30 bg-card/20 backdrop-blur-sm">
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
  )
}

export default Footer