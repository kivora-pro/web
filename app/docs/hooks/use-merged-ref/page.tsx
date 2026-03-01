'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useMergedRef',
	description_es:
		'Combina múltiples refs (callbacks, objetos RefObject o null) en un único ref callback que actualiza todos ellos. También exporta las utilidades mergeRefs y assignRef.',
	description_en:
		'Merges multiple refs (callbacks, RefObjects or null) into a single ref callback that updates all of them. Also exports mergeRefs and assignRef utility functions.',
	usage: `import { useMergedRef } from '@kivora/react';

function Demo() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useCallback((node: HTMLDivElement | null) => {
    console.log('node:', node);
  }, []);

  const mergedRef = useMergedRef(ref1, ref2);

  return <div ref={mergedRef}>Hello</div>;
}`,
	params: [
		{
			name: '...refs',
			type: 'React.Ref<T>[]',
			required: true,
			description_es:
				'Uno o más refs a combinar (RefCallback, RefObject o null).',
			description_en:
				'One or more refs to merge (RefCallback, RefObject, or null).',
		},
	],
	returns: [
		{
			name: 'mergedRef',
			type: 'React.RefCallback<T>',
			description_es:
				'Ref callback único que actualiza todos los refs proporcionados.',
			description_en:
				'Single ref callback that updates all provided refs.',
		},
	],
};

export default function UseMergedRefPage() {
	return <HookDoc config={config} />;
}
