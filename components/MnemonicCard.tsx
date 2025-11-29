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
  anime: "from-red-400 to-orange-400 dark:from-red-500 dark:to-orange-500",
  stoic: "from-slate-400 to-gray-500 dark:from-slate-500 dark:to-gray-600",
  gamer: "from-green-400 to-emerald-500 dark:from-green-500 dark:to-emerald-600",
  poetic: "from-pink-400 to-rose-400 dark:from-pink-500 dark:to-rose-500",
  cyberpunk: "from-cyan-400 to-purple-500 dark:from-cyan-500 dark:to-purple-600",
  cute: "from-pink-300 to-purple-400 dark:from-pink-400 dark:to-purple-500",
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
      return new Date(dateString).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    } catch {
      return "Recently"
    }
  }

  return (
    <Card className="card-cute overflow-hidden group animate-slide-up">
      {/* Gradient top bar */}
      <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${vibeColors[mnemonic.vibe] || vibeColors.cute}`} />
      
      <CardHeader className="pb-2 sm:pb-3 px-4 sm:px-6 pt-4 sm:pt-5">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base sm:text-lg flex items-start gap-1.5 sm:gap-2 flex-wrap">
              <span className="text-xl sm:text-2xl animate-bounce-gentle flex-shrink-0">{mnemonic.emoji}</span>
              <span className="text-gradient leading-tight break-words">{mnemonic.topic}</span>
            </CardTitle>
            <CardDescription className="mt-1.5 sm:mt-2">
              <Badge variant="cute" className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5">
                {vibeEmojis[mnemonic.vibe] || "✨ Mixed"}
              </Badge>
            </CardDescription>
          </div>
          
          {/* Action buttons - always visible on mobile, hover on desktop */}
          <div className="flex gap-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9 
                         sm:opacity-0 sm:group-hover:opacity-100 
                         transition-all duration-200
                         hover:bg-primary/10 hover:text-primary"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500" />
              ) : (
                <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              )}
            </Button>
            {showDelete && onDelete && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9 
                           sm:opacity-0 sm:group-hover:opacity-100 
                           transition-all duration-200
                           text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={() => onDelete(mnemonic.id)}
              >
                <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
        {/* Primary Mnemonic */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span>Primary Mnemonic</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed bg-muted/40 dark:bg-muted/30 p-2.5 sm:p-3 rounded-xl 
                        border border-primary/10 dark:border-primary/5">
            {mnemonic.primaryMnemonic}
          </p>
        </div>

        {/* Minimal Version */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-secondary-foreground">
            <Brain className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span>Minimal Version</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed bg-secondary/20 dark:bg-secondary/15 p-2.5 sm:p-3 rounded-xl 
                        border border-secondary/30 dark:border-secondary/20">
            {mnemonic.minimalVersion}
          </p>
        </div>

        {/* Recall Drill */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-accent-foreground">
            <HelpCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span>Recall Drill</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed bg-accent/20 dark:bg-accent/15 p-2.5 sm:p-3 rounded-xl italic 
                        border border-accent/30 dark:border-accent/20">
            {mnemonic.recallDrill}
          </p>
        </div>
      </CardContent>

      <CardFooter className="pt-0 px-4 sm:px-6 pb-4 sm:pb-5">
        <p className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
          <span>Created {formatDate(mnemonic.createdAt)}</span>
          <span className="hidden xs:inline">🐱✨</span>
        </p>
      </CardFooter>
    </Card>
  )
}
