import React from 'react';

const Extracurricular = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Extracurricular <span className="text-gradient">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-orange mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-accent-orange"></div>
            
            {/* Entrepreneurship Cell */}
            <div className="relative flex items-start mb-12 md:flex-row">
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
              
              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
                <div className="card p-6 md:p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-orange to-accent-gold flex items-center justify-center text-white text-xl">
                      🚀
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        Entrepreneurship Cell, VIT
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 mb-1">
                        Executive Member
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Innovation and Business Development
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>Apr 2024 – Present</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Vellore, India</span>
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        Led marketing and branding strategies for E-Summit 2024, executing digital and offline campaigns that increased reach and boosted participation
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        Secured a 15% rise in event sponsorship through cold outreach, strategic pitching, and partnership building; oversaw logistics to ensure smooth execution
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                      <div className="text-xl font-bold text-accent-orange mb-1">15%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Sponsorship Rise</div>
                    </div>
                    
                    <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                      <div className="text-xl font-bold text-accent-gold mb-1">E-Summit</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">2024 Leader</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GraVITas 2025 */}
            <div className="relative flex items-start mb-12 md:flex-row-reverse">
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
              
              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12">
                <div className="card p-6 md:p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white text-xl">
                      🎪
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        GraVITas 2025
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 mb-1">
                        Coordinator, Guest Care Department
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        VIT's Annual Technological and Design Carnival
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>Sep 2025</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Vellore, India</span>
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        Led a large volunteer team responsible for managing distinguished speakers, foreign delegates, and external participants from multiple countries
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        Ensured smooth logistics including arrival and departure scheduling, accommodation arrangements, and on-site assistance for guest speakers and international participants
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        Collaborated with other departments to synchronize event operations, hospitality, and venue coordination for seamless experience
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        Gained valuable exposure in stakeholder management, strategic planning, time management, and conflict resolution
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                      <div className="text-xl font-bold text-purple-600 mb-1">3000+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Guests Managed</div>
                    </div>
                    
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <div className="text-xl font-bold text-blue-600 mb-1">National</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Tech Fest</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills gained section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Leadership Skills Developed
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { skill: "Leadership", icon: "👑" },
              { skill: "Event Management", icon: "🎯" },
              { skill: "Team Coordination", icon: "👥" },
              { skill: "Strategic Planning", icon: "🧠" },
              { skill: "Cross-Cultural Communication", icon: "🌍" },
              { skill: "Stakeholder Management", icon: "🤝" },
              { skill: "Conflict Resolution", icon: "⚖️" },
              { skill: "Time Management", icon: "⏰" },
              { skill: "Marketing Strategy", icon: "📈" },
              { skill: "Partnership Building", icon: "🤝" },
              { skill: "Operational Planning", icon: "📋" },
              { skill: "Team Dynamics", icon: "👥" }
            ].map((item, index) => (
              <div key={index} className="card p-4 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">{item.skill}</div>
              </div>
            ))}
          </div>
          
          {/* Impact summary */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-orange/10 dark:from-primary-900/30 dark:to-accent-orange/10 rounded-2xl p-8 text-center">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Translating Event Management to Tech Leadership
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Through coordinating major tech events like GraVITas and leading entrepreneurship initiatives, I've developed strong leadership capabilities 
              in high-pressure environments. These experiences have enhanced my understanding of team dynamics, operational planning, and leadership under tight deadlines — 
              helping me translate event management principles into effective project execution skills directly relevant to fast-paced tech environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;