'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Pill } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Pill',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Etiqueta compacta en forma de píldora para mostrar valores, etiquetas o tags. Puede incluir un botón de eliminación y admite diferentes tamaños.',
	description_en:
		'Compact pill-shaped label for displaying values, tags or labels. Can include a remove button and supports different sizes.',
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
			type: 'text',
			prop: 'children',
			label_es: 'Contenido',
			label_en: 'Content',
			defaultValue: 'TypeScript',
		},
		{
			type: 'boolean',
			prop: 'withRemoveButton',
			label_es: 'Con botón eliminar',
			label_en: 'With remove button',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'disabled',
			label_es: 'Deshabilitado',
			label_en: 'Disabled',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [];
		if (v.size !== 'md') props.push(`size="${v.size}"`);
		if (v.withRemoveButton) props.push('withRemoveButton');
		if (v.disabled) props.push('disabled');
		const propsStr = props.length ? ' ' + props.join(' ') : '';
		return `import { Pill } from '@kivora/react';\n\n<Pill${propsStr}>${v.children}</Pill>`;
	},
	props: [
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño de la píldora.',
			description_en: 'Pill size.',
		},
		{
			name: 'withRemoveButton',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra un botón de eliminación.',
			description_en: 'Shows a remove button.',
		},
		{
			name: 'onRemove',
			type: '() => void',
			description_es: 'Callback al hacer clic en el botón eliminar.',
			description_en: 'Callback when remove button is clicked.',
		},
		{
			name: 'radius',
			type: 'string | number',
			description_es: 'Border radius de la píldora.',
			description_en: 'Pill border radius.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita la píldora.',
			description_en: 'Disables the pill.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Contenido de la píldora.',
			description_en: 'Pill content.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Pill
			size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			withRemoveButton={v.withRemoveButton as boolean}
			disabled={v.disabled as boolean}>
			{v.children as string}
		</Pill>
	);
}

export default function PillPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
