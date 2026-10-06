import React, { useEffect, useRef } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    sectionRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section-padding" ref={sectionRef} style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 reveal">
            <div className="li-card text-center">
              <h2 className="section-title" style={{ display: 'inline-block', marginBottom: '16px' }}>Get In Touch</h2>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 28px auto' }}>
                I'm open to new opportunities, collaborations, or a quick chat. Whether it's a job offer, a freelance project, or just a hello — feel free to reach out.
              </p>

              <div className="row justify-content-center gy-3 mb-4">
                <div className="col-md-5">
                  <div style={{ background: 'var(--linkedin-blue-light)', borderRadius: '10px', padding: '16px', height: '100%' }}>
                    <p className="mb-1" style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '600' }}>EMAIL</p>
                    <a href="mailto:nineriajimpaul@gmail.com" style={{ color: 'var(--linkedin-blue)', fontWeight: '700', fontSize: '0.95rem', wordBreak: 'break-all' }}>
                      nineriajimpaul@gmail.com
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div style={{ background: 'var(--linkedin-blue-light)', borderRadius: '10px', padding: '16px', height: '100%' }}>
                    <p className="mb-1" style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '600' }}>PHONE</p>
                    <p style={{ color: 'var(--linkedin-blue)', fontWeight: '700', fontSize: '0.95rem', margin: 0 }}>09661431942</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="fw-bold text-muted-li mb-3 uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Follow & Connect</p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="https://www.linkedin.com/in/jimpaulnineria16/" target="_blank" rel="noopener noreferrer" className="li-social-btn" style={{ background: '#0a66c2' }}>
                    <span style={{ marginRight: '8px' }}>in</span> LinkedIn
                  </a>
                  <a href="https://github.com/JIM16-ZZ" target="_blank" rel="noopener noreferrer" className="li-social-btn" style={{ background: '#333' }}>
                    <span style={{ marginRight: '8px' }}>git</span> GitHub
                  </a>
                  <a href="https://www.upwork.com/freelancers/~01ae045028215d91e2" target="_blank" rel="noopener noreferrer" className="li-social-btn" style={{ background: '#14a800' }}>
                    <span style={{ marginRight: '8px' }}>Up</span> Upwork
                  </a>
                </div>
              </div>
              <a href="mailto:nineriajimpaul@gmail.com" className="btn-li-primary">
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
