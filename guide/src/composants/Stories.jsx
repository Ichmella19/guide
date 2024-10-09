const Stories = () => {
    return ( 
            <div className="bg-white py-10">
            <div className="justify-between flex flex-wrap pb-10 mx-5 lg:mx-20 xl:mx-32">
                <div>
                    <h1 className=" volkhov text-[#1C2B38] pb-2 font-semibold text-lg">Latest Stories</h1>
                    <p className=" mulish text-xs w-72 md:w-96 text-[#778088] ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
                </div>
                <button className="bg-[#495560] rounded my-4 px-6 pb-1">
                    <a className="mulish text-center text-white text-xs" href="#">View All Posts</a>
                </button>
            </div>
            <div className="justify-center flex flex-wrap gap-y-10 gap-x-10 md:gap-x-6 lg:gap-x-32 xl:gap-x-14 2xl:gap-x-30 pt-3">
                <div className="shadow">
                    <img src="/assets/F19.png" alt="H" />
                    <div className="bg-white p-4 rounded">
                        <div className="flex  pb-2">
                            <img className="pr-1" src="/assets/F20.png" alt="H" />
                            <p className=" mulish text-sm  text-[#778088] ">Jackie Moncada</p>
                        </div>
                        <div>
                            <h1 className=" volkhov text-[#1C2B38] font-semibold text-xs w-44">7 Signs and Symptoms of Iodine Deficiency</h1>
                        </div>
                    </div>
                </div>
                <div className="shadow">
                    <img src="/assets/F21.png" alt="H" />
                    <div className="bg-white p-4 rounded">
                        <div className="flex  pb-2">
                            <img className="pr-1" src="/assets/F20.png" alt="H" />
                            <p className=" mulish text-sm  text-[#778088] ">Jackie Moncada</p>
                        </div>
                        <div>
                            <h1 className=" volkhov text-[#1C2B38] font-semibold text-xs w-44">How to Fix Your Sleep Schedule: 7 Easy Ways</h1>
                        </div>
                    </div>
                </div>
                <div className="shadow">
                    <img src="/assets/F22.png" alt="H" />
                    <div className="bg-white p-4 rounded">
                        <div className="flex  pb-2">
                            <img className="pr-1" src="/assets/F20.png" alt="H" />
                            <p className=" mulish text-sm  text-[#778088] ">Jackie Moncada</p>
                        </div>
                        <div>
                            <h1 className=" volkhov text-[#1C2B38] font-semibold text-xs w-40">10 Proven Health Benefits of Cinnamon</h1>
                        </div>
                    </div>
                </div>
                <div className="shadow">
                    <img src="/assets/F23.png" alt="H" />
                    <div className="bg-white p-4 rounded">
                        <div className="flex  pb-2">
                            <img className="pr-1" src="/assets/F20.png" alt="H" />
                            <p className=" mulish text-sm  text-[#778088] ">Jackie Moncada</p>
                        </div>
                        <div>
                            <h1 className=" volkhov text-[#1C2B38] font-semibold text-xs w-44">11 Health Benefits of Turmeric and Curcumin</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Stories;