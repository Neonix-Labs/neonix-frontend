import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@repo/ui/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'relative isolate bg-gray-900 text-white',
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  )
}
