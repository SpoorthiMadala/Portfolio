import React, { useState, createContext, useContext } from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Sun, Moon } from 'lucide-react';
import me from './assets/meme.jpg'
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a sample resume content
    const resumeContent = `
Madala Leela Venkata Siva Spoorthi - Full Stack Web Developer & Machine Learning Engineer
Email: spoorthimadala@gmail.com
Phone: +91 8143222032
Linkedin: linkedin.com/in/madalaspoorthi
Github: https://github.com/SpoorthiMadala

SKILLS:
• HTML, CSS, Java Script, MERN, Bootstrap
• Python, Java, C/C++
• Data Structures and Algorithms, OOPS, CS Concepts
• MY SQL, MongoDB, Git, Git Hub, Postman
• Artificila Intelligence, Machine Learning, Deep learning, Natural Language Processing, Data Science 

EDUCATION:
• Bachelor's in Computer Science
• Vellore Institute of Technology (2023 - 2027)
• CGPA : 9.32
--------------------------------------------------
• Intermediate
• Narayana Institutions
• 96.8%

PROJECTS:
• title: MERN Chat Website — Real-time Chat Application
  description: Built a real-time chat system using MERN stack + Socket.IO, supporting instant messaging and live online presence.
  tech: MERN, Socket.IO
  github: https://github.com/SpoorthiMadala/MERN-Realtime-chat-website.git
• title: AI Image Generator
  description: Built a full-stack AI image generator using MongoDB, Express, React, and Node.js, integrated with an AI image-generation API to convert text prompts into images.
  tech: MERN, AI (Text-to-Image)
  github: https://github.com/SpoorthiMadala/MERN-Text-to-Image.git
• title: "AI Story Generator using Transformers
  description: An AI-powered web application that generates creative short stories from user prompts using Transformer models.
  tech: Python, Transformers, Hugging Face, Streamlit
  github: https://github.com/SpoorthiMadala/Story-Generator-Transformers



    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Spoorthi_Madala_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full shadow-lg z-50 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Spoorthi Madala</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : isDark 
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-md transition-colors ${
                    isDark 
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-300 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : isDark
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center pt-16 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src={me}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
            />
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Hi, I'm <span className="text-blue-600">Spoorthi Madala</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Full Stack Developer & Machine Learning Engineer
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={me}
                alt="About Me"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I am a passionate and versatile developer skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js) and
deeply knowledgeable in Machine Learning, Deep Learning, Generative AI, and NLP. With a
strong foundation in both software engineering and AI, I excel at building full-stack web applications and integrating
intelligent features that deliver real-world impact. My goal is to contribute to cutting-edge projects at the
intersection of AI and web technologies, leveraging my skills to develop scalable, user-centric, and innovative solutions.
              </p>
              <p className={`mb-8 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                
              </p>
              <button
                onClick={downloadResume}
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg shadow-lg transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Programming Lanuages</h3>
              <div className="space-y-3">
                {['Python', 'Java','C','C++'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-6 rounded-lg shadow-lg transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>CS Concepts</h3>
              <div className="space-y-3">
                {['DSA', 'OOPS','CS Core Concepts'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-6 rounded-lg shadow-lg transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Web Development</h3>
              <div className="space-y-3">
                {['HTML5','CSS3','JavaScript', 'MERN','Bootstarp'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-6 rounded-lg shadow-lg transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Artificial Intelligence</h3>
              <div className="space-y-3">
                {['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'NLP', 'Data Science'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-6 rounded-lg shadow-lg transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Databases, Tools & Others</h3>
              <div className="space-y-3">
                {['MySQL','MongoDB','Git', 'Git Hub','Postman'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 transition-colors duration-300 ${
  isDark ? 'bg-gray-800' : 'bg-white'
}`}>
  <div className="max-w-6xl mx-auto px-4">
    <h2 className={`text-3xl font-bold text-center mb-12 transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-gray-800'
    }`}>Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
  title: "MERN Chat Website — Real-time Chat Application",
  description: "Built a real-time chat system using MERN stack + Socket.IO, supporting instant messaging and live online presence.",
  tech: ["MERN", "Socket.IO"],
  github: "https://github.com/SpoorthiMadala/Sentiment-Analysis-LSTM",
 
}
,
        {
  title: "AI Image Generator",
  description: "Built a full-stack AI image generator using MongoDB, Express, React, and Node.js, integrated with an AI image-generation API to convert text prompts into images.",
  tech: ["MERN", "AI (Text-to-Image)"],
  github: "https://github.com/SpoorthiMadala/MERN-Realtime-chat-website.git",

}
,
        {
  title: "AI Story Generator using Transformers",
  description: "An AI-powered web application that generates creative short stories from user prompts using Transformer models.",
  tech: ["Python", "Transformers", "Hugging Face", "Streamlit"],
  github: "https://github.com/SpoorthiMadala/Story-Generator-Transformers",
 
}

      ].map((project, index) => (
        <div key={index} className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
          isDark ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          
          <div className="p-6">
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>{project.title}</h3>
            <p className={`mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                  isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                }`}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Github className="mr-1" size={16} />
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    
      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-3" size={20} />
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>spoorthimadala@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-3" size={20} />
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>+91 8132222032</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-3" size={20} />
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>Guntur, Andhra Pradesh, India</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
  
              <a href="https://github.com/SpoorthiMadala" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg transition-colors ${
      isDark 
        ? 'bg-gray-700 text-white hover:bg-gray-600' 
        : 'bg-gray-800 text-white hover:bg-gray-700'
    }`}
  >
    <Github size={20} />
  </a>

 
  <a
    href="https://linkedin.com/in/madalaspoorthi"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
  >
    <Linkedin size={20} />
  </a>
            </div>

            </div>
            <div>
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500'
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>Email</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500'
                    }`}
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>Message</label>
                  <textarea
                    rows="4"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500'
                    }`}
                    placeholder="Your Message..."
                  ></textarea>
                </div>
                <button
                  onClick={() => alert('Message sent!')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-white'
      }`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2025 Spoorthi Madala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export {Portfolio,ThemeProvider} ;



