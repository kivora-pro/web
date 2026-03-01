'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { ActionIcon } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'ActionIcon',
	category: 'buttons',
	status: 'stable',
	description_es:
		'Botón cuadrado optimizado para iconos. Sigue las mismas variantes y tamaños que Button. Requiere aria-label para accesibilidad.',
	description_en:
		'Square button optimised for icons. Follows the same variants and sizes as Button. Requires aria-label for accessibility.',
	controls: [
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['solid', 'outline', 'ghost', 'subtle', 'link'],
			defaultValue: 'subtle',
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
			prop: 'loading',
			label_es: 'loading',
			label_en: 'loading',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'disabled',
			label_es: 'disabled',
			label_en: 'disabled',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const propParts: string[] = ['aria-label="Editar"'];

		if (v.variant !== 'subtle') propParts.push(`variant="${v.variant}"`);
		if (v.size !== 'md') propParts.push(`size="${v.size}"`);
		if (v.loading) propParts.push('loading');
		if (v.disabled) propParts.push('disabled');

		const propsStr = ' ' + propParts.join(' ');

		return [
			`import { ActionIcon } from '@kivora/react';`,
			'',
			`<ActionIcon${propsStr}>`,
			`  <PencilIcon />`,
			'</ActionIcon>',
		].join('\n');
	},
	props: [
		{
			name: 'variant',
			type: "'solid' | 'outline' | 'ghost' | 'subtle' | 'link'",
			defaultValue: "'subtle'",
			description_es: 'Variante visual del botón.',
			description_en: 'Visual variant of the button.',
		},
		{
			name: 'size',
			type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			defaultValue: "'md'",
			description_es: 'Tamaño del botón (ancho = alto).',
			description_en: 'Size of the button (width = height).',
		},
		{
			name: 'loading',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra un spinner y deshabilita el botón.',
			description_en: 'Shows a spinner and disables the button.',
		},
		{
			name: 'aria-label',
			type: 'string',
			required: true,
			description_es:
				'Descripción accesible del botón. Requerido ya que no tiene texto visible.',
			description_en:
				'Accessible description for the button. Required since there is no visible text.',
		},
		{
			name: 'color',
			type: 'string',
			description_es:
				'Color personalizado que sobreescribe el color de la marca.',
			description_en: 'Custom color overriding the brand color.',
		},
		{
			name: 'radius',
			type: 'string',
			defaultValue: "'0.375rem'",
			description_es: 'Radio del borde del botón.',
			description_en: 'Border radius of the button.',
		},
		{
			name: 'gradient',
			type: '{ from: string; to: string; deg?: number }',
			description_es: 'Gradiente de color para la variante gradient.',
			description_en: 'Color gradient for the gradient variant.',
		},
		{
			name: 'component',
			type: 'React.ElementType',
			defaultValue: "'button'",
			description_es:
				'Elemento o componente que se renderiza internamente (polimorfismo).',
			description_en:
				'Element or component rendered internally (polymorphism).',
		},
		{
			name: 'href',
			type: 'string',
			description_es:
				'Si se pasa, el botón se renderiza como elemento <a>.',
			description_en:
				'When provided, the button renders as an <a> element.',
		},
		{
			name: 'children',
			type: 'React.ReactNode',
			required: true,
			description_es: 'Icono a mostrar dentro del botón.',
			description_en: 'Icon to display inside the button.',
		},
	],
};

// Simple SVG icon for the preview
function PencilIcon() {
	return (
		<svg
			className='h-4 w-4'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeWidth={2}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z'
			/>
		</svg>
	);
}

function renderPreview(v: ControlValues) {
	return (
		<ActionIcon
			variant={v.variant as never}
			size={v.size as never}
			loading={v.loading as boolean}
			disabled={v.disabled as boolean}
			aria-label='Editar'>
			<PencilIcon />
		</ActionIcon>
	);
}

export default function ActionIconPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
