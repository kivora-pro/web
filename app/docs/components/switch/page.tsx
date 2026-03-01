'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Switch } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Switch',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Interruptor de encendido/apagado con etiquetas opcionales dentro del track (on/off), icono en el thumb, posición de label configurable y múltiples tamaños.',
	description_en:
		'On/off toggle with optional track labels (on/off), thumb icon, configurable label position and multiple sizes.',
	controls: [
		{
			type: 'text',
			prop: 'label',
			label_es: 'Label',
			label_en: 'Label',
			defaultValue: 'Notificaciones',
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
			prop: 'labelPosition',
			label_es: 'Posición label',
			label_en: 'Label position',
			options: ['left', 'right'],
			defaultValue: 'right',
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
		`<Switch
  label="${v.label}"
  size="${v.size}"
  labelPosition="${v.labelPosition}"${v.disabled ? '\n  disabled' : ''}
/>`,
	props: [
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta visible junto al switch.',
			description_en: 'Label displayed next to the switch.',
		},
		{
			name: 'checked',
			type: 'boolean',
			description_es: 'Estado activo (modo controlado).',
			description_en: 'Active state (controlled mode).',
		},
		{
			name: 'defaultChecked',
			type: 'boolean',
			description_es: 'Estado inicial (modo no controlado).',
			description_en: 'Initial state (uncontrolled mode).',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del switch.',
			description_en: 'Switch size.',
		},
		{
			name: 'labelPosition',
			type: '"left" | "right"',
			defaultValue: '"right"',
			description_es: 'Posición del label.',
			description_en: 'Label position.',
		},
		{
			name: 'onLabel',
			type: 'ReactNode',
			description_es: 'Contenido dentro del track cuando está activo.',
			description_en: 'Content inside the track when active.',
		},
		{
			name: 'offLabel',
			type: 'ReactNode',
			description_es: 'Contenido dentro del track cuando está inactivo.',
			description_en: 'Content inside the track when inactive.',
		},
		{
			name: 'thumbIcon',
			type: 'ReactNode',
			description_es: 'Icono dentro del thumb del switch.',
			description_en: 'Icon inside the switch thumb.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color del track cuando está activo.',
			description_en: 'Track color when active.',
		},
		{
			name: 'description',
			type: 'ReactNode',
			description_es: 'Texto de ayuda.',
			description_en: 'Helper text.',
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
			description_es: 'Deshabilita el switch.',
			description_en: 'Disables the switch.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Switch
			label={v.label as string}
			size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			labelPosition={v.labelPosition as 'left' | 'right'}
			disabled={v.disabled as boolean}
			defaultChecked
		/>
	);
}

export default function SwitchPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
