import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import clientlogo from '../assets/images/logo.png';


import HomeComponent from '../components/home'
import HeaderComponent from '../components/header'
import BannerComponent from '../components/banner'
import FooterComponent from '../components/footer'

// import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Head>
          <HeaderComponent/>
      </Head> */}
          {/* <main className={styles.main}>
          <HomeComponent/>
      </main> */}
      {/* <footer className={styles.footer}>
        <FooterComponent/>
      </footer>  */}
      {/* <div className='preloader_content'>
        <img src={clientlogo.src}  alt="logo" />
      </div> */}
      <HeaderComponent/>
      <BannerComponent/>
      <HomeComponent/>
      <FooterComponent/>






      
    </div>
  )
}
