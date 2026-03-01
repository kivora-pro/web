'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Flex } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Flex',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Contenedor flexbox con control sobre dirección, alineación, espaciado y desbordamiento.',
	description_en:
		'Flexbox container with control over direction, alignment, gap and wrapping.',
	controls: [
		{
			type: 'select',
			prop: 'direction',
			label_es: 'Dirección',
			label_en: 'Direction',
			options: ['row', 'row-reverse', 'column', 'column-reverse'],
			defaultValue: 'row',
		},
		{
			type: 'select',
			prop: 'align',
			label_es: 'Alinear items',
			label_en: 'Align items',
			options: ['flex-start', 'center', 'flex-end', 'stretch'],
			defaultValue: 'center',
		},
		{
			type: 'select',
			prop: 'justify',
			label_es: 'Justificar',
			label_en: 'Justify',
			options: [
				'flex-start',
				'center',
				'flex-end',
				'space-between',
				'space-around',
			],
			defaultValue: 'flex-start',
		},
		{
			type: 'select',
			prop: 'gap',
			label_es: 'Gap',
			label_en: 'Gap',
			options: ['0', '8', '16', '24', '32'],
			defaultValue: '16',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const parts: string[] = [];
		if (v.direction !== 'row') parts.push(`direction="${v.direction}"`);
		if (v.align !== 'center') parts.push(`align="${v.align}"`);
		if (v.justify !== 'flex-start') parts.push(`justify="${v.justify}"`);
		if (v.gap !== '16') parts.push(`gap={${v.gap}}`);
		const propsStr = parts.length ? ' ' + parts.join(' ') : '';
		return [
			`import { Flex } from '@kivora/react';`,
			'',
			`<Flex${propsStr}>`,
			`  <div>Item 1</div>`,
			`  <div>Item 2</div>`,
			`  <div>Item 3</div>`,
			`</Flex>`,
		].join('\n');
	},
	props: [
		{
			name: 'direction',
			type: 'React.CSSProperties["flexDirection"]',
			defaultValue: "'row'",
			description_es: 'Dirección del eje principal.',
			description_en: 'Main axis direction.',
		},
		{
			name: 'gap',
			type: 'number | string',
			description_es: 'Espacio entre elementos.',
			description_en: 'Space between items.',
		},
		{
			name: 'align',
			type: 'React.CSSProperties["alignItems"]',
			description_es: 'Alineación en el eje cruzado.',
			description_en: 'Cross axis alignment.',
		},
		{
			name: 'justify',
			type: 'React.CSSProperties["justifyContent"]',
			description_es: 'Distribución en el eje principal.',
			description_en: 'Main axis distribution.',
		},
		{
			name: 'wrap',
			type: 'React.CSSProperties["flexWrap"]',
			defaultValue: "'nowrap'",
			description_es: 'Comportamiento de desbordamiento.',
			description_en: 'Overflow wrapping behavior.',
		},
		{
			name: 'rowGap',
			type: 'number | string',
			description_es: 'Espacio entre filas.',
			description_en: 'Space between rows.',
		},
		{
			name: 'columnGap',
			type: 'number | string',
			description_es: 'Espacio entre columnas.',
			description_en: 'Space between columns.',
		},
	],
};

export default function FlexPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<Flex
					direction={v.direction as 'row' | 'column'}
					align={v.align as string}
					justify={v.justify as string}
					gap={Number(v.gap)}
					className='w-full rounded-lg border border-dashed border-border p-4'>
					{['Item 1', 'Item 2', 'Item 3'].map((t) => (
						<div
							key={t}
							className='rounded bg-muted px-3 py-2 text-sm text-on-surface'>
							{t}
						</div>
					))}
				</Flex>
			)}
		/>
	);
}
