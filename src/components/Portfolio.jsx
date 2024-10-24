import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Code, Workflow, Bot, ChevronDown, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile2.jpeg';
import crm from '../assets/crm1.png';
import chat from '../assets/chatbot.png';

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const controlNavbar = () => {
//       if (typeof window !== 'undefined') {
//         if (window.scrollY > lastScrollY) {
//           setIsVisible(false);
//         } else {
//           setIsVisible(true);
//         }
//         setLastScrollY(window.scrollY);
//       }
//     };

//     if (typeof window !== 'undefined') {
//       window.addEventListener('scroll', controlNavbar);
//       return () => {
//         window.removeEventListener('scroll', controlNavbar);
//       };
//     }
//   }, [lastScrollY]);

//   return (
//     <div className={`fixed w-full z-50 transition-transform duration-300 pt-4 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
//       <nav className="bg-[#ded7c7]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-end items-center h-16"> {/* Shifted items to the right */}
//             <div className="hidden md:flex space-x-7"> {/* Increased top padding */}
//               <a href="#about" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg sans-serif">about</a>
//               <a href="#skills" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg sans-serif">skills</a>
//               <a href="#portfolio" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg sans-serif">portfolio</a>
//               <a href="#services" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg sans-serif">services</a>
//               <a href="#contact" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg sans-serif">contact</a>
//             </div>
//             <div className="md:hidden ml-auto">
//               <button onClick={() => setIsOpen(!isOpen)} className="text-[#333332]">
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {isOpen && (
//           <div className={`fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
//           <nav className="bg-[#ded7c7] font-worksans">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex justify-end items-center h-16">
//                 <div className="hidden md:flex space-x-7">
//                   <a href="#about" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg">about</a>
//                   <a href="#skills" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg">skills</a>
//                   <a href="#portfolio" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg">portfolio</a>
//                   {/* <a href="#services" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg">services</a> */}
//                   {/* <a href="#contact" className="text-[#333332] hover:text-gray-700 transition duration-300 lowercase text-lg">contact</a> */}
//                 </div>
//                 <div className="md:hidden ml-auto">
//                   <button onClick={() => setIsOpen(!isOpen)} className="text-[#333332]">
//                     {isOpen ? <X size={24} /> : <Menu size={24} />}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {isOpen && (
//               <div className="md:hidden">
//                 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                   <a href="#about" className="block px-3 py-2 text-[#333332] lowercase text-lg">about</a>
//                   <a href="#skills" className="block px-3 py-2 text-[#333332] lowercase text-lg">skills</a>
//                   <a href="#portfolio" className="block px-3 py-2 text-[#333332] lowercase text-lg">portfolio</a>
//                   {/* <a href="#services" className="block px-3 py-2 text-[#333332] lowercase text-lg">services</a> */}
//                   {/* <a href="#contact" className="block px-3 py-2 text-[#333332] lowercase text-lg">contact</a> */}
//                 </div>
//               </div>
//             )}
//           </nav>
//         </div>

//         )}
//       </nav>
//     </div>
//   );
// };

const Hero = () => (
  <div className="relative overflow-hidden" style={{ backgroundColor: '#ded7c7' }}>
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 min-h-screen flex items-center">
        <main className="mt-5 mx-auto px-4 sm:mt-8 sm:px-6 md:mt-12 lg:mt-16 lg:px-8 xl:mt-20 flex items-center justify-between">
          <div className="sm:text-center lg:text-left mr-40"> {/* Added margin-right */}
            <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl lowercase" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
              <strong>hi, i'm ahmad</strong>
            </h2>
            <p className="text-lg text-[#333332] tracking-tight font-normal mt-1 lowercase max-w-xl" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}> {/* Changed font-semibold to font-normal */}
              i am a no-code solutions architect{' '}
              <span className="relative inline-flex">
                <span className="absolute bottom-1 left-0 bg-yellow-400 opacity-80 w-full h-3 -z-10" />
                building modern software solutions
              </span>
              transforming ideas into powerful software solutions using no-code technologies specializing in web applications, automation, and ai integration.
            </p>
            {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-full border border-[#333333] bg-transparent">
                <a href="#contact" className="w-full flex items-center justify-center px-4 py-2 h-10 text-base font-medium rounded-full text-[#333332] bg-transparent hover:bg-[#333333] hover:bg-opacity-20 md:py-2 md:text-lg md:px-6" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
                  get in touch
                  <Mail className="h-5 w-5 ml-2" />
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 rounded-full border border-[#36322f] bg-transparent">
                <a href="#projects" className="w-full flex items-center justify-center px-4 py-2 h-10 text-base font-medium rounded-full text-[#36322f] bg-transparent hover:bg-[#36322f] hover:bg-opacity-20 md:py-2 md:text-lg md:px-6" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
                  portfolio
                  <ArrowRight size={24} color="#36322f" strokeWidth={1.75} className="ml-2" />
                </a>
              </div>
            </div> */}
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
      <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl text-left lowercase" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
        <strong>skills & technologies</strong>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 mt-8">
        <div className="space-y-2">
          <div className="text-[#333332] text-lg font-medium">Make</div>
          <div className="text-[#333332] text-lg font-medium">Supabase</div>
          <div className="text-[#333332] text-lg font-medium">Bubble</div>
          <div className="text-[#333332] text-lg font-medium">FlutterFlow</div>
          <div className="text-[#333332] text-lg font-medium">Webflow</div>
          <div className="text-[#333332] text-lg font-medium">Framer</div>
          <div className="text-[#333332] text-lg font-medium">Figma</div>
        </div>
        <div className="space-y-2">
          <div className="text-[#333332] text-lg font-medium">LangChain</div>
          <div className="text-[#333332] text-lg font-medium">Python</div>
          <div className="text-[#333332] text-lg font-medium">AI APIs</div>
          <div className="text-[#333332] text-lg font-medium">ChatBots</div>
          <div className="text-[#333332] text-lg font-medium">n8n</div>
          <div className="text-[#333332] text-lg font-medium">Zapier</div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, technologies, imageUrl, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="block border border-[#5c5e5d] bg-[#ded7c7] overflow-hidden"> {/* Made the card clickable */}
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-medium text-[#333332] mb-3">{title}</h3>
      <p className="text-[#333332] mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-blue-100 bg-opacity-50 text-blue-600 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-[#ded7c7] bg-opacity-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl text-left lowercase" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
        <strong>projects</strong>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-6 mt-8 justify-center">
        <ProjectCard
          title="Real Estate CRM"
          description="customers relations management system for real estate professionals to manage their relations."
          technologies={['Bubble', 'Docuseal', 'vercel', 'figma']}
          imageUrl={crm}
          link="https://propease-78244.bubbleapps.io/version-test/login" // Replace with the actual link
        />
        <ProjectCard
          title="chatbot"
          description="Chatbot powered by groqAI."
          technologies={['Bubble', 'gorq']}
          imageUrl={chat}
          link="https://ai-powered-application.bubbleapps.io/version-test" // Replace with the actual link
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

const Contact = () => (
  <section id="contact" className="py-20 bg-[#ded7c7] bg-opacity-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl text-left lowercase" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
        <strong>Get In Touch</strong>
      </h2>
      <div className="flex justify-start items-start space-x-20"> {/* Flex container for text and icons/button */}
        <div className="flex flex-col text-left"> {/* Column layout for text */}
          <p className="text-lg text-[#333332]">Phone: +201151359701</p>
          <p className="text-lg text-[#333332]">Phone: +20128261764</p>
          <p className="text-lg text-[#333332]">Email: <a href="mailto:ahmadmesbahqa@gmail.com" className="text-[#333332] hover:underline">ahmadmesbahqa@gmail.com</a></p>
        </div>
        <div className="flex flex-col items-center space-y-6"> {/* Column layout for icons and button */}
          <div className="flex space-x-4"> {/* Space between icons */}
            <a href="mailto:ahmadmesbahqa@gmail.com" className="text-[#333332] hover:text-[#333332]">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-mohamed-8ba9a131a/" className="text-[#333332] hover:text-[#333332]">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/AhmadQA-art" className="text-[#333332] hover:text-[#333332]">
              <Github className="h-6 w-6" />
            </a>
          </div>
          <a href="https://calendly.com/ahmadmesbahqa/let-s-have-a-chat?month=2024-10" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-4 py-2 h-10 text-base font-medium rounded-full text-[#333332] border border-[#333333] bg-transparent hover:bg-[#333333] hover:bg-opacity-20 md:py-2 md:text-lg md:px-6">
            Let's Meet
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#ded7c7] text-white">
      {/* <Navigation /> */}
      <Hero />
      <Skills />
      <Projects />
      {/* <Services /> */}
      <Contact />
    </div>
  );
}