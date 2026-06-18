import { useState, useEffect, useRef } from 'react';

export default function Portfolio({ onLaunchCardwise }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [animateSkills, setAnimateSkills] = useState(false);
  
  const skillsRef = useRef(null);
  
  // Reveal elements on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-el');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });

    // Observer for skills animation
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimateSkills(true);
          skillsObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    // Active nav link scroll listener
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 220)) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      revealElements.forEach(el => revealObserver.disconnect());
      if (skillsRef.current) skillsObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div style={{ background: '#0a0c10', color: '#f3f4f6', minHeight: '100vh', position: 'relative' }}>
      
      {/* Background Glowing Orbs */}
      <div className="bg-glow-container">
        <div className="bg-glow-orb-1"></div>
        <div className="bg-glow-orb-2"></div>
      </div>

      {/* Header Navigation */}
      <header>
        <div className="container nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            <i className="fa-solid fa-microchip"></i> SIMRAN<span>.AI</span>
          </a>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="nav-menu">
            <li>
              <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>Logic Bridge</a>
            </li>
            <li>
              <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={closeMenu}>Skills</a>
            </li>
            <li>
              <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={closeMenu}>Experience</a>
            </li>
            <li>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</a>
            </li>
          </ul>
          <a href="mailto:simr1707@gmail.com" className="cta-btn">Get In Touch</a>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-tagline">Workflow Optimization & AI Agents</span>
            <h1 class="hero-title">I Automate Repetitive Workflows Using <span className="gradient-text">AI & Low-Code</span></h1>
            <p className="hero-subtitle">
              Hi, I'm <strong>Simran Singh</strong>. I build custom, 24/7 autonomous agents and API integrations that eliminate manual labor, streamline operations, and boost engagement.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">View My Work <i className="fa-solid fa-arrow-right"></i></a>
              <a href="#contact" className="btn-secondary">Let's Connect <i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-box">
              <div className="avatar-container">
                <i className="fa-solid fa-robot avatar-icon"></i>
                <h2 className="avatar-name">Simran Singh</h2>
                <span className="avatar-title">AI Automation Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Logic Bridge Section */}
      <section className="logic-bridge" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Methodology</span>
            <h2 className="section-title">The <span className="gradient-text">Logic Bridge</span></h2>
          </div>
          <div className="bridge-grid">
            <div className="bridge-intro">
              <p>
                Effective automation is not just about writing code or connecting nodes. It is about bridging the gap between rigorous, logical architecture and practical business processes. 
              </p>
              <p>
                My academic foundation in Physics & Math trains me to construct complex, error-proof logic paths, while my Canadian Business Management credentials enable me to design systems that reduce overhead, align with marketing goals, and deliver measurable ROI.
              </p>
            </div>
            <div className="bridge-cards">
              {/* Physics Card */}
              <div className="bridge-card reveal-el reveal">
                <div class="bridge-icon-wrapper">
                  <i className="fa-solid fa-atom"></i>
                </div>
                <div>
                  <h3>Analytical Logic (B.Sc. Foundation)</h3>
                  <p>Structuring clean conditional states, handling complex JSON nesting, designing robust API loops, and debugging variables with mathematical rigor.</p>
                </div>
              </div>
              {/* Business Card */}
              <div className="bridge-card reveal-el reveal">
                <div className="bridge-icon-wrapper">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div>
                  <h3>Operational Strategy (Business Certificate)</h3>
                  <p>Mapping administrative workflows, understanding client journey funnels, setting up database parameters, and auditing processes to optimize operational speed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Featured Work</span>
            <h2 className="section-title">Automations & <span className="gradient-text">Apps</span></h2>
          </div>
          <div className="projects-grid">
            {/* Project 1: n8n Instagram Comment Responder */}
            <div className="project-card reveal-el reveal">
              <div className="project-header">
                <i className="fa-brands fa-instagram project-icon"></i>
                <span className="project-badge">24/7 Live</span>
              </div>
              <h3 className="project-title">Self-Hosted Instagram Auto-Responder</h3>
              <p className="project-desc">
                A real-time engagement bot powered by n8n that monitors Instagram post comments, uses AI to analyze sentiment, and automatically responds with personalized replies. Configured to run 24/7 on a self-hosted cloud server completely for free.
              </p>
              <div className="project-flow">
                <span className="flow-title">Automation Flow:</span>
                <div className="flow-steps">
                  <span className="flow-step">Insta Comment</span>
                  <span className="flow-arrow">→</span>
                  <span class="flow-step">n8n Webhook</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-step">Claude Sentiment</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-step">Auto Reply (Meta API)</span>
                </div>
              </div>
              <div className="project-tags">
                <span className="project-tag">n8n</span>
                <span className="project-tag">Webhooks</span>
                <span className="project-tag">Meta Graph API</span>
                <span className="project-tag">Self-Hosting</span>
                <span className="project-tag">JSON</span>
              </div>
              <ul className="project-features">
                <li>Zero ongoing hosting costs by utilizing container deployment.</li>
                <li>Meta API webhook integration processes comments under 2 seconds.</li>
                <li>Maintains contextual thread safety for consistent user interaction.</li>
              </ul>
            </div>

            {/* Project 2: Claude Content Generation Pipeline */}
            <div className="project-card reveal-el reveal">
              <div className="project-header">
                <i className="fa-solid fa-wand-magic-sparkles project-icon"></i>
                <span className="project-badge">Production Ready</span>
              </div>
              <h3 className="project-title">Claude-Powered Content Pipeline</h3>
              <p className="project-desc">
                An automated content creation pipeline that integrates the Anthropic Claude API to generate search-optimized long-form articles, short-form social copy, and formatting templates from raw topic outlines. Saves hours of copywriting labor.
              </p>
              <div className="project-flow">
                <span className="flow-title">Automation Flow:</span>
                <div className="flow-steps">
                  <span className="flow-step">Topic Input</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-step">Make.com / API Router</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-step">Claude API Outline</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-step">Formatted Markdown</span>
                </div>
              </div>
              <div className="project-tags">
                <span className="project-tag">Make.com</span>
                <span className="project-tag">Claude API</span>
                <span className="project-tag">Prompt Engineering</span>
                <span className="project-tag">API Integration</span>
                <span className="project-tag">Marketing Automation</span>
              </div>
              <ul className="project-features">
                <li>Outputs clean, copy-pasteable Markdown format.</li>
                <li>Includes custom system instructions to match specific brand voices.</li>
                <li>Features multi-channel formatting (LinkedIn, X, blog post).</li>
              </ul>
            </div>

            {/* Project 3 (Integrated): CardWise Canada React Application */}
            <div className="project-card reveal-el reveal" style={{ gridColumn: '1 / -1' }}>
              <div className="project-header">
                <i className="fa-solid fa-credit-card project-icon" style={{ color: '#00f2fe' }}></i>
                <span className="project-badge" style={{ color: '#45f3ff', borderColor: 'rgba(0,242,254,0.3)', background: 'rgba(0,242,254,0.05)' }}>Interactive React Web App</span>
              </div>
              <h3 className="project-title">CardWise Canada Comparison Portal</h3>
              <p className="project-desc">
                A highly customizable web application designed to help Canadian consumers compare and select credit cards based on their spending profiles, welcome bonuses, and annual fees. Features an interactive recommendation engine that matches cards dynamically using personalized inputs.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.5rem' }}>
                <button 
                  onClick={onLaunchCardwise} 
                  className="btn-primary" 
                  style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem', cursor: 'pointer' }}
                >
                  🚀 Launch Interactive Application
                </button>
                <div className="project-tags" style={{ margin: 0 }}>
                  <span className="project-tag">React.js</span>
                  <span className="project-tag">Vite</span>
                  <span className="project-tag">State Management</span>
                  <span className="project-tag">Algorithmic Matching</span>
                  <span className="project-tag">UI/UX Design</span>
                </div>
              </div>
              <ul className="project-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem' }}>
                <li>Dynamic algorithmic scoring system matching user profiles to 10+ major card products.</li>
                <li>Side-by-side card comparison layout with detailed fee, bonus, and interest rate audits.</li>
                <li>Fully responsive, dark-mode-first styling leveraging modern CSS flex/grid architecture.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills" ref={skillsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Competencies</span>
            <h2 className="section-title">My Tech <span className="gradient-text">Stack</span></h2>
          </div>
          <div className="skills-grid">
            {/* Automation */}
            <div className="skill-category reveal-el reveal">
              <h3><i className="fa-solid fa-gears"></i> Automation</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-info"><span className="skill-name">n8n</span><span className="skill-percent">95%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '95%' : '0%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info"><span className="skill-name">Make.com</span><span className="skill-percent">90%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '90%' : '0%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info"><span className="skill-name">Webhooks / HTTP APIs</span><span class="skill-percent">88%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '88%' : '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artificial Intelligence */}
            <div className="skill-category reveal-el reveal">
              <h3><i className="fa-solid fa-brain"></i> AI Integrations</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-info"><span className="skill-name">Prompt Engineering</span><span className="skill-percent">92%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '92%' : '0%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info"><span className="skill-name">Claude & OpenAI APIs</span><span className="skill-percent">90%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '90%' : '0%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info"><span class="skill-name">AI Agents & Assistants</span><span className="skill-percent">85%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '85%' : '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dev & Tools */}
            <div className="skill-category reveal-el reveal">
              <h3><i className="fa-solid fa-code"></i> Dev & Formats</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-info"><span className="skill-name">JSON Data Handling</span><span className="skill-percent">90%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '90%' : '0%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info"><span className="skill-name">JavaScript (React / script)</span><span className="skill-percent">75%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '75%' : '0%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info"><span className="skill-name">HTML5 & CSS3</span><span className="skill-percent">80%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '80%' : '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business & Ops */}
            <div className="skill-category reveal-el reveal">
              <h3><i className="fa-solid fa-briefcase"></i> Operations</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-info"><span className="skill-name">Business Process Mapping</span><span className="skill-percent">90%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '90%' : '0%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info"><span className="skill-name">Logistics & Scheduling</span><span className="skill-percent">85%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '85%' : '0%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info"><span className="skill-name">Requirements Gathering</span><span className="skill-percent">88%</span></div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: animateSkills ? '88%' : '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="timeline-section" id="experience">
        <div className="container timeline-grid">
          {/* Left side sticky card (Education) */}
          <div className="timeline-intro">
            <div className="education-block">
              <h2 className="education-title-sec"><i className="fa-solid fa-graduation-cap"></i> Education</h2>
              <div className="education-item">
                <div className="edu-meta">
                  <span className="edu-degree">Business Management</span>
                  <span className="edu-date">Dec 2021</span>
                </div>
                <span className="edu-school">Fanshawe College | London, ON, Canada</span>
                <p className="edu-focus">2-year Postgraduate Certificate focusing on operations, resource planning, accounting, and business logic.</p>
              </div>
              <div className="education-item">
                <div className="edu-meta">
                  <span className="edu-degree">B.Sc. (Non-Medical)</span>
                  <span className="edu-date">2019</span>
                </div>
                <span className="edu-school">Punjabi University Patiala | India</span>
                <p className="edu-focus">Physics, Chemistry, and Mathematics. Rigorous training in logic, analytical problem solving, and complex equations.</p>
              </div>
            </div>
          </div>

          {/* Right side timeline (Work experience) */}
          <div>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
              <span className="section-tag">Career History</span>
              <h2 className="section-title">Professional <span className="gradient-text">Timeline</span></h2>
            </div>
            <div className="timeline">
              {/* Job 1 */}
              <div className="timeline-item reveal-el reveal">
                <div className="timeline-dot"></div>
                <span className="timeline-date">Jan 2026 - Present</span>
                <h3 className="timeline-title">Freelance AI Automation Developer</h3>
                <span className="timeline-org">Independent Contractor | Bonnyville, AB</span>
                <ul className="timeline-desc">
                  <li>Consult with clients to analyze operational workflows, identify manual bottlenecks, and architect custom AI automation systems.</li>
                  <li>Develop real-time webhook routing, API parameter mapping, and cloud deployment pipelines using n8n and Make.com.</li>
                  <li>Integrate Large Language Models (LLMs) via OpenAI and Anthropic Claude APIs to handle automated customer communication and document summarization.</li>
                </ul>
              </div>
              {/* Job 2 */}
              <div className="timeline-item reveal-el reveal">
                <div className="timeline-dot"></div>
                <span className="timeline-date">Dec 2023 - Present</span>
                <h3 className="timeline-title">Operations & Logistics Specialist (Class 1 Driver)</h3>
                <span className="timeline-org">Grimshaw Trucking LP | Bonnyville, AB</span>
                <ul className="timeline-desc">
                  <li>Safely manage commercial freight shipping operations, coordinating routes and schedules under time-critical deadlines.</li>
                  <li>Ensure complete compliance with complex regional transit safety rules, weight standards, and documentation requirements.</li>
                  <li>Perform real-time route optimization, calculating fuel/time trade-offs and resolving operational bottlenecks on the road.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-card reveal-el reveal">
            <h2 className="contact-title">Start Automating <span className="gradient-text">Today</span></h2>
            <p className="contact-text">
              Have a repetitive business process or want to build a custom AI agent? Let's connect to design a workflow that works for you.
            </p>
            <div className="contact-info-list">
              <a href="mailto:simr1707@gmail.com" className="contact-info-item">
                <i className="fa-solid fa-envelope"></i> simr1707@gmail.com
              </a>
              <span className="contact-info-item">
                <i className="fa-solid fa-location-dot"></i> Bonnyville, AB, Canada
              </span>
            </div>
            <a href="mailto:simr1707@gmail.com?subject=AI%20Automation%20Inquiry" className="btn-primary">
              <i className="fa-solid fa-paper-plane"></i> Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <p className="footer-text">
            &copy; 2026 Simran Singh. Built with logical structure.
          </p>
          <div className="footer-socials">
            <a href="mailto:simr1707@gmail.com" title="Email"><i class="fa-solid fa-envelope"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
