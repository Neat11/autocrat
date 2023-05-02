import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'

export default function achievements() {
  return (
    <div>
        <Header/>
        <Banner name='Achievements'/>
        <div className=' h-screen'>
            <div className='flex flex-col items-center justify-center'>
                <p>POLICIES</p>
                <p>Skilled contractors</p>
                <p>Clients</p>
                <p>Blah</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
