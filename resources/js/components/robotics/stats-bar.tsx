interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '12K+', label: 'Estudiantes Activos' },
  { value: '340+', label: 'Horas de Contenido' },
  { value: '98%', label: 'Satisfacción' },
  { value: '4.8', label: 'Calificación Promedio' },
];

export default function StatsBar() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="cursor-pointer">
              <p className="font-bold text-3xl text-blue-600 sm:text-4xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {s.value}
              </p>
              <p className="mt-1 text-sm text-blue-600/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
