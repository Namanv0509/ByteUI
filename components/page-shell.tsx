'use client'

import NeoThemeWrapper from '@/components/neo-brutalism/neo.theme'
import styled from 'styled-components'

const Shell = styled.div`
  min-height: 100vh;
  background-color: var(--color-accent-1);
  font-family: var(--font-sans);
  color: var(--color-text-black);

  .page-title {
    font-family: var(--font-lexend);
    font-size: clamp(2.5rem, 6vw, 3.75rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: var(--color-text-black);
  }

  .page-subtitle {
    font-size: 1.25rem;
    line-height: 1.5;
    color: var(--color-text-black);
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
  }

  .section-title {
    font-family: var(--font-lexend);
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    font-weight: 800;
    color: var(--color-text-black);
    padding: 0 1rem;
  }

  .section-copy {
    font-size: 1.1rem;
    line-height: 1.45;
    color: var(--color-text-black);
    padding: 1rem;
  }

   .cta-doc {
  color: var(--color-text-white);
  }

  .neo-panel {
    background: var(--color-surface);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg-5);
    padding: 0.8rem;
    margin-left: 40px;
    margin-top: 10px;

  }

  .neo-chip {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--color-surface);
    box-shadow: var(--shadow-md-4);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.95rem;
    color: var(--color-text-black);
  }

  .neo-input {
    width: 100%;
    padding: 0.85rem 1rem 0.85rem 3rem;
    border: var(--border-width) solid var(--border-color);
    box-shadow: var(--shadow-md-4);
    font-size: 1.05rem;
    color: var(--color-text-black);
    outline: none;
  }

  .neo-filter {
    padding: 0.65rem 1.25rem;
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--color-surface);
    box-shadow: var(--shadow-md-1);
    font-family: var(--font-lexend);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-text-black);
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;

    &:hover {
      transform: translate(1.5px, 1.5px);
      box-shadow: 1.5px 1.5px 0 #1e1e1e;
    }

    &.active {
      background: var(--color-accent-4);
    }
  }

  .neo-tag {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--color-accent-2);
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--color-text-black);
  }

  .neo-card {
    height: 100%;
    background: var(--color-surface);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md-1);
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;

    &:hover {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 #1e1e1e;
    }
  }

  .neo-card-preview {
    height: 12rem;
    background: var(--color-accent-4);
    border-bottom: var(--border-width) solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .neo-sidebar-link {
    display: block;
    padding: 0.65rem 1rem;
    border: var(--border-width) solid transparent;
    border-radius: var(--border-radius);
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--color-text-black);
    text-decoration: none;
    transition: background 0.15s ease, border-color 0.15s ease;

    &:hover {
      background: var(--color-surface);
      border-color: var(--border-color);
      box-shadow: var(--shadow-md-1);
    }
  }

  .neo-panel-accent {
    background: var(--color-bg);
    margin-left: 0px;

  }

  .neo-panel-mint {
    background: var(--color-accent-2);
    margin-left: 40px;
    padding: 20px;
  }

  .detail-title {
    font-family: var(--font-lexend);
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: var(--color-text-black);
    text-align: left;
  }
`

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <NeoThemeWrapper>
      <Shell>{children}</Shell>
    </NeoThemeWrapper>
  )
}
