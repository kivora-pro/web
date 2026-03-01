'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';

const config: ComponentDocConfig = {
	name: 'Portal',
	category: 'miscellaneous',
	status: 'stable',
	description_es:
		'Teleporta su contenido a un nodo DOM diferente. Por defecto lo añade a document.body. Útil para modales, tooltips y dropdowns que necesitan escapar del flujo normal del DOM.',
	description_en:
		'Teleports its content to a different DOM node. By default appends to document.body. Useful for modals, tooltips and dropdowns that need to escape the normal DOM flow.',
	controls: [
		{
			type: 'boolean',
			prop: 'reuseTargetNode',
			label_es: 'Reutilizar nodo',
			label_en: 'Reuse target node',
			defaultValue: false,
		},
	],
	codeTemplate: (_v: ControlValues) =>
		`import { Portal } from '@kivora/react';\n\n// El contenido se renderiza dentro de document.body\n// (fuera del árbol del componente padre)\n<Portal>\n  <div>Este contenido vive en document.body</div>\n</Portal>`,
	props: [
		{
			name: 'target',
			type: 'HTMLElement | string | null',
			description_es: 'Nodo DOM o selector CSS donde se monta el portal.',
			description_en: 'DOM node or CSS selector where the portal mounts.',
		},
		{
			name: 'reuseTargetNode',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Reutiliza el nodo contenedor entre renders.',
			description_en: 'Reuses the container node between renders.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Contenido a teleportar.',
			description_en: 'Content to teleport.',
		},
	],
};

function renderPreview(_v: ControlValues) {
	return (
		<div className='p-6 border-2 border-dashed rounded-lg flex flex-col items-center gap-2 text-center'>
			<div className='text-3xl'>🌀</div>
			<p className='font-semibold'>Portal</p>
			<p className='text-sm opacity-70 max-w-xs'>
				<strong>Portal</strong> renderiza su contenido fuera del árbol
				DOM del componente padre, directamente en{' '}
				<code>document.body</code> o en el nodo destino especificado.
			</p>
			<p className='text-xs opacity-50'>
				No hay preview visual — el componente opera a nivel de DOM.
			</p>
		</div>
	);
}

export default function PortalPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
