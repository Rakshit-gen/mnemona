"use client"

import * as React from "react"
import { Moon, Sun, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const cycleTheme = () => {
    // Cycle: light -> dark -> light
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="relative h-9 w-9 sm:h-10 sm:w-10">
        <span className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={cycleTheme}
      className="relative group h-9 w-9 sm:h-10 sm:w-10 
                 transition-all duration-300
                 hover:border-primary/50 hover:bg-primary/5
                 dark:hover:bg-primary/10
                 active:scale-95"
    >
      {/* Sun icon for light mode */}
      <Sun className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] rotate-0 scale-100 
                      transition-all duration-500 ease-out
                      dark:-rotate-90 dark:scale-0 
                      text-amber-500" />
      
      {/* Moon icon for dark mode */}
      <Moon className="absolute h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] rotate-90 scale-0 
                       transition-all duration-500 ease-out
                       dark:rotate-0 dark:scale-100 
                       text-violet-400" />
      
      {/* Sparkle effect on hover */}
      <Sparkles className="absolute h-2.5 w-2.5 sm:h-3 sm:w-3 
                           -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 
                           text-pink-400 animate-sparkle 
                           opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300" />
      
      <span className="sr-only">
        {resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </Button>
  )
}
