import React, { useEffect, useRef } from 'react';

const Achievements = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    sectionRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const studentAchievements = [
    {
      title: '4th Place - ICPEP.SE Region VII Quiz Bowl',
      organization: 'Institute of Computer Engineers of the Philippines - Student Edition',
      period: '2021',
      description: 'Achieved 4th place in the ICPEP.SE Region VII Quiz Bowl.'
    },
    {
      title: '2nd Place - Computer Quizbowl (UCLM Intramurals 2023)',
      organization: 'University of Cebu Lapu-Lapu and Mandaue',
      period: '2023',
      description: 'Secured 2nd place in the UCLM Intramurals Computer Quizbowl 2023.'
    },
    {
      title: 'Dean’s Lister',
      organization: 'University of Cebu Lapu-Lapu and Mandaue',
      period: '2022 - 2023',
      description: 'Recognized as Dean’s Lister for the Academic Year 2022-2023.'
    },
    {
      title: '4th Place - CESAFI Robotics Cup 2023',
      organization: 'Cebu Schools Athletic Foundation, Inc.',
      period: '2023',     
      description: 'Achieved 4th place in the CESAFI Robotics Cup 2023.'
    },
    {
      title: '4th Place - ICPEP.SE Region VII Quiz Bowl',
      organization: 'Institute of Computer Engineers of the Philippines - Student Edition',
      period: '2023',
      description: 'Achieved 4th place in the ICPEP.SE Region VII Quiz Bowl.'
    }
  ];

  const coachingAchievements = [
    {
      title: 'Faculty Coach',
      organization: 'UCLM Robotics Team',
      period: '2024 - Present',
      description: 'Led the UCLM Robotics Team to multiple wins at regional and national competitions while mentoring students in autonomous system design and problem-solving.'
    },
    {
      title: 'Technical Consultant',
      organization: 'Student IOT Projects',
      period: '2024 - Present',
      description: 'Providing technical guidance for various student IoT research projects.'
    }
  ];

  return (
    <section id="achievements" className="section-padding" ref={sectionRef} style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <h2 className="section-title reveal mb-4" style={{ display: 'block', borderBottom: '2px solid var(--linkedin-blue)', paddingBottom: '8px' }}>Achievements</h2>

        <div className="row gy-4">
          {/* Student Achievements */}
          <div className="col-lg-6 reveal">
            <div className="li-card h-100">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div style={{
                  width: '40px', height: '40px',
                  background: 'var(--linkedin-blue-light)',
                  color: 'var(--linkedin-blue)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  🎓
                </div>
                <h4 className="fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>Student</h4>
              </div>

              <div className="d-flex flex-column gap-4">
                {studentAchievements.map((item, index) => (
                  <div key={index} className="exp-timeline">
                    <h6 className="fw-bold mb-1" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{item.title}</h6>
                    <p className="mb-1" style={{ color: 'var(--linkedin-blue)', fontSize: '0.85rem', fontWeight: '600' }}>{item.organization}</p>
                    <p className="mb-2 text-muted-li" style={{ fontSize: '0.82rem' }}>{item.period}</p>
                    <p className="mb-0 text-secondary-li" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coaching Achievements */}
          <div className="col-lg-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="li-card h-100">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div style={{
                  width: '40px', height: '40px',
                  background: 'var(--linkedin-blue-light)',
                  color: 'var(--linkedin-blue)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  👔
                </div>
                <h4 className="fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>Professional</h4>
              </div>

              <div className="d-flex flex-column gap-4">
                {coachingAchievements.map((item, index) => (
                  <div key={index} className="exp-timeline">
                    <h6 className="fw-bold mb-1" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{item.title}</h6>
                    <p className="mb-1" style={{ color: 'var(--linkedin-blue)', fontSize: '0.85rem', fontWeight: '600' }}>{item.organization}</p>
                    <p className="mb-2 text-muted-li" style={{ fontSize: '0.82rem' }}>{item.period}</p>
                    <p className="mb-0 text-secondary-li" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>{item.description}</p>
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

export default Achievements;
