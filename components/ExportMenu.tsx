"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Download, FileText, FileJson, FileCode } from "lucide-react"
import { Mnemonic } from "@/lib/store"

interface ExportMenuProps {
  mnemonics: Mnemonic[]
  disabled?: boolean
}

export function ExportMenu({ mnemonics, disabled }: ExportMenuProps) {
  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const exportAsTxt = () => {
    const content = mnemonics
      .map(
        (m) =>
          `═══════════════════════════════════════
${m.emoji} ${m.topic.toUpperCase()}
Vibe: ${m.vibe}
═══════════════════════════════════════

✨ Primary Mnemonic:
${m.primaryMnemonic}

🧠 Minimal Version:
${m.minimalVersion}

❓ Recall Drill:
${m.recallDrill}

Created: ${new Date(m.createdAt).toLocaleString()}
`
      )
      .join("\n\n")

    const header = `╔═══════════════════════════════════════╗
║     ✨ MNEMONA - Study Helper ✨       ║
║   Your Adorable Memory Companion!     ║
╚═══════════════════════════════════════╝

Total Mnemonics: ${mnemonics.length}
Exported: ${new Date().toLocaleString()}

`
    downloadFile(header + content, "mnemona-export.txt", "text/plain")
  }

  const exportAsMd = () => {
    const content = mnemonics
      .map(
        (m) =>
          `## ${m.emoji} ${m.topic}

**Vibe:** ${m.vibe}

### ✨ Primary Mnemonic
${m.primaryMnemonic}

### 🧠 Minimal Version
${m.minimalVersion}

### ❓ Recall Drill
> ${m.recallDrill}

---
*Created: ${new Date(m.createdAt).toLocaleString()}*
`
      )
      .join("\n\n")

    const header = `# ✨ Mnemona Export

> Your adorable memory companion! 💝

**Total Mnemonics:** ${mnemonics.length}  
**Exported:** ${new Date().toLocaleString()}

---

`
    downloadFile(header + content, "mnemona-export.md", "text/markdown")
  }

  const exportAsJson = () => {
    const flashcards = mnemonics.map((m) => ({
      id: m.id,
      front: m.topic,
      back: m.primaryMnemonic,
      minimal: m.minimalVersion,
      drill: m.recallDrill,
      vibe: m.vibe,
      emoji: m.emoji,
      createdAt: m.createdAt,
      tags: [m.vibe, "mnemonic", "study"],
    }))

    const exportData = {
      meta: {
        app: "Mnemona",
        version: "1.0.0",
        exportedAt: new Date().toISOString(),
        totalCards: flashcards.length,
      },
      flashcards,
    }

    downloadFile(
      JSON.stringify(exportData, null, 2),
      "mnemona-flashcards.json",
      "application/json"
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={disabled || mnemonics.length === 0}
          className="gap-1.5 sm:gap-2 text-xs sm:text-sm h-8 sm:h-9 px-2.5 sm:px-3
                     hover:bg-primary/5 hover:border-primary/50"
        >
          <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="hidden xs:inline">Export</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 sm:w-48">
        <DropdownMenuLabel className="flex items-center gap-2 text-xs sm:text-sm">
          <span>💾</span>
          <span>Export Format</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={exportAsTxt} className="gap-2 cursor-pointer">
          <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm">Plain Text (.txt)</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsMd} className="gap-2 cursor-pointer">
          <FileCode className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm">Markdown (.md)</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsJson} className="gap-2 cursor-pointer">
          <FileJson className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm">JSON Flashcards</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
