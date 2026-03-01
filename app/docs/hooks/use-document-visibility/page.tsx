'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useDocumentVisibility',
	description_es:
		'Sigue de forma reactiva el estado de visibilidad del documento, útil para pausar actividad cuando la pestaña está oculta.',
	description_en:
		'Reactively tracks the document visibility state, useful for pausing activity when the tab is hidden.',
	usage: `import { useDocumentVisibility } from '@kivora/react';

function Demo() {
  const visibility = useDocumentVisibility();

  return <div>Tab is {visibility}</div>;
}`,
	params: [],
	returns: [
		{
			name: 'visibility',
			type: "'visible' | 'hidden'",
			description_es:
				'Estado actual de `document.visibilityState`, reactivo a los cambios de pestaña.',
			description_en:
				'Current `document.visibilityState`, reactive to tab changes.',
		},
	],
};

export default function UseDocumentVisibilityPage() {
	return <HookDoc config={config} />;
}
