import React from 'react'
import image1 from '../assets/image-1.jpg';

const About = () => {
  return (
    <div>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h1 className="text-5xl font-bold text-orange-700 sm:text-5xl pb-14">About Us</h1>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                  architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                  sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, veritatis?
                </p>
              </div>
            </div>

            <div className='m-14'>
               <img src={image1} className="rounded flex justify-self-end scale-x-150" alt="About us image" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About

