'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Textarea } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Textarea',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Campo de texto multilínea con soporte para auto-resize, número mínimo/máximo de filas, variantes visuales y todas las props estándar de HTML textarea.',
	description_en:
		'Multi-line text field with auto-resize support, min/max rows, visual variants and all standard HTML textarea props.',
	controls: [
		{
			type: 'text',
			prop: 'label',
			label_es: 'Label',
			label_en: 'Label',
			defaultValue: 'Descripción',
		},
		{
			type: 'text',
			prop: 'placeholder',
			label_es: 'Placeholder',
			label_en: 'Placeholder',
			defaultValue: 'Escribe aquí...',
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
			type: 'range',
			prop: 'minRows',
			label_es: 'Min filas',
			label_en: 'Min rows',
			min: 2,
			max: 8,
			step: 1,
			defaultValue: 3,
		},
		{
			type: 'boolean',
			prop: 'autosize',
			label_es: 'Auto-resize',
			label_en: 'Auto-resize',
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
	codeTemplate: (v: ControlValues) =>
		`<Textarea
  label="${v.label}"
  placeholder="${v.placeholder}"
  size="${v.size}"
  minRows={${v.minRows}}${v.autosize ? '\n  autosize' : ''}${v.disabled ? '\n  disabled' : ''}
/>`,
	props: [
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta del campo.',
			description_en: 'Field label.',
		},
		{
			name: 'placeholder',
			type: 'string',
			description_es: 'Texto de placeholder.',
			description_en: 'Placeholder text.',
		},
		{
			name: 'description',
			type: 'ReactNode',
			description_es: 'Texto de ayuda debajo del campo.',
			description_en: 'Helper text below the field.',
		},
		{
			name: 'error',
			type: 'ReactNode',
			description_es: 'Mensaje de error.',
			description_en: 'Error message.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del campo.',
			description_en: 'Field size.',
		},
		{
			name: 'variant',
			type: '"default" | "filled" | "unstyled"',
			defaultValue: '"default"',
			description_es: 'Variante visual.',
			description_en: 'Visual variant.',
		},
		{
			name: 'autosize',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Expande el textarea automáticamente según el contenido.',
			description_en:
				'Automatically expands the textarea to fit content.',
		},
		{
			name: 'minRows',
			type: 'number',
			defaultValue: '3',
			description_es: 'Número mínimo de filas visibles.',
			description_en: 'Minimum number of visible rows.',
		},
		{
			name: 'maxRows',
			type: 'number',
			description_es: 'Número máximo de filas (solo con autosize).',
			description_en: 'Maximum rows (only with autosize).',
		},
		{
			name: 'resize',
			type: "React.CSSProperties['resize']",
			defaultValue: '"vertical"',
			description_es:
				'Dirección en que el usuario puede redimensionar el campo.',
			description_en: 'Direction in which the user can resize the field.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el campo.',
			description_en: 'Disables the field.',
		},
		{
			name: 'withAsterisk',
			type: 'boolean',
			description_es: 'Añade asterisco rojo junto al label.',
			description_en: 'Adds a red asterisk next to the label.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-80'>
			<Textarea
				label={v.label as string}
				placeholder={v.placeholder as string}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				minRows={v.minRows as number}
				autosize={v.autosize as boolean}
				disabled={v.disabled as boolean}
			/>
		</div>
	);
}

export default function TextareaPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
