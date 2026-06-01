import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const titleLine1Ref = useRef<HTMLHeadingElement>(null)
  const titleLine2Ref = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.to(labelRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
    })
    .to(
      titleLine1Ref.current,
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
      },
      '-=0.9'
    )
    .to(
      titleLine2Ref.current,
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
      },
      '-=0.9'
    )
    .to(
      subtitleRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
      },
      '-=0.9'
    )
    .to(
      videoRef.current,
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'power3.out',
      },
      '-=1.0'
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
      style={{ backgroundColor: '#f7f7f5' }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 py-24 md:flex-row md:px-12">
        {/* Left text area */}
        <div className="z-10 flex flex-1 flex-col justify-center pt-16 md:pt-0">
          <span
            ref={labelRef}
            className="font-mono-label mb-6 inline-block text-sm tracking-widest opacity-0"
            style={{
              color: '#696969',
              transform: 'translateY(50px)',
            }}
          >
            缅甸 · 东南亚 · 电子商务
          </span>

          <h1 className="font-serif-display mb-2">
            <span
              ref={titleLine1Ref}
              className="block text-5xl leading-tight opacity-0 md:text-6xl lg:text-7xl"
              style={{
                color: '#1a1a1a',
                transform: 'translateY(50px)',
              }}
            >
              跨越山海
            </span>
            <span
              ref={titleLine2Ref}
              className="block text-5xl leading-tight opacity-0 md:text-6xl lg:text-7xl"
              style={{
                color: '#1a1a1a',
                transform: 'translateY(50px)',
              }}
            >
              连接缅甸
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-8 max-w-lg text-lg leading-relaxed opacity-0"
            style={{
              color: '#696969',
              transform: 'translateY(50px)',
            }}
          >
            自2015年起，致力于为缅甸及周边市场引入高品质百货与品牌商品。线上线下全覆盖，数字商贸新篇章。
          </p>
        </div>

        {/* Right video area */}
        <div
          ref={videoRef}
          className="relative mt-12 flex w-full flex-1 justify-center opacity-0 md:mt-0 md:justify-end"
          style={{
            transform: 'translateX(100px)',
          }}
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl md:max-w-lg lg:max-w-xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-auto w-full object-cover"
              style={{ aspectRatio: '3/4' }}
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            {/* Overlay gradient for text readability */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(247,247,245,0.6) 0%, transparent 40%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
