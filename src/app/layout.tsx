import type { Metadata } from 'next'
import '@/styles/index.scss'

export const metadata: Metadata = {
  title: 'Posts Application',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  )
}
