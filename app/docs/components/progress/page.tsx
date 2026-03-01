'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Progress } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Progress',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Barra de progreso accesible con atributos ARIA. Soporta rayas animadas, etiqueta interna, secciones múltiples con color independiente y transición configurable.',
	description_en:
		'Accessible progress bar with ARIA attributes. Supports animated stripes, inner label, multiple colored sections and configurable transition.',
	controls: [
		{
			type: 'range',
			prop: 'value',
			label_es: 'Valor (%)',
			label_en: 'Value (%)',
			min: 0,
			max: 100,
			step: 5,
			defaultValue: 60,
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
			prop: 'striped',
			label_es: 'Rayas',
			label_en: 'Striped',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'animated',
			label_es: 'Animado',
			label_en: 'Animated',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Progress
  value={${v.value}}
  size="${v.size}"${v.striped ? '\n  striped' : ''}${v.animated ? '\n  animated' : ''}
/>`,
	props: [
		{
			name: 'value',
			type: 'number',
			defaultValue: '0',
			description_es: 'Porcentaje de progreso (0-100).',
			description_en: 'Progress percentage (0-100).',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl" | number',
			defaultValue: '"md"',
			description_es: 'Altura de la barra.',
			description_en: 'Height of the bar.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color del relleno de la barra.',
			description_en: 'Fill color of the bar.',
		},
		{
			name: 'radius',
			type: 'string',
			defaultValue: '"2rem"',
			description_es: 'Radio de borde CSS.',
			description_en: 'CSS border radius.',
		},
		{
			name: 'striped',
			type: 'boolean',
			description_es: 'Aplica patrón de rayas.',
			description_en: 'Applies a striped pattern.',
		},
		{
			name: 'animated',
			type: 'boolean',
			description_es: 'Anima el relleno con pulso.',
			description_en: 'Animates the fill with a pulse.',
		},
		{
			name: 'label',
			type: 'string',
			description_es: 'Etiqueta de texto dentro de la barra.',
			description_en: 'Text label inside the bar.',
		},
		{
			name: 'sections',
			type: '{ value: number; color?: string; tooltip?: string }[]',
			description_es: 'Secciones múltiples con color independiente.',
			description_en: 'Multiple sections with independent color.',
		},
		{
			name: 'transitionDuration',
			type: 'number',
			description_es: 'Duración en ms de la transición del relleno.',
			description_en: 'Duration in ms of the fill transition.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-64 flex flex-col gap-3'>
			<Progress
				value={v.value as number}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				striped={v.striped as boolean}
				animated={v.animated as boolean}
			/>
		</div>
	);
}

export default function ProgressPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
