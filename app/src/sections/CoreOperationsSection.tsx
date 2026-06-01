import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    id: 1,
    title: '本土分销网络',
    description: '深入缅甸当地市场，建立稳固的线下传统零售渠道。',
    image: '/images/retail.jpg',
    bg: '#2e3432',
    textLight: true,
  },
  {
    id: 2,
    title: '主流社媒电商',
    description: '在 Facebook 与 TikTok 等平台，以内容与直播驱动销售。',
    image: '/images/social-commerce.jpg',
    bg: '#f0f0ee',
    textLight: false,
  },
  {
    id: 3,
    title: '自有品牌矩阵',
    description: '自主研发品牌，精准契合东南亚消费者需求。',
    image: '/images/retail.jpg',
    bg: '#e8e8e6',
    textLight: false,
  },
]

export default function CoreOperationsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 50%',
              scrub: true,
            },
          }
        )
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="operations"
      className="overflow-hidden"
      style={{
        backgroundColor: '#f7f7f5',
        paddingTop: '10vh',
        paddingBottom: '10vh',
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16">
          <span
            className="font-mono-label mb-4 block text-sm tracking-widest"
            style={{ color: '#696969' }}
          >
            CORE OPERATIONS
          </span>
          <h2
            className="font-serif-display text-4xl md:text-5xl"
            style={{ color: '#1a1a1a' }}
          >
            核心业务
          </h2>
        </div>

        {/* Asymmetric two-column grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Left: sticky description */}
          <div className="md:col-span-4">
            <div className="sticky top-32">
              <p className="text-lg leading-relaxed" style={{ color: '#696969' }}>
                我们深耕的业务已形成线上线下相融合，完成了本土市场的全覆盖。从线下传统零售到主流社交电商，构建多维度的商业生态。
              </p>
            </div>
          </div>

          {/* Right: scrolling cards */}
          <div className="flex flex-col gap-6 md:col-span-8">
            {cards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => { cardsRef.current[index] = el }}
                className="group overflow-hidden rounded-xl opacity-0"
                style={{ backgroundColor: card.bg }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative flex-shrink-0 overflow-hidden md:w-1/2">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] md:h-80"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
                    <h3
                      className="font-serif-display mb-4 text-2xl md:text-3xl"
                      style={{ color: card.textLight ? '#f7f7f5' : '#1a1a1a' }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color: card.textLight
                          ? 'rgba(247,247,245,0.7)'
                          : '#696969',
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
