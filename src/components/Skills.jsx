import React from 'react'
import SkillCard from './SkillCard'

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../assets/Technologies', false, /\.(png|jpe?g)$/));

const Technologies = [{
  name: "HTML",
  image: images[5],
  size: "w-20"
}, 
{
  name: "CSS",
  image: images[2],
  size: "w-20"
}, 
{
  name: "Javascript",
  image: images[7],
  size: "w-20"
}, 
{
  name: "PHP",
  image: images[11],
  size: "h-20"
}, 
{
  name: "React",
  image: images[12],
  size: "w-20"
},
{
  name: "Node.js",
  image: images[10],
  size: "w-20"
},
{
  name: "Git",
  image: images[3],
  size: "w-20"
},
{
  name: "Tailwind",
  image: images[13],
  size: "w-20"
},
{
  name: "Bootstrap",
  image: images[0],
  size: "w-20"
},
{
  name: "MySQL",
  image: images[9],
  size: "w-20"
},
{
  name: "C#",
  image: images[1],
  size: "w-20"
},
{
  name: "Java",
  image: images[6],
  size: "h-20"
}]

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