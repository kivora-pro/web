'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useFocusWithin',
	description_es:
		'Indica si algún hijo del elemento referenciado tiene el foco actualmente.',
	description_en:
		'Indicates whether any child of the referenced element currently has focus.',
	usage: `import { useFocusWithin } from '@kivora/react';

function Demo() {
  const { ref, focused } = useFocusWithin();
  return (
    <div ref={ref} style={{ border: focused ? '2px solid blue' : '2px solid gray' }}>
      <input placeholder="Focus me" />
    </div>
  );
}`,
	params: [
		{
			name: 'options.onFocus',
			type: '(e: FocusEvent) => void',
			defaultValue: 'undefined',
			description_es:
				'Callback ejecutado cuando algún hijo recibe el foco.',
			description_en: 'Callback called when any child receives focus.',
		},
		{
			name: 'options.onBlur',
			type: '(e: FocusEvent) => void',
			defaultValue: 'undefined',
			description_es:
				'Callback ejecutado cuando el foco abandona todos los hijos.',
			description_en: 'Callback called when focus leaves all children.',
		},
	],
	returns: [
		{
			name: 'ref',
			type: '(el: HTMLElement | null) => void',
			description_es:
				'Callback ref que se adjunta al contenedor a observar.',
			description_en: 'Callback ref to attach to the observed container.',
		},
		{
			name: 'focused',
			type: 'boolean',
			description_es:
				'true mientras algún hijo del contenedor tiene el foco.',
			description_en: 'true while any child of the container has focus.',
		},
	],
};

export default function UseFocusWithinPage() {
	return <HookDoc config={config} />;
}
