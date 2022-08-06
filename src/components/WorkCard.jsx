import React from 'react'
import { Link } from 'react-router-dom'

function WorkCard(props) {
    return (
        <div style={{ backgroundImage: props.imgUrl }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    {props.name}
                </span>
                <div className='pt-8 text-center'>
                    <Link to={props.url}>
                        <button className='text-center rounded-lg px-4 py-3 m-2 text-white group border-2 font-bold text-lg hover:bg-orange-600 hover:border-orange-600'>View More</button>
                    </Link>
                    <a href={props.githubUrl}>
                        <button className='text-center rounded-lg px-4 py-3 m-2 text-white group border-2 font-bold text-lg hover:bg-orange-600 hover:border-orange-600'>View Code</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WorkCard