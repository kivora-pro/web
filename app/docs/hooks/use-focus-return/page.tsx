'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useFocusReturn',
	description_es:
		'Devuelve el foco al elemento que lo tenía anteriormente cuando `opened` pasa a false.',
	description_en:
		'Returns focus to the previously focused element when `opened` becomes false.',
	usage: `import { useFocusReturn } from '@kivora/react';

function Demo({ opened }: { opened: boolean }) {
  useFocusReturn({ opened });
  return opened ? <div>Modal content</div> : null;
}`,
	params: [
		{
			name: 'options.opened',
			type: 'boolean',
			description_es:
				'Controla cuándo se devuelve el foco: al pasar de true a false.',
			description_en:
				'Controls when focus is returned: when transitioning from true to false.',
		},
		{
			name: 'options.shouldReturnFocus',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Si es false, el foco no se devuelve.',
			description_en: 'If false, focus is not returned.',
		},
	],
	returns: [],
};

export default function UseFocusReturnPage() {
	return <HookDoc config={config} />;
}
