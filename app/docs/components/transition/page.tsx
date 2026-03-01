'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, Transition } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'Transition',
	category: 'miscellaneous',
	status: 'stable',
	description_es:
		'Aplica animaciones de entrada/salida a componentes. El prop "mounted" controla si el elemento está visible y "transition" define el tipo de animación.',
	description_en:
		'Applies enter/exit animations to components. The "mounted" prop controls element visibility and "transition" defines the animation type.',
	controls: [
		{
			type: 'select',
			prop: 'transition',
			label_es: 'Transición',
			label_en: 'Transition',
			options: ['fade', 'slide-up', 'slide-down', 'scale', 'pop'],
			defaultValue: 'fade',
		},
		{
			type: 'select',
			prop: 'duration',
			label_es: 'Duración (ms)',
			label_en: 'Duration (ms)',
			options: ['100', '200', '300', '500', '700'],
			defaultValue: '300',
		},
	],
	codeTemplate: (v: ControlValues) =>
		`import { useState } from 'react';\nimport { Button, Transition } from '@kivora/react';\n\nconst [mounted, setMounted] = useState(false);\n\n<Button onClick={() => setMounted((m) => !m)}>Toggle</Button>\n<Transition\n  mounted={mounted}\n  transition="${v.transition}"\n  duration={${v.duration}}\n>\n  {(styles) => (\n    <div style={styles}>\n      Contenido animado\n    </div>\n  )}\n</Transition>`,
	props: [
		{
			name: 'mounted',
			type: 'boolean',
			required: true,
			description_es: 'Controla si el componente está montado/visible.',
			description_en:
				'Controls whether the component is mounted/visible.',
		},
		{
			name: 'transition',
			type: '"fade" | "slide-up" | "slide-down" | "scale" | "pop" | TransitionStyles',
			description_es: 'Tipo de animación o estilos personalizados.',
			description_en: 'Animation type or custom styles.',
		},
		{
			name: 'duration',
			type: 'number',
			defaultValue: '250',
			description_es: 'Duración de la animación en ms.',
			description_en: 'Animation duration in ms.',
		},
		{
			name: 'timingFunction',
			type: 'string',
			defaultValue: '"ease"',
			description_es: 'Función CSS de temporización.',
			description_en: 'CSS timing function.',
		},
		{
			name: 'keepMounted',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Mantiene el DOM montado aunque no sea visible.',
			description_en: 'Keeps DOM mounted even when not visible.',
		},
		{
			name: 'children',
			type: '(styles: React.CSSProperties) => ReactNode',
			required: true,
			description_es:
				'Función render que recibe los estilos de transición.',
			description_en: 'Render function receiving transition styles.',
		},
	],
};

function TransitionPreview({ v }: { v: ControlValues }) {
	const [mounted, setMounted] = useState(false);
	return (
		<div className='flex flex-col gap-4 items-start'>
			<Button onClick={() => setMounted((m) => !m)}>
				{mounted ? 'Ocultar' : 'Mostrar'}
			</Button>
			<Transition
				mounted={mounted}
				transition={v.transition as string}
				duration={Number(v.duration)}>
				{(styles) => (
					<div
						style={styles}
						className='p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20'>
						<p className='text-sm'>
							Contenido animado con{' '}
							<strong>{v.transition as string}</strong>
						</p>
					</div>
				)}
			</Transition>
		</div>
	);
}

function renderPreview(v: ControlValues) {
	return <TransitionPreview v={v} />;
}

export default function TransitionPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
