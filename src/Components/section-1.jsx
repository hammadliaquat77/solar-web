import solar from '../assets/solar.png'


function Section1( ) {
    return(
        <div>
        <div className='h-[185vh] w-full flex items-center flex-col relative'>
            <h1 className='text-6xl font-bold text-white font-serif mt-32' ><span className='text-[#EB7F25]'>Does Your Home</span> Need Quality <br />
            <span className='ml-28'>Solar Panel Installation?</span></h1>
            <p className='text-white mt-10 '>Trust our experienced solar power experts to customize the perfect solution for your home.</p>
            <div className='mt-12'>
            <button className="inline-flex items-center bg-[#EB7F25] text-white  text-sm  border-0 py-2 px-5 focus:outline-none hover:bg-[white] hover:text-[#EB7F25] rounded-lg  mt-4 md:mt-0 ">
          Calculate Solar
        </button>
            </div>
           <img className='w-[90vw]' src={solar} alt="" /> 
        </div>
    </div>    
    )
}

export default Section1