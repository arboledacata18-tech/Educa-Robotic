import { Link } from '@inertiajs/react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/robotics/contenido', label: 'Contenido' },
  { href: '/robotics/playground', label: 'Laboratorio' },
];

export default function RoboticsHeader() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <div className="rounded-2xl border border-white/20 bg-white/90 px-6 py-3 shadow-lg shadow-blue-900/5 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex cursor-pointer items-center gap-2">
            <svg
              className="h-7 w-7 text-blue-600 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
              />
            </svg>
            <span className="font-semibold text-xl text-blue-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
              RoboLearn
            </span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="cursor-pointer text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/robotics/playground"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-600/40"
            >
              Ir al Laboratorio
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
