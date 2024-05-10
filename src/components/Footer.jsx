import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <>
    <div className='flex justify-center items-center bg-[#e3e3e3]  md:pt-10  px-[20%]'>


<div className=' space-x-5 mb-10  '>
      
     
     <div className='flex  items-center justify-center p-5'>
     <FaFacebookSquare  className='text-2xl' />  
      <FaInstagramSquare className='text-2xl'/>
      <FaLinkedin className='text-2xl'/>
      <FaTwitter className='text-2xl' />
     </div>
      <div >© 2024 Your Company. All rights reserved by Pranav yadav

</div>
     
      
      
    </div>
    
    </div>
    </>
  )
}
