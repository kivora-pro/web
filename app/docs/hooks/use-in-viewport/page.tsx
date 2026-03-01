'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useInViewport',
	description_es:
		'Indica si el elemento referenciado es visible en el viewport.',
	description_en:
		'Indicates whether the referenced element is visible in the viewport.',
	usage: `import { useInViewport } from '@kivora/react';

function Demo() {
  const { ref, inViewport } = useInViewport<HTMLDivElement>();
  return (
    <div ref={ref}>
      {inViewport ? 'In viewport' : 'Out of viewport'}
    </div>
  );
}`,
	params: [],
	returns: [
		{
			name: 'ref',
			type: '(el: T | null) => void',
			description_es:
				'Callback ref que se adjunta al elemento a observar.',
			description_en: 'Callback ref to attach to the observed element.',
		},
		{
			name: 'inViewport',
			type: 'boolean',
			description_es:
				'true mientras el elemento es visible en el viewport.',
			description_en:
				'true while the element is visible in the viewport.',
		},
	],
};

export default function UseInViewportPage() {
	return <HookDoc config={config} />;
}
