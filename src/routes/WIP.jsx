import React from 'react'
import { Link } from "react-router-dom";

const WIP = () => {
  return (
      <div name="WIP" className="w-full h-screen bg-[#0a192f]">
          {/* Container */}
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
              <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                  My portfolio is currently Work in Progress !
              </h1>
              <p className="font-bold text-[#8892b0]">
                  You can still check it or you can check the older version by clicking on the button right below !
              </p>
              <div className='group container rounded-md flex justify-center items-center mx-auto'>
                  <a href={process.env.PUBLIC_URL + '/old'}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-white group border-2 font-bold text-lg hover:bg-orange-600 hover:border-orange-600">
                      View old portfolio
                  </button>
                  </a>
                  <Link to="/home" smooth={true} duration={500}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-white group border-2 font-bold text-lg hover:bg-orange-600 hover:border-orange-600">
                      View new portfolio
                  </button>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default WIP