import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Workflow, Bot, ChevronDown, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile2.jpeg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`fixed w-full z-50 transition-transform duration-300 pt-4 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="bg-[#ded7c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-16"> {/* Shifted items to the right */}
            <div className="hidden md:flex space-x-7"> {/* Increased top padding */}
              <a href="#about" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg sans-serif">about</a>
              <a href="#skills" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg sans-serif">skills</a>
              <a href="#portfolio" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg sans-serif">portfolio</a>
              <a href="#services" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg sans-serif">services</a>
              <a href="#contact" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg sans-serif">contact</a>
            </div>
            <div className="md:hidden ml-auto">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#333332]">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className={`fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <nav className="bg-[#ded7c7] font-worksans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-end items-center h-16">
                <div className="hidden md:flex space-x-7">
                  <a href="#about" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg">about</a>
                  <a href="#skills" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg">skills</a>
                  <a href="#portfolio" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg">portfolio</a>
                  {/* <a href="#services" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg">services</a> */}
                  {/* <a href="#contact" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg">contact</a> */}
                </div>
                <div className="md:hidden ml-auto">
                  <button onClick={() => setIsOpen(!isOpen)} className="text-[#333332]">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>
        
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a href="#about" className="block px-3 py-2 text-[#333332] lowercase text-lg">about</a>
                  <a href="#skills" className="block px-3 py-2 text-[#333332] lowercase text-lg">skills</a>
                  <a href="#portfolio" className="block px-3 py-2 text-[#333332] lowercase text-lg">portfolio</a>
                  {/* <a href="#services" className="block px-3 py-2 text-[#333332] lowercase text-lg">services</a> */}
                  {/* <a href="#contact" className="block px-3 py-2 text-[#333332] lowercase text-lg">contact</a> */}
                </div>
              </div>
            )}
          </nav>
        </div>
        
        )}
      </nav>
    </div>
  );
};

const Hero = () => (
  <div className="relative overflow-hidden" style={{ backgroundColor: '#ded7c7' }}>
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 min-h-screen flex items-center">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex items-center justify-between">
          <div className="sm:text-center lg:text-left">
            <h2 className="text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl">
              <strong>Hi, I'm Ahmad</strong>
            </h2>
            <h1 className="text-3xl tracking-tight font-semibold text-[#333332] sm:text-4xl md:text-5xl flex items-center gap-1 mt-1">
              <span className="text-lg">
                I am a No-Code Solutions Architect
              </span>
              <span className="text-lg relative inline-flex">
                Building Modern Software Solutions
                <span className="absolute bottom-1 left-0 bg-yellow-400 opacity-80 w-full h-3 -z-10" />
              </span>
            </h1>
            <div className="mt-0 max-w-2xl"> {/* Added max-width and reduced top margin */}
              <p className="text-lg text-[#333332] tracking-tight font-semibold flex items-center gap-1 mt-0">
                Transforming ideas into powerful software solutions using no-code technologies Specializing in web applications, automation, and AI integration.
              </p>
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-full border border-[#333333] bg-transparent">
                <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-[#333332] bg-transparent hover:bg-[#333333] hover:bg-opacity-20 md:py-4 md:text-lg md:px-10">
                  Hire Me!
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 rounded-full border border-[#333333] bg-transparent">
                <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-[#333332] bg-transparent hover:bg-[#333333] hover:bg-opacity-20 md:py-4 md:text-lg md:px-10">
                  View Projects
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block ml-10">
            <img
              src={profileImage}
              alt="Profile"
              className="w-150 object-cover rounded-lg"
              style={{ height: '450px' }} // Set a specific height
            />
          </div>

        </main>
      </div>
    </div>
  </div>
);

const SkillCard = ({ icon: Icon, title, technologies }) => (
  <div className="bg-[#ded7c7] bg-opacity-50 p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="h-6 w-6 text-blue-600 mr-2" />
      <h3 className="text-lg font-medium text-[#333332]">{title}</h3>
    </div>
    <ul className="space-y-2">
      {technologies.map((tech, index) => (
        <li key={index} className="text-[#333332]">{tech}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-[#ded7c7] bg-opacity-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-[#333332] sm:text-4xl text-center mb-12">
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
  <div className="bg-white bg-opacity-50 rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-medium text-[#333332] mb-2">{title}</h3>
      <p className="text-[#333332] mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-blue-100 bg-opacity-50 text-blue-600 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-[#ded7c7] bg-opacity-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-[#333332] sm:text-4xl text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="PropEase"
          description="Property management software with features for tenant management, maintenance requests, and payment processing."
          technologies={['Bubble', 'Supabase', 'Stripe', 'flutterflow']}
          imageUrl="/api/placeholder/400/300"
        />
      </div>
    </div>
  </section>
);

const ServiceCard = ({ title, description, features }) => (
  <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
    <h3 className="text-xl font-medium text-[#333332] mb-4">{title}</h3>
    <p className="text-[#333332] mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-[#333332]">
          <ChevronDown className="h-4 w-4 text-blue-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

// const Services = () => (
//   <section id="services" className="py-20 bg-[#ded7c7] bg-opacity-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <h2 className="text-3xl font-extrabold text-[#333332] sm:text-4xl text-center mb-12">
//         Services
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <ServiceCard
//           title="No-Code Development"
//           description="Custom web and mobile applications built with modern no-code tools."
//           features={[
//             'Web Applications',
//             'Mobile Apps',
//             'Business Management Systems',
//             'Custom Databases'
//           ]}
//         />
//         <ServiceCard
//           title="Automation Solutions"
//           description="Streamline your business processes with powerful automation tools."
//           features={[
//             'Workflow Automation',
//             'System Integration',
//             'Process Optimization',
//             'Data Synchronization'
//           ]}
//         />
//         <ServiceCard
//           title="AI Integration"
//           description="Enhance your applications with artificial intelligence capabilities."
//           features={[
//             'Chatbots',
//             'Data Analysis',
//             'AI-Powered Features',
//             'Natural Language Processing'
//           ]}
//         />
//       </div>
//     </div>
//   </section>
// );

// const Contact = () => (
//   <section id="contact" className="py-20 bg-[#ded7c7] bg-opacity-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <h2 className="text-3xl font-extrabold text-[#333332] sm:text-4xl text-center mb-12">
//         Get In Touch
//       </h2>
//       <div className="max-w-lg mx-auto">
//         <div className="flex justify-center space-x-6 mb-8">
//           <a href="mailto:your.email@example.com" className="text-[#333332] hover:text-[#333332]">
//             <Mail className="h-6 w-6" />
//           </a>
//           <a href="https://linkedin.com/in/yourprofile" className="text-[#333332] hover:text-[#333332]">
//             <Linkedin className="h-6 w-6" />
//           </a>
//           <a href="https://github.com/yourprofile" className="text-[#333332] hover:text-[#333332]">
//             <Github className="h-6 w-6" />
//           </a>
//         </div>
//         <form className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-[#333332]">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-[#333332]">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-[#333332]">
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows={4}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#333332] bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   </section>
// );

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#ded7c7] text-white">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      {/* <Services /> */}
      {/* <Contact /> */}
    </div>
  );
}