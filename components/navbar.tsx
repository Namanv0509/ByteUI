'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import styled from 'styled-components'
import NeoThemeWrapper from './neo-brutalism/neo.theme'

const NavbarWrapper = styled.div`
  position: relative;
  top: 0;
  z-index: 50;
  width: 100%;
  max-width: 50rem;
  rotate: -2deg;
  margin: 0 auto;
  margin-top: 0rem;
  padding: 3.5rem 1rem 0.5rem 1rem;

  @media (max-width: 768px) {
    rotate: 0deg;
    padding: 1.5rem 1rem 0.5rem 1rem;
  }
`

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-accent-2);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 0.75rem 1.25rem;
  box-shadow: var(--shadow-lg-1);
  transition: all 0.2s ease-in-out;
`

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  text-decoration: none;

  .logo-badge {
    background-color: var(--color-bg);
    border-radius: 9999px;
    display: flex;
    scale: 1.2;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  &:hover .logo-badge {
    transform: scale(1.2);
  }

  .logo-title {
    font-family: 'Mash', sans-serif;
    font-weight: 800;
    font-size: 1.4rem;
    letter-spacing: -0.025em;
    color: var(--color-text-black);
    gap: 2;
  }
`

const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 5rem;
  flex: 1;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    gap: 6rem;
  }
`

const NavLinkItem = styled(Link)`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.25rem;
  color: var(--color-text-black);
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: var(--color-accent-4);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 0.5rem;
  cursor: pointer;
  box-shadow: var(--shadow-md-1);
  transition: all 0.15s ease;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }

  @media (max-width: 767px) {
    display: flex;
  }
`

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-accent-2);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg-1);
  padding: 1.5rem;
  gap: 1.25rem;
  position: absolute;
  top: 100%;
  left: 1rem;
  right: 1rem;
  margin-top: 0.5rem;
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileNavLinkItem = styled(NavLinkItem)`
  font-size: 1.5rem;
  padding: 0.5rem 0;
  border-bottom: 2px dashed rgba(0, 0, 0, 0.15);

  &:last-child {
    border-bottom: none;
  }
`

// const ThemeButton = styled(motion.button)`
//   background-color: var(--color-bg);
//   height: 2.5rem;
//   min-width: 2.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0;
//   font-weight: 700;
//   border: var(--border-width) solid var(--border-color);
//   box-shadow: var(--shadow-md-1);
//   cursor: pointer;
//   transition: all 0.15s ease;
//   border-radius: var(--border-radius);

//   &:hover {
//     opacity: 0.9;
//   }

//   &:active {
//     transform: translate(2px, 2px);
//     box-shadow: none;
//   }
// `

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Gallery', href: '/gallery' },
    { label: 'Categories', href: '/categories' },
    { label: 'Docs', href: '/docs' },
  ]

  return (
    <NeoThemeWrapper>
      <NavbarWrapper>
        <StyledNavbar>
          {/* Logo */}
          <LogoContainer href="/">
            <div className="logo-badge">
              <Image
                src="/android-chrome-192x192.png"
                alt="ByteUI Logo"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
            <span className="logo-title">ByteUI</span>
          </LogoContainer>

          {/* Nav Items */}
          <NavLinks>
            {navItems.map((item) => (
              <NavLinkItem key={item.href} href={item.href}>
                {item.label}
              </NavLinkItem>
            ))}
          </NavLinks>

          {/* Hamburger Menu Button */}
          <MobileMenuButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </StyledNavbar>

        {/* Mobile Nav Links Dropdown */}
        {isOpen && (
          <MobileNavLinks>
            {navItems.map((item) => (
              <MobileNavLinkItem
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </MobileNavLinkItem>
            ))}
          </MobileNavLinks>
        )}
      </NavbarWrapper>
    </NeoThemeWrapper>
  )
}


