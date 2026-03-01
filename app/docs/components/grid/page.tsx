'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Grid, GridCol } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Grid',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Sistema de grid de 12 columnas con soporte de span, offset y orden por columna hija.',
	description_en:
		'12-column grid system with span, offset and order support per child column.',
	controls: [
		{
			type: 'select',
			prop: 'columns',
			label_es: 'Columnas totales',
			label_en: 'Total columns',
			options: ['12', '6', '4', '3'],
			defaultValue: '12',
		},
		{
			type: 'select',
			prop: 'gutter',
			label_es: 'Gutter',
			label_en: 'Gutter',
			options: ['4', '8', '16', '24'],
			defaultValue: '16',
		},
	],
	codeTemplate: (v: ControlValues) => {
		return [
			`import { Grid, GridCol } from '@kivora/react';`,
			'',
			`<Grid columns={${v.columns}} gutter={${v.gutter}}>`,
			`  <GridCol span={6}>6 cols</GridCol>`,
			`  <GridCol span={6}>6 cols</GridCol>`,
			`  <GridCol span={4}>4 cols</GridCol>`,
			`  <GridCol span={4}>4 cols</GridCol>`,
			`  <GridCol span={4}>4 cols</GridCol>`,
			`</Grid>`,
		].join('\n');
	},
	props: [
		{
			name: 'columns',
			type: 'number',
			defaultValue: '12',
			description_es: 'Número total de columnas del grid.',
			description_en: 'Total number of grid columns.',
		},
		{
			name: 'gutter',
			type: 'number | string',
			description_es: 'Espacio entre columnas y filas.',
			description_en: 'Space between columns and rows.',
		},
		{
			name: 'GridCol.span',
			type: "number | 'auto' | 'content'",
			description_es: 'Número de columnas que ocupa el elemento hijo.',
			description_en: 'Number of columns the child occupies.',
		},
		{
			name: 'GridCol.offset',
			type: 'number',
			description_es: 'Columnas de offset a la izquierda.',
			description_en: 'Left offset columns.',
		},
		{
			name: 'GridCol.order',
			type: 'number',
			description_es: 'Orden del elemento dentro del grid.',
			description_en: 'Element order within the grid.',
		},
	],
};

export default function GridPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<Grid
					columns={Number(v.columns)}
					gutter={Number(v.gutter)}
					className='w-full'>
					<GridCol span={6}>
						<div className='flex h-10 items-center justify-center rounded bg-muted text-sm text-on-surface'>
							span 6
						</div>
					</GridCol>
					<GridCol span={6}>
						<div className='flex h-10 items-center justify-center rounded bg-muted text-sm text-on-surface'>
							span 6
						</div>
					</GridCol>
					<GridCol span={4}>
						<div className='flex h-10 items-center justify-center rounded bg-muted text-sm text-on-surface'>
							span 4
						</div>
					</GridCol>
					<GridCol span={4}>
						<div className='flex h-10 items-center justify-center rounded bg-muted text-sm text-on-surface'>
							span 4
						</div>
					</GridCol>
					<GridCol span={4}>
						<div className='flex h-10 items-center justify-center rounded bg-muted text-sm text-on-surface'>
							span 4
						</div>
					</GridCol>
				</Grid>
			)}
		/>
	);
}
