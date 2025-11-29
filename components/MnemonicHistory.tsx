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
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Loading your mnemonics...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8 px-4">
        <div className="text-4xl mb-4">😿</div>
        <p className="text-destructive font-medium">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {currentMnemonic && (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary animate-sparkle" />
            <span className="text-gradient">Latest Creation</span>
          </h2>
          <MnemonicCard mnemonic={currentMnemonic} onDelete={removeMnemonic} />
        </div>
      )}

      {mnemonics.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <History className="h-5 w-5 text-primary" />
              <span>Your Collection</span>
              <span className="text-sm font-normal text-muted-foreground">
                ({mnemonics.length} {mnemonics.length === 1 ? "mnemonic" : "mnemonics"})
              </span>
            </h2>
            <div className="flex gap-2">
              <ExportMenu mnemonics={mnemonics} />
              <Button
                variant="outline"
                size="sm"
                onClick={clearAll}
                className="gap-2 text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {mnemonics
              .filter((m) => m.id !== currentMnemonic?.id)
              .map((mnemonic) => (
                <MnemonicCard
                  key={mnemonic.id}
                  mnemonic={mnemonic}
                  onDelete={removeMnemonic}
                />
              ))}
          </div>
        </div>
      )}

      {mnemonics.length === 0 && !currentMnemonic && (
        <div className="text-center py-12 px-4">
          <div className="text-6xl mb-4 animate-float">🐱</div>
          <h3 className="text-xl font-semibold mb-2 text-gradient">
            No mnemonics yet!
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Start by typing something you want to remember above.
            I&apos;ll create a cute and memorable mnemonic just for you! ✨
          </p>
        </div>
      )}
    </div>
  )
}