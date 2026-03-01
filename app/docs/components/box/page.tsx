'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Box } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Box',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Componente base polimórfico que renderiza un <div> por defecto. Acepta cualquier elemento HTML o componente a través de la prop component.',
	description_en:
		'Base polymorphic component that renders a <div> by default. Accepts any HTML element or component via the component prop.',
	controls: [
		{
			type: 'select',
			prop: 'component',
			label_es: 'Elemento',
			label_en: 'Element',
			options: ['div', 'section', 'article', 'span'],
			defaultValue: 'div',
		},
		{
			type: 'text',
			prop: 'children',
			label_es: 'Contenido',
			label_en: 'Content',
			defaultValue: 'Box content',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const comp = v.component !== 'div' ? ` component="${v.component}"` : '';
		return [
			`import { Box } from '@kivora/react';`,
			'',
			`<Box${comp}>`,
			`  ${v.children}`,
			`</Box>`,
		].join('\n');
	},
	props: [
		{
			name: 'component',
			type: 'React.ElementType',
			defaultValue: "'div'",
			description_es: 'Elemento HTML o componente a renderizar.',
			description_en: 'HTML element or component to render.',
		},
		{
			name: 'children',
			type: 'React.ReactNode',
			description_es: 'Contenido del componente.',
			description_en: 'Component content.',
		},
	],
};

export default function BoxPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<Box
					component={v.component as React.ElementType}
					className='rounded-md border border-border p-4 text-sm text-on-surface'>
					{v.children as React.ReactNode}
				</Box>
			)}
		/>
	);
}
