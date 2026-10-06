import React, { useEffect, useRef, useState } from 'react';

import project1 from '../assets/PARKS.jpg';
import project2 from '../assets/Final Product.jpg';
import project3 from '../assets/Library Statistics.jpg';
import project4 from '../assets/Scholastic Records System.jpg';
import project5 from '../assets/KRISTAL LOGIN.png';
import project6 from '../assets/KK MAIN DASHBOARD.png';
import project7 from '../assets/CANJU.png';
import project8 from '../assets/Water Level.jpg';
import project9 from '../assets/Commerce.jpg';
import project10 from '../assets/salary.jpg';
import project11 from '../assets/CISS.jpg';
import project12 from '../assets/ENGRRR.jpg';
import project13 from '../assets/DISHES.jpg';
import project14 from '../assets/DISHES DASHBOARD.jpg';
import project15 from '../assets/Smart Lighting.jpg';
import project16 from '../assets/WALL AVOIDING.jpg';
import project17 from '../assets/Flames.jpg';
import project18 from '../assets/Line Followers.jpg';
import disenfectorImage from '../assets/Disenfector.jpg';
import bookInventoryImage from '../assets/Book Inventory.png';
import documentTrackingImage from '../assets/Document Tracking.png';
import nobleMindsImage from '../assets/Noble Minds.png';
import rojLogoImage from '../assets/ROJ Logo.png';


const Projects = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    sectionRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const professionalProjects = [
    {
      title: 'University Scholastic Records & Diploma System',
      description: 'Built for UCLM\'s College Records Section to automate diploma generation, reducing manual processing time significantly.',
      tech: ['C#', 'MSSQL'],
      image: project4,
      isProfessional: true,
      files: []
    },
    {
      title: 'UCLM Document Tracking System (Web)',
      description: 'Web-based system that logs every incoming and outgoing document across the university\'s offices. Custody moves only when the receiving office acknowledges, with overdue reminders, printable transmittal slips and formal movement and ageing reports. Role-based access for Super Admin, Department Secretary and Working Scholar.',
      tech: ['React', 'ASP.NET Core', 'MSSQL', 'Dapper', 'Vite', 'Windows Service'],
      image: documentTrackingImage,
      isProfessional: true,
      files: []
    },
    {
      title: 'Book Inventory System — Property Custodian Office',
      description: 'Barcode-driven custody record for the library\'s physical book copies. Imports the accession register from Excel, scans copies with a handheld reader, tracks found versus missing stock per school year, and files weekly, monthly and yearly reports automatically.',
      tech: ['React', 'ASP.NET Core', 'MSSQL', 'Dapper', 'Vite', 'Barcode Scanning'],
      image: bookInventoryImage,
      isProfessional: true,
      files: []
    },
    {
      title: 'Library Attendance and Statistics Report System',
      description: 'Automated real-time attendance and statistics user reporting system for UCLM\'s Library Department, eliminating manual report generation.',
      tech: ['C#', 'MSSQL'],
      image: project3,
      isProfessional: true,
      files: []
    },
    {
      title: 'Student Campus Information System (CIS)',
      description: 'Maintained and enhanced an enterprise student information system — debugging, adding features, and optimizing queries.',
      tech: ['C#', 'MSSQL'],
      image: project11,
      isProfessional: true,
      files: []
    },
    {
      title: 'Salary and Overtime Breakdown Calculation',
      description: 'An automated Excel-based payroll management system designed to streamline salary and overtime calculations with precise formula-driven logic.',
      tech: ['Microsoft Excel', 'Data Automation', 'Payroll Management'],
      image: project10,
      isProfessional: true,
      files: []
    },
    {
      title: 'Student Information System — Noble Minds Christian Academy',
      description: 'Developed a Student Information System for Noble Minds Christian Academy to manage student records, enrollment, and academic reporting in a centralized platform.',
      tech: ['C#', '.NET', 'MSSQL'],
      image: nobleMindsImage,
      isProfessional: true,
      files: []
    },
    {
      title: 'ROJ Auto Shop — Inventory & Management System',
      description: 'Local application for ROJ Auto Shop to track the shop\'s inventory and manage day-to-day operations, backed by a MSSQL database.',
      tech: ['C#', 'MSSQL'],
      image: rojLogoImage,
      imageFit: 'contain',
      isProfessional: true,
      files: []
    }
  ];

  const sideProjects = [
    {
      title: 'Sensibaby - Smart Crib System with Haptic Feedback & Armband Notification (3I Project)',
      description: 'IoT-powered smart crib integrating cry detection, automatic soothing, haptic armband alerts via BLE RSSI, and real-time environment monitoring.',
      tech: ['Arduino IDE', 'Electronics Components', 'PCB Design', 'Cirkit Design', 'Audio Modules', 'DC LED Light'],
      image: project2,
      files: [
        { name: 'Schematic Diagram.pdf', icon: '📜' },
        { name: '3i Project Report.docx', icon: '📝' }
      ]
    },
    {
      title: 'IoT - Smart Home Lighting Automation',
      description: 'Sensor-driven automated lighting within a miniature village setup demonstrating embedded programming and automation.',
      tech: ['Arduino IDE', 'PCB Design', 'Cirkit Design', 'Electronics Components'],
      image: project15,
      files: []
    },
    {
      title: 'Gadget Disenfector — Mist and FAR UV-C Disinfectant Machine using Arduino ',
      description: 'Designed and evaluated a gadget disinfecting device using mist dispersion and far UV-C for fast sanitization of small electronics and everyday gadgets.',
      tech: ['Arduino IDE', 'UV-C Disinfection', 'Mist Sprinkler Delivery Module', 'Embedded Systems'],
      image: disenfectorImage,
      files: []
    },
    {
      title: 'Marketing Website & E-commerce System',
      description: 'A comprehensive digital platform featuring a professional marketing storefront, and an integrated customer inquiry management system.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      image: project9,
      files: []
    }
  ];

  const studentProjects = [
    {
      title: 'PARKompanion — Vehicle Plate Recognition & Parking Assistance Management System (Thesis Design Project)',
      description: 'AI-powered real-time vehicle plate detection and smart parking assistance system. Integrated computer vision with a live web dashboard.',
      tech: ['Python', 'YOLO V8', 'Paddle OCR', 'HTML', 'CSS', 'JavaScript', 'NVIDIA CUDA'],
      image: project1,
      files: [
        { name: 'Thesis Documentation.pdf', icon: '📄' },
        { name: 'Source Code (GitHub)', icon: '💻' },
        { name: 'System Architecture.png', icon: '🖼️' }
      ]
    },
    {
      title: 'IoT-Powered: Water Level Detector with Real Time Alert Notifications using MIT App',
      description: 'An IoT-powered system designed for real-time water level monitoring, delivering instant notifications straight to your mobile device.',
      tech: ['Arduino IDE', 'MIT App Inventor'],
      image: project8,
      files: []
    },
    {
      title: 'Wall Avoiding Robot - Embedded Systems',
      description: 'An autonomous robot designed to navigate environments by detecting and avoiding obstacles using ultrasonic sensors and embedded logic.',
      tech: ['Arduino IDE', 'Embedded Systems', 'Robotics'],
      image: project16,
      files: []
    },
    {
      title: 'Line Follower Robot - Embedded Systems',
      description: 'A hardware-driven robot that uses IR sensors and a dedicated line follower IC to follow a visual path, with the IC directly controlling the motors.',
      tech: ['Embedded Systems', 'Robotics', 'IR Sensors', 'Line Follower IC'],
      image: project18,
      files: []
    },
    {
      title: 'Fire Detector Base with Automated Sprinkler System',
      description: 'A sensor-based detection system for flame that uses optical sensors to trigger real-time alerts for fire safety.',
      tech: ['Embedded Systems', 'Flame Sensor', 'Alarm Systems'],
      image: project17,
      files: []
    },
    {
      title: 'Reservation Management System',
      description: 'Booking and accommodation system for Canjulao Private Pool covering the full reservation lifecycle.',
      tech: ['C#', 'ASP.NET MVC', 'HTML', 'CSS'],
      image: project7,
      files: []
    },
    {
      title: 'UCLM College of Engineering - Project Website',
      description: 'A Web Development Project showcasing engineering programs, council reports and student activities.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Canva'],
      image: project12,
      files: []
    },
    {
      title: 'Web Page - The Filipino Classic Dishes',
      description: 'A Filipino Classic Dishes website built using HTML, CSS and JavaScript. It showcases popular Filipino foods like Adobo, Sinigang, and Lechon, demonstrating basic web development skills while promoting Filipino culture.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Canva'],
      image: project13,
      files: [
        { name: 'Dishes Dashboard.jpg', icon: '🖼️', link: project14 }
      ]
    },
    {
      title: 'Order & Billing Management System (System Analysis and Design)',
      description: 'Full sale, product purchasing, and billing desktop application for Kristal Kaye Trading, digitizing end-to-end business operations.',
      tech: ['Java', 'NetBeans IDE 8.2', 'MySQL'],
      image: project5,
      files: [
        { name: 'KRISTAL LOGIN.png', icon: '🖼️', link: project5 },
        { name: 'KK DASHBOARD.png', icon: '🖼️', link: project6 }
      ]
    }
  ];

  const renderProjectGrid = (projectsList) => (
    <div className="row gy-4 mb-5">
      {projectsList.map((project, index) => (
        <div key={index} className="col-lg-4 col-md-6 reveal" style={{ transitionDelay: `${(index % 3) * 0.08}s` }}>
          <div
            className="li-card interactive project-card h-100 d-flex flex-column p-0 overflow-hidden"
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
            {/* Project Thumbnail */}
            <div style={{
              width: '100%',
              aspectRatio: '16 / 9',
              overflow: 'hidden',
              position: 'relative',
              borderBottom: '1px solid var(--border-color)',
              background: project.imageFit === 'contain' ? '#fff' : 'var(--linkedin-blue-light)'
            }}>
              {project.image && (
                <div style={{
                  position: 'absolute',
                  inset: project.imageFit === 'contain' ? '12px 24px' : 0,
                  background: `url(${project.image}) center/${project.imageFit === 'contain' ? 'contain' : 'cover'} no-repeat`,
                  transition: 'transform 0.5s ease'
                }} className="project-thumbnail-img" />
              )}
              {!project.image && (
                <div className="text-center">
                  <div style={{ fontSize: '2rem', color: 'var(--linkedin-blue)', opacity: 0.5 }}>📂</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--linkedin-blue)', fontWeight: 700, marginTop: '4px' }}>PROJECT_0{index + 1}</div>
                </div>
              )}
            </div>

            <div className="p-4 d-flex flex-column flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-3">
                <h5 className="fw-bold mb-0" style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.3' }}>{project.title}</h5>
              </div>
              <p className="flex-grow-1" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {project.description}
              </p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span key={i} className="skill-badge">{tech}</span>
                ))}
                {project.tech.length > 3 && <span className="skill-badge">+{project.tech.length - 3} more</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="section-padding" ref={sectionRef} style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <h2 className="section-title reveal mb-4" style={{ display: 'block', borderBottom: '2px solid var(--linkedin-blue)', paddingBottom: '8px' }}>Projects</h2>

        <h4 className="fw-bold mb-3 reveal" style={{ color: 'var(--text-primary)', fontSize: '1.2rem' }}>Professional Work</h4>
        {renderProjectGrid(professionalProjects)}

        <h4 className="fw-bold mb-3 reveal mt-2" style={{ color: 'var(--text-primary)', fontSize: '1.2rem' }}>Side Projects</h4>
        {renderProjectGrid(sideProjects)}

        <h4 className="fw-bold mb-3 reveal mt-2" style={{ color: 'var(--text-primary)', fontSize: '1.2rem' }}>Academic Projects</h4>
        {renderProjectGrid(studentProjects)}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content-li reveal active" onClick={e => e.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-start mb-4">
              <h3 className="fw-bold m-0" style={{ color: 'var(--linkedin-blue)', fontSize: '1.4rem' }}>{selectedProject.title}</h3>
              <button className="btn-close shadow-none" onClick={() => setSelectedProject(null)}></button>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  background: selectedProject.imageFit === 'contain'
                    ? `#fff url(${selectedProject.image}) center/contain no-repeat content-box padding-box`
                    : selectedProject.image ? `url(${selectedProject.image}) center/cover no-repeat` : 'var(--linkedin-blue-light)',
                  padding: selectedProject.imageFit === 'contain' ? '12px 24px' : 0,
                  borderRadius: '12px', border: '1px solid var(--border-color)',
                  overflow: 'hidden'
                }}>
                  {!selectedProject.image && <div style={{ fontSize: '4rem', opacity: 0.2 }}>📂</div>}
                </div>
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold text-muted-li mb-2 uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Project Overview</h6>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>{selectedProject.description}</p>

                <h6 className="fw-bold text-muted-li mb-2 mt-4 uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Technologies Used</h6>
                <div className="d-flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="skill-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <hr className="my-4" style={{ borderColor: 'var(--border-color)' }} />

            <h6 className="fw-bold text-muted-li mb-3 uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Project Assets & Files</h6>
            <div className="row g-3">
              {selectedProject.isProfessional ? (
                <div className="col-12 text-center py-4 text-danger fw-bold" style={{ background: 'rgba(220, 53, 69, 0.05)', borderRadius: '12px', border: '1px dashed #dc3545' }}>
                  <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>🚫</span>
                  NOT ALLOWED (Confidential)
                </div>
              ) : selectedProject.files.length > 0 ? (
                selectedProject.files.map((file, i) => (
                  <div key={i} className="col-md-6">
                    <div
                      className="d-flex align-items-center gap-3 p-3 rounded interactive-light"
                      style={{ border: '1px solid var(--border-color)', background: 'var(--bg-card)', cursor: file.link ? 'pointer' : 'default' }}
                      onClick={() => file.link && window.open(file.link, '_blank')}
                    >
                      <span style={{ fontSize: '1.5rem' }}>{file.icon}</span>
                      <div>
                        <div className="fw-bold" style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{file.name}</div>
                        {file.link && <div style={{ fontSize: '0.75rem', color: 'var(--linkedin-blue)', fontWeight: '600' }}>View File</div>}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-4 text-muted" style={{ background: '#f9fafb', borderRadius: '12px' }}>
                  No files attached to this project yet.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
