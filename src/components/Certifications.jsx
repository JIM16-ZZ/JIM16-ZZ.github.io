import React, { useEffect, useRef } from 'react';
import uclmImg from '../assets/ENGR.jpg';
import ucImg from '../assets/UCLM.png';
import ibmImg from '../assets/IBM.png';
import linkedInImg from '../assets/LINKEDIN.jpg';
import ciscoImg from '../assets/CISCO.png';
import icpepImg from '../assets/ICPEP.png';
import ecImg from '../assets/EC.jpg';
import cscImg from '../assets/CSC.png';

const Certifications = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    sectionRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      provider: 'Civil Service Commission of the Philippines',
      logo: cscImg,
      fallbackEmoji: '🏛️',
      items: [
        {
          name: 'Civil Service Examination 2025 — Professional Passer Level II',
          certImage: cscImg,
          badge: '88%'
        }
      ]
    },
    {
      provider: 'University of Cebu',
      logo: ucImg,
      fallbackEmoji: '🎓',
      items: [
        {
          name: 'Building Secure and Scalable REST APIs with ASP.NET Core',
          certImage: uclmImg
        },
        {
          name: 'Clean Architecture Fundamentals for Modern Systems Design',
          certImage: uclmImg
        }
      ]
    },
    {
      provider: 'IBM SkillsBuild',
      logo: ibmImg,
      fallbackEmoji: '💠',
      items: [
        { name: 'Agile Explorer', certImage: ibmImg },
        { name: 'Artificial Intelligence Fundamentals', certImage: ibmImg },
        { name: 'Data Fundamentals', certImage: ibmImg },
        { name: 'Web Development Fundamentals', certImage: ibmImg },
        { name: 'Digital Literacy', certImage: ibmImg }
      ]
    },
    {
      provider: 'LinkedIn Learning',
      logo: linkedInImg,
      fallbackEmoji: '🔗',
      items: [
        { name: 'Ethics of Generative AI', certImage: linkedInImg },
        { name: 'Generative AI', certImage: linkedInImg },
        { name: 'Microsoft 365 for Business', certImage: linkedInImg }
      ]
    },
    {
      provider: 'Cisco Networking Academy',
      logo: ciscoImg,
      fallbackEmoji: '🌐',
      items: [
        { name: 'Hardware Computer Fundamentals', certImage: ciscoImg },
        { name: 'Network Setup and Administration', certImage: ciscoImg }
      ]
    }
  ];

  const leadership = [
    { role: 'Vice President (External)', organization: 'ICPeP.Se, UCLM', period: '2021 – 2022', logo: icpepImg },
    { role: 'Board of Directors', organization: 'UCLM Engineering Council', period: '2021 – 2022', logo: ecImg },
    { role: 'Health and Safety Officer', organization: 'UCLM Engineering Council', period: '2023 – 2024', logo: ecImg }];

  return (
    <section id="certifications" className="section-padding" ref={sectionRef} style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="row gy-4">

          {/* Certifications */}
          <div className="col-lg-7 reveal">
            <div className="li-card h-100">
              <h2 className="section-title">Certifications, Training & Seminars</h2>

              <div className="d-flex flex-column gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="d-flex gap-3 pb-4" style={{ borderBottom: idx < certifications.length - 1 ? '1px solid var(--border-color)' : 'none' }}>

                    {/* Logo */}
                    <div style={{
                      width: '48px', height: '48px', flexShrink: 0,
                      borderRadius: '10px', border: '1px solid var(--border-color)',
                      overflow: 'hidden', background: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
                    }}>
                      <img
                        src={cert.logo}
                        alt={cert.provider}
                        style={{ width: '36px', height: '36px', objectFit: 'contain' }}
                        onError={e => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <span style={{
                        display: 'none', fontSize: '1.4rem',
                        width: '100%', height: '100%',
                        alignItems: 'center', justifyContent: 'center'
                      }}>{cert.fallbackEmoji}</span>
                    </div>

                    {/* Items */}
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                        {cert.provider}
                      </h6>
                      <div className="d-flex flex-column gap-2">
                        {cert.items.map((item, i) => (
                          <div key={i} className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                              • {item.name}
                              {item.badge && (
                                <span style={{
                                  display: 'inline-block',
                                  marginLeft: '8px',
                                  background: 'var(--linkedin-blue)',
                                  color: '#fff',
                                  borderRadius: '12px',
                                  fontSize: '0.72rem',
                                  fontWeight: '700',
                                  padding: '1px 8px',
                                  verticalAlign: 'middle',
                                  letterSpacing: '0.02em'
                                }}>
                                  {item.badge}
                                </span>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="col-lg-5 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="li-card h-100">
              <h2 className="section-title">Leadership & Organizations</h2>
              <div className="d-flex flex-column gap-4">
                {leadership.map((item, index) => (
                  <div key={index} className="d-flex gap-3 pb-4" style={{ borderBottom: index < leadership.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                    <div style={{
                      width: '48px', height: '48px', flexShrink: 0,
                      borderRadius: '10px',
                      border: '1px solid var(--border-color)',
                      overflow: 'hidden', background: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
                    }}>
                      <img
                        src={item.logo}
                        alt={item.organization}
                        style={{ width: '36px', height: '36px', objectFit: 'contain' }}
                      />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{item.role}</h6>
                      <p className="mb-0" style={{ color: 'var(--linkedin-blue)', fontSize: '0.85rem', fontWeight: '600' }}>{item.organization}</p>
                      <p className="mb-0 text-muted-li" style={{ fontSize: '0.8rem' }}>{item.period}</p>
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

export default Certifications;
