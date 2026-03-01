'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useInputState',
	description_es:
		'Gestiona el estado de un input de texto. El setter acepta tanto un ChangeEvent del input como un valor directo, lo que facilita integrarlo con inputs nativos y con componentes controlados.',
	description_en:
		'Manages text input state. The setter accepts both a ChangeEvent from the input and a direct value, making it easy to integrate with native inputs and controlled components.',
	usage: `import { useInputState } from '@kivora/react';

function Demo() {
  const [value, setValue] = useInputState('');

  return (
    <div>
      {/* Native input — passes event directly */}
      <input value={value} onChange={setValue} />

      {/* Controlled component — passes value directly */}
      <button onClick={() => setValue('reset')}>Reset</button>

      <p>Value: {value}</p>
    </div>
  );
}`,
	params: [
		{
			name: 'initialState',
			type: 'T',
			required: true,
			description_es: 'Valor inicial del estado del input.',
			description_en: 'Initial value of the input state.',
		},
	],
	returns: [
		{
			name: '[0] value',
			type: 'T',
			description_es: 'Valor actual del estado del input.',
			description_en: 'Current value of the input state.',
		},
		{
			name: '[1] setValue',
			type: 'React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | ((value: T) => void)',
			description_es:
				'Función setter que acepta un ChangeEvent (para usar como onChange) o un valor directo de tipo T.',
			description_en:
				'Setter function that accepts a ChangeEvent (for use as onChange) or a direct value of type T.',
		},
	],
};

export default function UseInputStatePage() {
	return <HookDoc config={config} />;
}
