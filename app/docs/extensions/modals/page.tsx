'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'modals',
	description_es:
		'API imperativa para abrir y cerrar modals sin manejar estado. Incluye soporte para modals de confirmación con acciones integradas.',
	description_en:
		'Imperative API to open and close modals without managing state. Includes support for confirmation modals with built-in actions.',
	usage: `import { ModalsProvider, modals } from '@kivora/react';

// 1. Wrap your app root (e.g. in layout.tsx)
export default function RootLayout({ children }) {
  return <ModalsProvider>{children}</ModalsProvider>;
}

// 2. Open a basic modal — returns the modal id
const id = modals.open({
  title: 'Configuración',
  children: (
    <div>
      <p>Contenido del modal</p>
      <Button onClick={() => modals.close(id)}>Cerrar</Button>
    </div>
  ),
});

// 3. Close by id or close all
modals.close(id);
modals.closeAll();

// 4. Confirmation modal
modals.openConfirmModal({
  title: '¿Eliminar elemento?',
  children: <Text>Esta acción no se puede deshacer.</Text>,
  labels: { confirm: 'Eliminar', cancel: 'Cancelar' },
  onConfirm: () => deleteItem(),
  onCancel: () => console.log('Cancelado'),
});`,
	params: [
		{
			name: 'modals.open',
			type: '(props: ModalProps) => string',
			description_es:
				'Abre un modal y devuelve su id. Acepta todas las props de Modal excepto opened y onClose.',
			description_en:
				'Opens a modal and returns its id. Accepts all Modal props except opened and onClose.',
		},
		{
			name: 'modals.close',
			type: '(id: string) => void',
			description_es: 'Cierra el modal con el id especificado.',
			description_en: 'Closes the modal with the specified id.',
		},
		{
			name: 'modals.closeAll',
			type: '() => void',
			description_es: 'Cierra todos los modals abiertos.',
			description_en: 'Closes all open modals.',
		},
		{
			name: 'modals.openConfirmModal',
			type: '(props: ConfirmModalProps) => string',
			description_es:
				'Abre un modal de confirmación prediseñado con botones de confirmar y cancelar.',
			description_en:
				'Opens a pre-built confirmation modal with confirm and cancel buttons.',
		},
	],
	returns: [
		{
			name: 'title',
			type: 'React.ReactNode',
			description_es: 'Título del modal.',
			description_en: 'Modal title.',
		},
		{
			name: 'children',
			type: 'React.ReactNode',
			description_es: 'Contenido del modal.',
			description_en: 'Modal content.',
		},
		{
			name: 'labels',
			type: '{ confirm?: string; cancel?: string }',
			description_es:
				'Textos de los botones en openConfirmModal. Solo aplicable a apertura de modals de confirmación.',
			description_en:
				'Button labels for openConfirmModal. Only applies to confirmation modals.',
		},
		{
			name: 'onConfirm',
			type: '() => void',
			description_es: 'Callback al confirmar. Solo en openConfirmModal.',
			description_en: 'Callback on confirm. Only in openConfirmModal.',
		},
		{
			name: 'onCancel',
			type: '() => void',
			description_es: 'Callback al cancelar. Solo en openConfirmModal.',
			description_en: 'Callback on cancel. Only in openConfirmModal.',
		},
	],
};

export default function ModalsPage() {
	return <HookDoc config={config} />;
}
