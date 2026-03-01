'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Button',
	category: 'buttons',
	status: 'stable',
	description_es:
		'Botón principal con variantes de estilo, tamaños, estado de carga y soporte polimórfico. Extiende los atributos nativos de HTMLButtonElement.',
	description_en:
		'Primary button with style variants, sizes, loading state and polymorphic support. Extends native HTMLButtonElement attributes.',
	controls: [
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['solid', 'outline', 'ghost', 'link', 'subtle'],
			defaultValue: 'solid',
		},
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
			prop: 'loading',
			label_es: 'loading',
			label_en: 'loading',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'fullWidth',
			label_es: 'fullWidth',
			label_en: 'fullWidth',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'disabled',
			label_es: 'disabled',
			label_en: 'disabled',
			defaultValue: false,
		},
		{
			type: 'text',
			prop: 'children',
			label_es: 'Contenido',
			label_en: 'Content',
			defaultValue: 'Guardar cambios',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const lines: string[] = [];
		const propParts: string[] = [];

		if (v.variant !== 'solid') propParts.push(`variant="${v.variant}"`);
		if (v.size !== 'md') propParts.push(`size="${v.size}"`);
		if (v.loading) propParts.push('loading');
		if (v.fullWidth) propParts.push('fullWidth');
		if (v.disabled) propParts.push('disabled');

		const propsStr = propParts.length ? ' ' + propParts.join(' ') : '';
		lines.push(`import { Button } from '@kivora/react';`);
		lines.push('');
		lines.push(`<Button${propsStr}>`);
		lines.push(`  ${v.children}`);
		lines.push('</Button>');

		return lines.join('\n');
	},
	props: [
		{
			name: 'variant',
			type: "'solid' | 'outline' | 'ghost' | 'link' | 'subtle'",
			defaultValue: "'solid'",
			description_es: 'Variante visual del botón.',
			description_en: 'Visual variant of the button.',
		},
		{
			name: 'size',
			type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			defaultValue: "'md'",
			description_es: 'Tamaño del botón.',
			description_en: 'Size of the button.',
		},
		{
			name: 'loading',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra un spinner y deshabilita el botón.',
			description_en: 'Shows a spinner and disables the button.',
		},
		{
			name: 'leftSection',
			type: 'React.ReactNode',
			description_es: 'Contenido renderizado a la izquierda del texto.',
			description_en: 'Content rendered to the left of the label.',
		},
		{
			name: 'rightSection',
			type: 'React.ReactNode',
			description_es: 'Contenido renderizado a la derecha del texto.',
			description_en: 'Content rendered to the right of the label.',
		},
		{
			name: 'fullWidth',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'El botón ocupa el ancho completo del contenedor.',
			description_en: 'Button takes full width of its container.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el botón.',
			description_en: 'Disables the button.',
		},
		{
			name: 'component',
			type: 'React.ElementType',
			defaultValue: "'button'",
			description_es:
				'Elemento o componente que se renderiza internamente (polimorfismo).',
			description_en:
				'Element or component rendered internally (polymorphism).',
		},
		{
			name: 'href',
			type: 'string',
			description_es:
				'Si se pasa, el botón se renderiza como elemento <a>.',
			description_en:
				'When provided, the button renders as an <a> element.',
		},
		{
			name: 'children',
			type: 'React.ReactNode',
			required: true,
			description_es: 'Contenido del botón.',
			description_en: 'Content of the button.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Button
			variant={v.variant as never}
			size={v.size as never}
			loading={v.loading as boolean}
			fullWidth={v.fullWidth as boolean}
			disabled={v.disabled as boolean}>
			{v.children as string}
		</Button>
	);
}

export default function ButtonPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
