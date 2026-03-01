'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Space } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Space',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Añade espacio vacío entre elementos de forma declarativa usando las propiedades h (alto) y w (ancho).',
	description_en:
		'Adds empty space between elements declaratively using h (height) and w (width) props.',
	controls: [
		{
			type: 'select',
			prop: 'h',
			label_es: 'Altura (h)',
			label_en: 'Height (h)',
			options: ['8', '16', '24', '32', '48', '64'],
			defaultValue: '24',
		},
	],
	codeTemplate: (v: ControlValues) => {
		return [
			`import { Space } from '@kivora/react';`,
			'',
			`<p>Bloque superior</p>`,
			`<Space h={${v.h}} />`,
			`<p>Bloque inferior</p>`,
		].join('\n');
	},
	props: [
		{
			name: 'h',
			type: 'number | string',
			description_es: 'Altura del espacio vertical.',
			description_en: 'Height of the vertical space.',
		},
		{
			name: 'w',
			type: 'number | string',
			description_es: 'Anchura del espacio horizontal.',
			description_en: 'Width of the horizontal space.',
		},
	],
};

export default function SpacePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<div className='w-full rounded-lg border border-dashed border-border p-4 text-sm'>
					<div className='rounded bg-muted px-3 py-2 text-center text-on-surface'>
						Bloque superior
					</div>
					<Space h={Number(v.h)} />
					<div className='rounded bg-muted px-3 py-2 text-center text-on-surface'>
						Bloque inferior
					</div>
				</div>
			)}
		/>
	);
}
