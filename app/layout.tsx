import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '정우P&C',
  description: '정우P&C 웹사이트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
