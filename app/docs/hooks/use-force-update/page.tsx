'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useForceUpdate',
	description_es:
		'Devuelve una función que, al ser llamada, fuerza una nueva renderización del componente.',
	description_en:
		'Returns a function that, when called, forces a re-render of the component.',
	usage: `import { useForceUpdate } from '@kivora/react';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      <p>Random: {Math.random()}</p>
      <button onClick={forceUpdate}>Force re-render</button>
    </div>
  );
}`,
	params: [],
	returns: [
		{
			name: 'forceUpdate',
			type: '() => void',
			description_es:
				'Función que fuerza una nueva renderización del componente al ser invocada.',
			description_en:
				'Function that forces a component re-render when called.',
		},
	],
};

export default function UseForceUpdatePage() {
	return <HookDoc config={config} />;
}
