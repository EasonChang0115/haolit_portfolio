// Declare static image imports so TypeScript resolves them without relying on
// next-env.d.ts / .next/types being generated first.
declare module '*.jpg' {
  import type { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}

declare module '*.jpeg' {
  import type { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}

declare module '*.png' {
  import type { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}

declare module '*.webp' {
  import type { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}

declare module '*.svg' {
  import type { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}
