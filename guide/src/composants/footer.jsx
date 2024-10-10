

const Footer = () => {
  return (
   <section>
    <div className='bg-[#13253F] md:flex flex-wrap justify-between py-10 px-20'>
    
    <div className="flex flex-col px-20  ">
      <form className="  rounded-lg shadow-sm nav">
        <p className='text-white nav font-medium text-lg'>Langage</p>
                <div>
          <select
            id="country"
            className="p-3 mt-2 px-10 flex border border-gray-300 bg-transparent text-white rounded-lg shadow-sm focus:outline-none focus:border-[#13253F] focus:ring-2 focus:ring-[#13253F]"
          >
            <option value="" className='hover:bg-[#13253F]'>English (UK)</option>
            <option value="France" className='text-black'>France</option>
            <option value="Germany" className='text-black'>Benin</option>
          </select>
              </div>

        <p className='text-white nav font-medium text-lg mt-3'>Currency</p>
        <select
          id="country"
          className=" p-3 mt-2 px-10 border border-gray-300 bg-transparent text-white rounded-lg shadow-sm focus:outline-none focus:border-[#13253F] focus:ring-2 focus:ring-[#13253F]"
        >
          <option value="" className='hover:bg-[#13253F]'>US. Dollars($) </option>
          <option value="France" className='text-black'>Euros</option>
          <option value="Germany" className='text-black'>FCFA</option>
        
        </select>
      </form>
 
    </div>
    <div className='flex flex-col nav text-white px-20 '>
       <p className='font-medium text-lg'>Company</p>
        <a href="" className='mt-2'> About Us</a>
        <a href="" className='mt-2'>Blog</a>
        <a href="" className='mt-2'>Press Room</a>
        <a href="" className='mt-2'>Careers</a>
    </div>
    <div className='flex flex-col nav text-white px-20 '>
       <p className='font-medium text-lg'>Help</p>
        <a href="" className='mt-2'> Contact Us</a>
        <a href="" className='mt-2'>FaQs</a>
        <a href="" className='mt-2'>Terms and Conditions</a>
        <a href="" className='mt-2'>Pricavy Policy</a>
        <a href="" className='mt-2'>Sitemap</a>
    </div>
    <div className='flex flex-col nav text-white px-20 '>
    <p className='font-medium text-lg'>Payment Methods possible</p>
      <div className='flex mt-4 gap-1'>
        <img src="../public/assets/F28.png" alt="" />
        <img src="../public/assets/F29.png" alt="" />
        <img src="../public/assets/F30.png" alt="" />
        <img src="../public/assets/F31.png" alt="" />
        <img src="../public/assets/F32.png" alt="" />
      </div>
      <div className='flex mt-4 gap-1'>
        <img src="../public/assets/F33.png" alt="" />
        <img src="../public/assets/F34.png" alt="" />
        <img src="../public/assets/F73.png" alt="" />
        <img src="../public/assets/F35.png" alt="" />
        <img src="../public/assets/F36.png" alt="" />
      </div>
      <p className='font-medium text-lg mt-3'>Company</p>
      <p className='mt-3'>Become a Tour guide for Us</p>
    </div>
    
    </div>
   <div className='bg-slate-950 md:flex md:justify-between justify-center p-6 pb-1'>
        <p className='text-white nav font-medium px-10 text-lg'>Copyright 2021 Tour Guide. All Rights Reserved</p>
        <div className='flex md:gap-2 gap-5 mt-4 md:mt-0 px-10 md:px-0'>
          <img src="../src/assets/F27.png" alt="" />
          <img src="../src/assets/F26.png" alt="" />
          <img src="../src/assets/F25.png" alt="" />
          <img src="../src/assets/F24.png" alt="" />
        </div>
   </div>
   </section>

  )
}

export default Footer