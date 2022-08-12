import React from 'react'
import Museo from '../assets/Museo/Museo.png'
import EcoServices from '../assets/EcoServices/EcoServices.png'
import MovieManager from '../assets/MovieApp/MovieManager.png'
import ttvRPGBot from '../assets/ttvRPGbot/TTVRPGBOT.png'
import Jobboard from '../assets/Jobboard/Jobboard.png'
import DWU from '../assets/DWU/doctorwho.jpg'
import SlamFingers from '../assets/SlamFingers/slamfingers.jpg'
import GrandQuizz from '../assets/GrandQuizz/grandquizz.jpg'
import Arboretum from '../assets/Arboretum/arboretum.jpg'
import WorkCard from './WorkCard'

const Works = [{
    id:1,
    name: 'Museo',
    imgUrl: `url(${Museo})`,
    url: '/museo',
    githubUrl: 'https://github.com/Lachetquentin/museog4',
    web: false
},
{
    id: 2,
    name: 'Eco Services',
    imgUrl: `url(${EcoServices})`,
    url: '/ecoservices',
    githubUrl: '/',
    web: false // Can't be hosted on GH Pages etc.
},
{
    id: 3,
    name: 'Movie Manager',
    imgUrl: `url(${MovieManager})`,
    url: '/',
    githubUrl: '/',
    web: true
},
{
    id: 4,
    name: 'ttvRPG Bot',
    imgUrl: `url(${ttvRPGBot})`,
    url: '/',
    githubUrl: '/',
    web: false
},
{
    id: 5,
    name: 'Job Board',
    imgUrl: `url(${Jobboard})`,
    url: '/',
    githubUrl: '/',
    web: false // Can't be hosted on GH Pages etc.
},
{
    id: 6,
    name: 'Doctor Who Universe',
    imgUrl: `url(${DWU})`,
    url: '..' + process.env.PUBLIC_URL + '/old/dwu',
    githubUrl: 'https://github.com/Lachetquentin/portfolio/tree/main/public/old/dwu',
    web: true
},
{
    id: 7,
    name: 'Slam Fingers',
    imgUrl: `url(${SlamFingers})`,
    url: '/',
    githubUrl: '/',
    web: false
},
{
    id: 8,
    name: 'Grand Quizz',
    imgUrl: `url(${GrandQuizz})`,
    url: '/',
    githubUrl: '/',
    web: false
},
{
    id: 9,
    name: 'Arboretum',
    imgUrl: `url(${Arboretum})`,
    url: '/',
    githubUrl: '/',
    web: false
}]

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