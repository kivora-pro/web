'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useCounter',
	description_es:
		'Gestiona un valor numérico con soporte para incremento, decremento, reinicio y valores mínimos/máximos opcionales.',
	description_en:
		'Manages a numeric counter value with support for increment, decrement, reset, and optional min/max clamping.',
	usage: `import { useCounter } from '@kivora/react';

function Demo() {
  const { count, increment, decrement, reset, set } = useCounter(0, { min: 0, max: 10 });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => set(5)}>Set to 5</button>
    </div>
  );
}`,
	params: [
		{
			name: 'initialValue',
			type: 'number',
			defaultValue: '0',
			description_es: 'Valor inicial del contador.',
			description_en: 'Initial value of the counter.',
		},
		{
			name: 'options.min',
			type: 'number',
			description_es:
				'Valor mínimo permitido. El contador no bajará de este valor.',
			description_en:
				'Minimum allowed value. The counter will not go below this value.',
		},
		{
			name: 'options.max',
			type: 'number',
			description_es:
				'Valor máximo permitido. El contador no superará este valor.',
			description_en:
				'Maximum allowed value. The counter will not exceed this value.',
		},
	],
	returns: [
		{
			name: 'count',
			type: 'number',
			description_es: 'Valor actual del contador.',
			description_en: 'Current counter value.',
		},
		{
			name: 'increment',
			type: '() => void',
			description_es: 'Incrementa el contador en 1.',
			description_en: 'Increments the counter by 1.',
		},
		{
			name: 'decrement',
			type: '() => void',
			description_es: 'Decrementa el contador en 1.',
			description_en: 'Decrements the counter by 1.',
		},
		{
			name: 'reset',
			type: '() => void',
			description_es: 'Reinicia el contador al valor inicial.',
			description_en: 'Resets the counter to the initial value.',
		},
		{
			name: 'set',
			type: '(value: number) => void',
			description_es: 'Establece el contador a un valor específico.',
			description_en: 'Sets the counter to a specific value.',
		},
	],
};

export default function UseCounterPage() {
	return <HookDoc config={config} />;
}
