'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { FloatingIndicator } from '@kivora/react';
import { useRef, useState } from 'react';

const TABS = ['Inicio', 'Productos', 'Servicios', 'Contacto'];

const config: ComponentDocConfig = {
	name: 'FloatingIndicator',
	category: 'miscellaneous',
	status: 'stable',
	description_es:
		'Indicador flotante que se desliza suavemente para seguir al elemento seleccionado. Se usa para implementar tabs animados, menús o controles de selección con transición visual.',
	description_en:
		'Floating indicator that slides smoothly to follow the selected element. Used to implement animated tabs, menus or selection controls with visual transition.',
	controls: [],
	codeTemplate: (_v: ControlValues) =>
		`import { FloatingIndicator } from '@kivora/react';\nimport { useRef, useState } from 'react';\n\nconst [active, setActive] = useState(0);\nconst refs = tabs.map(() => useRef<HTMLButtonElement>(null));\nconst containerRef = useRef<HTMLDivElement>(null);\n\n<div ref={containerRef} style={{ position: 'relative', display: 'flex' }}>\n  {tabs.map((tab, i) => (\n    <button\n      key={tab}\n      ref={refs[i]}\n      onClick={() => setActive(i)}\n    >\n      {tab}\n    </button>\n  ))}\n  <FloatingIndicator\n    target={refs[active].current}\n    parent={containerRef.current}\n  />\n</div>`,
	props: [
		{
			name: 'target',
			type: 'HTMLElement | null',
			required: true,
			description_es: 'Elemento DOM al que sigue el indicador.',
			description_en: 'DOM element the indicator follows.',
		},
		{
			name: 'parent',
			type: 'HTMLElement | null',
			required: true,
			description_es: 'Contenedor padre para calcular posición relativa.',
			description_en: 'Parent container to calculate relative position.',
		},
		{
			name: 'className',
			type: 'string',
			description_es: 'Clase CSS del indicador.',
			description_en: 'Indicator CSS class.',
		},
		{
			name: 'style',
			type: 'React.CSSProperties',
			description_es: 'Estilos inline del indicador.',
			description_en: 'Indicator inline styles.',
		},
		{
			name: 'transitionDuration',
			type: 'number',
			defaultValue: '150',
			description_es: 'Duración de la transición en ms.',
			description_en: 'Transition duration in ms.',
		},
	],
};

function FloatingIndicatorDemo() {
	const [active, setActive] = useState(0);
	const refs = TABS.map(() => useRef<HTMLButtonElement>(null));
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={containerRef}
			className='relative flex border rounded-lg overflow-hidden'>
			{TABS.map((tab, i) => (
				<button
					key={tab}
					ref={refs[i]}
					onClick={() => setActive(i)}
					className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors ${active === i ? 'text-white' : 'opacity-70 hover:opacity-100'}`}>
					{tab}
				</button>
			))}
			<FloatingIndicator
				target={refs[active].current}
				parent={containerRef.current}
				className='rounded bg-blue-500'
			/>
		</div>
	);
}

function renderPreview(_v: ControlValues) {
	return <FloatingIndicatorDemo />;
}

export default function FloatingIndicatorPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
