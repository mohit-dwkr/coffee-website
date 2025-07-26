import React from 'react';
import image3 from "../assets/image-3.jpg";
import image2 from "../assets/image-3.jpg";
const Service = () => {
  return (

    <>

<div className="flex justify-center text-5xl text-orange-700 font-bold mt-5 mb-4">Our Services</div>
<hr />

    <div className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="hover:scale-105 card bg-base-100 shadow-sm">
          <figure>
            <img
              src={image2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Beans</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, explicabo!</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="hover:scale-105 card bg-base-100 shadow-sm">
          <figure>
            <img
              src={image3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Daily Delight</h2>
            <p>TLorem ipsum dolor sit amet consectetur adipisicing elit. Illum, explicabo!</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="hover:scale-105 card bg-base-100 shadow-sm">
          <figure>
            <img
              src={image2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Freshly Brewed</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, explicabo!</p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Service;
