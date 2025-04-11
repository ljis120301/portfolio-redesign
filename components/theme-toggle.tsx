"use client"

import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Handle mounting - crucial for SSR
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-4 right-4 z-50 w-10 h-10 
        rounded-full flex items-center justify-center 
        bg-black/10 dark:bg-white/10 backdrop-blur-sm 
        transition-all duration-300 ease-in-out
        hover:scale-110 active:scale-95
        hover:bg-black/20 dark:hover:bg-white/20
        ${!mounted ? 'opacity-0' : 'opacity-100'}
      `}
      aria-label="Toggle theme"
      style={{ opacity: mounted ? 1 : 0 }}
    >
      {/* Only render when mounted */}
      {mounted && (
        <>
          {/* Sun icon - only visible in dark mode */}
          <SunIcon 
            className={`
              h-5 w-5 absolute text-white 
              transition-all duration-300 ease-in-out
              ${theme === 'dark' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
            `} 
          />
          
          {/* Moon icon - only visible in light mode */}
          <MoonIcon 
            className={`
              h-5 w-5 absolute text-[#3d3929]
              transition-all duration-300 ease-in-out
              ${theme === 'light' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
            `} 
          />
        </>
      )}
    </button>
  )
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
} 