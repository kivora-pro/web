'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { SemiCircleProgress } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'SemiCircleProgress',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Indicador de progreso en forma de semicírculo. Admite orientación hacia arriba/abajo, dirección de relleno y etiqueta central.',
	description_en:
		'Semi-circle shaped progress indicator. Supports up/down orientation, fill direction and center label.',
	controls: [
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['100', '150', '200', '250'],
			defaultValue: '200',
		},
		{
			type: 'select',
			prop: 'fillDirection',
			label_es: 'Dirección de relleno',
			label_en: 'Fill direction',
			options: ['left-to-right', 'right-to-left'],
			defaultValue: 'left-to-right',
		},
		{
			type: 'select',
			prop: 'orientation',
			label_es: 'Orientación',
			label_en: 'Orientation',
			options: ['up', 'down'],
			defaultValue: 'up',
		},
		{
			type: 'select',
			prop: 'labelPosition',
			label_es: 'Posición etiqueta',
			label_en: 'Label position',
			options: ['center', 'bottom'],
			defaultValue: 'center',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props = [
			`value={65}`,
			`size={${v.size}}`,
			`fillDirection="${v.fillDirection}"`,
			`orientation="${v.orientation}"`,
			`labelPosition="${v.labelPosition}"`,
			`label="65%"`,
		];
		return `import { SemiCircleProgress } from '@kivora/react';\n\n<SemiCircleProgress\n  ${props.join('\n  ')}\n/>`;
	},
	props: [
		{
			name: 'value',
			type: 'number',
			required: true,
			description_es: 'Valor del progreso (0-100).',
			description_en: 'Progress value (0-100).',
		},
		{
			name: 'size',
			type: 'number',
			description_es: 'Ancho del semicírculo en píxeles.',
			description_en: 'Semi-circle width in pixels.',
		},
		{
			name: 'thickness',
			type: 'number',
			description_es: 'Grosor del trazo.',
			description_en: 'Stroke thickness.',
		},
		{
			name: 'fillDirection',
			type: '"left-to-right" | "right-to-left"',
			defaultValue: '"left-to-right"',
			description_es: 'Dirección en que se rellena el progreso.',
			description_en: 'Direction in which progress fills.',
		},
		{
			name: 'orientation',
			type: '"up" | "down"',
			defaultValue: '"up"',
			description_es: 'Orientación del semicírculo.',
			description_en: 'Semi-circle orientation.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color del trazo de progreso.',
			description_en: 'Progress stroke color.',
		},
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta mostrada dentro del semicírculo.',
			description_en: 'Label shown inside the semi-circle.',
		},
		{
			name: 'labelPosition',
			type: '"center" | "bottom"',
			defaultValue: '"center"',
			description_es: 'Posición de la etiqueta.',
			description_en: 'Label position.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<SemiCircleProgress
			value={65}
			size={Number(v.size)}
			fillDirection={v.fillDirection as 'left-to-right' | 'right-to-left'}
			orientation={v.orientation as 'up' | 'down'}
			labelPosition={v.labelPosition as 'center' | 'bottom'}
			label='65%'
		/>
	);
}

export default function SemiCircleProgressPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
