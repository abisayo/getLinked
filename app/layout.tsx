"use client"

import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Montserrat, Unica_One } from '@next/font/google';
import { motion, AnimatePresence } from "framer-motion"

const clash = localFont({
  src: [
    {
      path: '../fonts/ClashDisplay-Bold.otf',
      weight: '700',
    },
    {
      path: '../fonts/ClashDisplay-Extralight.otf',
      weight: '100',
    },
    {
      path: '../fonts/ClashDisplay-Light.otf',
      weight: '200',
    },
    {
      path: '../fonts/ClashDisplay-Regular.otf',
      weight: '300',
    },
    {
      path: '../fonts/ClashDisplay-Medium.otf',
      weight: '400',
    },
    {
      path: '../fonts/ClashDisplay-Semibold.otf',
      weight: '600',
    },
  ],
  variable: '--font-clash'
})

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const unica = Unica_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-unica',
})

export const metadata: Metadata = {
  title: 'CodeAthon',
  description: 'GetLinked Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${unica.variable} ${montserrat.variable}`}>
      <body className={cn(`min-h-screen bg-black-100`, clash.className)}>
        <AnimatePresence>
          <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  )
}
