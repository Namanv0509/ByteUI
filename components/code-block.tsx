'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = 'typescript', className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`relative rounded-xl overflow-hidden border border-border ${className}`}>
      <motion.button
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
    </div>
  )
}
