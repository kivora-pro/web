'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Group } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Group',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Distribuye elementos hijos en fila con control de alineación, separación y desbordamiento.',
	description_en:
		'Arranges children in a row with alignment, gap and wrap controls.',
	controls: [
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
			prop: 'align',
			label_es: 'Alinear',
			label_en: 'Align',
			options: ['flex-start', 'center', 'flex-end'],
			defaultValue: 'center',
		},
		{
			type: 'select',
			prop: 'gap',
			label_es: 'Gap',
			label_en: 'Gap',
			options: ['4', '8', '16', '24', '32'],
			defaultValue: '16',
		},
		{
			type: 'boolean',
			prop: 'grow',
			label_es: 'grow',
			label_en: 'grow',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const parts: string[] = [];
		if (v.justify !== 'flex-start') parts.push(`justify="${v.justify}"`);
		if (v.align !== 'center') parts.push(`align="${v.align}"`);
		if (v.gap !== '16') parts.push(`gap={${v.gap}}`);
		if (v.grow) parts.push('grow');
		const propsStr = parts.length ? ' ' + parts.join(' ') : '';
		return [
			`import { Group } from '@kivora/react';`,
			'',
			`<Group${propsStr}>`,
			`  <div>Item 1</div>`,
			`  <div>Item 2</div>`,
			`  <div>Item 3</div>`,
			`</Group>`,
		].join('\n');
	},
	props: [
		{
			name: 'gap',
			type: 'number | string',
			description_es: 'Espacio entre elementos.',
			description_en: 'Space between items.',
		},
		{
			name: 'align',
			type: 'React.CSSProperties["alignItems"]',
			defaultValue: "'center'",
			description_es: 'Alineación vertical de los elementos.',
			description_en: 'Vertical alignment of items.',
		},
		{
			name: 'justify',
			type: 'React.CSSProperties["justifyContent"]',
			defaultValue: "'flex-start'",
			description_es: 'Distribución horizontal.',
			description_en: 'Horizontal distribution.',
		},
		{
			name: 'wrap',
			type: 'React.CSSProperties["flexWrap"]',
			defaultValue: "'wrap'",
			description_es: 'Desbordamiento en nueva fila.',
			description_en: 'Overflow wrapping.',
		},
		{
			name: 'grow',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Los elementos crecen para rellenar el espacio.',
			description_en: 'Items grow to fill the space.',
		},
	],
};

export default function GroupPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<Group
					justify={v.justify as string}
					align={v.align as string}
					gap={Number(v.gap)}
					grow={v.grow as boolean}
					className='w-full rounded-lg border border-dashed border-border p-4'>
					{['Item 1', 'Item 2', 'Item 3'].map((t) => (
						<div
							key={t}
							className='rounded bg-muted px-3 py-2 text-sm text-on-surface'>
							{t}
						</div>
					))}
				</Group>
			)}
		/>
	);
}
