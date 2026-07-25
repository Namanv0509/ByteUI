'use client'

import { useState } from 'react'
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const CODE_BLOCK_COLLAPSED_HEIGHT = 'calc(24rem + 0.5rem)'

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
  collapsible?: boolean
}

export function CodeBlock({
  code,
  language = 'typescript',
  className = '',
  collapsible = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isCollapsed = collapsible && !expanded

  return (
    <div className={`relative rounded-xl border border-border ${className}`}>
      <motion.button
        type="button"
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 border border-border opacity-0 hover:opacity-100 transition-opacity z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {copied ? (
          <Check size={18} className="text-green-500" />
        ) : (
          <Copy size={18} className="text-foreground/70" />
        )}
      </motion.button>

      <div
        className="relative overflow-hidden rounded-xl transition-[max-height] duration-300 ease-in-out"
        style={{
          maxHeight: isCollapsed ? CODE_BLOCK_COLLAPSED_HEIGHT : undefined,
        }}
      >
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          customStyle={{
            padding: '20px',
            margin: 0,
            fontSize: '14px',
            lineHeight: '1.5',
          }}
          wrapLines
        >
          {code}
        </SyntaxHighlighter>

        {isCollapsed && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#282c34] to-transparent"
            aria-hidden
          />
        )}
      </div>

      {collapsible && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="flex w-full items-center justify-center gap-1.5 border-t border-border bg-muted/50 px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
        >
          {expanded ? (
            <>
              Show less
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              Show all code
              <ChevronDown size={16} />
            </>
          )}
        </button>
      )}
    </div>
  )
}
