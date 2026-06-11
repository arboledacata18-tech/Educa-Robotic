import { useCallback, useRef, useState } from 'react';
import { Head } from '@inertiajs/react';
import BlocklyWorkspace from '@/components/robotics/blockly-workspace';
import RobotSimulator from '@/components/robotics/robot-simulator';
import CodePanel from '@/components/robotics/code-panel';
import MissionPanel from '@/components/robotics/mission-panel';
import { useRobotEngine } from '@/lib/robotics/engine';

export default function Playground() {
  const engine = useRobotEngine();
  const [activeTab, setActiveTab] = useState<'blocks' | 'code'>('blocks');
  const [code, setCode] = useState('');
  const ejecutarRef = useRef<(() => void) | null>(null);

  const handleCodeChange = useCallback((nuevoCodigo: string) => {
    setCode(nuevoCodigo);
  }, []);

  const handleReiniciar = useCallback(() => {
    engine.reiniciar();
  }, [engine]);

  const handleEjecutar = useCallback(() => {
    engine.ejecutarCodigo(code);
  }, [engine, code]);

  return (
    <>
      <Head title="Laboratorio - RoboLearn" />

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-20">
        <div className="mx-auto flex h-[calc(100vh-5rem)] max-w-7xl flex-col gap-4 px-4 pb-4 sm:px-6 lg:px-8">

          <div className="flex flex-shrink-0 items-center justify-between">
            <div>
              <h1
                className="font-bold text-2xl text-white sm:text-3xl"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Laboratorio de Robótica
              </h1>
              <p className="text-sm text-blue-300/70">
                Programa el robot usando bloques para completar la misión.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleReiniciar}
                disabled={engine.ejecutando}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-blue-700/50 bg-blue-900/50 px-5 py-2.5 text-sm font-semibold text-blue-200 shadow-sm transition-all hover:border-blue-600 hover:bg-blue-800/50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                </svg>
                Reiniciar
              </button>
              <button
                onClick={handleEjecutar}
                disabled={engine.ejecutando}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {engine.ejecutando ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Ejecutando...
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    Ejecutar
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-4 lg:flex-row">
            <div className="flex min-h-0 flex-1 flex-col lg:w-[60%]">
              <div className="mb-3 flex flex-shrink-0 items-center gap-2">
                <button
                  onClick={() => setActiveTab('blocks')}
                  className={`cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                    activeTab === 'blocks'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white/10 text-blue-300 hover:bg-white/20'
                  }`}
                >
                  Bloques
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                    activeTab === 'code'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white/10 text-blue-300 hover:bg-white/20'
                  }`}
                >
                  Código
                </button>
              </div>

              <div className="flex min-h-0 flex-1">
                {activeTab === 'blocks' ? (
                  <BlocklyWorkspace onCodeChange={handleCodeChange} onEjecutarRef={ejecutarRef} />
                ) : (
                  <CodePanel
                    code={code}
                    ejecutando={engine.ejecutando}
                    onClickEjecutar={handleEjecutar}
                    onClickReiniciar={handleReiniciar}
                  />
                )}
              </div>
            </div>

            <div className="flex min-h-0 flex-col gap-4 lg:w-[40%]">
              <div className="flex min-h-0 flex-[2] flex-col overflow-hidden rounded-2xl border border-blue-800/50 bg-blue-900/20 shadow-lg">
                <div className="flex flex-shrink-0 items-center gap-2 border-b border-blue-800/30 px-4 py-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 shadow-sm shadow-green-400/50" />
                  <span className="text-xs font-medium text-blue-300">Simulador</span>
                </div>
                <div className="flex min-h-0 flex-1">
                  <RobotSimulator
                    robot={engine.robot}
                    cajas={engine.cajas}
                    stepSize={engine.P}
                    ancho={engine.ANCHO}
                    alto={engine.ALTO}
                  />
                </div>
              </div>

              <div className="flex-shrink-0">
                <MissionPanel
                  cajas={engine.cajas}
                  robot={engine.robot}
                  misionCompleta={engine.misionCompleta}
                  ejecutando={engine.ejecutando}
                  completado={engine.completado}
                  reiniciar={handleReiniciar}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
