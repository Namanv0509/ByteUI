'use client'

import Link from 'next/link'
import Image from 'next/image'
// import { Moon, Sun } from 'lucide-react'
// import { useTheme } from 'next-themes'
// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
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
  display: flex;
  align-items: center;
  gap: 5rem;
  flex: 1;
  justify-content: center;


  @media (min-width: 768px) {
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
  // const { theme, setTheme } = useTheme()
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  const navItems = [
    { label: 'Gallery', href: '/gallery' },
    { label: 'Categories', href: '/categories' },
    { label: 'Docs', href: '/docs' },
  ]

  const localDate = new Date();
  console.log(localDate.toString());

  return (<NeoThemeWrapper>
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

        {/* Theme Toggle */}
       {/* {mounted && (
          <ThemeButton
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-black" />
            )}
          </ThemeButton>
        )}
             */}      </StyledNavbar>
    </NavbarWrapper>
    </NeoThemeWrapper>
  )
}


