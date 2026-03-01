'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useValidatedState',
	description_es:
		'Gestiona un valor de estado junto con una función de validación. Conserva el último valor válido y expone si el valor actual pasa la validación.',
	description_en:
		'Manages a state value along with a validation function. Keeps track of the last valid value and exposes whether the current value passes validation.',
	usage: `import { useValidatedState } from '@kivora/react';

function Demo() {
  const { value, lastValidValue, valid, setValue } = useValidatedState(
    '',
    (val) => val.length >= 3
  );

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ borderColor: valid ? 'green' : 'red' }}
      />
      <p>Valid: {String(valid)}</p>
      <p>Last valid value: "{lastValidValue}"</p>
    </div>
  );
}`,
	params: [
		{
			name: 'initialValue',
			type: 'T',
			required: true,
			description_es: 'Valor inicial del estado.',
			description_en: 'Initial state value.',
		},
		{
			name: 'validation',
			type: '(value: T) => boolean',
			required: true,
			description_es:
				'Función de validación que recibe el valor actual y devuelve `true` si es válido.',
			description_en:
				'Validation function that receives the current value and returns `true` if it is valid.',
		},
	],
	returns: [
		{
			name: 'value',
			type: 'T',
			description_es: 'Valor actual del estado (puede no ser válido).',
			description_en: 'Current state value (may not be valid).',
		},
		{
			name: 'lastValidValue',
			type: 'T',
			description_es: 'Último valor que pasó la validación.',
			description_en: 'Last value that passed validation.',
		},
		{
			name: 'valid',
			type: 'boolean',
			description_es:
				'`true` si el valor actual pasa la función de validación.',
			description_en:
				'`true` if the current value passes the validation function.',
		},
		{
			name: 'setValue',
			type: '(value: T) => void',
			description_es:
				'Actualiza el valor. Si es válido, también actualiza `lastValidValue`.',
			description_en:
				'Updates the value. If valid, also updates `lastValidValue`.',
		},
	],
};

export default function UseValidatedStatePage() {
	return <HookDoc config={config} />;
}
