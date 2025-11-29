"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Brain, HelpCircle, Trash2, Copy, Check } from "lucide-react"
import { Mnemonic } from "@/lib/store"
import { useState } from "react"

interface MnemonicCardProps {
  mnemonic: Mnemonic
  onDelete?: (id: string) => void
  showDelete?: boolean
}

const vibeEmojis: Record<string, string> = {
  anime: "⚔️ Anime",
  stoic: "🏛️ Stoic",
  gamer: "🎮 Gamer",
  poetic: "🌸 Poetic",
  cyberpunk: "🔮 Cyberpunk",
  cute: "💝 Cute",
}

const vibeColors: Record<string, string> = {
  anime: "from-red-400 to-orange-400",
  stoic: "from-slate-400 to-gray-500",
  gamer: "from-green-400 to-emerald-500",
  poetic: "from-pink-400 to-rose-400",
  cyberpunk: "from-cyan-400 to-purple-500",
  cute: "from-pink-300 to-purple-400",
}

export function MnemonicCard({ mnemonic, onDelete, showDelete = true }: MnemonicCardProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    const text = `${mnemonic.topic}\n\n${mnemonic.primaryMnemonic}\n\nMinimal: ${mnemonic.minimalVersion}\n\nDrill: ${mnemonic.recallDrill}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString()
    } catch {
      return "Recently"
    }
  }

  return (
    <Card className="card-cute overflow-hidden group">
      <div className={`h-2 bg-gradient-to-r ${vibeColors[mnemonic.vibe] || vibeColors.cute}`} />
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg flex items-center gap-2 flex-wrap">
              <span className="text-2xl animate-bounce-gentle">{mnemonic.emoji}</span>
              <span className="text-gradient">{mnemonic.topic}</span>
            </CardTitle>
            <CardDescription className="mt-1">
              <Badge variant="cute" className="text-xs">
                {vibeEmojis[mnemonic.vibe] || "✨ Mixed"}
              </Badge>
            </CardDescription>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            {showDelete && onDelete && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive"
                onClick={() => onDelete(mnemonic.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Primary Mnemonic</span>
          </div>
          <p className="text-sm leading-relaxed bg-muted/50 p-3 rounded-xl">
            {mnemonic.primaryMnemonic}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-secondary-foreground">
            <Brain className="h-4 w-4" />
            <span>Minimal Version</span>
          </div>
          <p className="text-sm leading-relaxed bg-secondary/30 p-3 rounded-xl">
            {mnemonic.minimalVersion}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-accent-foreground">
            <HelpCircle className="h-4 w-4" />
            <span>Recall Drill</span>
          </div>
          <p className="text-sm leading-relaxed bg-accent/30 p-3 rounded-xl italic">
            {mnemonic.recallDrill}
          </p>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <p className="text-xs text-muted-foreground">
          Created {formatDate(mnemonic.createdAt)} 🐱✨
        </p>
      </CardFooter>
    </Card>
  )
}