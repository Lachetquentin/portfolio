import React from 'react'
import { Projects } from '../data/Projects'
import ProjectCard from './ProjectCard'
import { useTranslation } from 'react-i18next';

const ListOfProjects = []

Projects.forEach((data) => {
    ListOfProjects.push(ProjectCard(data))
})

function Project() {
    const { t } = useTranslation();
    return (
        <div name="projects" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-orange-600 ">
                        {t('projects.title')}
                    </p>
                    <p className="py-4">{t('projects.desc')}</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {ListOfProjects}
                </div>
            </div>
        </div>      
    )
}

export default Project