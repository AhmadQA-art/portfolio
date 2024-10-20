import React, { useState } from 'react';
import { Menu, X, Code, Workflow, Bot, ChevronDown, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed w-full px-4 py-0 z-50">
      <nav className="max-w-7xl mx-auto bg-[#f6f6f6] shadow-sm rounded-b-3xl px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-800">Your Name</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-2 pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-600">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600">Projects</a>
              <a href="#services" className="block px-3 py-2 text-gray-600">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

const Hero = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 min-h-screen flex items-center">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">No-Code Solution Developer</span>
              <span className="block text-blue-600 mt-3">Building Modern Software Solutions</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Transforming ideas into powerful software solutions using no-code technologies. Specializing in web applications, automation, and AI integration.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  View Projects
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
);

const About = () => (
  <section id="about" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
        About Me
      </h2>
      <div className="mt-6 text-gray-500 text-lg space-y-6">
        <p>
          Former software tester turned no-code developer, I'm passionate about creating efficient software solutions that solve real business problems. My background in testing gives me a unique perspective on building reliable and user-friendly applications.
        </p>
        <p>
          Currently focused on developing PropEase, a property management software, while also building custom solutions for clients using modern no-code tools and technologies.
        </p>
      </div>
    </div>
  </section>
);

const SkillCard = ({ icon: Icon, title, technologies }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="h-6 w-6 text-blue-600 mr-2" />
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    </div>
    <ul className="space-y-2">
      {technologies.map((tech, index) => (
        <li key={index} className="text-gray-500">{tech}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SkillCard
          icon={Code}
          title="No-Code Development"
          technologies={['Bubble', 'FlutterFlow', 'Webflow', 'Framer', 'Figma']}
        />
        <SkillCard
          icon={Workflow}
          title="Automation"
          technologies={['n8n', 'Zapier', 'Make', 'Supabase']}
        />
        <SkillCard
          icon={Bot}
          title="AI Integration"
          technologies={['LangChain', 'Python', 'AI APIs', 'ChatBots']}
        />
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, technologies, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="PropEase"
          description="Property management software with features for tenant management, maintenance requests, and payment processing."
          technologies={['Bubble', 'Supabase', 'Stripe']}
          imageUrl="/api/placeholder/400/300"
        />
        <ProjectCard
          title="Task Automation System"
          description="Automated workflow system for business process optimization and integration."
          technologies={['n8n', 'Make', 'Zapier']}
          imageUrl="/api/placeholder/400/300"
        />
        <ProjectCard
          title="AI Customer Service Bot"
          description="Intelligent chatbot for handling customer inquiries and support requests."
          technologies={['LangChain', 'Python', 'OpenAI']}
          imageUrl="/api/placeholder/400/300"
        />
      </div>
    </div>
  </section>
);

const ServiceCard = ({ title, description, features }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-medium text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-500 mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-500">
          <ChevronDown className="h-4 w-4 text-blue-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => (
  <section id="services" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="No-Code Development"
          description="Custom web and mobile applications built with modern no-code tools."
          features={[
            'Web Applications',
            'Mobile Apps',
            'Business Management Systems',
            'Custom Databases'
          ]}
        />
        <ServiceCard
          title="Automation Solutions"
          description="Streamline your business processes with powerful automation tools."
          features={[
            'Workflow Automation',
            'System Integration',
            'Process Optimization',
            'Data Synchronization'
          ]}
        />
        <ServiceCard
          title="AI Integration"
          description="Enhance your applications with artificial intelligence capabilities."
          features={[
            'Chatbots',
            'Data Analysis',
            'AI-Powered Features',
            'Natural Language Processing'
          ]}
        />
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
        Get In Touch
      </h2>
      <div className="max-w-lg mx-auto">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-gray-500">
            <Mail className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="text-gray-400 hover:text-gray-500">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/yourprofile" className="text-gray-400 hover:text-gray-500">
            <Github className="h-6 w-6" />
          </a>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default function Portfolio() {
    return (
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </div>
    );
  }