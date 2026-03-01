'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Highlight } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Highlight',
	category: 'typography',
	status: 'stable',
	description_es:
		'Resalta una o varias palabras dentro de un texto con color de fondo. Acepta un string o array de strings como términos a resaltar.',
	description_en:
		'Highlights one or more words within a text with a background color. Accepts a string or array of strings as terms to highlight.',
	controls: [
		{
			type: 'text',
			prop: 'children',
			label_es: 'Texto completo',
			label_en: 'Full text',
			defaultValue:
				'Kivora es una librería de componentes para React y Next.js',
		},
		{
			type: 'text',
			prop: 'highlight',
			label_es: 'Término a resaltar',
			label_en: 'Term to highlight',
			defaultValue: 'componentes',
		},
		{
			type: 'select',
			prop: 'color',
			label_es: 'Color',
			label_en: 'Color',
			options: ['yellow', 'blue', 'green', 'red', 'pink', 'teal'],
			defaultValue: 'yellow',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [`highlight="${v.highlight}"`];
		if (v.color !== 'yellow') props.push(`color="${v.color}"`);
		return `import { Highlight } from '@kivora/react';\n\n<Highlight ${props.join(' ')}>\n  ${v.children}\n</Highlight>`;
	},
	props: [
		{
			name: 'highlight',
			type: 'string | string[]',
			required: true,
			description_es: 'Término o términos a resaltar en el texto.',
			description_en: 'Term or terms to highlight in the text.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color de fondo del resaltado.',
			description_en: 'Highlight background color.',
		},
		{
			name: 'children',
			type: 'string',
			required: true,
			description_es: 'Texto completo donde aplicar el resaltado.',
			description_en: 'Full text where the highlight is applied.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-80'>
			<Highlight
				highlight={v.highlight as string}
				color={v.color as string}>
				{v.children as string}
			</Highlight>
		</div>
	);
}

export default function HighlightPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
