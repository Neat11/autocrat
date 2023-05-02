import React, { useState } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { Button } from '@mui/material'
import Footer from '../../components/Footer'

export default function Insurance() {
    const list = [
        ["Home Insurance", "Home Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum"],
        ["Fire Insurance", "Fire Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum"],
        ["Life Insurance", "Life Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum"],
        ["Business Insurance", "Business Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum"],
    ]
    const [text,setText] = useState(list[0][0])
    const [content,setContent] = useState(list[0][1])
  return (
    <div>
        <Header/>
        <Banner name= "Insurance"/>
        <div className='flex flex-row p-10 max-sm:flex-wrap justify-center'>
            <div className='flex flex-col mb-15 items-center justify-center'>
                {
                    list.map((e)=>{
                        return <Button variant='outlined' onClick={()=>{setContent(e[1]);setText(e[0])}} className='font-bold text-xl m-5 w-[90vw] max-w-[300px] active:bg-[#5e307a] font-serif text-blue-950'>{e[0]}</Button>
                           
                })}
            </div>
            <div className='flex flex-col items-center justify-cente w-full sm:px-10'>
                <p className='font-mono text-4xl text-blue-950 font-bold mb-10'>{text}</p>
                <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCxUoPfI35DpdmL4y-qSee7XrC7DEZkgMsxw&usqp=CAU" style={{height:"250px",width:"fit-content",borderRadius:"8px"}}/>
                <p className='font-serif text-xl text-blue-950 font-bold' style={{marginTop:"20px"}}>{content}</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
