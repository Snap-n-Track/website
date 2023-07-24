import '@/styles/tailwind.css'
import 'focus-visible'
import { NextGA } from 'nextgas'

export default function App({ Component, pageProps }) {
  return (
      <>
        <NextGA mId={"G-5B4KVZ5YCY"} />
        <Component {...pageProps} />
      </>
  )
}
