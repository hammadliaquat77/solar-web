import Solarpanel from '../assets/soler-panel.webp' 

function Section3( ) {
    return(
        <div id='about'>
        <div className='h-[140vh] w-[90vw]  flex justify-center m-auto flex-col'>
             <span className='text-lg font-bold text-[#EB7F25] mb-2 '>About Us</span> 
             <h1 className='text-white text-7xl font-bold mb-8'>Solar Saver</h1>
             <p className='text-gray-400 mb-6'>Solar Saver is Revolutionizing The Solar Industry By Offering The Most <br />
              Cost-effective Solar Solutions In America. We Specialize In Providing <br />
              Transparent, Instant Pricing For Solar Installations. With An Innovative AI <br />
              Quoting Engine, They Ensure Personalized And Accurate Estimates For <br />
               Each Customer.</p>
             <p className='text-[#EB7F25]'>Solar Saver Also Offers Innovative Battery Solutions And Flexible <br />
              Financing Options, Making Solar Energy More Accessible And <br />
               Affordable.</p>
        <div className=' absolute ml-[550px] '>
             <img src={Solarpanel} alt="" />
        </div>
        </div>
   </div>   
    )
}

export default Section3;