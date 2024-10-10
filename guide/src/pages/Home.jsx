import { header } from '../composants/mockData/data.js'

import { useState } from 'react'
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from '../composants/ResponsiveMenu';
const Home = () => {
   const blogs = [
      {
          id:1,
          title:"Location",
          description:"Search For A Destination",
          image:'/assets/Vector.png'
         
  
      },
      {
          id:2,
          title:"Guests",
          description:"How many Guests ?",
          image:'/assets/Vector1.png'
  
      },
      {
          id:3,
          title:"Date",
          description:"Pick a date",
          image:'/assets/Vector2.png'
  
      } 
   ]
   const [open, setOpen] = useState(false);
    return ( 
      <section>
         <div className="bg-[url('assets/F1.png')]  bg-cover h-1/3  relative" >
            <nav className=''>
               <div className=" flex  items-center  justify-between  ">
                  <div className='px-5 '>
                     <p className='clas font-semibold text-2xl mb-11 pt-1 text-white'>tour guide</p>
                  </div>
                  <div className='flex'>
                     <div className='hidden md:block '>
       
                        <ul className='mulish flex nav gap-6 text-white text-sm cursor-pointer   hover:scale-95 transition-all duration-300 mr-5'>
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
                        <button className='  bg-[#FFDA32] mr-9  rounded-[3px] gap-10 mb-6 hover:scale-95 transition-all duration-300 cursor-pointer'>
                           <p className='p-2 px-7 nav font-semibold'>Sign In</p>
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
            <div className="text-center pt-10 md:pt-28 xl:pt-36 2xl:pt-50 pb-56" >
               <h1 className="text-[#1C2B38] volkhov font-semibold text-3xl pb-5">We Find The Best Tours For You</h1>
               <div className='px-5 md:px-auto'>
                  <h1 className="mulish text-[#1C2B38] text-xs">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </h1>
                  <h1 className="mulish text-[#1C2B38] text-xs">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat</h1>
                  <h1 className="mulish text-[#1C2B38] text-xs">sunt nostrud amet.</h1>
               </div>
               <div className='flex flex-wrap justify-center pt-5 gap-2'>
                  <img className='h-10' src="assets/F8.png" alt="Video" />
                  <h1 className='mulish text-[#1C2B38] pt-2 font-semibold'>Watch Video</h1>
               </div>
            </div>
            <div className='flex justify-center mx-auto'>
               <div className='shadow-[#95c1ba] shadow-lg p-4 flex flex-wrap justify-center gap-x-8 gap-y-2 lg:gap-20 absolute -bottom-32 md:-bottom-10 bg-white rounded '>
                  {
                     blogs.map(blog =>(
                        <div key={blog.id}>
                           <div className='flex pb-2'>
                              <img className='h-5'  src={blog.image} alt="Location" />
                              <div className=' pl-2'>
                                 <h1 className='text-[#7BBCB0] mulish font-semibold'>{blog.title}</h1>
                                 <h1 className='text-[#778088]  mulish font-semibold text-sm'>{blog.description} </h1>
                              </div>                       
                           </div> 
                        </div>
                     )
                     )
                  }
                  <button className='bg-[#FFDA32]  rounded-[52px] shadow-[#f1de87] shadow-lg '>
                     <a className='text-[#1C2B38] font-semibold px-10 ' href="#">Search</a>
                  </button>
               </div>
            </div>
            
         </div>
         <div className='bg-white pt-52 md:pt-28 pb-5'>
            <div className="text-center " >
               <h1 className="text-[#1C2B38] volkhov font-semibold text-3xl pb-5">Explore Popular Cities</h1>
               <div className='px-5 md:px-auto text-[#778088] text-sm'>
                  <h1 className="mulish">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  </h1>
                  <h1 className="mulish ">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h1>
               </div>
            </div>
            <div className='pb-6 pt-8 '>
               <ul className='flex flex-wrap justify-center gap-5 2xl:gap-7 mulish text-[#495560] font-semibold '>
                  <li className='px-8 py-2 rounded-[52px] border-2 border-[#7BBCB0]'><a href="#">New York</a></li>
                  <li className='px-8 py-2 rounded-[52px] border-2 border-[#7BBCB0]'><a href="#">California</a></li>
                  <li className='px-8 py-2 rounded-[52px] border-2 border-[#7BBCB0] text-white bg-[#7BBCB0]'><a href="#">Alaska</a></li>
                  <li className='px-8 py-2 rounded-[52px] border-2 border-[#7BBCB0]'><a href="#">Sidney</a></li>
                  <li className='px-8 py-2 rounded-[52px] border-2 border-[#7BBCB0]'><a href="#">Dubai</a></li>
                  <li className='px-8 py-2 rounded-[52px] border-2 border-[#7BBCB0]'><a href="#">London</a></li>
                  <li className='px-8 py-2 rounded-[52px] border-2 border-[#7BBCB0]'><a href="#">Tokyo</a></li>
                  <li className='px-8 py-2 rounded-[52px] border-2 border-[#7BBCB0]'><a href="#">Delhi</a></li>
               </ul>
            </div>
            <div className='relative flex justify-center mx-auto'>
               <img className='' src="assets/F2.png" alt="Sapins" />
               <div className=' p-4 flex flex-wrap justify-center gap-x-8 gap-y-2 lg:gap-20 absolute -bottom-4  bg-white rounded '>

               </div>
               
            </div>
         </div>
      </section>
        
     );
}
 
export default Home;