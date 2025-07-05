import { GridProps } from '@/types'
import { cn } from '@/lib/utils'

export function Grid({ 
  children, 
  className = '',
  cols = '1',
  gap = '0'
}: GridProps) {
  const gridClasses = cn(
    'grid',
    {
      'grid-cols-1': cols === '1',
      'grid-cols-2': cols === '2',
      'grid-cols-3': cols === '3',
      'grid-cols-4': cols === '4',
      'grid-cols-5': cols === '5',
      'grid-cols-6': cols === '6',
      'grid-cols-12': cols === '12',
    },
    {
      'gap-0': gap === '0',
      'gap-1': gap === '1',
      'gap-2': gap === '2',
      'gap-3': gap === '3',
      'gap-4': gap === '4',
      'gap-5': gap === '5',
      'gap-6': gap === '6',
      'gap-8': gap === '8',
      'gap-10': gap === '10',
      'gap-12': gap === '12',
      'gap-16': gap === '16',
    },
    className
  )

  return (
    <div className={gridClasses}>
      {children}
    </div>
  )
} 