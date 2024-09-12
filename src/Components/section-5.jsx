import Energy from '../assets/energy.png'
import home from '../assets/home.png'
import wheel from '../assets/cogwheels.png'
import home1 from '../assets/home1.png'



function Section5( ) {
    return(
        <div >
        <div className='h-[125vh] w-[90vw]  flex justify-center items-center m-auto flex-col'>
             <h1 className='text-6xl font-bold text-white mb-8' id='tool'> <span className='text-[#EE8023]'>SOLAR</span> SAVER TOOLS</h1>
             <p className='text-white text-lg mb-12'>There are many variations of Solar Saver tools available, but the majority have suffered alteration in some form.</p>
  
          {/* card section */}
          <div className='flex gap-5 mb-4'>
            {/*card 1  */}
         <div className='Card4 h-[35vh] w-[30vw] bg-[#1A1714] rounded-2xl'>
             <div className='h-[80px] w-[80px] bg-[#EE8023] rounded-full absolute m-8'>
                <img className='h-[60px] m-2' src={Energy} alt="" />
             </div>
                  <p className='text-white font-bold w-52 mt-32 ml-8'>Real-time, accurate</p>
                  <p className='text-white font-bold w-80 ml-8'> production estimates. </p>
         </div>
            {/* card 2 */}
         <div className='Card5 h-[35vh] w-[30vw] bg-[#1A1714] rounded-2xl'>
             <div className='h-[80px] w-[80px] bg-[#EE8023] rounded-full absolute m-8'>
                <img className='h-[60px] m-2' src={wheel} alt="" />
             </div>
                  <p className='text-white font-bold w-52 mt-32 ml-8'>Minimal training time for</p>
                  <p className='text-white font-bold w-80 ml-8'>new sales representatives.</p>
         </div>
          {/* card 3 */}
         <div className='Card6 h-[35vh] w-[30vw] bg-[#1A1714] rounded-2xl'>
             <div className='h-[80px] w-[80px] bg-[#EE8023] rounded-full absolute m-8'>
                <img className='h-[75px] w-[80]' src={home} alt="" />
             </div>
                  <p className='text-white font-bold w-52 mt-32 ml-8'>Homeowner-focused</p>
                  <p className='text-white font-bold w-80 ml-8'> proposal design for clarity.</p>
         </div>
          </div>
       
  
          <div className='flex gap-5'>
            {/*card 4  */}
         <div className='Card7 h-[35vh] w-[30vw] bg-[#1A1714] rounded-2xl'>
             <div className='h-[80px] w-[80px] bg-[#EE8023] rounded-full absolute m-8'>
                <img className='h-[60px] m-2' src={wheel} alt="" />
             </div>
                  <p className='text-white font-bold w-52 mt-32 ml-8'>Customizable solar sale</p>
                  <p className='text-white font-bold w-80 ml-8'> tools for each representative.</p>
         </div>
            {/* card 5 */}
         <div className='Card8 h-[35vh] w-[30vw] bg-[#1A1714] rounded-2xl'>
             <div className='h-[80px] w-[80px] bg-[#EE8023] rounded-full absolute m-8'>
                <img className='h-[50px] m-3' src={home1} alt="" />
             </div>
                  <p className='text-white font-bold w-52 mt-32 ml-8'>Quick and accurate</p>
                  <p className='text-white font-bold w-80 ml-8'> solar sales proposals.</p>
         </div>
          {/* card 6 */}
         <div className='Card9 h-[35vh] w-[30vw] bg-[#1A1714] rounded-2xl'>
             <div className='h-[80px] w-[80px] bg-[#EE8023] rounded-full absolute m-8'>
                <img className='h-[60px] m-2' src={Energy} alt="" />
             </div>
                  <p className='text-white font-bold w-80 mt-32 ml-8'>Smart management features for</p>
                  <p className='text-white font-bold w-80 ml-8'> effective team coordination.</p>
         </div>
          </div>
        </div>
    </div>  
    )
}

export default Section5;