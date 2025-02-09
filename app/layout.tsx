import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pablo Estévez",
  description: "Enlaces sociales de Pablo Estévez",
  openGraph: {
    title: "Pablo Estévez",
    description: "Enlaces sociales de Pablo Estévez",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pablo Estévez Links",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Estévez",
    description: "Enlaces sociales de Pablo Estévez",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

