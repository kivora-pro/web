'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Timeline, TimelineItem } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Timeline',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Componente de línea de tiempo vertical para mostrar eventos o pasos en secuencia. Los items anteriores al índice activo se muestran como completados.',
	description_en:
		'Vertical timeline component for showing events or steps in sequence. Items before the active index are shown as completed.',
	controls: [
		{
			type: 'select',
			prop: 'active',
			label_es: 'Item activo',
			label_en: 'Active item',
			options: ['0', '1', '2', '3'],
			defaultValue: '1',
		},
		{
			type: 'select',
			prop: 'bulletSize',
			label_es: 'Tamaño bullet',
			label_en: 'Bullet size',
			options: ['16', '20', '24', '28', '32'],
			defaultValue: '20',
		},
		{
			type: 'select',
			prop: 'lineWidth',
			label_es: 'Grosor línea',
			label_en: 'Line width',
			options: ['1', '2', '3', '4'],
			defaultValue: '2',
		},
		{
			type: 'select',
			prop: 'align',
			label_es: 'Alineación',
			label_en: 'Alignment',
			options: ['left', 'right'],
			defaultValue: 'left',
		},
		{
			type: 'boolean',
			prop: 'reverseActive',
			label_es: 'Invertir activo',
			label_en: 'Reverse active',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props = [
			`active={${v.active}}`,
			`bulletSize={${v.bulletSize}}`,
			`lineWidth={${v.lineWidth}}`,
		];
		if (v.align !== 'left') props.push(`align="${v.align}"`);
		if (v.reverseActive) props.push('reverseActive');
		return `import { Timeline, TimelineItem } from '@kivora/react';\n\n<Timeline\n  ${props.join('\n  ')}\n>\n  <TimelineItem title="Primer paso">\n    <p>Descripción del primer paso.</p>\n  </TimelineItem>\n  <TimelineItem title="Segundo paso">\n    <p>Descripción del segundo paso.</p>\n  </TimelineItem>\n  <TimelineItem title="Tercer paso">\n    <p>Descripción del tercer paso.</p>\n  </TimelineItem>\n</Timeline>`;
	},
	props: [
		{
			name: 'active',
			type: 'number',
			description_es: 'Índice del item activo actual.',
			description_en: 'Index of the current active item.',
		},
		{
			name: 'bulletSize',
			type: 'number',
			defaultValue: '20',
			description_es: 'Tamaño del bullet circle en píxeles.',
			description_en: 'Bullet circle size in pixels.',
		},
		{
			name: 'lineWidth',
			type: 'number',
			defaultValue: '2',
			description_es: 'Grosor de la línea conectora en píxeles.',
			description_en: 'Connector line thickness in pixels.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color de los bullets e items activos.',
			description_en: 'Color of bullets and active items.',
		},
		{
			name: 'align',
			type: '"left" | "right"',
			defaultValue: '"left"',
			description_es: 'Alineación del contenido respecto a la línea.',
			description_en: 'Content alignment relative to the line.',
		},
		{
			name: 'reverseActive',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Los items después del activo se muestran como completados.',
			description_en: 'Items after active are shown as completed.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Timeline
			active={Number(v.active)}
			bulletSize={Number(v.bulletSize)}
			lineWidth={Number(v.lineWidth)}
			align={v.align as 'left' | 'right'}
			reverseActive={v.reverseActive as boolean}>
			<TimelineItem title='Proyecto creado'>
				<p className='text-sm opacity-70'>
					Repositorio inicializado en GitHub.
				</p>
			</TimelineItem>
			<TimelineItem title='Primera versión'>
				<p className='text-sm opacity-70'>
					Versión 0.1.0 publicada en npm.
				</p>
			</TimelineItem>
			<TimelineItem title='Documentación'>
				<p className='text-sm opacity-70'>
					Sitio de documentación publicado.
				</p>
			</TimelineItem>
		</Timeline>
	);
}

export default function TimelinePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
