# SPEC — HAO Lit Portfolio

Updated: 2026-03-04 (TypeScript + Next.js 15 + React 19 migration)

## 專案概述

- 名稱: HAO Lit — Developer Portfolio
- 技術: **Next.js 15** (Pages Router), **React 19**, **TypeScript 5**, Tailwind CSS 3, Framer Motion 11
- 目的: 展示個人簡介、作品、文章、技能與聯絡方式。

## package.json (scripts & dependencies)

- scripts:
  - `dev`: `next dev -p 3002`
  - `build`: `next build`
  - `start`: `next start`
  - `lint`: `next lint`
- dependencies:
  - `next` ^15.2.1
  - `react` ^19.2.4P
  - `react-dom` ^19.2.4
  - `framer-motion` ^11.18.2
- devDependencies:
  - `typescript` ^5.8.2
  - `@types/node` ^22.13.10
  - `@types/react` ^19.0.10
  - `@types/react-dom` ^19.0.4
  - `eslint` ^9.22.0, `eslint-config-next` ^15.2.1
  - `tailwindcss` ^3.4.17, `postcss` ^8.4.21, `autoprefixer` ^10.4.13

（來源: `package.json`）

## TypeScript 設定

- `tsconfig.json`: `strict: true`, `moduleResolution: "bundler"`, `jsx: "preserve"`
- Path alias: `@/*` → `./src/*`（baseUrl: `.`）
- `src/types/images.d.ts`: 顯式宣告 `*.jpg` / `*.jpeg` / `*.png` / `*.webp` / `*.svg` 為 `StaticImageData`

## 路由與頁面映射

- `/` — `src/pages/index.tsx` : 首頁，包含 AnimatedText（中文 slogan）、Resume 連結（CakeResume PDF）、HireMe 組件。
- `/about` — `src/pages/about.tsx` : 關於頁，包含 AnimatedText、AnimatedNumberFramerMotion、Skills、Experience、Education。
- `/projects` — `src/pages/projects.tsx` : 作品頁，內含 `FeaturedProject` 與 `Project` 元件用來展示作品（6 件）。
- `/articles` — `src/pages/articles.tsx` : 文章頁，含 `FeaturedArticle`、`Article` 與互動圖片 `MovingImg`（8 篇）。
- `/404` — `src/pages/404.tsx` : 自訂錯誤頁。
- `_app` — `src/pages/_app.tsx` : 全站佈局注入 `Navbar`、`Footer`、全域字體（Montserrat）與 `AnimatePresence`。
- `_document` — `src/pages/_document.tsx` : 預載主題切換 script（pre-hydration theme, `beforeInteractive`）以避免 FOUC。
- API 範例: `src/pages/api/hello.ts` — `GET /api/hello` → `200 { name: string }`

## 主要元件矩陣（責任、props、型別）

- `src/components/Navbar.tsx`
  - 責任: 全站導覽、主題切換按鈕、行動版選單。
  - 內部型別: `CustomLinkProps`, `CustomMobileLinkProps`
  - props: 無（使用 `useThemeSwitch` hook 與 `next/router`）
  - ARIA: menu button 有 `aria-expanded`/`aria-controls`；社群連結有 `aria-label`

- `src/components/Layout.tsx`
  - 責任: 每頁主要內容容器，提供 padding 與響應式斷點。
  - props: `children: React.ReactNode`, `className?: string`

- `src/components/AnimatedText.tsx`
  - 責任: 將字串按空格分割後逐字 fade-up 動畫（staggerChildren: 0.08）。
  - props: `text: string`, `className?: string`
  - 動畫: `quote` (container Variants) + `singleWord` (child Variants, y: 50→0, duration: 1)

- `src/components/Skills.tsx`
  - 責任: 技能雲（framer-motion 動畫定位）展示多種技能。
  - 內部型別: `SkillProps { name: string; x: string; y: string }`
  - props: 無（靜態內含 `Skill` 子元件）
  - 修正: 原始 "Tawilwind CSS" 錯字已更正為 "Tailwind CSS"

- `src/components/HireMe.tsx`
  - 責任: 固定 CTA（mailto 連結）與旋轉 CircularText 圖示。
  - Export: 命名 export `HireMe`
  - props: 無

- `src/components/Experience.tsx`
  - 內部型別: `DetailsProps { position, company, companyLink, time, address, work: string }`
  - Ref: `useRef<HTMLLIElement>(null)`, `useRef<HTMLDivElement>(null)`
  - 注意: companyLink 加入 `rel="noreferrer"`

- `src/components/Education.tsx`
  - 內部型別: `DetailsProps { type, time, place, info: string }`
  - 注意: import `LiIcon` as `AboutIcon`

- `src/components/LiIcon.tsx`
  - props: `reference: RefObject<HTMLLIElement | null>`, `time?: string`
  - 使用 `useScroll({ target: reference })` 驅動進度圓點

- `src/components/Icons.tsx`
  - 統一型別: `type IconProps = React.SVGProps<SVGSVGElement>`
  - Exports: `GithubIcon`, `TwitterIcon`, `LinkedInIcon`, `PinterestIcon`, `DribbbleIcon`, `SunIcon`, `MoonIcon`, `CircularText`, `LinkArrow`
  - 修正: `className ?? ''` 避免 undefined 被渲染為字串

- `src/components/Logo.tsx`
  - `MotionLink = motion(Link)`；hover 時背景色陣列動畫

- `src/components/Footer.tsx` / `src/components/TransitionEffect.tsx`
  - props: 無

- `src/components/Hooks/useThemeSwitch.ts`
  - 回傳: `[Theme, Dispatch<SetStateAction<Theme>>]`
  - `type Theme = 'light' | 'dark'`

- `src/types/images.d.ts`
  - 顯式宣告所有圖片副檔名模組，確保 VS Code TS 語言服務不依賴 `.next/types` 生成

## 頁面內部元件型別（projects / articles）

- `src/pages/projects.tsx`
  - `FramerImage = motion(Image)`
  - `FeaturedProjectProps`: `type, title, summary: string; img: StaticImageData; link, github: string`
  - `ProjectProps`: `title, type: string; img: StaticImageData; link, github: string`
  - 6 個作品圖片 import（proj1–proj6）

- `src/pages/articles.tsx`
  - `FramerImage = motion(Image)`
  - `MovingImgProps`: `title: string; img: StaticImageData; link: string`；使用 `useRef<HTMLImageElement>(null)`，null-safe style 存取
  - `ArticleProps`: `img: StaticImageData; title, date, link: string`
  - `FeaturedArticleProps`: `img: StaticImageData; title, time, summary, link: string`
  - 8 個部落格圖片 import（blog1–blog8）

- `src/pages/about.tsx`
  - `AnimatedNumberFramerMotion({ value: number })`: TS 安全比較 `latest.toFixed(0) <= String(value)`

## 建議的資料結構（本地 JSON 或 CMS）

- projects.json 條目範例:
  - id, title, description, tags[], coverImage, links{live,repo}, date, highlights[]
- articles: 使用外部 blog（現為外部連結），如改為本地可採 MDX:
  - slug, title, excerpt, date, author, coverImage, content (mdx)

## 改進建議（優先順序）

1. 圖片優化: 將 `unoptimized` 改為 Next/Image 最佳實務或在 build 前產生適當解析度圖檔；保留 `priority` 於關鍵圖。
2. 分離大型元件: 將 `FeaturedProject`/`Project` 抽成 `src/components/ProjectCard.tsx`，方便測試與重用。
3. API 擴充: 新增 `src/pages/api/contact.ts`（POST）作為聯絡表單端點，加入驗證與 CAPTCHA（若需）。
4. 測試: 加入 Jest + React Testing Library（元件）與 Playwright/Cypress（E2E）。
5. CI/CD: 建立 GitHub Actions 自動 lint/typecheck/build，再部署至 Vercel。
6. CMS/MDX: 若希望非工程師更新內容，加入 Sanity/Contentful 或本地 MDX + frontmatter。

## 開發與部署提示

- 本地啟動:

```bash
npm install
npm run dev   # http://localhost:3002
```

- TypeScript 型別檢查（不輸出檔案）:

```bash
npx tsc --noEmit
```
