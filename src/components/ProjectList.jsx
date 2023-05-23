import React from 'react'

export default function ProjectList(props) {
    const { projects } = props;
    return (
        <ul className='projectList'>
            {projects.map((project, index) => {
                return <div key={index}>
                    <img className='img' src={project.img} alt={project.category} />
                </div>
            })}
        </ul>
    )
}