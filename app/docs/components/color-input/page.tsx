'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { ColorInput } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'ColorInput',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Campo de entrada para seleccionar colores. Incluye un picker visual, soporte para múltiples formatos (hex, rgb, hsl) y swatches de colores predefinidos.',
	description_en:
		'Input field for selecting colors. Includes a visual picker, support for multiple formats (hex, rgb, hsl) and predefined color swatches.',
	controls: [
		{
			type: 'select',
			prop: 'format',
			label_es: 'Formato',
			label_en: 'Format',
			options: ['hex', 'rgb', 'rgba', 'hsl', 'hsla'],
			defaultValue: 'hex',
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
			type: 'text',
			prop: 'label',
			label_es: 'Etiqueta',
			label_en: 'Label',
			defaultValue: 'Color',
		},
		{
			type: 'text',
			prop: 'placeholder',
			label_es: 'Placeholder',
			label_en: 'Placeholder',
			defaultValue: '#ffffff',
		},
		{
			type: 'boolean',
			prop: 'withPicker',
			label_es: 'Con picker',
			label_en: 'With picker',
			defaultValue: true,
		},
		{
			type: 'boolean',
			prop: 'disabled',
			label_es: 'Deshabilitado',
			label_en: 'Disabled',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [];
		if (v.format !== 'hex') props.push(`format="${v.format}"`);
		if (v.size !== 'md') props.push(`size="${v.size}"`);
		if (v.label) props.push(`label="${v.label}"`);
		if (v.placeholder !== '#ffffff')
			props.push(`placeholder="${v.placeholder}"`);
		if (!v.withPicker) props.push('withPicker={false}');
		if (v.disabled) props.push('disabled');
		const propsStr = props.length ? '\n  ' + props.join('\n  ') : '';
		return `import { ColorInput } from '@kivora/react';\n\n<ColorInput${propsStr}\n  defaultValue="#1c7ed6"\n/>`;
	},
	props: [
		{
			name: 'value',
			type: 'string',
			description_es: 'Valor actual del color (modo controlado).',
			description_en: 'Current color value (controlled mode).',
		},
		{
			name: 'defaultValue',
			type: 'string',
			description_es: 'Valor inicial del color (modo no controlado).',
			description_en: 'Initial color value (uncontrolled mode).',
		},
		{
			name: 'onChange',
			type: '(value: string) => void',
			description_es: 'Callback llamado cuando el color cambia.',
			description_en: 'Callback called when the color changes.',
		},
		{
			name: 'format',
			type: '"hex" | "rgb" | "rgba" | "hsl" | "hsla"',
			defaultValue: '"hex"',
			description_es: 'Formato de salida del color.',
			description_en: 'Output format of the color.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del campo de entrada.',
			description_en: 'Size of the input field.',
		},
		{
			name: 'withPicker',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Muestra u oculta el picker de color.',
			description_en: 'Shows or hides the color picker.',
		},
		{
			name: 'swatches',
			type: 'string[]',
			description_es: 'Colores predefinidos mostrados como swatches.',
			description_en: 'Predefined colors shown as swatches.',
		},
		{
			name: 'swatchesPerRow',
			type: 'number',
			defaultValue: '7',
			description_es: 'Número de swatches por fila.',
			description_en: 'Number of swatches per row.',
		},
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta encima del input.',
			description_en: 'Label above the input.',
		},
		{
			name: 'placeholder',
			type: 'string',
			description_es: 'Texto placeholder del input.',
			description_en: 'Input placeholder text.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el input.',
			description_en: 'Disables the input.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-64'>
			<ColorInput
				format={v.format as 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla'}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				label={v.label as string}
				placeholder={v.placeholder as string}
				withPicker={v.withPicker as boolean}
				disabled={v.disabled as boolean}
				defaultValue='#1c7ed6'
			/>
		</div>
	);
}

export default function ColorInputPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
