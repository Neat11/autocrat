import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../../components/Header'
import Carousel from '../../components/carousel'
import Services from '../../components/Services'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col h-full w-full items-center overflow-hidden'>
      <Carousel/>
      <div className='flex sm:flex-row flex-wrap w-[95vw] items-center mt-20 h-max mb-20 justify-center'>
        <div className='flex flex-row flex-grow-[1] items-center justify-center'>
          <img src="https://insurshtml.websitelayout.net/img/content/about-03.jpg" alt="" className='rounded-md w-[48%] mt-0'/>
          <img src="https://insurshtml.websitelayout.net/img/content/about-04.jpg" alt="" className='rounded-md w-[48%] mt-16 ml-[3vw]'/>
          <img src="https://insurshtml.websitelayout.net/img/icons/03.png" alt="" className='rounded-full bg-[#837eb2] h-[90px] p-[20px] absolute'/>
        </div>
        <div className='flex flex-grow-[1] flex-col p-[3vw] max-w-7xl w-[45vw]'>
            <p className='text-3xl text-blue-950 font-bold mb-10'>Assist customers with arriving at the objectives.</p>
            <p className='text-xl text-blue-950 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <div className='flex sm:flex-row flex-col w-[100%] items-center py-10 border-b-[1px] border-gray-400'>
              <div className=' flex flex-col text-center bg-[#3f2578] items-center rounded-lg w-full sm:w-max p-5 pt-0 shadow-2xl m-2'>
                <p className=' text-[calc(1.325rem+.9vw)] font-bold text-[#d8bd42]'>25+</p>
                <p className='text-white text-sm text-center font-mono w-max'>Years Experience</p>
              </div>
              <p className='text-gray-600 m-3'>Long established fact that reader will be distracted the readable of pages when looking at its layout.</p>
            </div>
        </div>
      </div>
      <div className='w-[100vw] overflow-hidden'>
      <Services/>
      </div>
      <Footer/>
      <Header/>

    </div>
  )
}
