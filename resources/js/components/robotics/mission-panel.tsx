import type { Caja } from '@/lib/robotics/engine';
import { marcasCajas, destinoRobot } from '@/lib/robotics/engine';

interface Props {
  cajas: Caja[];
  robot: { x: number; y: number };
  misionCompleta: boolean;
  ejecutando: boolean;
  completado: boolean;
  reiniciar: () => void;
}

export default function MissionPanel({ cajas, robot, misionCompleta, ejecutando, completado, reiniciar }: Props) {
  const cajasEnMarca = marcasCajas.filter((m) => cajas.some((c) => c.x === m.x && c.y === m.y)).length;

  return (
    <div className="rounded-2xl border border-blue-800/50 bg-blue-900/20 p-5 shadow-lg backdrop-blur-sm">
      <h3 className="mb-4 font-semibold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Misión
      </h3>
      <ul className="mb-5 space-y-3">
        {marcasCajas.map((m, i) => {
          const ok = cajas.some((c) => c.x === m.x && c.y === m.y);
          return (
            <li key={i} className="flex items-center gap-2 text-xs">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  ok
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}
              >
                {ok ? '✓' : i + 1}
              </span>
              <span className={ok ? 'text-green-400' : 'text-yellow-400'}>
                Llevar caja {i + 1} a la zona marcada
              </span>
            </li>
          );
        })}
        <li className="flex items-center gap-2 text-xs">
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
              robot.x === destinoRobot.x && robot.y === destinoRobot.y
                ? 'bg-green-500/20 text-green-400'
                : 'bg-blue-500/20 text-blue-400'
            }`}
          >
            {robot.x === destinoRobot.x && robot.y === destinoRobot.y ? '✓' : 'R'}
          </span>
          <span
            className={
              robot.x === destinoRobot.x && robot.y === destinoRobot.y
                ? 'text-green-400'
                : 'text-blue-400'
            }
          >
            Llevar robot a la meta
          </span>
        </li>
      </ul>
      <div className="mb-5 h-2 overflow-hidden rounded-full bg-blue-900/50">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-500"
          style={{ width: `${(cajasEnMarca / marcasCajas.length) * 100}%` }}
        />
      </div>
      <div className="flex justify-between text-xs">
        <span className="text-blue-300/70">
          Progreso: {cajasEnMarca}/{marcasCajas.length}
        </span>
        {completado && !ejecutando && (
          <button
            onClick={reiniciar}
            className="cursor-pointer rounded-lg bg-green-600 px-3 py-1 font-semibold text-white hover:bg-green-500"
          >
            ¡Completado! Reintentar
          </button>
        )}
      </div>
      {misionCompleta && !ejecutando && (
        <div className="mt-4 rounded-xl bg-green-500/10 p-4 text-center">
          <p className="font-bold text-green-400 text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ¡Misión Cumplida!
          </p>
          <p className="mt-1 text-xs text-green-400/70">Has programado el robot exitosamente</p>
        </div>
      )}
    </div>
  );
}
