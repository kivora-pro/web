'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Mark } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Mark',
	category: 'typography',
	status: 'stable',
	description_es:
		'Marca o resalta texto inline con un color de fondo. Similar al elemento HTML <mark> pero con soporte para colores personalizados.',
	description_en:
		'Marks or highlights inline text with a background color. Similar to the HTML <mark> element but with custom color support.',
	controls: [
		{
			type: 'text',
			prop: 'children',
			label_es: 'Texto marcado',
			label_en: 'Marked text',
			defaultValue: 'texto importante',
		},
		{
			type: 'select',
			prop: 'color',
			label_es: 'Color',
			label_en: 'Color',
			options: [
				'yellow',
				'blue',
				'green',
				'red',
				'pink',
				'teal',
				'orange',
			],
			defaultValue: 'yellow',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const colorAttr = v.color !== 'yellow' ? ` color="${v.color}"` : '';
		return `import { Mark, Text } from '@kivora/react';\n\n<Text>\n  Este es un <Mark${colorAttr}>${v.children}</Mark> en el párrafo.\n</Text>`;
	},
	props: [
		{
			name: 'color',
			type: 'string',
			description_es: 'Color de fondo del marcado.',
			description_en: 'Mark background color.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Texto a marcar.',
			description_en: 'Text to mark.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<p>
			Este es un{' '}
			<Mark color={v.color as string}>{v.children as string}</Mark> en el
			párrafo.
		</p>
	);
}

export default function MarkPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
