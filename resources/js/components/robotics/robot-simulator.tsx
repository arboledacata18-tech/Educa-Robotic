import type { Caja } from '@/lib/robotics/engine';
import { obstaculos, marcasCajas, destinoRobot } from '@/lib/robotics/engine';

interface Props {
  robot: { x: number; y: number; dir: number };
  cajas: Caja[];
  stepSize: number;
  ancho: number;
  alto: number;
}

export default function RobotSimulator({ robot, cajas, stepSize, ancho, alto }: Props) {
  const cajaEnMarca = (cx: number, cy: number) =>
    marcasCajas.some((m) => m.x === cx && m.y === cy);

  return (
    <div
      id="simulador"
      className="relative flex-1 overflow-hidden"
      style={{
        background: '#0F172A',
        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(96, 165, 250, 0.05) 1px, transparent 0)',
        backgroundSize: '50px 50px',
      }}
    >
      {Array.from({ length: Math.floor(ancho / stepSize) }).map((_, xi) =>
        Array.from({ length: Math.floor(alto / stepSize) }).map((_, yi) => (
          <div
            key={`celda-${xi}-${yi}`}
            className="pointer-events-none absolute"
            style={{
              left: xi * stepSize,
              bottom: yi * stepSize,
              width: stepSize,
              height: stepSize,
              border: '1px solid rgba(96, 165, 250, 0.08)',
            }}
          />
        )),
      )}

      {obstaculos.map(([ox, oy], i) => (
        <div
          key={`obs-${i}`}
          className="pointer-events-none absolute z-[2] rounded"
          style={{
            left: ox,
            bottom: oy,
            width: stepSize - 4,
            height: stepSize - 4,
            background: '#475569',
          }}
        />
      ))}

      {marcasCajas.map((m, i) => (
        <div
          key={`mc-${i}`}
          className="pointer-events-none absolute z-[1] flex items-center justify-center rounded-lg"
          style={{
            left: m.x,
            bottom: m.y,
            width: stepSize - 4,
            height: stepSize - 4,
            border: '2px dashed rgba(251, 191, 36, 0.4)',
            background: cajas.some((c) => c.x === m.x && c.y === m.y)
              ? 'rgba(16, 185, 129, 0.1)'
              : 'rgba(251, 191, 36, 0.05)',
          }}
        />
      ))}

      <div
        className="pointer-events-none absolute z-[1] rounded-xl"
        style={{
          left: destinoRobot.x,
          bottom: destinoRobot.y,
          width: stepSize - 4,
          height: stepSize - 4,
          border: '2px dashed rgba(96, 165, 250, 0.4)',
          background: 'rgba(96, 165, 250, 0.06)',
        }}
      />

      {cajas.map((c, i) => {
        const enMarca = cajaEnMarca(c.x, c.y);
        return (
          <div
            key={`caja-${i}`}
            className="pointer-events-none absolute z-[5] flex items-center justify-center rounded-md text-[10px] font-bold text-white transition-all duration-300"
            style={{
              left: c.x,
              bottom: c.y,
              width: stepSize - 4,
              height: stepSize - 4,
              background: enMarca
                ? 'linear-gradient(135deg, #10B981, #047857)'
                : 'linear-gradient(135deg, #D97706, #92400E)',
              border: enMarca ? '2px solid #34D399' : '2px solid #F59E0B',
              boxShadow: enMarca ? '0 0 20px rgba(16, 185, 129, 0.5)' : '0 4px 12px rgba(217, 119, 6, 0.3)',
            }}
          >
            {enMarca ? '✓' : i + 1}
          </div>
        );
      })}

      <div
        className="pointer-events-none absolute z-10 flex items-center justify-center rounded-lg"
        style={{
          left: robot.x,
          bottom: robot.y,
          width: stepSize - 6,
          height: stepSize - 6,
          background: 'linear-gradient(135deg, #60A5FA, #2563EB)',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          transform: `rotate(${robot.dir - 90}deg)`,
          transition: 'all 0.25s ease',
        }}
      >
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
          />
        </svg>
      </div>
    </div>
  );
}
