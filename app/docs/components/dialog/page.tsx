'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, Dialog } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'Dialog',
	category: 'overlays',
	status: 'stable',
	description_es:
		'Diálogo simplificado no-modal que se posiciona en la pantalla sin bloquear la interacción con el resto del contenido. A diferencia de Modal, no captura el foco.',
	description_en:
		'Simplified non-modal dialog that positions itself on screen without blocking interaction with the rest of the content. Unlike Modal, it does not trap focus.',
	controls: [
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
		{
			type: 'text',
			prop: 'title',
			label_es: 'Título',
			label_en: 'Title',
			defaultValue: 'Notificación',
		},
		{
			type: 'boolean',
			prop: 'withCloseButton',
			label_es: 'Botón cerrar',
			label_en: 'Close button',
			defaultValue: true,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [
			'opened={opened}',
			'onClose={() => setOpened(false)}',
		];
		if (v.title) props.push(`title="${v.title}"`);
		if (v.size !== 'md') props.push(`size="${v.size}"`);
		if (!v.withCloseButton) props.push('withCloseButton={false}');
		return `import { useState } from 'react';\nimport { Button, Dialog } from '@kivora/react';\n\nconst [opened, setOpened] = useState(false);\n\n<Button onClick={() => setOpened(true)}>Abrir Dialog</Button>\n<Dialog\n  ${props.join('\n  ')}\n>\n  <p>Este dialog no bloquea la interacción con la página.</p>\n</Dialog>`;
	},
	props: [
		{
			name: 'opened',
			type: 'boolean',
			required: true,
			description_es: 'Controla si el dialog está visible.',
			description_en: 'Controls whether the dialog is visible.',
		},
		{
			name: 'onClose',
			type: '() => void',
			required: true,
			description_es: 'Función llamada para cerrar el dialog.',
			description_en: 'Function called to close the dialog.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Ancho del dialog.',
			description_en: 'Dialog width.',
		},
		{
			name: 'withCloseButton',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra botón de cierre.',
			description_en: 'Shows close button.',
		},
		{
			name: 'title',
			type: 'ReactNode',
			description_es: 'Título del dialog.',
			description_en: 'Dialog title.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			description_es: 'Contenido del dialog.',
			description_en: 'Dialog content.',
		},
	],
};

function DialogPreview({ v }: { v: ControlValues }) {
	const [opened, setOpened] = useState(false);
	return (
		<>
			<Button onClick={() => setOpened(true)}>Abrir Dialog</Button>
			<Dialog
				opened={opened}
				onClose={() => setOpened(false)}
				title={v.title as string}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				withCloseButton={v.withCloseButton as boolean}>
				<p className='text-sm'>
					Este dialog no bloquea la interacción con la página.
				</p>
				<Button
					size='xs'
					onClick={() => setOpened(false)}
					className='mt-3'>
					Cerrar
				</Button>
			</Dialog>
		</>
	);
}

function renderPreview(v: ControlValues) {
	return <DialogPreview v={v} />;
}

export default function DialogPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
