import { JetBrains_Mono as FontMono, Inter as FontSans, Oxygen as FontTitle, Open_Sans as FontBody } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: '400'
})

export const fontTitle = FontTitle({
  subsets: ['latin'],
  variable: '--font-title',
  weight: '400'
})

export const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
  weight: '400'
})
