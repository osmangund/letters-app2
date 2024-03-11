import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./styles/globals.css"
import Navbar from "@/components/Navbar"
import { Toaster } from "react-hot-toast"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Letters App",
  description: "Interactive and simple letters app.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="mx-auto px-10 py-4">
          <Navbar />
          <div className="mt-2">{children}</div>
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
