'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useHash',
	description_es:
		'Lee y actualiza de forma reactiva el fragmento hash de la URL actual.',
	description_en:
		'Reactively reads and updates the hash fragment of the current URL.',
	usage: `import { useHash } from '@kivora/react';

function Demo() {
  const [hash, setHash] = useHash();

  return (
    <div>
      <p>Current hash: {hash}</p>
      <button onClick={() => setHash('#section-2')}>Go to section 2</button>
    </div>
  );
}`,
	params: [
		{
			name: 'options.getInitialValueInEffect',
			type: 'boolean',
			defaultValue: 'true',
			description_es:
				'Si es `true`, el valor inicial se lee dentro de un efecto para evitar errores de hidratación.',
			description_en:
				'If `true`, the initial value is read inside an effect to avoid hydration mismatch.',
		},
	],
	returns: [
		{
			name: 'hash',
			type: 'string',
			description_es: 'El hash actual de la URL (incluyendo `#`).',
			description_en: 'The current URL hash (including `#`).',
		},
		{
			name: 'setHash',
			type: '(hash: string) => void',
			description_es: 'Función para actualizar el hash de la URL.',
			description_en: 'Function to update the URL hash.',
		},
	],
};

export default function UseHashPage() {
	return <HookDoc config={config} />;
}
