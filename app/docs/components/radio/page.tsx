'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Radio } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'Radio',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Botón de radio para selección exclusiva dentro de un grupo. Soporta etiqueta, descripción y mensaje de error. Se usa en grupos con valor controlado o no controlado.',
	description_en:
		'Radio button for exclusive selection within a group. Supports label, description and error message. Used in groups with controlled or uncontrolled value.',
	controls: [
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
		{
			type: 'select',
			prop: 'labelPosition',
			label_es: 'Posición label',
			label_en: 'Label position',
			options: ['left', 'right'],
			defaultValue: 'right',
		},
		{
			type: 'boolean',
			prop: 'disabled',
			label_es: 'Deshabilitado',
			label_en: 'Disabled',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`const [value, setValue] = useState('react');

<Radio
  label="React"
  value="react"
  checked={value === 'react'}
  onChange={() => setValue('react')}
  size="${v.size}"
  labelPosition="${v.labelPosition}"${v.disabled ? '\n  disabled' : ''}
/>
<Radio
  label="Vue"
  value="vue"
  checked={value === 'vue'}
  onChange={() => setValue('vue')}
  size="${v.size}"
  labelPosition="${v.labelPosition}"${v.disabled ? '\n  disabled' : ''}
/>
<Radio
  label="Svelte"
  value="svelte"
  checked={value === 'svelte'}
  onChange={() => setValue('svelte')}
  size="${v.size}"
  labelPosition="${v.labelPosition}"${v.disabled ? '\n  disabled' : ''}
/>`,
	props: [
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta visible junto al radio.',
			description_en: 'Label displayed next to the radio.',
		},
		{
			name: 'value',
			type: 'string',
			description_es: 'Valor del radio dentro de su grupo.',
			description_en: 'Radio value within its group.',
		},
		{
			name: 'checked',
			type: 'boolean',
			description_es: 'Estado activo (modo controlado).',
			description_en: 'Active state (controlled mode).',
		},
		{
			name: 'defaultChecked',
			type: 'boolean',
			description_es: 'Estado inicial (modo no controlado).',
			description_en: 'Initial state (uncontrolled mode).',
		},
		{
			name: 'onChange',
			type: 'ChangeEventHandler<HTMLInputElement>',
			description_es: 'Callback llamado al cambiar.',
			description_en: 'Callback called on change.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del radio.',
			description_en: 'Radio size.',
		},
		{
			name: 'labelPosition',
			type: '"left" | "right"',
			defaultValue: '"right"',
			description_es: 'Posición del label.',
			description_en: 'Label position.',
		},
		{
			name: 'description',
			type: 'ReactNode',
			description_es: 'Texto de ayuda.',
			description_en: 'Helper text.',
		},
		{
			name: 'error',
			type: 'ReactNode',
			description_es: 'Mensaje de error.',
			description_en: 'Error message.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el radio.',
			description_en: 'Disables the radio.',
		},
	],
};

function RadioPreview({ v }: { v: ControlValues }) {
	const [selected, setSelected] = useState('react');
	const size = v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	const labelPosition = v.labelPosition as 'left' | 'right';
	const disabled = v.disabled as boolean;

	return (
		<div className='flex flex-col gap-3'>
			{['React', 'Vue', 'Svelte'].map((opt) => (
				<Radio
					key={opt}
					label={opt}
					value={opt.toLowerCase()}
					checked={selected === opt.toLowerCase()}
					onChange={() => setSelected(opt.toLowerCase())}
					size={size}
					labelPosition={labelPosition}
					disabled={disabled}
				/>
			))}
		</div>
	);
}

function renderPreview(v: ControlValues) {
	return <RadioPreview v={v} />;
}

export default function RadioPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
