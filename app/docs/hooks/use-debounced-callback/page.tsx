'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useDebouncedCallback',
	description_es:
		'Devuelve una versión debounced de la función proporcionada junto con controles para ejecutarla inmediatamente o cancelarla.',
	description_en:
		'Returns a debounced version of the provided function along with controls to flush it immediately or cancel it.',
	usage: `import { useDebouncedCallback } from '@kivora/react';

function SearchInput() {
  const handleSearch = useDebouncedCallback((query: string) => {
    console.log('Searching:', query);
  }, 300, { flushOnUnmount: true });

  return (
    <input
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}`,
	params: [
		{
			name: 'fn',
			type: 'T extends (...args: any[]) => any',
			required: true,
			description_es: 'Función a ejecutar de forma debounced.',
			description_en: 'Function to execute in a debounced manner.',
		},
		{
			name: 'delay',
			type: 'number',
			required: true,
			description_es:
				'Tiempo de espera en milisegundos antes de invocar la función.',
			description_en:
				'Wait time in milliseconds before invoking the function.',
		},
		{
			name: 'options.flushOnUnmount',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Si es true, ejecuta la función pendiente cuando el componente se desmonte.',
			description_en:
				'If true, flushes any pending invocation when the component unmounts.',
		},
	],
	returns: [
		{
			name: '(debounced fn)',
			type: 'T & { flush: () => void; cancel: () => void }',
			description_es:
				'La función debounced. Incluye flush() para ejecutarla de inmediato y cancel() para descartarla.',
			description_en:
				'The debounced function. Includes flush() to invoke it immediately and cancel() to discard it.',
		},
	],
};

export default function UseDebouncedCallbackPage() {
	return <HookDoc config={config} />;
}
