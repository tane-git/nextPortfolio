import React, { useEffect } from 'react'
import Project from './Project.jsx'
import accordion from '../helpers/accordion.js'
import projectsData from '../helpers/projects.js'

export default function Projects () {
  const projects = projectsData()

  useEffect(() => {
    var acc = document.getElementsByClassName('accordion')
    // var i

    let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    // add an event listener to check what the viewport is
    window.addEventListener('resize', () => {
      // check what the viewport is
      vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    })

    accordion(acc, vw)
  }, [])

  return (
    <div className='projects'>
      <div className='sectionTitle'>
        <h1>Projects</h1>
      </div>
      {projects.map(project => {
        return (
          <div className='project' key={project.title}>
            <button className='accordion'><div className='projectTitle'>{project.title}</div></button>
            <div className='panel'>
              <Project project={project} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
