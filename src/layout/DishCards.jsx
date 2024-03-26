import React from 'react'
import  {BsStarFill, BsStarHalf} from 'react-icons/bs'
import Buttons from './Buttons'
const DishCards = (props) => {
  return (
    <div className='  bg-gray-400 bg-opacity-50 backdrop-blur p-5 lg:ms-0 md:ms-0 sm:ms-0 shadow-[rgba(0,0,0,0.7)_0px_3px_8px] rounded-lg lg:hover:bg-gray-300 lg:hover:shadow-white transition-all duration-300'>
        <img className=' rounded-xl h-48 w-full' src={props.imgs} alt="food"/>
        <div className=' space-y-4'>
            <h1 className=' font-semibold text-center text-xl pt-6'>{props.title}</h1>
            <div className=' flex flex-row justify-center'>
                <BsStarFill className=' text-orange-500'/>
                <BsStarFill className=' text-orange-500'/>
                <BsStarFill className=' text-orange-500'/>
                <BsStarFill className=' text-orange-500'/>
                <BsStarHalf className=' text-orange-500'/>
            </div>
            <div className=' flex flex-row items-center justify-center gap-4'>
                <h3 className=' font-semibold text-lg'>₹ {props.price}</h3>
                <Buttons title="Order Now"/>
            </div>
        </div>
    </div>
  )
}

export default DishCards