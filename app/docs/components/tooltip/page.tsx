'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, Tooltip } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Tooltip',
	category: 'overlays',
	status: 'stable',
	description_es:
		'Globo de información que aparece al hacer hover o al enfocar el elemento hijo. Soporta múltiples posiciones, flecha decorativa, modo multilínea y retardo de apertura.',
	description_en:
		'Information bubble that appears on hover or focus of the child element. Supports multiple positions, decorative arrow, multiline mode and open delay.',
	controls: [
		{
			type: 'text',
			prop: 'label',
			label_es: 'Contenido',
			label_en: 'Content',
			defaultValue: 'Este es un tooltip',
		},
		{
			type: 'select',
			prop: 'position',
			label_es: 'Posición',
			label_en: 'Position',
			options: ['top', 'bottom', 'left', 'right'],
			defaultValue: 'top',
		},
		{
			type: 'boolean',
			prop: 'withArrow',
			label_es: 'Con flecha',
			label_en: 'With arrow',
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
		`<Tooltip
  label="${v.label}"
  position="${v.position}"${v.withArrow ? '\n  withArrow' : ''}${v.disabled ? '\n  disabled' : ''}
>
  <Button>Pasa el cursor</Button>
</Tooltip>`,
	props: [
		{
			name: 'label',
			type: 'ReactNode',
			required: true,
			description_es: 'Contenido del tooltip.',
			description_en: 'Tooltip content.',
		},
		{
			name: 'children',
			type: 'ReactElement',
			required: true,
			description_es: 'Elemento que activa el tooltip.',
			description_en: 'Element that triggers the tooltip.',
		},
		{
			name: 'position',
			type: '"top" | "bottom" | "left" | "right"',
			defaultValue: '"top"',
			description_es: 'Posición relativa al elemento hijo.',
			description_en: 'Position relative to the child element.',
		},
		{
			name: 'withArrow',
			type: 'boolean',
			description_es: 'Muestra una flecha apuntando al elemento.',
			description_en: 'Shows an arrow pointing to the element.',
		},
		{
			name: 'arrowSize',
			type: 'number',
			description_es: 'Tamaño de la flecha en píxeles.',
			description_en: 'Arrow size in pixels.',
		},
		{
			name: 'offset',
			type: 'number',
			description_es: 'Distancia entre el tooltip y el elemento.',
			description_en: 'Distance between tooltip and element.',
		},
		{
			name: 'delay',
			type: 'number',
			description_es: 'Retardo en ms antes de mostrar el tooltip.',
			description_en: 'Delay in ms before showing the tooltip.',
		},
		{
			name: 'multiline',
			type: 'boolean',
			description_es: 'Permite saltos de línea en el contenido.',
			description_en: 'Allows line breaks in the content.',
		},
		{
			name: 'width',
			type: 'number | string',
			description_es: 'Anchura máxima del tooltip.',
			description_en: 'Maximum width of the tooltip.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Desactiva el tooltip y renderiza solo el hijo.',
			description_en: 'Disables the tooltip and renders only the child.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Tooltip
			label={v.label as string}
			position={v.position as 'top' | 'bottom' | 'left' | 'right'}
			withArrow={v.withArrow as boolean}
			disabled={v.disabled as boolean}>
			<Button>Pasa el cursor</Button>
		</Tooltip>
	);
}

export default function TooltipPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
