import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Results from './Results';

const Container = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Navbar />
      <div className='p-8'>
        <Results />
      </div>
      <Footer />
    </div>
  )
}

export default Container