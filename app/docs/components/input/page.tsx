'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Input, InputWrapper } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Input',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Componente base de entrada de texto. Úsese junto con InputWrapper para añadir etiqueta, descripción y mensaje de error. Soporta variantes, tamaños, secciones izquierda/derecha y estado de error.',
	description_en:
		'Base text input component. Use together with InputWrapper to add label, description and error message. Supports variants, sizes, left/right sections and error state.',
	controls: [
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['default', 'filled', 'unstyled'],
			defaultValue: 'default',
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
			type: 'text',
			prop: 'placeholder',
			label_es: 'Placeholder',
			label_en: 'Placeholder',
			defaultValue: 'Escribe algo...',
		},
		{
			type: 'text',
			prop: 'label',
			label_es: 'Etiqueta',
			label_en: 'Label',
			defaultValue: 'Correo electrónico',
		},
		{
			type: 'text',
			prop: 'description',
			label_es: 'Descripción',
			label_en: 'Description',
			defaultValue: '',
		},
		{
			type: 'text',
			prop: 'error',
			label_es: 'Error',
			label_en: 'Error',
			defaultValue: '',
		},
		{
			type: 'boolean',
			prop: 'required',
			label_es: 'Requerido',
			label_en: 'Required',
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
		const wrapperProps: string[] = [];
		if (v.label) wrapperProps.push(`label="${v.label}"`);
		if (v.description) wrapperProps.push(`description="${v.description}"`);
		if (v.error) wrapperProps.push(`error="${v.error}"`);
		if (v.required) wrapperProps.push('required');
		const inputProps: string[] = [];
		if (v.variant !== 'default') inputProps.push(`variant="${v.variant}"`);
		if (v.size !== 'md') inputProps.push(`size="${v.size}"`);
		if (v.placeholder !== 'Escribe algo...')
			inputProps.push(`placeholder="${v.placeholder}"`);
		if (v.disabled) inputProps.push('disabled');
		return `import { Input, InputWrapper } from '@kivora/react';\n\n<InputWrapper${wrapperProps.length ? '\n  ' + wrapperProps.join('\n  ') : ''}>\n  <Input${inputProps.length ? '\n    ' + inputProps.join('\n    ') : ''}\n  />\n</InputWrapper>`;
	},
	props: [
		{
			name: 'variant',
			type: '"default" | "filled" | "unstyled"',
			defaultValue: '"default"',
			description_es: 'Variante visual del input.',
			description_en: 'Visual variant of the input.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del input.',
			description_en: 'Input size.',
		},
		{
			name: 'placeholder',
			type: 'string',
			description_es: 'Texto placeholder.',
			description_en: 'Placeholder text.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el input.',
			description_en: 'Disables the input.',
		},
		{
			name: 'error',
			type: 'boolean | ReactNode',
			description_es: 'Estado de error; muestra el input en rojo.',
			description_en: 'Error state; shows the input in red.',
		},
		{
			name: 'leftSection',
			type: 'ReactNode',
			description_es: 'Contenido a la izquierda del input.',
			description_en: 'Content to the left of the input.',
		},
		{
			name: 'rightSection',
			type: 'ReactNode',
			description_es: 'Contenido a la derecha del input.',
			description_en: 'Content to the right of the input.',
		},
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta (solo en InputWrapper).',
			description_en: 'Label (InputWrapper only).',
		},
		{
			name: 'description',
			type: 'ReactNode',
			description_es: 'Descripción debajo de la etiqueta (InputWrapper).',
			description_en: 'Description below the label (InputWrapper).',
		},
		{
			name: 'required',
			type: 'boolean',
			description_es: 'Marca el campo como obligatorio (InputWrapper).',
			description_en: 'Marks the field as required (InputWrapper).',
		},
		{
			name: 'withAsterisk',
			type: 'boolean',
			description_es: 'Muestra asterisco de requerido (InputWrapper).',
			description_en: 'Shows required asterisk (InputWrapper).',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-72'>
			<InputWrapper
				label={v.label as string}
				description={
					v.description ? (v.description as string) : undefined
				}
				error={v.error ? (v.error as string) : undefined}
				required={v.required as boolean}>
				<Input
					variant={v.variant as 'default' | 'filled' | 'unstyled'}
					size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
					placeholder={v.placeholder as string}
					disabled={v.disabled as boolean}
					error={!!v.error}
				/>
			</InputWrapper>
		</div>
	);
}

export default function InputPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
