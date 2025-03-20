import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { supabase } from '../config/supabaseClient'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_number', { ascending: true })

      if (error) {
        throw error
      }

      setProjects(data)
    } catch (error) {
      console.error('Error fetching projects:', error)
      setError('Failed to load projects')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section id="projects" className="py-20">
        <h2 className="section-title text-center">Projects</h2>
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="py-20">
        <h2 className="section-title text-center">Projects</h2>
        <div className="text-center text-red-500">{error}</div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20">
      <h2 className="section-title text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="project-card group">
            {project.image_url && (
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold mb-3 text-secondary text-center">
              {project.title}
            </h3>
            <p className="text-textSecondary mb-4 text-center">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm text-secondary bg-tertiary px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4 justify-center">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary transition-colors duration-300"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 