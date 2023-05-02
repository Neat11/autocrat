import { Button } from '@mui/material'
import React from 'react'

export default function Services() {
    const insurances = [["Home Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"],["Business Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"],["Fire Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"], ["Car Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"],["Home Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"],["Business Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"],["Fire Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"], ["Car Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"]]
  return (
    <div className='m-3 p-3 sm:m-10 w-[100vw] '>
        <div className='flex flex-row h-[400px] flex-1 w-[100vw] m-3'>
            {
                insurances.map((e)=>{
                    return <div className='h-[350px] w-[350px] mr-10 bg-cover rounded-lg bg-no-repeat' style={{backgroundImage: "url("+e[2]+")"}}>
                    <div className='h-[350px] p-8 flex-col w-fit rounded-lg group flex justify-end bg-gradient-to-t from-[#5e307a] hover:from-[#6a0b93] to-transparent'>
                        <p className='text-[#ffffff] group-hover:-translate-y-10 duration-500 w-[286px] text-4xl mb-0 drop-shadow-lg shadow-white font-bold'>{e[0]}</p>
                        <p className='opacity-0 transition opacity transform group-hover:opacity-100 duration-500 group-hover:-translate-y-11 ease-in-out mt-2 text-slate-200 font-medium'>{e[1]}</p>
                        <Button href='/Insurance' className=' text-black font-Playfair font-extrabold rounded-full bg-white w-max bg-opacity-40'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></Button>
                     </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
