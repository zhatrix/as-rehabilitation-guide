import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-md py-sm text-body font-medium rounded-sm transition-all duration-base min-h-[48px] md:min-h-[44px] tracking-wider uppercase'

  const variants = {
    primary:
      'bg-primary-500 text-neutral-0 hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    secondary:
      'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-0 focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2',
  }

  const combinedClassName = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}
