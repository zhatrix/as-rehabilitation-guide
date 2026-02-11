import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  noBorder?: boolean
}

export function Card({
  children,
  className,
  hover = false,
  noBorder = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-neutral-0 p-md md:p-lg rounded-sm',
        !noBorder && 'border border-neutral-300',
        hover &&
          'transition-all duration-base hover:border-primary-500 hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  )
}
