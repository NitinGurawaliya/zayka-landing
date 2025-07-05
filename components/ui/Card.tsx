import { CardProps } from '@/types'
import { cn } from '@/lib/utils'

export function Card({ 
  children, 
  className = '',
  variant = 'default',
  padding = 'md',
  style
}: CardProps) {
  const baseClasses = 'rounded-xl transition-all duration-200'
  
  const variantClasses = {
    default: 'bg-white border border-gray-200 shadow-sm hover:shadow-md',
    elevated: 'bg-white shadow-lg hover:shadow-xl border-0',
    outlined: 'bg-white border-2 border-gray-200 shadow-none hover:border-gray-300'
  }
  
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  }

  const cardClasses = cn(
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    className
  )

  return (
    <div className={cardClasses} style={style}>
      {children}
    </div>
  )
} 