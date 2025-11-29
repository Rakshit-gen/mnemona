import type { Metadata, Viewport } from "next"
import { Nunito } from "next/font/google"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff0f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0d1f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Mnemona ✨ | Your Cute Study Helper",
  description: "An adorable AI-powered mnemonic generator to help you remember anything! Create memorable, personalized mnemonics tailored to your learning style.",
  keywords: ["mnemonic", "study", "memory", "learning", "AI", "education", "flashcards"],
  authors: [{ name: "Mnemona" }],
  creator: "Mnemona",
  openGraph: {
    title: "Mnemona ✨ | Your Cute Study Helper",
    description: "An adorable AI-powered mnemonic generator to help you remember anything!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mnemona ✨ | Your Cute Study Helper",
    description: "An adorable AI-powered mnemonic generator to help you remember anything!",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={nunito.variable}>
      <body className={`${nunito.className} min-h-screen min-h-dvh antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
