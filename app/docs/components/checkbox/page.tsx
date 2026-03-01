'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Checkbox } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Checkbox',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Casilla de verificación con animación de marca, estado indeterminado, posición de label configurable y soporte completo de accesibilidad.',
	description_en:
		'Checkbox with check animation, indeterminate state, configurable label position and full accessibility support.',
	controls: [
		{
			type: 'text',
			prop: 'label',
			label_es: 'Label',
			label_en: 'Label',
			defaultValue: 'Acepto los términos',
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
			prop: 'indeterminate',
			label_es: 'Indeterminado',
			label_en: 'Indeterminate',
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
		`<Checkbox
  label="${v.label}"
  size="${v.size}"${v.indeterminate ? '\n  indeterminate' : ''}${v.disabled ? '\n  disabled' : ''}
/>`,
	props: [
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta visible junto a la casilla.',
			description_en: 'Label displayed next to the checkbox.',
		},
		{
			name: 'checked',
			type: 'boolean',
			description_es: 'Estado marcado (modo controlado).',
			description_en: 'Checked state (controlled mode).',
		},
		{
			name: 'defaultChecked',
			type: 'boolean',
			description_es: 'Estado inicial (modo no controlado).',
			description_en: 'Initial state (uncontrolled mode).',
		},
		{
			name: 'indeterminate',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Muestra el estado indeterminado (línea en lugar de marca).',
			description_en:
				'Shows indeterminate state (dash instead of check).',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño de la casilla.',
			description_en: 'Checkbox size.',
		},
		{
			name: 'labelPosition',
			type: '"left" | "right"',
			defaultValue: '"right"',
			description_es: 'Posición del label relativa a la casilla.',
			description_en: 'Label position relative to the checkbox.',
		},
		{
			name: 'description',
			type: 'ReactNode',
			description_es: 'Texto de ayuda debajo del label.',
			description_en: 'Helper text below the label.',
		},
		{
			name: 'error',
			type: 'ReactNode',
			description_es: 'Mensaje de error.',
			description_en: 'Error message.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita la casilla.',
			description_en: 'Disables the checkbox.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Checkbox
			label={v.label as string}
			size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			indeterminate={v.indeterminate as boolean}
			disabled={v.disabled as boolean}
			defaultChecked
		/>
	);
}

export default function CheckboxPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
