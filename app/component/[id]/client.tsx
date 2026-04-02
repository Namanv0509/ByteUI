'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { allComponents } from '@/lib/components-data'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
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
  'ripple-button': <RippleButton />,
  'tooltip-menu': <TooltipMenu />,
  'pulsing-badge': <PulsingBadge />,
  'glowing-tag': <GlowingTag />,
  'gradient-border-badge': <GradientBorderBadge />,
  'status-indicator': <StatusIndicator />,
  'interactive-map': <InteractiveMap />,
  'progress-button-3d': <ProgressButton3D />
}

export function ClientComponentDetail({ component }: { component: any }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(component.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <Link href="/gallery" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={20} />
            Back to Gallery
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Preview Box */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-border p-12 flex items-center justify-center min-h-96">
              {componentPreviewMap[component.id] || <p>Preview not available</p>}
            </div>

            {/* Info */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{component.name}</h1>
              <p className="text-lg text-foreground/70">{component.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {component.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Category */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-foreground/60 mb-2">Category</p>
                <p className="font-semibold">{component.category}</p>
              </div>
            </div>
          </motion.div>

          {/* Code Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Component Code</h2>
              <motion.button
                onClick={handleCopy}
                className="px-4 py-2 rounded-lg bg-yellow-500 dark:bg-yellow-600 text-black font-semibold flex items-center gap-2 hover:bg-yellow-600 dark:hover:bg-yellow-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? (
                  <>
                    <Check size={18} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={18} /> Copy Code
                  </>
                )}
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl overflow-hidden border border-border"
            >
              <SyntaxHighlighter
                language="tsx"
                style={atomOneDark}
                customStyle={{
                  padding: '20px',
                  margin: 0,
                  fontSize: '14px',
                  lineHeight: '1.5',
                }}
                wrapLines
              >
                {component.code}
              </SyntaxHighlighter>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 space-y-3"
            >
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">How to Use</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/70">
                <li>Copy the code using the button above</li>
                <li>Paste it into your project</li>
                <li>Make sure you have Framer Motion installed</li>
                <li>Import and use the component in your application</li>
              </ol>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-border"
        >
          <h2 className="text-3xl font-bold mb-8">Similar Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allComponents
              .filter((c: any) => c.category === component.category && c.id !== component.id)
              .slice(0, 3)
              .map((relatedComp: any) => (
                <Link key={relatedComp.id} href={`/component/${relatedComp.id}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="p-4 rounded-xl border border-border hover:border-yellow-500 transition-colors cursor-pointer"
                  >
                    <h3 className="font-bold text-lg mb-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                      {relatedComp.name}
                    </h3>
                    <p className="text-sm text-foreground/60">{relatedComp.description}</p>
                  </motion.div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
