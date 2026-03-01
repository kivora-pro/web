'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Indicator } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Indicator',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Muestra un indicador (badge, punto) posicionado relativo a su elemento hijo. Útil para notificaciones, contadores y estados en avatares o iconos.',
	description_en:
		'Displays an indicator (badge, dot) positioned relative to its child element. Useful for notifications, counters and states on avatars or icons.',
	controls: [
		{
			type: 'select',
			prop: 'position',
			label_es: 'Posición',
			label_en: 'Position',
			options: [
				'top-start',
				'top-center',
				'top-end',
				'middle-start',
				'middle-end',
				'bottom-start',
				'bottom-center',
				'bottom-end',
			],
			defaultValue: 'top-end',
		},
		{
			type: 'text',
			prop: 'label',
			label_es: 'Etiqueta',
			label_en: 'Label',
			defaultValue: '5',
		},
		{
			type: 'text',
			prop: 'color',
			label_es: 'Color',
			label_en: 'Color',
			defaultValue: 'red',
		},
		{
			type: 'boolean',
			prop: 'dot',
			label_es: 'Solo punto',
			label_en: 'Dot only',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'processing',
			label_es: 'Procesando',
			label_en: 'Processing',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'withBorder',
			label_es: 'Con borde',
			label_en: 'With border',
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
		const props: string[] = [
			`position="${v.position}"`,
			`color="${v.color}"`,
		];
		if (!v.dot && v.label) props.push(`label={${v.label}}`);
		if (v.dot) props.push('dot');
		if (v.processing) props.push('processing');
		if (v.withBorder) props.push('withBorder');
		if (v.disabled) props.push('disabled');
		return `import { Indicator, Avatar } from '@kivora/react';\n\n<Indicator\n  ${props.join('\n  ')}\n>\n  <Avatar src="..." alt="Usuario" />\n</Indicator>`;
	},
	props: [
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Contenido del indicador (número, texto).',
			description_en: 'Indicator content (number, text).',
		},
		{
			name: 'count',
			type: 'number',
			description_es:
				'Número mostrado (usa este en vez de label para contadores).',
			description_en:
				'Number displayed (use this instead of label for counters).',
		},
		{
			name: 'dot',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra el indicador como un punto sin contenido.',
			description_en: 'Shows the indicator as a dot without content.',
		},
		{
			name: 'size',
			type: 'number',
			defaultValue: '10',
			description_es: 'Tamaño del indicador en píxeles.',
			description_en: 'Indicator size in pixels.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color del indicador.',
			description_en: 'Indicator color.',
		},
		{
			name: 'position',
			type: '"top-start" | "top-center" | "top-end" | "middle-start" | "middle-end" | "bottom-start" | "bottom-center" | "bottom-end"',
			defaultValue: '"top-end"',
			description_es: 'Posición relativa al elemento hijo.',
			description_en: 'Position relative to the child element.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Oculta el indicador.',
			description_en: 'Hides the indicator.',
		},
		{
			name: 'processing',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra animación de pulso.',
			description_en: 'Shows pulse animation.',
		},
		{
			name: 'withBorder',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Añade borde al indicador.',
			description_en: 'Adds border to the indicator.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Indicator
			position={
				v.position as
					| 'top-start'
					| 'top-center'
					| 'top-end'
					| 'middle-start'
					| 'middle-end'
					| 'bottom-start'
					| 'bottom-center'
					| 'bottom-end'
			}
			label={v.dot ? undefined : (v.label as string)}
			color={v.color as string}
			dot={v.dot as boolean}
			processing={v.processing as boolean}
			withBorder={v.withBorder as boolean}
			disabled={v.disabled as boolean}>
			<div className='w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold'>
				KV
			</div>
		</Indicator>
	);
}

export default function IndicatorPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
