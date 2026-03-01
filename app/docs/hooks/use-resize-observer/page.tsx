'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useResizeObserver',
	description_es:
		'Observa el tamaño de un elemento y devuelve su DOMRectReadOnly actualizado reactivamente.',
	description_en:
		'Observes an element size and returns its DOMRectReadOnly updated reactively.',
	usage: `import { useResizeObserver } from '@kivora/react';

function Demo() {
  const [ref, rect] = useResizeObserver<HTMLDivElement>();
  return (
    <div ref={ref}>
      Width: {rect.width}, Height: {rect.height}
    </div>
  );
}`,
	params: [],
	returns: [
		{
			name: 'ref',
			type: 'React.RefObject<T | null>',
			description_es: 'Ref que se adjunta al elemento a observar.',
			description_en: 'Ref to attach to the observed element.',
		},
		{
			name: 'rect',
			type: 'DOMRectReadOnly',
			description_es:
				'Rect de contenido del elemento, actualizado cuando cambia su tamaño.',
			description_en:
				'Content rect of the element, updated when its size changes.',
		},
	],
};

export default function UseResizeObserverPage() {
	return <HookDoc config={config} />;
}
