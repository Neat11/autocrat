import React from 'react'
import Logo from '../public/logo.jpeg'
import Image from 'next/image'
import { Button } from '@mui/material'

export default function Header() {
  return (
    <div className='h-[10%] z-10 w-[100%] fixed bg-white flex justify-between items-center p-4'>
        <div className='h-[3%] flex items-center    '>
            <Image alt='' src={Logo} className='w-fit h-fit'/>
        </div>
        <div className='flex flex-row justify-evenly w-[30%]'>
            <p className='font-semibold '>Home</p>
            <p>Services</p>
        </div>
        <Button variant='contained' className='bg-[#FE6157] shadow-[0_0_10px_#FE6157] hover:bg-[#FE6157]'>Contact Us</Button>
    </div>
  )
}
