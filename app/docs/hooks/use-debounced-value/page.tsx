'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useDebouncedValue',
	description_es:
		'Retorna una versión debounced de un valor dado; el valor solo se actualiza tras el tiempo de espera sin cambios.',
	description_en:
		'Returns a debounced version of a given value; the value only updates after the wait period with no changes.',
	usage: `import { useDebouncedValue } from '@kivora/react';

function SearchResults({ query }: { query: string }) {
  const [debouncedQuery, cancel] = useDebouncedValue(query, 400);

  useEffect(() => {
    if (debouncedQuery) fetchResults(debouncedQuery);
  }, [debouncedQuery]);

  return <button onClick={cancel}>Cancel</button>;
}`,
	params: [
		{
			name: 'value',
			type: 'T',
			required: true,
			description_es: 'El valor al que se le aplicará el debounce.',
			description_en: 'The value to debounce.',
		},
		{
			name: 'wait',
			type: 'number',
			required: true,
			description_es:
				'Tiempo de espera en milisegundos antes de propagar el nuevo valor.',
			description_en:
				'Wait time in milliseconds before propagating the new value.',
		},
		{
			name: 'options.leading',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Si es true, propaga el valor en el flanco inicial del debounce.',
			description_en:
				'If true, propagates the value on the leading edge of the debounce.',
		},
	],
	returns: [
		{
			name: '[debouncedValue, cancel]',
			type: '[T, () => void]',
			description_es:
				'El valor debounced actual y una función cancel() para anular la actualización pendiente.',
			description_en:
				'The current debounced value and a cancel() function to discard the pending update.',
		},
	],
};

export default function UseDebouncedValuePage() {
	return <HookDoc config={config} />;
}
