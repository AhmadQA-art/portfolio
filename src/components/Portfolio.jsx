import React from 'react';
import { Mail, Linkedin, Github, Code, ShoppingCart, Bot, Zap } from 'lucide-react';
import profileImage from '../assets/profile2.jpeg';
import chat from '../assets/chatbot.png';
import saasLandingPage from '../assets/Saas_landing_page.png';
import ecommerceWebsite from '../assets/Ecommerce_website.png';
import propEase1 from '../assets/propease project/Dashboard.png';
import propEase2 from '../assets/propease project/Leases.png';
import propEase3 from '../assets/propease project/People-teams-view.png';
import propEase4 from '../assets/propease project/Rentals-1.png';
import propEase5 from '../assets/propease project/bank accounts.png';
import propEase6 from '../assets/propease project/communications.png';
import propEase7 from '../assets/propease project/finances-overview.png';
import propEase8 from '../assets/propease project/finances-reports generation.png';
import propEase9 from '../assets/propease project/maintenance.png';
import SideNavigation from './SideNavigation';

const Hero = () => (
  <div id="hero" className="relative overflow-hidden" style={{ backgroundColor: '#ded7c7' }}>
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 min-h-screen flex flex-col md:flex-row items-center">
        <main className="flex flex-col md:flex-row items-center justify-between min-h-[400px] h-auto md:h-[80vh] px-4 sm:px-6 lg:px-8 w-full"> 
          <div className="w-full md:w-1/2 lg:text-left mr-0 md:mr-8 ml-0 mt-8 md:mt-0"> 
            <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl text-center md:text-left" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
              <strong>Hi, I'm Ahmad</strong>
            </h2>
            <p className="text-base sm:text-lg text-[#333332] tracking-tight font-normal mt-1 max-w-xl mx-auto md:mx-0 text-center md:text-left" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
              I'm a Full-stack Developer and Solutions Architect who transforms ideas into powerful web applications, automation tools, and AI-driven solutions. I utilize a mix of Low-code and Coding technologies to build modern software that drives efficiency and innovation.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
              <a
                href="https://cal.com/ahmad-mesbahqa-sstmcl/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-[#333332] text-[#ded7c7] rounded-full text-sm font-semibold shadow hover:bg-[#222] transition"
              >
                Let's Chat
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center block mt-8 md:mt-0"> 
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-lg"
              style={{ 
                width: 'auto', 
                height: 'auto', 
                maxHeight: '450px',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
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
      <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl text-left" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
        <strong>Skills & Technologies</strong>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 mt-8">
        <div className="space-y-2">
          <div className="text-[#333332] text-lg font-medium">HTML/CSS/JavaScript</div>
          <div className="text-[#333332] text-lg font-medium">Git/Github</div>
          <div className="text-[#333332] text-lg font-medium">Python</div>
          <div className="text-[#333332] text-lg font-medium">Bubble.io</div>
          <div className="text-[#333332] text-lg font-medium">FlutterFlow</div>
          <div className="text-[#333332] text-lg font-medium">Node.js/Express.js</div>
          <div className="text-[#333332] text-lg font-medium">CI/CD</div>
          <div className="text-[#333332] text-lg font-medium">AWS services</div>
          <div className="text-[#333332] text-lg font-medium">Supabase</div>
          <div className="text-[#333332] text-lg font-medium">Webflow</div>
          <div className="text-[#333332] text-lg font-medium">UI/UX Design</div>
        </div>
        <div className="space-y-2">
          <div className="text-[#333332] text-lg font-medium">Figma</div>
          <div className="text-[#333332] text-lg font-medium">Microsoft Azure</div>
          <div className="text-[#333332] text-lg font-medium">Asana</div>
          <div className="text-[#333332] text-lg font-medium">PostgreSQL</div>
          <div className="text-[#333332] text-lg font-medium">React.js</div>
          <div className="text-[#333332] text-lg font-medium">Vite.js</div>
          <div className="text-[#333332] text-lg font-medium">Typescript</div>
          <div className="text-[#333332] text-lg font-medium">API's</div>
          <div className="text-[#333332] text-lg font-medium">n8n</div>
          <div className="text-[#333332] text-lg font-medium">Framer</div>
          <div className="text-[#333332] text-lg font-medium">langchain</div>
          <div className="text-[#333332] text-lg font-medium">Python</div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, technologies, images, link }) => {
  const [current, setCurrent] = React.useState(0);
  const hasImages = images && images.length > 0;
  const goTo = idx => setCurrent(idx);

  return (
    <div className="border border-[#5c5e5d] bg-[#ded7c7] overflow-hidden group relative transition-shadow duration-300 hover:shadow-lg rounded-xl w-full max-w-md mx-auto">
      {hasImages && (
        <div className="relative w-full h-40 sm:h-48 flex items-center justify-center">
          <img src={images[current]} alt={title} className="w-full h-40 sm:h-48 object-cover transition-all duration-300 rounded-t-xl" />
          {/* Navigation Dots - only show if more than one image */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full ${current === idx ? 'bg-[#333332]' : 'bg-[#ded7c7] border border-[#333332]'} transition`}
                  style={{ outline: 'none' }}
                  onClick={e => { e.preventDefault(); goTo(idx); }}
                  aria-label={`Show image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-medium text-[#333332] mb-2 sm:mb-3">{title}</h3>
        <p className="text-[#333332] text-opacity-80 mb-3 sm:mb-4 text-sm leading-snug font-normal">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 text-[#333332] border border-[#333333] bg-transparent hover:bg-[#333333] hover:bg-opacity-10 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-0 py-0 text-[#333332] font-medium text-sm hover:text-[#1a1a1a] transition"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="py-20 bg-[#ded7c7] bg-opacity-50">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl text-left" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
        <strong>Projects</strong>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-8 justify-center">
        <ProjectCard
          title="Landing page"
          description="Modern Saas Landing page for Startup"
          technologies={['tailwind css', 'React', 'vite', 'AWS Amplify']}
          images={[saasLandingPage]}
          link="https://main.d2sn0t6gzldyb3.amplifyapp.com/"
        />
        <ProjectCard
          title="Cowboy"
          description="Ecommerce website"
          technologies={['React Router', 'TailwindCSS', 'Redux', 'Vite', 'React', 'D3.js', 'Recharts', 'Jest', 'Framer Motion', 'React Hook Form', 'Node.js', 'axios', 'lucide-react', 'Netlify']}
          images={[ecommerceWebsite]}
          link="https://cowbike.netlify.app/"
        />
        <ProjectCard
          title="propEase"
          description="Cloud based Property management SaaS solution"
          technologies={['React.js', 'Vite.js', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'Aws Amplify', 'AWS Elastic Beanstalk', 'Infobip', "API's"]}
          images={[propEase1, propEase2, propEase3, propEase4, propEase5, propEase6, propEase7, propEase8, propEase9]}
          link="https://main.d2sn0t6gzldyb3.amplifyapp.com/"
        />
        <ProjectCard
          title="chatbot"
          description="Chatbot powered by groqAI."
          technologies={['Bubble', 'groq']}
          images={[chat]}
          link="https://ai-powered-application.bubbleapps.io/version-test"
        />
      </div>
    </div>
  </section>
);

const services = [
  {
    title: "MVP Development",
    description: "Rapidly build and launch your Minimum Viable Product to validate your idea and attract early users.",
    icon: Code,
  },
  {
    title: "Shopify Development",
    description: "Professional Shopify store setup, customization, and integration for your e-commerce business.",
    icon: ShoppingCart,
  },
  {
    title: "AI App Development",
    description: "Integrate AI features into your apps, including chatbots, recommendation engines, and more.",
    icon: Bot,
  },
  {
    title: "Automation Development",
    description: "Automate your workflows, processes, and integrations to save time and reduce errors.",
    icon: Zap,
  },
];

const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="border border-[#5c5e5d] bg-[#ded7c7] overflow-hidden w-64 mx-auto">
    <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#333332] bg-[#333332] bg-opacity-5 mt-6 mb-2 mx-auto">
      <Icon className="h-8 w-8 text-[#333332] stroke-[1.5]" />
    </div>
    <div className="p-6 pt-2 flex flex-col items-center">
      <h3 className="text-xl font-medium text-[#333332] mb-2 text-center">{title}</h3>
      <p className="text-[#333332] mb-4 text-center">{description}</p>
    </div>
  </div>
);

const Services = () => (
  <section id="services" className="py-20 bg-[#ded7c7] bg-opacity-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl text-left" style={{ fontFamily: 'Manrope, Manrope Placeholder, sans-serif' }}>
        <strong>Services I Offer</strong>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-[#ded7c7] bg-opacity-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl text-left" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
        <strong>Get In Touch</strong>
      </h2>
      <div className="flex flex-col sm:flex-row justify-start items-start space-x-20"> 
        <div className="flex flex-col text-left"> 
          <p className="text-lg text-[#333332]">Phone: +201151359701</p>
          <p className="text-lg text-[#333332]">Whatsapp: +201282617564</p>
          <p className="text-lg text-[#333332]">Email: <a href="mailto:ahmadmesbahqa@gmail.com" className="text-[#333332] hover:underline">ahmadmesbahqa@gmail.com</a></p>
        </div>
        <div className="flex flex-col items-center space-y-6"> 
          <div className="flex space-x-4"> 
            <a href="mailto:ahmadmesbahqa@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#333332] hover:text-[#333332]">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-mohamed-8ba9a131a/" target="_blank" rel="noopener noreferrer" className="text-[#333332] hover:text-[#333332]">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/AhmadQA-art" target="_blank" rel="noopener noreferrer" className="text-[#333332] hover:text-[#333332]">
              <Github className="h-6 w-6" />
            </a>
          </div>
          <a href="https://cal.com/ahmad-mesbahqa-sstmcl/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-[#333332] text-[#ded7c7] rounded-full text-sm font-semibold shadow hover:bg-[#222] transition">
            Let's Meet
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <div className="relative">
    <div className="min-h-screen bg-[#ded7c7] text-white flex">
      <SideNavigation />
      <div className="flex-1 ml-56">
        <Hero />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  </div>
);

export default Portfolio;