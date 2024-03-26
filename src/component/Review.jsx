import React from 'react'
import data from '../assets/datas/reviews.json'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Review = () => {
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
    <div className= ' min-h-screen flex flex-col justify-center p-3 reviews2'>
        <h1 className=' text-4xl font-semibold text-center text-orange-500 pt-8 '>Customer's Reviews</h1>
        <div className=' w-5/6 m-auto'>
          <Slider {...settings}>
            {
              data.map((item) =>(
              <div className=' backdrop-blur p-5 h-[350px] md:h-[300px] lg:h-[300px] shadow-[rgba(0,0,0,0.7)_0px_3px_8px] rounded-lg'>
                <p className=' h-4/5 text-gray-400'>{item.paragraph}</p>
                <h3 className=' h-1/5 flex text-orange-500 justify-end items-end font-semibold'>- {item.name}</h3>
              </div>
              ))
            }
          </Slider>
        </div>
    </div>
  )
}

export default Review