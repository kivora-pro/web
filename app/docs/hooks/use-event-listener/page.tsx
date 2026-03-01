'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useEventListener',
	description_es:
		'Adjunta un event listener a window al montar el componente y lo elimina al desmontarlo.',
	description_en:
		'Attaches an event listener to window on mount and removes it on unmount.',
	usage: `import { useEventListener } from '@kivora/react';

function Demo() {
  useEventListener('resize', (event) => {
    console.log('window resized', event);
  });
  return <div>Resize the window</div>;
}`,
	params: [
		{
			name: 'type',
			type: 'K extends keyof WindowEventMap',
			description_es: 'Tipo de evento del DOM a escuchar.',
			description_en: 'DOM event type to listen to.',
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
			type: 'AddEventListenerOptions',
			defaultValue: 'undefined',
			description_es:
				'Opciones de addEventListener (capture, passive, once).',
			description_en:
				'addEventListener options (capture, passive, once).',
		},
	],
	returns: [],
};

export default function UseEventListenerPage() {
	return <HookDoc config={config} />;
}
