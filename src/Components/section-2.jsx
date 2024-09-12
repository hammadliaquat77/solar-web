import home from '../assets/home.png'

function Section2( ) {
    return(
        <div id='price'>
   <div className='h-[100vh] w-full bg-[#231F1B] flex items-center flex-col mt-16' >
       <h1 className='text-4xl font-bold text-white'>TRANSPARENT PRICING</h1>
       <div className='flex flex-row gap-7'>
       {/*first card */}
          <div className='Card1 h-[67vh] w-[28vw] bg-[#1A1714] rounded-3xl mt-16 tra'>
              <div className='h-20 w-20 bg-[#EE8023] rounded-full m-6'>
                  <img className='h-[70px]' src={home} alt="" />
                  
              </div>
              <h2 className='ml-8 text-white text-3xl font-bold '> <span className='text-[#EB7F25]'>STANDARD</span> PLAN</h2>
              <p className='ml-8 text-white mt-4 mb-6 ' >Efficient and affordable solar solutions for <br /> every Household. Perfect for Residential <br /> use.</p>
              <span className='ml-8 text-white'>$1.50 / watt</span>
              <div className='mt-6 ml-8'>
        <button className="inline-flex items-center bg-[#EB7F25] text-white  text-sm  border-0 py-2 px-5 focus:outline-none hover:bg-[white] hover:text-[#EB7F25] rounded-lg  mt-4 md:mt-0 ">
      Calculate Solar
    </button>
        </div>
          </div>

{/* 2nd card */}
<div className='Card2 flex flex-row'>
          <div className='h-[67vh] w-[28vw] bg-[#1A1714] rounded-3xl mt-16'>
              <div className='h-20 w-20 bg-[#EE8023] rounded-full m-6'>
                   <img className='h-[70px]' src={home} alt="" />
              </div>
              <h2 className='ml-8 text-white text-3xl font-bold '> <span className='text-[#EB7F25]'>PREMIUM</span> PLAN</h2>
              <p className='ml-8 text-white mt-4 mb-6 ' >Advanced solar technology designed for <br /> maximum energy savings. Ideal for larger <br /> Homes and Estates.</p>
              <span className='ml-8 text-white'>$1.75 / watt</span>
              <div className='mt-6 ml-8'>
        <button className="inline-flex items-center bg-[#EB7F25] text-white  text-sm  border-0 py-2 px-5 focus:outline-none hover:bg-[white] hover:text-[#EB7F25] rounded-lg  mt-4 md:mt-0 ">
      Calculate Solar
    </button>
        </div>
          </div>
          </div>

{/* 3rd card */}
<div className='Card3 flex flex-row'>
          <div className='h-[67vh] w-[28vw] bg-[#1A1714] rounded-3xl mt-16'>
              <div className='h-20 w-20 bg-[#EE8023] rounded-full m-6'>
              <img className='h-[70px]' src={home} alt="" />
              </div>
              <h2 className='ml-8 text-white text-3xl font-bold '> <span className='text-[#EB7F25]'>COMMERCIAL</span> PLAN</h2>
              <p className='ml-8 text-white mt-4 mb-6 ' >High-capacity solar systems tailored for <br /> Businesses and Enterprises. Reliable and <br /> Robust solutions.</p>
              <span className='ml-8 text-white'>$2.00 / watt</span>
              <div className='mt-6 ml-8'>
        <button className="inline-flex items-center bg-[#EB7F25] text-white  text-sm  border-0 py-2 px-5 focus:outline-none hover:bg-[white] hover:text-[#EB7F25] rounded-lg  mt-4 md:mt-0 ">
      Calculate Solar
    </button>
        </div>
          </div>
          </div>

          </div>
   </div>
</div>

    )
}

export default Section2;