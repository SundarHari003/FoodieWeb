import React from 'react'
import { FaUsers } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { GiFallingLeaf } from "react-icons/gi";
import { MdLocationCity, MdMail, MdPhone } from 'react-icons/md';
const Footer = () => {
  return (
    <div className=' min-h-screen'>
        <div className='flex flex-col sm:flex-row gap-4 justify-evenly items-center py-16' style={{minHeight:'50vh'}}>
            <div className=' text-center flex flex-col items-center '>
                <FaUsers className='text-orange-500' size={60}/>
                <h1 className=' font-bold text-xl sm:text-2xl'>Customers</h1>
                <h2 className=' text-gray-500 sm:text-xl font-semibold'>10000000+</h2>
            </div>
            <div className=' text-center flex flex-col items-center '>
                <BsBuildingsFill className='text-orange-500' size={60}/>
                <h1 className=' font-bold text-xl sm:text-2xl'>Branches</h1>
                <h2 className=' text-gray-500 sm:text-xl font-semibold'>150</h2>
            </div>
            <div className=' text-center flex flex-col items-center '>
                <SiCodechef className='text-orange-500' size={60}/>
                <h1 className=' font-bold text-xl sm:text-2xl'>Professional<br/> Chefs</h1>
                <h2 className=' text-gray-500 sm:text-xl font-semibold'>360</h2>
            </div>
            <div className=' text-center flex flex-col items-center '>
                <FaLocationDot className='text-orange-500' size={60}/>
                <h1 className=' font-bold text-xl sm:text-2xl'>Cities</h1>
                <h2 className=' text-gray-500 sm:text-xl font-semibold'>19</h2>
            </div>
        </div>
        <div className=' bg-black flex justify-evenly items-start md:items-center p-5 sm:ps-0 ps-10 gap-5 flex-col sm:flex-row' style={{minHeight:'50vh'}}>
            <div className=' flex flex-col font-semibold justify-center'>
                <GiFallingLeaf size={100} className=' text-orange-500'/>
                <h1 className=' text-gray-600 text-3xl'>FoodieWeb</h1>
            </div>
            <div>
                <h1 className=' font-semibold text-xl pb-4 md:pt-0 text-orange-500'>Contact Us</h1>
                    <nav className=' flex flex-col gap-2'>
                        <a className=' flex hover:text-white transition-all cursor-pointer text-gray-400' href="#">
                        <MdLocationCity className='mt-1'/>
                            <address>
                            1234 Elm Street,<br/>
                            Anytown,<br/>
                            india
                            </address>
                        </a>
                        <a className=' hover:text-white transition-all cursor-pointer text-gray-400 flex' href="#"><MdPhone className='mt-1'/>&nbsp;+91 7094163245</a>
                        <a className=' hover:text-white transition-all cursor-pointer text-gray-400 flex' href="#"><MdMail className='mt-1'/>&nbsp; support@foodieweb.com</a>
                    </nav>
            </div>
            <div>
                <h1 className=' font-semibold text-xl pb-4 md:pt-0 text-orange-500'>Company</h1>
                    <nav className=' flex flex-col gap-2'>
                        <a className=' flex hover:text-white transition-all cursor-pointer text-gray-400' href="#">Frequently asked<br/> qustions</a>
                        <a className=' hover:text-white transition-all cursor-pointer text-gray-400 flex' href="#">Our Process</a>
                        <a className=' hover:text-white transition-all cursor-pointer text-gray-400 flex' href="#">Our Story</a>
                        <a className=' hover:text-white transition-all cursor-pointer text-gray-400 flex' href="#">values</a>
                    </nav>
            </div>
            <div>
                <h1 className=' font-semibold text-xl pb-4 md:pt-0 text-orange-500'>Food Details</h1>
                    <nav className=' flex flex-col gap-2'>
                        <a className=' flex hover:text-white transition-all cursor-pointer text-gray-400' href="#">Receipes</a>
                        <a className=' hover:text-white transition-all cursor-pointer text-gray-400 flex' href="#">Our Products</a>
                        <a className=' hover:text-white transition-all cursor-pointer text-gray-400 flex' href="#">History</a>
                        <a className=' hover:text-white transition-all cursor-pointer text-gray-400 flex' href="#">Dishes</a>
                    </nav>
            </div>
        </div>
    </div>
  )
}

export default Footer