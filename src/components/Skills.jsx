import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaReact } from 'react-icons/fa'
import { SiSpringboot } from 'react-icons/si'
import { GiTeamIdea, GiBrain, GiTalk, GiPuzzle, GiSandsOfTime } from 'react-icons/gi'

const skillData = [
  {
    category: 'Languages & Technologies',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: 90 },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 80 },
      { name: 'Java', icon: <FaJava className="text-red-500" />, level: 75 },
      { name: 'Python', icon: <FaPython className="text-blue-400" />, level: 70 },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 85 },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" />, level: 65 },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Critical Thinking', icon: <GiBrain className="text-purple-400" />, level: 90 },
      { name: 'Teamwork', icon: <GiTeamIdea className="text-blue-400" />, level: 85 },
      { name: 'Communication', icon: <GiTalk className="text-pink-400" />, level: 80 },
      { name: 'Problem Solving', icon: <GiPuzzle className="text-yellow-500" />, level: 85 },
      { name: 'Time Management', icon: <GiSandsOfTime className="text-orange-400" />, level: 80 },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 animate-fade-in">
      <h2 className="section-title">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {skillData.map(({ category, skills }, idx) => (
          <div
            key={category}
            className="bg-dark-100/60 backdrop-blur-lg p-8 rounded-2xl border border-dark-200 shadow-xl hover:border-secondary transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
          >
            <h3 className="text-xl font-semibold mb-6 text-textPrimary text-center gradient-text">
              {category}
            </h3>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <div key={skill.name} className="flex items-center gap-4 group">
                  <div className="text-2xl shrink-0">{skill.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-textPrimary">{skill.name}</span>
                      <span className="text-xs text-textSecondary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-dark-200/50 rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills 