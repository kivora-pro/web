'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useListState',
	description_es:
		'Gestiona un array de estado con un conjunto completo de handlers inmutables para operaciones comunes como agregar, eliminar, reordenar y transformar elementos.',
	description_en:
		'Manages an array state with a comprehensive set of immutable handlers for common operations like appending, removing, reordering, and transforming items.',
	usage: `import { useListState } from '@kivora/react';

function Demo() {
  const [list, handlers] = useListState([{ name: 'Alice' }, { name: 'Bob' }]);

  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <button onClick={() => handlers.remove(index)}>Remove</button>
        </div>
      ))}
      <button onClick={() => handlers.append({ name: 'Charlie' })}>
        Append
      </button>
      <button onClick={() => handlers.reorder({ from: 0, to: 1 })}>
        Swap first two
      </button>
    </div>
  );
}`,
	params: [
		{
			name: 'initialValue',
			type: 'T[]',
			defaultValue: '[]',
			description_es: 'Valor inicial del array.',
			description_en: 'Initial array value.',
		},
	],
	returns: [
		{
			name: '0 (state)',
			type: 'T[]',
			description_es: 'Array de estado actual.',
			description_en: 'Current state array.',
		},
		{
			name: 'handlers.setState',
			type: '(state: T[]) => void',
			description_es:
				'Reemplaza el estado completo con el array proporcionado.',
			description_en:
				'Replaces the entire state with the provided array.',
		},
		{
			name: 'handlers.append',
			type: '(...items: T[]) => void',
			description_es: 'Agrega uno o más elementos al final del array.',
			description_en:
				'Appends one or more items to the end of the array.',
		},
		{
			name: 'handlers.prepend',
			type: '(...items: T[]) => void',
			description_es: 'Agrega uno o más elementos al inicio del array.',
			description_en:
				'Prepends one or more items to the beginning of the array.',
		},
		{
			name: 'handlers.insert',
			type: '(index: number, ...items: T[]) => void',
			description_es: 'Inserta elementos en el índice especificado.',
			description_en: 'Inserts items at the specified index.',
		},
		{
			name: 'handlers.pop',
			type: '() => void',
			description_es: 'Elimina el último elemento del array.',
			description_en: 'Removes the last item from the array.',
		},
		{
			name: 'handlers.shift',
			type: '() => void',
			description_es: 'Elimina el primer elemento del array.',
			description_en: 'Removes the first item from the array.',
		},
		{
			name: 'handlers.apply',
			type: '(fn: (item: T, index: number) => T) => void',
			description_es:
				'Aplica una función de transformación a todos los elementos.',
			description_en: 'Applies a transformation function to all items.',
		},
		{
			name: 'handlers.applyWhere',
			type: '(condition: (item: T, index: number) => boolean, fn: (item: T) => T) => void',
			description_es:
				'Aplica una transformación solo a los elementos que cumplan la condición.',
			description_en:
				'Applies a transformation only to items matching the condition.',
		},
		{
			name: 'handlers.remove',
			type: '(...indices: number[]) => void',
			description_es:
				'Elimina los elementos en los índices especificados.',
			description_en: 'Removes items at the specified indices.',
		},
		{
			name: 'handlers.reorder',
			type: '({ from: number, to: number }) => void',
			description_es: 'Mueve un elemento de un índice a otro.',
			description_en: 'Moves an item from one index to another.',
		},
		{
			name: 'handlers.swap',
			type: '({ a: number, b: number }) => void',
			description_es: 'Intercambia los elementos en los índices dados.',
			description_en: 'Swaps the items at the given indices.',
		},
		{
			name: 'handlers.setItem',
			type: '(index: number, item: T) => void',
			description_es: 'Reemplaza el elemento en el índice especificado.',
			description_en: 'Replaces the item at the specified index.',
		},
		{
			name: 'handlers.setItemProp',
			type: '<K extends keyof T>(index: number, prop: K, value: T[K]) => void',
			description_es:
				'Actualiza una propiedad específica de un elemento en el índice dado.',
			description_en:
				'Updates a specific property of an item at the given index.',
		},
		{
			name: 'handlers.filter',
			type: '(fn: (item: T, index: number) => boolean) => void',
			description_es:
				'Filtra el array conservando solo los elementos que cumplan la condición.',
			description_en:
				'Filters the array keeping only items that satisfy the condition.',
		},
	],
};

export default function UseListStatePage() {
	return <HookDoc config={config} />;
}
