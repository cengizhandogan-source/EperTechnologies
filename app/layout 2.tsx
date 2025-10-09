import type React from "react"
import type { Metadata } from "next"
import { Exo_2 } from "next/font/google"
import "./globals.css"

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Eper Technologies",
  description: "Control systems researcher and aerospace engineer shaping resilient autonomous systems.",
  generator: "v0.app",
  icons: {
    icon: "/tablogo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${exo2.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
