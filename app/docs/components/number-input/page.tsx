'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { NumberInput } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'NumberInput',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Campo numérico con controles de incremento/decremento, soporte para prefijos, sufijos, separadores de miles, decimales y límites min/max.',
	description_en:
		'Numeric input with increment/decrement controls, prefix, suffix, thousand separators, decimals and min/max limits.',
	controls: [
		{
			type: 'text',
			prop: 'label',
			label_es: 'Label',
			label_en: 'Label',
			defaultValue: 'Cantidad',
		},
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
		{
			type: 'range',
			prop: 'step',
			label_es: 'Step',
			label_en: 'Step',
			min: 1,
			max: 10,
			step: 1,
			defaultValue: 1,
		},
		{
			type: 'boolean',
			prop: 'hideControls',
			label_es: 'Ocultar botones',
			label_en: 'Hide controls',
			defaultValue: false,
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
		`<NumberInput
  label="${v.label}"
  placeholder="0"
  size="${v.size}"
  step={${v.step}}${v.hideControls ? '\n  hideControls' : ''}${v.disabled ? '\n  disabled' : ''}
/>`,
	props: [
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta del campo.',
			description_en: 'Input label.',
		},
		{
			name: 'value',
			type: 'number | string',
			description_es: 'Valor controlado.',
			description_en: 'Controlled value.',
		},
		{
			name: 'defaultValue',
			type: 'number | string',
			description_es: 'Valor inicial (no controlado).',
			description_en: 'Initial value (uncontrolled).',
		},
		{
			name: 'onChange',
			type: '(value: number | string) => void',
			description_es: 'Callback al cambiar el valor.',
			description_en: 'Callback when value changes.',
		},
		{
			name: 'min',
			type: 'number',
			description_es: 'Valor mínimo permitido.',
			description_en: 'Minimum allowed value.',
		},
		{
			name: 'max',
			type: 'number',
			description_es: 'Valor máximo permitido.',
			description_en: 'Maximum allowed value.',
		},
		{
			name: 'step',
			type: 'number',
			defaultValue: '1',
			description_es: 'Incremento/decremento por clic en los controles.',
			description_en: 'Increment/decrement amount per control click.',
		},
		{
			name: 'prefix',
			type: 'string',
			description_es: 'Prefijo mostrado antes del número (ej. "$").',
			description_en: 'Prefix shown before the number (e.g. "$").',
		},
		{
			name: 'suffix',
			type: 'string',
			description_es: 'Sufijo mostrado tras el número (ej. "kg").',
			description_en: 'Suffix shown after the number (e.g. "kg").',
		},
		{
			name: 'hideControls',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Oculta los botones de incremento/decremento.',
			description_en: 'Hides the increment/decrement buttons.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del campo.',
			description_en: 'Input size.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el campo.',
			description_en: 'Disables the input.',
		},
		{
			name: 'error',
			type: 'ReactNode',
			description_es: 'Mensaje de error.',
			description_en: 'Error message.',
		},
		{
			name: 'description',
			type: 'ReactNode',
			description_es: 'Texto de ayuda debajo del campo.',
			description_en: 'Helper text below the input.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-72'>
			<NumberInput
				label={v.label as string}
				placeholder='0'
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				step={v.step as number}
				hideControls={v.hideControls as boolean}
				disabled={v.disabled as boolean}
			/>
		</div>
	);
}

export default function NumberInputPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
