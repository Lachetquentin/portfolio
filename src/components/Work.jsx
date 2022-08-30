import React from 'react'
import { Works } from '../data/Works'
import WorkCard from './WorkCard'

const ListOfWorks = []

Works.forEach((data) => {
    ListOfWorks.push(WorkCard(data))
})

function Work() {
    return (
        <div name="work" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-orange-600 ">
                        Works
                    </p>
                    <p className="py-4">Check out all of my works</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {ListOfWorks}
                </div>
            </div>
        </div>      
    )
}

export default Work