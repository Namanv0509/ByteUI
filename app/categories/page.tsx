'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { allComponents } from '@/lib/components-data'
import { ComponentCard } from '@/components/component-card'
import { motion } from 'framer-motion'
import Link from 'next/link'

import {
  MorphCard,
  GradientText,
  RippleButton,
  FloatingCard,
  GlassButton,
  ShimmerText,
  ExpandableCard,
  OrbitalButton,
  SlideInMenu,
  AnimatedInput,
  ToggleSwitch,
  CheckboxNeumorphic,
  SearchInput,
  NeonCard,
  FlipCard,
  HolographicCard,
  TiltCard,
  SwipeButton,
  DownloadButton,
  GlowButton,
  GlitchButton,
  SpinnerLoader,
  DotsLoader,
  ProgressBarAnimated,
  HexagonLoader,
  MagicNavbar,
  SidebarMenu,
  CircularMenu,
  TooltipMenu,
  PulsingBadge,
  GlowingTag,
  GradientBorderBadge,
  StatusIndicator,
  InteractiveMap,
  ProgressButton3D
} from '@/components/component-previews'

const componentPreviewMap: { [key: string]: React.ReactNode } = {
  'morph-card': <MorphCard />,
  'gradient-text': <GradientText />,
  'floating-card': <FloatingCard />,
  'glass-button': <GlassButton />,
  'shimmer-text': <ShimmerText />,
  'expandable-card': <ExpandableCard />,
  'orbital-button': <OrbitalButton />,
  'slide-in-menu': <SlideInMenu />,
  'animated-input': <AnimatedInput />,
  'toggle-switch': <ToggleSwitch />,
  'checkbox-neumorphic': <CheckboxNeumorphic />,
  'search-input': <SearchInput />,
  'neon-card': <NeonCard />,
  'flip-card': <FlipCard />,
  'holographic-card': <HolographicCard />,
  'tilt-card': <TiltCard />,
  'swipe-button': <SwipeButton />,
  'download-button': <DownloadButton />,
  'ripple-button': <RippleButton />,
  'glow-button': <GlowButton />,
  'glitch-button': <GlitchButton />,
  'spinner-loader': <SpinnerLoader />,
  'dots-loader': <DotsLoader />,
  'progress-bar-animated': <ProgressBarAnimated />,
  'hexagon-loader': <HexagonLoader />,
  'magic-navbar': <MagicNavbar />,
  'sidebar-menu': <SidebarMenu />,
  'circular-menu': <CircularMenu />,
  'tooltip-menu': <TooltipMenu />,
  'pulsing-badge': <PulsingBadge />,
  'glowing-tag': <GlowingTag />,
  'gradient-border-badge': <GradientBorderBadge />,
  'status-indicator': <StatusIndicator />,
  'interactive-map': <InteractiveMap />,
  'progress-button-3d': <ProgressButton3D />,
}

const categories = [
  {
    name: 'Micro-interactions',
    description: 'Small, delightful interactions that enhance user experience',
    color: 'from-purple-600 to-pink-600',
    icon: '✨'},
  {
    name: 'Morphing Shapes',
    description: 'Components that transform and morph smoothly',
    color: 'from-blue-600 to-cyan-600',
    icon: '🎭'},
  {
    name: 'Gradient Effects',
    description: 'Beautiful gradient animations and effects',
    color: 'from-orange-600 to-red-600',
    icon: '🌈'},
  { name: 'Form Elements', description: 'Interactive form controls', color: 'from-green-500 to-emerald-600', icon: '📝' },
  { name: 'Cards & Containers', description: 'Layout containers and cards', color: 'from-blue-500 to-indigo-600', icon: '🗂️' },
  { name: 'Buttons & CTAs', description: 'Call to action elements', color: 'from-orange-500 to-red-600', icon: '🔘' },
  { name: 'Navigation', description: 'Menus and navigation bars', color: 'from-purple-500 to-violet-600', icon: '🗺️' },
  { name: 'Loaders & Progress', description: 'Loading states and progress bars', color: 'from-teal-500 to-cyan-600', icon: '⏳' },
  { name: 'Badges & Tags', description: 'Status indicators and labels', color: 'from-rose-500 to-pink-600', icon: '🏷️' }
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Component Categories</h1>
          <p className="text-xl text-foreground/60">Explore components organized by type and animation style</p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Components by Category */}
        {categories.map((category) => {
          const categoryComponents = allComponents.filter((comp) => comp.category === category.name)

          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                <p className="text-foreground/60">{category.description}</p>
              </div>

              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {categoryComponents.map((component) => (
                  <ComponentCard
                    key={component.id}
                    component={component}
                    preview={componentPreviewMap[component.id]}
                  />
                ))}
              </motion.div>
            </motion.div>
          )
        })}
      </section>

      <Footer />
    </div>
  )
}
