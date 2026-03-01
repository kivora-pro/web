'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Container } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Container',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Centra el contenido horizontalmente y limita su ancho máximo. Disponible en tamaños predefinidos o numérico.',
	description_en:
		'Centers content horizontally and limits its max width. Available in predefined sizes or numeric.',
	controls: [
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
		{
			type: 'boolean',
			prop: 'fluid',
			label_es: 'fluid',
			label_en: 'fluid',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const size = v.size !== 'md' ? ` size="${v.size}"` : '';
		const fluid = v.fluid ? ' fluid' : '';
		return [
			`import { Container } from '@kivora/react';`,
			'',
			`<Container${size}${fluid}>`,
			`  Content`,
			`</Container>`,
		].join('\n');
	},
	props: [
		{
			name: 'size',
			type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number",
			defaultValue: "'md'",
			description_es: 'Ancho máximo del contenedor.',
			description_en: 'Max width of the container.',
		},
		{
			name: 'fluid',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Elimina el ancho máximo, ocupa todo el espacio disponible.',
			description_en: 'Removes max width, fills all available space.',
		},
	],
};

export default function ContainerPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<Container
					size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
					fluid={v.fluid as boolean}
					className='rounded-lg border border-dashed border-border p-4 text-center text-sm text-muted'>
					Container ({v.fluid ? 'fluid' : (v.size as string)})
				</Container>
			)}
		/>
	);
}
