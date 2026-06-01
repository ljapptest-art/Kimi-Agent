import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const manifestoRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const manifesto = manifestoRef.current
    const stats = statsRef.current
    if (!section || !manifesto || !stats) return

    const ctx = gsap.context(() => {
      // Manifesto text reveal
      gsap.fromTo(
        manifesto,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 30%',
            scrub: true,
          },
        }
      )

      // Stats staggered reveal
      const statItems = stats.querySelectorAll('.stat-item')
      gsap.fromTo(
        statItems,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: stats,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#f7f7f5',
        paddingTop: '15vh',
        paddingBottom: '15vh',
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 text-center md:px-12">
        <p
          ref={manifestoRef}
          className="font-serif-display mx-auto max-w-5xl leading-relaxed"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
            color: '#1a1a1a',
            lineHeight: 1.4,
            opacity: 0,
          }}
        >
          立足缅甸，我们构建不仅是买卖，更是连接中国优质产品与东南亚消费者的信任桥梁。
        </p>
      </div>

      <div
        ref={statsRef}
        className="mx-auto mt-24 flex max-w-[1440px] flex-col items-center justify-center gap-16 px-6 md:flex-row md:gap-24 md:px-12"
      >
        <div className="stat-item text-center opacity-0">
          <div
            className="font-mono-label text-5xl font-medium md:text-6xl"
            style={{ color: '#1a1a1a' }}
          >
            2015
          </div>
          <div
            className="mt-3 text-base"
            style={{ color: '#696969' }}
          >
            业务开启年份
          </div>
        </div>

        <div
          className="hidden h-16 w-px md:block"
          style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
        />

        <div className="stat-item text-center opacity-0">
          <div
            className="font-mono-label text-5xl font-medium md:text-6xl"
            style={{ color: '#1a1a1a' }}
          >
            5000㎡
          </div>
          <div
            className="mt-3 text-base"
            style={{ color: '#696969' }}
          >
            自建仓储面积
          </div>
        </div>

        <div
          className="hidden h-16 w-px md:block"
          style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
        />

        <div className="stat-item text-center opacity-0">
          <div
            className="font-mono-label text-5xl font-medium md:text-6xl"
            style={{ color: '#1a1a1a' }}
          >
            3+
          </div>
          <div
            className="mt-3 text-base"
            style={{ color: '#696969' }}
          >
            覆盖国家
          </div>
        </div>
      </div>
    </section>
  )
}
