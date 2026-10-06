import React, { useEffect } from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Background from './components/Background';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Protection from './components/Protection';


function App() {
  useEffect(() => {
    // Prevent Copying (Ctrl+C, etc.)
    const preventCopy = (e) => e.preventDefault();
    document.addEventListener('copy', preventCopy);

    // Prevent Right-Click
    const preventContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', preventContextMenu);

    // Preemptive Screenshot Defense (Beats Windows Snipping Tool)
    const handleKeyDown = (e) => {
      // If Windows/Cmd + Shift are pressed together, trigger shield BEFORE 'S' is pressed
      if (e.metaKey && e.shiftKey) {
        handleProtectedEvent();
      }

      // Detect Shift+S (common Windows Snip: Win+Shift+S may not be exposed to the browser,
      // so show the shield on Shift+S as a best-effort deterrent).
      if (e.shiftKey && (e.key === 's' || e.key === 'S')) {
        const tgt = e.target;
        const tag = tgt && tgt.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && !(tgt && tgt.isContentEditable)) {
          handleProtectedEvent();
          // Auto-restore shortly after to avoid blocking UX
          if (window._protectRestoreTimeout) clearTimeout(window._protectRestoreTimeout);
          window._protectRestoreTimeout = setTimeout(handleRestoreEvent, 1200);
        }
      }

      // Block PrintScreen
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        handleProtectedEvent();
      }

      // Block Ctrl+P
      if (e.ctrlKey && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        handleProtectedEvent();
      }
    };

    const handleKeyUp = (e) => {
      // Restore shield if keys are released and window still has focus
      if ((!e.metaKey || !e.shiftKey) && document.hasFocus()) {
        handleRestoreEvent();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Aggressive Privacy Shield
    const toggleShield = (active) => {
      let shield = document.getElementById('privacy-shield');
      if (!shield) {
        shield = document.createElement('div');
        shield.id = 'privacy-shield';
        shield.innerHTML = '<div style="text-align:center"><h1>🚫 CONTENT PROTECTED</h1><p>Screenshots and captures are not allowed on this portfolio.</p></div>';
        Object.assign(shield.style, {
          position: 'fixed', inset: 0, zIndex: 99999,
          background: '#000', color: '#fff',
          display: 'none', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'sans-serif'
        });
        document.body.appendChild(shield);
      }
      shield.style.display = active ? 'flex' : 'none';
      document.body.style.filter = active ? 'blur(20px)' : 'none';
    };

    const handleProtectedEvent = () => toggleShield(true);
    const handleRestoreEvent = () => toggleShield(false);

    window.addEventListener('blur', handleProtectedEvent);
    window.addEventListener('focus', handleRestoreEvent);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') handleProtectedEvent();
    });

    // Prevent image dragging and downloads via drag
    const preventDragStart = (e) => {
      if (e.target && e.target.tagName === 'IMG') e.preventDefault();
    };
    document.addEventListener('dragstart', preventDragStart);

    // Set ondragstart for existing images and observe new images
    const setImgHandlers = (root = document) => {
      root.querySelectorAll && root.querySelectorAll('img').forEach(img => {
        try { img.ondragstart = () => false; img.setAttribute('draggable', 'false'); } catch (err) {}
      });
    };
    setImgHandlers();

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!node) continue;
          if (node.tagName === 'IMG') {
            try { node.ondragstart = () => false; node.setAttribute('draggable', 'false'); } catch (err) {}
          }
          try { setImgHandlers(node); } catch (err) {}
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleProtectedEvent);
      window.removeEventListener('focus', handleRestoreEvent);
      document.removeEventListener('dragstart', preventDragStart);
      mo.disconnect();
      if (window._protectRestoreTimeout) {
        clearTimeout(window._protectRestoreTimeout);
        window._protectRestoreTimeout = null;
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App" style={{ background: 'transparent' }}>
        <Background />
        <Navbar />
        <Hero />
        <About />
        <Experience />        
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />
        <Protection />
      </div>
    </ThemeProvider>
  );
}

export default App;
