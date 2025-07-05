# Zayka QR Menu - Refactored

A modern, maintainable, and reusable React/Next.js application for restaurant QR menu solutions.

## 🏗️ Project Structure

```
zayka-qr-menu/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── contact/           # Contact page
│   └── onboarding/        # Onboarding page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Container.tsx # Layout container
│   │   ├── Flex.tsx      # Flexbox wrapper
│   │   ├── Grid.tsx      # Grid layout wrapper
│   │   ├── Button.tsx    # Button component
│   │   ├── Card.tsx      # Card component
│   │   ├── Section.tsx   # Section wrapper
│   │   ├── Heading.tsx   # Typography heading
│   │   ├── Text.tsx      # Typography text
│   │   ├── Animation.tsx # Framer motion wrapper
│   │   ├── Badge.tsx     # Badge component
│   │   ├── Icon.tsx      # Icon wrapper
│   │   └── index.ts      # UI components export
│   ├── Header.tsx        # Navigation header
│   ├── HeroSection.tsx   # Hero section
│   ├── PricingSection.tsx # Pricing section
│   ├── BusinessTypeSelector.tsx # Business type selector
│   ├── ReasonsToLoveSection.tsx # Features section
│   ├── ContactSection.tsx # Contact section
│   ├── Footer.tsx        # Footer component
│   └── WhatsAppChat.tsx  # WhatsApp integration
├── types/                # TypeScript interfaces
│   └── index.ts         # All type definitions
├── constants/           # Application constants
│   └── index.ts        # Navigation, pricing, business types
├── lib/                # Utility functions
│   └── utils.ts        # Helper functions
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx  # Mobile detection hook
│   └── use-toast.ts    # Toast notification hook
└── public/             # Static assets
```

## 🎨 Design System

### Reusable UI Components

The project now uses a comprehensive design system with reusable components:

#### Layout Components
- **Container**: Consistent max-width and padding
- **Flex**: Flexible layout with configurable direction, justify, align, wrap, and gap
- **Grid**: Grid layout with configurable columns and gaps
- **Section**: Section wrapper with background and padding options

#### Interactive Components
- **Button**: Multiple variants (primary, secondary, outline, ghost, gradient), sizes, and icon support
- **Card**: Different variants (default, elevated, outlined) with configurable padding
- **Badge**: Status indicators with various colors and sizes
- **Icon**: Consistent icon sizing and styling

#### Typography Components
- **Heading**: Semantic headings with configurable levels and sizes
- **Text**: Consistent text styling with size, weight, color, and alignment options

#### Animation Components
- **Animation**: Framer motion wrapper with predefined animations (fadeIn, slideUp, slideDown, etc.)

### Usage Examples

```tsx
// Layout
<Container>
  <Flex direction="col" align="center" gap="6">
    <Grid cols="3" gap="8">
      {/* Grid items */}
    </Grid>
  </Flex>
</Container>

// Interactive elements
<Button 
  variant="gradient" 
  size="lg" 
  icon={ArrowRightIcon}
  iconPosition="right"
  href="/onboarding"
>
  Get Started
</Button>

// Typography
<Heading level="h1" size="4xl" align="center">
  Welcome to Zayka
</Heading>
<Text size="lg" color="secondary" align="center">
  Transform your restaurant menu into a digital experience
</Text>

// Cards and badges
<Card variant="elevated" padding="lg">
  <Badge variant="primary" size="sm">New</Badge>
  <Heading level="h3" size="xl">Feature Title</Heading>
  <Text>Feature description</Text>
</Card>

// Animations
<Animation animation="slideUp" delay={0.2}>
  <div>Animated content</div>
</Animation>
```

## 🔧 Configuration

### TypeScript Interfaces

All component props and data structures are defined in `types/index.ts`:

- Navigation items
- Pricing tiers
- Business types
- Contact form data
- Component props interfaces

### Constants

Application data is centralized in `constants/index.ts`:

- Navigation menu items
- Pricing plans
- Business type definitions
- Contact information
- Social media links
- Feature lists

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📱 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript support with strict typing
- **Component Reusability**: Modular, composable components
- **Performance**: Optimized with Next.js 14 and React 18
- **Animations**: Smooth animations with Framer Motion
- **Accessibility**: WCAG compliant components
- **SEO**: Optimized for search engines

## 🎯 Key Improvements

### Before Refactoring
- Hardcoded styles and classes
- Duplicate code across components
- No consistent design system
- Mixed concerns in components
- Difficult to maintain and extend

### After Refactoring
- **Reusable UI Components**: Consistent design system
- **Type Safety**: Full TypeScript interfaces
- **Centralized Data**: Constants and configuration
- **Modular Architecture**: Clean separation of concerns
- **Maintainable Code**: Easy to update and extend
- **Developer Experience**: Better DX with clear patterns

## 🛠️ Development

### Adding New Components

1. Create the component in `components/ui/`
2. Add TypeScript interface in `types/index.ts`
3. Export from `components/ui/index.ts`
4. Use throughout the application

### Adding New Constants

1. Add data to `constants/index.ts`
2. Import and use in components
3. Update TypeScript interfaces if needed

### Styling Guidelines

- Use Tailwind CSS utility classes
- Leverage the design system components
- Maintain consistency with existing patterns
- Follow mobile-first responsive design

## 📄 License

This project is licensed under the MIT License. 