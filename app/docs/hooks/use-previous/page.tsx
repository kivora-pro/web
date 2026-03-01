'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'usePrevious',
	description_es:
		'Almacena y devuelve el valor de la prop o estado anterior al último renderizado. En el primer renderizado devuelve `undefined`.',
	description_en:
		'Stores and returns the value of the prop or state from the previous render. Returns `undefined` on the first render.',
	usage: `import { usePrevious } from '@kivora/react';

function Demo() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {previousCount ?? 'none'}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}`,
	params: [
		{
			name: 'value',
			type: 'T',
			required: true,
			description_es:
				'Valor actual cuyo valor anterior se desea rastrear.',
			description_en:
				'Current value whose previous value you want to track.',
		},
	],
	returns: [
		{
			name: '(return value)',
			type: 'T | undefined',
			description_es:
				'El valor que tenía el argumento en el renderizado anterior. `undefined` en el primer renderizado.',
			description_en:
				'The value the argument had on the previous render. `undefined` on the first render.',
		},
	],
};

export default function UsePreviousPage() {
	return <HookDoc config={config} />;
}
