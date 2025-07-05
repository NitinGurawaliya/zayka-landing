import { cn } from '@/lib/utils'

interface IconProps {
  icon: React.ComponentType<{ className?: string }>
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Icon({ 
  icon: IconComponent, 
  size = 'md',
  className = ''
}: IconProps) {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }

  const iconClasses = cn(
    sizeClasses[size],
    className
  )

  return <IconComponent className={iconClasses} />
} 