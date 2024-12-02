import React from 'react'
import { useState } from 'react'
import { GoSearch } from "react-icons/go";

const SearchIcon = () => {
    const [isClicked,setIsClicked] = useState(false);
    const [bg,setBg] = useState('')

      
    function handleDivClick(e){

      setBg("#1a1a1a")


      if(e.target.id ==  'div'){
        setBg('');
        setIsClicked(false);
      }
     
    }

  return (
    <div onClick={handleDivClick} id='div' className='h-screen border-2 border-black flex items-center justify-center' style={{backgroundColor:bg}}>  
        {isClicked ? 
        <input type='text' className='py-2 px-5 rounded border-2 border-white text-white bg-inherit outline-none  ' placeholder='search here....'  />
        :<GoSearch onClick={()=>setIsClicked(true)} className='text-4xl'/>}
    </div>
  )
}

export default SearchIcon