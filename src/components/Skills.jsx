import React from 'react'
import { Technologies } from '../data/Skills'
import SkillCard from './SkillCard'

const ListOfTechnologies = []

Technologies.forEach((data) => {
  ListOfTechnologies.push(SkillCard(data))
})

function Skills() {
  return (
    <div name="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2  sm:grid-cols-4 gap-4 text-center py-8">
          {ListOfTechnologies}
        </div>
      </div>
    </div>
  );
}

export default Skills