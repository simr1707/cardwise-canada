import { useState, useEffect, useRef } from 'react';
import headshot from './headshot.jpg';

export default function Portfolio({ onLaunchCardwise }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [animateSkills, setAnimateSkills] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const skillsRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Reveal elements on scroll (Apple-style scroll reveals)
    const revealElements = document.querySelectorAll('.anim-fade, .anim-scale');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });

    // Observer for skills bar animations
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimateSkills(true);
          skillsObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    // Scroll listener to update active navigation tab
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 180)) {
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
    <div style={{ background: 'var(--dark-bg)', color: 'var(--dark-text)' }}>
      
      {/* Navigation Header */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            Simran Singh
          </a>
          <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
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
            <li>
              <a href="mailto:simr1707@gmail.com" className="nav-cta">Get In Touch</a>
            </li>
          </ul>
          <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <img 
          src={headshot} 
          alt="Simran Singh" 
          className={`hero-photo ${isMounted ? 'visible' : ''}`} 
        />
        <span className={`hero-eyebrow ${isMounted ? 'visible' : ''}`}>
          Workflow Optimization & AI Agents
        </span>
        <h1 className={`hero-title ${isMounted ? 'visible' : ''}`}>
          I Automate Repetitive Workflows Using AI & Low-Code
        </h1>
        <p className={`hero-sub ${isMounted ? 'visible' : ''}`}>
          Hi, I'm <strong>Simran Singh</strong>. I build custom, 24/7 autonomous agents and API integrations that eliminate manual labor, streamline operations, and boost engagement.
        </p>
        <div className={`hero-actions ${isMounted ? 'visible' : ''}`}>
          <a href="#projects" className="btn-filled">
            View My Work <i className="fa-solid fa-arrow-right"></i>
          </a>
          <button onClick={onLaunchCardwise} className="btn-ghost">
            Launch Interactive Application <i className="fa-solid fa-credit-card"></i>
          </button>
        </div>
      </section>

      {/* Logic Bridge Section */}
      <section id="about" className="section-light">
        <div className="section-inner">
          <div className="section-center anim-fade">
            <span className="section-eyebrow">Methodology</span>
            <h2 className="section-heading">The Logic Bridge</h2>
            <p className="section-desc light-desc">
              Effective automation is not just about writing code or connecting nodes. It is about bridging the gap between rigorous, logical architecture and practical business processes.
            </p>
          </div>
          
          <div className="method-grid stagger">
            <div className="method-card anim-fade" style={{ '--i': 1 }}>
              <span className="method-icon"><i className="fa-solid fa-atom" style={{ color: 'var(--accent)' }}></i></span>
              <h3>Analytical Logic (B.Sc. Foundation)</h3>
              <p>
                My academic foundation in Physics & Math trains me to construct complex, error-proof logic paths, handle nested JSON data, and troubleshoot code with mathematical rigor.
              </p>
            </div>
            <div className="method-card anim-fade" style={{ '--i': 2 }}>
              <span className="method-icon"><i className="fa-solid fa-chart-line" style={{ color: '#34c759' }}></i></span>
              <h3>Operational Strategy (Business Certificate)</h3>
              <p>
                My Canadian Business Management credentials enable me to map administrative workflows, audit redundant overhead, and design automations that deliver real-world business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-light" style={{ borderTop: '1px solid #e5e5ea' }}>
        <div className="section-wide">
          <div className="section-center anim-fade" style={{ marginBottom: '3rem' }}>
            <span className="section-eyebrow">Featured Work</span>
            <h2 className="section-heading">Automations & Apps</h2>
            <p className="section-desc light-desc">
              A selection of live automation tools and custom web applications developed to replace manual processes.
            </p>
          </div>

          <div className="project-list">
            
            {/* Project 1 */}
            <div className="project-item anim-fade">
              <div className="project-visual">
                <div className="project-flow-visual">
                  <span className="pf-node"><i className="fa-brands fa-instagram"></i> Comment</span>
                  <span className="pf-arrow">→</span>
                  <span className="pf-node"><i className="fa-solid fa-gears"></i> n8n Webhook</span>
                  <span className="pf-arrow">→</span>
                  <span className="pf-node"><i className="fa-solid fa-brain"></i> Claude AI</span>
                  <span className="pf-arrow">→</span>
                  <span className="pf-node"><i className="fa-solid fa-paper-plane"></i> Auto Reply</span>
                </div>
              </div>
              <div className="project-content">
                <span className="project-badge">24/7 Live</span>
                <h3>Self-Hosted Instagram Comment Responder</h3>
                <p>
                  A real-time engagement bot powered by n8n that monitors Instagram post comments, uses AI to analyze sentiment, and automatically responds with personalized replies. Configured to run 24/7 on a self-hosted cloud server completely for free.
                </p>
                <div className="project-tags">
                  <span className="project-tag">n8n</span>
                  <span className="project-tag">Webhooks</span>
                  <span className="project-tag">Meta Graph API</span>
                  <span className="project-tag">Self-Hosting</span>
                  <span className="project-tag">JSON</span>
                </div>
                <ul className="project-features">
                  <li><span className="pf-check">✓</span> Zero ongoing hosting costs by utilizing container deployment.</li>
                  <li><span className="pf-check">✓</span> Meta API webhook integration processes comments under 2 seconds.</li>
                  <li><span className="pf-check">✓</span> Maintains contextual thread safety for consistent user interaction.</li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-item reverse anim-fade">
              <div className="project-visual">
                <div className="project-flow-visual">
                  <span className="pf-node"><i className="fa-solid fa-file-lines"></i> Topic Outline</span>
                  <span className="pf-arrow">→</span>
                  <span className="pf-node"><i className="fa-solid fa-route"></i> Make Router</span>
                  <span className="pf-arrow">→</span>
                  <span className="pf-node"><i className="fa-solid fa-wand-magic-sparkles"></i> Claude API</span>
                  <span className="pf-arrow">→</span>
                  <span className="pf-node"><i className="fa-solid fa-file-code"></i> Markdown</span>
                </div>
              </div>
              <div className="project-content">
                <span className="project-badge">Production Ready</span>
                <h3>Claude-Powered Content Generation Pipeline</h3>
                <p>
                  An automated content creation pipeline that integrates the Anthropic Claude API to generate search-optimized long-form articles, short-form social copy, and formatting templates from raw topic outlines. Saves hours of copywriting labor.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Make.com</span>
                  <span className="project-tag">Claude API</span>
                  <span className="project-tag">Prompt Engineering</span>
                  <span className="project-tag">API Integration</span>
                  <span className="project-tag">Marketing Automation</span>
                </div>
                <ul className="project-features">
                  <li><span className="pf-check">✓</span> Outputs clean, copy-pasteable Markdown format.</li>
                  <li><span className="pf-check">✓</span> Includes custom system instructions to match specific brand voices.</li>
                  <li><span className="pf-check">✓</span> Features multi-channel formatting (LinkedIn, X, blog post).</li>
                </ul>
              </div>
            </div>

            {/* Project 3: Interactive Application CTA */}
            <div className="project-cta-card anim-fade">
              <span className="project-cta-icon"><i className="fa-solid fa-credit-card" style={{ color: 'var(--accent)' }}></i></span>
              <div className="project-cta-text">
                <span className="project-badge" style={{ color: 'var(--accent)', background: 'var(--accent-subtle)' }}>Interactive React Web App</span>
                <h3>CardWise Canada Comparison Portal</h3>
                <p>
                  A highly customizable web application designed to help Canadian consumers compare and select credit cards based on their spending profiles, welcome bonuses, and annual fees. Features an interactive recommendation engine that matches cards dynamically using personalized inputs.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React.js</span>
                  <span className="project-tag">Vite</span>
                  <span className="project-tag">State Management</span>
                  <span className="project-tag">Algorithmic Matching</span>
                  <span className="project-tag">UI/UX Design</span>
                </div>
              </div>
              <button onClick={onLaunchCardwise} className="btn-filled" style={{ whiteSpace: 'nowrap' }}>
                Launch Application <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-dark" ref={skillsRef}>
        <div className="section-inner">
          <div className="section-center anim-fade">
            <span className="section-eyebrow">Core Competencies</span>
            <h2 className="section-heading">My Tech Stack</h2>
            <p className="section-desc dark-desc">
              A collection of tools, platforms, and methodologies I leverage to build robust, scalable, and intelligent automation systems.
            </p>
          </div>

          <div className="skills-grid stagger">
            
            <div className="skill-card anim-fade" style={{ '--i': 1 }}>
              <div className="skill-card-title">Automation</div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">n8n</span>
                  <span className="skill-value">95%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '95%' : '0%' }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">Make.com</span>
                  <span className="skill-value">90%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '90%' : '0%' }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">Webhooks / HTTP APIs</span>
                  <span className="skill-value">88%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '88%' : '0%' }}></div>
                </div>
              </div>
            </div>

            <div className="skill-card anim-fade" style={{ '--i': 2 }}>
              <div className="skill-card-title">AI Integrations</div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">Prompt Engineering</span>
                  <span className="skill-value">92%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '92%' : '0%' }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">Claude & OpenAI APIs</span>
                  <span className="skill-value">90%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '90%' : '0%' }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">AI Agents & Assistants</span>
                  <span className="skill-value">85%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '85%' : '0%' }}></div>
                </div>
              </div>
            </div>

            <div className="skill-card anim-fade" style={{ '--i': 3 }}>
              <div className="skill-card-title">Dev & Formats</div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">JSON Data Handling</span>
                  <span className="skill-value">90%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '90%' : '0%' }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">JavaScript (React.js)</span>
                  <span className="skill-value">75%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '75%' : '0%' }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">HTML5 & CSS3</span>
                  <span className="skill-value">80%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '80%' : '0%' }}></div>
                </div>
              </div>
            </div>

            <div className="skill-card anim-fade" style={{ '--i': 4 }}>
              <div className="skill-card-title">Operations</div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">Business Process Mapping</span>
                  <span className="skill-value">90%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '90%' : '0%' }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">Logistics & Scheduling</span>
                  <span className="skill-value">85%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '85%' : '0%' }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-row-header">
                  <span className="skill-label">Requirements Gathering</span>
                  <span className="skill-value">88%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: animateSkills ? '88%' : '0%' }}></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="section-light">
        <div className="section-wide">
          <div className="timeline-layout">
            
            {/* Sticky Education Sidebar */}
            <div className="edu-card anim-scale">
              <h2 className="edu-card-title"><i className="fa-solid fa-graduation-cap"></i> Education</h2>
              <div className="edu-entry">
                <div className="edu-entry-header">
                  <span className="edu-degree">Business Management</span>
                  <span className="edu-year">Dec 2021</span>
                </div>
                <div className="edu-school">Fanshawe College | London, ON, Canada</div>
                <div className="edu-focus">Postgraduate Certificate. Operational management, resource planning, accounting, and business logistics.</div>
              </div>
              <div className="edu-entry">
                <div className="edu-entry-header">
                  <span className="edu-degree">B.Sc. (Non-Medical)</span>
                  <span className="edu-year">2019</span>
                </div>
                <div className="edu-school">Punjabi University Patiala | India</div>
                <div className="edu-focus">Physics, Chemistry, Mathematics. Rigorous training in logical deduction and mathematical optimization models.</div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <div className="anim-fade" style={{ marginBottom: '2.5rem' }}>
                <span className="section-eyebrow">Career History</span>
                <h2 className="section-heading" style={{ fontSize: '2.2rem' }}>Professional Timeline</h2>
              </div>
              
              <div className="tl">
                
                <div className="tl-item anim-fade">
                  <div className="tl-dot"></div>
                  <span className="tl-date">Jan 2026 - Present</span>
                  <h3 className="tl-title">Freelance AI Automation Developer</h3>
                  <div className="tl-org">Independent Contractor | Bonnyville, AB</div>
                  <ul className="tl-list">
                    <li>Consult with clients to analyze operational workflows, identify manual bottlenecks, and architect custom AI automation systems.</li>
                    <li>Develop real-time webhook routing, API parameter mapping, and cloud deployment pipelines using n8n and Make.com.</li>
                    <li>Integrate Large Language Models (LLMs) via OpenAI and Anthropic Claude APIs to handle automated customer communication and document summarization.</li>
                  </ul>
                </div>

                <div className="tl-item anim-fade">
                  <div className="tl-dot"></div>
                  <span className="tl-date">Dec 2023 - Present</span>
                  <h3 className="tl-title">Operations & Logistics Specialist (Class 1 Driver)</h3>
                  <div className="tl-org">Grimshaw Trucking LP | Bonnyville, AB</div>
                  <ul className="tl-list">
                    <li>Safely manage commercial freight shipping operations, coordinating routes and schedules under time-critical deadlines.</li>
                    <li>Ensure complete compliance with complex regional transit safety rules, weight standards, and documentation requirements.</li>
                    <li>Perform real-time route optimization, calculating fuel/time trade-offs and resolving operational bottlenecks on the road.</li>
                  </ul>
                </div>

                <div className="tl-item anim-fade">
                  <div className="tl-dot"></div>
                  <span className="tl-date">Apr 2022 - Dec 2023</span>
                  <h3 className="tl-title">Security & Safety Operator</h3>
                  <div className="tl-org">Paragon Investigations | Mississauga, ON</div>
                  <ul className="tl-list">
                    <li>Managed real-time safety surveillance systems and controlled perimeter access protocols.</li>
                    <li>Investigated, resolved, and documented thorough incident reports on systems issues.</li>
                    <li>Primary responder to system alerts, coordinating with law enforcement and safety contacts.</li>
                  </ul>
                </div>

                <div className="tl-item anim-fade">
                  <div className="tl-dot"></div>
                  <span className="tl-date">Jan 2022 - Mar 2022</span>
                  <h3 className="tl-title">Customer Technical Support Specialist</h3>
                  <div className="tl-org">Printer Ready Corporation | Mississauga, ON</div>
                  <ul className="tl-list">
                    <li>Diagnosed network connection configurations and fixed software utility errors.</li>
                    <li>Leveraged secure remote access utilities to update driver files and configure client devices.</li>
                    <li>Managed customer support queues, documenting bug resolutions and ensuring satisfaction.</li>
                  </ul>
                </div>

                <div className="tl-item anim-fade">
                  <div className="tl-dot"></div>
                  <span className="tl-date">Feb 2019 - Jan 2020</span>
                  <h3 className="tl-title">Customer Support Representative</h3>
                  <div className="tl-org">Reliance Communication | Punjab, India</div>
                  <ul className="tl-list">
                    <li>Gathered user account requirements and corrected billing system errors.</li>
                    <li>Outlined account terms, service packages, and feature configurations for clients.</li>
                    <li>Maintained top-tier scores for call resolution speed and user satisfaction.</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-dark">
        <div className="section-inner section-center">
          <div className="contact-section anim-fade">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-heading">Start Automating Today</h2>
            <p className="section-desc dark-desc" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
              Have a repetitive business process or want to build a custom AI agent? Let's connect to design a workflow that works for you.
            </p>
            <div className="contact-links">
              <a href="mailto:simr1707@gmail.com" className="contact-link">
                <i className="fa-solid fa-envelope"></i> simr1707@gmail.com
              </a>
              <span className="contact-link">
                <i className="fa-solid fa-location-dot"></i> Bonnyville, AB, Canada
              </span>
            </div>
            <a href="mailto:simr1707@gmail.com?subject=AI%20Automation%20Inquiry" className="btn-filled">
              <i className="fa-solid fa-paper-plane"></i> Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-copy">
            &copy; 2026 Simran Singh. Built with logical structure.
          </div>
          <div className="footer-links">
            <a href="mailto:simr1707@gmail.com" title="Email"><i className="fa-solid fa-envelope"></i></a>
            <a href="https://linkedin.com/in/simran-singh-58079a2bb" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/simr1707" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
