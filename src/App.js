import React, { useState } from 'react';
import './App.css';

const certificados = [
  { name: 'Programación en C#', file: '/CV-de-Ces/diplomas/Certificado%20de%20Programacion%20en%20C%23.pdf', icon: '💻' },
  { name: 'Programación Orientada a Objetos', file: '/CV-de-Ces/diplomas/Certificado%20de%20Programador%20(orientado%20a%20objetos).pdf', icon: '🎯' },
  { name: 'Fundamentos de Estructura de Datos', file: '/CV-de-Ces/diplomas/Certificado%20de%20Fundamentos%20de%20Estructura%20de%20Datos.pdf', icon: '📚' },
  { name: 'Diseño UX', file: '/CV-de-Ces/diplomas/Diseñador%20de%20Experiencia%20de%20Usuario.pdf', icon: '🎨' },
  { name: 'Desarrollador PHP', file: '/CV-de-Ces/diplomas/Certificado%20de%20Desarrollador%20PHP.pdf', icon: '🐘' },
  { name: 'Interfaces Gráficas', file: '/CV-de-Ces/diplomas/Certificado%20en%20Desarrollador%20de%20Interfaces%20Graficas.pdf', icon: '🖥️' },
  { name: 'Paradigmas de Programación', file: '/CV-de-Ces/diplomas/Paradigma%20de%20Programacion%20(orientado%20a%20objetos).pdf', icon: '🔄' },
  { name: 'Evaluador UX', file: '/CV-de-Ces/diplomas/Certificado%20en%20Evaluador%20de%20Experiencia%20de%20Usuario%20UX.pdf', icon: '👥' },
  { name: 'Análisis de Datos', file: '/CV-de-Ces/diplomas/Aspectos%20basicos_Datos%2C%20datos%2C%20en%20todas%20partes.pdf', icon: '📊' },
  { name: 'Cableado Estructurado', file: '/CV-de-Ces/diplomas/Tecnico%20Instalador%20de%20Cableado%20Estructurado.pdf', icon: '🌐' },
  { name: 'Desarrollador Backend', file: '/CV-de-Ces/diplomas/Desarrollador%20Back-End.pdf', icon: '⚙️' },
  { name: 'Desarrollo .NET MAUI', file: '/CV-de-Ces/diplomas/Creacion%20de%20aplicaciones%20moviles%20y%20de%20escritorio%20.NET%20MAUI.pdf', icon: '📱' },
  { name: 'Uso de Dispositivos', file: '/CV-de-Ces/diplomas/Uso%20responsable%20de%20Dispositivos%20Electronicos.pdf', icon: '🔌' }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <>
      <button className="toggle-mode-icon" onClick={handleToggle} aria-label="Alternar modo claro/oscuro">
        {darkMode ? (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#eebc1d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
        ) : (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#646cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
        )}
      </button>
      <div className={`container${darkMode ? ' dark' : ''}`}>
        <header className="profile-header enhanced-header animate-header">
          <div className="photo-wrapper">
            <img src="foto/foto_ces.jpeg" alt="César Olvera Rodríguez" className="profile-photo" />
          </div>
          <div className="header-details">
            <h1>César Olvera Rodríguez</h1>
            <h2>Estudiante de Ingeniería en Sistemas Computacionales</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span role="img" aria-label="email">📧</span> cesolvrdz@gmail.com
              </div>
              <div className="contact-item">
                <span role="img" aria-label="teléfono">📱</span> 833 107 7911
              </div>
              <div className="contact-item">
                <span role="img" aria-label="ubicación">📍</span> Tampico, Tamaulipas, México
              </div>
            </div>
          </div>
        </header>

        <section className="cv-section">
          <h3>Perfil Profesional</h3>
          <p className="professional-summary">
            Estudiante de Ingeniería en Sistemas Computacionales con sólida formación técnica en contabilidad. Especializado en desarrollo web y multimedia, con certificaciones en múltiples áreas tecnológicas. Experiencia demostrable en creación de contenido digital y desarrollo web. Enfocado en el aprendizaje continuo y la aplicación práctica de tecnologías emergentes.
          </p>
        </section>

        <section className="cv-section education-section">
          <h3><span role="img" aria-label="educación">🎓</span> Educación</h3>
          <div className="education-list">
            <div className="education-item">
              <div className="education-header">
                <h4>Ingeniería en Sistemas Computacionales</h4>
                <span className="education-date">2021 - Presente</span>
              </div>
              <p className="institution">Universidad Autónoma de Tamaulipas (UAT) - Facultad de Ingeniería Tampico</p>
              <ul className="education-details">
                <li>Especialización en desarrollo de software y sistemas web</li>
                <li>Participación activa en proyectos multimedia de la facultad</li>
              </ul>
            </div>
            <div className="education-item">
              <div className="education-header">
                <h4>Técnico en Contabilidad</h4>
                <span className="education-date">2018 - 2021</span>
              </div>
              <p className="institution">CBTis 105 "Ing. Alejandro Prieto Quintero"</p>
              <ul className="education-details">
                <li>Formación técnica en contabilidad y administración</li>
                <li>Base sólida en gestión empresarial y finanzas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cv-section experience-section">
          <h3><span role="img" aria-label="experiencia">💼</span> Experiencia Profesional</h3>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-header">
                <h4>Creador de Contenido Digital</h4>
                <span className="experience-date">2022 - Presente</span>
              </div>
              <p className="company">Facultad de Ingeniería Tampico - UAT</p>
              <ul className="experience-details">
                <li>Desarrollo y edición de contenido multimedia educativo</li>
                <li>Colaboración en la producción de materiales digitales para la facultad</li>
                <li>Optimización de procesos de producción de contenido</li>
              </ul>
            </div>
            <div className="experience-item">
              <div className="experience-header">
                <h4>Desarrollador Web</h4>
                <span className="experience-date">2025</span>
              </div>
              <p className="company">Proyecto Carrocería</p>
              <ul className="experience-details">
                <li>Desarrollo de sitio web responsive para empresa local</li>
                <li>Implementación de mejores prácticas de UI/UX</li>
                <li>Trabajo efectivo en equipo para cumplir objetivos del proyecto</li>
              </ul>
            </div>
            <div className="experience-item">
              <div className="experience-header">
                <h4>Auxiliar Contable</h4>
                <span className="experience-date">2021 - 2022</span>
              </div>
              <p className="company">Negocio Familiar</p>
              <ul className="experience-details">
                <li>Gestión de registros contables y administrativos</li>
                <li>Optimización de procesos administrativos</li>
                <li>Implementación de sistemas de organización digital</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cv-section skills-section">
          <h3><span role="img" aria-label="habilidades">⚡</span> Competencias Técnicas</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Desarrollo</h4>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>Desarrollo Web</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Multimedia</h4>
              <ul>
                <li>Edición de Video</li>
                <li>Diseño Digital</li>
                <li>Producción de Contenido</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Sistemas</h4>
              <ul>
                <li>Bases de Datos</li>
                <li>Redes</li>
                <li>Cloud Computing</li>
                <li>Seguridad Informática</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Profesionales</h4>
              <ul>
                <li>Trabajo en Equipo</li>
                <li>Gestión de Proyectos</li>
                <li>Comunicación Efectiva</li>
                <li>Resolución de Problemas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cv-section certifications-section">
          <h3><span role="img" aria-label="certificados">🏆</span> Certificaciones</h3>
          <div className="certification-grid">
            {certificados.map((cert, idx) => (
              <div className="certification-item" key={idx}>
                <a href={cert.file} target="_blank" rel="noopener noreferrer">
                  <div className="certification-content">
                    <div className="certification-icon" role="img" aria-label="icono de certificado">{cert.icon}</div>
                    <h4>{cert.name}</h4>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}