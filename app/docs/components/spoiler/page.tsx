'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Spoiler } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Spoiler',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Envuelve contenido largo y lo colapsa a una altura máxima. El usuario puede expandirlo o colapsarlo mediante un botón configurable.',
	description_en:
		'Wraps long content and collapses it to a maximum height. Users can expand or collapse it via a configurable button.',
	controls: [
		{
			type: 'select',
			prop: 'maxHeight',
			label_es: 'Altura máxima',
			label_en: 'Max height',
			options: ['50', '80', '100', '150'],
			defaultValue: '80',
		},
		{
			type: 'text',
			prop: 'showLabel',
			label_es: 'Texto "mostrar más"',
			label_en: '"Show more" text',
			defaultValue: 'Mostrar más',
		},
		{
			type: 'text',
			prop: 'hideLabel',
			label_es: 'Texto "mostrar menos"',
			label_en: '"Show less" text',
			defaultValue: 'Mostrar menos',
		},
		{
			type: 'boolean',
			prop: 'initiallyExpanded',
			label_es: 'Expandido inicialmente',
			label_en: 'Initially expanded',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props = [
			`maxHeight={${v.maxHeight}}`,
			`showLabel="${v.showLabel}"`,
			`hideLabel="${v.hideLabel}"`,
		];
		if (v.initiallyExpanded) props.push('initiallyExpanded');
		return `import { Spoiler } from '@kivora/react';\n\n<Spoiler\n  ${props.join('\n  ')}\n>\n  {/* contenido largo aquí */}\n</Spoiler>`;
	},
	props: [
		{
			name: 'maxHeight',
			type: 'number',
			required: true,
			description_es: 'Altura máxima del contenido colapsado en píxeles.',
			description_en: 'Maximum height of collapsed content in pixels.',
		},
		{
			name: 'showLabel',
			type: 'ReactNode',
			required: true,
			description_es: 'Etiqueta del botón para expandir.',
			description_en: 'Expand button label.',
		},
		{
			name: 'hideLabel',
			type: 'ReactNode',
			required: true,
			description_es: 'Etiqueta del botón para colapsar.',
			description_en: 'Collapse button label.',
		},
		{
			name: 'initiallyExpanded',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'El spoiler comienza expandido.',
			description_en: 'Spoiler starts expanded.',
		},
		{
			name: 'transitionDuration',
			type: 'number',
			defaultValue: '200',
			description_es: 'Duración de la animación en ms.',
			description_en: 'Animation duration in ms.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-80'>
			<Spoiler
				maxHeight={Number(v.maxHeight)}
				showLabel={v.showLabel as string}
				hideLabel={v.hideLabel as string}
				initiallyExpanded={v.initiallyExpanded as boolean}>
				<p>
					Kivora es una librería de componentes de interfaz de usuario
					construida para React y Next.js. Ofrece más de 100
					componentes accesibles, totalmente estilizados y listos para
					producción. Cada componente está diseñado para ser fácil de
					usar, personalizable y compatible con TypeScript. La
					librería sigue las mejores prácticas de accesibilidad (ARIA)
					y ofrece soporte completo para temas personalizados, modo
					oscuro y diseño responsivo.
				</p>
			</Spoiler>
		</div>
	);
}

export default function SpoilerPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
