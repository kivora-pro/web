'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { TableOfContents } from '@kivora/react';

const DEMO_LINKS = [
	{ label: 'Introducción', link: '#introduccion', order: 1 },
	{ label: 'Instalación', link: '#instalacion', order: 1 },
	{ label: 'npm', link: '#npm', order: 2 },
	{ label: 'yarn', link: '#yarn', order: 2 },
	{ label: 'Uso básico', link: '#uso-basico', order: 1 },
	{ label: 'Props', link: '#props', order: 1 },
];

const config: ComponentDocConfig = {
	name: 'TableOfContents',
	category: 'navigation',
	status: 'stable',
	description_es:
		'Tabla de contenidos para documentación. Muestra una lista de enlaces con sangría según el nivel jerárquico y resalta el elemento activo al hacer scroll.',
	description_en:
		'Table of contents for documentation. Shows a list of links with indentation by hierarchy level and highlights the active element on scroll.',
	controls: [],
	codeTemplate: (_v: ControlValues) =>
		`import { TableOfContents } from '@kivora/react';\n\nconst links = [\n  { label: 'Introducción', link: '#intro', order: 1 },\n  { label: 'Instalación', link: '#install', order: 1 },\n  { label: 'npm', link: '#npm', order: 2 },\n];\n\n<TableOfContents links={links} />`,
	props: [
		{
			name: 'links',
			type: '{ label: string; link: string; order: number }[]',
			required: true,
			description_es:
				'Lista de enlaces con etiqueta, url y nivel de orden.',
			description_en: 'List of links with label, url and order level.',
		},
		{
			name: 'className',
			type: 'string',
			description_es: 'Clase CSS adicional.',
			description_en: 'Additional CSS class.',
		},
	],
};

function renderPreview(_v: ControlValues) {
	return (
		<div className='w-60'>
			<TableOfContents links={DEMO_LINKS} />
		</div>
	);
}

export default function TableOfContentsPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
