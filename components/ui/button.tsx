import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground 
                  hover:bg-primary/90 hover:-translate-y-0.5
                  shadow-md hover:shadow-lg
                  dark:shadow-primary/20 dark:hover:shadow-primary/30`,
        destructive: `bg-destructive text-destructive-foreground 
                      hover:bg-destructive/90 hover:-translate-y-0.5
                      shadow-md hover:shadow-lg`,
        outline: `border-2 border-primary/40 bg-background 
                  hover:bg-primary/5 hover:border-primary/60 hover:text-primary
                  dark:border-primary/30 dark:hover:border-primary/50
                  dark:hover:bg-primary/10`,
        secondary: `bg-secondary text-secondary-foreground 
                    hover:bg-secondary/80 hover:-translate-y-0.5`,
        ghost: `hover:bg-accent hover:text-accent-foreground
                dark:hover:bg-accent/80`,
        link: "text-primary underline-offset-4 hover:underline",
        cute: `bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 
               text-white font-semibold
               hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 
               hover:-translate-y-0.5
               shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-purple-500/30
               dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500
               dark:hover:from-pink-400 dark:hover:via-purple-400 dark:hover:to-indigo-400
               dark:shadow-pink-500/30 dark:hover:shadow-purple-500/40`,
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 sm:h-9 rounded-lg px-2.5 sm:px-3 text-xs sm:text-sm",
        lg: "h-11 sm:h-12 rounded-xl px-6 sm:px-8 text-sm sm:text-base",
        icon: "h-9 w-9 sm:h-10 sm:w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
