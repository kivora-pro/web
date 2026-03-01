'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { FileInput } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'FileInput',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Campo de entrada para seleccionar archivos del sistema. Soporta selección múltiple, filtros de tipo MIME, placeholder personalizado y botón de limpiado.',
	description_en:
		'Input field for selecting files from the system. Supports multiple selection, MIME type filters, custom placeholder and clear button.',
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
			prop: 'label',
			label_es: 'Etiqueta',
			label_en: 'Label',
			defaultValue: 'Seleccionar archivo',
		},
		{
			type: 'text',
			prop: 'placeholder',
			label_es: 'Placeholder',
			label_en: 'Placeholder',
			defaultValue: 'Sin archivo seleccionado',
		},
		{
			type: 'boolean',
			prop: 'multiple',
			label_es: 'Múltiple',
			label_en: 'Multiple',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'clearable',
			label_es: 'Limpiable',
			label_en: 'Clearable',
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
		if (v.label) props.push(`label="${v.label}"`);
		if (v.placeholder !== 'Sin archivo seleccionado')
			props.push(`placeholder="${v.placeholder}"`);
		if (v.multiple) props.push('multiple');
		if (v.clearable) props.push('clearable');
		if (v.disabled) props.push('disabled');
		const propsStr = props.length ? '\n  ' + props.join('\n  ') : '';
		return `import { FileInput } from '@kivora/react';\n\n<FileInput${propsStr}\n/>`;
	},
	props: [
		{
			name: 'value',
			type: 'File | File[] | null',
			description_es: 'Archivo(s) seleccionado(s) (modo controlado).',
			description_en: 'Selected file(s) (controlled mode).',
		},
		{
			name: 'onChange',
			type: '(value: File | File[] | null) => void',
			description_es: 'Callback cuando el archivo cambia.',
			description_en: 'Callback when the file changes.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del campo.',
			description_en: 'Field size.',
		},
		{
			name: 'multiple',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Permite seleccionar múltiples archivos.',
			description_en: 'Allows selecting multiple files.',
		},
		{
			name: 'accept',
			type: 'string',
			description_es: 'Tipos MIME aceptados (ej: "image/*,.pdf").',
			description_en: 'Accepted MIME types (e.g. "image/*,.pdf").',
		},
		{
			name: 'clearable',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra botón para limpiar la selección.',
			description_en: 'Shows button to clear the selection.',
		},
		{
			name: 'placeholder',
			type: 'string',
			description_es:
				'Texto mostrado cuando no hay archivo seleccionado.',
			description_en: 'Text shown when no file is selected.',
		},
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta del campo.',
			description_en: 'Field label.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el campo.',
			description_en: 'Disables the field.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-72'>
			<FileInput
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				label={v.label as string}
				placeholder={v.placeholder as string}
				multiple={v.multiple as boolean}
				clearable={v.clearable as boolean}
				disabled={v.disabled as boolean}
			/>
		</div>
	);
}

export default function FileInputPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
