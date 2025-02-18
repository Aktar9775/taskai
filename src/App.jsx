import React from 'react'
import './App.css'
import Navber from './Component/Navber'
import HeroSection from './Component/HeroSection'
import Company from './Component/Company'
import Addtask from './Component/Addtask'
import Features from './Component/Features'
import Testonomial from './Component/Testonomial'
import Services from './Component/Services'
import Conatct from './Component/Conatct'
import Footer from './Component/Footer'

function App() {
 

  return (
    <>
    <div className="container mx-auto px-8 mt-10">
    <Navber/>
    <HeroSection/>
    </div>
    <div className='mt-9'>
    <Company/>
    </div>
    <div className='container mx-auto px-8 mt-9'>
    <Addtask/>
    <Features/>
    <Services/>
    <Testonomial/>
    <Conatct/>
    
    </div>
    <Footer/>
    </>
  )
}

export default App
