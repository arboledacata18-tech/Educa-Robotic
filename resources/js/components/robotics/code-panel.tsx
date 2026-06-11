import { useRef, useEffect } from 'react';

interface Props {
  code: string;
  ejecutando: boolean;
  onClickEjecutar: () => void;
  onClickReiniciar: () => void;
}

export default function CodePanel({ code, ejecutando, onClickEjecutar, onClickReiniciar }: Props) {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (preRef.current) {
      preRef.current.scrollTop = preRef.current.scrollHeight;
    }
  }, [code]);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-blue-800/50 bg-blue-950/60 shadow-lg backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-blue-800/30 bg-blue-900/30 px-5 py-3">
        <span className="flex items-center gap-2 text-sm font-semibold text-blue-200" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
          Código Generado
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={onClickEjecutar}
            disabled={ejecutando}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {ejecutando ? (
              <>
                <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Ejecutando...
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Ejecutar
              </>
            )}
          </button>
          <button
            onClick={onClickReiniciar}
            disabled={ejecutando}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-blue-900/50 px-3.5 py-1.5 text-xs font-semibold text-blue-300 shadow-sm transition-all hover:bg-blue-800/50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
            </svg>
            Reiniciar
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden bg-[#0F172A] p-4">
        <pre ref={preRef} className="h-full overflow-auto font-mono text-xs leading-relaxed text-green-400 scrollbar-thin">
          {code || '// Arrastra bloques al área de trabajo'}
        </pre>
      </div>
    </div>
  );
}
