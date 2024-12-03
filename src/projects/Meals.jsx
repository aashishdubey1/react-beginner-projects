import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Meals = () => {
    const [mealsData,setMealsData] = useState([])

    useEffect(()=>{
        async function handleFetchData(){
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
            setMealsData(res.data.meals)
        }
        handleFetchData()
    },[])



  return (
    <div className='min-h-dvh flex flex-wrap justify-center items-center'>    
        {mealsData.map((data)=>{
            return (
                <MealComp title={data.strMeal} png={data.strMealThumb}/>   
            )
        })}
    </div>
  )
}

const MealComp = ({title,png}) =>{
    return (
        <div className='w-60 h-60 border-2 border-black flex flex-col justify-center items-center rounded-lg shadow-xl pt-3 pb-2 hover:scale-105 transition m-4'>
            <img src={png} alt="" className='h-44 rounded' />
            <div className='text-center text-xl font-bold'>{title}</div>
        </div>
    )
}



export default Meals