'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useWindowScroll',
	description_es:
		'Devuelve la posición de scroll actual de la ventana y una función para desplazarse a una posición.',
	description_en:
		'Returns the current window scroll position and a function to scroll to a position.',
	usage: `import { useWindowScroll } from '@kivora/react';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <div>x: {scroll.x}, y: {scroll.y}</div>
      <button onClick={() => scrollTo({ y: 0 })}>Back to top</button>
    </>
  );
}`,
	params: [],
	returns: [
		{
			name: 'scroll',
			type: '{ x: number, y: number }',
			description_es: 'Posición de scroll actual de la ventana.',
			description_en: 'Current window scroll position.',
		},
		{
			name: 'scrollTo',
			type: '(position: Partial<{ x: number, y: number }>) => void',
			description_es:
				'Función para desplazar la ventana a una posición específica.',
			description_en:
				'Function to scroll the window to a specific position.',
		},
	],
};

export default function UseWindowScrollPage() {
	return <HookDoc config={config} />;
}
