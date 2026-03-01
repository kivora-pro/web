'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useWindowEvent',
	description_es:
		'Equivalente a addEventListener sobre window pero gestionado por el ciclo de vida de React.',
	description_en:
		'Same as addEventListener on window but managed by the React lifecycle.',
	usage: `import { useWindowEvent } from '@kivora/react';

function Demo() {
  useWindowEvent('keydown', (event) => {
    console.log('key pressed', event.key);
  });
  return <div>Press any key</div>;
}`,
	params: [
		{
			name: 'type',
			type: 'K extends keyof WindowEventMap',
			description_es: 'Tipo de evento del DOM a escuchar en window.',
			description_en: 'DOM event type to listen on window.',
		},
		{
			name: 'listener',
			type: '(evt: WindowEventMap[K]) => void',
			description_es:
				'Función que se ejecuta cuando el evento es disparado.',
			description_en: 'Function called when the event is fired.',
		},
		{
			name: 'options',
			type: 'boolean | AddEventListenerOptions',
			defaultValue: 'undefined',
			description_es:
				'Opciones de addEventListener o valor booleano para useCapture.',
			description_en:
				'addEventListener options or boolean for useCapture.',
		},
	],
	returns: [],
};

export default function UseWindowEventPage() {
	return <HookDoc config={config} />;
}
