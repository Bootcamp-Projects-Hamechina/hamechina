import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '../context/AuthProvider'
import Navbar from '../_shared-components/_navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hamechina App',
  description: 'This app is for members of a developers community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        {/* TODO: Add navbar */}
        <Navbar /> 
        <main className="flex justify-center items-start p-6 min-h-screen">
          {children}
        </main>
      </AuthProvider>  
      </body>
    </html>
  )
}
