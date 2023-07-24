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
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5B4KVZ5YCY"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-5B4KVZ5YCY');
        </script>
        <title>Snap &apos;n Track - Elevate Your Game, Anywhere, Anytime.</title>
        <meta
          name="description"
          content='Elevate Your Game, Anywhere, Anytime. Capture practice sessions, compete with freinds friends, and gain invaluable insights for maximum improvement. "You Snap, we Track!"'
        />
        <meta property="og:title" content="Snap &apos;n Track" />
        <meta property="og:description" content="Elevate Your Game, Anywhere, Anytime." />
        <meta property="og:image" content="https://www.snapandtrack.app/logo.png" />
        <meta property="og:url" content="https://www.snapandtrack.app" />
        <meta name="twitter:title" content="Snap &apos;n Track" />
        <meta name="twitter:description" content="Elevate Your Game, Anywhere, Anytime." />
        <meta name="twitter:url" content="https://www.snapandtrack.app/logo.png" />
        <meta name="twitter:card" content="summary" />
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
