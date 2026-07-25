'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import NeoThemeWrapper from '@/components/neo-brutalism/neo.theme'
import styled from 'styled-components'

const FooterShell = styled.footer`
  margin-top: 4rem;
  padding: 2.5rem 0;
  border-top: var(--border-width) solid var(--border-color);
  font-family: var(--font-sans);
  color: var(--color-text-black);

  .brand-title {
    font-family: var(--font-lexend);
    font-weight: 800;
    font-size: 1.15rem;
  }

  .copy {
    font-size: 1rem;
    line-height: 1.45;
    color: var(--color-text-black);
  }

  .heading {
    font-family: var(--font-lexend);
    font-weight: 800;
    font-size: 1.05rem;
    margin-bottom: 1rem;
  }

  .link {
    color: var(--color-text-black);
    text-decoration: none;
    font-size: 1.25rem;
    transition: color 0.15s ease;

    &:hover {
      color: var(--color-text-black);
    }
  }
`

export function Footer() {
  const links = [
    { label: 'Gallery', href: '/gallery' },
    { label: 'Categories', href: '/categories' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Home', href: '/' },
  ]

  return (
    <NeoThemeWrapper>
      <FooterShell>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white border-[length:var(--border-width)] border-[var(--border-color)]">
                  <Image
                    src="/android-chrome-192x192.png"
                    alt="ByteUI Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="brand-title">ByteUI</span>
              </div>
              <p className="copy">
                React components you add with the CLI — bold, editable, yours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="heading">Quick Links</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="heading">Get started</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="link">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="link">
                    Component Gallery
                  </Link>
                </li>
                <li>
                  <code className="text-sm font-mono">
                    npx @explorers_111/byteui init
                  </code>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </FooterShell>
    </NeoThemeWrapper>
  )
}
