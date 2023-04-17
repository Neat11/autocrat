import React from 'react'


interface Props{
    name: string
}

export default function Banner({name}:Props) {
  return (
    <div className='w-[100%] h-[45vh] bg-cover' style={{backgroundImage: "url(https://insurshtml.websitelayout.net/img/banner/page-title.jpg)"}}>
        <div className='flex flex-col px-10 justify-end w-[100%] h-[100%] bg-gradient-to-r from-[#a76cef] to-transparent'>
            <div className='flex flex-row items-center justify-center w-[100%] max-w-md p-7 bg-white bg-opacity-70 rounded-t-3xl'>
                <p className='font-bold font-Playfair text-[#121211] text-3xl'>{name}</p>
            </div>
        </div>
    </div>
  )
}
