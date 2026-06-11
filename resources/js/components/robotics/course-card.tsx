import { Link } from '@inertiajs/react';

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  lessons: number;
  level: string;
  levelColor: string;
  href: string;
}

export default function CourseCard({ icon, title, description, lessons, level, levelColor, href }: CourseCardProps) {
  return (
    <Link
      href={href}
      className="block cursor-pointer rounded-2xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 transition-colors duration-200 group-hover:bg-blue-200">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-xl text-blue-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-blue-600/70">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-blue-500">{lessons} lecciones</span>
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: levelColor + '20', color: levelColor }}
        >
          {level}
        </span>
      </div>
    </Link>
  );
}
