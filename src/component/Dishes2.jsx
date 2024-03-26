import React from 'react'
import { IoSearch } from "react-icons/io5";
import data from '../assets/datas/veg.json'
import data2 from '../assets/datas/Nonveg.json'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DishCards from '../layout/DishCards';
const Dishes2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true,
              infinite: true,
              speed: 3000,
              autoplay:true,
              autoplaySpeed:3000
            }
          },
          {
            breakpoint: 720,
            settings: {
              width:200,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              infinite: true,
              speed: 3000,
              autoplay:true,
              autoplaySpeed:3000
            }
          }
        ]
      };
  return (
         <div className='min-h-screen reviews0'>
            <h1 className=' font-bold text-4xl sm:text-6xl p-7 text-center diheshead'> Experience Our Delicious Dishes</h1>
            <div className=' flex justify-center text-xl lg:text-4xl md:text-3xl sm:text-2xl '>
                <input type="search" name="dishes" id="food" placeholder='Search Your Fav...' className=' focus:outline-none p-1 ps-2 lg:text-3xl md:text-3xl text-xl focus:bo border-2 border-e-orange-500 border-black rounded-s-full'/>
                <label htmlFor="food" className=' p-1 px-3 bg-orange-500 rounded-e-full cursor-pointer flex lg:text-3xl md:text-3xl text-xl'><IoSearch  className=' mt-1 me-1'/><span className=' hidden sm:block'>Search</span></label>
            </div>
            <div className= ' min-h-screen flex flex-col justify-center vegetarian'>
                <h1 className=' font-extrabold text-4xl sm:text-6xl mt-7 py-3 text-center text-green-900  bg-cover bg-center '>Vegetarian Menu</h1>
                <div className=' w-5/6 m-auto'>
                    <Slider {...settings}>
                        {
                        data.map((item) =>(
                            <DishCards imgs={item.img} title={item.name} price={item.price}/>
                        ))
                        }
                    </Slider>
                </div>
            </div>
            <div className= ' min-h-screen flex flex-col justify-center non-vegetarian'>
                <h1 className=' font-bold text-4xl sm:text-6xl pt-7 text-center text-red-700   bg-cover bg-center ' >Non-Vegetarian Menu</h1>
                <div className=' w-5/6 m-auto'>
                    <Slider {...settings}>
                        {
                        data2.map((item) =>(
                            <DishCards imgs={item.img} title={item.name} price={item.price}/>
                        ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
  )
}

export default Dishes2