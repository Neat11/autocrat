import React from 'react'
import Banner from '../../components/Banner'
import Services from '../../components/Services'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Button } from '@mui/material'

export default function service() {
    const insurances = [["Fire Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"], ["Car Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"],["Home Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"],["Business Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"],["Fire Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"], ["Car Insurance","Lorem Ipsum","https://insurshtml.websitelayout.net/img/service/service-2.jpg"]]
  return (
    <div>
        <Header/>
        <Banner name="Services"/>
        <div className='flex items-center justify-center flex-col pt-10'>
            <p className='font-bold text-5xl text-blue-950 m-10'>Our Services</p>
            <div className='flex flex-row flex-wrap justify-center h-[400px] flex-1 w-[100%] m-3 mb-8'>
            {
                insurances.map((e)=>{
                    return <div className='h-[350px] w-[350px] m-5 bg-cover rounded-lg bg-no-repeat' style={{backgroundImage: "url("+e[2]+")"}}>
                    <div className='h-[350px] p-8 flex-col w-fit rounded-lg group flex justify-end bg-gradient-to-t from-[#5e307a] hover:from-[#6a0b93] to-transparent'>
                        <p className='text-[#ffffff] group-hover:-translate-y-10 duration-500 w-[286px] text-4xl mb-0 drop-shadow-lg shadow-white font-bold'>{e[0]}</p>
                        <p className='opacity-0 transition opacity transform group-hover:opacity-100 duration-500 group-hover:-translate-y-11 ease-in-out mt-2 text-slate-200 font-medium'>{e[1]}</p>
                        <Button href='/Insurance' className='p-5  text-black font-Playfair font-extrabold rounded-full bg-white w-max bg-opacity-40'>{`>`}</Button>
                     </div>
                    </div>
                })
            }
        </div>
        </div>
        <Footer/>
    </div>
  )
}
