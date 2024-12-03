    import React, { useEffect, useState } from 'react'
    import { testimonials } from '../content';



    const Testimonials = () => {

      const [currentIndex,setCurrentIndex] = useState(3)
      const [availableLeft,setAvailableLeft]= useState(true);
      const [availableRight,setAvailableRight]= useState(true);

      


      function handleLeftClick(){
        setCurrentIndex(prev=>prev-1);
        setAvailableRight(true);  
      }

      function handleRightClick(){
          setCurrentIndex(prev=>prev+1);
          setAvailableLeft(true)
      }

      useEffect(()=>{
        if(currentIndex == 0){
          setAvailableLeft(false);
        }else if(currentIndex == testimonials.length-1){
          setAvailableRight(false);
        }
      },[currentIndex]);


  

      
      return (
        <div className='h-screen flex justify-center items-center'>
            <section className='py-5 px-8 shadow-xl border-2 border-black rounded '>
            <div className='text-2xl font-medium text-center'>{testimonials[currentIndex].quote}</div>
              <div className='text-center font-extrabold text-xl mt-2'> - {testimonials[currentIndex].author}</div>
              <div className='w-full flex justify-between mt-8  '>
                <button disabled={!availableLeft} onClick={handleLeftClick} className={`py-3 px-7 ${!availableLeft?"disabled:bg-red-300 disabled:cursor-not-allowed":"bg-red-700"} text-white rounded text-lg font-bold`}>Left</button>
                <button disabled={!availableRight} onClick={handleRightClick} className={`py-3 px-7 ${!availableRight?"disabled:bg-blue-300 disabled:cursor-not-allowed":"bg-blue-700"} text-white rounded text-lg font-bold`}>Right</button>
              </div>           
            </section>
        </div>
      )
    }
    
    export default Testimonials