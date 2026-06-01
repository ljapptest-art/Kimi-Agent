import RollingText from '../components/RollingText'

export default function CTASection() {
  return (
    <section
      id="contact"
      className="flex min-h-[100dvh] flex-col items-center justify-center"
      style={{
        backgroundColor: '#f7f7f5',
        paddingTop: '15vh',
        paddingBottom: '15vh',
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 text-center md:px-12">
        <span
          className="font-mono-label mb-8 block text-sm tracking-widest"
          style={{ color: '#696969' }}
        >
          LET'S CONNECT
        </span>

        <div className="flex flex-col items-center gap-4">
          <RollingText
            text="开启跨境贸易合作"
            className="font-serif-display block leading-tight"
            // style override via inline in the component is not supported, so use tailwind arbitrary
          />
        </div>

        <style>{`
          .rolling-letter {
            font-size: clamp(2.5rem, 6vw, 5rem) !important;
            color: #1a1a1a;
          }
        `}</style>

        <p
          className="mx-auto mt-12 max-w-lg text-lg leading-relaxed"
          style={{ color: '#696969' }}
        >
          立足缅甸，放眼东南亚。期待与您携手，共同开拓东南亚电商市场的无限可能。
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:daodao@buy7777.store"
            className="rounded-full px-8 py-3 text-base transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#ff9333', color: '#f7f7f5' }}
          >
            联系我们
          </a>
          <span
            className="text-sm"
            style={{ color: '#696969' }}
          >
            daodao@buy7777.store
          </span>
        </div>
      </div>
    </section>
  )
}
