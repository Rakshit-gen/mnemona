"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Loader2, Wand2, Brain } from "lucide-react"
import { useMnemonaStore } from "@/lib/store"

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

  return (
    <Card className="card-cute">
      <CardHeader className="text-center pb-2">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Brain className="h-7 w-7 text-primary animate-bounce-gentle" />
          <span className="text-gradient">What do you want to remember?</span>
          <Sparkles className="h-5 w-5 text-pink-400 animate-sparkle" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Textarea
            placeholder="Type anything you want to memorize... ✨&#10;&#10;Examples:&#10;• The order of planets in our solar system&#10;• The steps of photosynthesis&#10;• Japanese hiragana characters&#10;• Programming concepts"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[140px] text-base resize-none pr-4 focus:border-primary"
            disabled={isLoading}
          />
          <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
            {input.length > 0 && `${input.length} chars`}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleGenerate}
            disabled={isLoading || !input.trim()}
            variant="cute"
            size="lg"
            className="flex-1 gap-2 text-base font-semibold"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Creating magic...
              </>
            ) : (
              <>
                <Wand2 className="h-5 w-5" />
                Generate Mnemonic ✨
              </>
            )}
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {["anime", "stoic", "gamer", "poetic", "cyberpunk", "cute"].map((vibe) => (
            <button
              key={vibe}
              onClick={() => setInput(input + (input ? " " : "") + `(${vibe} vibe)`)}
              className="px-3 py-1 text-xs rounded-full bg-muted hover:bg-muted/80 transition-colors"
              disabled={isLoading}
            >
              {vibe === "anime" && "⚔️"}
              {vibe === "stoic" && "🏛️"}
              {vibe === "gamer" && "🎮"}
              {vibe === "poetic" && "🌸"}
              {vibe === "cyberpunk" && "🔮"}
              {vibe === "cute" && "💝"}
              {" "}{vibe}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
