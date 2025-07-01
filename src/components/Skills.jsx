import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaReact, FaGithub, FaAndroid, FaTools, FaPhp } from 'react-icons/fa'
import { SiSpringboot, SiNextdotjs, SiMongodb, SiSupabase, SiPostman, SiIntellijidea, SiVisualstudiocode, SiKotlin } from 'react-icons/si'
import { GiTeamIdea, GiBrain, GiTalk, GiPuzzle, GiSandsOfTime } from 'react-icons/gi'

const skillData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: 90 },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 80 },
      { name: 'Java', icon: <FaJava className="text-red-500" />, level: 75 },
      { name: 'Python', icon: <FaPython className="text-blue-400" />, level: 70 },
      { name: 'Kotlin', icon: <SiKotlin className="text-purple-500" />, level: 60 },
      { name: 'PHP', icon: <FaPhp className="text-indigo-400" />, level: 65 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 85 },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" />, level: 70 },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" />, level: 65 },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 70 },
      { name: 'Supabase', icon: <SiSupabase className="text-green-400" />, level: 65 },
      { name: 'GitHub', icon: <FaGithub className="text-gray-200" />, level: 80 },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" />, level: 75 },
      { name: 'NetBeans', icon: <FaTools className="text-blue-700" />, level: 60 },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-purple-700" />, level: 65 },
      { name: 'VS Code', icon: <SiVisualstudiocode className="text-blue-400" />, level: 85 },
      { name: 'Android Studio', icon: <FaAndroid className="text-green-600" />, level: 60 },
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
      <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto px-2">
        {skillData.map(({ category, skills }, idx) => (
          <div
            key={category}
            className="bg-dark-100/60 backdrop-blur-lg p-4 rounded-2xl border border-dark-200 shadow-xl hover:border-secondary transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
          >
            <h3 className="text-xl font-semibold mb-3 text-textPrimary text-center gradient-text">
              {category}
            </h3>
            <div className="space-y-3">
              {skills.length === 0 ? (
                <div className="text-textSecondary text-center">Coming soon...</div>
              ) : (
                skills.map((skill, i) => (
                  <div key={skill.name} className="flex items-center gap-4 group">
                    <div className="text-2xl shrink-0">{skill.icon}</div>
                    <span className="font-medium text-textPrimary">{skill.name}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills 