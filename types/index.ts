// Navigation types
export interface NavigationItem {
  name: string
  href: string
}

// Pricing types
export interface PricingTier {
  name: string
  id: string
  href: string
  price: {
    monthly: string
  }
  description: string
  features: string[]
  featured: boolean
}

// Business type selector types
export interface BusinessType {
  id: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  phone: string
  businessName: string
  businessType: string
  message: string
}

// Component props types
export interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export interface FlexProps {
  children: React.ReactNode
  className?: string
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'
}

export interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: '1' | '2' | '3' | '4' | '5' | '6' | '12'
  gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  href?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  icon?: React.ComponentType<{ className?: string }>
  iconPosition?: 'left' | 'right'
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  style?: React.CSSProperties
}

export interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'gradient' | 'primary'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface HeadingProps {
  children: React.ReactNode
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  className?: string
  align?: 'left' | 'center' | 'right'
}

export interface TextProps {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'primary' | 'secondary' | 'muted' | 'white'
  className?: string
  align?: 'left' | 'center' | 'right'
}

// Animation types
export interface AnimationProps {
  children: React.ReactNode
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'bounce'
  delay?: number
  duration?: number
  className?: string
}

// WhatsApp chat types
export interface WhatsAppConfig {
  phoneNumber: string
  defaultMessage: string
  className?: string
} 