import { Card } from './Card'
import { cn } from '@/lib/utils'

interface DataCardProps {
  value: string
  label: string
  description?: string
  className?: string
}

export function DataCard({
  value,
  label,
  description,
  className,
}: DataCardProps) {
  return (
    <Card className={cn('text-center', className)} hover>
      <div className="text-display text-primary-500 font-bold mb-xs">
        {value}
      </div>
      <div className="text-h4 text-neutral-900 font-semibold mb-xs">
        {label}
      </div>
      {description && (
        <div className="text-small text-neutral-500">{description}</div>
      )}
    </Card>
  )
}
