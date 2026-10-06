import React, { useEffect, useRef, useState } from 'react';

let profileImg = null;
try { profileImg = new URL('../assets/profile.jpg', import.meta.url).href; } catch { }

const Hero = () => {
  const sectionRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Computer Engineer | Software Developer';
  const typingSpeed = 100;

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    sectionRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" ref={sectionRef} style={{ paddingTop: '80px', background: 'var(--bg-section)' }}>
      <div className="container py-5">
        <div className="row gy-4 align-items-center">
          {/* Left: Text */}
          <div className="col-lg-8">
            <div className="li-card reveal">
              <div className="d-flex align-items-start gap-4">
                {/* Avatar */}
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt="Jim Paul Niñeria"
                    style={{
                      width: '96px', height: '96px', flexShrink: 0,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid var(--linkedin-blue)',
                      boxShadow: '0 4px 12px rgba(10,102,194,0.3)'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '96px', height: '96px', flexShrink: 0,
                    background: 'var(--linkedin-blue)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: '900', fontSize: '2rem',
                    boxShadow: '0 4px 12px rgba(10,102,194,0.3)'
                  }}>J</div>
                )}

                <div>
                  <h1 className="mb-1" style={{ fontSize: '1.8rem', fontWeight: '800' }}>Jim Paul Niñeria</h1>
                  <h2 className="mb-2 typing-cursor" style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-secondary)', minHeight: '1.5em' }}>
                    {displayText}
                  </h2>
                  <p className="mb-2 text-muted-li" style={{ fontSize: '0.9rem' }}>
                    📍 Cebu, Philippines &nbsp;|&nbsp; 📞 +63 996 143 1942 &nbsp;|&nbsp; ✉️ nineriajimpaul@gmail.com
                  </p>
                  <p className="mb-0 text-muted-li" style={{ fontSize: '0.9rem' }}>
                    🏢 University of Cebu Inc. — Software Developer
                  </p>
                </div>
              </div>

              <hr style={{ borderColor: 'var(--border-color)', margin: '20px 0' }} />

              <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
                Computer Engineer specializing in software development, web programming, and IT support. Skilled in C#, ASP.NET Core, React, Java, HTML/CSS/JavaScript, SQL, and Arduino with a strong foundation in network systems, embedded systems, and database management.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <a href="#projects" className="btn-li-primary">View Projects</a>
                <a href="#contact" className="btn-li-outline">Contact Me</a>
                <a
                  href="#contact"
                  className="btn-li-outline"
                  title="CV download is disabled — please contact me to request my CV"
                  style={{ opacity: 0.6, cursor: 'not-allowed' }}
                  onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Download CV (Contact Me)
                </a>
              </div>
            </div>
          </div>

          {/* Right: Quick Stats */}
          <div className="col-lg-4 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="li-card h-100">
              <h6 className="section-title" style={{ fontSize: '0.95rem' }}>Quick Stats</h6>
              <div className="d-flex flex-column gap-3">
                {[
                  { label: 'Years of Experience', value: '2+' },
                  { label: 'Projects Completed', value: '21' },
                  { label: 'Certifications', value: '13' },
                  { label: 'Tech Stack', value: '50+ Tools' }
                ].map((stat, i) => (
                  <div key={i} className="d-flex justify-content-between align-items-center py-2"
                    style={{ borderBottom: i < 3 ? '1px solid var(--border-color)' : 'none' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.label}</span>
                    <span style={{ color: 'var(--linkedin-blue)', fontWeight: '700', fontSize: '1.1rem' }}>{stat.value}</span>
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

export default Hero;
