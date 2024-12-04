import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser,AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <header className='flex justify-between py-4 px-3 lg:px-9 shadow-lg'>
        <h1 className='ml-2 sm:ml-9 text-2xl'>Logo</h1>
        <div className='flex sm:flex-1 px-10 lg:px-20 items-center  justify-between '>
            <input type="text" placeholder='Search here..,' className='hidden sm:flex py-1 px-6 border border-black rounded' />
            <div className='flex  gap-7 sm:gap-10 text-xl'>
                <a href="#"><FaRegHeart/></a>
                <a href="#"><AiOutlineShoppingCart /></a>
                <a href="#"><AiOutlineUser /></a>
            </div>
        </div>
    </header>
  )
}

export default NavBar