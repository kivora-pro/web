'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useUncontrolled',
	description_es:
		'Permite que un componente funcione tanto en modo controlado (con `value` externo) como no controlado (gestionando su propio estado interno), siguiendo el mismo patrón que los inputs HTML nativos.',
	description_en:
		'Allows a component to work in both controlled mode (with external `value`) and uncontrolled mode (managing its own internal state), following the same pattern as native HTML inputs.',
	usage: `import { useUncontrolled } from '@kivora/react';

interface MyInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

function MyInput({ value, defaultValue, onChange }: MyInputProps) {
  const [currentValue, handleChange, isControlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  return (
    <input
      value={currentValue}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}`,
	params: [
		{
			name: 'value',
			type: 'T',
			description_es:
				'Valor externo (modo controlado). Si se proporciona, el componente es controlado.',
			description_en:
				'External value (controlled mode). If provided, the component is controlled.',
		},
		{
			name: 'defaultValue',
			type: 'T',
			description_es: 'Valor inicial para el modo no controlado.',
			description_en: 'Initial value for uncontrolled mode.',
		},
		{
			name: 'finalValue',
			type: 'T',
			description_es:
				'Valor de respaldo cuando ni `value` ni `defaultValue` están definidos.',
			description_en:
				'Fallback value when neither `value` nor `defaultValue` are defined.',
		},
		{
			name: 'onChange',
			type: '(value: T, ...payload: any[]) => void',
			description_es:
				'Callback llamado cuando el valor cambia, tanto en modo controlado como no controlado.',
			description_en:
				'Callback called when the value changes, in both controlled and uncontrolled mode.',
		},
	],
	returns: [
		{
			name: '0 (currentValue)',
			type: 'T',
			description_es:
				'Valor actual, ya sea el externo (controlado) o el interno (no controlado).',
			description_en:
				'Current value, either the external (controlled) or internal (uncontrolled) one.',
		},
		{
			name: '1 (handleChange)',
			type: '(value: T, ...payload: any[]) => void',
			description_es:
				'Función para actualizar el valor. En modo no controlado actualiza el estado interno; en modo controlado solo invoca `onChange`.',
			description_en:
				'Function to update the value. In uncontrolled mode it updates internal state; in controlled mode it only calls `onChange`.',
		},
		{
			name: '2 (isControlled)',
			type: 'boolean',
			description_es:
				'`true` si el componente está en modo controlado (se proporcionó `value`).',
			description_en:
				'`true` if the component is in controlled mode (`value` was provided).',
		},
	],
};

export default function UseUncontrolledPage() {
	return <HookDoc config={config} />;
}
