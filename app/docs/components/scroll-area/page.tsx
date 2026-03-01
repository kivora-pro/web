'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { ScrollArea } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'ScrollArea',
	category: 'miscellaneous',
	status: 'stable',
	description_es:
		'Área de desplazamiento personalizada con barras de scroll estilizadas. Controla la visibilidad de las barras y el offset del contenido.',
	description_en:
		'Custom scroll area with styled scrollbars. Controls scrollbar visibility and content offset.',
	controls: [
		{
			type: 'select',
			prop: 'type',
			label_es: 'Tipo de scroll',
			label_en: 'Scroll type',
			options: ['auto', 'always', 'scroll', 'hover', 'never'],
			defaultValue: 'hover',
		},
		{
			type: 'select',
			prop: 'scrollbarSize',
			label_es: 'Tamaño scrollbar',
			label_en: 'Scrollbar size',
			options: ['4', '6', '8', '10', '14'],
			defaultValue: '8',
		},
		{
			type: 'boolean',
			prop: 'offsetScrollbars',
			label_es: 'Offset scrollbars',
			label_en: 'Offset scrollbars',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [
			`h={200}`,
			`type="${v.type}"`,
			`scrollbarSize={${v.scrollbarSize}}`,
		];
		if (v.offsetScrollbars) props.push('offsetScrollbars');
		return `import { ScrollArea } from '@kivora/react';\n\n<ScrollArea\n  ${props.join('\n  ')}\n>\n  {/* contenido largo */}\n</ScrollArea>`;
	},
	props: [
		{
			name: 'type',
			type: '"auto" | "always" | "scroll" | "hover" | "never"',
			defaultValue: '"hover"',
			description_es: 'Cuándo mostrar las barras de scroll.',
			description_en: 'When to show scrollbars.',
		},
		{
			name: 'scrollbarSize',
			type: 'number | string',
			defaultValue: '12',
			description_es: 'Tamaño de la barra de scroll en píxeles.',
			description_en: 'Scrollbar size in pixels.',
		},
		{
			name: 'h',
			type: 'string | number',
			description_es: 'Alto del área de scroll.',
			description_en: 'Scroll area height.',
		},
		{
			name: 'w',
			type: 'string | number',
			description_es: 'Ancho del área de scroll.',
			description_en: 'Scroll area width.',
		},
		{
			name: 'offsetScrollbars',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Desplaza el contenido para acomodar las barras.',
			description_en: 'Offsets content to accommodate scrollbars.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Contenido desplazable.',
			description_en: 'Scrollable content.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<ScrollArea
			h={200}
			w={320}
			type={v.type as 'auto' | 'always' | 'scroll' | 'hover' | 'never'}
			scrollbarSize={Number(v.scrollbarSize)}
			offsetScrollbars={v.offsetScrollbars as boolean}>
			{Array.from({ length: 20 }, (_, i) => (
				<p
					key={i}
					className='text-sm py-1 border-b last:border-0'>
					Elemento de lista {i + 1} — contenido de ejemplo
				</p>
			))}
		</ScrollArea>
	);
}

export default function ScrollAreaPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
