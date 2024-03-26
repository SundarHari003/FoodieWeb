import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaMinusSquare, FaPlus, FaPlusSquare, FaTrash } from "react-icons/fa";
const OrderCart = () => {
    const[div1,setDiv1]=useState(1);
    const[div2,setDiv2]=useState(1);
    const[div3,setDiv3]=useState(1);
    const[div4,setDiv4]=useState(1);

    const increase=(x)=>{
        if(x==1)
        {
            setDiv1(prev=>prev+1) ;
        }
        else if(x==2){
            setDiv2(prev2=>prev2+1);
        }
        else if(x==3){
            setDiv3(prev2=>prev2+1);
        }
        else{
            setDiv4(prev2=>prev2+1);
        }
    }
    const Decrease=(x)=>{
        if(x==1&&div1>0)
        {
            setDiv1(prev=>prev-1) ;
        }
        else if(x==2 && div2>0){
            setDiv2(prev2=>prev2-1);
        }
        else if(x==3 && div3>0){
            setDiv3(prev2=>prev2-1);
        }
        else if(x==4 && div4>0){
            setDiv4(prev2=>prev2-1);
        }
    }
  return (
    <div>
        <div id="OrderPage" className=' min-h-screen reviews3'>
        <Navbar/>
        <h1 className=' text-4xl sm:text-5xl text-center font-bold top-20 relative'>Foodie <span className=' text-orange-500'>Cart</span></h1>
        <div className=' sm:text-2xl flex flex-col justify-center items-center gap-8  mt-24 p-10'>
            <div className=' flex w-full sm:w-4/5 lg:w-2/5 justify-between bg-gray-300 p-5 rounded shadow-white'>
                <h2 className=' font-bold'>Hydrabadi Biryani</h2>
                <div className=' flex gap-2 items-center '>
                    <FaMinusSquare className=' text-orange-500 cursor-pointer'onClick={()=>Decrease(1)}/>
                    <span className=' font-bold'>{div1}</span>
                    <FaPlusSquare className=' text-orange-500 cursor-pointer' onClick={()=>increase(1)}/>
                    <FaTrash className=' ms-9 text-red-700 cursor-pointer'/>
                </div>
            </div>
            <div className=' flex w-full sm:w-4/5 lg:w-2/5 justify-between bg-gray-300 p-5 rounded shadow-white'>
                <h2 className=' font-bold'>Butter Chicken</h2>
                <div className=' flex gap-2 items-center '>
                    <FaMinusSquare className=' text-orange-500 cursor-pointer'onClick={()=>Decrease(2)}/>
                    <span className=' font-bold'>{div2}</span>
                    <FaPlusSquare className=' text-orange-500 cursor-pointer' onClick={()=>increase(2)}/>
                    <FaTrash className=' ms-9 text-red-700 cursor-pointer'/>
                </div>
            </div>
            <div className=' flex w-full sm:w-4/5 lg:w-2/5 justify-between bg-gray-300 p-5 rounded shadow-white'>
                <h2 className=' font-bold'>Veg Biriyani</h2>
                <div className=' flex gap-2 items-center '>
                    <FaMinusSquare className=' text-orange-500 cursor-pointer'onClick={()=>Decrease(3)}/>
                    <span className=' font-bold'>{div3}</span>
                    <FaPlusSquare className=' text-orange-500 cursor-pointer' onClick={()=>increase(3)}/>
                    <FaTrash className=' ms-9 text-red-700 cursor-pointer'/>
                </div>
            </div>
            <div className=' flex w-full sm:w-4/5 lg:w-2/5 justify-between bg-gray-300 p-5 rounded shadow-white'>
                <h2 className=' font-bold'>Mutton Biriyani</h2>
                <div className=' flex gap-2 items-center '>
                    <FaMinusSquare className=' text-orange-500 cursor-pointer'onClick={()=>Decrease(4)}/>
                    <span className=' font-bold'>{div4}</span>
                    <FaPlusSquare className=' text-orange-500 cursor-pointer'onClick={()=>increase(4)}/>
                    <FaTrash className=' ms-9 text-red-700 cursor-pointer'/>
                </div>
            </div>
            <div className=' flex w-full sm:w-4/5 lg:w-2/5 justify-center bg-gray-300 p-5 rounded shadow-white cursor-pointer hover:bg-white'>
                <h2 className=' font-bold flex items-center gap-3'>Add cart <FaPlus/></h2>
                
            </div>
            
            
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default OrderCart