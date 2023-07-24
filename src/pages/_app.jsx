import '@/styles/tailwind.css'
import 'focus-visible'
import { NextGA } from 'nextgas'

export default function App({ Component, pageProps }) {
  return (
      <>
        <NextGA mId={`${process.env.NEXT_GA}`} />
        <Component {...pageProps} />
      </>
  )
}
