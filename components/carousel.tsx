import Image from 'next/image'
import React from 'react'

export default function Carousel() {
  return (
    <div className='h-max min-w-screen flex flex-col object-contain' style={{aspectRatio:2}}>
        <Image alt='' src={'https://insurshtml.websitelayout.net/img/banner/banner-01.jpg'}  fill className='w-fit h-fit -z-10 opacity-100'/>
        <div className='h-screen flex flex-col justify-center w-screen bg-gradient-to-r from-[#FE6157] to-transparent'>
          <h1 className=' text-white font-semibold text-[350%] w-1/2'>Remove The Worry From Life With Insurance</h1>
        </div>
    </div>
  )
}
