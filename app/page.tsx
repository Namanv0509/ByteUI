'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import NeoThemeWrapper from '@/components/neo-brutalism/neo.theme'
import Button from '@/components/neo-brutalism/button'
import Badge from '@/components/neo-brutalism/badge'
import Card from '@/components/neo-brutalism/card'
import CheckBox from '@/components/neo-brutalism/checkbox'
import Slider from '@/components/neo-brutalism/slider'
import styled from 'styled-components'
import NeoBrutalismCalendar from '@/components/neo-brutalism/calendar'
import ToolTip from '@/components/neo-brutalism/tool-tip'
import SpringLoader from '@/components/neo-brutalism/spring-loader'
import Toast from '@/components/neo-brutalism/toast'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const StyledWrapper = styled.div`
  .page {
    background-color: var(--color-accent-1);
    height: fit-content;
    font-family: var(--font-sans);
    color: var(--color-text-black);
    margin: 0rem;
  }

  .hero-title {
    font-family: var(--font-lexend);
    font-size: clamp(3rem, 8vw, 4.75rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.05;
    color: var(--color-text-black);
  }

  .hero-copy {
    font-size: 1.125rem;
    line-height: 1.5;
    color: var(--color-text-black);
    max-width: 36rem;
    margin: 0 auto;
  }

  .cli-chip {
    display: inline-block;
    padding: 0.75rem 1.25rem;
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--color-surface);
    box-shadow: var(--shadow-md-4);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 1rem;
    color: var(--color-text-black);
  }

  .feature-title {
    font-family: var(--font-lexend);
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--color-text-black);
  }

  .feature-copy {
    font-size: 1.1rem;
    line-height: 1.45;
    color: var(--color-text-black);
  }

  .examples-panel {
    margin-top: 2.5rem;
    padding: 1.75rem;
    background: var(--color-accent-4);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg-5);
    width: 1000px;
    margin-right: 0rem;
  }

  .examples-label {
    font-family: var(--font-lexend);
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1.25rem;
    color: var(--color-text-black);
  }

  .examples-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }

  .cta-title {
    font-family: var(--font-lexend);
    font-size: clamp(2rem, 5vw, 2.75rem);
    font-weight: 800;
    color: var(--color-text-black);
  }

  .cta-copy {
    font-size: 1.15rem;
    color: var(--color-text-black);
    max-width: 28rem;
    margin: 0 auto;
  }
  .section{
    margin-left: 15rem;
    }
`

const CLI_COMMAND = 'npx @explorers_111/byteui add button'

export default function Home() {
  return (
    <NeoThemeWrapper>

    <StyledWrapper>
        <div className="page">
          <Navbar />

          <section className="relative overflow-hidden">
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center space-y-8"
              >
                <motion.div variants={itemVariants} className="space-y-4">
                  <h1 className="hero-title">ByteUI</h1>
                  <p className="hero-copy">
                    A React component library you add with one CLI command. Bold neo-brutalist UI, ready for your next project.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
                  <Link href="/gallery">
                    <Button variant="cta">Browse Components</Button>
                  </Link>
                  <Link href="/docs">
                    <Button variant="secondary">Docs</Button>
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <code className="cli-chip">{CLI_COMMAND}</code>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 section">
            <NeoThemeWrapper>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {[
                  {
                    title: 'CLI install',
                    description: 'Add components with npx — code lands in your project.',
                  },
                  {
                    title: 'Neo Brutalism',
                    description: 'Bold borders, hard shadows, and high-contrast UI.',
                  },
                  {
                    title: 'Yours to edit',
                    description: 'Copy-paste architecture. Own the source, style freely.',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="space-y-2"
                  >
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-copy">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="examples-panel"
              >
                <p className="examples-label">Example components</p>
                <div className="examples-row">
                  <Button variant="primary">Button</Button>
                  <NeoBrutalismCalendar/>
                 <ToolTip text="Tooltip" />
                  <CheckBox defaultChecked>Checkbox</CheckBox>
                 <Toast/>
                  <Card title="Card" description="Neo brutalism" />
                </div>
              </motion.div>
            </NeoThemeWrapper>
          </section>

          <section className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <NeoThemeWrapper>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <h2 className="cta-title">Get started</h2>
                <p className="cta-copy">Init once, then add any component by name.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <code className="cli-chip">npx @explorers_111/byteui init</code>
                  <code className="cli-chip">npx @explorers_111/byteui add button</code>
                </div>
                <Link href="/gallery">
                  <Button variant="secondary">View Gallery</Button>
                </Link>
              </motion.div>
            </NeoThemeWrapper>
          </section>
          <Footer />
        </div>
    </StyledWrapper>
    </NeoThemeWrapper>

  )
}
