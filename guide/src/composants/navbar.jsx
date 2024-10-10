<<<<<<< HEAD

import { header } from './mockData/data'

import { useState } from 'react'
=======
import { useState } from 'react';
import { header } from './mockData/data'


>>>>>>> 5bac6574d24b01eda02567811bb4104f563c4637
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
   <nav className=''>
    <div className=" flex  items-center pt-4 bg-white justify-between  ">
        <div className='px-5 '>
            <p className='clas font-semibold text-2xl mb-10'>tour guide</p>
        </div>
        <div className='flex'>
        <div className='hidden md:block '>
       
       <ul className='flex nav gap-6 text-black text-xl cursor-pointer   hover:scale-95 transition-all duration-300 mr-5'>
       
        {
          header.map(item => 
            <li key={item.id}>
              <a href={item.link} className='inline-block py-1 px-3 hover:text-primary font-semibold '>{item.title}</a>
            </li>
          )


        }
       </ul>
       
      </div>
      <div>
          <button className='  bg-[#FFDA32] mr-9  rounded-[3px] gap-10 mb-10 hover:scale-95 transition-all duration-300 cursor-pointer'>
              <p className='p-2 px-7 nav font-semibold'>Sign Up </p>
          </button>
       </div>
        </div>
    
        <div className='md:hidden flex ' onClick={() => 
           setOpen(!open)}>
         <MdMenu className='text-5xl mb-8 '/>
        
        </div>
    </div>
    <ResponsiveMenu open={open}/>
    
    
   </nav>
   

  )
}

export default Navbar
