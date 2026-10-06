import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      {/* Animated Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-10">
            <p className="text-uppercase fw-semibold mb-3" style={{ letterSpacing: '3px', color: 'var(--accent-cyan)' }}>
              Hi, my name is
            </p>
            <h1 className="display-2 heading-serif mb-2 fw-bold text-gradient" style={{ lineHeight: '1.2' }}>
              Jim Paul G. Niñeria.
            </h1>
            <h2 className="display-4 heading-serif mb-4" style={{ lineHeight: '1.2', color: 'var(--text-secondary)' }}>
              Software Developer & Computer Engineer.
            </h2>
            <p className="lead mb-5 pe-lg-5 text-secondary" style={{ fontSize: '1.15rem', maxWidth: '700px', lineHeight: '1.8' }}>
              I'm a Computer Engineer based in Cebu, Philippines, specializing in software and hardware development, web programming, and IT support. I enjoy building real-world solutions that improve operational efficiency, currently doing so as a College Instructor and Junior Programmer at the University of Cebu.
            </p>
            <div className="d-flex gap-4 flex-wrap">
              <a href="#projects" className="btn btn-custom">Check out my Projects</a>
              <a href="#contact" className="btn btn-outline-custom">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
