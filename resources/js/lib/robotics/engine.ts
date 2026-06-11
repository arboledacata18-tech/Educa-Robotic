import { useState, useCallback, useRef } from 'react';

const P = 40;
const ANCHO = 280;
const ALTO = 240;

export interface Caja {
  x: number;
  y: number;
}

interface Robot {
  x: number;
  y: number;
  dir: number;
}

export const posicionInicial = { x: 40, y: 40, dir: 90 };

export const obstaculos: [number, number][] = [];

export const cajasIniciales: Caja[] = [
  { x: 80, y: 40 },
  { x: 80, y: 80 },
];

export const marcasCajas: Caja[] = [
  { x: 200, y: 40 },
  { x: 200, y: 80 },
];

export const destinoRobot = { x: 240, y: 200 };

function sigCelda(x: number, y: number, dir: number) {
  let nx = x;
  let ny = y;
  if (dir === 0) ny += P;
  else if (dir === 90) nx += P;
  else if (dir === 180) ny -= P;
  else nx -= P;
  return { nx, ny };
}

function esValido(x: number, y: number, cajas: Caja[], ignorarIdx?: number) {
  if (x < 0 || x >= ANCHO || y < 0 || y >= ALTO) return false;
  if (obstaculos.some((o) => o[0] === x && o[1] === y)) return false;
  if (cajas.some((c, i) => c.x === x && c.y === y && i !== ignorarIdx)) return false;
  return true;
}

export function useRobotEngine() {
  const [robot, setRobot] = useState<Robot>({ ...posicionInicial });
  const [cajas, setCajas] = useState<Caja[]>(cajasIniciales.map((c) => ({ ...c })));
  const [ejecutando, setEjecutando] = useState(false);
  const [completado, setCompletado] = useState(false);
  const ejecutandoRef = useRef(false);

  const reiniciar = useCallback(() => {
    setRobot({ ...posicionInicial });
    setCajas(cajasIniciales.map((c) => ({ ...c })));
    setEjecutando(false);
    setCompletado(false);
    ejecutandoRef.current = false;
  }, []);

  const syncRobot = useCallback((r: Robot, c: Caja[]) => {
    setRobot({ ...r });
    setCajas(c.map((ca) => ({ ...ca })));
  }, []);

  const idxCaja = useCallback((x: number, y: number, c: Caja[]) => {
    return c.findIndex((ca) => ca.x === x && ca.y === y);
  }, []);

  const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const avanzar = useCallback(async () => {
    if (!ejecutandoRef.current) return;
    const r = { ...robot };
    const c = cajas.map((ca) => ({ ...ca }));
    const { nx, ny } = sigCelda(r.x, r.y, r.dir);
    const ic = idxCaja(nx, ny, c);
    if (ic >= 0) {
      const { nx: nx2, ny: ny2 } = sigCelda(nx, ny, r.dir);
      if (esValido(nx2, ny2, c, ic)) {
        c[ic].x = nx2;
        c[ic].y = ny2;
        r.x = nx;
        r.y = ny;
        syncRobot(r, c);
      }
    } else if (esValido(nx, ny, c)) {
      r.x = nx;
      r.y = ny;
      syncRobot(r, c);
    }
    await delay(350);
  }, [robot, cajas, syncRobot, idxCaja]);

  const retroceder = useCallback(async () => {
    if (!ejecutandoRef.current) return;
    const r = { ...robot };
    const c = cajas.map((ca) => ({ ...ca }));
    const dirInv = (r.dir + 180) % 360;
    const { nx, ny } = sigCelda(r.x, r.y, dirInv);
    const ic = idxCaja(nx, ny, c);
    if (ic >= 0) {
      const { nx: nx2, ny: ny2 } = sigCelda(nx, ny, dirInv);
      if (esValido(nx2, ny2, c, ic)) {
        c[ic].x = nx2;
        c[ic].y = ny2;
        r.x = nx;
        r.y = ny;
        syncRobot(r, c);
      }
    } else if (esValido(nx, ny, c)) {
      r.x = nx;
      r.y = ny;
      syncRobot(r, c);
    }
    await delay(350);
  }, [robot, cajas, syncRobot, idxCaja]);

  const girarIzquierda = useCallback(async () => {
    if (!ejecutandoRef.current) return;
    const r = { ...robot };
    r.dir = (r.dir - 90 + 360) % 360;
    setRobot(r);
    await delay(150);
  }, [robot]);

  const girarDerecha = useCallback(async () => {
    if (!ejecutandoRef.current) return;
    const r = { ...robot };
    r.dir = (r.dir + 90) % 360;
    setRobot(r);
    await delay(150);
  }, [robot]);

  const hayObstaculo = useCallback(() => {
    const { nx, ny } = sigCelda(robot.x, robot.y, robot.dir);
    if (nx < 0 || nx >= ANCHO || ny < 0 || ny >= ALTO) return true;
    return obstaculos.some((o) => o[0] === nx && o[1] === ny);
  }, [robot]);

  const hayCaja = useCallback(() => {
    const { nx, ny } = sigCelda(robot.x, robot.y, robot.dir);
    return cajas.some((c) => c.x === nx && c.y === ny);
  }, [robot, cajas]);

  const algunaCajaEnDestino = useCallback(() => {
    return marcasCajas.some((m) => cajas.some((c) => c.x === m.x && c.y === m.y));
  }, [cajas]);

  const todasCajasListas = useCallback(() => {
    return marcasCajas.every((m) => cajas.some((c) => c.x === m.x && c.y === m.y));
  }, [cajas]);

  const robotEnDestino = useCallback(() => {
    return robot.x === destinoRobot.x && robot.y === destinoRobot.y;
  }, [robot]);

  const misionCompleta = todasCajasListas() && robotEnDestino();

  const ejecutarCodigo = useCallback(
    async (codigo: string) => {
      reiniciar();
      await delay(100);
      if (!codigo.trim()) return;
      setEjecutando(true);
      ejecutandoRef.current = true;
      try {
        const func = new Function(
          'avanzar', 'retroceder', 'girarIzquierda', 'girarDerecha',
          'hayObstaculo', 'hayCaja', 'algunaCajaEnDestino', 'todasCajasListas', 'robotEnDestino',
          'return (async () => {\n' + codigo + '\n})()',
        );
        await func(
          avanzar, retroceder, girarIzquierda, girarDerecha,
          hayObstaculo, hayCaja, algunaCajaEnDestino, todasCajasListas, robotEnDestino,
        );
      } catch {
        //
      }
      ejecutandoRef.current = false;
      setEjecutando(false);
      setCompletado(misionCompleta);
    },
    [reiniciar, avanzar, retroceder, girarIzquierda, girarDerecha, hayObstaculo, hayCaja, algunaCajaEnDestino, todasCajasListas, robotEnDestino, misionCompleta],
  );

  return {
    robot,
    cajas,
    ejecutando,
    completado,
    avanzar,
    retroceder,
    girarIzquierda,
    girarDerecha,
    hayObstaculo,
    hayCaja,
    algunaCajaEnDestino,
    todasCajasListas,
    robotEnDestino,
    misionCompleta,
    reiniciar,
    ejecutarCodigo,
    ANCHO,
    ALTO,
    P,
  };
}
