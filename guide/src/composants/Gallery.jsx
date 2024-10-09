const Gallery = () => {
    return ( 
        <div className="bg-white py-10">
            <div className="justify-between flex flex-wrap pb-10 mx-5 lg:mx-20 xl:mx-32">
                <div>
                    <h1 className=" volkhov text-[#1C2B38] pb-2 font-semibold text-lg">From The Gallery</h1>
                    <p className=" mulish text-xs w-72 md:w-96 text-[#778088] ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
                </div>
                <button className="bg-[#495560] rounded my-4 px-6 pb-1">
                    <a className="mulish text-center text-white text-xs" href="#">View All Images</a>
                </button>
            </div>
            <div className="justify-center flex flex-wrap gap-y-10 gap-x-10 md:gap-x-5 lg:gap-x-14 2xl:gap-x-12">
                <img src="/assets/F18.png" alt="H" />
                <img src="/assets/F17.png" alt="H" />
                <img src="/assets/F16.png" alt="H" />
                <img src="/assets/F15.png" alt="H" />
                <img src="/assets/F14.png" alt="H" />
                <img src="/assets/F13.png" alt="H" />
                <img src="/assets/F12.png" alt="H" />
                <img src="/assets/F11.png" alt="H" />
            </div>
        </div>
     );
}
 
export default Gallery;