'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useIntersection',
	description_es:
		'Devuelve el IntersectionObserverEntry completo del elemento referenciado.',
	description_en:
		'Returns the full IntersectionObserverEntry for the referenced element.',
	usage: `import { useIntersection } from '@kivora/react';

function Demo() {
  const { ref, entry } = useIntersection<HTMLDivElement>({
    threshold: 0.5,
  });
  return (
    <div ref={ref}>
      {entry?.isIntersecting ? 'Visible' : 'Hidden'}
    </div>
  );
}`,
	params: [
		{
			name: 'options',
			type: 'IntersectionObserverInit',
			defaultValue: 'undefined',
			description_es:
				'Opciones del IntersectionObserver (root, rootMargin, threshold).',
			description_en:
				'IntersectionObserver options (root, rootMargin, threshold).',
		},
	],
	returns: [
		{
			name: 'ref',
			type: '(el: T | null) => void',
			description_es:
				'Callback ref que se adjunta al elemento a observar.',
			description_en: 'Callback ref to attach to the observed element.',
		},
		{
			name: 'entry',
			type: 'IntersectionObserverEntry | null',
			description_es:
				'Última entrada del IntersectionObserver, null antes del primer disparo.',
			description_en:
				'Latest IntersectionObserver entry, null before the first trigger.',
		},
	],
};

export default function UseIntersectionPage() {
	return <HookDoc config={config} />;
}
