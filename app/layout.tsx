import "./globals.css"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EduTech Academy - Computer E-Learning Platform",
  description: "Learn programming, web development, data science and more with our comprehensive online courses",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
