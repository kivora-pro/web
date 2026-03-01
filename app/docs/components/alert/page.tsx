'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Alert } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Alert',
	category: 'feedback',
	status: 'stable',
	description_es:
		'Componente de alerta para mostrar mensajes de información, éxito, advertencia o error. Soporta título, icono y botón de cierre.',
	description_en:
		'Alert component for displaying informational, success, warning or error messages. Supports title, icon and close button.',
	controls: [
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['light', 'filled', 'outline', 'default'],
			defaultValue: 'light',
		},
		{
			type: 'boolean',
			prop: 'withCloseButton',
			label_es: 'Botón cerrar',
			label_en: 'Close button',
			defaultValue: false,
		},
		{
			type: 'text',
			prop: 'title',
			label_es: 'Título',
			label_en: 'Title',
			defaultValue: 'Información importante',
		},
		{
			type: 'text',
			prop: 'children',
			label_es: 'Descripción',
			label_en: 'Description',
			defaultValue: 'Esta acción no se puede deshacer.',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [];
		if (v.variant !== 'light') props.push(`variant="${v.variant}"`);
		if (v.withCloseButton) props.push('withCloseButton');
		if (v.title) props.push(`title="${v.title}"`);
		const propsStr = props.length ? ' ' + props.join(' ') : '';

		return [
			`import { Alert } from '@kivora/react';`,
			'',
			`<Alert${propsStr}>`,
			`  ${v.children}`,
			'</Alert>',
		].join('\n');
	},
	props: [
		{
			name: 'variant',
			type: "'light' | 'filled' | 'outline' | 'default'",
			defaultValue: "'light'",
			description_es: 'Variante visual de la alerta.',
			description_en: 'Visual variant of the alert.',
		},
		{
			name: 'title',
			type: 'React.ReactNode',
			description_es: 'Título opcional de la alerta.',
			description_en: 'Optional alert title.',
		},
		{
			name: 'icon',
			type: 'React.ReactNode',
			description_es: 'Icono opcional mostrado a la izquierda.',
			description_en: 'Optional icon displayed on the left.',
		},
		{
			name: 'withCloseButton',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Muestra un botón de cierre en la esquina superior derecha.',
			description_en: 'Shows a close button in the top right corner.',
		},
		{
			name: 'onClose',
			type: '() => void',
			description_es: 'Callback ejecutado al pulsar el botón de cierre.',
			description_en:
				'Callback executed when the close button is pressed.',
		},
		{
			name: 'radius',
			type: 'string',
			defaultValue: "'0.375rem'",
			description_es: 'Radio del borde.',
			description_en: 'Border radius.',
		},
		{
			name: 'color',
			type: 'string',
			description_es:
				'Color personalizado que sobreescribe el color de la marca.',
			description_en: 'Custom color overriding the brand color.',
		},
		{
			name: 'children',
			type: 'React.ReactNode',
			required: true,
			description_es: 'Contenido del mensaje de la alerta.',
			description_en: 'Alert message content.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-full max-w-md'>
			<Alert
				variant={v.variant as never}
				title={v.title as string}
				withCloseButton={v.withCloseButton as boolean}>
				{v.children as string}
			</Alert>
		</div>
	);
}

export default function AlertPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
