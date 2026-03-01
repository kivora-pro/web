'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useShallowEffect',
	description_es:
		'Igual que useEffect pero compara las dependencias con igualdad superficial en lugar de igualdad referencial, evitando renders extra cuando objetos o arrays tienen el mismo contenido.',
	description_en:
		'Like useEffect but compares dependencies with shallow equality instead of reference equality, preventing extra renders when objects or arrays have the same content.',
	usage: `import { useShallowEffect } from '@kivora/react';

function Demo({ filters }: { filters: Record<string, string> }) {
  useShallowEffect(() => {
    // Only re-runs when filter values actually change,
    // not every time the filters object is recreated
    console.log('filters changed:', filters);
  }, [filters]);

  return <div>Demo</div>;
}`,
	params: [
		{
			name: 'fn',
			type: 'React.EffectCallback',
			required: true,
			description_es:
				'Función de efecto a ejecutar cuando las dependencias cambien superficialmente.',
			description_en:
				'Effect function to run when dependencies change shallowly.',
		},
		{
			name: 'dependencies',
			type: 'any[]',
			required: false,
			defaultValue: '[]',
			description_es:
				'Lista de dependencias comparadas con igualdad superficial.',
			description_en: 'Dependency list compared using shallow equality.',
		},
	],
	returns: [],
};

export default function UseShallowEffectPage() {
	return <HookDoc config={config} />;
}
