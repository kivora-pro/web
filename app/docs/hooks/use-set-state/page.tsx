'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useSetState',
	description_es:
		'Gestiona un objeto de estado fusionando actualizaciones parciales, similar al `setState` de los componentes de clase de React.',
	description_en:
		'Manages an object state by merging partial updates, similar to React class component `setState`.',
	usage: `import { useSetState } from '@kivora/react';

function Demo() {
  const [state, setState] = useSetState({
    name: 'Alice',
    age: 30,
    active: true,
  });

  return (
    <div>
      <p>{state.name}, {state.age}</p>
      <button onClick={() => setState({ age: state.age + 1 })}>
        Birthday
      </button>
      <button onClick={() => setState((current) => ({ active: !current.active }))}>
        Toggle active
      </button>
    </div>
  );
}`,
	params: [
		{
			name: 'initialState',
			type: 'T',
			required: true,
			description_es:
				'Estado inicial del objeto. Debe ser un objeto plano.',
			description_en: 'Initial state object. Must be a plain object.',
		},
	],
	returns: [
		{
			name: '0 (state)',
			type: 'T',
			description_es: 'Objeto de estado actual.',
			description_en: 'Current state object.',
		},
		{
			name: '1 (setState)',
			type: '(statePartial: Partial<T> | ((current: T) => Partial<T>)) => void',
			description_es:
				'Fusiona el estado parcial proporcionado con el estado actual. También acepta una función actualizadora.',
			description_en:
				'Merges the provided partial state with the current state. Also accepts an updater function.',
		},
	],
};

export default function UseSetStatePage() {
	return <HookDoc config={config} />;
}
