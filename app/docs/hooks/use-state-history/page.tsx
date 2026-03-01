'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useStateHistory',
	description_es:
		'Gestiona el historial de un valor de estado, permitiendo navegar hacia atrás y hacia adelante como un historial de navegador.',
	description_en:
		'Manages the history of a state value, allowing backward and forward navigation like a browser history.',
	usage: `import { useStateHistory } from '@kivora/react';

function Demo() {
  const { state, history, pointer, set, back, forward, reset } = useStateHistory('initial');

  return (
    <div>
      <p>Current: {state}</p>
      <p>History: {history.join(' → ')}</p>
      <p>Pointer: {pointer}</p>
      <button onClick={() => set('new value')}>Set new value</button>
      <button onClick={back} disabled={pointer === 0}>Back</button>
      <button onClick={forward} disabled={pointer === history.length - 1}>Forward</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,
	params: [
		{
			name: 'initialValue',
			type: 'T',
			required: true,
			description_es:
				'Valor inicial del estado. Constituye la primera entrada del historial.',
			description_en:
				'Initial state value. Forms the first entry of the history.',
		},
	],
	returns: [
		{
			name: 'state',
			type: 'T',
			description_es:
				'Valor actual del estado (posición del puntero en el historial).',
			description_en:
				'Current state value (pointer position in history).',
		},
		{
			name: 'history',
			type: 'T[]',
			description_es:
				'Array completo de todos los valores registrados en el historial.',
			description_en: 'Full array of all recorded history values.',
		},
		{
			name: 'pointer',
			type: 'number',
			description_es: 'Índice actual dentro del array de historial.',
			description_en: 'Current index within the history array.',
		},
		{
			name: 'set',
			type: '(value: T) => void',
			description_es:
				'Establece un nuevo valor, descartando el historial futuro y agregando la nueva entrada.',
			description_en:
				'Sets a new value, discarding future history and appending the new entry.',
		},
		{
			name: 'back',
			type: '(steps?: number) => void',
			description_es:
				'Navega hacia atrás en el historial el número de pasos indicado (por defecto 1).',
			description_en:
				'Navigates backward in history by the given number of steps (default 1).',
		},
		{
			name: 'forward',
			type: '(steps?: number) => void',
			description_es:
				'Navega hacia adelante en el historial el número de pasos indicado (por defecto 1).',
			description_en:
				'Navigates forward in history by the given number of steps (default 1).',
		},
		{
			name: 'reset',
			type: '() => void',
			description_es: 'Reinicia el historial al valor inicial.',
			description_en: 'Resets the history to the initial value.',
		},
	],
};

export default function UseStateHistoryPage() {
	return <HookDoc config={config} />;
}
