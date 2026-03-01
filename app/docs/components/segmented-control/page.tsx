'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { SegmentedControl } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'SegmentedControl',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Control de selección por segmentos, similar a un grupo de radio buttons pero con transición visual animada entre opciones. Soporta orientación horizontal y vertical.',
	description_en:
		'Segmented selection control, similar to a radio group but with animated visual transition between options. Supports horizontal and vertical orientation.',
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
			prop: 'radius',
			label_es: 'Radio',
			label_en: 'Radius',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'sm',
		},
		{
			type: 'select',
			prop: 'orientation',
			label_es: 'Orientación',
			label_en: 'Orientation',
			options: ['horizontal', 'vertical'],
			defaultValue: 'horizontal',
		},
		{
			type: 'boolean',
			prop: 'fullWidth',
			label_es: 'Ancho completo',
			label_en: 'Full width',
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
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [`data={['Lista', 'Cuadrícula', 'Tabla']}`];
		if (v.size !== 'md') props.push(`size="${v.size}"`);
		if (v.radius !== 'sm') props.push(`radius="${v.radius}"`);
		if (v.orientation !== 'horizontal')
			props.push(`orientation="${v.orientation}"`);
		if (v.fullWidth) props.push('fullWidth');
		if (v.disabled) props.push('disabled');
		return `import { SegmentedControl } from '@kivora/react';\n\n<SegmentedControl\n  ${props.join('\n  ')}\n/>`;
	},
	props: [
		{
			name: 'data',
			type: 'string[] | { value: string; label: ReactNode; disabled?: boolean }[]',
			required: true,
			description_es: 'Opciones del control.',
			description_en: 'Control options.',
		},
		{
			name: 'value',
			type: 'string',
			description_es: 'Valor seleccionado (modo controlado).',
			description_en: 'Selected value (controlled mode).',
		},
		{
			name: 'onChange',
			type: '(value: string) => void',
			description_es: 'Callback cuando cambia la selección.',
			description_en: 'Callback when selection changes.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del control.',
			description_en: 'Control size.',
		},
		{
			name: 'radius',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"sm"',
			description_es: 'Radio de borde del control.',
			description_en: 'Control border radius.',
		},
		{
			name: 'fullWidth',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'El control ocupa el ancho completo.',
			description_en: 'Control takes full width.',
		},
		{
			name: 'orientation',
			type: '"horizontal" | "vertical"',
			defaultValue: '"horizontal"',
			description_es: 'Orientación del control.',
			description_en: 'Control orientation.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el control.',
			description_en: 'Disables the control.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color del segmento activo.',
			description_en: 'Active segment color.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<SegmentedControl
			data={['Lista', 'Cuadrícula', 'Tabla']}
			size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			radius={v.radius as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			orientation={v.orientation as 'horizontal' | 'vertical'}
			fullWidth={v.fullWidth as boolean}
			disabled={v.disabled as boolean}
		/>
	);
}

export default function SegmentedControlPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
