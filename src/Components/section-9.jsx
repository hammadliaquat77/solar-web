import line from '../assets/line.png'
import image1 from '../assets/step1.jpg'
import image2 from '../assets/step2.jpg'
// import Step3 from '../src/assets/step3.jpg'
import left from '../assets/left.png'
import right from '../assets/right.png'
import React, { useState } from 'react';



const steps = [
  {
    id: 1,
    text: `Our certified installers will set up your solar 
               system efficiently and safely.Once installed,  
               we conduct thorough testing to ensure  
               optimal performance. After final inspection  
               and approval, your system is activated, and  
               you start generating clean energy. `,
    image: {image1}, // Replace with your image source
  },
  {
    id: 2,
    text: "Next step content goes here...",
    image: {image2}, // Replace with your next image source
  },

];

const StepSlider = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) =>
      prevStep === steps.length - 1 ? 0 : prevStep + 1
    );
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) =>
      prevStep === 0 ? steps.length - 1 : prevStep - 1
    );
  };

  return (
    // <div style={{ background: '#1b1b1b', color: '#fff', padding: '20px' }}>
    //   <div>
    //     <h2>STEP {steps[currentStep].id}</h2>
    //     <p>{steps[currentStep].text}</p>
    //   </div>
    //   <div>
    //     <img
    //       src={steps[currentStep].image}
    //       alt={`Step ${steps[currentStep].id}`}
    //       style={{ width: '100%', height: 'auto' }}
    //     />
    //   </div>
    //   <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
    //     <button onClick={handlePrevious} style={{ cursor: 'pointer', color: '#ffa500' }}>←</button>
    //     <button onClick={handleNext} style={{ cursor: 'pointer', color: '#ffa500' }}>→</button>
    //   </div>
    // </div>



<div>
<div className='h-[120vh] w-full flex justify-center items-center flex-col'>
    <img src={line} alt="" />
    <div className='flex gap-20'>
      <div className='flex flex-col'>
          <h1 className='text-5xl font-bold text-white mb-5'>STEP<span className='text-[#EE8023] text-8xl'>0{steps[currentStep].id}</span></h1>
          <p className='text-white text-lg w-96 '> {steps[currentStep].text} </p>
      </div>
      <div className='-mt-8'>
          <img className='h-[330px] rounded-3xl mb-12' src={steps[currentStep].image} alt="" />
      </div>
    </div>
      <div className='flex gap-16'>
          <img onClick={handlePrevious} className='h-8' src={left} alt="" />
          <img onClick={handleNext} className='h-8' src={right} alt="" />
      </div>
</div>
</div> 


  );
};

export default StepSlider;
