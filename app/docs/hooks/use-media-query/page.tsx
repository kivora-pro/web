'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useMediaQuery',
	description_es:
		'Devuelve true si la media query proporcionada coincide con el viewport actual.',
	description_en:
		'Returns true if the provided media query matches the current viewport.',
	usage: `import { useMediaQuery } from '@kivora/react';

function Demo() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}`,
	params: [
		{
			name: 'query',
			type: 'string',
			description_es: 'Cadena de media query CSS a evaluar.',
			description_en: 'CSS media query string to evaluate.',
		},
		{
			name: 'initialValue',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Valor inicial antes de que se evalúe la media query.',
			description_en:
				'Initial value before the media query is evaluated.',
		},
		{
			name: 'options.getInitialValueInEffect',
			type: 'boolean',
			defaultValue: 'true',
			description_es:
				'Si es true, el valor inicial se obtiene dentro del efecto (evita hidratación incorrecta en SSR).',
			description_en:
				'If true, the initial value is resolved inside the effect (avoids SSR hydration mismatch).',
		},
	],
	returns: [
		{
			name: 'matches',
			type: 'boolean',
			description_es:
				'true si la media query coincide actualmente con el viewport.',
			description_en:
				'true if the media query currently matches the viewport.',
		},
	],
};

export default function UseMediaQueryPage() {
	return <HookDoc config={config} />;
}
