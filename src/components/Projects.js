import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Swift AI",
      subtitle: "SaaS Platform",
      tech: "PERN Stack (PostgreSQL, Express, React, Node.js)",
      description: "Developed and deployed a scalable AI-powered SaaS platform using the PERN stack, integrating content-generation APIs and automated workflows through RESTful endpoints for enhanced functionality.",
      achievements: [
        "Optimized PostgreSQL database queries and modular React components",
        "Improved performance, scalability, and cross-device responsiveness by 30%",
        "Integrated AI-powered content generation APIs",
        "Built automated workflows with RESTful endpoints"
      ],
      icon: "🤖",
      color: "from-purple-500 to-pink-600",
      tags: ["React", "Node.js", "PostgreSQL", "AI APIs", "REST"]
    },
    {
      title: "ConnectCart",
      subtitle: "E-Commerce Application",
      tech: "Next.js, MongoDB, Tailwind, Clerk, Ingest",
      description: "Engineered a modern e-commerce platform with Next.js and MongoDB, featuring secure authentication via Clerk and robust order/product management APIs.",
      achievements: [
        "Built secure authentication system using Clerk",
        "Implemented comprehensive order and product management",
        "Integrated job processing with Ingest",
        "Created responsive UI using Tailwind CSS",
        "Ensured seamless user experience and efficient backend operations"
      ],
      icon: "🛒",
      color: "from-blue-500 to-cyan-600",
      tags: ["Next.js", "MongoDB", "Tailwind", "Clerk", "Ingest"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-orange mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card p-6 md:p-8 group">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary-600 mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {project.tech}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                {project.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-800 text-primary-800 dark:text-primary-200 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              

            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/ikalpitgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;