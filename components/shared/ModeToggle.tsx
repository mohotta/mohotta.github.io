"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
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
      variant={'secondary'}
      size={'icon'}
      className="rounded-full"
    >
      {
        theme==='light'? 
          <GoSun/>
        :  
          <GoMoon/>
         
      }
    </Button>
  )
}
