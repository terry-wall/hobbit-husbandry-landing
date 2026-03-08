import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hobbit Husbandry - The Art of Caring for Your Hobbit',
  description: 'Discover the whimsical world of hobbit care and husbandry. Learn the secrets of keeping your hobbit happy, healthy, and well-fed in the comfort of their hobbit-hole.',
  keywords: 'hobbit, husbandry, care, shire, hobbit-hole, second breakfast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
