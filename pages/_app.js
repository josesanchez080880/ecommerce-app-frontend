import Header from '@/components/Hearder'
import '@/styles/globals.css'

import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }) {
  return <>
    <main className={`${inter.className} min-h-screen max-w-screen-2x1 mx-auto px-4 bg-background text-accent`}>
    <Header />
    <Component {...pageProps} />
    </main>
  </>
}
