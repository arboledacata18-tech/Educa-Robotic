import { Head, Link } from '@inertiajs/react';
import { modulos } from '@/lib/robotics/contenido-data';

interface Props {
  id: string;
}

export default function DetalleTema({ id }: Props) {
  const modulo = modulos.find((m) => m.id === Number(id));

  if (!modulo) {
    return (
      <>
        <Head title="Tema no encontrado - RoboLearn" />
        <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24">
          <div className="text-center">
            <h1 className="font-bold text-4xl text-blue-900">Tema no encontrado</h1>
            <p className="mt-4 text-blue-600/70">El módulo que buscas no existe.</p>
            <Link
              href="/robotics/contenido"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700"
            >
              Volver al contenido
            </Link>
          </div>
        </section>
      </>
    );
  }

  const completadas = modulo.lecciones.filter((l) => l.completado).length;
  const total = modulo.lecciones.length;
  const progreso = Math.round((completadas / total) * 100);

  return (
    <>
      <Head title={`${modulo.titulo} - RoboLearn`} />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-blue-300/20 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/robotics/contenido"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver al plan de estudios
          </Link>

          <div className="mb-10">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-600">
              Módulo {String(modulo.id).padStart(2, '0')}
            </span>
            <h1
              className="mt-4 font-bold text-3xl text-blue-900 sm:text-4xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {modulo.titulo}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-blue-600/70">{modulo.desc}</p>
          </div>

          <div className="mb-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-600">Progreso del módulo</p>
                <p className="text-xs text-blue-400">
                  {completadas} de {total} lecciones completadas
                </p>
              </div>
              <span
                className="font-bold text-2xl text-blue-600"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {progreso}%
              </span>
            </div>
            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-blue-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
                style={{ width: `${progreso}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            {modulo.lecciones.map((lec, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-200 hover:border-blue-200 hover:shadow-md sm:p-6"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                      lec.completado
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 text-blue-400 group-hover:bg-blue-200'
                    }`}
                  >
                    {lec.completado ? (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold text-sm sm:text-base ${
                        lec.completado ? 'text-blue-600' : 'text-blue-900'
                      }`}
                    >
                      {lec.titulo}
                    </h3>
                  </div>
                  <span className="flex-shrink-0 text-xs font-medium text-blue-400">
                    {lec.duracion}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/robotics/contenido"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-all hover:border-blue-300 hover:bg-blue-50"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Más módulos
            </Link>
            <Link
              href="/robotics/playground"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-600/40"
            >
              Practicar en el Laboratorio
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
