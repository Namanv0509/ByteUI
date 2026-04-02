'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { allComponents } from '@/lib/components-data'
import { ComponentCard } from '@/components/component-card'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter } from 'lucide-react'

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
  'ripple-button': <RippleButton />,
  'pulsing-badge': <PulsingBadge />,
  'glowing-tag': <GlowingTag />,
  'gradient-border-badge': <GradientBorderBadge />,
  'status-indicator': <StatusIndicator />,
  'interactive-map': <InteractiveMap />,
  'progress-button-3d': <ProgressButton3D />,
}

export default function GalleryPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredComponents = allComponents.filter((comp) => {
    const matchesSearch = comp.name.toLowerCase().includes(search.toLowerCase()) ||
      comp.description.toLowerCase().includes(search.toLowerCase()) ||
      comp.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    
    const matchesCategory = !selectedCategory || comp.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const categories = ['Micro-interactions', 'Morphing Shapes', 'Gradient Effects', 'Form Elements', 'Cards & Containers', 'Buttons & CTAs', 'Navigation', 'Loaders & Progress', 'Badges & Tags']

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Component Gallery</h1>
          <p className="text-xl text-foreground/60">Browse and discover unique animated components</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8 max-w-2xl mx-auto"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 justify-center flex-wrap mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Components Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredComponents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-lg text-foreground/60">No components found. Try adjusting your search.</p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredComponents.map((component) => (
              <ComponentCard
                key={component.id}
                component={component}
                preview={componentPreviewMap[component.id]}
              />
            ))}
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  )
}
