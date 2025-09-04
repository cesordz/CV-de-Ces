import React, { useState } from 'react';
import './App.css';

const certificados = [
  { name: 'Programación en C#', file: 'diplomas/Certificado de Programacion en C#.pdf', icon: '💻' },
  { name: 'Programación Orientada a Objetos', file: 'diplomas/Certificado de Programador (orientado a objetos).pdf', icon: '🎯' },
  { name: 'Dispositivos Electrónicos', file: 'diplomas/Uso responsable de Dispositivos Electronicos.pdf', icon: '🔌' },
  { name: 'Diseñador UX', file: 'diplomas/Diseñador de Experiencia de Usuario.pdf', icon: '🎨' },
  { name: 'Desarrollador PHP', file: 'diplomas/Certificado de Desarrollador PHP.pdf', icon: '🐘' },
  { name: 'Interfaces Gráficas', file: 'diplomas/Certificado en Desarrollador de Interfaces Graficas.pdf', icon: '🖥️' },
  { name: 'Paradigmas de Programación', file: 'diplomas/Paradigma de Programacion (orientado a objetos).pdf', icon: '🔄' },
  { name: 'Evaluador UX', file: 'diplomas/Certificado en Evaluador de Experiencia de Usuario UX.pdf', icon: '👥' },
  { name: 'Análisis de Datos', file: 'diplomas/Aspectos basicos_Datos, datos, en todas partes.pdf', icon: '📊' },
  { name: 'Técnico en Redes', file: 'diplomas/Tecnico Instalador de Cableado Estructurado.pdf', icon: '🌐' },
  { name: 'Desarrollador Backend', file: 'diplomas/Desarrollador Back-End.pdf', icon: '⚙️' },
  { name: 'Desarrollo .NET MAUI', file: 'diplomas/Creacion de aplicaciones moviles y de escritorio .NET MAUI.pdf', icon: '📱' },
];
