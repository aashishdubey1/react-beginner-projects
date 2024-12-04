import React from 'react'
import data from '../db/data';
import ProductCard from './ProductCard';
const Products = () => {
    // const oneData = data[0];
  return (
    <div className='ml-72 mt-10  flex flex-wrap gap-5'>
        {data.map((pr,index)=><ProductCard title={pr.title} imgUrl={pr.img} prevPrice={pr.prevPrice} newPrice={pr.newPrice} key={index} />)}
        {/* <ProductCard title={oneData.title} imgUrl={oneData.img} prevPrice={oneData.prevPrice} newPrice={oneData.newPrice} key={0}/> */}
    </div>
  )
}

export default Products