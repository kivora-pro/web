'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Anchor } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Anchor',
	category: 'navigation',
	status: 'stable',
	description_es:
		'Enlace estilizado que extiende el elemento nativo <a>. Soporta distintos comportamientos de subrayado, colores y apertura en nueva pestaña.',
	description_en:
		'Styled link extending the native <a> element. Supports different underline behaviors, colors and opening in new tab.',
	controls: [
		{
			type: 'text',
			prop: 'children',
			label_es: 'Texto del enlace',
			label_en: 'Link text',
			defaultValue: 'Visitar documentación',
		},
		{
			type: 'select',
			prop: 'underline',
			label_es: 'Subrayado',
			label_en: 'Underline',
			options: ['always', 'hover', 'never'],
			defaultValue: 'hover',
		},
		{
			type: 'select',
			prop: 'fz',
			label_es: 'Tamaño fuente',
			label_en: 'Font size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
		{
			type: 'boolean',
			prop: 'target',
			label_es: 'Nueva pestaña',
			label_en: 'New tab',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [`href="https://kivora.dev"`];
		if (v.underline !== 'hover') props.push(`underline="${v.underline}"`);
		if (v.fz !== 'md') props.push(`fz="${v.fz}"`);
		if (v.target) props.push('target="_blank"');
		return `import { Anchor } from '@kivora/react';\n\n<Anchor ${props.join(' ')}>\n  ${v.children}\n</Anchor>`;
	},
	props: [
		{
			name: 'href',
			type: 'string',
			description_es: 'URL de destino del enlace.',
			description_en: 'Link destination URL.',
		},
		{
			name: 'underline',
			type: '"always" | "hover" | "never"',
			defaultValue: '"hover"',
			description_es: 'Comportamiento del subrayado.',
			description_en: 'Underline behavior.',
		},
		{
			name: 'c',
			type: 'string',
			description_es: 'Color del enlace.',
			description_en: 'Link color.',
		},
		{
			name: 'fw',
			type: 'number | string',
			description_es: 'Font weight del enlace.',
			description_en: 'Link font weight.',
		},
		{
			name: 'fz',
			type: 'string',
			description_es: 'Tamaño de fuente del enlace.',
			description_en: 'Link font size.',
		},
		{
			name: 'target',
			type: 'string',
			description_es: 'Atributo target del enlace (ej: "_blank").',
			description_en: 'Link target attribute (e.g. "_blank").',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Contenido del enlace.',
			description_en: 'Link content.',
		},
		{
			name: 'component',
			type: 'React.ElementType',
			description_es: 'Componente raíz (ej: Link de Next.js).',
			description_en: 'Root component (e.g. Next.js Link).',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Anchor
			href='#'
			underline={v.underline as 'always' | 'hover' | 'never'}
			fz={v.fz as string}
			target={v.target ? '_blank' : undefined}>
			{v.children as string}
		</Anchor>
	);
}

export default function AnchorPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
