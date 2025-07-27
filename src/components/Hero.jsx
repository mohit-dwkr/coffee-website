import React from 'react'

const Hero = () => {
  return (
    <div>
      
<div
  className="hero h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/hero.jpg')" }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content justify-self-start mx-10">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5 text-3xl">
       Welcome to   <span className='text-4xl text-orange-700'>iCoffee</span>   We Serve the Richest Coffee in the City.
      </p>
      <button className="btn btn-primary bg-orange-700">Explore More</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero
