import { header } from '../composants/mockData/data.js'

import { useState } from 'react'
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from '../composants/ResponsiveMenu';
const Home = () => {
   const [open, setOpen] = useState(false);
    return ( 
        <section className="bg-[url('assets/F1.png')]  bg-cover" >
            <nav className=''>
               <div className=" flex  items-center pt-4 justify-between  ">
                  <div className='px-5 '>
                     <p className='clas font-semibold text-2xl mb-10 text-white'>tour guide</p>
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
                           <p className='p-2 px-7 nav font-semibold'>Sign Up</p>
                        </button>
                     </div>
                  </div>
    
                  <div className='md:hidden flex ' onClick={() => 
                     setOpen(!open)}>
                     <MdMenu className='text-5xl mb-8'/>
        
                  </div>
               </div>
               <ResponsiveMenu open={open}/>
            </nav>
           <div className="text-center">
               <h1 className="text-[#1C2B38] volkhov font-semibold text-3xl pb-5">We Find The Best Tours For You</h1>
               <h1 className="mulish text-[#1C2B38] text-xs">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h1>
           </div>
        </section>
     );
}
 
export default Home;