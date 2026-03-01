'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useColorScheme',
	description_es:
		'Detecta y sigue de forma reactiva la preferencia de esquema de color del sistema operativo.',
	description_en:
		'Reactively detects and tracks the OS color scheme preference.',
	usage: `import { useColorScheme } from '@kivora/react';

function Demo() {
  const colorScheme = useColorScheme();

  return <div>Current scheme: {colorScheme}</div>;
}`,
	params: [
		{
			name: 'initialValue',
			type: "'light' | 'dark'",
			defaultValue: "'light'",
			description_es:
				'Valor inicial antes de que se resuelva la preferencia del sistema.',
			description_en:
				'Initial value before the system preference is resolved.',
		},
	],
	returns: [
		{
			name: 'colorScheme',
			type: "'light' | 'dark'",
			description_es:
				'Esquema de color actual del sistema operativo, reactivo a los cambios.',
			description_en:
				'Current OS color scheme preference, reactive to changes.',
		},
	],
};

export default function UseColorSchemePage() {
	return <HookDoc config={config} />;
}
