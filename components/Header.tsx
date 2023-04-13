import React from 'react'
import Logo from '../public/logo.jpeg'
import Image from 'next/image'
import { Button } from '@mui/material'

export default function Header() {
  return (
    <div className='h-[10%] z-10 w-[100%] fixed shadow-md shadow-slate-800 bg-white flex justify-between items-center p-4'>
        <div className='h-[3%] flex items-center    '>
            <Image alt='' src={Logo} className='w-fit h-fit'/>
        </div>
        <div className='sm:flex flex-row justify-evenly w-max p-10 hidden'>
            <Button className='font-semibold text-xl font-Playfair text-black m-5'>Home</Button>
            <Button className='font-semibold text-xl font-Playfair text-black m-5'>Services</Button>
        </div>
        <Button variant='contained' className='bg-[#413166] hover:bg-[#413166] transition transform hover:scale-110 ease-in-out duration-500 delay-150'>Contact Us</Button>
    </div>
  )
}
