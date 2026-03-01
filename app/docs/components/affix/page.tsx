'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';

const config: ComponentDocConfig = {
	name: 'Affix',
	category: 'miscellaneous',
	status: 'stable',
	description_es:
		'Fija un elemento en una posición específica de la ventana (esquina, borde). Útil para botones flotantes, notificaciones fijas o barras de acción.',
	description_en:
		'Fixes an element at a specific position in the window (corner, edge). Useful for floating buttons, fixed notifications or action bars.',
	controls: [
		{
			type: 'select',
			prop: 'position',
			label_es: 'Posición',
			label_en: 'Position',
			options: ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
			defaultValue: 'bottom-right',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const positionMap: Record<string, object> = {
			'bottom-right': { bottom: 20, right: 20 },
			'bottom-left': { bottom: 20, left: 20 },
			'top-right': { top: 20, right: 20 },
			'top-left': { top: 20, left: 20 },
		};
		const pos = JSON.stringify(positionMap[v.position as string]).replace(
			/"/g,
			'',
		);
		return `import { Affix, Button } from '@kivora/react';\n\n<Affix position={${pos}}>\n  <Button>Volver arriba</Button>\n</Affix>`;
	},
	props: [
		{
			name: 'position',
			type: '{ top?: number; bottom?: number; left?: number; right?: number }',
			description_es: 'Posición fija en la ventana.',
			description_en: 'Fixed position in the window.',
		},
		{
			name: 'zIndex',
			type: 'number',
			defaultValue: '200',
			description_es: 'z-index del elemento fijo.',
			description_en: 'z-index of the fixed element.',
		},
		{
			name: 'withinPortal',
			type: 'boolean',
			defaultValue: 'true',
			description_es:
				'Renderiza dentro de un portal para evitar problemas de z-index.',
			description_en: 'Renders inside a portal to avoid z-index issues.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Contenido a fijar en la pantalla.',
			description_en: 'Content to fix on screen.',
		},
	],
};

function renderPreview(_v: ControlValues) {
	return (
		<div className='w-full h-32 border-2 border-dashed rounded-lg flex items-center justify-center relative'>
			<p className='text-sm opacity-60 text-center px-4'>
				El componente <strong>Affix</strong> fija su contenido a la
				ventana del navegador.
				<br />
				En producción aparecería en la esquina indicada de la página.
			</p>
		</div>
	);
}

export default function AffixPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
