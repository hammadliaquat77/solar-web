import house from '../assets/house.png';

function Section7() {
    return(
        <div>
     <div className='h-[110vh] w-full flex justify-center items-center flex-col'>
          <h1 className='text-6xl font-bold text-white mb-10'><span className='text-[#EE8023]'>BEST</span> EQUIPMENT IN THE INDUSTRY</h1>
          <p className='text-lg text-white'>Solar Saver uses the highest quality solar panels and inverters. Trust our cutting-edge technology</p>
          <span className='text-lg text-white mb-16'>for superior performance and durability.</span>
<div>
    <div className='flex gap-6'>
    {/* Card 1 */}
   <div className='Card10 h-[400px] w-[400px] bg-[#1A1714]  rounded-3xl flex justify-center items-center flex-col'>
        <img className='h-24 mb-8' src={house} alt="" />
        <h2 className='text-3xl text-white font-bold mb-5'>PANELS</h2>
        <span className='text-white text-lg'>Solar Saver offers industry-leading</span>
        <span className='text-white text-lg'>solar panels. Experience unparalleled</span>
        <span className='text-white text-lg'>efficiency and durability with our</span>
        <span className='text-white text-lg'>advanced technology.</span>
   </div>
   {/* Card 2 */}
   <div className='Card11 h-[400px] w-[400px] bg-[#1A1714]  rounded-3xl flex justify-center items-center flex-col'>
        <img className='h-24 mb-8' src={house} alt="" />
        <h2 className='text-3xl text-white font-bold mb-5'>PANELS</h2>
        <span className='text-white text-lg'>Solar Saver offers industry-leading</span>
        <span className='text-white text-lg'>solar panels. Experience unparalleled</span>
        <span className='text-white text-lg'>efficiency and durability with our</span>
        <span className='text-white text-lg'>advanced technology.</span>
   </div>
    {/* Card 3 */}
    <div className='Card12 h-[400px] w-[400px] bg-[#1A1714]  rounded-3xl flex justify-center items-center flex-col'>
        <img className='h-24 mb-8' src={house} alt="" />
        <h2 className='text-3xl text-white font-bold mb-5'>PANELS</h2>
        <span className='text-white text-lg'>Solar Saver offers industry-leading</span>
        <span className='text-white text-lg'>solar panels. Experience unparalleled</span>
        <span className='text-white text-lg'>efficiency and durability with our</span>
        <span className='text-white text-lg'>advanced technology.</span>
   </div>
   </div>
</div>

     </div>
</div>
    )

    
}

export default Section7;

