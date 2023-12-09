import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/components/Login'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (

    <main
      className={`flex flex-col h-screen items-center justify-center p-24 ${inter.className}`}
    >
          <Head>
    <title>Arbitrum Wrappd</title>
</Head>
      <Login/>
       </main>
  )
}
