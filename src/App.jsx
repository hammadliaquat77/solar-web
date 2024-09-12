import './App.css'
import Header from './Components/header'
import Section1 from './Components/section-1'
import Section2 from './Components/section-2'
import Section3 from './Components/section-3'
import Section4 from './Components/section-4'
import Section5 from './Components/section-5'
import Section6 from './Components/section-6'
import Section7 from './Components/section-7'
import Section8 from './Components/section-8'
// import line from '../src/assets/line.png'
// import Step1 from '../src/assets/step1.jpg'
// import left from '../src/assets/left.png'
// import right from '../src/assets/right.png'
import StepSlider from './Components/section-9'


function App() {

  return (
    <>
{/* Header */}
<Header />

{/* section 1 */}
<Section1 />

{/* section 2 */}
<Section2 />

{/* Section 3 */}
<Section3 />

{/* Section  4 */}
 <Section4 />

{/* section 5 */}
<Section5 />

{/* section 6 */}
<Section6 />

{/* section 7 */}
<Section7 />

{/* section 8 */}
<Section8 />

<StepSlider />


{/* 
 <div>
     <div className='h-[120vh] w-full flex justify-center items-center flex-col'>
         <img src={line} alt="" />
         <div className='flex gap-20'>
           <div className='flex flex-col'>
               <h1 className='text-5xl font-bold text-white mb-5'>STEP<span className='text-[#EE8023] text-8xl'>03</span></h1>
               <p className='text-white text-lg '>Our certified installers will set up your solar <br /> 
               system efficiently and safely.Once installed, <br /> 
               we conduct thorough testing to ensure <br /> 
               optimal performance. After final inspection <br /> 
               and approval, your system is activated, and <br /> 
               you start generating clean energy.</p>
           </div>
           <div className='-mt-8'>
               <img className='h-[330px] rounded-3xl mb-12' src={Step1} alt="" />
           </div>
         </div>
           <div className='flex gap-16'>
               <img className='h-8' src={left} alt="" />
               <img className='h-8' src={right} alt="" />
           </div>
     </div>
 </div> */}


  </>
  )
}

export default App
