import * as Blockly from 'blockly';
import { javascriptGenerator, Order } from 'blockly/javascript';
import 'blockly/blocks';
import 'blockly/msg/es';

const COLS = { mov: '#3B82F6', sens: '#22C55E' };

Blockly.Blocks['mov_adelante'] = {
  init() {
    this.appendDummyInput().appendField('avanzar');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLS.mov);
    this.setTooltip('Avanza una casilla. Si hay una caja la empuja.');
  },
};

Blockly.Blocks['mov_atras'] = {
  init() {
    this.appendDummyInput().appendField('retroceder');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLS.mov);
  },
};

Blockly.Blocks['mov_girar_izq'] = {
  init() {
    this.appendDummyInput().appendField('girar izquierda');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLS.mov);
  },
};

Blockly.Blocks['mov_girar_der'] = {
  init() {
    this.appendDummyInput().appendField('girar derecha');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLS.mov);
  },
};

Blockly.Blocks['sens_obstaculo'] = {
  init() {
    this.appendDummyInput().appendField('¿hay obstáculo?');
    this.setOutput(true, 'Boolean');
    this.setColour(COLS.sens);
  },
};

Blockly.Blocks['sens_caja'] = {
  init() {
    this.appendDummyInput().appendField('¿hay caja?');
    this.setOutput(true, 'Boolean');
    this.setColour(COLS.sens);
  },
};

Blockly.Blocks['sens_caja_destino'] = {
  init() {
    this.appendDummyInput().appendField('¿caja en destino?');
    this.setOutput(true, 'Boolean');
    this.setColour(COLS.sens);
  },
};

Blockly.Blocks['sens_todas_cajas'] = {
  init() {
    this.appendDummyInput().appendField('¿todas cajas listas?');
    this.setOutput(true, 'Boolean');
    this.setColour(COLS.sens);
  },
};

Blockly.Blocks['sens_robot_destino'] = {
  init() {
    this.appendDummyInput().appendField('¿robot en destino?');
    this.setOutput(true, 'Boolean');
    this.setColour(COLS.sens);
  },
};

javascriptGenerator.forBlock['mov_adelante'] = () => 'await avanzar();\n';
javascriptGenerator.forBlock['mov_atras'] = () => 'await retroceder();\n';
javascriptGenerator.forBlock['mov_girar_izq'] = () => 'await girarIzquierda();\n';
javascriptGenerator.forBlock['mov_girar_der'] = () => 'await girarDerecha();\n';
javascriptGenerator.forBlock['sens_obstaculo'] = () => ['hayObstaculo()', Order.ATOMIC];
javascriptGenerator.forBlock['sens_caja'] = () => ['hayCaja()', Order.ATOMIC];
javascriptGenerator.forBlock['sens_caja_destino'] = () => ['algunaCajaEnDestino()', Order.ATOMIC];
javascriptGenerator.forBlock['sens_todas_cajas'] = () => ['todasCajasListas()', Order.ATOMIC];
javascriptGenerator.forBlock['sens_robot_destino'] = () => ['robotEnDestino()', Order.ATOMIC];

export const toolbox: Blockly.utils.toolbox.ToolboxDefinition = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Movimiento',
      colour: COLS.mov,
      contents: [
        { kind: 'block', type: 'mov_adelante' },
        { kind: 'block', type: 'mov_atras' },
        { kind: 'block', type: 'mov_girar_izq' },
        { kind: 'block', type: 'mov_girar_der' },
      ],
    },
    {
      kind: 'category',
      name: 'Sensores',
      colour: COLS.sens,
      contents: [
        { kind: 'block', type: 'sens_obstaculo' },
        { kind: 'block', type: 'sens_caja' },
        { kind: 'block', type: 'sens_caja_destino' },
        { kind: 'block', type: 'sens_todas_cajas' },
        { kind: 'block', type: 'sens_robot_destino' },
      ],
    },
    {
      kind: 'category',
      name: 'Control',
      colour: '#F59E0B',
      contents: [
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'controls_repeat_ext' },
        { kind: 'block', type: 'controls_whileUntil' },
      ],
    },
    {
      kind: 'category',
      name: 'Lógica',
      colour: '#EF4444',
      contents: [
        { kind: 'block', type: 'logic_compare' },
        { kind: 'block', type: 'logic_operation' },
        { kind: 'block', type: 'logic_boolean' },
        { kind: 'block', type: 'logic_negate' },
      ],
    },
    {
      kind: 'category',
      name: 'Matemáticas',
      colour: '#8B5CF6',
      contents: [{ kind: 'block', type: 'math_number' }],
    },
  ],
};

export const XML_EJEMPLO = `<xml xmlns="https://developers.google.com/blockly/xml">
<block type="controls_repeat_ext" x="20" y="20">
  <value name="TIMES"><block type="math_number"><field name="NUM">4</field></block></value>
  <statement name="DO"><block type="mov_adelante"></block></statement>
</block>
<block type="mov_girar_izq" x="20" y="120"></block>
<block type="controls_repeat_ext" x="20" y="160">
  <value name="TIMES"><block type="math_number"><field name="NUM">3</field></block></value>
  <statement name="DO"><block type="mov_adelante"></block></statement>
</block>
<block type="mov_girar_izq" x="20" y="260"></block>
<block type="controls_repeat_ext" x="20" y="300">
  <value name="TIMES"><block type="math_number"><field name="NUM">3</field></block></value>
  <statement name="DO"><block type="mov_adelante"></block></statement>
</block>
<block type="mov_girar_izq" x="20" y="400"></block>
<block type="controls_repeat_ext" x="20" y="440">
  <value name="TIMES"><block type="math_number"><field name="NUM">2</field></block></value>
  <statement name="DO"><block type="mov_adelante"></block></statement>
</block>
</xml>`;
