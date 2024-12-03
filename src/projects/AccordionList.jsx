import React, { useState } from 'react'
import { accordionData } from '../content'


const AccordionList = () =>{
  const [activeId,setActiveId] = useState(null)

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-950'>
      <div className='w-[50%]'>
      {accordionData.map((data)=>{
        return (
          <Accordion key={Math.random()} data={data} handleClick={setActiveId} activeId={activeId} />
        )
      })}
    </div>
    </div>
  )
}
const Accordion = ({data,activeId,handleClick}) => {
const showContent = data.id == activeId ? true : false; 

  return (
    <div className='bg-black/85 hover:bg-orange-800 text-slate-300 w-full py-4 px-7 border-b-2 border-b-slate-400 rounded-lg'>
      <div className='flex justify-between'>
        <div className='text-lg font-semibold'>{data.title}</div>
        <div className='text-2xl cursor-pointer' onClick={()=>handleClick(prev=>prev==data.id?null:data.id)}>{showContent?"-":"+"}</div>
      </div>
      <div>{showContent && data.content}</div>
    </div>
  )
}   

export default AccordionList