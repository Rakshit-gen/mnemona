"use client"

import { ThemeToggle } from "@/components/ThemeToggle"
import { MnemonicGenerator } from "@/components/MnemonicGenerator"
import { MnemonicHistory } from "@/components/MnemonicHistory"
import { CuteDecorations, FloatingCat } from "@/components/CuteCats"
import { Sparkles, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen sparkle-bg relative">
      <CuteDecorations />
      
      <header className="sticky top-0 z-50 w-full border-b-2 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="text-3xl animate-bounce-gentle">🐱</span>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-pink-400 animate-sparkle" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Mnemona</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Your cute study helper ✨
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <FloatingCat className="w-12 h-12 opacity-70" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-gradient">Remember Anything</span>
              <span className="inline-block animate-wiggle ml-2">✨</span>
            </h2>
            <FloatingCat className="w-12 h-12 opacity-70 scale-x-[-1]" />
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Let me create adorable, memorable mnemonics tailored to your vibe!
            Whether you&apos;re an anime fan, a stoic philosopher, or just want something cute –
            I&apos;ve got you covered! 💖🐱
          </p>
        </div>

        <div className="space-y-8">
          <MnemonicGenerator />
          <MnemonicHistory />
        </div>
      </main>

      <footer className="border-t-2 mt-12 py-6 bg-muted/30 relative z-10">
        <div className="container px-4 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            Made with <Heart className="h-4 w-4 text-pink-500 animate-pulse" fill="currentColor" /> by Mnemona
            <span className="mx-2">•</span>
            Powered by Groq AI
            <span className="mx-2">•</span>
            <span>🐱</span> Happy studying!
            <span className="animate-sparkle ml-1">✨</span>
          </p>
        </div>
      </footer>
    </div>
  )
}