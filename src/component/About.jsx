import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { MdDeliveryDining, MdFoodBank } from "react-icons/md";
import choose from '../assets/choose.jpg'
const About = () => {
  return (
    <div className=' min-h-screen flex flex-wrap md:flex-nowrap about-section'>
        <div className=' w-full md:w-6/12 flex justify-center items-center py-16 lg:py-5 px-10 lg:px-5' style={{background:`url(${choose})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'} }>
            <div className=' space-y-4 lg:pt-14'>
                <h1 className=' text-orange-500 font-semibold text-4xl text-start'>
                    Why Choose Us?
                </h1>
                <p>
                    <ul className=' list-disc pl-8'>
                        <li>
                        Enjoy a diverse range of restaurants, from local favorites to popular chains, ensuring plenty of options for all tastes.
                        </li>
                        <li>
                        With our user-friendly platform, ordering food is effortless, and real-time delivery tracking guarantees you'll know exactly when your meal will arrive.
                        </li>
                    </ul>
                </p>
            </div>
        </div>
        <div className=' w-full md:w-3/4  bg-black bg-opacity-90 flex  flex-col items-center justify-center text-gray-500 gap-3 py-16 lg:py-0'>
            <div className=' flex flex-wrap lg:flex-nowrap w-5/6 gap-3'>
                <div className=' flex  w-full lg:w-3/4 '>
                    <div className=' pe-3'>
                        <TbDiscount2 size={50}/>
                    </div>
                    <div>
                        <h1 className=' font-semibold text-orange-500 text-xl'>Irresistible Offers</h1>
                        <p>Ensuring you enjoy fantastic discounts on delectable dishes.</p>
                    </div>
                </div>
                <div className=' flex w-full lg:w-3/4'>
                    <div className='pe-4'>
                    <FaRegClock size={45}/>
                    </div>
                    <div>
                        <h1 className=' font-semibold text-orange-500 text-xl'>Round-the-Clock Service</h1>
                        <p>Enjoy the convenience of 24/7 availability,satisfy your cravings anytime, day or night.</p>
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-nowrap flex-wrap w-5/6 gap-3'>
                <div className=' flex w-full lg:w-3/4'>
                    <div className='pe-3'>
                    <MdFoodBank size={50}/>
                    </div>
                    <div>
                        <h1 className=' font-semibold text-orange-500 text-xl'>Uncompromising Quality</h1>
                        <p>Ensuring each dish is crafted with the finest ingredients and meticulous attention to detail.</p>
                    </div>
                </div>
                <div className=' flex w-full lg:w-3/4'>
                    <div className='pe-3'>
                    <MdDeliveryDining size={50}/>
                    </div>
                    <div>
                        <h1 className=' font-semibold text-orange-500 text-xl'>Swift Delivery</h1>
                        <p>Experience the ultimate convenience of quick delivery, with our prompt and efficient service.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;