import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 text-center" style={{ background: 'var(--linkedin-blue)', color: '#fff', marginTop: '20px' }}>
      <div className="container">
        <p className="mb-1 fw-bold" style={{ fontSize: '1rem' }}>@Dirt.Bluxx</p>
        <p className="mb-0" style={{ fontSize: '0.82rem', opacity: 0.8 }}>
          Junior Software Developer | Computer Engineer | Cebu, Philippines &nbsp;•&nbsp; &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
