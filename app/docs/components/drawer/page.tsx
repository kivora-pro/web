'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, Drawer } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'Drawer',
	category: 'overlays',
	status: 'stable',
	description_es:
		'Panel lateral deslizante que emerge desde cualquier borde de la pantalla. Ideal para menús de navegación, filtros o formularios secundarios sin abandonar el contexto actual.',
	description_en:
		'Sliding side panel that emerges from any screen edge. Ideal for navigation menus, filters or secondary forms without leaving the current context.',
	controls: [
		{
			type: 'select',
			prop: 'position',
			label_es: 'Posición',
			label_en: 'Position',
			options: ['left', 'right', 'top', 'bottom'],
			defaultValue: 'right',
		},
		{
			type: 'text',
			prop: 'title',
			label_es: 'Título',
			label_en: 'Title',
			defaultValue: 'Panel lateral',
		},
		{
			type: 'boolean',
			prop: 'withCloseButton',
			label_es: 'Botón cerrar',
			label_en: 'Close button',
			defaultValue: true,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`const [opened, setOpened] = useState(false);

<Button onClick={() => setOpened(true)}>Abrir Drawer</Button>

<Drawer
  opened={opened}
  onClose={() => setOpened(false)}
  title="${v.title}"
  position="${v.position}"${!v.withCloseButton ? '\n  withCloseButton={false}' : ''}
>
  <p>Contenido del drawer. Aquí va el contenido lateral.</p>
</Drawer>`,
	props: [
		{
			name: 'opened',
			type: 'boolean',
			required: true,
			description_es: 'Controla si el drawer está visible.',
			description_en: 'Controls whether the drawer is visible.',
		},
		{
			name: 'onClose',
			type: '() => void',
			required: true,
			description_es: 'Función llamada para cerrar el drawer.',
			description_en: 'Function called to close the drawer.',
		},
		{
			name: 'title',
			type: 'ReactNode',
			description_es: 'Título en la cabecera del drawer.',
			description_en: 'Title in the drawer header.',
		},
		{
			name: 'position',
			type: '"left" | "right" | "top" | "bottom"',
			defaultValue: '"right"',
			description_es: 'Borde desde donde emerge el drawer.',
			description_en: 'Edge from which the drawer emerges.',
		},
		{
			name: 'size',
			type: 'number | string',
			description_es:
				'Anchura (posición left/right) o altura (top/bottom).',
			description_en: 'Width (left/right) or height (top/bottom).',
		},
		{
			name: 'withCloseButton',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Muestra el botón de cierre en la cabecera.',
			description_en: 'Shows the close button in the header.',
		},
		{
			name: 'closeOnClickOutside',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Cierra el drawer al hacer clic fuera.',
			description_en: 'Closes drawer when clicking outside.',
		},
		{
			name: 'closeOnEscape',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Cierra el drawer al presionar Escape.',
			description_en: 'Closes drawer when pressing Escape.',
		},
		{
			name: 'overlayProps',
			type: '{ opacity?: number; blur?: number }',
			description_es: 'Opciones visuales del overlay de fondo.',
			description_en: 'Visual options for the background overlay.',
		},
		{
			name: 'zIndex',
			type: 'number',
			defaultValue: '300',
			description_es: 'z-index del drawer.',
			description_en: 'z-index of the drawer.',
		},
	],
};

function DrawerPreview({ v }: { v: ControlValues }) {
	const [opened, setOpened] = useState(false);
	return (
		<>
			<Button onClick={() => setOpened(true)}>Abrir Drawer</Button>
			<Drawer
				opened={opened}
				onClose={() => setOpened(false)}
				title={v.title as string}
				position={v.position as 'left' | 'right' | 'top' | 'bottom'}
				withCloseButton={v.withCloseButton as boolean}>
				<div className='p-4 text-sm text-on-surface/70'>
					<p>Contenido del drawer. Aquí va el contenido lateral.</p>
				</div>
			</Drawer>
		</>
	);
}

function renderPreview(v: ControlValues) {
	return <DrawerPreview v={v} />;
}

export default function DrawerPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
