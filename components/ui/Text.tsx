import { TextProps } from '@/types'
import { cn } from '@/lib/utils'

export function Text({ 
  children, 
  size = 'md',
  weight = 'normal',
  color = 'secondary',
  className = '',
  align = 'left'
}: TextProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  }
  
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }
  
  const colorClasses = {
    primary: 'text-[#6366F1]',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    white: 'text-white'
  }
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const textClasses = cn(
    'leading-relaxed',
    sizeClasses[size],
    weightClasses[weight],
    colorClasses[color],
    alignClasses[align],
    className
  )

  return (
    <p className={textClasses}>
      {children}
    </p>
  )
} 