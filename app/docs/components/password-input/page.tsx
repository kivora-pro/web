'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { PasswordInput } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'PasswordInput',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Campo de contraseña con botón de visibilidad incorporado. Soporta modo controlado/no controlado para la visibilidad, y todas las props comunes de TextInput.',
	description_en:
		'Password input with built-in visibility toggle. Supports controlled/uncontrolled visibility mode and all common TextInput props.',
	controls: [
		{
			type: 'text',
			prop: 'label',
			label_es: 'Label',
			label_en: 'Label',
			defaultValue: 'Contraseña',
		},
		{
			type: 'text',
			prop: 'placeholder',
			label_es: 'Placeholder',
			label_en: 'Placeholder',
			defaultValue: 'Tu contraseña',
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
			prop: 'withAsterisk',
			label_es: 'Requerido (*)',
			label_en: 'Required (*)',
			defaultValue: false,
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
			prop: 'error',
			label_es: 'Con error',
			label_en: 'With error',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<PasswordInput
  label="${v.label}"
  placeholder="${v.placeholder}"
  size="${v.size}"${v.withAsterisk ? '\n  withAsterisk' : ''}${v.disabled ? '\n  disabled' : ''}${v.error ? '\n  error="Contraseña incorrecta"' : ''}
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
			description_es: 'Mensaje de error.',
			description_en: 'Error message.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del campo.',
			description_en: 'Input size.',
		},
		{
			name: 'visible',
			type: 'boolean',
			description_es:
				'Controla la visibilidad de la contraseña (modo controlado).',
			description_en: 'Controls password visibility (controlled mode).',
		},
		{
			name: 'defaultVisible',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Visibilidad inicial (modo no controlado).',
			description_en: 'Initial visibility (uncontrolled mode).',
		},
		{
			name: 'onVisibilityChange',
			type: '(visible: boolean) => void',
			description_es: 'Callback al cambiar la visibilidad.',
			description_en: 'Callback when visibility changes.',
		},
		{
			name: 'visibilityToggleLabel',
			type: 'string',
			description_es: 'Aria-label del botón de visibilidad.',
			description_en: 'Aria-label for the visibility toggle button.',
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
		{
			name: 'required',
			type: 'boolean',
			description_es: 'Marca el campo como requerido.',
			description_en: 'Marks the input as required.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-72'>
			<PasswordInput
				label={v.label as string}
				placeholder={v.placeholder as string}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				withAsterisk={v.withAsterisk as boolean}
				disabled={v.disabled as boolean}
				error={v.error ? 'Contraseña incorrecta' : undefined}
			/>
		</div>
	);
}

export default function PasswordInputPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
