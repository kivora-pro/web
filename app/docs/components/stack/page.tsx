'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Stack } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Stack',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Apila elementos hijos verticalmente con control de alineación y separación.',
	description_en:
		'Stacks children vertically with alignment and gap controls.',
	controls: [
		{
			type: 'select',
			prop: 'align',
			label_es: 'Alinear',
			label_en: 'Align',
			options: ['flex-start', 'center', 'flex-end', 'stretch'],
			defaultValue: 'stretch',
		},
		{
			type: 'select',
			prop: 'gap',
			label_es: 'Gap',
			label_en: 'Gap',
			options: ['4', '8', '16', '24', '32'],
			defaultValue: '16',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const parts: string[] = [];
		if (v.align !== 'stretch') parts.push(`align="${v.align}"`);
		if (v.gap !== '16') parts.push(`gap={${v.gap}}`);
		const propsStr = parts.length ? ' ' + parts.join(' ') : '';
		return [
			`import { Stack } from '@kivora/react';`,
			'',
			`<Stack${propsStr}>`,
			`  <div>Item 1</div>`,
			`  <div>Item 2</div>`,
			`  <div>Item 3</div>`,
			`</Stack>`,
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
			defaultValue: "'stretch'",
			description_es: 'Alineación horizontal de los elementos.',
			description_en: 'Horizontal alignment of items.',
		},
		{
			name: 'justify',
			type: 'React.CSSProperties["justifyContent"]',
			defaultValue: "'flex-start'",
			description_es: 'Distribución vertical.',
			description_en: 'Vertical distribution.',
		},
		{
			name: 'component',
			type: 'React.ElementType',
			defaultValue: "'div'",
			description_es: 'Elemento HTML o componente.',
			description_en: 'HTML element or component.',
		},
	],
};

export default function StackPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<Stack
					align={v.align as string}
					gap={Number(v.gap)}
					className='w-full rounded-lg border border-dashed border-border p-4'>
					{['Item 1', 'Item 2', 'Item 3'].map((t) => (
						<div
							key={t}
							className='rounded bg-muted px-3 py-2 text-sm text-on-surface'>
							{t}
						</div>
					))}
				</Stack>
			)}
		/>
	);
}
