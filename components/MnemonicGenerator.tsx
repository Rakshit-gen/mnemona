"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Loader2, Wand2, Brain } from "lucide-react"
import { useMnemonaStore } from "@/lib/store"

const vibeOptions = [
  { key: "anime", emoji: "⚔️", label: "anime" },
  { key: "stoic", emoji: "🏛️", label: "stoic" },
  { key: "gamer", emoji: "🎮", label: "gamer" },
  { key: "poetic", emoji: "🌸", label: "poetic" },
  { key: "cyberpunk", emoji: "🔮", label: "cyberpunk" },
  { key: "cute", emoji: "💝", label: "cute" },
]

export function MnemonicGenerator() {
  const [input, setInput] = useState("")
  const { isLoading, setLoading, addMnemonic, setError } = useMnemonaStore()

  const handleGenerate = async () => {
    if (!input.trim()) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: input }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate mnemonic")
      }

      const data = await response.json()
      addMnemonic(data)
      setInput("")
    } catch (error) {
      setError("Oops! Something went wrong. Please try again! 💔")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleVibeClick = (vibe: string) => {
    const vibeText = `(${vibe} vibe)`
    if (!input.includes(vibeText)) {
      setInput(input + (input && !input.endsWith(" ") ? " " : "") + vibeText)
    }
  }

  return (
    <Card className="card-cute animate-scale-in">
      <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
        <CardTitle className="flex items-center justify-center gap-1.5 sm:gap-2 text-xl sm:text-2xl flex-wrap">
          <Brain className="h-5 w-5 sm:h-7 sm:w-7 text-primary animate-bounce-gentle flex-shrink-0" />
          <span className="text-gradient">What do you want to remember?</span>
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400 animate-sparkle flex-shrink-0" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-5 px-4 sm:px-6">
        <div className="relative group">
          <Textarea
            placeholder="Type anything you want to memorize... ✨&#10;&#10;Examples:&#10;• The order of planets in our solar system&#10;• The steps of photosynthesis&#10;• Japanese hiragana characters&#10;• Programming concepts"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[120px] sm:min-h-[140px] text-sm sm:text-base resize-none pr-4 
                       transition-all duration-300 
                       focus:border-primary focus:ring-2 focus:ring-primary/20
                       placeholder:text-muted-foreground/70"
            disabled={isLoading}
          />
          <div className="absolute bottom-2.5 sm:bottom-3 right-3 sm:right-4 text-[10px] sm:text-xs text-muted-foreground/70 
                          opacity-0 group-focus-within:opacity-100 transition-opacity duration-200">
            {input.length > 0 && `${input.length} chars`}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleGenerate}
            disabled={isLoading || !input.trim()}
            variant="cute"
            size="lg"
            className="w-full gap-2 text-sm sm:text-base font-semibold h-11 sm:h-12 
                       transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                <span className="hidden xs:inline">Creating magic...</span>
                <span className="xs:hidden">Loading...</span>
              </>
            ) : (
              <>
                <Wand2 className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden xs:inline">Generate Mnemonic ✨</span>
                <span className="xs:hidden">Generate ✨</span>
              </>
            )}
          </Button>
        </div>

        {/* Vibe Tags */}
        <div className="pt-1 sm:pt-2">
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center mb-2 sm:mb-3">
            Add a vibe to your mnemonic:
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {vibeOptions.map(({ key, emoji, label }) => (
              <button
                key={key}
                onClick={() => handleVibeClick(label)}
                disabled={isLoading}
                className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-full 
                           bg-muted/80 hover:bg-muted text-muted-foreground
                           hover:text-foreground
                           transition-all duration-200 
                           hover:scale-105 hover:shadow-sm
                           active:scale-95
                           disabled:opacity-50 disabled:cursor-not-allowed
                           border border-transparent hover:border-primary/20
                           focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <span className="mr-0.5 sm:mr-1">{emoji}</span>
                <span className="hidden xs:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
