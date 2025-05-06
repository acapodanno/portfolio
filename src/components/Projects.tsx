import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      tags: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
      demoUrl: '#',
      codeUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'A full-stack social media application with real-time chat, post sharing, and user authentication.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
      demoUrl: '#',
      codeUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'A beautiful and intuitive task management application with drag-and-drop functionality and team collaboration.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
      tags: ['React', 'Redux', 'Firebase', 'CSS'],
      demoUrl: '#',
      codeUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A responsive weather application with location detection, 7-day forecast, and interactive maps.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      tags: ['JavaScript', 'API', 'CSS', 'HTML'],
      demoUrl: '#',
      codeUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A custom portfolio website for a photographer with gallery management and client access.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      tags: ['React', 'Tailwind', 'Framer Motion', 'CMS'],
      demoUrl: '#',
      codeUrl: '#',
      featured: true,
    },
    {
      id: 6,
      title: 'Restaurant Booking System',
      description: 'An online reservation system for restaurants with table management and email notifications.',
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      demoUrl: '#',
      codeUrl: '#',
      featured: false,
    },
  ];

  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Check out some of my recent work. Each project is a unique challenge that helped me grow as a developer.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === tag
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag === 'all' ? 'All Projects' : tag}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href={project.demoUrl} 
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span className="mr-1">Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.codeUrl} 
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span className="mr-1">Code</span>
                      <Github size={16} />
                    </a>
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

export default Projects;