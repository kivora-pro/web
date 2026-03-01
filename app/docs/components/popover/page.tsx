'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, Popover, PopoverDropdown, PopoverTarget } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Popover',
	category: 'overlays',
	status: 'stable',
	description_es:
		'Panel flotante anclado a un elemento disparador. A diferencia del Tooltip, admite contenido interactivo como formularios, listas y botones. Usa el patrón compound component con Popover.Target y Popover.Dropdown.',
	description_en:
		'Floating panel anchored to a trigger element. Unlike Tooltip, it supports interactive content like forms, lists and buttons. Uses the compound component pattern with Popover.Target and Popover.Dropdown.',
	controls: [
		{
			type: 'select',
			prop: 'position',
			label_es: 'Posición',
			label_en: 'Position',
			options: [
				'top',
				'bottom',
				'left',
				'right',
				'bottom-start',
				'bottom-end',
			],
			defaultValue: 'bottom',
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
			prop: 'closeOnEscape',
			label_es: 'Cerrar con Escape',
			label_en: 'Close on Escape',
			defaultValue: true,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Popover position="${v.position}"${v.withArrow ? ' withArrow' : ''}${!v.closeOnEscape ? ' closeOnEscape={false}' : ''}>
  <PopoverTarget>
    <Button>Abrir Popover</Button>
  </PopoverTarget>
  <PopoverDropdown>
    <div className="p-3 text-sm">
      <p className="font-medium mb-1">Título del popover</p>
      <p className="text-on-surface/60">Contenido interactivo aquí.</p>
    </div>
  </PopoverDropdown>
</Popover>`,
	props: [
		{
			name: 'opened',
			type: 'boolean',
			description_es: 'Estado controlado del popover.',
			description_en: 'Controlled open state of the popover.',
		},
		{
			name: 'defaultOpened',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Estado inicial (modo no controlado).',
			description_en: 'Initial state (uncontrolled mode).',
		},
		{
			name: 'onChange',
			type: '(opened: boolean) => void',
			description_es: 'Callback al cambiar el estado.',
			description_en: 'Callback on state change.',
		},
		{
			name: 'position',
			type: '"top" | "bottom" | "left" | "right" | "bottom-start" | "bottom-end"',
			defaultValue: '"bottom"',
			description_es: 'Posición del dropdown respecto al target.',
			description_en: 'Position of dropdown relative to target.',
		},
		{
			name: 'withArrow',
			type: 'boolean',
			description_es: 'Muestra flecha apuntando al target.',
			description_en: 'Shows arrow pointing to target.',
		},
		{
			name: 'offset',
			type: 'number',
			description_es: 'Distancia entre el target y el dropdown.',
			description_en: 'Distance between target and dropdown.',
		},
		{
			name: 'closeOnClickOutside',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Cierra al hacer clic fuera.',
			description_en: 'Closes when clicking outside.',
		},
		{
			name: 'closeOnEscape',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Cierra al presionar Escape.',
			description_en: 'Closes when pressing Escape.',
		},
		{
			name: 'width',
			type: 'number | string | "target"',
			description_es: 'Anchura del dropdown. "target" iguala el target.',
			description_en: 'Dropdown width. "target" matches the trigger.',
		},
		{
			name: 'shadow',
			type: 'string',
			description_es: 'Sombra CSS del dropdown.',
			description_en: 'CSS shadow of the dropdown.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Popover
			position={
				v.position as
					| 'top'
					| 'bottom'
					| 'left'
					| 'right'
					| 'bottom-start'
					| 'bottom-end'
			}
			withArrow={v.withArrow as boolean}
			closeOnEscape={v.closeOnEscape as boolean}>
			<PopoverTarget>
				<Button>Abrir Popover</Button>
			</PopoverTarget>
			<PopoverDropdown>
				<div className='p-3 text-sm text-on-surface'>
					<p className='font-medium mb-1'>Título del popover</p>
					<p className='text-on-surface/60'>
						Contenido interactivo aquí.
					</p>
				</div>
			</PopoverDropdown>
		</Popover>
	);
}

export default function PopoverPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
