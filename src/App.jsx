import React, { useState } from 'react';
import './App.css';

const certificados = [
  { name: 'Programación en C#', file: '/CV-de-Ces/diplomas/Certificado de Programacion en C%23.pdf', icon: '💻' },
  { name: 'Programación Orientada a Objetos', file: '/CV-de-Ces/diplomas/Certificado de Programador (orientado a objetos).pdf', icon: '🎯' },
  { name: 'Dispositivos Electrónicos', file: '/CV-de-Ces/diplomas/Uso responsable de Dispositivos Electronicos.pdf', icon: '🔌' },
  { name: 'Diseñador UX', file: '/CV-de-Ces/diplomas/Diseñador de Experiencia de Usuario.pdf', icon: '🎨' },
  { name: 'Desarrollador PHP', file: '/CV-de-Ces/diplomas/Certificado de Desarrollador PHP.pdf', icon: '🐘' },
  { name: 'Interfaces Gráficas', file: '/CV-de-Ces/diplomas/Certificado en Desarrollador de Interfaces Graficas.pdf', icon: '🖥️' },
  { name: 'Paradigmas de Programación', file: '/CV-de-Ces/diplomas/Paradigma de Programacion (orientado a objetos).pdf', icon: '🔄' },
  { name: 'Evaluador UX', file: '/CV-de-Ces/diplomas/Certificado en Evaluador de Experiencia de Usuario UX.pdf', icon: '👥' },
  { name: 'Análisis de Datos', file: '/CV-de-Ces/diplomas/Aspectos basicos_Datos, datos, en todas partes.pdf', icon: '📊' },
  { name: 'Técnico en Redes', file: '/CV-de-Ces/diplomas/Tecnico Instalador de Cableado Estructurado.pdf', icon: '🌐' },
  { name: 'Desarrollador Backend', file: '/CV-de-Ces/diplomas/Desarrollador Back-End.pdf', icon: '⚙️' },
  { name: 'Desarrollo .NET MAUI', file: '/CV-de-Ces/diplomas/Creacion de aplicaciones moviles y de escritorio .NET MAUI.pdf', icon: '📱' },
];
