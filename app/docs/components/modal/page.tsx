'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, Modal, ModalBody, ModalFooter } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'Modal',
	category: 'overlays',
	status: 'stable',
	description_es:
		'Ventana de diálogo que se superpone al contenido de la página. Soporta múltiples tamaños, modo centrado, cierre con Escape, captura de foco y animaciones de entrada/salida.',
	description_en:
		'Dialog window that overlays the page content. Supports multiple sizes, centered mode, Escape to close, focus trap and enter/exit animations.',
	controls: [
		{
			type: 'text',
			prop: 'title',
			label_es: 'Título',
			label_en: 'Title',
			defaultValue: 'Confirmar acción',
		},
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
			defaultValue: 'md',
		},
		{
			type: 'boolean',
			prop: 'centered',
			label_es: 'Centrado verticalmente',
			label_en: 'Vertically centered',
			defaultValue: false,
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

<Button onClick={() => setOpened(true)}>Abrir Modal</Button>

<Modal
  opened={opened}
  onClose={() => setOpened(false)}
  title="${v.title}"
  size="${v.size}"${v.centered ? '\n  centered' : ''}${!v.withCloseButton ? '\n  withCloseButton={false}' : ''}
>
  <ModalBody>
    <p>Contenido del modal. Esta acción no se puede deshacer.</p>
  </ModalBody>
  <ModalFooter>
    <Button variant="ghost" onClick={() => setOpened(false)}>Cancelar</Button>
    <Button onClick={() => setOpened(false)}>Confirmar</Button>
  </ModalFooter>
</Modal>`,
	props: [
		{
			name: 'opened',
			type: 'boolean',
			required: true,
			description_es: 'Controla si el modal está visible.',
			description_en: 'Controls whether the modal is visible.',
		},
		{
			name: 'onClose',
			type: '() => void',
			required: true,
			description_es: 'Función llamada para cerrar el modal.',
			description_en: 'Function called to close the modal.',
		},
		{
			name: 'title',
			type: 'ReactNode',
			description_es: 'Título en la cabecera del modal.',
			description_en: 'Title in the modal header.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
			defaultValue: '"md"',
			description_es: 'Anchura máxima del modal.',
			description_en: 'Maximum width of the modal.',
		},
		{
			name: 'centered',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Centra el modal verticalmente en la pantalla.',
			description_en: 'Centers the modal vertically on screen.',
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
			description_es: 'Cierra el modal al hacer clic fuera.',
			description_en: 'Closes modal when clicking outside.',
		},
		{
			name: 'closeOnEscape',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Cierra el modal al presionar Escape.',
			description_en: 'Closes modal when pressing Escape.',
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
			description_es: 'z-index del modal.',
			description_en: 'z-index of the modal.',
		},
	],
};

function ModalPreview({ v }: { v: ControlValues }) {
	const [opened, setOpened] = useState(false);
	return (
		<>
			<Button onClick={() => setOpened(true)}>Abrir Modal</Button>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title={v.title as string}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'}
				centered={v.centered as boolean}
				withCloseButton={v.withCloseButton as boolean}>
				<ModalBody>
					<p className='text-on-surface/70 text-sm'>
						Contenido del modal. Esta acción no se puede deshacer.
					</p>
				</ModalBody>
				<ModalFooter>
					<Button
						variant='ghost'
						onClick={() => setOpened(false)}>
						Cancelar
					</Button>
					<Button onClick={() => setOpened(false)}>Confirmar</Button>
				</ModalFooter>
			</Modal>
		</>
	);
}

function renderPreview(v: ControlValues) {
	return <ModalPreview v={v} />;
}

export default function ModalPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
