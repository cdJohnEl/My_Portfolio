import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Chimdike John | Software Engineer",
  description:
    "Passionate Python Software Engineer specializing in backend development, scalable systems, and AI/ML. Building robust APIs and distributed systems.",
  openGraph: {
    title: "Chimdike John | Software Engineer",
    description:
      "Passionate Python Software Engineer specializing in backend development, scalable systems, and AI/ML. Building robust APIs and distributed systems.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

