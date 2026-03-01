'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'usePageLeave',
	description_es:
		'Llama a un callback cuando el puntero del ratón sale de la ventana del navegador.',
	description_en:
		'Calls a callback when the mouse pointer leaves the browser window.',
	usage: `import { usePageLeave } from '@kivora/react';

function Demo() {
  usePageLeave(() => {
    console.log('User is about to leave the page');
  });

  return <div>Move your mouse outside the window</div>;
}`,
	params: [
		{
			name: 'onPageLeave',
			type: '() => void',
			required: true,
			description_es:
				'Función llamada cuando el ratón sale de la ventana del navegador.',
			description_en:
				'Function called when the mouse leaves the browser window.',
		},
	],
	returns: [
		{
			name: '',
			type: 'void',
			description_es: 'Este hook no retorna ningún valor.',
			description_en: 'This hook does not return a value.',
		},
	],
};

export default function UsePageLeavePage() {
	return <HookDoc config={config} />;
}
