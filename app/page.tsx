'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import NeoThemeWrapper from '@/components/neo-brutalism/neo.theme'
import Button from '@/components/neo-brutalism/button'
import Card from '@/components/neo-brutalism/card'
import CheckBox from '@/components/neo-brutalism/checkbox'
import NeoBrutalismCalendar from '@/components/neo-brutalism/calendar'
import ToolTip from '@/components/neo-brutalism/tool-tip'
import Toast from '@/components/neo-brutalism/toast'
import { NPM_PACKAGE_URL } from '@/lib/links'
import styled from 'styled-components'
import CardImage from '@/public/image/Card.png'
import CalendarImage from '@/public/image/Calender.png'
import SliderImage from '@/public/image/Slider.png'
import ButtonImage from '@/public/image/Button.png'
import Image from 'next/image'

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
    font-family: 'Mash', sans-serif;
    font-weight: 800;
    font-size: clamp(3rem, 8vw, 4.75rem);
    letter-spacing: -0.03em;
    line-height: 1.05;
    color: var(--color-text-black);
  }

  .hero-copy {
    font-family: var(--font-lexend);
    font-size: 1.8rem;
    line-height: 1.5;
    color: var(--color-text-black);
    font-weight: 400;
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
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.15s ease;

    &:hover {
      opacity: 0.85;
    }
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
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    padding: 1.75rem;
    background: var(--color-accent-4);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg-5);
    width: 100%;
    min-width: 60rem;
    margin-left: -4rem;
    box-sizing: border-box;
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
    font-family: 'Mash', sans-serif;
    font-size: clamp(2rem, 5vw, 2.75rem);
    font-weight: 800;
    color: var(--color-text-black);
  }

  .cta-copy {
    font-size: 1.4rem;
    color: var(--color-text-black);
    font-family: var(--font-lexend);
    max-width: 28rem;
    margin: 0 auto;
  }
  .section {
    @media (min-width: 1024px) {
      margin-left: 15rem;
    }
  }

  .bg-sticker {
    position: absolute;
    pointer-events: none; 
    user-select: none;
    z-index: 0;           
    height: auto;
  }

  .sticker-calendar {
    top: 15%;
    left: 9%;
    width: 150px;
    scale: 1.8;
    transform: rotate(-12deg);
  }

  .sticker-card {
    top: 8%;
    right: 5%;
    width: 130px;
    scale: 1.7;
    transform: rotate(10deg);
  }

  .sticker-card-2 {
    top: 230%;
    right: 5%;
    width: 130px;
    scale: 1.7;
    transform: rotate(10deg);
  }

  .sticker-button {
    bottom: 18%;
    left: 3%;
    width: 120px;
    transform: rotate(8deg);
  }

  .sticker-slider {
    bottom: 22%;
    right: 4%;
    width: 180px;
    transform: rotate(12deg);
  }

  /* Scale down or hide stickers on tablet/mobile */
  @media (max-width: 62rem) {
    .bg-sticker {
      opacity: 0.4;
      transform: scale(0.7);
    }
  }
  @media (max-width: 62rem) {
    .examples-panel {
        display:none;
    }
  }
  @media (max-width: 62rem) {
    .bg-sticker {
      display: none;
    }
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
            <Image
              src={CalendarImage}
              alt=""
              width={200}
              height={200}
              className="bg-sticker sticker-calendar"
            />
            <Image
              src={CardImage}
              alt=""
              width={200}
              height={200}
              className="bg-sticker sticker-card"
            />
            <Image
              src={SliderImage}
              alt=""
              width={200}
              height={200}
              className="bg-sticker sticker-slider"
            />
            <Image
              src={ButtonImage}
              alt=""
              width={200}
              height={200}
              className="bg-sticker sticker-button"
            />
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
                  <a href={NPM_PACKAGE_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">View on npm</Button>
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <a
                    href={NPM_PACKAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cli-chip"
                  >
                    {CLI_COMMAND}
                  </a>
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
                  <a
                    href={NPM_PACKAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cli-chip"
                  >
                    npx @explorers_111/byteui init
                  </a>
                  <a
                    href={NPM_PACKAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cli-chip"
                  >
                    npx @explorers_111/byteui add button
                  </a>
                </div>
                <div className="flex gap-3 justify-center flex-wrap">
                  <Link href="/gallery">
                    <Button variant="secondary">View Gallery</Button>
                  </Link>
                  <a href={NPM_PACKAGE_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="cta">npm package</Button>
                  </a>
                </div>
              </motion.div>
            </NeoThemeWrapper>
          </section>
          <Footer />
        </div>
    </StyledWrapper>
    </NeoThemeWrapper>

  )
}
