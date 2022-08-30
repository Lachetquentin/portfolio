import Museo from '../assets/Museo/Museo.png'
import EcoServices from '../assets/EcoServices/EcoServices.png'
// import MovieManager from '../assets/MovieApp/MovieManager.png'
import ttvRPGBot from '../assets/ttvRPGbot/TTVRPGBOT.png'
import Jobboard from '../assets/Jobboard/Jobboard.png'
import DWU from '../assets/DWU/doctorwho.jpg'
import SlamFingers from '../assets/SlamFingers/slamfingers.jpg'
import GrandQuizz from '../assets/GrandQuizz/grandquizz.jpg'
//import Arboretum from '../assets/Arboretum/arboretum.jpg'

export const Projects = [{
    id: 1,
    name: 'Museo',
    imgUrl: `url(${Museo})`,
    url: '/museo',
    githubUrl: 'https://github.com/Lachetquentin/museog4',
    web: false,
    desc: 'C# Application to manage a museum',
},
{
    id: 2,
    name: 'Eco Services',
    imgUrl: `url(${EcoServices})`,
    url: '/ecoservices',
    githubUrl: 'https://github.com/Lachetquentin/FONG4',
    web: false, // Can't be hosted on GH Pages etc.
    desc: 'PHP E-Commerce Website',
},
// { // Need a complete rewrite in ReactJS
//     id: 3,
//     name: 'Movie Manager',
//     imgUrl: `url(${MovieManager})`,
//     url: '/',
//     githubUrl: '/',
//     web: false,
//     desc: 'React Native Application to manage your movies',
// },
{
    id: 4,
    name: 'ttvRPG Bot',
    imgUrl: `url(${ttvRPGBot})`,
    url: '/',
    githubUrl: 'https://github.com/Lachetquentin/ttvRPGBot',
    web: false,
    desc: 'Twitch Bot to play RPG game',
},
{
    id: 5,
    name: 'Job Board',
    imgUrl: `url(${Jobboard})`,
    url: '/',
    githubUrl: 'https://github.com/Lachetquentin/myjobboard',
    web: false, // Can't be hosted on GH Pages etc.
    desc: 'PHP Job Board Website',
},
{
    id: 6,
    name: 'Doctor Who Universe',
    imgUrl: `url(${DWU})`,
    url: '..' + process.env.PUBLIC_URL + '/old/dwu',
    githubUrl: 'https://github.com/Lachetquentin/portfolio/tree/main/public/old/dwu',
    web: true,
    desc: 'Doctor Who Fan Website (HTML/CSS/JS)',
},
{
    id: 7,
    name: 'Slam Fingers',
    imgUrl: `url(${SlamFingers})`,
    url: '/',
    githubUrl: 'https://github.com/Lachetquentin/SlamFingers',
    web: false,
    desc: 'C# Typing Game with League of Legends Theme', 
},
{
    id: 8,
    name: 'Grand Quizz',
    imgUrl: `url(${GrandQuizz})`,
    url: '/',
    githubUrl: 'https://github.com/Lachetquentin/GrandQuizz',
    web: false,
    desc: 'C# Quizz Game with TV Show & Movies Theme',
},
    // { Need to retrieve the code
    //     id: 9,
    //     name: 'Arboretum',
    //     imgUrl: `url(${Arboretum})`,
    //     url: '/',
    //     githubUrl: '/',
    //     web: false,
    //     desc: 'Java Application to manage a tree nursery',
    // }
]