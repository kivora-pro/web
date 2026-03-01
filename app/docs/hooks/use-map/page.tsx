'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useMap',
	description_es:
		'Gestiona un `Map` de JavaScript como estado reactivo de React, proporcionando métodos similares a los de `Map` nativo que desencadenan re-renderizados al mutar.',
	description_en:
		'Manages a JavaScript `Map` as reactive React state, providing native Map-like methods that trigger re-renders on mutation.',
	usage: `import { useMap } from '@kivora/react';

function Demo() {
  const map = useMap<string, number>([['apples', 3], ['bananas', 5]]);

  return (
    <div>
      <p>Apples: {map.get('apples')}</p>
      <p>Size: {map.size}</p>
      <button onClick={() => map.set('oranges', 7)}>Add oranges</button>
      <button onClick={() => map.delete('bananas')}>Remove bananas</button>
      <button onClick={() => map.clear()}>Clear all</button>
    </div>
  );
}`,
	params: [
		{
			name: 'initialValue',
			type: '[K, V][]',
			defaultValue: '[]',
			description_es: 'Pares clave-valor iniciales para el mapa.',
			description_en: 'Initial key-value pairs for the map.',
		},
	],
	returns: [
		{
			name: 'get',
			type: '(key: K) => V | undefined',
			description_es: 'Obtiene el valor asociado a la clave.',
			description_en: 'Gets the value associated with the key.',
		},
		{
			name: 'has',
			type: '(key: K) => boolean',
			description_es: 'Comprueba si el mapa contiene la clave.',
			description_en: 'Checks whether the map contains the key.',
		},
		{
			name: 'set',
			type: '(key: K, value: V) => void',
			description_es:
				'Agrega o actualiza la entrada con la clave dada y desencadena un re-renderizado.',
			description_en:
				'Adds or updates the entry with the given key and triggers a re-render.',
		},
		{
			name: 'delete',
			type: '(key: K) => void',
			description_es: 'Elimina la entrada con la clave dada.',
			description_en: 'Removes the entry with the given key.',
		},
		{
			name: 'clear',
			type: '() => void',
			description_es: 'Elimina todas las entradas del mapa.',
			description_en: 'Removes all entries from the map.',
		},
		{
			name: 'entries',
			type: '() => IterableIterator<[K, V]>',
			description_es:
				'Devuelve un iterador sobre los pares [clave, valor].',
			description_en: 'Returns an iterator over [key, value] pairs.',
		},
		{
			name: 'keys',
			type: '() => IterableIterator<K>',
			description_es: 'Devuelve un iterador sobre las claves del mapa.',
			description_en: 'Returns an iterator over the map keys.',
		},
		{
			name: 'values',
			type: '() => IterableIterator<V>',
			description_es: 'Devuelve un iterador sobre los valores del mapa.',
			description_en: 'Returns an iterator over the map values.',
		},
		{
			name: 'forEach',
			type: '(callback: (value: V, key: K) => void) => void',
			description_es:
				'Ejecuta el callback por cada par clave-valor del mapa.',
			description_en:
				'Executes the callback for each key-value pair in the map.',
		},
		{
			name: 'size',
			type: 'number',
			description_es: 'Número de entradas en el mapa.',
			description_en: 'Number of entries in the map.',
		},
	],
};

export default function UseMapPage() {
	return <HookDoc config={config} />;
}
