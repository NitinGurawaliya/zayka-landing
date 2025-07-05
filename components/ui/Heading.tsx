import { HeadingProps } from '@/types'
import { cn } from '@/lib/utils'

export function Heading({ 
  children, 
  level = 'h2',
  size = 'lg',
  className = '',
  align = 'left'
}: HeadingProps) {
  const Component = level
  
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl'
  }
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const headingClasses = cn(
    'font-bold tracking-tight text-gray-900',
    sizeClasses[size],
    alignClasses[align],
    className
  )

  return (
    <Component className={headingClasses}>
      {children}
    </Component>
  )
} 