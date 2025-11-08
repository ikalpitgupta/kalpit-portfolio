import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-orange mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <img
                  src="/kalpit-profile.jpg"
                  alt="Kalpit Gupta"
                  className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white dark:border-gray-700"
                  style={{objectPosition: '50% 0%'}}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-orange rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-700" style={{display: 'none'}}>
                  <span className="text-4xl font-bold text-white">KG</span>
                </div>
              </div>
            </div>
            
            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
              <p>
                I'm a passionate B.Tech student specializing in Computer Science and Engineering (Bioinformatics) at VIT, 
                with a deep enthusiasm for building scalable, efficient applications that solve real-world problems. 
                My journey in technology combines full-stack web development, artificial intelligence, and cloud technologies 
                to create innovative software systems.
              </p>
              
              <p>
                I thrive on exploring new technologies in data science and cloud infrastructure, constantly pushing the 
                boundaries of what's possible. Whether it's developing AI-powered SaaS platforms, building e-commerce 
                solutions, or optimizing database performance, I approach each project with curiosity and dedication.
              </p>
              
              <p>
                My goal is to leverage technology to create meaningful impact, combining technical expertise with 
                creative problem-solving to build solutions that make a difference in people's lives.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Problem Solver</h3>
                <p className="text-gray-600 dark:text-gray-400">Passionate about finding innovative solutions to complex challenges</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Team Player</h3>
                <p className="text-gray-600 dark:text-gray-400">Experienced in collaborative development and agile methodologies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Continuous Learner</h3>
                <p className="text-gray-600 dark:text-gray-400">Always exploring new technologies and improving skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;