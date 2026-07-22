'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DocsPage() {
  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: `
        Welcome to ByteUI! This guide will help you get started with our collection of premium UI components.
        
        Our components are built with modern technologies:
        • React 18+ for component architecture
        • Framer Motion for smooth animations
        • Tailwind CSS for styling
        • TypeScript for type safety
      `,
    },
    {
      id: 'installation',
      title: 'Installation & Setup',
      content: `
        Adding ByteUI components to your React / Next.js project is quick and seamless with our CLI tool:

        1. Initialize ByteUI in your project root:
           npx @explorers_111/byteui init

           This creates a components.json configuration and adds required utility helpers.

        2. List available components anytime:
           npx @explorers_111/byteui list

        3. Add any component to your project:
           npx @explorers_111/byteui add <component-name>

           Example:
           npx @explorers_111/byteui add neo-brutalism/button
      `,
    },
    {
      id: 'usage',
      title: 'How to Use Components',
      content: `
        Getting started with our components is simple:

        1. Browse the Gallery: Visit /gallery to explore all available components
        2. Copy Install Command: Click the copy button on any component card or detail page
        3. Run CLI Command: Paste and execute the npx @explorers_111/byteui add command in your terminal
        4. Automatic Setup: The CLI installs component code, required npm dependencies, and CSS variables automatically
        5. Import & Use: Import the component from your components directory directly into your application!
      `,
    },
    {
      id: 'customization',
      title: 'Customization Guide',
      content: `
        All our components are built to be easily customizable. Here are some common modifications:

        Colors:
        - Most components use Tailwind CSS classes
        - Simply replace colors like 'purple-600' with your preferred color
        - Use CSS custom properties for dynamic theming

        Animation Speed:
        - Modify the 'duration' property in Framer Motion animations
        - duration: 2 (in seconds) controls animation speed

        Size:
        - Change width and height classes
        - Adjust padding and margins using Tailwind utilities

        Responsive Design:
        - Add responsive prefixes (md:, lg:) for different screen sizes
        - All components are mobile-friendly by default
      `,
    },
    {
      id: 'components-overview',
      title: 'Component Categories',
      content: `
        Our library is organized into three main categories:

        1. Micro-interactions
        These are small, delightful interactions that enhance user experience:
        - Hover effects and ripple buttons
        - Floating animations
        - Expandable cards
        - Slide-in menus

        2. Morphing Shapes
        Components that transform and morph smoothly:
        - Morphing cards that change shape
        - Orbital buttons with rotating elements
        - Shape-shifting elements

        3. Gradient Effects
        Beautiful gradient animations and visual effects:
        - Animated gradient text
        - Glassmorphism designs
        - Shimmer effects
        - Gradient backgrounds
      `,
    },
    {
      id: 'dependencies',
      title: 'Required Dependencies',
      content: `
        All components require these core dependencies:

        Core:
        - React 18+
        - React DOM 18+
        - Next.js 13+ (if using Next.js)
        - Tailwind CSS 3+

        Animation:
        - Framer Motion (for animations)

        Utilities:
        - clsx or classnames (for conditional classes)
        - class-variance-authority (for component variants)

        Optional:
        - Lucide React (for icons in some components)
        - react-syntax-highlighter (for code display)

        Most of these are pre-installed in standard Next.js projects.
      `,
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      content: `
        Here are some best practices when using ByteUI components:

        1. Performance
        - Use 'use client' directive for client-side components
        - Memoize components when using them multiple times
        - Lazy load components when not immediately needed

        2. Accessibility
        - Add proper ARIA labels to interactive elements
        - Ensure keyboard navigation works
        - Test with screen readers

        3. Theming
        - Use CSS custom properties for theme colors
        - Support both light and dark modes
        - Ensure sufficient color contrast

        4. Animation
        - Respect prefers-reduced-motion for accessibility
        - Don't overuse animations
        - Keep animations under 500ms for UI feedback

        5. Code Organization
        - Separate preview and usage logic
        - Create reusable variants
        - Document custom props
      `,
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      content: `
        Common issues and solutions:

        Issue: Framer Motion animations not working
        Solution: Make sure 'use client' directive is at the top of your file

        Issue: Tailwind styles not applying
        Solution: Ensure Tailwind CSS is properly configured in your project

        Issue: Components not importing correctly
        Solution: Check file paths and make sure files are in the correct directory

        Issue: Theme not switching
        Solution: Verify next-themes is properly set up in your layout.tsx

        Issue: Animations running on server-side rendering
        Solution: Wrap animations in a useEffect with mounted state check

        Need more help? Check the component preview page for working examples.
      `,
    },
    {
      id: 'contributing',
      title: 'Contributing Components',
      content: `
        We love community contributions! Here's how you can contribute:

        Component Requirements:
        - Unique and not commonly found elsewhere
        - Smooth, well-implemented animations
        - Fully functional and bug-free
        - Works with React 18+ and Tailwind CSS
        - Includes proper TypeScript types

        How to Contribute:
        1. Create an awesome component
        2. Test it thoroughly
        3. Document usage
        4. Submit with code example
        5. Wait for review and feedback

        Benefits:
        - Your component featured on ByteUI
        - Credit and attribution
        - Help the community with great components
        - Build your portfolio

        Contact us for more details about contributing!
      `,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-foreground/60">Learn how to use ByteUI components in your projects</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <div className="sticky top-24 space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 space-y-12"
          >
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className="scroll-mt-24"
              >
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <div className="prose prose-invert max-w-none space-y-4">
                  {section.content.split('\n').map((line, i) => {
                    if (!line.trim()) return null
                    if (line.trim().startsWith('•')) {
                      return (
                        <div key={i} className="text-foreground/70 ml-4">
                          {line.trim()}
                        </div>
                      )
                    }
                    if (line.trim().match(/^\d+\./)) {
                      return (
                        <div key={i} className="text-foreground/70 ml-4">
                          {line.trim()}
                        </div>
                      )
                    }
                    if (line.trim().match(/^[A-Z].*:$/)) {
                      return (
                        <h3 key={i} className="text-xl font-semibold mt-4 mb-2">
                          {line.trim()}
                        </h3>
                      )
                    }
                    return (
                      <p key={i} className="text-foreground/70 leading-relaxed">
                        {line.trim()}
                      </p>
                    )
                  })}
                </div>
              </motion.section>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-border"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-primary/30 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Browse our component gallery and find the perfect component for your next project.
            </p>
            <Link href="/gallery">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Components
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
