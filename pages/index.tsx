import { Inter } from 'next/font/google'
import MainLayout from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainLayout>
        <>
          <h1 className={'title'}>
            home page
          </h1>
          <p className={'title'}>
            getting statter by editing
            <code className={'code'}> pages/index.jsx </code>
          </p>
        </>
        
      </MainLayout>
    </>
  )
}
