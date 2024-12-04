import React from 'react'

const Recommended = () => {
    const btns = ["All Products","Puma","Nike","Adidas","Vans"]
  return (
    <div className=' ml-64 mt-10'>
        <h1 className='text-xl font-semibold font-sans my-4'>Recommended</h1>
        <div>
            {btns.map((btn)=><Btn title={btn}/>)}
        </div>
    </div>
  )
}

const Btn = ({title})=>{
    return (
        <button className='py-2 px-5 text-sm bg-slate-100 border border-black rounded-sm transform transition duration-200 active:scale-95 hover:scale-105  mx-1'>{title}</button>
    )
}

export default Recommended