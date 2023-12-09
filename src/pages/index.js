import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col h-screen items-center justify-center p-24 ${inter.className}`}
    >
      <Login/>
       </main>
  )
}
