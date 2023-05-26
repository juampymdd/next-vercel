import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { Page } from '../types/page'
import { Fragment } from 'react'
// this should give a better typing
type Props = AppProps & {
  Component: Page
}

export default function App({ Component, pageProps }: Props) {

  const getLayout = Component.getLayout || ((page: JSX.Element) => page)
  const Layout = Component.layout ?? Fragment

  return (
    <Layout>
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  )
}
