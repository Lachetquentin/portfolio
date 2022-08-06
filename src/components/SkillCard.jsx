import React from 'react'

function SkillCard(props) {
  return (
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className={props.size + ' mx-auto'} src={props.image} alt={props.name + " icon"}/>
          <div className="my-4">{props.name}</div>
      </div>
  )
}

export default SkillCard