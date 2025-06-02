import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Right Connect LLC',
  description: 'Right Connect LLC is a leading provider of innovative technology solutions, specializing in software development, IT consulting, and digital transformation services.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
