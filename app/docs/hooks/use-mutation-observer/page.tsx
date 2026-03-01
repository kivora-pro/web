'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useMutationObserver',
	description_es:
		'Observa mutaciones del DOM en el elemento referenciado usando MutationObserver.',
	description_en:
		'Observes DOM mutations on the referenced element using MutationObserver.',
	usage: `import { useMutationObserver } from '@kivora/react';

function Demo() {
  const { ref } = useMutationObserver<HTMLDivElement>(
    (mutations) => {
      mutations.forEach((m) => console.log(m));
    },
    { childList: true, subtree: true }
  );
  return <div ref={ref}>Observed element</div>;
}`,
	params: [
		{
			name: 'callback',
			type: 'MutationCallback',
			description_es:
				'Función que se ejecuta cuando se detectan mutaciones.',
			description_en: 'Function called when mutations are detected.',
		},
		{
			name: 'options',
			type: 'MutationObserverInit',
			description_es:
				'Opciones de MutationObserver (childList, attributes, subtree, etc.).',
			description_en:
				'MutationObserver options (childList, attributes, subtree, etc.).',
		},
	],
	returns: [
		{
			name: 'ref',
			type: 'React.RefObject<T | null>',
			description_es: 'Ref que se adjunta al elemento a observar.',
			description_en: 'Ref to attach to the observed element.',
		},
		{
			name: 'observer',
			type: 'MutationObserver | null',
			description_es: 'Instancia del MutationObserver activo.',
			description_en: 'Active MutationObserver instance.',
		},
	],
};

export default function UseMutationObserverPage() {
	return <HookDoc config={config} />;
}
