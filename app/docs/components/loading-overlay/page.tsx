'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, LoadingOverlay } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'LoadingOverlay',
	category: 'feedback',
	status: 'stable',
	description_es:
		'Superpone un overlay semitransparente con un Loader sobre el elemento contenedor más cercano con posición relativa. Útil para bloquear la interacción mientras se carga contenido.',
	description_en:
		'Overlays a semi-transparent layer with a Loader on the nearest relatively-positioned container. Useful for blocking interaction while content loads.',
	controls: [
		{
			type: 'select',
			prop: 'loaderType',
			label_es: 'Tipo de loader',
			label_en: 'Loader type',
			options: ['oval', 'bars', 'dots'],
			defaultValue: 'oval',
		},
		{
			type: 'select',
			prop: 'loaderSize',
			label_es: 'Tamaño del loader',
			label_en: 'Loader size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
		{
			type: 'range',
			prop: 'blur',
			label_es: 'Blur overlay',
			label_en: 'Overlay blur',
			min: 0,
			max: 10,
			step: 1,
			defaultValue: 2,
		},
	],
	codeTemplate: (
		v: ControlValues,
	) => `<div style={{ position: 'relative', height: 120 }}>
  <LoadingOverlay
    visible={visible}
    loaderProps={{ type: '${v.loaderType}', size: '${v.loaderSize}' }}
    overlayProps={{ blur: ${v.blur} }}
  />
  {/* contenido del contenedor */}
</div>`,
	props: [
		{
			name: 'visible',
			type: 'boolean',
			required: true,
			description_es: 'Controla si el overlay es visible.',
			description_en: 'Controls whether the overlay is visible.',
		},
		{
			name: 'loaderProps',
			type: '{ type?: LoaderType; size?: LoaderSize }',
			description_es: 'Props pasadas al componente Loader interno.',
			description_en: 'Props forwarded to the inner Loader component.',
		},
		{
			name: 'overlayProps',
			type: '{ blur?: number; opacity?: number; color?: string }',
			defaultValue: '{ blur: 2, opacity: 0.5, color: "#fff" }',
			description_es: 'Configuración visual del fondo del overlay.',
			description_en: 'Visual configuration of the overlay background.',
		},
		{
			name: 'zIndex',
			type: 'number',
			defaultValue: '400',
			description_es: 'z-index del overlay.',
			description_en: 'z-index of the overlay.',
		},
		{
			name: 'transitionDuration',
			type: 'number',
			description_es:
				'Duración de la transición de entrada/salida en ms.',
			description_en: 'Entry/exit transition duration in ms.',
		},
	],
};

function LoadingOverlayPreview({ v }: { v: ControlValues }) {
	const [visible, setVisible] = useState(true);
	return (
		<div className='flex flex-col items-center gap-4'>
			<div className='relative h-28 w-72 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4'>
				<LoadingOverlay
					visible={visible}
					loaderProps={{
						type: v.loaderType as 'oval' | 'bars' | 'dots',
						size: v.loaderSize as 'xs' | 'sm' | 'md' | 'lg' | 'xl',
					}}
					overlayProps={{ blur: v.blur as number }}
				/>
				<p className='text-sm text-zinc-400'>
					Contenido del componente
				</p>
				<p className='mt-1 text-xs text-zinc-600'>
					Este contenido queda bloqueado cuando el overlay es visible.
				</p>
			</div>
			<Button
				size='sm'
				variant={visible ? 'outline' : 'solid'}
				onClick={() => setVisible((s) => !s)}>
				{visible ? 'Ocultar overlay' : 'Mostrar overlay'}
			</Button>
		</div>
	);
}

export default function LoadingOverlayPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => <LoadingOverlayPreview v={v} />}
		/>
	);
}
