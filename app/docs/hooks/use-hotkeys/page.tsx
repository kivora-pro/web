'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useHotkeys',
	description_es:
		'Registra atajos de teclado globales. El formato de hotkey admite modificadores como ctrl, shift, alt y mod (ctrl en Win/Linux, cmd en Mac). Se ignoran los eventos originados en INPUT, TEXTAREA y SELECT por defecto.',
	description_en:
		'Registers global keyboard shortcuts. Hotkey format supports modifiers like ctrl, shift, alt and mod (ctrl on Win/Linux, cmd on Mac). Events from INPUT, TEXTAREA and SELECT are ignored by default.',
	usage: `import { useHotkeys } from '@kivora/react';

function Demo() {
  useHotkeys([
    ['ctrl+k', () => console.log('Search opened')],
    ['mod+s', (e) => { e.preventDefault(); save(); }],
    ['shift+enter', () => console.log('Submit')],
  ]);

  return <div>Press Ctrl+K to search, Ctrl/Cmd+S to save</div>;
}`,
	params: [
		{
			name: 'hotkeys',
			type: 'HotkeyItem[]',
			required: true,
			description_es:
				'Array de tuplas [hotkey, handler, options?]. hotkey es una cadena como "ctrl+k" o "mod+s". options acepta { preventDefault?: boolean }.',
			description_en:
				'Array of tuples [hotkey, handler, options?]. hotkey is a string like "ctrl+k" or "mod+s". options accepts { preventDefault?: boolean }.',
		},
		{
			name: 'tagsToIgnore',
			type: 'string[]',
			required: false,
			defaultValue: "['INPUT', 'TEXTAREA', 'SELECT']",
			description_es:
				'Etiquetas HTML en las que se omitirá el atajo para no interferir con la escritura.',
			description_en:
				'HTML tag names where the shortcut will be ignored to avoid interfering with typing.',
		},
		{
			name: 'triggerOnContentEditable',
			type: 'boolean',
			required: false,
			defaultValue: 'false',
			description_es:
				'Cuando es true, el atajo también se dispara dentro de elementos contentEditable.',
			description_en:
				'When true, the shortcut also fires inside contentEditable elements.',
		},
	],
	returns: [],
};

export default function UseHotkeysPage() {
	return <HookDoc config={config} />;
}
