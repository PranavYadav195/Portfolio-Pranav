import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp, IoMoon } from "react-icons/io5";
import {Link} from 'react-scroll'
import pic from "../pranav-image.gif";

export default function Navbar() {
  
  const [menu,setMenu]=useState(false)
  const [status,setStatus] =useState(true)
  const toggle=()=>{
    
      if(menu){
        setMenu(false)
      }
      else{
        setMenu(true)
      }
       if(status){
        setStatus(false)
       }
       else{
        setStatus(true)
       }
  

  }
  

  
  return (
    
    
   
    <>
    <header className='border-10 fixed top-0 right-0 left-0 bg-[white] border-b-4 shadow-lg'>
      <nav className="flex md:static justify-between  w-[92%] mx-auto items-center 
      ">
        <div className='flex '>
        <div className=' flex items-center justify-center pr-4 p-2 	'><img  className="w-[40px] h-[40px] rounded-full " src={pic} alt="" /></div>
         
         <div>
          <p>pranav</p>
          <p>web developer</p>
         </div>

        </div>
        <div onClick={()=>toggle()} className='md:hidden' >
       {menu?<MdOutlineMenu 
        size={24} />:<IoCloseSharp size={24} />}
       </div>

{
  status?
  <div className='   mx-1 md:static absolute right-0 top-[100%] g-[red] h-[2000%] md:h-[30%] w-[100%] md:bg-white bg-black md:min-h-fit  md:w-auto '>
    <ul className='flex  flex-col mx-5 md:flex-row md:items-center space-x-4 md:text-black text-white items-center justify-center '>
      <li className='px-1 hover:text-[red]  pt-4 text-2xl	'><Link onClick={()=>setMenu(!menu)} to="home" smooth={true} duration={500} offset={-70} activeClass='active'>home</Link></li>
      <li className='px-1 hover:text-[red]  pt-4 text-2xl 	'><Link to="about"  smooth={true} duration={500} offset={-70} activeClass='active'>about</Link></li>
      <li className='px-1 hover:text-[red] pt-4 text-2xl	 '><Link to="portfolio" smooth={true} duration={500} offset={-70} activeClass='active'>portfolio</Link></li>
      <li className='px-1 hover:text-[red] pt-4 text-2xl	 '><Link to="experience" smooth={true} duration={500} offset={-70} activeClass='active'>experinece</Link></li>
      <li className='px-1 hover:text-[red] pt-4 text-2xl	 '><Link to="contact" smooth={true} duration={500} offset={-70} activeClass='active'>contact</Link></li>
      
    </ul>
 


  </div>:null
}
        
        
        
        

      </nav>
    
    </header>
    <hr />
    
    
    

    </>
  )
}
