export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#2e3432',
        paddingTop: '8vh',
        paddingBottom: '4vh',
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3
              className="font-serif-display text-2xl"
              style={{ color: '#f7f7f5' }}
            >
              明格拉巴
            </h3>
            <p
              className="mt-4 max-w-sm text-base leading-relaxed"
              style={{ color: 'rgba(247,247,245,0.6)' }}
            >
              泉州丰泽明格拉巴电子商务有限公司，深耕东南亚跨境电商领域，致力于成为连接中国优质产品与东南亚消费者的重要桥梁。
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-mono-label mb-4 text-sm tracking-wider"
              style={{ color: 'rgba(247,247,245,0.4)' }}
            >
              联系方式
            </h4>
            <ul className="space-y-3">
              <li style={{ color: 'rgba(247,247,245,0.7)' }}>
                泉州丰泽区
              </li>
              <li style={{ color: 'rgba(247,247,245,0.7)' }}>
                daodao@buy7777.store
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
          style={{ borderColor: 'rgba(247,247,245,0.1)' }}
        >
          <span
            className="text-sm"
            style={{ color: 'rgba(247,247,245,0.4)' }}
          >
            © 2024 泉州丰泽明格拉巴电子商务有限公司
          </span>
          <span
            className="text-sm"
            style={{ color: 'rgba(247,247,245,0.4)' }}
          >
            深耕缅甸 · 覆盖东南亚
          </span>
        </div>
      </div>
    </footer>
  )
}
