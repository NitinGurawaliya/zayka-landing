import { FlexProps } from '@/types'
import { cn } from '@/lib/utils'

export function Flex({ 
  children, 
  className = '',
  direction = 'row',
  justify = 'start',
  align = 'start',
  wrap = 'nowrap',
  gap = '0'
}: FlexProps) {
  const flexClasses = cn(
    'flex',
    {
      'flex-row': direction === 'row',
      'flex-col': direction === 'col',
      'flex-row-reverse': direction === 'row-reverse',
      'flex-col-reverse': direction === 'col-reverse',
    },
    {
      'justify-start': justify === 'start',
      'justify-end': justify === 'end',
      'justify-center': justify === 'center',
      'justify-between': justify === 'between',
      'justify-around': justify === 'around',
      'justify-evenly': justify === 'evenly',
    },
    {
      'items-start': align === 'start',
      'items-end': align === 'end',
      'items-center': align === 'center',
      'items-baseline': align === 'baseline',
      'items-stretch': align === 'stretch',
    },
    {
      'flex-wrap': wrap === 'wrap',
      'flex-nowrap': wrap === 'nowrap',
      'flex-wrap-reverse': wrap === 'wrap-reverse',
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
    <div className={flexClasses}>
      {children}
    </div>
  )
} 