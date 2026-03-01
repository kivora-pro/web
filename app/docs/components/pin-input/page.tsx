'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { PinInput } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'PinInput',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Campo de entrada segmentado para códigos PIN, OTP o verificación. Soporta longitud configurable, máscara, tipo numérico o alfanumérico, y gestión automática del foco.',
	description_en:
		'Segmented input for PIN, OTP or verification codes. Supports configurable length, mask, numeric or alphanumeric type, and automatic focus management.',
	controls: [
		{
			type: 'range',
			prop: 'length',
			label_es: 'Longitud',
			label_en: 'Length',
			min: 3,
			max: 8,
			step: 1,
			defaultValue: 4,
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
			prop: 'type',
			label_es: 'Tipo',
			label_en: 'Type',
			options: ['alphanumeric', 'number'],
			defaultValue: 'number',
		},
		{
			type: 'boolean',
			prop: 'mask',
			label_es: 'Máscara (ocultar)',
			label_en: 'Mask (hide)',
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
		`<PinInput
  length={${v.length}}
  size="${v.size}"
  type="${v.type}"${v.mask ? '\n  mask' : ''}${v.disabled ? '\n  disabled' : ''}
/>`,
	props: [
		{
			name: 'length',
			type: 'number',
			defaultValue: '4',
			description_es: 'Número de campos de entrada.',
			description_en: 'Number of input fields.',
		},
		{
			name: 'value',
			type: 'string',
			description_es: 'Valor del pin (modo controlado).',
			description_en: 'Pin value (controlled mode).',
		},
		{
			name: 'defaultValue',
			type: 'string',
			description_es: 'Valor inicial (modo no controlado).',
			description_en: 'Initial value (uncontrolled mode).',
		},
		{
			name: 'onChange',
			type: '(value: string) => void',
			description_es: 'Callback llamado con el valor parcial.',
			description_en: 'Callback called with the partial value.',
		},
		{
			name: 'onComplete',
			type: '(value: string) => void',
			description_es: 'Callback cuando se completan todos los campos.',
			description_en: 'Callback when all fields are filled.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño de los campos.',
			description_en: 'Fields size.',
		},
		{
			name: 'type',
			type: '"alphanumeric" | "number" | RegExp',
			defaultValue: '"alphanumeric"',
			description_es: 'Tipo de caracteres permitidos.',
			description_en: 'Allowed character type.',
		},
		{
			name: 'mask',
			type: 'boolean',
			description_es: 'Oculta los caracteres como contraseña.',
			description_en: 'Hides characters like a password.',
		},
		{
			name: 'placeholder',
			type: 'string',
			defaultValue: '"○"',
			description_es: 'Carácter de marcador cuando el campo está vacío.',
			description_en: 'Placeholder character when field is empty.',
		},
		{
			name: 'manageFocus',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Mueve el foco automáticamente entre campos.',
			description_en: 'Automatically moves focus between fields.',
		},
		{
			name: 'oneTimeCode',
			type: 'boolean',
			description_es: 'Añade autocomplete="one-time-code" para OTP.',
			description_en: 'Adds autocomplete="one-time-code" for OTP.',
		},
		{
			name: 'readOnly',
			type: 'boolean',
			description_es: 'Hace los campos de solo lectura.',
			description_en: 'Makes fields read-only.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita todos los campos.',
			description_en: 'Disables all fields.',
		},
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta del campo.',
			description_en: 'Field label.',
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
	],
};

function renderPreview(v: ControlValues) {
	return (
		<PinInput
			length={v.length as number}
			size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			type={v.type as 'alphanumeric' | 'number'}
			mask={v.mask as boolean}
			disabled={v.disabled as boolean}
		/>
	);
}

export default function PinInputPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
