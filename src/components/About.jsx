import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Quentin, nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-2xl ">
            <p>I am a 23 year old computer science student, and I am passionate about programming. <br/>
              I'm looking to improve every day to become the best version of myself. <br/>
              I have worked on websites as well as desktop applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
