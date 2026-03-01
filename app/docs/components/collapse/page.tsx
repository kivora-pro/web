'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, Collapse } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'Collapse',
	category: 'miscellaneous',
	status: 'stable',
	description_es:
		'Anima la apertura y cierre de contenido mediante una transición de altura. El prop "in" controla el estado expanded/collapsed.',
	description_en:
		'Animates opening and closing of content via a height transition. The "in" prop controls the expanded/collapsed state.',
	controls: [
		{
			type: 'select',
			prop: 'transitionDuration',
			label_es: 'Duración (ms)',
			label_en: 'Duration (ms)',
			options: ['100', '200', '300', '500'],
			defaultValue: '200',
		},
		{
			type: 'boolean',
			prop: 'animateOpacity',
			label_es: 'Animar opacidad',
			label_en: 'Animate opacity',
			defaultValue: true,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [
			'in={opened}',
			`transitionDuration={${v.transitionDuration}}`,
		];
		if (!v.animateOpacity) props.push('animateOpacity={false}');
		return `import { useState } from 'react';\nimport { Button, Collapse } from '@kivora/react';\n\nconst [opened, setOpened] = useState(false);\n\n<Button onClick={() => setOpened((o) => !o)}>\n  {opened ? 'Ocultar' : 'Mostrar'}\n</Button>\n<Collapse\n  ${props.join('\n  ')}\n>\n  <p>Contenido que se oculta y muestra.</p>\n</Collapse>`;
	},
	props: [
		{
			name: 'in',
			type: 'boolean',
			required: true,
			description_es: 'Controla si el contenido está expandido.',
			description_en: 'Controls whether the content is expanded.',
		},
		{
			name: 'animateOpacity',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Añade transición de opacidad además del height.',
			description_en: 'Adds opacity transition in addition to height.',
		},
		{
			name: 'transitionDuration',
			type: 'number',
			defaultValue: '200',
			description_es: 'Duración de la animación en milisegundos.',
			description_en: 'Animation duration in milliseconds.',
		},
		{
			name: 'transitionTimingFunction',
			type: 'string',
			defaultValue: '"ease"',
			description_es: 'Función de temporización CSS para la transición.',
			description_en: 'CSS timing function for the transition.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Contenido colapsable.',
			description_en: 'Collapsible content.',
		},
	],
};

function CollapsePreview({ v }: { v: ControlValues }) {
	const [opened, setOpened] = useState(false);
	return (
		<div className='flex flex-col gap-3'>
			<Button onClick={() => setOpened((o) => !o)}>
				{opened ? 'Ocultar contenido' : 'Mostrar contenido'}
			</Button>
			<Collapse
				in={opened}
				transitionDuration={Number(v.transitionDuration)}
				animateOpacity={v.animateOpacity as boolean}>
				<div className='p-4 border rounded-lg'>
					<p className='text-sm'>
						Este contenido se anima al aparecer y desaparecer.
					</p>
					<p className='text-sm mt-2 opacity-70'>
						Puedes controlar la duración y la función de
						temporización.
					</p>
				</div>
			</Collapse>
		</div>
	);
}

function renderPreview(v: ControlValues) {
	return <CollapsePreview v={v} />;
}

export default function CollapsePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
