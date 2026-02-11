import { cn } from '@/lib/utils'

interface TableProps {
  children: React.ReactNode
  className?: string
}

export function Table({ children, className }: TableProps) {
  return (
    <div className="overflow-x-auto mb-md">
      <table className={cn('w-full border-collapse min-w-full', className)}>
        {children}
      </table>
    </div>
  )
}

interface TableHeaderProps {
  children: React.ReactNode
  className?: string
}

export function TableHeader({ children, className }: TableHeaderProps) {
  return (
    <thead className={cn('bg-neutral-100', className)}>{children}</thead>
  )
}

interface TableBodyProps {
  children: React.ReactNode
  className?: string
}

export function TableBody({ children, className }: TableBodyProps) {
  return <tbody className={className}>{children}</tbody>
}

interface TableRowProps {
  children: React.ReactNode
  className?: string
}

export function TableRow({ children, className }: TableRowProps) {
  return (
    <tr
      className={cn(
        'border-b border-neutral-300 even:bg-neutral-100/30 odd:bg-neutral-0',
        className
      )}
    >
      {children}
    </tr>
  )
}

interface TableHeadProps {
  children: React.ReactNode
  className?: string
  align?: 'left' | 'center' | 'right'
}

export function TableHead({
  children,
  className,
  align = 'left',
}: TableHeadProps) {
  return (
    <th
      className={cn(
        'p-sm text-small font-semibold text-neutral-900 uppercase tracking-wider border border-neutral-300',
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      {children}
    </th>
  )
}

interface TableCellProps {
  children: React.ReactNode
  className?: string
  align?: 'left' | 'center' | 'right'
}

export function TableCell({
  children,
  className,
  align = 'left',
}: TableCellProps) {
  return (
    <td
      className={cn(
        'p-sm text-body text-neutral-700 border border-neutral-300',
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      {children}
    </td>
  )
}
