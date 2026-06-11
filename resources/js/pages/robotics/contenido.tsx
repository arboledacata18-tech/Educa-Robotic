import { Head, Link } from '@inertiajs/react';
import { modulos } from '@/lib/robotics/contenido-data';

export default function Contenido() {
  return (
    <>
      <Head title="Contenido - RoboLearn" />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-blue-300/20 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-600">
              Plan de Estudios
            </span>
            <h1
              className="mt-4 font-bold text-3xl text-blue-900 sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contenido del Curso
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-blue-600/70">
              5 módulos con 20 lecciones prácticas. Desde los fundamentos hasta proyectos avanzados.
            </p>
          </div>

          <div className="mx-auto mb-16 max-w-3xl">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-600">Progreso general</p>
                  <p className="text-xs text-blue-400">3 de 20 lecciones completadas</p>
                </div>
                <span className="font-bold text-2xl text-blue-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  15%
                </span>
              </div>
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-[15%] rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500" />
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            {modulos.map((modulo) => {
              const completadas = modulo.lecciones.filter((l) => l.completado).length;
              const total = modulo.lecciones.length;
              return (
                <Link
                  key={modulo.id}
                  href={`/robotics/contenido/${modulo.id}`}
                  className="group block rounded-2xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10 sm:p-8"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600 transition-colors group-hover:bg-blue-200">
                        {String(modulo.id).padStart(2, '0')}
                      </div>
                      <div>
                        <h2
                          className="font-semibold text-lg text-blue-900 sm:text-xl"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {modulo.titulo}
                        </h2>
                        <p className="text-xs text-blue-500">{modulo.desc}</p>
                      </div>
                    </div>
                    <span className="whitespace-nowrap text-xs font-semibold text-blue-500">
                      {completadas}/{total}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {modulo.lecciones.map((lec, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-xl bg-blue-50/50 px-4 py-3 transition-colors hover:bg-blue-100/50"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                              lec.completado
                                ? 'bg-blue-600 text-white'
                                : 'bg-blue-100 text-blue-400'
                            }`}
                          >
                            {lec.completado ? '✓' : ''}
                          </span>
                          <span className={`text-xs font-medium ${lec.completado ? 'text-blue-600' : 'text-blue-500'}`}>
                            {lec.titulo}
                          </span>
                        </div>
                        <span className="text-xs text-blue-400">{lec.duracion}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/robotics/playground"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-600/40"
            >
              Ir al Laboratorio de Práctica
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-blue-300">© 2025 RoboLearn. Todos los derechos reservados.</div>
        </div>
      </footer>
    </>
  );
}
