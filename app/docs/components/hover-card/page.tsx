'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import {
	Button,
	HoverCard,
	HoverCardDropdown,
	HoverCardTarget,
} from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'HoverCard',
	category: 'overlays',
	status: 'stable',
	description_es:
		'Tarjeta flotante que se muestra al hacer hover sobre el elemento target. A diferencia del Tooltip, admite contenido enriquecido y es interactiva: el cursor puede moverse al interior del card sin que se cierre.',
	description_en:
		'Floating card shown on hover over the target element. Unlike Tooltip, it supports rich content and is interactive — the cursor can move inside the card without it closing.',
	controls: [
		{
			type: 'range',
			prop: 'openDelay',
			label_es: 'Retardo apertura (ms)',
			label_en: 'Open delay (ms)',
			min: 0,
			max: 500,
			step: 50,
			defaultValue: 0,
		},
		{
			type: 'range',
			prop: 'closeDelay',
			label_es: 'Retardo cierre (ms)',
			label_en: 'Close delay (ms)',
			min: 0,
			max: 500,
			step: 50,
			defaultValue: 150,
		},
		{
			type: 'boolean',
			prop: 'withArrow',
			label_es: 'Con flecha',
			label_en: 'With arrow',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<HoverCard openDelay={${v.openDelay}} closeDelay={${v.closeDelay}}${v.withArrow ? ' withArrow' : ''}>
  <HoverCardTarget>
    <Button variant="outline">@kivora</Button>
  </HoverCardTarget>
  <HoverCardDropdown>
    <div className="p-3">
      <div className="font-semibold text-sm">@kivora</div>
      <div className="text-xs text-on-surface/60 mt-1">
        Librería de componentes React de código abierto.
      </div>
    </div>
  </HoverCardDropdown>
</HoverCard>`,
	props: [
		{
			name: 'openDelay',
			type: 'number',
			defaultValue: '0',
			description_es: 'Retardo en ms antes de abrir el card.',
			description_en: 'Delay in ms before opening the card.',
		},
		{
			name: 'closeDelay',
			type: 'number',
			defaultValue: '150',
			description_es: 'Retardo en ms antes de cerrar el card.',
			description_en: 'Delay in ms before closing the card.',
		},
		{
			name: 'position',
			type: '"top" | "bottom" | "left" | "right"',
			defaultValue: '"bottom"',
			description_es: 'Posición del card respecto al target.',
			description_en: 'Card position relative to target.',
		},
		{
			name: 'withArrow',
			type: 'boolean',
			description_es: 'Muestra flecha apuntando al target.',
			description_en: 'Shows arrow pointing to target.',
		},
		{
			name: 'width',
			type: 'number | string',
			description_es: 'Anchura del card flotante.',
			description_en: 'Width of the floating card.',
		},
		{
			name: 'shadow',
			type: 'string',
			description_es: 'Sombra CSS del card.',
			description_en: 'CSS shadow of the card.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<HoverCard
			openDelay={v.openDelay as number}
			closeDelay={v.closeDelay as number}
			withArrow={v.withArrow as boolean}>
			<HoverCardTarget>
				<Button variant='outline'>@kivora</Button>
			</HoverCardTarget>
			<HoverCardDropdown>
				<div className='p-3 text-on-surface'>
					<div className='font-semibold text-sm'>@kivora</div>
					<div className='text-xs text-on-surface/60 mt-1'>
						Librería de componentes React de código abierto.
					</div>
					<div className='text-xs text-on-surface/40 mt-2'>
						42 componentes · MIT License
					</div>
				</div>
			</HoverCardDropdown>
		</HoverCard>
	);
}

export default function HoverCardPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
