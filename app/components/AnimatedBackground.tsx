'use client'

import React, { useEffect, useState } from 'react'

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Minimal breathing orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-3xl opacity-60" style={{animation: 'breathe 8s ease-in-out infinite'}}></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-primary/12 rounded-full blur-3xl opacity-50" style={{animation: 'breathe 12s ease-in-out infinite', animationDelay: '4s'}}></div>
      
      {/* Fluid cursor follower */}
      <div 
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-1000 ease-out" 
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      ></div>
      
      {/* Secondary fluid layer */}
      <div 
        className="absolute w-64 h-64 rounded-full pointer-events-none transition-all duration-1500 ease-out" 
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 80%)',
          filter: 'blur(60px)'
        }}
      ></div>

      {/* Subtle floating dots */}
      <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-primary/30 rounded-full blur-sm opacity-40" style={{animation: 'slow-float 15s ease-in-out infinite'}}></div>
      <div className="absolute bottom-1/2 right-1/3 w-1 h-1 bg-primary/35 rounded-full blur-sm opacity-30" style={{animation: 'slow-float 18s ease-in-out infinite', animationDelay: '6s'}}></div>

      {/* Minimal animations */}
      <style jsx>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        
        @keyframes slow-float {
          0%, 100% { transform: translateY(0); opacity: 0.15; }
          50% { transform: translateY(-8px); opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}

export default AnimatedBackground