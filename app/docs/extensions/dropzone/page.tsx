'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'Dropzone',
	description_es:
		'Área de arrastrar y soltar archivos con soporte para validación de tipo, tamaño y cantidad. El children puede ser un nodo estático o una función que recibe el estado actual de la zona.',
	description_en:
		'File drag-and-drop area with type, size, and count validation. Children can be a static node or a function that receives the current zone status.',
	usage: `import { Dropzone } from '@kivora/react';
import type { DropzoneStatus } from '@kivora/react';

// Básico con función de estado
<Dropzone
  accept={{ 'image/*': ['.png', '.jpg', '.webp'] }}
  maxSize={5 * 1024 * 1024}
  onDrop={(files) => console.log('Aceptados:', files)}
  onDropRejected={(rejected) => console.log('Rechazados:', rejected)}
>
  {(status: DropzoneStatus) => (
    <div className="flex flex-col items-center gap-2 p-8">
      {status === 'accept' && <p className="text-green-500">Suelta aquí</p>}
      {status === 'reject' && <p className="text-red-500">Archivo no válido</p>}
      {status === 'idle' && <p>Arrastra imágenes o haz clic para seleccionar</p>}
    </div>
  )}
</Dropzone>

// Con ref para apertura programática
const openRef = useRef<() => void>(null);

<Dropzone openRef={openRef} onDrop={handleDrop}>
  <p>Zona de archivos</p>
</Dropzone>

<Button onClick={() => openRef.current?.()}>Seleccionar archivo</Button>`,
	params: [
		{
			name: 'onDrop',
			type: '(files: File[]) => void',
			description_es:
				'Llamado con todos los archivos (aceptados y rechazados) al soltar.',
			description_en:
				'Called with all files (accepted and rejected) on drop.',
		},
		{
			name: 'onDropAccepted',
			type: '(files: File[]) => void',
			description_es: 'Llamado únicamente con archivos aceptados.',
			description_en: 'Called only with accepted files.',
		},
		{
			name: 'onDropRejected',
			type: '(files: FileRejection[]) => void',
			description_es:
				'Llamado con archivos rechazados. FileRejection = { file: File, errors: string[] }.',
			description_en:
				'Called with rejected files. FileRejection = { file: File, errors: string[] }.',
		},
		{
			name: 'accept',
			type: 'Record<string, string[]> | string[]',
			description_es:
				"Tipos MIME aceptados, e.g. { 'image/*': ['.png', '.jpg'] }.",
			description_en:
				"Accepted MIME types, e.g. { 'image/*': ['.png', '.jpg'] }.",
		},
		{
			name: 'multiple',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Permite seleccionar múltiples archivos.',
			description_en: 'Allows selecting multiple files.',
		},
		{
			name: 'maxSize',
			type: 'number',
			defaultValue: 'Infinity',
			description_es: 'Tamaño máximo en bytes por archivo.',
			description_en: 'Maximum size in bytes per file.',
		},
		{
			name: 'maxFiles',
			type: 'number',
			defaultValue: 'Infinity',
			description_es: 'Número máximo de archivos a aceptar.',
			description_en: 'Maximum number of files to accept.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Deshabilita la zona de drop.',
			description_en: 'Disables the drop zone.',
		},
		{
			name: 'loading',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Muestra indicador de carga y deshabilita interacciones.',
			description_en:
				'Shows a loading indicator and disables interactions.',
		},
		{
			name: 'openRef',
			type: 'React.RefObject<() => void>',
			description_es:
				'Ref que expone una función para abrir el selector de archivos programáticamente.',
			description_en:
				'Ref that exposes a function to open the file picker programmatically.',
		},
		{
			name: 'activateOnClick',
			type: 'boolean',
			defaultValue: 'true',
			description_es:
				'Abre el selector de archivos al hacer clic en la zona.',
			description_en: 'Opens the file picker when clicking the zone.',
		},
		{
			name: 'activateOnKeyboard',
			type: 'boolean',
			defaultValue: 'true',
			description_es:
				'Abre el selector de archivos al presionar Enter o Espacio sobre la zona.',
			description_en:
				'Opens the file picker when pressing Enter or Space on the zone.',
		},
		{
			name: 'children',
			type: 'ReactNode | ((status: DropzoneStatus) => ReactNode)',
			description_es:
				"Contenido de la zona. Puede ser estático o una función que recibe 'idle' | 'accept' | 'reject'.",
			description_en:
				"Zone content. Can be static or a function receiving 'idle' | 'accept' | 'reject'.",
		},
	],
};

export default function DropzonePage() {
	return <HookDoc config={config} />;
}
