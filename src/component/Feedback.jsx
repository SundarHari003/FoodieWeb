import React, { useState } from 'react'
import data from '../assets/datas/veg.json'
import data2 from '../assets/datas/Nonveg.json'
import Rating from '../layout/Rating';
import Buttons from '../layout/Buttons';
import Review from './Review';
const Feedback = () => {
    const [seletDishes,setSeletDishes]=useState('');
    const selectedValue=(event)=>{
        setSeletDishes(event.target.value);
    }
  return (
    <div className=' min-h-screen'>
        <div className=' min-h-screen flex justify-center items-center reviews py-4'>
            <div className=' w-5/6 lg:w-3/6 sm:w-4/6 flex flex-col items-center bg-black bg-opacity-75 rounded-xl' style={{backdropFilter:'blur(2px)'}}>
                <h1 className=' w-full text-4xl font-bold text-orange-500 text-center py-5'>Feedback</h1>
                <form action="#" className=' text-gray-400 w-full flex flex-col items-center'>
                    <div className=' w-3/4 flex justify-between flex-wrap py-3'>
                        <label for="name">Name :&emsp;</label>
                        <input className=' ps-2 rounded-lg text-black' type="text" id="name" name="name" placeholder='Enter your name' required maxLength={18}/><br/>   
                    </div>
                    <div className=' w-3/4 flex flex-wrap justify-between py-3'>
                        <label for="number">Number :</label>
                        <input className=' ps-2 rounded-lg text-black' type="tel" id="number" name="number" placeholder='Enter your number' required maxLength={12}/><br />
                    </div>
                    <div className='w-3/4 flex  flex-wrap py-3'>
                        <label htmlFor="dishes">Foode Preference :&emsp;&emsp;&nbsp;&nbsp;</label>
                        <select className='text-center rounded-lg text-black' name="food" id="dishes"  onChange={selectedValue}>
                            <option value="none">--none--</option>
                            <option value="Veg">Veg</option>
                            <option value="NonVeg">Non Veg</option>
                        </select>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <div className={`${seletDishes=='Veg'?'flex':'hidden'} w-3/4  flex-wrap py-3`} >
                            <label htmlFor="vegFoods">Vegetarian Foods :&emsp;&emsp;&nbsp;</label>
                            <select className=' rounded-lg ms-1 text-center text-black' name="vegFoods" id="vegFoods">
                                <option value="none">--none--</option>
                                    {
                                        data.map((item)=>(
                                            <option value={item.name}>{item.name}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className={`${seletDishes=='NonVeg'?'flex':'hidden'} w-3/4 flex-wrap py-3`} >
                            <label htmlFor="NonVegFoods">Non-Vegetarian<br/> Foods :</label>
                            <select className=' text-center  rounded-lg text-black ms-2 md:ms-14' name="NonvegFoods" id="NonVegFoods">
                                <option value="none">--none--</option>
                                    {
                                        data2.map((item)=>(
                                            <option value={item.name}>{item.name}</option>
                                        ))
                                    }
                            </select>
                        </div>    
                    </div>
                    <div className=' w-full flex justify-center py-3'>
                        <Rating/>
                    </div>
                    <div className=' w-3/4  flex flex-wrap py-3'>
                        <label htmlFor="review">Feedback :</label>
                        <textarea placeholder='Write your Feedback...' className='ps-2 ms-0 md:ms-20 rounded-lg text-black' id="review" required></textarea><br />
                    </div>
                    <button className=' py-3 text-xl' type="submit"><Buttons title='Submit'/></button>
                </form>
            </div>
        </div>
        <Review/>
    </div>
  )
}

export default Feedback