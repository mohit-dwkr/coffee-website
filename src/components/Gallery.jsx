import React from 'react'
import image2 from "../assets/image-2.jpg.avif"; // ✔️ correct extension and path
import image3 from "../assets/image-3.jpg"; // ✔️ correct extension and path


const Gallery = () => {
  return (
    <div>
      <div className="flex justify-center text-5xl text-orange-700 font-bold mb-5">Our Gallery</div>
      <hr />
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-5 mt-5">
  <div>
    <img className="hover:scale-105 h-auto max-w-full rounded-lg" src={image2} alt="" />
  </div>
  <div>
    <img className="hover:scale-105 h-auto max-w-full rounded-lg"  src={image3} alt="" />
  </div>
  <div>
    <img className="hover:scale-105 h-auto max-w-full rounded-lg"  src={image2} alt="" />
  </div>
  <div>
    <img className="hover:scale-105 h-auto max-w-full rounded-lg"  src={image3} alt="" />
  </div>
  <div>
    <img className="hover:scale-105 h-auto max-w-full rounded-lg"  src={image2} alt="" />
  </div>
  <div>
    <img className="hover:scale-105 h-auto max-w-full rounded-lg"  src={image3}alt="" />
  </div>
  <div>
    <img className="hover:scale-105 h-auto max-w-full rounded-lg"  src={image2} alt="" />
  </div>
  <div>
    <img className="hover:scale-105 h-auto max-w-full rounded-lg"  src={image3} alt="" />
  </div>
  <div>
    <img className="hover:scale-105 h-auto max-w-full rounded-lg"  src={image2} alt="" />
  </div>
  
</div>


    </div>
  )
}

export default Gallery
