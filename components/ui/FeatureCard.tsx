import { Card, Heading, Text, Icon, Badge } from '@/components/ui'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  className?: string
}

export function FeatureCard({ 
  title, 
  description, 
  icon: IconComponent, 
  badge,
  className = ''
}: FeatureCardProps) {
  return (
    <Card 
      variant="default" 
      padding="lg" 
      className={cn('hover:shadow-lg transition-all duration-200', className)}
    >
      <div className="flex flex-col items-center text-center">
        {badge && (
          <Badge variant="primary" size="sm" className="mb-4">
            {badge}
          </Badge>
        )}
        
        <div className="w-12 h-12 bg-[#6366F1]/10 rounded-xl flex items-center justify-center mb-4">
          <Icon icon={IconComponent} size="lg" className="text-[#6366F1]" />
        </div>
        
        <Heading level="h3" size="xl" align="center" className="mb-2">
          {title}
        </Heading>
        
        <Text align="center" color="secondary">
          {description}
        </Text>
      </div>
    </Card>
  )
} 