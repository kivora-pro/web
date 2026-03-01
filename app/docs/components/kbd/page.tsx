'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Kbd } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Kbd',
	category: 'typography',
	status: 'stable',
	description_es:
		'Muestra teclas de teclado en estilo visual de tecla física. Útil en documentación para mostrar atajos de teclado.',
	description_en:
		'Displays keyboard keys in physical key visual style. Useful in documentation to show keyboard shortcuts.',
	controls: [
		{
			type: 'text',
			prop: 'children',
			label_es: 'Tecla',
			label_en: 'Key',
			defaultValue: 'Ctrl + K',
		},
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const sizeAttr = v.size !== 'md' ? ` size="${v.size}"` : '';
		return `import { Kbd } from '@kivora/react';\n\n<Kbd${sizeAttr}>${v.children}</Kbd>`;
	},
	props: [
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño de la tecla.',
			description_en: 'Key size.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Texto de la tecla (ej: "Ctrl", "⌘ K").',
			description_en: 'Key text (e.g. "Ctrl", "⌘ K").',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='flex items-center gap-2'>
			<Kbd size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}>
				{v.children as string}
			</Kbd>
		</div>
	);
}

export default function KbdPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
