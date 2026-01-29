import React, { useState } from 'react';
import { Mail, Linkedin, Github, Code, ShoppingCart, Menu, X, Smartphone, Globe, CheckCircle, Award } from 'lucide-react';
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
import agridustria1 from '../assets/agridustria_data/1.png';
import agridustria2 from '../assets/agridustria_data/2.png';
import agridustria3 from '../assets/agridustria_data/3.png';
import agridustria4 from '../assets/agridustria_data/4.png';
import agridustria5 from '../assets/agridustria_data/5.png';
import agridustria6 from '../assets/agridustria_data/6.png';
import agridustria7 from '../assets/agridustria_data/7.png';
import agridustria8 from '../assets/agridustria_data/8.png';
import agridustria9 from '../assets/agridustria_data/9.png';
import agridustria10 from '../assets/agridustria_data/10.png';
import agridustria11 from '../assets/agridustria_data/11.png';
import mainLandingPage from '../assets/agridustria_data/main_landing_page.png';
import SideNavigation from './SideNavigation';
import ImageViewer from './ImageViewer';

const Hero = () => (
  <div id="hero" className="relative overflow-hidden" style={{ backgroundColor: '#ded7c7' }}>
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 min-h-screen flex flex-col md:flex-row items-center">
        <main className="flex flex-col md:flex-row items-center justify-between min-h-[400px] h-auto md:h-[80vh] px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full md:w-1/2 lg:text-left mr-0 md:mr-8 ml-0 mt-8 md:mt-0">
            <h2 className="mb-3 text-3xl font-medium text-[#333332] sm:text-4xl md:text-4xl text-center md:text-left" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
              <strong>Hi, I'm Ahmad</strong>
            </h2>
            <h3 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-2xl text-center md:text-left" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
              Full-Stack Developer & Solutions Architect
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#333332] tracking-tight font-normal mt-1 max-w-xl mx-auto md:mx-0 text-center md:text-left" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
              I engineer scalable web applications and intelligent automation systems. I combine robust coding with rapid development strategies to build modern software that solves complex business problems and accelerates growth.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
              <a
                href="https://cal.com/alex-light-lkyjlq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-[#333332] text-[#ded7c7] rounded-full text-sm font-semibold shadow hover:bg-[#222] transition"
              >
                Let's Build Together
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

const Skills = () => (
  <section id="skills" className="py-20 bg-[#ded7c7] bg-opacity-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl text-left" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
        <strong>Skills & Technologies</strong>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6 mt-8">
        <div>
          <h3 className="text-xl font-medium text-[#333332] mb-3">Frontend</h3>
          <div className="space-y-2">
            <div className="text-[#333332] text-lg font-normal">React.js</div>
            <div className="text-[#333332] text-lg font-normal">TypeScript</div>
            <div className="text-[#333332] text-lg font-normal">TailwindCSS</div>
            <div className="text-[#333332] text-lg font-normal">Framer Motion</div>
            <div className="text-[#333332] text-lg font-normal">HTML/CSS</div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium text-[#333332] mb-3">Backend & Cloud</h3>
          <div className="space-y-2">
            <div className="text-[#333332] text-lg font-normal">Node.js</div>
            <div className="text-[#333332] text-lg font-normal">Express.js</div>
            <div className="text-[#333332] text-lg font-normal">Python</div>
            <div className="text-[#333332] text-lg font-normal">PostgreSQL</div>
            <div className="text-[#333332] text-lg font-normal">Supabase</div>
            <div className="text-[#333332] text-lg font-normal">AWS</div>
            <div className="text-[#333332] text-lg font-normal">Azure</div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium text-[#333332] mb-3">No Code Low Code Tools</h3>
          <div className="space-y-2">
            <div className="text-[#333332] text-lg font-normal">FlutterFlow</div>
            <div className="text-[#333332] text-lg font-normal">Bubble.io</div>
            <div className="text-[#333332] text-lg font-normal">Webflow</div>
            <div className="text-[#333332] text-lg font-normal">Framer</div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium text-[#333332] mb-3">Tools & DevOps</h3>
          <div className="space-y-2">
            <div className="text-[#333332] text-lg font-normal">Git/GitHub</div>
            <div className="text-[#333332] text-lg font-normal">Docker</div>
            <div className="text-[#333332] text-lg font-normal">CI/CD</div>
            <div className="text-[#333332] text-lg font-normal">Figma</div>
            <div className="text-[#333332] text-lg font-normal">Asana</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, platform, description, keyHighlights, technologies, images, onViewProject }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasImages = images && images.length > 0;

  return (
    <div className={`border border-[#5c5e5d] bg-[#ded7c7] overflow-hidden group relative transition-all duration-300 hover:shadow-lg rounded-xl w-full max-w-md mx-auto ${isExpanded ? 'h-auto' : 'h-96'}`}>
      {hasImages && (
        <div className="relative w-full h-40 sm:h-48 flex items-center justify-center">
          <img src={images[0]} alt={title} className="w-full h-40 sm:h-48 object-cover transition-all duration-300 rounded-t-xl" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <button
              onClick={() => onViewProject(images)}
              className="px-4 py-2 bg-white text-black rounded-full"
            >
              View Project
            </button>
          </div>
        </div>
      )}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-medium text-[#333332] mb-2 sm:mb-3">{title}</h3>
        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-full' : 'max-h-24 overflow-hidden'}`}>
          {platform && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-2 justify-start">
                {platform.map((p, i) => (
                  <span key={i} className="px-2 py-1 text-xs text-white bg-[#333333] rounded-full">{p}</span>
                ))}
              </div>
            </div>
          )}
          {description && (
            <p className="text-[#333332] text-opacity-80 text-sm leading-snug font-normal mb-3">
              {description}
            </p>
          )}
          {keyHighlights && keyHighlights.length > 0 && (
            <ul className="list-disc list-inside text-[#333332] text-opacity-80 text-sm leading-snug mb-3">
              {keyHighlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          )}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 text-[#333332] border border-[#333333] bg-transparent hover:bg-[#333333] hover:bg-opacity-10 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-end mt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-[#333332] hover:underline focus:outline-none"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleViewProject = (images) => {
    setSelectedImages(images);
    setViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
    setSelectedImages([]);
  };

  return (
    <section id="projects" className="py-20 bg-[#ded7c7] bg-opacity-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl text-left" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
          <strong>Projects</strong>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-8 justify-center">
          <ProjectCard
            title="AgriDustria"
            platform={['Web App', 'Mobile App']}
            description="Connects agricultural operators with experts for real-time diagnosis via secure chat and file sharing, featuring full Arabic/RTL localization for the MENA market."
            keyHighlights={[
              'Engineered full RTL & Arabic language support.',
              'Enabled real-time remote diagnosis system.',
              'Built admin portal for strict expert vetting.',
            ]}
            technologies={['React', 'Node.js', 'PostgreSQL', 'AWS', 'Socket.io']}
            images={[mainLandingPage, agridustria1, agridustria2, agridustria3, agridustria4, agridustria5, agridustria6, agridustria7, agridustria8, agridustria9, agridustria10, agridustria11]}
            onViewProject={handleViewProject}
          />
          <ProjectCard
            title="PropEase"
            platform={['SaaS Web Application']}
            description="Streamlines property operations by unifying leases, maintenance, and finance into one dashboard, replacing fragmented tools to reduce administrative overhead."
            keyHighlights={[
              'Unified asset, user, and lease management.',
              'Automated WhatsApp and SMS notifications.',
              'Integrated native accounting and expense tracking.',
            ]}
            technologies={['React', 'TailwindCSS', 'Node.js', 'Supabase', 'AWS Amplify', 'Infobip']}
            images={[saasLandingPage, propEase1, propEase2, propEase3, propEase4, propEase5, propEase6, propEase7, propEase8, propEase9]}
            onViewProject={handleViewProject}
          />
          <ProjectCard
            title="Cowboy"
            platform={['E-Commerce Website']}
            description="A high-fidelity e-commerce interface optimized for speed and conversion, featuring interactive product visualization and a seamless checkout flow."
            keyHighlights={[
              'Optimized user flow for higher conversion rates.',
              'Developed dynamic, SEO-driven blog system.',
              'Engineered high-performance, responsive UI.',
            ]}
            technologies={['React', 'Redux', 'TailwindCSS', 'Framer Motion', 'Node.js', 'Netlify']}
            images={[ecommerceWebsite]}
            onViewProject={handleViewProject}
          />
          {/* <ProjectCard
            title="chatbot"
            description="Chatbot powered by groqAI."
            technologies={['Bubble', 'groq']}
            images={[chat]}
            onViewProject={handleViewProject}
          /> */}
        </div>
      </div>
      {viewerOpen && <ImageViewer images={selectedImages} onClose={handleCloseViewer} />}
    </section>
  );
};

const services = [
  {
    title: "MVP Development",
    description: "Rapid MVP Launch – Turn your concept into a market-ready product in weeks, not months, to validate ideas and attract early investors.",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    description: "Cross-Platform Mobile Apps – Build native-quality iOS and Android applications with a single codebase, delivering seamless user experiences across all devices.",
    icon: Smartphone,
  },
  {
    title: "Ecommerce Website Building",
    description: "High-Converting E-Commerce – Launch feature-rich online stores with secure payment processing, inventory management, and optimized checkout flows that drive sales.",
    icon: ShoppingCart,
  },
  {
    title: "Web Applications Development",
    description: "Custom Web Applications – Develop scalable, cloud-based web apps tailored to your business needs, from SaaS platforms to internal tools that streamline operations.",
    icon: Globe,
  },
  {
    title: "Quality Assurance As A Service (QAAS)",
    description: "Professional QA Testing – Get comprehensive software testing and quality assurance for your projects without hiring full-time QA engineers. Pay per project, ensure quality delivery.",
    icon: CheckCircle,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="py-20 bg-[#ded7c7] bg-opacity-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="mb-3 text-xl font-medium text-[#333332] sm:text-2xl md:text-3xl text-left" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif' }}>
        <strong>Certifications</strong>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="border border-[#5c5e5d] bg-[#ded7c7] p-6 rounded-lg">
          <div className="flex items-start space-x-4">
            <Award className="h-8 w-8 text-[#333332] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-[#333332] mb-2">Udacity Nanodegree</h3>
              <p className="text-[#333332] text-sm">Professional Web Developer</p>
            </div>
          </div>
        </div>
        <div className="border border-[#5c5e5d] bg-[#ded7c7] p-6 rounded-lg">
          <div className="flex items-start space-x-4">
            <Award className="h-8 w-8 text-[#333332] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-[#333332] mb-2">ISTQB Certified Tester</h3>
              <p className="text-[#333332] text-sm">Foundation Level</p>
            </div>
          </div>
        </div>
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
      <div className="flex flex-col sm:flex-row justify-start items-start space-y-6 sm:space-y-0 sm:space-x-20">
        <div className="flex flex-col text-left">
          <p className="text-lg text-[#333332] mb-4">Ready to start your next project?</p>
          <p className="text-lg text-[#333332]">Email: <a href="mailto:ahmadmesbahqa@gmail.com" className="text-[#333332] hover:underline">ahmadmesbahqa@gmail.com</a></p>
          <p className="text-lg text-[#333332]">Whatsapp: +20 128 261 7564</p>
          <p className="text-lg text-[#333332]">Phone: +20 115 135 9701</p>
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
          <a href="https://cal.com/alex-light-lkyjlq/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-[#333332] text-[#ded7c7] rounded-full text-sm font-semibold shadow hover:bg-[#222] transition">
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  </section>
);
const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 right-4 z-50 sm:hidden bg-[#333332] text-[#ded7c7] p-3 rounded-full shadow-lg hover:bg-[#222] transition"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#ded7c7] bg-opacity-95 z-40 sm:hidden flex flex-col items-center justify-center space-y-8">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#333332] hover:text-[#333332] hover:opacity-70 transition font-semibold text-2xl tracking-wide"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#333332] hover:text-[#333332] hover:opacity-70 transition font-semibold text-2xl tracking-wide"
          >
            Skills
          </a>
          <a
            href="#certifications"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#333332] hover:text-[#333332] hover:opacity-70 transition font-semibold text-2xl tracking-wide"
          >
            Certifications
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#333332] hover:text-[#333332] hover:opacity-70 transition font-semibold text-2xl tracking-wide"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#333332] hover:text-[#333332] hover:opacity-70 transition font-semibold text-2xl tracking-wide"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#333332] hover:text-[#333332] hover:opacity-70 transition font-semibold text-2xl tracking-wide"
          >
            Contact
          </a>
          <div className="flex space-x-6 mt-8">
            <a href="mailto:ahmadmesbahqa@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#333332] hover:text-[#333332] hover:opacity-70">
              <Mail className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-mohamed-8ba9a131a/" target="_blank" rel="noopener noreferrer" className="text-[#333332] hover:text-[#333332] hover:opacity-70">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/AhmadQA-art" target="_blank" rel="noopener noreferrer" className="text-[#333332] hover:text-[#333332] hover:opacity-70">
              <Github className="h-8 w-8" />
            </a>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-[#ded7c7] text-white flex">
        <SideNavigation />
        <div className="flex-1 sm:ml-56 px-4 sm:px-6">
          <Hero />
          <Skills />
          <Certifications />
          <Services />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;