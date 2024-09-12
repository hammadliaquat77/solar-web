function Section4( ) {
    return(
        <div>
        <div className='h-[140vh] w-[90vw]  flex justify-center m-auto flex-col'>
             <div className='h-32 w-[60vw] bg-[#E79623] ' >
                 <h1 className='p-2 pl-[45vw] mt-6 text-2xl font-bold text-white'>SYSTEM SIZE</h1>
                  <span className='pl-[46vw] text-white text-lg'>9.5 - 14.13 kWh*</span>
             </div>
             <div className='h-32 w-[45vw] bg-[#E79623] mt-24'>
                 <h1 className='p-2 pl-[28vw] mt-6 text-2xl font-bold text-white'>SOLAR PANELS</h1>
                  <span className='pl-[35vw] text-white text-lg'>34 - 43*</span>
             </div>
             <div className='h-32 w-[30vw] bg-[#E79623] mt-24'>
                 <h1 className='p-2 pl-[17vw] mt-6 text-2xl font-bold text-white'>CO2 Offset</h1>
                  <span className='pl-[19vw] text-white text-lg'>7.65 - 9.07*</span>
             </div>
   
         <div className='flex justify-center absolute ml-[49vw] mt-40'> 
          <div className='flex justify-center flex-col items-center'>
               <h1 className='text-6xl font-bold text-white items-center mb-10'> <span className='text-[#EE8023]'>AI</span> Utilization</h1>
               <p className='text-gray-400 ml-16 mb-12'>Solar Saver utilizes an AI quoting engine to estimate the ideal <br />
               solar system size for a customer's specific needs. This system <br />
               calculates the number of solar panels required, the potential <br />
               CO2 offset, and the new, likely reduced monthly power bill. <br /><br />
               By analyzing various factors such as roof size, local sun <br /> 
               exposure, and current electricity usage, the AI provides <br /> 
               atailored solution.</p>
   
               <p className='text-[#EE8023] ml-16'>This approach ensures customers get a system that maximizes <br />
                energy efficiency and cost savings while contributing to <br />
                environmental sustainability.</p>
          </div>
         </div>
       </div>
       </div>   
    )
}

export default Section4;