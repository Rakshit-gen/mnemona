import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `flex min-h-[100px] sm:min-h-[120px] w-full rounded-xl 
           border-2 border-input bg-background 
           px-3 sm:px-4 py-2.5 sm:py-3 
           text-sm sm:text-base
           ring-offset-background 
           placeholder:text-muted-foreground/70
           focus-visible:outline-none 
           focus-visible:ring-2 focus-visible:ring-ring/50 
           focus-visible:ring-offset-2 
           focus-visible:border-primary/50
           disabled:cursor-not-allowed disabled:opacity-50 
           transition-all duration-200 resize-none
           hover:border-primary/30
           dark:bg-background/50
           dark:hover:border-primary/40
           dark:focus-visible:border-primary/60`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
