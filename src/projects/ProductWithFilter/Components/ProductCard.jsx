import React from 'react'
import { FaStar } from "react-icons/fa";
import { BsBagHeart } from "react-icons/bs";
const ProductCard = ({imgUrl,title,prevPrice,newPrice}) => {
  return (
    <div className='w-56 shadow-xl hover:scale-105 transition py-5 px-3 rounded-xl'>
        <img src={imgUrl} alt="Product Image"  className='w-full h-[50%] object-contain'/>
        <div className='text-xl font-semibold mt-3'>{title}</div>
        <section className='flex gap-3 items-center my-2'>
            <div className='flex gap-1 text-orange-400'>
                <FaStar/><FaStar/><FaStar/><FaStar/>
            </div>
            <div className='font-semibold'>4</div>
        </section>
        <div className='flex justify-between items-center'>
            <p><del>{prevPrice}</del> <span>{newPrice}</span></p>
            <BsBagHeart className='mr-5 text-lg'/>
        </div>
    </div>
  )
}

export default ProductCard