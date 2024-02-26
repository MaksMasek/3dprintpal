import { skillsData } from '@/lib/data'
import React from 'react'

export default function Skills() {
    return ( 
        <section>
            <h1 className='mt-20 text-center text-4xl font-bold pb-4'>My Skills</h1>
            <ul className='flex flex-wrap justify-center gap-1 text-lg text-gray-800'>
                {
                    skillsData.map((skill, index) => (
                        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-3 transition hover:scale-105" key={index}>{skill}</li>
                    ))
                }
            </ul>
        </section>
     )
}
 
