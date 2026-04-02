'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center space-y-8"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
                Premium UI Components
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Discover a library of  animated components that stand out. Beautiful micro-interactions, morphing shapes, and gradient effects ready to copy and use.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
              <Link href="/gallery">
                <motion.button
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Components
                </motion.button>
              </Link>
              <Link href="/docs">
                <motion.button
                  className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Documentation
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose ByteUI?</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Hand-crafted components that go beyond the ordinary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Unique Design',
              description: 'No generic components. Everything is crafted to stand out.',
            },
            {
              title: 'Smooth Animations',
              description: 'Built with Framer Motion for buttery smooth animations.',
            },
            {
              title: 'Easy to Use',
              description: 'Copy the code with a single click. No setup required.',
            },
            {
              title: 'Customizable',
              description: 'Easily modify colors, sizes, and animations to fit your needs.',
            },
            {
              title: 'Dark & Light Mode',
              description: 'All components support both light and dark themes.',
            },
            {
              title: 'TypeScript Ready',
              description: 'Full TypeScript support with proper type definitions.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Component Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Component Categories</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore components organized by type and animation style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Micro-interactions',
              description: 'Subtle, delightful interactions that enhance user experience',
              count: '4',
            },
            {
              name: 'Morphing Shapes',
              description: 'Animated elements that transform and shift smoothly',
              count: '3',
            },
            {
              name: 'Gradient Effects',
              description: 'Beautiful gradient and glass-morphism effects',
              count: '3',
            },
          ].map((category, index) => (
            <Link key={index} href="/categories">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 group-hover:bg-primary/20 transition-colors">
                  {category.count} Components
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                <p className="text-foreground/60">{category.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Ready to explore?</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Browse our collection of unique components and find what you need for your next project.
          </p>
          <Link href="/gallery">
            <motion.button
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Components
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
