import { SectionProps } from '@/types'
import { cn } from '@/lib/utils'

export function Section({ 
  children, 
  className = '',
  id,
  background = 'white',
  padding = 'lg'
}: SectionProps) {
  const baseClasses = 'relative isolate overflow-hidden'
  
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-r from-[#818cf8]/10 to-[#FF6B35]/10',
    primary: 'bg-[#6366F1] text-white'
  }
  
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 sm:py-20',
    xl: 'py-24 sm:py-32'
  }

  const sectionClasses = cn(
    baseClasses,
    backgroundClasses[background],
    paddingClasses[padding],
    className
  )

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  )
} 