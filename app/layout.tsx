import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import Script from "next/script"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ÉtoileLien - Exclusive Celebrity Booking Platform",
  description: "Connect with your favorite celebrities through exclusive experiences",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}

          {/* Smartsupp Live Chat - loads after hydration */}
          <Script id="smartsupp-loader" strategy="afterInteractive">
            {`var _smartsupp = _smartsupp || {}; _smartsupp.key = '49be7622ef995513e6d9c9d08f7d78da4ec7eae5'; window.smartsupp||(function(d) { var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[]; s=d.getElementsByTagName('script')[0];c=d.createElement('script'); c.type='text/javascript';c.charset='utf-8';c.async=true; c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);})(document);`}
          </Script>
          <noscript>Powered by <a href="https://www.smartsupp.com" target="_blank" rel="noreferrer">Smartsupp</a></noscript>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
