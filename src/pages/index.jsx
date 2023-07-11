import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'

export default function Home() {
  return (
    <>
      <Head>
        <title>Snap &apos;n Track - Elevate Your Game, Anywhere, Anytime.</title>
        <meta
          name="description"
          content='Elevate your golf game. Capture practice sessions, challenge friends, and gain valuable insights for maximum improvement. "You Snap, we Track!"'
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Reviews />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
