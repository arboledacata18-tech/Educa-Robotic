export interface Leccion {
  titulo: string;
  duracion: string;
  completado: boolean;
}

export interface Modulo {
  id: number;
  titulo: string;
  desc: string;
  lecciones: Leccion[];
}

export const modulos: Modulo[] = [
  {
    id: 1,
    titulo: 'Introducción a la Robótica',
    desc: 'Fundamentos de robótica, historia y aplicaciones en el mundo real.',
    lecciones: [
      { titulo: '¿Qué es la robótica?', duracion: '15 min', completado: true },
      { titulo: 'Componentes de un robot', duracion: '12 min', completado: true },
      { titulo: 'Sistemas de control', duracion: '10 min', completado: true },
      { titulo: 'Aplicaciones reales', duracion: '8 min', completado: false },
    ],
  },
  {
    id: 2,
    titulo: 'Lógica de Programación',
    desc: 'Pensamiento computacional, algoritmos y estructuras de control.',
    lecciones: [
      { titulo: 'Algoritmos y diagramas', duracion: '20 min', completado: false },
      { titulo: 'Variables y operadores', duracion: '15 min', completado: false },
      { titulo: 'Condicionales', duracion: '18 min', completado: false },
      { titulo: 'Bucles y repeticiones', duracion: '22 min', completado: false },
    ],
  },
  {
    id: 3,
    titulo: 'Programación por Bloques',
    desc: 'Aprende a programar robots usando bloques visuales interactivos.',
    lecciones: [
      { titulo: 'Bloques de movimiento', duracion: '15 min', completado: false },
      { titulo: 'Sensores', duracion: '20 min', completado: false },
      { titulo: 'Control de flujo', duracion: '25 min', completado: false },
      { titulo: 'Proyecto: Robot explorador', duracion: '30 min', completado: false },
    ],
  },
  {
    id: 4,
    titulo: 'Sensores y Actuadores',
    desc: 'Conoce los diferentes tipos de sensores y cómo usarlos.',
    lecciones: [
      { titulo: 'Sensores de distancia', duracion: '15 min', completado: false },
      { titulo: 'Sensores de luz', duracion: '12 min', completado: false },
      { titulo: 'Motores', duracion: '18 min', completado: false },
      { titulo: 'Proyecto: Siguelíneas', duracion: '45 min', completado: false },
    ],
  },
  {
    id: 5,
    titulo: 'Proyectos Avanzados',
    desc: 'Desafíos completos que integran todos los conocimientos adquiridos.',
    lecciones: [
      { titulo: 'Robot recolector', duracion: '40 min', completado: false },
      { titulo: 'Navegación autónoma', duracion: '50 min', completado: false },
      { titulo: 'Brazos robóticos', duracion: '35 min', completado: false },
      { titulo: 'Proyecto final', duracion: '60 min', completado: false },
    ],
  },
];
