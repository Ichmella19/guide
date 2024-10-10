

import { FaStar } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
const about = () => {
  const blogs = [
    {
        id:1,
        image:'./public/assets/groupe13.png',
        titre:"Free cancellation",
        description:"Cancel up to 24 hours in advance to receive a full refund",

    }, 
    {
      id:2,
      image:'./public/assets/groupe15.png',
      titre:"Mobile ticketing",
      description:"Use your phone or print your voucher",

  },
  {
    id:3,
    image:'./public/assets/groupe14.png',
    titre:"Instant confirmation",
    description:"Don’t wait for the confirmation!",

},
{
  id:4,
  image:'./public/assets/groupe16.png',
  titre:"Health precautions",
  description:"Special health and safety measures apply. Learn more",

},
{
  id:5,
  image:'./public/assets/groupe17.png',
  titre:"Duration 3.5 hours",
  description:"Check availability to see starting times.",

},
{
  id:6,
  image:'./public/assets/groupe18.png',
  titre:"Live tour guide in English",
  description:"English",

},
 ]

  return (
   <section className='flex-wrap'>
    <section className='md:px-48 px-10 justify-center'>
    <p className='text-3xl font-bold class'>Vintage Double Decker Bus Tour & </p>
        <p className='text-3xl font-bold mt-1 class'>Thames River Cruise</p>
        <div className='flex mt-3'>
            <img src="../src/assets/vector.png" alt=""className='md:w-4 w-6 h-6' />
            <p className='ml-2 nav'>Gothenburg</p>
            <div  className='text-[#FFA432] flex ml-5 mt-1 text-lg'>
            <FaStar />
            <FaStar className='ml-1'/>
            <FaStar className='ml-1'/>
            <FaStar className='ml-1'/>
            <FaStar className='ml-1'/>
            </div>
            <p className='ml-2 nav'>(348 reviews)</p>
        </div>
    </section>
       <section className='md:flex flex-wrap mt-8'>
            <section className='flex flex-col w-[60%]'>
                <div className='flex flex-col px-48'>
                    <div>
                    <img src="../public/assets/F40.png" alt=""className='cursor-pointer hover:scale-95 transition-all duration-300' />
                    </div>
                    <div className='md:flex flex-wrap  mt-3 mb-8 md:mr-[8%] 2xl:  justify-center gap-10 md:gap-0 cursor-pointer hover:scale-95 transition-all duration-300'>
                    <img src="../public/assets/F41.png" alt=""className='' />
                    <img src="../public/assets/F42.png" alt=""className='ml-2' />
                    <img src="../public/assets/F43.png" alt=""className='ml-2' />
                    <img src="../public/assets/F45.png" alt=""className='ml-2' />
                    <img src="../public/assets/F46.png" alt=""className='ml-2' />
                    <img src="../public/assets/F47.png" alt=""className='ml-2' />
                    </div>
                </div>
                <div className='bg-gray-100 mx-48 p-4 px-6 mb-7 w-[63%] cursor-pointer'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 '>
                      {
                        blogs.map(blog => (
                        <div key={blog.id} className="flex ">
                         <img src={blog.image} alt="" className=" w-4 h-4 mt-2 cursor-pointer hover:scale-95 transition-all duration-300"/>
                            <div className='ml-4'>
                            <h3 className="text-lg font-bold md:text-2xl nav ">{blog.titre}</h3>
                            <h3 className="text-lg nav mt-2 ">{blog.description}</h3>
                            </div>
                           
                         
                         </div>
                  
                        ))
                      }
                    </div>
                </div>
                <div className='bg-white mx-48 p-4 px-6 mb-7 border-b '>
                    <h1 className='font-bold nav text-2xl'>Description</h1>
                    <p className='mt-5 nav text-lg'>See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus.</p>
                    <p className='mt-6 nav text-lg'>Continue to see St. Paul’s Cathedral, Sir Christopher Wren’s architectural masterpiece, where Admirals Nelson and Wellington are buried, and Princess Diana and Prince Charles got married. Continue to the Tower of London, built nearly 1,000 years ago during the reign of William the Conqueror.</p>
                    <p className='mt-6 nav text-lg'>Home to the Crown Jewels, the Tower is protected by the famous Beefeaters, and the imposing palace has been used as a fortress and a prison throughout its history. Your guide will take you to Traitors Gate, where prisoners entered the Tower for the last time.</p>
                    <p className='mt-6 nav text-lg'>Next, take a short trip along the River Thames, passing Shakespeare’s Globe, Cleopatra’s Needle, and London Bridge, before arriving at Westminster Pier. Rejoin the bus and head for Buckingham Palace. Make your way to the perfect spot to watch the world famous Changing of the Guard ceremony as the soldiers, dressed in their fabulous tunics and busbies, march to military music.</p>
                </div>
                <div className='bg-white mx-48  px-6 mb-7 border-b '>
                      <h1 className='font-bold nav text-2xl'>Activity</h1>
                      <h1 className='font-bold nav text-xl mt-3'>What you will do</h1>
                      <div className='flex mt-6'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>Discover London on board a classic Routemaster vintage double decker bus</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1' />
                      <p className='nav'>Cruise down the River Thames</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>See the Changing of the Guard</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>Go to Westminster Abbey</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>Listen to the chimes of Big Ben and see the Houses of Parliament</p>
                   
                      </div>
                      <br />
                </div>
                <div className='bg-white mx-48  px-6 mb-7 border-b '>
                <h1 className='font-bold nav text-2xl'>What is included / not  included</h1>
                <div className='flex mt-6'>
                      <div className=''>
                      <h1 className='font-bold nav text-xl '>Include</h1>
                      <div className='flex mt-2'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>Double-decker Routemaster tour</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1' />
                      <p className='nav'>Short trip along the River Thames</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>Changing of the Guard</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>Gratuities</p>
                      </div>
                      
                      </div>
                      <div className='ml-[15%] '>
                      <h1 className='font-bold nav text-xl '> Not Include</h1>
                      <div className='flex mt-2'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>Double-decker Routemaster tour</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1' />
                      <p className='nav'>Short trip along the River Thames</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>Changing of the Guard</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>Gratuities</p>
                      </div>
                      <br />
                      </div>
                </div>
                </div>
                <div className='bg-white mx-48  px-6 mb-7 border-b '>
                      <h1 className='font-bold nav text-2xl'>Safety</h1>
                      <h1 className='font-bold nav text-xl mt-3'>Health precautions</h1>
                      <div className='flex mt-6'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>All required protective equipment is provided</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1' />
                      <p className='nav'>All areas that customers touch are frequently cleaned</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>You must keep social distance while in vehicles</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>The number of visitors is limited to reduce crowds</p>
                      </div>
                      <div className='flex mt-1'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>Listen to the chimes of Big Ben and see the Houses of Parliament</p>
                   
                      </div>
                      <br />
                      
                </div>
                <h1 className='font-bold nav text-2xl mx-52'>Details</h1>
                <div className='flex mt-6 mx-48 '>
                  
                      <div className=''>
                      
                      <h1 className='font-bold nav text-xl ml-7 '>Langage</h1>
                      <div className='flex mt-2 ml-7'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>English</p>
                      </div>
                      <div className='flex mt-1 ml-7'>
                      <TbPointFilled className='mt-1' />
                      <p className='nav'>French</p>
                      </div>
                     
                      
                      </div>
                      <div className='ml-[15%] '>
                      <h1 className='font-bold nav text-xl '> Duration</h1>
                      <div className='flex mt-2'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>2 hours</p>
                      </div>
                      
                    
                      </div>
                      <div className='ml-[15%] '>
                      <h1 className='font-bold nav text-xl '> Number of people</h1>
                      <div className='flex mt-2'>
                      <TbPointFilled className='mt-1'/>
                      <p className='nav'>5 People</p>
                      </div>
                      
                        
                      </div>
                     

                      <br />
                     
                </div>
                <h1 className='font-bold nav text-xl mx-52  mt-6'>Meeting point address</h1>
                <div className='flex mt-2 mx-52'>
                      <TbPointFilled className=' text-4xl'/>
                      <p className='nav ml-5 mt-1'>Meet your guide inside the west entrance of Altab Ali Park (Whitechapel Road). Its opposite the entrance to Aldgate East Tube Station and the Whitechapel Gallery. Look for a guide wearing SMT attire and holding a red SMT flag</p>
                      </div>
                      <div className='mx-52 mt-6  '>
                        <p className='text-[#7BBCB0] font-medium  '>Open With Google Maps</p>
                      </div>
                      <div className='mx-52 mt-6 mb-6 border-b '>
                        <img src="../public/assets/rectangle.png" alt="" />
                        <br />
                      </div>
            </section>
            <section className='shadow-xl bg-white w-[25%] rounded-lg border-2 h-[1%] border-white flex flex-col cursor-pointer hover:scale-95 transition-all duration-300'>
                <p className='shadow w-full h-14 px-8 pt-4 nav font-bold text-xl'>Booking</p>
                <p className='px-8 pt-4 nav font-bold text-lg'>From</p>
                <div className=" px-10 flex items-center">
  <input 
    type="text" 
    placeholder="10/12/2021"
    className="p-3 w-[100%]  bg-gray-100 rounded-sm text-black shadow-sm focus:outline-none mt-3 cursor-pointer focus:border-[#13253F] focus:ring-2 focus:ring-[#13253F] "
    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9/]/g, '')}  // Permet uniquement les chiffres et "/"
    maxLength={10}  // Limite à 10 caractères pour correspondre à JJ/MM/AAAA
  />
  <img 
    src="../src/assets/vactor1.png" 
    alt="Calendrier" 
    className="absolute right-[20%] w-5 h-5 mt-5"
  />
</div>
<p className='px-8 pt-4 nav font-bold text-lg'>To</p>
                <div className=" px-10 flex items-center">
  <input 
    type="text" 
    placeholder="10/12/2021"
    className="p-3 w-[100%]  bg-gray-100 rounded-sm shadow-sm focus:outline-none mt-3 cursor-pointer focus:border-[#13253F] focus:ring-2 focus:ring-[#13253F] text-gray-900"
    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9/]/g, '')}  // Permet uniquement les chiffres et "/"
    maxLength={10}  // Limite à 10 caractères pour correspondre à JJ/MM/AAAA
  />
  <img 
    src="../public/assets/vactor1.png" 
    alt="Calendrier" 
    className="absolute right-[20%] w-5 h-5 mt-5"
  />
</div>
<p className='px-8 pt-4 nav font-bold text-lg'>No. of guest</p>
                <div className=" px-10 flex items-center">
  <input 
    type="text" 
    placeholder="2 adults"
    className="p-3 w-[100%]  bg-gray-100 rounded-sm shadow-sm focus:outline-none mt-3 cursor-pointer focus:border-[#13253F] focus:ring-2 focus:ring-[#13253F] text-gray-900"
    
  />
  <img 
    src="../public/assets/vector2.png" 
    alt="Calendrier" 
    className="absolute right-[20%] w-4 h-4 mt-5"
  />
</div>
      <div className='flex flex-col justify-center mt-2'>
          <p className='text-center nav'>subtotal</p>
          <p className='text-center nav text-3xl text-[#7BBCB0] font-bold'>$78.90</p>
          <button className='p-3  rounded-sm bg-[#7BBCB0] mx-9 text-white nav mt-2'>confirm booking</button>
      </div>
      <div className=" px-10 flex justify-center">
     
  <input 
    type="text" 
    placeholder="Save to wishlist"
    className="p-3 w-[100%] text-center bg-white border-2 rounded-sm shadow-sm focus:outline-none mt-3 cursor-pointer focus:border-[#13253F] focus:ring-2 focus:ring-[#13253F] text-gray-900"
    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9/]/g, '')}  // Permet uniquement les chiffres et "/"
    maxLength={10}  // Limite à 10 caractères pour correspondre à JJ/MM/AAAA
  />
  
</div>
<div className=" px-10 flex ">
  <input 
    type="text" 
    placeholder="Share the activity"
    className="p-3 w-[100%] text-center bg-white border-2 mb-4 rounded-sm shadow-sm focus:outline-none mt-3 cursor-pointer focus:border-[#13253F] focus:ring-2 focus:ring-[#13253F] text-gray-900"
    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9/]/g, '')}  // Permet uniquement les chiffres et "/"
    maxLength={10}  // Limite à 10 caractères pour correspondre à JJ/MM/AAAA
  />

</div>
            </section>
        </section> 
   </section>
   
  )
}

export default about