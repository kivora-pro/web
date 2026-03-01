'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { TextInput } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'TextInput',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Campo de texto de una línea con soporte para label, descripción, estado de error, asterisco de requerido y múltiples variantes visuales.',
	description_en:
		'Single-line text field with support for label, description, error state, required asterisk and multiple visual variants.',
	controls: [
		{
			type: 'text',
			prop: 'placeholder',
			label_es: 'Placeholder',
			label_en: 'Placeholder',
			defaultValue: 'Escribe algo...',
		},
		{
			type: 'text',
			prop: 'label',
			label_es: 'Label',
			label_en: 'Label',
			defaultValue: 'Tu nombre',
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
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['default', 'filled', 'unstyled'],
			defaultValue: 'default',
		},
		{
			type: 'boolean',
			prop: 'disabled',
			label_es: 'Deshabilitado',
			label_en: 'Disabled',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'withAsterisk',
			label_es: 'Requerido (*)',
			label_en: 'Required (*)',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'error',
			label_es: 'Con error',
			label_en: 'With error',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<TextInput
  label="${v.label}"
  placeholder="${v.placeholder}"
  size="${v.size}"
  variant="${v.variant}"${v.disabled ? '\n  disabled' : ''}${v.withAsterisk ? '\n  withAsterisk' : ''}${v.error ? '\n  error="Campo requerido"' : ''}
/>`,
	props: [
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta del campo.',
			description_en: 'Input label.',
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
			description_en: 'Helper text below the input.',
		},
		{
			name: 'error',
			type: 'ReactNode',
			description_es:
				'Mensaje de error. Cuando está presente el borde se vuelve rojo.',
			description_en: 'Error message. When present the border turns red.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del campo.',
			description_en: 'Input size.',
		},
		{
			name: 'variant',
			type: '"default" | "filled" | "unstyled"',
			defaultValue: '"default"',
			description_es: 'Variante visual del campo.',
			description_en: 'Visual variant of the input.',
		},
		{
			name: 'required',
			type: 'boolean',
			description_es:
				'Marca el campo como requerido (semántico, sin asterisco).',
			description_en:
				'Marks the input as required (semantic, no asterisk).',
		},
		{
			name: 'withAsterisk',
			type: 'boolean',
			description_es: 'Añade asterisco rojo junto al label.',
			description_en: 'Adds a red asterisk next to the label.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el campo.',
			description_en: 'Disables the input.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-72'>
			<TextInput
				label={v.label as string}
				placeholder={v.placeholder as string}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				variant={v.variant as 'default' | 'filled' | 'unstyled'}
				disabled={v.disabled as boolean}
				withAsterisk={v.withAsterisk as boolean}
				error={v.error ? 'Campo requerido' : undefined}
			/>
		</div>
	);
}

export default function TextInputPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
