'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useHover',
	description_es: 'Indica si el ratón está sobre el elemento referenciado.',
	description_en:
		'Indicates whether the mouse is over the referenced element.',
	usage: `import { useHover } from '@kivora/react';

function Demo() {
  const { hovered, ref } = useHover<HTMLDivElement>();
  return (
    <div ref={ref} style={{ background: hovered ? 'blue' : 'gray' }}>
      {hovered ? 'Hovered' : 'Not hovered'}
    </div>
  );
}`,
	params: [],
	returns: [
		{
			name: 'hovered',
			type: 'boolean',
			description_es: 'true mientras el ratón está sobre el elemento.',
			description_en: 'true while the mouse is over the element.',
		},
		{
			name: 'ref',
			type: '(el: T | null) => void',
			description_es:
				'Callback ref que se adjunta al elemento a observar.',
			description_en: 'Callback ref to attach to the observed element.',
		},
	],
};

export default function UseHoverPage() {
	return <HookDoc config={config} />;
}
