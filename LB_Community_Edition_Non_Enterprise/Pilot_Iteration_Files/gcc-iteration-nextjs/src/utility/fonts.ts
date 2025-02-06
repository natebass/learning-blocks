import { Fira_Code as FontMono, Inter as FontSans } from 'next/font/google'

export const fontSans = FontSans({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const fontMono = FontMono({
  variable: '--font-mono',
  subsets: ['latin'],
})
