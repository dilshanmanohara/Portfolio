const Skills = () => {
  const skills = {
    'Languages & Technologies': [
      'HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'React.js', 'Spring Boot'
    ],
    'Soft Skills': [
      'Critical Thinking', 'Teamwork', 'Communication', 'Problem Solving', 'Time Management'
    ]
  }

  return (
    <section id="skills" className="py-20 animate-fade-in">
      <h2 className="section-title">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="bg-dark-100/50 backdrop-blur-sm p-8 rounded-xl border border-dark-200 hover:border-secondary transition-duration-300">
            <h3 className="text-xl font-semibold mb-6 text-textPrimary text-center gradient-text">
              {category}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {skillList.map((skill) => (
                <span key={skill} className="bg-dark-200/50 px-4 py-2 rounded-lg text-textPrimary
                  border border-dark-300/50 transition-all duration-300 hover:border-secondary
                  hover:text-secondary hover:shadow-glow">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills 