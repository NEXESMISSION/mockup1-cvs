import { useState } from 'react';

const navItems = [
  'About',
  'Resume',
  'Portfolio',
] as const;

type NavItem = typeof navItems[number];

const whatIDo = [
  {
    icon: '📈',
    title: 'Web Design',
    desc: 'The most modern and high-quality design made at a professional level.',
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'High-quality development of sites at the professional level.',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Professional development of applications for iOS and Android.',
  },
  {
    icon: '📷',
    title: 'Photography',
    desc: 'I make high-quality photos of any category at a professional level.',
  },
];

const testimonials = [
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Emily Evans',
    date: '10 June, 2021',
    text: 'Ricardo did a miracle with my website. It looks exactly as I imagined it. Now I have a professional online presence.',
    full: 'Ricardo was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcorper dictum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboris dolore magna aliqua. Ut enim ad nisi utmin veniam, quis neutral eiusmod exercitation ullamco laboris si omnis commodo consequat sedis eiusmod. Adipisicing elit sed do eiusmod nisi du nulla. Magna deserunt ipsum pariatur sunt incididunt culpa cupidatat. Pariatur occaecat enim dolor culpa nisi eu eiusmod do qui culpa consectetur laboris eiusmod anim.'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Henry William',
    date: '14 June, 2021',
    text: 'Thank you very much for your work on our project. It was a big help for us. Thanks to the team!',
    full: 'Ricardo was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcorper dictum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboris dolore magna aliqua. Ut enim ad nisi utmin veniam, quis neutral eiusmod exercitation ullamco laboris si omnis commodo consequat sedis eiusmod. Adipisicing elit sed do eiusmod nisi du nulla. Magna deserunt ipsum pariatur sunt incididunt culpa cupidatat. Pariatur occaecat enim dolor culpa nisi eu eiusmod do qui culpa consectetur laboris eiusmod anim.'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'Daniel Lewis',
    date: '20 July, 2021',
    text: 'The best designer I have ever worked with. Highly recommended for any project.',
    full: 'Ricardo is a true professional. He delivered the project on time and exceeded our expectations. The communication was excellent and the results were outstanding.'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Jessica Miller',
    date: '2 August, 2021',
    text: 'Amazing work! The website looks stunning and works perfectly on all devices.',
    full: 'Ricardo created a beautiful and functional website for our business. The attention to detail and creativity were impressive. We will definitely work with him again.'
  },
];

const clients = [
  { logo: 'https://dummyimage.com/120x60/232325/fff&text=Ransom+Wilder', alt: 'Ransom Wilder' },
  { logo: 'https://dummyimage.com/120x60/232325/fff&text=Big+Ranger', alt: 'Big Ranger' },
  { logo: 'https://dummyimage.com/120x60/232325/fff&text=Cara+Indoors', alt: 'Cara Indoors' },
  { logo: 'https://dummyimage.com/120x60/232325/fff&text=Certificate', alt: 'Certificate' },
];

const education = [
  {
    school: 'University School of the Arts',
    years: '2007 – 2009',
    desc: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptatum delenit atque corrupti, quos dolores et quas molestias excepturi.',
  },
  {
    school: 'New York Academy of Art',
    years: '2005 – 2007',
    desc: 'Ratione voluptatem sequi nesciunt, facere quisquam omnis facere remad assumas, omnis voluptas assumenda est omnis.',
  },
  {
    school: 'High School of Art and Design',
    years: '2003 – 2005',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate, quia voluptas magi aut fugit, sed consequuntur magni dolores eos.',
  },
];

const experience = [
  {
    title: 'Creative Director',
    years: '2015 – Present',
    desc: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptatum delenit atque corrupti, quos dolores et quas molestias excepturi.',
  },
  {
    title: 'Art Director',
    years: '2013 – 2015',
    desc: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptatum delenit atque corrupti, quos dolores et quas molestias excepturi.',
  },
  {
    title: 'Web Designer',
    years: '2010 – 2013',
    desc: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptatum delenit atque corrupti, quos dolores et quas molestias excepturi.',
  },
];

const skills = [
  { name: 'Web Design', value: 80 },
  { name: 'Graphic Design', value: 75 },
  { name: 'Branding', value: 90 },
  { name: 'WordPress', value: 50 },
];

// Clients animation keyframes
// With three consecutive copies of the logo strip the track width is 300%.
// Shifting left by one-third (-100% / 3) means that when the animation restarts,
// the second copy is perfectly lined up where the first one began, so the motion
// continues without any perceptible jump.
const clientSliderKeyframes = `
@keyframes clientSlider {
  0%   { transform: translateX(0); }
  100% { transform: translateX(calc(-100% / 3)); }
}`;

const portfolioCategories = [
  'All',
  'Web Design',
  'Applications',
  'Web Development',
];

const portfolioItems = [
  {
    image: 'https://dummyimage.com/400x300/232325/fff&text=Moonboard',
    title: 'Moonboard',
    category: 'Web Design',
    description: 'Modern dashboard design with intuitive user interface',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    year: '2024'
  },
  {
    image: 'https://dummyimage.com/400x300/232325/fff&text=Gourmania',
    title: 'Gourmania',
    category: 'Applications',
    description: 'Food delivery app with real-time tracking',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    year: '2024'
  },
  {
    image: 'https://dummyimage.com/400x300/232325/fff&text=Rocket',
    title: 'Rocket',
    category: 'Web Development',
    description: 'E-commerce platform with advanced features',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
    year: '2023'
  },
  {
    image: 'https://dummyimage.com/400x300/232325/fff&text=Micro',
    title: 'Micro',
    category: 'Applications',
    description: 'Microservices architecture implementation',
    technologies: ['Docker', 'Kubernetes', 'Go'],
    year: '2023'
  },
  {
    image: 'https://dummyimage.com/400x300/232325/fff&text=Elemento',
    title: 'Elemento',
    category: 'Web Development',
    description: 'Creative agency website with animations',
    technologies: ['Vue.js', 'GSAP', 'Three.js'],
    year: '2023'
  },
  {
    image: 'https://dummyimage.com/400x300/232325/fff&text=Alpha',
    title: 'Alpha',
    category: 'Web Design',
    description: 'Minimalist portfolio design concept',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    year: '2022'
  },
  {
    image: 'https://dummyimage.com/400x300/232325/fff&text=Card+1',
    title: 'Card 1',
    category: 'Web Design',
    description: 'Credit card management interface',
    technologies: ['Angular', 'Material UI', 'Firebase'],
    year: '2022'
  },
  {
    image: 'https://dummyimage.com/400x300/232325/fff&text=Card+2',
    title: 'Card 2',
    category: 'Applications',
    description: 'Digital wallet application',
    technologies: ['Flutter', 'Dart', 'AWS'],
    year: '2022'
  },
];

const MainContent = () => {
  const [activePage, setActivePage] = useState<NavItem>('About');
  const [openTestimonial, setOpenTestimonial] = useState<number | null>(null);
  const [portfolioCategory, setPortfolioCategory] = useState<string>('All');

  const handlePageChange = (page: NavItem) => {
    setActivePage(page);
  };

  return (
    <main className="main-content">
      {/* Navigation Bar */}
      <nav className="main-nav">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-button ${activePage === item ? 'active' : ''}`}
            onClick={() => handlePageChange(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Content Sections */}
      <div style={{ width: '100%', maxWidth: '100%' }}>
        {activePage === 'About' && (
          <>
            {/* About Me */}
            <section style={{ marginBottom: '3rem', width: '100%' }}>
              <div className="about-me-container">
                <div className="about-me-bg-circle-1" />
                <div className="about-me-bg-circle-2" />
                
                <h1 className="about-me-title">
                  About Me
                </h1>
                
                <div className="about-me-content">
                  <p className="about-me-text-primary">
                    I'm <span className="about-me-highlight">Creative Director</span> and <span className="about-me-highlight">UI/UX Designer</span> from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                  </p>
                  
                  <p className="about-me-text-secondary">
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                  </p>
                </div>
              </div>

              {/* What I'm Doing */}
              <div style={{ padding: '1rem 0', width: '100%' }}>
                <h2 className="what-i-do-title">
                  What I'm Doing
                </h2>
                
                <div className="what-i-do-grid">
                  {whatIDo.map((item) => (
                    <div key={item.title} className="service-card">
                      <div className="service-icon-container">
                        {item.icon}
                      </div>
                      
                      <h3 className="service-title">
                        {item.title}
                      </h3>
                      
                      <p className="service-description">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Clients */}
            <section style={{ marginBottom: '2.5rem', padding: '1rem 0', width: '100%' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem' }}>Clients</h2>
              <style>{clientSliderKeyframes}</style>
              <div className="clients-container">
                <div className="clients-track">
                  {/* Duplicate the set three times to create a seamless loop */}
                  {[...clients, ...clients, ...clients].map((c, idx) => (
                    <img
                      key={c.alt + idx}
                      src={c.logo}
                      alt={c.alt}
                      className="client-logo"
                      loading={idx > 4 ? "lazy" : "eager"}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section style={{ marginBottom: '2.5rem', padding: '1rem 0', width: '100%' }}>
              <h2 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 700, 
                marginBottom: '1.2rem',
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                Testimonials
              </h2>
              
              <div className="testimonials-grid">
                {testimonials.map((t, idx) => (
                  <div
                    key={t.name}
                    className="testimonial-card-new"
                    onClick={() => setOpenTestimonial(idx)}
                  >
                    <div className="testimonial-header">
                      <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                      <div className="testimonial-info">
                        <h3 className="testimonial-name">{t.name}</h3>
                        <p className="testimonial-date">{t.date}</p>
                      </div>
                      <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="testimonial-content-new">
                      <p className="testimonial-text-new">{t.text}</p>
                      <button className="read-more-btn">Read Full Review</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activePage === 'Resume' && (
          <>
            <section style={{ marginBottom: '2.5rem' }}>
              <div className="resume-container">
                <div className="resume-bg-circle" />
                
                <h1 className="resume-title">
                  Resume
                </h1>
                
                {/* Skills */}
                <div className="skills-section">
                  <h2 className="skills-title">
                    My Skills
                  </h2>
                  
                  <div className="skills-grid">
                    {skills.map((skill) => (
                      <div key={skill.name} className="skill-card">
                        <div className="skill-content">
                          <div className="skill-header">
                            <h3 className="skill-name">
                              {skill.name}
                            </h3>
                            <span className="skill-percentage">
                              {skill.value}%
                            </span>
                          </div>
                          
                          <div className="skill-progress-container">
                            <div 
                              className="skill-progress-bar"
                              style={{ width: `${skill.value}%` }}
                            >
                              <div className="skill-progress-shimmer" />
                            </div>
                          </div>
                          
                          <div className="skill-labels">
                            <span>Beginner</span>
                            <span>Expert</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#FFD369', fontSize: '1.3rem' }}>📚</span> Education
                </h2>
                <div className="education-grid">
                  {education.map((ed) => (
                    <div key={ed.school} className="education-card">
                      <div className="card-content">
                        <div className="card-header">
                          <h3 className="card-title">{ed.school}</h3>
                          <span className="card-period">{ed.years}</span>
                        </div>
                        <p className="card-description">{ed.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Experience */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#FFD369', fontSize: '1.3rem' }}>💼</span> Experience
                </h2>
                <div className="experience-grid">
                  {experience.map((ex) => (
                    <div key={ex.title + ex.years} className="experience-card">
                      <div className="card-content">
                        <div className="card-header">
                          <h3 className="card-title">{ex.title}</h3>
                          <span className="card-period">{ex.years}</span>
                        </div>
                        <p className="card-description">{ex.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activePage === 'Portfolio' && (
          <section style={{ minHeight: 600 }}>
            <div className="portfolio-container">
              <div className="portfolio-header">
                <h1 className="portfolio-title">Portfolio</h1>
                <p className="portfolio-subtitle">Explore my creative work across different categories</p>
              </div>
              
              {/* Portfolio Filter Nav */}
              <div className="portfolio-filter-container">
                <nav className="portfolio-filter-nav">
                  {portfolioCategories.map((cat) => (
                    <button
                      key={cat}
                      className={`portfolio-filter-btn ${portfolioCategory === cat ? 'active' : ''}`}
                      onClick={() => setPortfolioCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Portfolio Grid */}
              <div className="portfolio-grid-container">
                <div className="portfolio-grid">
                  {portfolioItems
                    .filter(item => portfolioCategory === 'All' || item.category === portfolioCategory)
                    .map((item) => (
                      <div key={item.title} className="portfolio-card-new">
                        <div className="portfolio-image-container-new">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="portfolio-image-new"
                            loading="lazy"
                          />
                        </div>
                        <div className="portfolio-content-new">
                          <div className="portfolio-header-new">
                            <h3 className="portfolio-item-title-new">{item.title}</h3>
                            <span className="portfolio-category">{item.category}</span>
                          </div>
                          <p className="portfolio-description">{item.description}</p>
                          <div className="portfolio-technologies">
                            {item.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                
                {/* Empty State */}
                {portfolioItems.filter(item => portfolioCategory === 'All' || item.category === portfolioCategory).length === 0 && (
                  <div className="portfolio-empty-state-new">
                    <div className="empty-state-icon-new">🎨</div>
                    <h3 className="empty-state-title-new">No projects found</h3>
                    <p className="empty-state-text-new">No projects available in the "{portfolioCategory}" category at the moment.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Modal */}
      {openTestimonial !== null && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              onClick={() => setOpenTestimonial(null)} 
              style={{ 
                position: 'absolute', 
                top: 18, 
                right: 18, 
                background: 'none', 
                border: 'none', 
                color: '#b3b3b3', 
                fontSize: 22, 
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '50%',
                transition: 'all 0.2s ease',
                zIndex: 2,
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              &times;
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
              <img 
                src={testimonials[openTestimonial].avatar} 
                alt={testimonials[openTestimonial].name} 
                className="modal-avatar"
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 2 }}>
                  {testimonials[openTestimonial].name}
                </div>
                <div style={{ color: '#FFD369', fontSize: '0.98rem' }}>
                  {testimonials[openTestimonial].date}
                </div>
              </div>
            </div>
            <div style={{ color: '#FFD369', fontSize: 28, marginBottom: 10 }}>"</div>
            <div style={{ 
              color: '#b3b3b3', 
              fontSize: '1.05rem', 
              lineHeight: 1.7,
              marginBottom: 8,
            }}>
              {testimonials[openTestimonial].full}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MainContent; 