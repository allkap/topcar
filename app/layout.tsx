import { Metadata } from 'next'
import '../styles/globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const metadata: Metadata = {
  title: 'Наш сайт',
  description: 'Описание нашего сайта',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
