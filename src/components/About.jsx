import React, { useEffect, useRef } from 'react';
import uclmImg from '../assets/ENGR.jpg';
import shsImg from '../assets/SHS.jpg';
import mitImg from '../assets/MIT.png';
import cirkitImg from '../assets/CIRCKIT.png';
import clickImg from '../assets/Click.jpg';
import notepadImg from '../assets/NOTEPAD.png';
import viteImg from '../assets/vite.svg';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    sectionRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skillIcons = {
    // Programming Languages
    'C': 'devicon-c-plain colored',
    'C++': 'devicon-cplusplus-plain colored',
    'C#': 'devicon-csharp-plain colored',
    'Java': 'devicon-java-plain colored',
    'Python': 'devicon-python-plain colored',
    'PHP': 'devicon-php-plain colored',
    'JavaScript': 'devicon-javascript-plain colored',
    'MATLAB': 'devicon-matlab-plain colored',
    'Verilog HDL': 'devicon-digitalocean-original colored',

    // Web & Markup
    'HTML': 'devicon-html5-plain colored',
    'CSS': 'devicon-css3-plain colored',
    'Bootstrap': 'devicon-bootstrap-plain colored',

    // Frameworks & Libraries
    'Node.js': 'devicon-nodejs-plain colored',
    'React JS': 'devicon-react-original colored',
    'Vite': viteImg,
    '.NET Core': 'devicon-dotnetcore-plain colored',
    '.NET MVC': 'devicon-dotnetcore-plain colored',
    'ASP.NET MVC': 'devicon-dotnetcore-plain colored',
    'Swagger': 'devicon-swagger-plain colored',
    'REST APIs': 'devicon-fastapi-plain colored',
    'XAMPP': 'https://cdn-icons-png.flaticon.com/512/5548/5548401.png',

    // IDEs & Dev Tools
    'VS Code': 'devicon-vscode-plain colored',
    'Visual Studio': 'devicon-visualstudio-plain colored',
    'NetBeans IDE': 'devicon-java-plain colored',
    'Android Studio': 'devicon-androidstudio-plain colored',
    'Arduino IDE': 'devicon-arduino-plain colored',
    'MIT App Inventor': mitImg,
    'Notepad++': notepadImg,

    // Databases
    'MySQL': 'devicon-mysql-plain colored',
    'MSSQL': 'devicon-microsoftsqlserver-plain colored',
    'MS Access': 'https://cdn-icons-png.flaticon.com/512/906/906315.png',
    'SQLite': 'devicon-sqlite-plain colored',

    // Version Control & Collaboration
    'Git': 'devicon-git-plain colored',
    'GitHub': 'devicon-github-original colored',
    'Bitbucket': 'devicon-bitbucket-original colored',
    'Trello': 'devicon-trello-plain colored',
    'ClickUp': clickImg,
    'Slack': 'devicon-slack-plain colored',

    // Design & Prototyping
    'Figma': 'devicon-figma-plain colored',
    'Canva': 'devicon-canva-plain colored',
    'SketchUp': 'https://cdn.simpleicons.org/sketchup/005A9C',
    'Cirkit Designer': cirkitImg,

    // Hardware & Embedded Systems
    'Microprocessors': 'https://cdn-icons-png.flaticon.com/512/9479/9479866.png',

    // Networking & OS
    'Cisco': 'https://cdn.simpleicons.org/cisco/049CA1',
    'Kali Linux': 'devicon-linux-plain colored',
    'Windows': 'devicon-windows8-original colored',
    'Troubleshooting': 'https://cdn-icons-png.flaticon.com/512/2933/2933245.png',
    'LAN Cabling Network Setup': 'https://cdn-icons-png.flaticon.com/512/1197/1197460.png',
    'System Maintenance': 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png',

    // Productivity & Data
    'Microsoft Office': 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
    'Power BI': 'https://cdn-icons-png.flaticon.com/512/16139/16139726.png',
    'Excel': 'https://cdn-icons-png.flaticon.com/512/4726/4726040.png',
    'Word': 'https://cdn-icons-png.flaticon.com/512/4725/4725970.png',
    'PowerPoint': 'https://cdn-icons-png.flaticon.com/512/4726/4726016.png',
    'Teams': 'https://cdn-icons-png.flaticon.com/512/15047/15047490.png',
  };

  const skillGroups = [
    { category: 'Programming Languages', icon: '💻', items: ['C', 'C++', 'C#', 'Java', 'Python', 'PHP', 'JavaScript', 'MATLAB'] },
    { category: 'Web & Markup', icon: '🌐', items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'] },
    { category: 'Frameworks & Libraries', icon: '📦', items: ['React JS', 'Node.js', '.NET Core', 'ASP.NET MVC', 'Swagger', 'REST APIs', 'XAMPP', 'Vite'] },
    { category: 'IDEs & Dev Tools', icon: '🛠️', items: ['VS Code', 'Visual Studio', 'NetBeans IDE', 'Android Studio', 'Arduino IDE', 'MIT App Inventor', 'Notepad++'] },
    { category: 'Databases', icon: '🗄️', items: ['MySQL', 'MSSQL', 'MS Access', 'SQLite'] },
    { category: 'Version Control', icon: '🌿', items: ['Git', 'GitHub', 'Bitbucket', 'Trello', 'ClickUp', 'Slack'] },
    { category: 'Design & Prototyping', icon: '🎨', items: ['Figma', 'Canva', 'SketchUp'] },
    { category: 'Hardware & Embedded Systems', icon: '⚙️', items: ['Arduino IDE', 'Microprocessors', 'Cirkit Designer', 'MIT App Inventor', 'Verilog HDL'] },
    { category: 'Networking & OS', icon: '📡', items: ['Cisco', 'Kali Linux', 'Windows', 'Troubleshooting', 'LAN Cabling Network Setup', 'System Maintenance'] },
    { category: 'Productivity', icon: '📊', items: ['Microsoft Office', 'Excel', 'Word', 'PowerPoint', 'Teams'] }
  ];

  return (
    <section id="about" className="section-padding" ref={sectionRef} style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="row gy-4">
          {/* Summary */}
          <div className="col-lg-6 reveal">
            <div className="li-card h-100">
              <h2 className="section-title">About</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem' }}>
                Computer Engineer based in Cebu, Philippines, specializing in software development, web programming, and IT support. Currently a College Instructor and Junior Programmer at the University of Cebu, with experience in technical support, data encoding, and system development.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem' }} className="mb-0">
                Skilled in C#, ASP.NET Core, React, Java, HTML/CSS, SQL, and Arduino, with a strong foundation in networking, hardware, logic circuits, and database management. Experienced in using tools like Git, Trello, and ClickUp to deliver efficient, real-world solutions.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="col-lg-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="li-card h-100">
              <h2 className="section-title">Education</h2>

              <div className="mb-5 d-flex gap-4 align-items-center">
                <div style={{
                  width: '70px', height: '70px', flexShrink: 0,
                  borderRadius: '14px',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden', background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}>
                  <img src={uclmImg} alt="UCLM" style={{ width: '52px', height: '52px', objectFit: 'contain' }} />
                </div>
                <div>
                  <h6 className="fw-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: '1.3' }}>
                    Bachelor of Science in Computer Engineering
                  </h6>
                  <p className="mb-2" style={{ color: 'var(--linkedin-blue)', fontSize: '1rem', fontWeight: '600' }}>
                    University of Cebu Lapu-Lapu and Mandaue (UCLM)
                  </p>
                  <p className="mb-2 text-muted-li" style={{ fontSize: '0.95rem' }}>2020 – 2024</p>
                  <p className="mb-0 text-secondary-li" style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                    🏅 Academic, Service and Leadership Awardee
                  </p>
                </div>
              </div>

              <div className="d-flex gap-4 align-items-center">
                <div style={{
                  width: '70px', height: '70px', flexShrink: 0,
                  borderRadius: '14px',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden', background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}>
                  <img src={shsImg} alt="UCLM SHS" style={{ width: '52px', height: '52px', objectFit: 'contain' }} />
                </div>
                <div>
                  <h6 className="fw-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: '1.3' }}>
                    TVL – ICT: Computer Programming & Hardware Servicing
                  </h6>
                  <p className="mb-2" style={{ color: 'var(--linkedin-blue)', fontSize: '1rem', fontWeight: '600' }}>
                    University of Cebu Lapu-Lapu and Mandaue (UCLM)
                  </p>
                  <p className="mb-2 text-muted-li" style={{ fontSize: '0.95rem' }}>2018 – 2020</p>
                  <p className="mb-0 text-secondary-li" style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                    🏅 Graduated with Honors — Top 8
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="col-12 reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="li-card">
              <h2 className="section-title">Technical Skills</h2>
              <div className="row g-3">
                {skillGroups.map((group, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <div className="skill-category-card p-3 h-100 rounded-4" style={{
                      background: 'var(--bg-section)',
                      border: '1px solid var(--border-color)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                      <div className="d-flex align-items-center gap-2 mb-3 pb-2" style={{ borderBottom: '1px dashed var(--border-color)' }}>
                        <div style={{
                          width: '36px', height: '36px',
                          background: 'var(--bg-white)',
                          borderRadius: '10px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '1.2rem',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                        }}>
                          {group.icon}
                        </div>
                        <h6 className="fw-bold mb-0" style={{ color: 'var(--text-primary)', fontSize: '0.95rem', letterSpacing: '-0.2px' }}>
                          {group.category}
                        </h6>
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        {group.items.map((skill, i) => (
                          <div key={i} className="skill-item-card" title={skill} style={{
                            background: 'var(--bg-white)',
                            padding: '8px 6px',
                            borderRadius: '10px',
                            border: '1px solid var(--border-color)',
                            minWidth: '70px',
                            flex: '1 1 auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                            transition: 'all 0.2s ease'
                          }}>
                            {skillIcons[skill] ? (
                              typeof skillIcons[skill] === 'string' && skillIcons[skill].startsWith('devicon-') ? (
                                <i className={`${skillIcons[skill]} skill-icon`} style={{ fontSize: '1.8rem', margin: '0', transition: 'transform 0.2s ease' }}></i>
                              ) : (
                                <img
                                  src={skillIcons[skill]}
                                  alt={skill}
                                  style={{ width: '28px', height: '28px', objectFit: 'contain', margin: '0', transition: 'transform 0.2s ease' }}
                                />
                              )
                            ) : (
                              <span className="skill-badge text-center w-100" style={{ padding: '4px', fontSize: '0.7rem' }}>{skill}</span>
                            )}
                            <span className="skill-label text-center" style={{ fontSize: '0.7rem', fontWeight: '600', color: 'var(--text-secondary)', margin: '0', transition: 'color 0.2s ease' }}>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
