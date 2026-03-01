'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { SimpleGrid } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'SimpleGrid',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Grid responsivo simplificado con número de columnas fijo o adaptativo y control de espaciado.',
	description_en:
		'Simplified responsive grid with fixed or adaptive column count and spacing control.',
	controls: [
		{
			type: 'select',
			prop: 'cols',
			label_es: 'Columnas',
			label_en: 'Columns',
			options: ['1', '2', '3', '4', '6'],
			defaultValue: '3',
		},
		{
			type: 'select',
			prop: 'spacing',
			label_es: 'Espacio',
			label_en: 'Spacing',
			options: ['4', '8', '16', '24'],
			defaultValue: '16',
		},
	],
	codeTemplate: (v: ControlValues) => {
		return [
			`import { SimpleGrid } from '@kivora/react';`,
			'',
			`<SimpleGrid cols={${v.cols}} spacing={${v.spacing}}>`,
			`  <div>1</div>`,
			`  <div>2</div>`,
			`  <div>3</div>`,
			`  <div>4</div>`,
			`  <div>5</div>`,
			`  <div>6</div>`,
			`</SimpleGrid>`,
		].join('\n');
	},
	props: [
		{
			name: 'cols',
			type: 'number | { base?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number }',
			defaultValue: '1',
			description_es: 'Número de columnas, puede ser responsivo.',
			description_en: 'Number of columns, can be responsive.',
		},
		{
			name: 'spacing',
			type: 'number | string',
			description_es: 'Espacio entre elementos.',
			description_en: 'Space between items.',
		},
		{
			name: 'verticalSpacing',
			type: 'number | string',
			description_es: 'Espacio vertical entre filas.',
			description_en: 'Vertical space between rows.',
		},
	],
};

export default function SimpleGridPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<SimpleGrid
					cols={Number(v.cols)}
					spacing={Number(v.spacing)}
					className='w-full'>
					{Array.from({ length: 6 }, (_, i) => (
						<div
							key={i}
							className='flex h-12 items-center justify-center rounded bg-muted text-sm font-medium text-on-surface'>
							{i + 1}
						</div>
					))}
				</SimpleGrid>
			)}
		/>
	);
}
