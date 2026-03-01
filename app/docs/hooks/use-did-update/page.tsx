'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useDidUpdate',
	description_es:
		'Igual que useEffect pero omite la ejecución inicial al montar el componente; solo se dispara en actualizaciones posteriores.',
	description_en:
		'Like useEffect but skips the initial mount — only fires on subsequent updates.',
	usage: `import { useDidUpdate } from '@kivora/react';

function Demo() {
  const [count, setCount] = useState(0);

  useDidUpdate(() => {
    console.log('count changed:', count);
  }, [count]);

  return <button onClick={() => setCount((c) => c + 1)}>Increment</button>;
}`,
	params: [
		{
			name: 'fn',
			type: '() => void',
			required: true,
			description_es:
				'Función a ejecutar cuando las dependencias cambien (nunca en el montaje inicial).',
			description_en:
				'Function to run when dependencies change (never on initial mount).',
		},
		{
			name: 'dependencies',
			type: 'any[]',
			required: false,
			defaultValue: '[]',
			description_es:
				'Lista de dependencias que activan la función cuando cambian.',
			description_en:
				'Dependency list that triggers the function when changed.',
		},
	],
	returns: [],
};

export default function UseDidUpdatePage() {
	return <HookDoc config={config} />;
}
