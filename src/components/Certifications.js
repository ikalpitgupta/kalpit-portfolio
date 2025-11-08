import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle",
      icon: "📊",
      color: "from-red-500 to-orange-600",
      certificateLink: "https://drive.google.com/file/d/1ykITYHthLNZCXNqLPEpc2mgUP5hrISwK/view?usp=sharing"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      icon: "🤖",
      color: "from-purple-500 to-pink-600",
      certificateLink: "https://drive.google.com/file/d/1daTeClBboRGrIq5bPM9dGuKJ-k-fjrTX/view?usp=sharing"
    }
  ];

  const achievement = {
    title: "Winner – E-Summit Innoventure 2024",
    position: "1st Place",
    award: "₹35,000 Award",
    description: "for innovation and problem-solving",
    icon: "🏆",
    color: "from-yellow-500 to-orange-600"
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-orange mx-auto"></div>
        </div>
        
        {/* Achievement Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card p-8 md:p-12 text-center">
            <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6`}>
              {achievement.icon}
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {achievement.title}
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 text-yellow-800 dark:text-yellow-200 rounded-full font-semibold">
                {achievement.position}
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 rounded-full font-semibold">
                {achievement.award}
              </span>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {achievement.description}
            </p>
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="card p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-primary-600 font-semibold mb-4">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Certified Professional</span>
                    </div>
                    
                    {/* View Certificate Button */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={cert.certificateLink}
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
        
        {/* Skills highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-50 to-accent-orange/10 dark:from-primary-900/30 dark:to-accent-orange/10 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Expertise Areas
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { area: "Data Science", icon: "📈" },
                  { area: "Cloud Computing", icon: "☁️" },
                  { area: "Generative AI", icon: "🧠" },
                  { area: "Innovation", icon: "💡" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{item.area}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;