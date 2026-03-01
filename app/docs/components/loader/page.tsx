'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Loader } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Loader',
	category: 'feedback',
	status: 'stable',
	description_es:
		'Indicador de carga animado disponible en tres variantes visuales: oval (spinner), bars (barras) y dots (puntos). Ideal para señalar estados de procesamiento.',
	description_en:
		'Animated loading indicator available in three visual styles: oval (spinner), bars, and dots. Ideal for signaling processing states.',
	controls: [
		{
			type: 'select',
			prop: 'type',
			label_es: 'Tipo',
			label_en: 'Type',
			options: ['oval', 'bars', 'dots'],
			defaultValue: 'oval',
		},
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Loader type="${v.type}" size="${v.size}" />`,
	props: [
		{
			name: 'type',
			type: '"oval" | "bars" | "dots"',
			defaultValue: '"oval"',
			description_es: 'Variante visual del indicador de carga.',
			description_en: 'Visual variant of the loading indicator.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl" | number',
			defaultValue: '"md"',
			description_es:
				'Tamaño del loader. Acepta claves semánticas o píxeles directos.',
			description_en:
				'Loader size. Accepts semantic keys or direct pixel values.',
		},
		{
			name: 'color',
			type: 'string',
			defaultValue: '—',
			description_es:
				'Color CSS del loader (por defecto usa el color de la marca).',
			description_en:
				'CSS color of the loader (defaults to brand color).',
		},
		{
			name: 'aria-label',
			type: 'string',
			defaultValue: '"Loading"',
			description_es: 'Etiqueta accesible para lectores de pantalla.',
			description_en: 'Accessible label for screen readers.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Loader
			type={v.type as 'oval' | 'bars' | 'dots'}
			size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
		/>
	);
}

export default function LoaderPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
