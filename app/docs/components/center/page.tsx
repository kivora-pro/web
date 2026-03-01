'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Center } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Center',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Centra el contenido horizontal y verticalmente dentro de su contenedor.',
	description_en:
		'Centers content horizontally and vertically within its container.',
	controls: [
		{
			type: 'boolean',
			prop: 'inline',
			label_es: 'inline',
			label_en: 'inline',
			defaultValue: false,
		},
		{
			type: 'text',
			prop: 'children',
			label_es: 'Contenido',
			label_en: 'Content',
			defaultValue: 'Centered',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const inline = v.inline ? ' inline' : '';
		return [
			`import { Center } from '@kivora/react';`,
			'',
			`<Center${inline} style={{ height: 120 }}>`,
			`  ${v.children}`,
			`</Center>`,
		].join('\n');
	},
	props: [
		{
			name: 'inline',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Usa display inline-flex en lugar de flex.',
			description_en: 'Uses inline-flex instead of flex.',
		},
		{
			name: 'component',
			type: 'React.ElementType',
			defaultValue: "'div'",
			description_es: 'Elemento HTML o componente a renderizar.',
			description_en: 'HTML element or component to render.',
		},
	],
};

export default function CenterPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<Center
					inline={v.inline as boolean}
					className='h-28 w-full rounded-lg border border-border text-sm font-medium text-on-surface'>
					{v.children as React.ReactNode}
				</Center>
			)}
		/>
	);
}
