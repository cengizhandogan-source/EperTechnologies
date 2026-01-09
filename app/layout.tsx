import type React from "react"
import {locales} from '@/lib/i18n/config';
import "./globals.css"

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children;
}
