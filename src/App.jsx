import React, { useState } from 'react';
import './App.css';

const certificados = [
  { name: 'Programación en C#', file: '/CV-de-Ces/diplomas/Certificado%20de%20Programacion%20en%20C%23.pdf', icon: '💻' },
  { name: 'Programación Orientada a Objetos', file: '/CV-de-Ces/diplomas/Certificado%20de%20Programador%20(orientado%20a%20objetos).pdf', icon: '🎯' },
  { name: 'Dispositivos Electrónicos', file: '/CV-de-Ces/diplomas/Uso%20responsable%20de%20Dispositivos%20Electronicos.pdf', icon: '🔌' },
  { name: 'Diseñador UX', file: '/CV-de-Ces/diplomas/Diseñador%20de%20Experiencia%20de%20Usuario.pdf', icon: '🎨' },
  { name: 'Desarrollador PHP', file: '/CV-de-Ces/diplomas/Certificado%20de%20Desarrollador%20PHP.pdf', icon: '🐘' },
  { name: 'Interfaces Gráficas', file: '/CV-de-Ces/diplomas/Certificado%20en%20Desarrollador%20de%20Interfaces%20Graficas.pdf', icon: '🖥️' },
  { name: 'Paradigmas de Programación', file: '/CV-de-Ces/diplomas/Paradigma%20de%20Programacion%20(orientado%20a%20objetos).pdf', icon: '🔄' },
  { name: 'Evaluador UX', file: '/CV-de-Ces/diplomas/Certificado%20en%20Evaluador%20de%20Experiencia%20de%20Usuario%20UX.pdf', icon: '👥' },
  { name: 'Análisis de Datos', file: '/CV-de-Ces/diplomas/Aspectos%20basicos_Datos%2C%20datos%2C%20en%20todas%20partes.pdf', icon: '📊' },
  { name: 'Técnico en Redes', file: '/CV-de-Ces/diplomas/Tecnico%20Instalador%20de%20Cableado%20Estructurado.pdf', icon: '🌐' },
  { name: 'Desarrollador Backend', file: '/CV-de-Ces/diplomas/Desarrollador%20Back-End.pdf', icon: '⚙️' },
  { name: 'Desarrollo .NET MAUI', file: '/CV-de-Ces/diplomas/Creacion%20de%20aplicaciones%20moviles%20y%20de%20escritorio%20.NET%20MAUI.pdf', icon: '📱' },
];
