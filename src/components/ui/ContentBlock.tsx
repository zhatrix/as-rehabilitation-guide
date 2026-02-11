import { cn } from '@/lib/utils'

interface ContentBlockProps {
  children: React.ReactNode
  className?: string
  narrow?: boolean
}

export function ContentBlock({
  children,
  className,
  narrow = true,
}: ContentBlockProps) {
  return (
    <div
      className={cn(
        'w-full mx-auto px-sm md:px-md',
        narrow ? 'max-w-4xl' : 'max-w-container',
        className
      )}
    >
      {children}
    </div>
  )
}
