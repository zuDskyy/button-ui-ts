
import { cn } from './lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'


const buttonVariant = cva(
  "group flex  items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-rose-700 text-white p-1 rounded-full shadow-sm",
        deleteX: "bg-rose-500 text-white p-1 rounded-full shadow-sm",
        zinc: "group px-2 py-2 rounded-xl flex items-center gap-x-2 w-full hover:bg-zinc-700/10  dark:hover:bg-zinc-700/50 transition mb-1",
        slate: "bg-slate-700 text-white dark:bg-slate-600 rouded-full    hover:bg-zinc-800",

      },

      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },

    }
  }
)

export interface customButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariant> {
  variant: "default" | "destructive" | "zinc" | "slate" | "deleteX"
}




export const CustomButton = React.forwardRef<HTMLButtonElement, customButtonProps>(({ variant, size, ...props }, ref) => {
  return (

    <button className={cn(buttonVariant({ variant, size }))} ref={ref} {...props}></button>

  )
}
)

CustomButton.displayName = "CustomButton";




