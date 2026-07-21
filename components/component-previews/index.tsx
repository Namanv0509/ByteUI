'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import styled from 'styled-components';


// Morph Card
export function MorphCard() {
return (
<motion.div
className="w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 cursor-pointer"
animate={{
borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%', '60% 40% 30% 70% / 60% 30% 70% 40%']
      }}
transition={{ duration: 4, repeat: Infinity }}
whileHover={{ scale: 1.1 }}
/>
  )
}
// Gradient Text
export function GradientText() {
return (
<motion.div
className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent"
animate={{
backgroundPosition: ['0%', '100%', '0%']
      }}
transition={{ duration: 3, repeat: Infinity }}
style={{
backgroundSize: '200% 200%'
      }}
>
      Animated Gradient
</motion.div>
  )
}
// Ripple Button
interface RippleItem {
x: number
y: number
id: number
}
export function RippleButton() {
const [ripples, setRipples] = useState<RippleItem[]>([])
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
const rect = e.currentTarget.getBoundingClientRect()
const x = e.clientX - rect.left
const y = e.clientY - rect.top
const newRipple = { x, y, id: Date.now() }
setRipples(prev => [...prev, newRipple])
setTimeout(() => {
setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 600)
  }
return (
<motion.button
onClick={handleClick}
className="px-6 py-3 bg-yellow-500 dark:bg-yellow-600 text-black rounded-lg font-semibold relative overflow-hidden"
whileHover={{ backgroundColor: '#ca8a04' }}
>
{ripples.map(ripple => (
<motion.span
key={ripple.id}
className="absolute w-2 h-2 bg-white rounded-full pointer-events-none"
style={{ left: ripple.x, top: ripple.y }}
initial={{ width: 8, height: 8, opacity: 0.8 }}
animate={{ width: 400, height: 400, opacity: 0 }}
transition={{ duration: 0.6 }}
/>
      ))}
      Click Me
</motion.button>
  )
}
// Floating Card
export function FloatingCard() {
  return (
    <StyledWrapper>
      <div className="container-items">
        <button className="item-color" style={{ '--color': '#e11d48' } as React.CSSProperties} color="#e11d48" />
        <button className="item-color" style={{ '--color': '#f472b6' } as React.CSSProperties} color="#f472b6" />
        <button className="item-color" style={{ '--color': '#fb923c' } as React.CSSProperties} color="#fb923c" />
        <button className="item-color" style={{ '--color': '#facc15' } as React.CSSProperties} color="#facc15" />
        <button className="item-color" style={{ '--color': '#84cc16' } as React.CSSProperties} color="#84cc16" />
        <button className="item-color" style={{ '--color': '#10b981' } as React.CSSProperties} color="#10b981" />
        <button className="item-color" style={{ '--color': '#0ea5e9' } as React.CSSProperties} color="#0ea5e9" />
        <button className="item-color" style={{ '--color': '#3b82f6' } as React.CSSProperties} color="#3b82f6" />
        <button className="item-color" style={{ '--color': '#8b5cf6' } as React.CSSProperties} color="#8b5cf6" />
        <button className="item-color" style={{ '--color': '#a78bfa' } as React.CSSProperties} color="#a78bfa" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container-items {
    display: flex;
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  .item-color {
    position: relative;
    flex-shrink: 0;
    width: 32px;
    height: 40px;
    border: none;
    outline: none;
    transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
    cursor: pointer;

    &::after {
      position: absolute;
      content: "";
      inset: 0;
      width: 40px;
      height: 40px;
      background-color: var(--color);
      border-radius: 6px;
      transform: scale(1.2);
      pointer-events: none;
      transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
    }

    &::before {
      position: absolute;
      content: attr(aria-color);
      left: 65%;
      bottom: 52px;
      font-size: 8px;
      line-height: 12px;
      transform: translateX(-50%);
      padding: 2px 0.25rem;
      background-color: #000000;
      color: #ffffff;
      border-radius: 6px;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
    }

    &:hover {
      transform: scale(1.5);
      z-index: 99999;

      &::before {
        opacity: 1;
        visibility: visible;
      }
    }

    &:active::after {
      transform: scale(1.1);
    }

    &:focus::before {
      content: "✅Copy";
    }
  }

  .item-color:hover + * {
    transform: scale(1.3);
    z-index: 9999;
  }

  .item-color:hover + * + * {
    transform: scale(1.15);
    z-index: 999;
  }

  .item-color:has(+ *:hover) {
    transform: scale(1.3);
    z-index: 9999;
  }

  .item-color:has(+ * + *:hover) {
    transform: scale(1.15);
    z-index: 999;
  }
`;;
// Glass Button
export function GlassButton() {
return (
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-75" />
<motion.button
className="relative px-8 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/30 text-white font-semibold"
whileHover={{
backgroundColor: 'rgba(255, 255, 255, 0.2)',
borderColor: 'rgba(255, 255, 255, 0.5)'
        }}
whileTap={{ scale: 0.95 }}
>
        Glassmorphism
</motion.button>
</div>
  )
}
// Shimmer Text
export function ShimmerText() {
return (
<div className="relative inline-block">
<motion.div
className="text-3xl font-bold"
animate={{
backgroundPosition: ['0%', '100%', '0%']
        }}
transition={{ duration: 3, repeat: Infinity }}
style={{
background: 'linear-gradient(90deg, #1f2937, #8b5cf6, #1f2937)',
backgroundSize: '200% 100%',
WebkitBackgroundClip: 'text',
WebkitTextFillColor: 'transparent',
backgroundClip: 'text',
        }}
>
        Shimmer Effect
</motion.div>
</div>
  )
}
// Expandable Card
export function ExpandableCard() {
const [isExpanded, setIsExpanded] = useState(false)
return (
<motion.div
layout
onClick={() => setIsExpanded(!isExpanded)}
className="w-64 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-6 cursor-pointer text-white"
initial={{ borderRadius: 16 }}
animate={{ borderRadius: isExpanded ? 24 : 16 }}
>
<h3 className="text-xl font-bold mb-4">Expandable Card</h3>
{isExpanded && (
<motion.div
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
exit={{ opacity: 0, height: 0 }}
className="text-sm opacity-90"
>
          Click me again to collapse. This card expands smoothly with animation!
</motion.div>
      )}
</motion.div>
  )
}
// Orbital Button
export function OrbitalButton() {
const orbits = [1, 2, 3]
return (
<div className="relative w-40 h-40 flex items-center justify-center">
{orbits.map((orbit) => (
<motion.div
key={orbit}
className="absolute border border-purple-500/30 rounded-full"
animate={{ rotate: 360 }}
transition={{
duration: 10 + orbit * 5,
repeat: Infinity,
ease: 'linear'
          }}
style={{ width: 32 * orbit, height: 32 * orbit }}
/>
      ))}
<motion.button
className="relative z-10 px-6 py-2 bg-purple-600 text-white rounded-full font-semibold"
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }}
>
        Center
</motion.button>
</div>
  )
}
// Slide-in Menu
export function SlideInMenu() {
const [isOpen, setIsOpen] = useState(false)
return (
<div className="relative">
<motion.button
onClick={() => setIsOpen(!isOpen)}
className="p-2 rounded-lg bg-purple-600 text-white"
whileTap={{ scale: 0.95 }}
>
{isOpen ? <X size={24} /> : <Menu size={24} />}
</motion.button>
{isOpen && (
<motion.div
initial={{ x: -300, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
exit={{ x: -300, opacity: 0 }}
transition={{ type: 'spring', stiffness: 300, damping: 30 }}
className="absolute top-12 left-0 w-64 bg-gray-900 rounded-r-lg p-6 space-y-4 z-50"
>
{['Home', 'About', 'Services', 'Contact'].map((item) => (
<motion.a
key={item}
href="#"
className="block text-white hover:text-purple-400"
whileHover={{ x: 10 }}
>
{item}
</motion.a>
          ))}
</motion.div>
      )}
</div>
  )
}
// ========== Form Elements ========== //
export function AnimatedInput() {
return (
<div className="relative mt-8 min-w-[200px]">
<input
type="text"
id="animated-input"
className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
placeholder=" "
/>
<label
htmlFor="animated-input"
className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
>
        Floating Label
</label>
</div>
  )
}
export function ToggleSwitch() {
const [isOn, setIsOn] = useState(false)
return (
<div
className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-green-500' : 'bg-gray-400'}`}
onClick={() => setIsOn(!isOn)}
>
<motion.div
className="bg-white w-6 h-6 rounded-full shadow-md"
layout
transition={{ type: "spring", stiffness: 700, damping: 30 }}
style={{ marginLeft: isOn ? '1.5rem' : '0' }}
/>
</div>
  )
}
export function CheckboxNeumorphic() {
const [checked, setChecked] = useState(false)
return (
<div
onClick={() => setChecked(!checked)}
className="w-8 h-8 rounded-md bg-gray-200 dark:bg-gray-800 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.1)] flex items-center justify-center cursor-pointer transition-all duration-200"
>
<motion.div
initial={{ scale: 0 }}
animate={{ scale: checked ? 1 : 0 }}
className="w-4 h-4 bg-blue-500 rounded-sm"
/>
</div>
  )
}
export function SearchInput() {
const [expanded, setExpanded] = useState(false)
return (
<motion.div
className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700"
initial={{ width: 48 }}
animate={{ width: expanded ? 200 : 48 }}
transition={{ type: "spring", stiffness: 300, damping: 25 }}
>
<div className="cursor-pointer text-gray-500" onClick={() => setExpanded(!expanded)}>
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
</div>
{expanded && (
<motion.input
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
className="bg-transparent border-none outline-none ml-2 w-full text-sm placeholder-gray-400 dark:text-white"
placeholder="Search..."
autoFocus
/>
      )}
</motion.div>
  )
}
// ========== Cards & Containers ========== //
export function NeonCard() {
return (
<div className="relative group w-64 h-80 rounded-xl bg-gray-900 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
<div className="absolute inset-[2px] bg-gray-900 rounded-xl z-10 flex flex-col items-center justify-center p-6 text-white text-center">
<h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">Neon Card</h3>
<p className="text-sm text-gray-400">Hover me to see the glowing neon borders react.</p>
</div>
</div>
  )
}
export function FlipCard() {
return (
<div className="group w-64 h-80 [perspective:1000px]">
<div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
<div className="absolute w-full h-full [backface-visibility:hidden] bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-xl font-bold border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
          Front Side
</div>
<div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center text-white text-xl font-bold">
          Back Side
</div>
</div>
</div>
  )
}
export function HolographicCard() {
return (
<div className="relative w-64 h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-2xl">
<div className="absolute inset-0 bg-gray-900 z-0"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgogIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] bg-repeat mix-blend-color-dodge"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-20"></div>
<div className="relative z-30 w-full h-full p-6 flex flex-col items-start justify-end">
<h2 className="text-2xl font-bold text-white mb-2 tracking-wide drop-shadow-md">Holo Card</h2>
<p className="text-gray-300 text-sm">Gleaming futuristic texture</p>
</div>
</div>
  )
}
export function TiltCard() {
const [rotateX, setRotateX] = useState(0)
const [rotateY, setRotateY] = useState(0)
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
const rect = e.currentTarget.getBoundingClientRect()
const x = e.clientX - rect.left
const y = e.clientY - rect.top
const centerX = rect.width / 2
const centerY = rect.height / 2
setRotateX(((y - centerY) / centerY) * -15)
setRotateY(((x - centerX) / centerX) * 15)
  }
return (
<motion.div
className="w-64 h-80 bg-gradient-to-b from-blue-400 to-emerald-400 rounded-2xl p-1 shadow-xl [perspective:1000px]"
onMouseMove={handleMouseMove}
onMouseLeave={() => { setRotateX(0); setRotateY(0) }}
animate={{ rotateX, rotateY }}
transition={{ type: "spring", stiffness: 300, damping: 30 }}
style={{ transformStyle: "preserve-3d" }}
>
<div className="w-full h-full bg-white/20 backdrop-blur-md rounded-xl p-6 flex flex-col justify-between" style={{ transform: "translateZ(30px)" }}>
<div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
</div>
<div>
<h3 className="text-white font-bold text-xl drop-shadow-sm">Tilt Effect</h3>
<p className="text-white/80 text-sm mt-1">Move your mouse over me</p>
</div>
</div>
</motion.div>
  )
}
// ========== Buttons & CTAs ========== //
export function SwipeButton() {
return (
<button className="group relative px-6 py-3 font-semibold text-white bg-gray-900 rounded-lg overflow-hidden">
<span className="relative z-10">Swipe Hover</span>
<div className="absolute inset-0 h-full w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
</button>
  )
}
export function DownloadButton() {
const [downloading, setDownloading] = useState(false)
return (
<button
onClick={() => { setDownloading(true); setTimeout(() => setDownloading(false), 2000) }}
className={`relative flex items-center justify-center px-6 py-3 font-bold text-white rounded-xl transition-all duration-300 ${downloading ? 'bg-green-500 w-14' : 'bg-indigo-600 w-44'}`}
>
{downloading ? (
<motion.svg initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></motion.svg>
      ) : (
<span className="flex items-center gap-2">
<span>Download</span>
<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
</span>
      )}
</button>
  )
}
export function GlowButton() {
return (
<button className="relative px-8 py-4 font-bold text-white bg-gray-800 rounded-full group">
<span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-70 group-hover:opacity-100 group-hover:blur-xl transition-all duration-300 -z-10"></span>
      Inner Glow
</button>
  )
}
export function GlitchButton() {
return (
<button className="relative px-8 py-3 bg-black text-white font-mono font-bold uppercase tracking-widest border border-white/20 group overflow-hidden">
<span className="relative z-10 group-hover:hidden">Cyberpunk</span>
<span className="absolute inset-0 items-center justify-center bg-red-600 font-mono font-bold uppercase tracking-widest hidden group-hover:flex transform -translate-x-1">Cyberpunk</span>
<span className="absolute inset-0 items-center justify-center bg-blue-600 mix-blend-screen font-mono font-bold uppercase tracking-widest hidden group-hover:flex transform translate-x-1">Cyberpunk</span>
</button>
  )
}
// ========== Loaders & Progress ========== //
export function SpinnerLoader() {
return (
<div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin"></div>
  )
}
export function DotsLoader() {
return (
<div className="flex gap-2">
<motion.div className="w-3 h-3 bg-indigo-500 rounded-full" animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
<motion.div className="w-3 h-3 bg-indigo-500 rounded-full" animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
<motion.div className="w-3 h-3 bg-indigo-500 rounded-full" animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
</div>
  )
}
export function ProgressBarAnimated() {
return (
<div className="w-64 h-4 bg-gray-200 rounded-full overflow-hidden">
<motion.div
className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
initial={{ width: "0%" }}
animate={{ width: "100%" }}
transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
/>
</div>
  )
}
export function HexagonLoader() {
return (
<motion.svg className="w-16 h-16 text-purple-600" viewBox="0 0 100 100" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
<polygon fill="none" stroke="currentColor" strokeWidth="4" points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" strokeDasharray="300" strokeDashoffset="150">
<animate attributeName="stroke-dashoffset" values="300;0" dur="2s" repeatCount="indefinite" />
</polygon>
</motion.svg>
  )
}
// ========== Navigation ========== //
export function MagicNavbar() {
const [active, setActive] = useState(0)
const items = ['Home', 'Profile', 'Settings', 'Messages']
return (
<div className="flex bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 relative">
{items.map((item, i) => (
<button key={item} onClick={() => setActive(i)} className="relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
{item}
{active === i && (
<motion.div layoutId="bubble" className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-xl -z-10" transition={{ type: "spring", stiffness: 500, damping: 30 }} />
          )}
</button>
      ))}
</div>
  )
}
export function SidebarMenu() {
const [isOpen, setIsOpen] = useState(false)
return (
<motion.div
className="bg-indigo-600 text-white rounded-r-2xl flex flex-col justify-between py-6 overflow-hidden relative cursor-default"
animate={{ width: isOpen ? 200 : 64 }}
transition={{ type: "spring", stiffness: 300, damping: 30 }}
onMouseEnter={() => setIsOpen(true)}
onMouseLeave={() => setIsOpen(false)}
style={{ height: '300px' }}
>
<div className="px-4 space-y-6">
{[1, 2, 3].map(i => (
<div key={i} className="flex items-center gap-4 whitespace-nowrap cursor-pointer hover:text-indigo-200">
<div className="w-8 h-8 rounded bg-white/20 flex-shrink-0" />
<span className="font-medium">Menu Item {i}</span>
</div>
        ))}
</div>
</motion.div>
  )
}
export function CircularMenu() {
const [open, setOpen] = useState(false)
return (
<div className="relative w-32 h-32 flex items-center justify-center">
<motion.button
onClick={() => setOpen(!open)}
className="w-12 h-12 bg-pink-500 rounded-full z-20 text-white flex items-center justify-center shadow-lg"
animate={{ rotate: open ? 45 : 0 }}
>
<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
</motion.button>
{[0, 1, 2, 3].map((i) => {
const angle = (i * Math.PI) / 2
return (
<motion.div
key={i}
className="absolute w-10 h-10 bg-white dark:bg-gray-800 rounded-full z-10 shadow-md flex items-center justify-center text-pink-500 cursor-pointer border border-pink-100 dark:border-gray-700"
initial={{ x: 0, y: 0, opacity: 0 }}
animate={{
x: open ? Math.cos(angle) * 45 : 0,
y: open ? Math.sin(angle) * 45 : 0,
opacity: open ? 1 : 0
            }}
transition={{ type: "spring", stiffness: 400, damping: 25, delay: i * 0.05 }}
>
{i + 1}
</motion.div>
        )
      })}
</div>
  )
}
export function TooltipMenu() {
return (
<div className="flex gap-4">
{['Twitter', 'GitHub', 'LinkedIn'].map((app) => (
<div key={app} className="group relative flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
<span className="text-xl font-bold">{app[0]}</span>
<div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded">
{app}
<div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
</div>
</div>
      ))}
</div>
  )
}
// ========== Badges & Tags ========== //
export function PulsingBadge() {
return (
<div className="relative inline-flex">
<span className="absolute flex h-3 w-3 -top-1 -right-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
</span>
<span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-md border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200">Notifications</span>
</div>
  )
}
export function GlowingTag() {
return (
<div className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gray-900 border border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-shadow duration-300 tracking-wider">
      ACTIVE
</div>
  )
}
export function GradientBorderBadge() {
return (
<div className="p-[2px] rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 shrink-0">
<div className="px-3 py-1 bg-white dark:bg-gray-900 text-sm font-semibold rounded-md text-gray-900 dark:text-gray-100">
        Premium
</div>
</div>
  )
}
export function StatusIndicator() {
return (
<div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium border border-green-200 dark:border-green-800/30">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
      Operational
</div>
  )
}

export function InteractiveMap() {
  const cities = [
    { id: 1, x: 5, y: 67, name: 'Beach city', icon: '🏖️', anim: '' },
    { id: 2, x: 32, y: 32, name: 'Flower city', icon: '🌷', anim: 'grow' },
    { id: 3, x: 58, y: 83, name: 'Surf city', icon: '🏄', anim: 'slide' },
    { id: 4, x: 65, y: 22, name: 'Capital city', icon: '🏛️', anim: '' },
    { id: 5, x: 87, y: 58, name: 'Funland', icon: '🎢', anim: '' },
    { id: 6, x: 94, y: 38, name: 'Coast city', icon: '🌊', anim: 'slide' },
  ]

  return (
    <div className="relative w-full aspect-square max-w-[500px] border-radius-lg shadow-xl overflow-hidden bg-[#f5f0e5] group/map">
      <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full pointer-events-none">
        <path fill="#90daee" d="M0,367.82c5.83-4.39,14.42-10.16,25.59-15.34,4.52-2.09,43.19-19.51,79.55-11.93,36.1,7.52,35.75,32.55,78.41,60.23,46.34,30.06,109.47,41.21,123.32,22.1,11.95-16.49-22.61-41.92-13.66-84.6,4.85-23.1,22.33-50.71,47.73-58.52,42.42-13.05,78.83,39.45,102.84,23.86,15.81-10.26.01-32.87,22.73-74.43,5.8-10.62,11.65-21.15,11.93-36.93.28-15.69-5.63-26.64-7.95-32.39-6.66-16.45-6.21-45.15,28.84-98.55.23,146.23.46,292.46.69,438.69H0v-132.18Z" />
      </svg>
      
      <div className="relative w-full h-full">
        {cities.map((city) => (
          <div 
            key={city.id}
            className="absolute group/city cursor-pointer"
            style={{ left: `${city.x}%`, top: `${city.y}%` }}
          >
            {/* Pin */}
            <motion.div 
              className="relative -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.2 }}
            >
              <div className="text-xl filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">📍</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-xs font-bold pointer-events-none">•</div>
            </motion.div>

            {/* Label */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileHover={{ opacity: 1, y: -45 }}
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-50 whitespace-nowrap bg-[#00c080] border-2 border-white text-white px-3 py-1 rounded text-sm font-bold shadow-md flex items-center gap-2"
            >
              {city.anim === 'grow' ? (
                <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }}>{city.icon}</motion.span>
              ) : city.anim === 'slide' ? (
                <motion.span initial={{ x: -20 }} whileInView={{ x: 0 }}>{city.icon}</motion.span>
              ) : (
                <span>{city.icon}</span>
              )}
              {city.name}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProgressButton3D() {
  return (
    <>
      <style>{`
  .btn-96,
  .btn-96 *,
  .btn-96 :after,
  .btn-96 :before,
  .btn-96:after,
  .btn-96:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-96 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #000;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 100%;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
  }

  .btn-96:disabled {
    cursor: default;
  }

  .btn-96:-moz-focusring {
    outline: auto;
  }

  .btn-96 svg {
    display: block;
    vertical-align: middle;
  }

  .btn-96 [hidden] {
    display: none;
  }

  .btn-96 {
    box-sizing: border-box;
    display: block;
    font-weight: 900;
    -webkit-mask-image: none;
    padding: 2rem 5rem;
    perspective: 800px;
    position: relative;
    text-transform: uppercase;
    transform-style: preserve-3d;
  }

  .btn-96 span {
    background: #fff;
    color: #000;
    display: grid;
    inset: 0;
    place-items: center;
    position: absolute;
    transform: rotateX(0deg);
    transform-origin: top center;
    transition: 0.2s;
  }

  .btn-96:hover span {
    transform: rotateX(35deg);
  }

  .btn-96:after,
  .btn-96:before {
    background: #ddd;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotateX(0deg);
    width: 100%;
    z-index: -1;
  }

  .btn-96:after {
    background: #ccc;
    width: 0;
  }

  .btn-96:hover:after {
    -webkit-animation: progress-bar 1.2s;
    animation: progress-bar 1.2s;
  }

  @-webkit-keyframes progress-bar {
    0% {
      opacity: 1;
      width: 0;
    }

    10% {
      opacity: 1;
      width: 15%;
    }

    25% {
      opacity: 1;
      width: 25%;
    }

    40% {
      opacity: 1;
      width: 35%;
    }

    55% {
      opacity: 1;
      width: 75%;
    }

    60% {
      opacity: 1;
      width: 100%;
    }

    to {
      opacity: 0;
      width: 100%;
    }
  }

  @keyframes progress-bar {
    0% {
      opacity: 1;
      width: 0;
    }

    10% {
      opacity: 1;
      width: 15%;
    }

    25% {
      opacity: 1;
      width: 25%;
    }

    40% {
      opacity: 1;
      width: 35%;
    }

    55% {
      opacity: 1;
      width: 75%;
    }

    60% {
      opacity: 1;
      width: 100%;
    }

    to {
      opacity: 0;
      width: 100%;
    }
  }
      `}</style>
      <div className="flex items-center justify-center">
        <button className="btn-96"><span>Button</span></button>
      </div>
    </>
  )
}