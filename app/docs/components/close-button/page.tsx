'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { CloseButton } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'CloseButton',
	category: 'buttons',
	status: 'stable',
	description_es:
		'Botón de cierre con icono × integrado. Versión simplificada de ActionIcon preconfigurada para cerrar paneles, modales y notificaciones.',
	description_en:
		'Close button with a built-in × icon. A simplified ActionIcon preconfigured for closing panels, modals and notifications.',
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
			type: 'boolean',
			prop: 'disabled',
			label_es: 'disabled',
			label_en: 'disabled',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const parts: string[] = ['aria-label="Cerrar"'];
		if (v.size !== 'md') parts.push(`size="${v.size}"`);
		if (v.disabled) parts.push('disabled');
		return [
			`import { CloseButton } from '@kivora/react';`,
			'',
			`<CloseButton ${parts.join(' ')} />`,
		].join('\n');
	},
	props: [
		{
			name: 'size',
			type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			defaultValue: "'md'",
			description_es: 'Tamaño del botón.',
			description_en: 'Size of the button.',
		},
		{
			name: 'aria-label',
			type: 'string',
			defaultValue: "'Close'",
			description_es:
				'Etiqueta accesible. Se recomienda traducirla al idioma de la UI.',
			description_en:
				'Accessible label. Should be translated to match the UI language.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el botón.',
			description_en: 'Disables the button.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<CloseButton
			size={v.size as never}
			disabled={v.disabled as boolean}
			aria-label='Cerrar'
		/>
	);
}

export default function CloseButtonPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
