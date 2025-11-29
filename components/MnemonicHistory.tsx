"use client"

import { useMnemonaStore } from "@/lib/store"
import { MnemonicCard } from "@/components/MnemonicCard"
import { ExportMenu } from "@/components/ExportMenu"
import { Button } from "@/components/ui/button"
import { Trash2, Sparkles, History, Loader2 } from "lucide-react"

export function MnemonicHistory() {
  const { mnemonics, removeMnemonic, clearAll, currentMnemonic, error, hasHydrated } = useMnemonaStore()

  if (!hasHydrated) {
    return (
      <div className="flex items-center justify-center py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center">
          <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-primary" />
          <span className="text-sm sm:text-base text-muted-foreground">Loading your mnemonics...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-6 sm:py-8 px-4 animate-fade-in">
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">😿</div>
        <p className="text-destructive font-medium text-sm sm:text-base">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-5 sm:space-y-6 md:space-y-8">
      {/* Latest Creation */}
      {currentMnemonic && (
        <div className="space-y-2.5 sm:space-y-3 animate-fade-in-up">
          <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-1.5 sm:gap-2 px-1">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-sparkle flex-shrink-0" />
            <span className="text-gradient">Latest Creation</span>
          </h2>
          <MnemonicCard mnemonic={currentMnemonic} onDelete={removeMnemonic} />
        </div>
      )}

      {/* Collection */}
      {mnemonics.length > 0 && (
        <div className="space-y-3 sm:space-y-4 animate-fade-in-up stagger-2">
          {/* Header */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 xs:gap-3 px-1">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <History className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span>Your Collection</span>
              <span className="text-xs sm:text-sm font-normal text-muted-foreground ml-1">
                ({mnemonics.length} {mnemonics.length === 1 ? "mnemonic" : "mnemonics"})
              </span>
            </h2>
            <div className="flex gap-2 self-end xs:self-auto">
              <ExportMenu mnemonics={mnemonics} />
              <Button
                variant="outline"
                size="sm"
                onClick={clearAll}
                className="gap-1.5 sm:gap-2 text-destructive hover:text-destructive 
                           hover:bg-destructive/10 hover:border-destructive/50
                           text-xs sm:text-sm h-8 sm:h-9 px-2.5 sm:px-3"
              >
                <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Clear All</span>
                <span className="xs:hidden">Clear</span>
              </Button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2">
            {mnemonics
              .filter((m) => m.id !== currentMnemonic?.id)
              .map((mnemonic, index) => (
                <div 
                  key={mnemonic.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <MnemonicCard
                    mnemonic={mnemonic}
                    onDelete={removeMnemonic}
                  />
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {mnemonics.length === 0 && !currentMnemonic && (
        <div className="text-center py-10 sm:py-12 md:py-16 px-4 animate-fade-in">
          <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 animate-float">🐱</div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gradient">
            No mnemonics yet!
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-sm sm:max-w-md mx-auto leading-relaxed">
            Start by typing something you want to remember above.
            <span className="hidden sm:inline"> I&apos;ll create a cute and memorable mnemonic just for you!</span>
            <span className="ml-1">✨</span>
          </p>
        </div>
      )}
    </div>
  )
}
