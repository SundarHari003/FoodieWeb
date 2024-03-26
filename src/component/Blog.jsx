import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Blog = () => {
  return (
    <div>
        <div>
        <Navbar/>
        <div className=' min-h-screen flex justify-center items-center'>
            <h2 className=' text-2xl font-bold'> No Blog Updated....</h2>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog