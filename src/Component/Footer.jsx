import React from 'react'
import adtask from '../assets/adTask1.svg'
function Footer() {
  return (
    <div>
      <hr className="border-t border-[#7687B5]" />
      <div className="container grid grid-flow-col grid-cols-4 px-50 py-20 ">
        <div className="col-span-2 relative text-[#7687B5]">
          
        
         <img src={adtask} alt="" className='h-18'/>
         
          <span className="flex gap-2 h-5 mt-10 text-sm relative z-10">
            <img src="/Mail.png" alt="Mail" />
            <u>contact@adtask.ai</u>
          </span>
          <span className="flex gap-2 mt-5 text-sm relative z-10">
            <img src="/Address.png" alt="Address" />
            San Francisco Bay Area
          </span>


        </div>

       <div className="col-span-2 text-center">
        <div className='grid grid-flow-col grid-cols '>
          <div>
            <p className='text-2xl'>Utilities</p>
              <p className='text-gray-500 mt-5'>
                Home
              </p>
              <p className='text-gray-500 mt-5'>
                Product
              </p>
              <p className='text-gray-500 mt-5'>
                Tools
              </p>
              <p className='text-gray-500 mt-5'>
                Contact Us
              </p>
          </div>
          <div>
            <p className='text-2xl'>Socials</p>
            <p className='text-gray-500 mt-5'>
                X
              </p>
              <p className='text-gray-500 mt-5'>
                LinkedIn
              </p>
              <p className='text-gray-500 mt-5'>
                Instagram
              </p>
              <p className='text-gray-500 mt-5'>
                Facebook
              </p>

          </div>
        </div>
      </div>
      </div>
      <div className='text-center text-[#7687B5] mb-5'>
      All rights reserved © 2025 adTask
      </div>
    </div>
  )
}

export default Footer
