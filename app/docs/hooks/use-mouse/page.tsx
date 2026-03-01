'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useMouse',
	description_es:
		'Rastrea las coordenadas del ratón relativas al elemento referenciado o al documento.',
	description_en:
		'Tracks mouse coordinates relative to the referenced element or the document.',
	usage: `import { useMouse } from '@kivora/react';

function Demo() {
  const { ref, x, y } = useMouse<HTMLDivElement>();
  return (
    <div ref={ref} style={{ width: 300, height: 300, border: '1px solid' }}>
      x: {x}, y: {y}
    </div>
  );
}`,
	params: [
		{
			name: 'options.resetOnExit',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Si es true, resetea las coordenadas a 0 cuando el ratón sale del elemento.',
			description_en:
				'If true, resets coordinates to 0 when the mouse leaves the element.',
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
			name: 'x',
			type: 'number',
			description_es: 'Coordenada X del ratón relativa al elemento.',
			description_en: 'Mouse X coordinate relative to the element.',
		},
		{
			name: 'y',
			type: 'number',
			description_es: 'Coordenada Y del ratón relativa al elemento.',
			description_en: 'Mouse Y coordinate relative to the element.',
		},
	],
};

export default function UseMousePage() {
	return <HookDoc config={config} />;
}
