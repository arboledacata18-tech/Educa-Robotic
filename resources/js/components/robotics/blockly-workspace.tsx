import { useEffect, useRef, useCallback } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { toolbox, XML_EJEMPLO } from '@/lib/robotics/blocks';

interface Props {
  onCodeChange: (code: string) => void;
  onEjecutarRef: React.MutableRefObject<(() => void) | null>;
}

export default function BlocklyWorkspace({ onCodeChange, onEjecutarRef }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);

  useEffect(() => {
    if (!containerRef.current || workspaceRef.current) return;

    const workspace = Blockly.inject(containerRef.current, {
      toolbox,
      grid: { spacing: 20, length: 3, colour: '#DBEAFE', snap: true },
      zoom: { controls: true, wheel: true, startScale: 0.9 },
      trashcan: true,
      move: { scrollbars: true, drag: true, wheel: true },
    });

    workspace.addChangeListener(() => {
      const code = javascriptGenerator.workspaceToCode(workspace);
      onCodeChange(code || '// Arrastra bloques al área de trabajo');
    });

    workspaceRef.current = workspace;

    return () => {
      workspace.dispose();
      workspaceRef.current = null;
    };
  }, []);

  const limpiar = useCallback(() => {
    workspaceRef.current?.clear();
    onCodeChange('// Arrastra bloques al área de trabajo');
  }, [onCodeChange]);

  const cargarEjemplo = useCallback(() => {
    if (!workspaceRef.current) return;
    workspaceRef.current.clear();
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(XML_EJEMPLO), workspaceRef.current);
  }, []);

  onEjecutarRef.current = () => {
    if (!workspaceRef.current) return;
    limpiar();
    cargarEjemplo();
  };

  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-blue-800/50 bg-blue-950/60 shadow-lg backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-blue-800/30 bg-blue-900/30 px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs font-medium text-blue-400">desafio-cajas.xml</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={cargarEjemplo}
            className="cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 transition-all hover:bg-blue-800/50 hover:text-blue-200"
          >
            Ejemplo
          </button>
          <button
            onClick={limpiar}
            className="cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 transition-all hover:bg-blue-800/50 hover:text-blue-200"
          >
            Limpiar
          </button>
        </div>
      </div>
      <div ref={containerRef} className="flex-1" />
    </div>
  );
}
