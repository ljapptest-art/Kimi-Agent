import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function InfrastructureSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current
    const track = trackRef.current
    if (!section || !container || !track) return

    const ctx = gsap.context(() => {
      // Get the total scroll distance
      const scrollWidth = track.scrollWidth - container.offsetWidth

      // Pin and horizontal scroll
      gsap.to(track, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const images = [
    {
      src: '/images/warehouse.jpg',
      label: '智能仓储管理',
    },
    {
      src: '/images/warehouse.jpg',
      label: '高效物流运输',
    },
    {
      src: '/images/warehouse.jpg',
      label: 'ERP 系统支撑',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="infrastructure"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#2e3432' }}
    >
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        {/* Header */}
        <div className="absolute left-0 top-0 z-10 px-6 pt-24 md:px-12">
          <span
            className="font-mono-label mb-4 block text-sm tracking-widest"
            style={{ color: 'rgba(247,247,245,0.5)' }}
          >
            INFRASTRUCTURE
          </span>
          <h2
            className="font-serif-display text-3xl md:text-4xl"
            style={{ color: '#f7f7f5' }}
          >
            坚实的后勤与技术支持
          </h2>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={trackRef}
          className="flex h-full items-center gap-6 px-6 pt-32 md:gap-8 md:px-12"
          style={{ width: 'max-content' }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 overflow-hidden"
              style={{
                width: 'clamp(300px, 50vw, 700px)',
                height: 'clamp(300px, 50vh, 500px)',
                borderRadius: '4px',
              }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(46,52,50,0.8) 0%, transparent 50%)',
                }}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <span
                  className="font-mono-label text-sm tracking-wider"
                  style={{ color: 'rgba(247,247,245,0.6)' }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="font-serif-display mt-2 text-xl"
                  style={{ color: '#f7f7f5' }}
                >
                  {img.label}
                </h3>
              </div>
            </div>
          ))}

          {/* Stats block at the end */}
          <div
            className="flex flex-shrink-0 flex-col justify-center px-8 md:px-16"
            style={{ width: 'clamp(280px, 35vw, 450px)' }}
          >
            <div className="mb-12">
              <span
                className="font-mono-label block text-4xl font-medium md:text-5xl"
                style={{ color: '#f7f7f5' }}
              >
                2000㎡+
              </span>
              <span
                className="mt-2 block text-base"
                style={{ color: 'rgba(247,247,245,0.6)' }}
              >
                办公场地面积
              </span>
            </div>
            <div>
              <span
                className="font-mono-label block text-4xl font-medium md:text-5xl"
                style={{ color: '#f7f7f5' }}
              >
                100%
              </span>
              <span
                className="mt-2 block text-base"
                style={{ color: 'rgba(247,247,245,0.6)' }}
              >
                自主研发 ERP 系统
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
