'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useClickOutside',
	description_es:
		'Detecta clics fuera del elemento referenciado y ejecuta un manejador.',
	description_en:
		'Detects clicks outside the referenced element and calls a handler.',
	usage: `import { useClickOutside } from '@kivora/react';

function Demo() {
  const ref = useClickOutside(() => console.log('clicked outside'));
  return <div ref={ref}>Content</div>;
}`,
	params: [
		{
			name: 'handler',
			type: '() => void',
			description_es:
				'Función que se ejecuta al hacer clic fuera del elemento.',
			description_en:
				'Function called when a click occurs outside the element.',
		},
		{
			name: 'events',
			type: 'string[] | null',
			defaultValue: "['mousedown', 'touchstart']",
			description_es: 'Eventos del DOM que activan el manejador.',
			description_en: 'DOM events that trigger the handler.',
		},
		{
			name: 'nodes',
			type: 'HTMLElement[]',
			defaultValue: 'undefined',
			description_es:
				'Nodos adicionales considerados como "dentro" del elemento.',
			description_en:
				'Additional nodes considered as "inside" the element.',
		},
	],
	returns: [
		{
			name: 'ref',
			type: 'React.RefObject<T | null>',
			description_es: 'Ref que se adjunta al elemento a observar.',
			description_en: 'Ref to attach to the element to observe.',
		},
	],
};

export default function UseClickOutsidePage() {
	return <HookDoc config={config} />;
}
