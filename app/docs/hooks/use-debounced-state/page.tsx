'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useDebouncedState',
	description_es:
		'Similar a useState pero el setter aplica debounce, evitando actualizaciones de estado demasiado frecuentes.',
	description_en:
		'Similar to useState but the setter is debounced, preventing excessively frequent state updates.',
	usage: `import { useDebouncedState } from '@kivora/react';

function SearchInput() {
  const [value, setValue] = useDebouncedState('', 300);

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} placeholder="Search..." />
      <p>Debounced value: {value}</p>
    </>
  );
}`,
	params: [
		{
			name: 'defaultValue',
			type: 'T',
			required: true,
			description_es: 'Valor inicial del estado.',
			description_en: 'Initial state value.',
		},
		{
			name: 'wait',
			type: 'number',
			required: true,
			description_es:
				'Tiempo de espera en milisegundos para el debounce del setter.',
			description_en:
				'Wait time in milliseconds for the debounced setter.',
		},
		{
			name: 'options.leading',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Si es true, actualiza el estado en el flanco inicial del debounce.',
			description_en:
				'If true, updates state on the leading edge of the debounce.',
		},
	],
	returns: [
		{
			name: '[value, setValue]',
			type: '[T, React.Dispatch<React.SetStateAction<T>>]',
			description_es: 'El valor actual del estado y un setter debounced.',
			description_en: 'The current state value and a debounced setter.',
		},
	],
};

export default function UseDebouncedStatePage() {
	return <HookDoc config={config} />;
}
