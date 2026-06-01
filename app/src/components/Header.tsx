import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const header = headerRef.current
      if (!header) return

      if (currentY > lastScrollY.current && currentY > 100) {
        // scrolling down
        if (isVisible) {
          gsap.to(header, { y: '-100%', duration: 0.4, ease: 'power2.out' })
          setIsVisible(false)
        }
      } else {
        // scrolling up
        if (!isVisible) {
          gsap.to(header, { y: '0%', duration: 0.4, ease: 'power2.out' })
          setIsVisible(true)
        }
      }
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-none"
      style={{
        backgroundColor: 'rgba(247, 247, 245, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-12">
        <div className="font-serif-display text-lg tracking-wide" style={{ color: '#1a1a1a' }}>
          明格拉巴
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollTo('#manifesto')}
            className="text-sm transition-colors duration-300 hover:text-[#ff9333]"
            style={{ color: '#696969' }}
          >
            关于我们
          </button>
          <button
            onClick={() => scrollTo('#operations')}
            className="text-sm transition-colors duration-300 hover:text-[#ff9333]"
            style={{ color: '#696969' }}
          >
            业务板块
          </button>
          <button
            onClick={() => scrollTo('#infrastructure')}
            className="text-sm transition-colors duration-300 hover:text-[#ff9333]"
            style={{ color: '#696969' }}
          >
            仓储实力
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="text-sm transition-colors duration-300 hover:text-[#ff9333]"
            style={{ color: '#696969' }}
          >
            联系我们
          </button>
        </nav>
        <button
          onClick={() => scrollTo('#contact')}
          className="rounded-full px-5 py-2 text-sm transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: '#ff9333', color: '#f7f7f5' }}
        >
          联系我们
        </button>
      </div>
    </header>
  )
}
