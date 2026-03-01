'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useLocalStorage',
	description_es:
		'Gestiona un valor en `localStorage` con serialización automática y sincronización entre pestañas.',
	description_en:
		'Manages a value in `localStorage` with automatic serialization and cross-tab synchronization.',
	usage: `import { useLocalStorage } from '@kivora/react';

function Demo() {
  const [value, setValue, removeValue] = useLocalStorage({
    key: 'my-key',
    defaultValue: 'default',
  });

  return (
    <div>
      <p>Stored: {value}</p>
      <button onClick={() => setValue('new value')}>Set</button>
      <button onClick={removeValue}>Remove</button>
    </div>
  );
}`,
	params: [
		{
			name: 'options.key',
			type: 'string',
			required: true,
			description_es:
				'Clave usada para almacenar el valor en `localStorage`.',
			description_en: 'Key used to store the value in `localStorage`.',
		},
		{
			name: 'options.defaultValue',
			type: 'T',
			defaultValue: 'undefined',
			description_es:
				'Valor por defecto cuando la clave no existe en el almacenamiento.',
			description_en:
				'Default value when the key does not exist in storage.',
		},
		{
			name: 'options.serialize',
			type: '(value: T) => string',
			defaultValue: 'JSON.stringify',
			description_es:
				'Función personalizada para serializar el valor antes de guardarlo.',
			description_en:
				'Custom function to serialize the value before storing.',
		},
		{
			name: 'options.deserialize',
			type: '(value: string) => T',
			defaultValue: 'JSON.parse',
			description_es:
				'Función personalizada para deserializar el valor al leerlo.',
			description_en:
				'Custom function to deserialize the value when reading.',
		},
		{
			name: 'options.getInitialValueInEffect',
			type: 'boolean',
			defaultValue: 'true',
			description_es:
				'Si es `true`, el valor inicial se lee dentro de un efecto para evitar errores de hidratación.',
			description_en:
				'If `true`, the initial value is read inside an effect to avoid hydration mismatch.',
		},
	],
	returns: [
		{
			name: 'value',
			type: 'T | undefined',
			description_es: 'Valor actual almacenado en `localStorage`.',
			description_en: 'Current value stored in `localStorage`.',
		},
		{
			name: 'setValue',
			type: '(value: T | ((current: T | undefined) => T)) => void',
			description_es: 'Función para actualizar el valor almacenado.',
			description_en: 'Function to update the stored value.',
		},
		{
			name: 'removeValue',
			type: '() => void',
			description_es: 'Elimina la clave del `localStorage`.',
			description_en: 'Removes the key from `localStorage`.',
		},
	],
};

export default function UseLocalStoragePage() {
	return <HookDoc config={config} />;
}
