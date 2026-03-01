'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useFileDialog',
	description_es:
		'Abre programáticamente un diálogo de selección de archivos y gestiona los archivos seleccionados.',
	description_en:
		'Programmatically opens a file picker dialog and manages the selected files.',
	usage: `import { useFileDialog } from '@kivora/react';

function Demo() {
  const { files, open, close, reset } = useFileDialog({
    multiple: true,
    accept: 'image/*',
  });

  return (
    <div>
      <button onClick={open}>Select images</button>
      {files && <p>{files.length} file(s) selected</p>}
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,
	params: [
		{
			name: 'options.multiple',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Permite seleccionar múltiples archivos.',
			description_en: 'Allows selecting multiple files.',
		},
		{
			name: 'options.accept',
			type: 'string',
			defaultValue: "'*'",
			description_es:
				'Tipos MIME o extensiones de archivo aceptados (ej. `"image/*"`, `".pdf"`).',
			description_en:
				'Accepted MIME types or file extensions (e.g. `"image/*"`, `".pdf"`).',
		},
		{
			name: 'options.capture',
			type: 'string',
			defaultValue: 'undefined',
			description_es:
				'Especifica qué cámara usar en dispositivos móviles: `"user"` o `"environment"`.',
			description_en:
				'Specifies which camera to use on mobile devices: `"user"` or `"environment"`.',
		},
		{
			name: 'options.reset',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Si es `true`, restablece los archivos seleccionados cada vez que se abre el diálogo.',
			description_en:
				'If `true`, resets the selected files each time the dialog is opened.',
		},
	],
	returns: [
		{
			name: 'files',
			type: 'FileList | null',
			description_es:
				'Lista de archivos seleccionados por el usuario, o `null` si no hay ninguno.',
			description_en:
				'List of files selected by the user, or `null` if none.',
		},
		{
			name: 'open',
			type: '() => void',
			description_es:
				'Abre el diálogo de selección de archivos del navegador.',
			description_en: 'Opens the browser file picker dialog.',
		},
		{
			name: 'close',
			type: '() => void',
			description_es:
				'Cierra el diálogo de selección de archivos si está abierto.',
			description_en: 'Closes the file picker dialog if open.',
		},
		{
			name: 'reset',
			type: '() => void',
			description_es:
				'Limpia los archivos seleccionados y restablece el estado.',
			description_en: 'Clears the selected files and resets the state.',
		},
	],
};

export default function UseFileDialogPage() {
	return <HookDoc config={config} />;
}
