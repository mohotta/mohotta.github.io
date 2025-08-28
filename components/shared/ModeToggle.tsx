"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { GoMoon, GoSun } from "react-icons/go"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => {
        setTheme(theme==='light'? 'dark': 'light')
      }}
      variant={'outline'}
      size={'icon'}
      className="w-12 h-12 rounded-full border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
    >
      {
        theme==='light'? 
          <GoSun className="w-5 h-5"/>
        :  
          <GoMoon className="w-5 h-5"/>
         
      }
    </Button>
  )
}
