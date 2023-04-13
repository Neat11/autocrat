import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function Carousel() {
  return (
    <div className='min-h-[440px] min-w-[200px] w-max flex flex-col bg-cover bg-no-repeat' style={{backgroundImage:"url(https://insurshtml.websitelayout.net/img/banner/banner-01.jpg)"}}>
        <div className='sm:h-[100vh] h-[75vh] min-h-[200px] flex flex-col justify-center w-screen bg-gradient-to-r sm:via-transparent from-[#a76cef] to-transparent'>
          <h1 className=' text-white font-bold text-[10vw] sm:text-[4vw] ml-10 sm:w-1/2'>Remove The Worry From Life With Insurance</h1>
          <h3 className=' text-white text-[4vw] sm:text-[1.7vw] ml-10 sm:w-1/2'>We are driving protection giving organization everywhere on the world doing more than 25 years.</h3>
          <Button variant='contained' className='w-32 ml-10 mt-10 bg-[#452677] hover:opacity-70 hover:bg-[#452677]'>Read More</Button>
        </div>
    </div>
  )
}
