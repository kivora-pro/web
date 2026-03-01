'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Blockquote } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Blockquote',
	category: 'typography',
	status: 'stable',
	description_es:
		'Componente de cita tipográfica con borde lateral, cita de fuente (cite) e icono opcional. Útil para resaltar citas en artículos o documentación.',
	description_en:
		'Typographic quote component with side border, source citation and optional icon. Useful for highlighting quotes in articles or documentation.',
	controls: [
		{
			type: 'text',
			prop: 'children',
			label_es: 'Texto de la cita',
			label_en: 'Quote text',
			defaultValue:
				'El diseño no es solo cómo se ve o cómo se siente. El diseño es cómo funciona.',
		},
		{
			type: 'text',
			prop: 'cite',
			label_es: 'Fuente (cite)',
			label_en: 'Source (cite)',
			defaultValue: '— Steve Jobs',
		},
		{
			type: 'select',
			prop: 'color',
			label_es: 'Color',
			label_en: 'Color',
			options: ['blue', 'teal', 'green', 'red', 'orange', 'grape'],
			defaultValue: 'blue',
		},
		{
			type: 'select',
			prop: 'radius',
			label_es: 'Radio',
			label_en: 'Radius',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'sm',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [];
		if (v.cite) props.push(`cite="${v.cite}"`);
		if (v.color !== 'blue') props.push(`color="${v.color}"`);
		if (v.radius !== 'sm') props.push(`radius="${v.radius}"`);
		const propsStr = props.length ? '\n  ' + props.join('\n  ') : '';
		return `import { Blockquote } from '@kivora/react';\n\n<Blockquote${propsStr}>\n  ${v.children}\n</Blockquote>`;
	},
	props: [
		{
			name: 'cite',
			type: 'ReactNode',
			description_es: 'Fuente o autor de la cita.',
			description_en: 'Source or author of the quote.',
		},
		{
			name: 'icon',
			type: 'ReactNode',
			description_es: 'Ícono mostrado al inicio de la cita.',
			description_en: 'Icon shown at the start of the quote.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color del borde lateral.',
			description_en: 'Side border color.',
		},
		{
			name: 'radius',
			type: 'string',
			description_es: 'Radio de borde.',
			description_en: 'Border radius.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Texto de la cita.',
			description_en: 'Quote text.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-80'>
			<Blockquote
				cite={v.cite as string}
				color={v.color as string}
				radius={v.radius as string}>
				{v.children as string}
			</Blockquote>
		</div>
	);
}

export default function BlockquotePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
