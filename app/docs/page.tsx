'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageShell } from '@/components/page-shell'
import Button from '@/components/neo-brutalism/button'
import Card from '@/components/neo-brutalism/card'
import { NPM_PACKAGE_URL } from '@/lib/links'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'How to install and use ByteUI in your project',
    href: '/docs/getting-started',
    image: '/image/Abstract-1.svg',
  },
  {
    id: 'collections',
    title: 'Collections',
    description: 'Browse available collections (design styles) and tokens.',
    href: '/docs/collections',
    image: '/image/Eye.svg',
  },
  {
    id: 'about',
    title: 'About',
    description: 'What is ByteUI?',
    href: '/docs/about',
    image: '/image/Smile.svg',
  },
]

export default function DocsPage() {
  const router = useRouter()

  return (
    <PageShell>
      <Navbar />


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14 space-y-4"
        >
          <h1 className="page-title">Documentation</h1>
          <p className="page-subtitle">
            Install with the CLI, own the code, style with neo tokens.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {docSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.08 }}
            >
              <Card
                title={section.title}
                description={section.description}
                image={section.image}
                onClick={() => router.push(section.href)}
                className='cursor-pointer scale-102 mx-12'
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="neo-panel neo-panel-accent p-10 text-center space-y-10">
            <h2 className="section-title cta-doc">Ready to build?</h2>
            <p className="section-copy max-w-xl mx-auto cta-doc">
              Browse the gallery and add components with one command.
            </p>
            <code className="neo-chip">
              npx @explorers_111/byteui add neo-brutalism/button
            </code>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/gallery">
                <Button variant="primary">Explore Components</Button>
              </Link>
              <a href={NPM_PACKAGE_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">View on npm</Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </PageShell>
  )
}
