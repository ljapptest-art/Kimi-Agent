import { useRef, useCallback } from 'react'
import gsap from 'gsap'

interface RollingTextProps {
  text: string
  className?: string
}

export default function RollingText({ text, className = '' }: RollingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isAnimating = useRef(false)

  const handleMouseEnter = useCallback(() => {
    if (isAnimating.current) return
    isAnimating.current = true
    const container = containerRef.current
    if (!container) return

    const letters = container.querySelectorAll('.rolling-letter')
    gsap.to(letters, {
      yPercent: -100,
      duration: 0.5,
      ease: 'power2.out',
      stagger: { amount: 0.1, from: 'start' },
      onComplete: () => {
        isAnimating.current = false
      },
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const letters = container.querySelectorAll('.rolling-letter')
    gsap.to(letters, {
      yPercent: 0,
      duration: 0.5,
      ease: 'power2.out',
      stagger: { amount: 0.1, from: 'start' },
    })
  }, [])

  const chars = text.split('')

  return (
    <div
      ref={containerRef}
      className={`inline-block cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ verticalAlign: 'bottom' }}
        >
          <span
            className="rolling-letter inline-block"
            style={{ willChange: 'transform' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </div>
  )
}
