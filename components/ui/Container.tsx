import { ContainerProps } from '@/types'

export function Container({ 
  children, 
  className = '', 
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  )
} 