'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Overlay } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Overlay',
	category: 'overlays',
	status: 'stable',
	description_es:
		'Capa semitransparente que cubre su contenedor o toda la pantalla (fixed). Soporta blur, opacidad, color y radio de borde.',
	description_en:
		'Semi-transparent layer that covers its container or full screen (fixed). Supports blur, opacity, color and border radius.',
	controls: [
		{
			type: 'select',
			prop: 'opacity',
			label_es: 'Opacidad',
			label_en: 'Opacity',
			options: ['0.2', '0.4', '0.6', '0.7', '0.8', '0.9'],
			defaultValue: '0.6',
		},
		{
			type: 'select',
			prop: 'blur',
			label_es: 'Blur',
			label_en: 'Blur',
			options: ['0', '2', '4', '8', '16'],
			defaultValue: '0',
		},
		{
			type: 'select',
			prop: 'color',
			label_es: 'Color',
			label_en: 'Color',
			options: ['#000', '#1c1c2e', '#fff', '#1c7ed6'],
			defaultValue: '#000',
		},
		{
			type: 'select',
			prop: 'radius',
			label_es: 'Radio',
			label_en: 'Radius',
			options: ['0', 'sm', 'md', 'lg'],
			defaultValue: '0',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [
			`opacity={${v.opacity}}`,
			`color="${v.color}"`,
		];
		if (Number(v.blur) > 0) props.push(`blur={${v.blur}}`);
		if (v.radius !== '0') props.push(`radius="${v.radius}"`);
		return `import { Overlay } from '@kivora/react';\n\n<div style={{ position: 'relative', height: 200 }}>\n  <p>Contenido detrás del overlay</p>\n  <Overlay\n    ${props.join('\n    ')}\n  />\n</div>`;
	},
	props: [
		{
			name: 'blur',
			type: 'number | string',
			description_es: 'Valor de backdrop-filter blur.',
			description_en: 'Backdrop-filter blur value.',
		},
		{
			name: 'opacity',
			type: 'number',
			defaultValue: '0.6',
			description_es: 'Opacidad del overlay (0-1).',
			description_en: 'Overlay opacity (0-1).',
		},
		{
			name: 'color',
			type: 'string',
			defaultValue: '"#000"',
			description_es: 'Color de fondo del overlay.',
			description_en: 'Overlay background color.',
		},
		{
			name: 'radius',
			type: 'string | number',
			description_es: 'Radio de borde del overlay.',
			description_en: 'Overlay border radius.',
		},
		{
			name: 'zIndex',
			type: 'number',
			description_es: 'z-index del overlay.',
			description_en: 'Overlay z-index.',
		},
		{
			name: 'fixed',
			type: 'boolean',
			description_es: 'Usa position: fixed para cubrir toda la pantalla.',
			description_en: 'Uses position: fixed to cover the full screen.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div
			style={{
				position: 'relative',
				height: 160,
				width: '100%',
				maxWidth: 360,
				border: '1px solid #e0e0e0',
				borderRadius: 8,
				overflow: 'hidden',
			}}>
			<div style={{ padding: '1.5rem' }}>
				<p className='font-semibold'>Contenido detrás del overlay</p>
				<p className='text-sm opacity-70 mt-1'>
					Este texto queda cubierto por el Overlay.
				</p>
			</div>
			<Overlay
				opacity={Number(v.opacity)}
				blur={Number(v.blur)}
				color={v.color as string}
				radius={v.radius as string}
			/>
		</div>
	);
}

export default function OverlayPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
