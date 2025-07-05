import { ButtonProps } from '@/types'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-[#6366F1] text-white hover:bg-[#5B5BD6] focus:ring-[#6366F1] shadow-lg hover:shadow-xl',
    secondary: 'bg-[#FF6B35] text-white hover:bg-[#E85A2C] focus:ring-[#FF6B35] shadow-lg hover:shadow-xl',
    outline: 'bg-white border-2 border-[#6366F1] text-[#6366F1] hover:bg-[#f5f7ff] focus:ring-[#6366F1]',
    ghost: 'bg-transparent text-[#6366F1] hover:bg-[#f5f7ff] focus:ring-[#6366F1]',
    gradient: 'bg-gradient-to-r from-[#818cf8] to-[#6366F1] text-white hover:from-[#6366F1] hover:to-[#818cf8] focus:ring-[#6366F1] shadow-lg hover:shadow-xl'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-2.5 text-sm rounded-xl',
    lg: 'px-6 py-3 text-base rounded-xl',
    xl: 'px-8 py-4 text-lg rounded-xl'
  }

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {Icon && iconPosition === 'left' && !loading && <Icon className="h-4 w-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-4 w-4" />}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  )
} 