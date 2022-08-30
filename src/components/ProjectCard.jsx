import React from 'react'

function ProjectCard(props) {
    const isWeb = props.web;
        return (
            <div key={props.id} style={{ backgroundImage: props.imgUrl }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 text-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        {props.name}
                    </span>
                    <p>
                        {props.desc}
                    </p>
                    <div className='pt-8 text-center'>
                        {isWeb &&
                        <a href={props.url}>
                            <button className='text-center rounded-lg px-4 py-3 m-2 text-white group border-2 font-bold text-lg hover:bg-orange-600 hover:border-orange-600'>View Demo</button>
                        </a>
                        } 
                        <a href={props.githubUrl}>
                            <button className='text-center rounded-lg px-4 py-3 m-2 text-white group border-2 font-bold text-lg hover:bg-orange-600 hover:border-orange-600'>View Code</button>
                        </a>
                    </div>
                </div>
            </div>
        )
}

export default ProjectCard