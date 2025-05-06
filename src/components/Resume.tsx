import React from 'react';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Resume: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const workExperience = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2020 - Present',
      description: 'Led the frontend development team in building a SaaS platform using React, TypeScript, and Tailwind CSS. Implemented CI/CD pipelines and improved site performance by 40%.',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2018 - 2020',
      description: 'Developed responsive web applications using React and Redux. Collaborated with UI/UX designers to implement pixel-perfect designs and improve user experience.',
    },
    {
      id: 3,
      title: 'Web Developer',
      company: 'Creative Agency',
      period: '2016 - 2018',
      description: 'Built and maintained websites for various clients using HTML, CSS, JavaScript, and WordPress. Worked closely with designers and content creators to deliver high-quality web solutions.',
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Master of Computer Science',
      institution: 'University of Technology',
      period: '2014 - 2016',
      description: 'Specialized in Web Technologies and Human-Computer Interaction. Graduated with honors.',
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Science',
      institution: 'State University',
      period: '2010 - 2014',
      description: 'Focused on Software Engineering and Database Systems. Participated in multiple hackathons and coding competitions.',
    },
  ];

  return (
    <section id="resume" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Resume</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-8">
            A summary of my professional experience and educational background.
          </p>
          
          <div className="flex justify-center mb-12">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center mb-6">
                <Briefcase size={24} className="text-indigo-600 dark:text-indigo-400 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Work Experience</h3>
              </div>
              
              <div className="space-y-8">
                {workExperience.map((job) => (
                  <div key={job.id} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-200 dark:before:bg-indigo-900">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-800"></div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-medium text-gray-800 dark:text-white">{job.title}</h4>
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-sm rounded-full">
                          {job.period}
                        </span>
                      </div>
                      <h5 className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{job.company}</h5>
                      <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-indigo-600 dark:text-indigo-400 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-200 dark:before:bg-indigo-900">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-800"></div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-medium text-gray-800 dark:text-white">{edu.degree}</h4>
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-sm rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <h5 className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{edu.institution}</h5>
                      <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                    </div>
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

export default Resume;