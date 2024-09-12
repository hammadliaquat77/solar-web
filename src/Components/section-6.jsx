import Before from '../assets/Before.png'


function Section6( ) {
    return(
        <div>
        <div className='h-[155vh] w-full flex justify-center items-center flex-col'>
           <h1 className='text-6xl font-bold text-white mb-8'><span className='text-[#EE8023]'>BEFORE</span> & AFTER</h1>
           <p className='text-white text-lg'>There are countless success stories of Solar Saver transformations, but the </p>
           <span className='text-white text-lg mb-16'>majority showcase significant improvements in energy efficiency and cost savings.</span>
           <img src={Before} alt="" />
        </div>
     </div>
    )
}

export default Section6;