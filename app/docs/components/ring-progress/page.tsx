'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { RingProgress } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'RingProgress',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Indicador de progreso circular en forma de anillo. Admite múltiples secciones de colores, etiqueta central y extremos redondeados.',
	description_en:
		'Circular ring-shaped progress indicator. Supports multiple color sections, center label and rounded caps.',
	controls: [
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['80', '120', '160', '200'],
			defaultValue: '120',
		},
		{
			type: 'select',
			prop: 'thickness',
			label_es: 'Grosor',
			label_en: 'Thickness',
			options: ['4', '8', '12', '16'],
			defaultValue: '12',
		},
		{
			type: 'boolean',
			prop: 'roundCaps',
			label_es: 'Extremos redondeados',
			label_en: 'Round caps',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [
			`size={${v.size}}`,
			`thickness={${v.thickness}}`,
			`sections={[{ value: 65, color: 'blue' }]}`,
		];
		if (v.roundCaps) props.push('roundCaps');
		return `import { RingProgress, Text } from '@kivora/react';\n\n<RingProgress\n  ${props.join('\n  ')}\n  label={<Text size="xs" ta="center">65%</Text>}\n/>`;
	},
	props: [
		{
			name: 'sections',
			type: '{ value: number; color: string; tooltip?: ReactNode }[]',
			required: true,
			description_es: 'Secciones del anillo, cada una con valor y color.',
			description_en: 'Ring sections, each with value and color.',
		},
		{
			name: 'size',
			type: 'number',
			defaultValue: '120',
			description_es: 'Diámetro total del anillo en píxeles.',
			description_en: 'Total ring diameter in pixels.',
		},
		{
			name: 'thickness',
			type: 'number',
			defaultValue: '12',
			description_es: 'Grosor del trazo del anillo.',
			description_en: 'Ring stroke thickness.',
		},
		{
			name: 'roundCaps',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Redondea los extremos de cada sección.',
			description_en: 'Rounds the ends of each section.',
		},
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Contenido centrado dentro del anillo.',
			description_en: 'Content centered inside the ring.',
		},
		{
			name: 'rootColor',
			type: 'string',
			description_es: 'Color del track de fondo del anillo.',
			description_en: 'Background track color of the ring.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<RingProgress
			size={Number(v.size)}
			thickness={Number(v.thickness)}
			roundCaps={v.roundCaps as boolean}
			sections={[
				{ value: 65, color: 'blue' },
				{ value: 15, color: 'cyan' },
			]}
			label={
				<span
					style={{
						display: 'block',
						textAlign: 'center',
						fontSize: 14,
					}}>
					80%
				</span>
			}
		/>
	);
}

export default function RingProgressPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
