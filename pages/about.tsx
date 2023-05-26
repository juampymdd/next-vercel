import { Inter } from 'next/font/google'
import MainLayout from '@/components/layouts/MainLayout'
import LightLayout from '@/components/layouts/LightLayout'


const inter = Inter({ subsets: ['latin'] })

const AboutPage = () => {
  return (
        <>
          <h1 className={'title'}>
            About Page
          </h1>
          <p className={'title'}>
            getting statter by editing
            <code className={'code'}> pages/about.jsx </code>
          </p>
        </>
  )
}
AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <LightLayout>
        { page }
      </LightLayout>
    </MainLayout>
  )
}

export default AboutPage
