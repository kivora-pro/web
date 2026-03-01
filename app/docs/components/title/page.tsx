'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Title } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Title',
	category: 'typography',
	status: 'stable',
	description_es:
		'Componente de encabezado semántico que renderiza h1–h6 con estilos predefinidos por nivel. Soporta peso y color personalizables, y tamaño de fuente de anulación.',
	description_en:
		'Semantic heading component rendering h1–h6 with predefined level styles. Supports customizable weight and color, and font size override.',
	controls: [
		{
			type: 'text',
			prop: 'children',
			label_es: 'Texto',
			label_en: 'Text',
			defaultValue: 'Kivora UI',
		},
		{
			type: 'select',
			prop: 'order',
			label_es: 'Nivel (order)',
			label_en: 'Level (order)',
			options: ['1', '2', '3', '4', '5', '6'],
			defaultValue: '1',
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Title order={${v.order}}>${v.children}</Title>`,
	props: [
		{
			name: 'order',
			type: '1 | 2 | 3 | 4 | 5 | 6',
			defaultValue: '1',
			description_es: 'Nivel del encabezado (h1–h6).',
			description_en: 'Heading level (h1–h6).',
		},
		{
			name: 'size',
			type: 'string',
			description_es: 'Anula el tamaño de fuente con un valor CSS.',
			description_en: 'Overrides the font size with a CSS value.',
		},
		{
			name: 'fw',
			type: 'number',
			description_es: 'Anula el peso de la fuente.',
			description_en: 'Overrides the font weight.',
		},
		{
			name: 'c',
			type: 'string',
			description_es: 'Color CSS del texto.',
			description_en: 'CSS color of the text.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Title order={Number(v.order) as 1 | 2 | 3 | 4 | 5 | 6}>
			{v.children as string}
		</Title>
	);
}

export default function TitlePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
