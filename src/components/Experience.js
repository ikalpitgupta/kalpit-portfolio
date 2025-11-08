import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "MRN Digital",
      position: "Tech Support Department",
      type: "IT Services and Solutions Provider",
      duration: "Jun 2025 – Jul 2025",
      location: "Gurugram, India",
      achievements: [
        "Developed full-stack web applications using React, Node.js, and Express; integrated RESTful APIs to improve scalability by 15% and reduce latency by 10%",
        "Optimized Agile team workflows and deployment pipelines, accelerating project delivery timelines by 20% through structured sprint planning and cross-functional coordination"
      ],
      icon: "💼",
      color: "from-blue-500 to-purple-600",
      certificateLink: "https://drive.google.com/file/d/16zVoxK1QAJCUGkcT08HF8ycho4BUcUpx/view?usp=sharing"
    },
    {
      company: "Ashok Leyland",
      position: "IT Department Internship",
      type: "Commercial Vehicle Manufacturer",
      duration: "Jun 2024 – Jul 2024",
      location: "Alwar, India",
      achievements: [
        "Built and deployed an inventory management system, improving data efficiency by 20% and enhancing uptime by 25% through seamless IT integration",
        "Improved data integrity using advanced validation techniques, reducing errors by 15% and ensuring reliable operations across departments"
      ],
      icon: "🏭",
      color: "from-green-500 to-teal-600",
      certificateLink: "https://drive.google.com/file/d/1XwgeQ8sSaCy3bG4vATjWc3tjFmYIAUc6/view?usp=sharing"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-orange mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-accent-orange"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="card p-6 md:p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center text-white text-xl`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-lg font-semibold text-primary-600 mb-1">
                          {exp.position}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {exp.type}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-400 mb-4">
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{exp.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{exp.location}</span>
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* View Certificate Button */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-300 group"
                      >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>View Certificate</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;