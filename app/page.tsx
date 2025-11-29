"use client"

import { ThemeToggle } from "@/components/ThemeToggle"
import { MnemonicGenerator } from "@/components/MnemonicGenerator"
import { MnemonicHistory } from "@/components/MnemonicHistory"
import { CuteDecorations, FloatingCat } from "@/components/CuteCats"
import { Sparkles, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen min-h-dvh sparkle-bg relative overflow-x-hidden">
      <CuteDecorations />
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-2 border-border/40 glass safe-area-inset-x">
        <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative flex-shrink-0">
              <span className="text-2xl sm:text-3xl animate-bounce-gentle block">🐱</span>
              <Sparkles className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-3 w-3 sm:h-4 sm:w-4 text-pink-400 animate-sparkle" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-bold text-gradient truncate">
                Mnemona
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground hidden xs:block truncate">
                Your cute study helper ✨
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 sm:px-6 py-6 sm:py-8 md:py-10 max-w-4xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
            <FloatingCat className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-70 hidden xs:block" />
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-gradient-shimmer">Remember Anything</span>
              <span className="inline-block animate-wiggle ml-1 sm:ml-2">✨</span>
            </h2>
            <FloatingCat className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-70 scale-x-[-1] hidden xs:block" />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-2 leading-relaxed">
            Let me create adorable, memorable mnemonics tailored to your vibe!
            <span className="hidden sm:inline"> Whether you&apos;re an anime fan, a stoic philosopher, or just want something cute –
            I&apos;ve got you covered!</span>
            <span className="ml-1">💖🐱</span>
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          <MnemonicGenerator />
          <MnemonicHistory />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border/40 mt-8 sm:mt-12 py-4 sm:py-6 glass relative z-10 safe-area-inset-bottom">
        <div className="container px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-1 sm:gap-1.5 flex-wrap">
            <span className="flex items-center gap-1">
              Made with 
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-pink-500 animate-pulse-soft" fill="currentColor" />
            </span>
            <span className="hidden xs:inline">by Mnemona</span>
            <span className="mx-1 sm:mx-2 opacity-40">•</span>
            <span className="hidden sm:inline">Powered by Groq AI</span>
            <span className="hidden sm:inline mx-2 opacity-40">•</span>
            <span className="flex items-center gap-1">
              <span>🐱</span> 
              <span className="hidden xs:inline">Happy studying!</span>
              <span className="animate-sparkle">✨</span>
            </span>
          </p>
        </div>
      </footer>
    </div>
  )
}
