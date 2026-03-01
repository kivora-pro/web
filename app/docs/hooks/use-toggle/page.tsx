'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useToggle',
	description_es:
		'Alterna entre un conjunto de valores. Por defecto alterna entre `false` y `true`, pero acepta cualquier lista de valores personalizados.',
	description_en:
		'Cycles through a set of values. Defaults to toggling between `false` and `true`, but accepts any list of custom values.',
	usage: `import { useToggle } from '@kivora/react';

function Demo() {
  const [opened, toggle] = useToggle();

  return (
    <div>
      <p>State: {String(opened)}</p>
      <button onClick={() => toggle()}>Toggle</button>
      <button onClick={() => toggle(false)}>Force false</button>
    </div>
  );
}

// Custom values example
function ThemeDemo() {
  const [theme, toggleTheme] = useToggle(['light', 'dark', 'system'] as const);

  return <button onClick={() => toggleTheme()}>Theme: {theme}</button>;
}`,
	params: [
		{
			name: 'options',
			type: 'T[]',
			defaultValue: '[false, true]',
			description_es:
				'Lista de valores entre los que alternar. El primer elemento es el valor inicial.',
			description_en:
				'List of values to cycle through. The first element is the initial value.',
		},
	],
	returns: [
		{
			name: '0 (value)',
			type: 'T',
			description_es: 'Valor actual del toggle.',
			description_en: 'Current toggle value.',
		},
		{
			name: '1 (toggle)',
			type: '(value?: T) => void',
			description_es:
				'Función para cambiar al siguiente valor. Si se pasa un valor, se establece directamente.',
			description_en:
				'Function to advance to the next value. If a value is passed, it is set directly.',
		},
	],
};

export default function UseTogglePage() {
	return <HookDoc config={config} />;
}
