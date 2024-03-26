import React from 'react'
import './App.css'
import Home from './component/Home'
import Feedback from './component/Feedback'
import About from './component/About'
import Footer from './component/Footer'
import Dishes2 from './component/Dishes2'

function App() {

  return (
    <>
     <main id="Home">
      <Home/>
     </main>
     <section id="Dishes">
        <Dishes2/>
     </section>
     <section id="Review">
        <Feedback/>
     </section>
     <section id="About">
        <About/>
     </section>
     <footer id="Footer">
         <Footer/>
     </footer>
    </>
  )
}

export default App
