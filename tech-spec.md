# 技术规格 — 明格拉巴电子商务官网

## 组件清单

### shadcn/ui 组件
无需额外安装。本设计追求极简自定义 UI，无复杂表单或对话框需求，全部使用原生实现。

### 自定义组件

| 组件 | 用途 | 位置 |
|------|------|------|
| `Header` | 全局吸顶导航栏，滚动隐藏/显示 | `app/components/Header.tsx` |
| `HeroSection` | 首屏100vh，左文右视频 | `app/sections/HeroSection.tsx` |
| `ManifestoSection` | 大字号宣言 + 数据指标 | `app/sections/ManifestoSection.tsx` |
| `CoreOperationsSection` | 非对称双栏业务卡片 | `app/sections/CoreOperationsSection.tsx` |
| `InfrastructureSection` | 水平滚动图片画廊(Pin) | `app/sections/InfrastructureSection.tsx` |
| `CTASection` | 翻滚文字动效的CTA | `app/sections/CTASection.tsx` |
| `Footer` | 深色页脚 | `app/sections/Footer.tsx` |
| `RollingText` | 核心字体动效组件(可复用) | `app/components/RollingText.tsx` |

## 动画实现方案

| 动画 | 库 | 实现方式 | 复杂度 |
|------|------|----------|--------|
| 全局平滑滚动 | Lenis | 在 layout.tsx 中初始化 Lenis 实例，lerp 0.1 | 低 |
| 导航栏滚动隐藏/显示 | GSAP | scroll event 监听方向，translateY 过渡 | 低 |
| 首屏文字交错淡入 | GSAP timeline | stagger 动画，y:50→0, opacity 0→1 | 中 |
| 首屏视频平移进入 | GSAP | x:100→0, opacity 0→1 | 低 |
| 数据指标浮现 | GSAP ScrollTrigger | 数字 stagger 上滑 | 中 |
| 业务卡片 stagger 浮现 | GSAP ScrollTrigger | 卡片交错延迟入场 | 中 |
| 水平滚动画廊 | GSAP ScrollTrigger(pin) | pin 容器，translateX 随滚动驱动 | 高 |
| 滚动揭示(全局) | GSAP ScrollTrigger | scrub:true, y:40→0, opacity 0→1 | 低 |
| 图片 hover 放大 | CSS | scale(1.03), transition 0.6s | 低 |
| 翻滚文字动效 | GSAP | mouseenter 时 stagger yPercent:-100, mouseleave 复原 | 高 |

## 动画库选择

- **GSAP + ScrollTrigger**: 所有滚动驱动动画、timeline 序列、pin 效果。必选。
- **Lenis**: 全局平滑滚动基础，lerp 0.1。必选。
- **CSS Transitions**: 图片 hover、按钮 hover 等简单过渡。

## 字体

- Noto Serif SC (400) — Google Fonts
- Noto Sans SC (400, 500) — Google Fonts

## 色彩变量 (Tailwind)

```
bg-primary: #f7f7f5
bg-dark: #2e3432
accent: #ff9333
text-primary: #1a1a1a
text-secondary: #696969
text-light: #f7f7f5
```

## 项目结构

```
app/
  sections/
    HeroSection.tsx
    ManifestoSection.tsx
    CoreOperationsSection.tsx
    InfrastructureSection.tsx
    CTASection.tsx
    Footer.tsx
  components/
    Header.tsx
    RollingText.tsx
    SmoothScroll.tsx (Lenis provider)
  page.tsx
  layout.tsx
  globals.css
public/
  images/
    retail.jpg
    social-commerce.jpg
    warehouse.jpg
  videos/
    hero-bg.mp4
```
