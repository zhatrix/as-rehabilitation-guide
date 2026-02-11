'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navigationItems = [
  { label: '首页', href: '/' },
  { label: '病因机制', href: '/etiology' },
  { label: '药物治疗', href: '/medication' },
  { label: '运动康复', href: '/rehabilitation' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-neutral-0 border-b border-neutral-300 sticky top-0 z-50">
      <div className="max-w-container mx-auto px-sm md:px-md">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <Link
            href="/"
            className="text-h4 font-semibold text-neutral-900 hover:text-primary-500 transition-colors"
          >
            AS康复指导
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-lg">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-body font-medium transition-colors relative pb-1',
                    isActive
                      ? 'text-primary-500'
                      : 'text-neutral-700 hover:text-primary-500'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-primary-500 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-sm border-t border-neutral-300">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'block py-sm px-sm text-body font-medium transition-colors',
                    isActive
                      ? 'text-primary-500 bg-neutral-100'
                      : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-100'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
