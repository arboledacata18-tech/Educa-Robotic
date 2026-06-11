import { Head, Link } from '@inertiajs/react';
import StatsBar from '@/components/robotics/stats-bar';
import CourseCard from '@/components/robotics/course-card';

const cursos = [
  {
    icon: (
      <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    title: 'Robótica Educativa',
    description: 'Aprende robótica desde cero con nuestro enfoque práctico y divertido.',
    lessons: 24,
    level: 'Principiante',
    levelColor: '#22C55E',
    href: '/robotics/contenido',
  },
  {
    icon: (
      <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'Programación Visual',
    description: 'Domina la lógica de programación usando bloques interactivos.',
    lessons: 18,
    level: 'Intermedio',
    levelColor: '#F59E0B',
    href: '/robotics/contenido',
  },
  {
    icon: (
      <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: 'Proyectos IoT',
    description: 'Conecta tu robot al mundo real con sensores y actuadores.',
    lessons: 30,
    level: 'Avanzado',
    levelColor: '#EF4444',
    href: '/robotics/contenido',
  },
];

export default function Landing() {
  return (
    <>
      <Head title="RoboLearn - Aprende Robótica" />

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-60 -top-60 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-600">
              🚀 Plataforma Educativa
            </span>
            <h1
              className="mt-6 font-bold text-4xl leading-tight text-blue-900 sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Aprende Robótica
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Desde Cero
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-600/70 sm:text-lg">
              Domina la robótica educativa con lecciones interactivas, simulador virtual y
              programación por bloques. Sin conocimientos previos.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/robotics/contenido"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-600/40 sm:w-auto"
              >
                Comenzar a Aprender
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/robotics/playground"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-blue-600 bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-50 sm:w-auto"
              >
                Probar Laboratorio
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="cursos" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-600">
              Nuestros Cursos
            </span>
            <h2
              className="mt-4 font-bold text-3xl text-blue-900 sm:text-4xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Explora Nuestro Plan de Estudios
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-600/70">
              Desde conceptos básicos hasta proyectos avanzados. Cada curso incluye
              lecciones teóricas, ejercicios prácticos y proyectos reales.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cursos.map((curso) => (
              <CourseCard key={curso.title} {...curso} />
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      <section id="como-funciona" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-600">
              Metodología
            </span>
            <h2
              className="mt-4 font-bold text-3xl text-blue-900 sm:text-4xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              ¿Cómo Funciona?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Aprende',
                desc: 'Lecciones interactivas con explicaciones claras y ejemplos visuales.',
              },
              {
                step: '02',
                title: 'Practica',
                desc: 'Ejercicios en nuestro simulador virtual con retroalimentación.',
              },
              {
                step: '03',
                title: 'Crea',
                desc: 'Proyectos del mundo real usando sensores y actuadores.',
              },
            ].map((item) => (
              <div key={item.step} className="group cursor-pointer rounded-2xl border border-blue-100 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                  {item.step}
                </div>
                <h3 className="mb-3 font-semibold text-xl text-blue-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-blue-600/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-bold text-lg text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              RoboLearn
            </p>
            <p className="text-sm text-blue-300">© 2025 RoboLearn. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
