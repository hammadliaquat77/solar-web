import React, {useState} from "react";
import ColorMap from '../assets/color-map.png'
import OrignalMap from '../assets/Orignal-Map.png'
// import Data from "../javas/section8Explain";

function Section8() {

          // State to track the active button and image
  const [activeButton, setActiveButton] = useState('btn1');
  const [currentImage, setCurrentImage] = useState(ColorMap); 

  // Function to handle button click and image change
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    if (buttonId === 'btn1') {
      setCurrentImage(ColorMap); 
    } else {
      setCurrentImage(OrignalMap); 
    }
  };


    return (
         
<div>

<div className='h-[170vh] w-full flex justify-center items-center flex-col'>
   <h1 className='text-white text-6xl font-bold mb-10'><span className='text-[#EE8023]'>WE'VE </span> GOT YOU COVERED   </h1>
   <p className='text-white text-xl mb-20'>Explore solar potential in your area. See how Solar Saver can help you.</p>
    {/* Map Button Work */}
     <div className='h-[100vh] w-full flex justify-center items-center flex-col'>
      <div className='h-16 w-52 border-slate-200 border-2 rounded-lg flex justify-center items-center mb-20'>
        <button
          id='btn1'
          className={`h-8 m-2 w-24 rounded-xl font-bold text-[#EE8023] ${activeButton === 'btn1' ? 'bg-[#EE8023] text-white' : 'bg-transparent'}`}
          onClick={() => handleButtonClick('btn1')}
        >
          Full Install
        </button>
        <button
          id='btn2'
          className={`h-8 w-14 rounded-xl font-bold text-[#EE8023] mb ${activeButton === 'btn2' ? 'bg-[#EE8023] text-white' : 'bg-transparent '}`}
          onClick={() => handleButtonClick('btn2')}
        >
          Map
        </button>
      </div>

      {/* Image section */}
      <div className='mt-6'>
        <img src={currentImage} alt='Selected' className='h-[85vh] w-[85vw] object-cover rounded-2xl' />
      </div>
    </div>   

      {/* <Data/> */}
</div>
</div>

    )
  
}
export default Section8;