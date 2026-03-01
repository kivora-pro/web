'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useMove',
	description_es:
		'Rastrea el movimiento de arrastre dentro de los límites del elemento, con posición normalizada entre 0 y 1.',
	description_en:
		'Tracks drag-style movement within element bounds, with position normalized between 0 and 1.',
	usage: `import { useMove } from '@kivora/react';

function Demo() {
  const { ref, active } = useMove(({ x, y }) => {
    console.log('position:', x, y);
  });
  return (
    <div
      ref={ref}
      style={{ width: 300, height: 300, border: '1px solid', cursor: active ? 'grabbing' : 'grab' }}
    />
  );
}`,
	params: [
		{
			name: 'onChange',
			type: '(position: { x: number, y: number }) => void',
			description_es:
				'Callback que recibe la posición normalizada (x, y entre 0 y 1) durante el arrastre.',
			description_en:
				'Callback receiving the normalized position (x, y clamped 0-1) during drag.',
		},
	],
	returns: [
		{
			name: 'ref',
			type: 'React.RefObject<T | null>',
			description_es: 'Ref que se adjunta al elemento a rastrear.',
			description_en: 'Ref to attach to the tracked element.',
		},
		{
			name: 'active',
			type: 'boolean',
			description_es:
				'true mientras el usuario está arrastrando dentro del elemento.',
			description_en:
				'true while the user is dragging inside the element.',
		},
	],
};

export default function UseMovePage() {
	return <HookDoc config={config} />;
}
