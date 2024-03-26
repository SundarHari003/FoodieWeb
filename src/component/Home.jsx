import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Buttons from '../layout/Buttons'
const Home = () => {
  return (
    <div>
      <div className='Homepage min-h-screen'>
        <Navbar/>
        <div className=' min-h-screen flex flex-col lg:gap-8 gap-5 justify-center pt-5 px-5 lg:p-5'>
          <h1 className=' lg:text-6xl md:text-5xl text-3xl font-bold font-sans' ><span data-aos="fade-up"  className=' text-orange-500'>Delight awaits. Reserve now,</span><br/> Experience Excellence</h1>
          <p className='text-gray-300  pl-7 lg:text-2xl text-xl'>
                <ul className='list-disc flex flex-col lg:gap-2 gap-0  font-serif'>
                    <li data-aos="fade-up">
                        Savor delectable flavors that dance on your palate.
                    </li>
                    <li>
                         Indulge in culinary artistry that transcends the ordinary.
                    </li>
                    <li>
                        Every bite tells a story of passion and innovation.
                    </li>
                </ul>
            </p>
            <div className=' cursor-pointer flex items-center'>
              <Buttons title="Order Now"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home