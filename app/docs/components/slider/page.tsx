'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Slider } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Slider',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Selector deslizante para elegir un valor numérico dentro de un rango. Soporta marcas, etiqueta de valor, modo invertido y múltiples tamaños.',
	description_en:
		'Sliding selector to choose a numeric value within a range. Supports marks, value label, inverted mode and multiple sizes.',
	controls: [
		{
			type: 'range',
			prop: 'min',
			label_es: 'Mínimo',
			label_en: 'Min',
			min: 0,
			max: 50,
			step: 5,
			defaultValue: 0,
		},
		{
			type: 'range',
			prop: 'max',
			label_es: 'Máximo',
			label_en: 'Max',
			min: 50,
			max: 200,
			step: 10,
			defaultValue: 100,
		},
		{
			type: 'range',
			prop: 'step',
			label_es: 'Paso',
			label_en: 'Step',
			min: 1,
			max: 20,
			step: 1,
			defaultValue: 1,
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
			type: 'boolean',
			prop: 'labelAlwaysOn',
			label_es: 'Label siempre visible',
			label_en: 'Label always on',
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
		`<Slider
  defaultValue={50}
  min={${v.min}}
  max={${v.max}}
  step={${v.step}}
  size="${v.size}"${v.labelAlwaysOn ? '\n  labelAlwaysOn' : ''}${v.disabled ? '\n  disabled' : ''}
/>`,
	props: [
		{
			name: 'value',
			type: 'number',
			description_es: 'Valor actual (modo controlado).',
			description_en: 'Current value (controlled mode).',
		},
		{
			name: 'defaultValue',
			type: 'number',
			description_es: 'Valor inicial (modo no controlado).',
			description_en: 'Initial value (uncontrolled mode).',
		},
		{
			name: 'onChange',
			type: '(value: number) => void',
			description_es: 'Callback llamado al arrastrar el thumb.',
			description_en: 'Callback called while dragging the thumb.',
		},
		{
			name: 'onChangeEnd',
			type: '(value: number) => void',
			description_es: 'Callback llamado al soltar el thumb.',
			description_en: 'Callback called when the thumb is released.',
		},
		{
			name: 'min',
			type: 'number',
			defaultValue: '0',
			description_es: 'Valor mínimo del rango.',
			description_en: 'Minimum range value.',
		},
		{
			name: 'max',
			type: 'number',
			defaultValue: '100',
			description_es: 'Valor máximo del rango.',
			description_en: 'Maximum range value.',
		},
		{
			name: 'step',
			type: 'number',
			defaultValue: '1',
			description_es: 'Incremento entre valores.',
			description_en: 'Increment between values.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño visual del slider.',
			description_en: 'Visual size of the slider.',
		},
		{
			name: 'marks',
			type: '{ value: number; label?: ReactNode }[]',
			description_es: 'Marcas a lo largo del track.',
			description_en: 'Marks along the track.',
		},
		{
			name: 'label',
			type: 'ReactNode | ((value: number) => ReactNode)',
			description_es: 'Contenido del tooltip de valor.',
			description_en: 'Value tooltip content.',
		},
		{
			name: 'labelAlwaysOn',
			type: 'boolean',
			description_es: 'Siempre muestra el tooltip de valor.',
			description_en: 'Always show the value tooltip.',
		},
		{
			name: 'showLabelOnHover',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Muestra el tooltip al hacer hover.',
			description_en: 'Show tooltip on hover.',
		},
		{
			name: 'inverted',
			type: 'boolean',
			description_es: 'Invierte el relleno del track.',
			description_en: 'Inverts the track fill.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el slider.',
			description_en: 'Disables the slider.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-64'>
			<Slider
				defaultValue={50}
				min={v.min as number}
				max={v.max as number}
				step={v.step as number}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				labelAlwaysOn={v.labelAlwaysOn as boolean}
				disabled={v.disabled as boolean}
			/>
		</div>
	);
}

export default function SliderPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
