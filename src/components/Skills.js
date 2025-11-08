import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C++", "C", "Java", "Python", "JavaScript"]
    },
    {
      title: "Technologies & Frameworks",
      icon: "⚡",
      skills: ["HTML", "CSS", "React.js", "Next.js", "Express.js", "Node.js", "Tailwind CSS"]
    },
    {
      title: "Databases & Tools",
      icon: "🛠️",
      skills: ["SQL", "MongoDB", "PostgreSQL", "Git", "VS Code"]
    },
    {
      title: "Relevant Coursework",
      icon: "📚",
      skills: ["Data Structures", "Algorithm Analysis", "Operating Systems", "Computer Networks", "Database Management", "Amazon Web Services (AWS)", "Object-Oriented Programming (OOP)"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-orange mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-800 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium hover:from-primary-200 hover:to-primary-100 dark:hover:from-primary-800 dark:hover:to-primary-700 transition-all duration-300 transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills visualization */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Proficiency Levels
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { skill: "JavaScript & React", level: 90 },
              { skill: "Python & Data Structures", level: 85 },
              { skill: "Node.js & Express", level: 80 },
              { skill: "Database Management", level: 85 },
              { skill: "Cloud Technologies (AWS)", level: 75 },
              { skill: "Java & OOP", level: 80 }
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">{item.skill}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-600 to-accent-orange h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;