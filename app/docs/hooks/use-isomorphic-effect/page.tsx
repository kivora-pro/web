'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useIsomorphicEffect',
	description_es:
		'Usa useLayoutEffect en el cliente y useEffect en el servidor para evitar advertencias de SSR al necesitar efectos síncronos post-render.',
	description_en:
		'Uses useLayoutEffect on the client and useEffect on the server to avoid SSR warnings when synchronous post-render effects are needed.',
	usage: `import { useIsomorphicEffect } from '@kivora/react';

function Demo() {
  useIsomorphicEffect(() => {
    // Runs as useLayoutEffect on client, useEffect on server
    document.title = 'Updated title';
  }, []);

  return <div>Hello</div>;
}`,
	params: [
		{
			name: 'effect',
			type: 'React.EffectCallback',
			required: true,
			description_es:
				'Función de efecto a ejecutar, puede devolver una función de limpieza.',
			description_en:
				'Effect function to run, may return a cleanup function.',
		},
		{
			name: 'deps',
			type: 'React.DependencyList',
			required: false,
			description_es:
				'Lista de dependencias que controla cuándo se vuelve a ejecutar el efecto.',
			description_en:
				'Dependency list that controls when the effect re-runs.',
		},
	],
	returns: [],
};

export default function UseIsomorphicEffectPage() {
	return <HookDoc config={config} />;
}
