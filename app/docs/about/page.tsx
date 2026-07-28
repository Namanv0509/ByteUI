'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageShell } from '@/components/page-shell'
import Button from '@/components/neo-brutalism/button'
import { NPM_PACKAGE_NAME, NPM_PACKAGE_URL } from '@/lib/links'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {ArrowLeft} from 'lucide-react'

export default function DocsPage() {
  const sections = [
    {
      id: 'installation',
      title: 'About ByteUI',
      content: `
        Package on npm: ${NPM_PACKAGE_NAME}
        ${NPM_PACKAGE_URL}
        ByteUI is a open source UI Component library which can be installed via cli, we are starting from Neo-Brutalsim themed components.
        We are providing full flexibility to the users to modify the components and theme tokens as per their requirements.
        We will expand to other designs as well, it just the start. 

      `,
    }, {
      id: 'why another UI library?',
      title: 'Why another UI library? ',
      content: `
        Neo-brutalism is one of the most expressive and creative design styles, yet developers have very few dedicated component libraries built around it. ByteUI fills that gap by offering reusable, customizable neo-brutalist components that let developers build distinctive interfaces quickly while staying flexible enough to match their own brand.
      `,
    }, {
      id: 'contact',
      title: 'Contact',
      content: `
        If you have any feedback or would like custom components built and maintained for your project, feel free to contact me at namanverma00260@gmail.com .
      `,
    },


  ]

  return (
    <PageShell>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8 sticky top-10 "
              >
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 font-bold hover:opacity-70"
                  style={{ color: 'var(--color-text-black)' }}
                >
                  <ArrowLeft size={20} />
                  Back to Doc
                </Link>
              </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14 space-y-4"
        >
          <h1 className="page-title">Documentation</h1>
          <p className="page-subtitle">
            Install with the CLI, own the source, style with neo tokens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 " >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <div className="sticky top-24 neo-panel p-3 space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="neo-sidebar-link"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 space-y-10"
          >
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.05 }}
                className="scroll-mt-24 neo-panel p-6 md:p-8"
              >
                <h2 className="section-title mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.content.split('\n').map((line, i) => {
                    if (!line.trim()) return null
                    const trimmed = line.trim()
                    if (trimmed.startsWith('•')) {
                      return (
                        <div key={i} className="section-copy ml-4">
                          {trimmed}
                        </div>
                      )
                    }
                    if (trimmed.match(/^\d+\./)) {
                      return (
                        <div key={i} className="section-copy ml-1">
                          {trimmed}
                        </div>
                      )
                    }
                    if (trimmed.match(/^[A-Z].*:$/)) {
                      return (
                        <h3
                          key={i}
                          className="text-xl font-bold mt-4 mb-1"
                          style={{ fontFamily: 'var(--font-lexend)' }}
                        >
                          {trimmed}
                        </h3>
                      )
                    }
                    if (trimmed.includes('@')) {
                      return (
                        <p key={i} className="section-copy leading-relaxed">
                          {trimmed.split(/(\S+@\S+\.\S+)/).map((part, idx) => {
                            const isEmail = /\S+@\S+\.\S+/.test(part)
                            return isEmail ? (
                              <a
                                key={idx}
                                href={`mailto:${part.replace(/\.$/, '')}`}
                                className="font-bold underline underline-offset-2 hover:opacity-70"
                              >
                                {part.replace(/\.$/, '')}
                              </a>
                            ) : (
                              part
                            )
                          })}
                        </p>
                      )
                    }
                    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
                      return (
                        <p key={i} className="section-copy leading-relaxed">
                          <a
                            href={trimmed}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-bold underline-offset-2 hover:opacity-70"
                          >
                            {trimmed}
                          </a>
                        </p>
                      )
                    }
                    return (
                      <p key={i} className="section-copy leading-relaxed">
                        {trimmed}
                      </p>
                    )
                  })}
                </div>
              </motion.section>
            ))}
          </motion.div>
        </div>

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
