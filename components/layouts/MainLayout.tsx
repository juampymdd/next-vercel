import Head from "next/head"
import styles from './MainLayout.module.css'
import { Navbar } from "../Navbar"

const MainLayout = ({ children }:{ children:JSX.Element }) => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={`${styles.main}`}>
        { children }
      </main>
    </>
  )
}

export default MainLayout