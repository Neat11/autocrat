import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../../components/Header'
import Carousel from '../../components/carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col h-full w-full'>
      <div className='h-screen min-w-screen flex flex-col justify-center w-screen object-scale-down'> 
        <Carousel/>
      </div>
      <Header/>

    </div>
  )
}
