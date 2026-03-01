'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useViewportSize',
	description_es:
		'Devuelve las dimensiones actuales del viewport y se actualiza al redimensionar la ventana.',
	description_en:
		'Returns the current viewport dimensions, updates on window resize.',
	usage: `import { useViewportSize } from '@kivora/react';

function Demo() {
  const { width, height } = useViewportSize();
  return <div>Viewport: {width} x {height}</div>;
}`,
	params: [],
	returns: [
		{
			name: 'width',
			type: 'number',
			description_es: 'Ancho actual del viewport en píxeles.',
			description_en: 'Current viewport width in pixels.',
		},
		{
			name: 'height',
			type: 'number',
			description_es: 'Alto actual del viewport en píxeles.',
			description_en: 'Current viewport height in pixels.',
		},
	],
};

export default function UseViewportSizePage() {
	return <HookDoc config={config} />;
}
