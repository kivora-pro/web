'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useSet',
	description_es:
		'Gestiona un `Set` de JavaScript como estado reactivo de React, proporcionando métodos similares a los del `Set` nativo que desencadenan re-renderizados al mutar.',
	description_en:
		'Manages a JavaScript `Set` as reactive React state, providing native Set-like methods that trigger re-renders on mutation.',
	usage: `import { useSet } from '@kivora/react';

function Demo() {
  const set = useSet<string>(['apple', 'banana']);

  return (
    <div>
      <p>Has apple: {String(set.has('apple'))}</p>
      <p>Size: {set.size}</p>
      <button onClick={() => set.add('orange')}>Add orange</button>
      <button onClick={() => set.delete('banana')}>Remove banana</button>
      <button onClick={() => set.clear()}>Clear all</button>
    </div>
  );
}`,
	params: [
		{
			name: 'initialValues',
			type: 'T[]',
			defaultValue: '[]',
			description_es: 'Valores iniciales del set.',
			description_en: 'Initial values for the set.',
		},
	],
	returns: [
		{
			name: 'has',
			type: '(value: T) => boolean',
			description_es: 'Comprueba si el set contiene el valor.',
			description_en: 'Checks whether the set contains the value.',
		},
		{
			name: 'add',
			type: '(value: T) => void',
			description_es:
				'Agrega un valor al set y desencadena un re-renderizado.',
			description_en: 'Adds a value to the set and triggers a re-render.',
		},
		{
			name: 'delete',
			type: '(value: T) => void',
			description_es: 'Elimina un valor del set.',
			description_en: 'Removes a value from the set.',
		},
		{
			name: 'clear',
			type: '() => void',
			description_es: 'Elimina todos los valores del set.',
			description_en: 'Removes all values from the set.',
		},
		{
			name: 'replace',
			type: '(values: T[]) => void',
			description_es:
				'Reemplaza el contenido completo del set con el array dado.',
			description_en:
				'Replaces the entire set contents with the given array.',
		},
		{
			name: 'forEach',
			type: '(callback: (value: T) => void) => void',
			description_es: 'Ejecuta el callback por cada valor del set.',
			description_en: 'Executes the callback for each value in the set.',
		},
		{
			name: 'entries',
			type: '() => IterableIterator<[T, T]>',
			description_es: 'Devuelve un iterador sobre las entradas del set.',
			description_en: 'Returns an iterator over the set entries.',
		},
		{
			name: 'keys',
			type: '() => IterableIterator<T>',
			description_es:
				'Devuelve un iterador sobre los valores del set (alias de values).',
			description_en:
				'Returns an iterator over set values (alias for values).',
		},
		{
			name: 'values',
			type: '() => IterableIterator<T>',
			description_es: 'Devuelve un iterador sobre los valores del set.',
			description_en: 'Returns an iterator over the set values.',
		},
		{
			name: 'size',
			type: 'number',
			description_es: 'Número de valores en el set.',
			description_en: 'Number of values in the set.',
		},
	],
};

export default function UseSetPage() {
	return <HookDoc config={config} />;
}
