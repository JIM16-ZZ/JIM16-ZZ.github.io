import React, { useEffect, useRef } from 'react';

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    sectionRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: 'Junior Programmer / Software Developer',
      company: 'University of Cebu, Inc. — Cebu',
      period: '2024 – Present',
      bullets: [
        'Develop, maintain, and enhance institutional information systems serving thousands of students and staff, improving operational efficiency across departments.',
        'Design and build full-stack web systems (React, ASP.NET Core, SQL Server) for university offices — including a document tracking system and a library book inventory — deployed as Windows Services with role-based access.',
        'Perform debugging, system optimization, and feature development for existing enterprise applications.',
        'Collaborate cross-functionally with accounting, records, and cashiering offices to define and deliver system requirements.'
      ]
    },
    {
      role: 'College Instructor',
      company: 'University of Cebu, Inc. — Cebu',
      period: '2024 – Present',
      bullets: [
        'Teach Engineering and IT courses covering programming, hardware systems, and system management.',
        'Design instructional materials, hands-on activities, and assessments aligned with curriculum standards.'
      ]
    },
    {
      role: 'Data Entry Encoder',
      company: 'University of Cebu Lapu-Lapu and Mandaue (UCLM) — Cebu',
      period: '2023 – 2024',
      bullets: [
        'Supported Records and Accounting sections by encoding, verifying, and maintaining student information with high accuracy.'
      ]
    },
    {
      role: 'IT Support / Working Scholar — EDP Section',
      company: 'University of Cebu Lapu-Lapu and Mandaue (UCLM) — Cebu',
      period: '2022 – 2024',
      bullets: [
        'Provided technical IT support, system maintenance, and troubleshooting for university-wide records systems.'
      ]
    },
    {
      role: 'Customer Service and Technical Support Associate',
      company: 'Qualfon Philippines — Cebu',
      period: '2021',
      bullets: [
        'Delivered front-line customer-facing technical support, diagnosing and resolving hardware/software issues efficiently.'
      ]
    },
    {
      role: 'ICT Immersion — Management Information Systems Office (MISO)',
      company: 'Mandaue City Hall — Cebu',
      period: '2019 – 2020',
      bullets: [
        'Assisted in system administration and IT operations supporting city government services.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding" ref={sectionRef} style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="li-card reveal">
          <h2 className="section-title">Work Experience</h2>

          <div className="d-flex flex-column gap-5">
            {experiences.map((exp, index) => (
              <div key={index} className="reveal exp-timeline" style={{ transitionDelay: `${index * 0.05}s` }}>
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                  <div>
                    <h5 className="fw-bold mb-0" style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>{exp.role}</h5>
                    <p className="mb-0" style={{ color: 'var(--linkedin-blue)', fontWeight: '600', fontSize: '0.9rem' }}>{exp.company}</p>
                  </div>
                  <span style={{
                    background: 'var(--linkedin-blue-light)',
                    color: 'var(--linkedin-blue)',
                    padding: '3px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    whiteSpace: 'nowrap'
                  }}>{exp.period}</span>
                </div>
                <ul className="mb-0" style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem', paddingLeft: '20px' }}>
                  {exp.bullets.map((b, i) => <li key={i} className="mb-1">{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
