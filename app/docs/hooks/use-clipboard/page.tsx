'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useClipboard',
	description_es:
		'Proporciona utilidades para copiar texto al portapapeles del sistema.',
	description_en: 'Provides utilities to copy text to the system clipboard.',
	usage: `import { useClipboard } from '@kivora/react';

function Demo() {
  const { copy, copied, reset, error } = useClipboard({ timeout: 2000 });

  return (
    <button onClick={() => copy('Hello world')}>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}`,
	params: [
		{
			name: 'options.timeout',
			type: 'number',
			defaultValue: '2000',
			description_es:
				'Milisegundos antes de que `copied` vuelva a ser `false`.',
			description_en: 'Milliseconds before `copied` resets to `false`.',
		},
	],
	returns: [
		{
			name: 'copy',
			type: '(text: string) => void',
			description_es:
				'Función para copiar el texto dado al portapapeles.',
			description_en: 'Function to copy the given text to the clipboard.',
		},
		{
			name: 'copied',
			type: 'boolean',
			description_es:
				'`true` durante el período de tiempo de espera después de copiar.',
			description_en: '`true` for the timeout period after copying.',
		},
		{
			name: 'reset',
			type: '() => void',
			description_es: 'Restablece `copied` a `false` y limpia el error.',
			description_en: 'Resets `copied` to `false` and clears the error.',
		},
		{
			name: 'error',
			type: 'Error | null',
			description_es:
				'Error ocurrido durante la última operación de copia, o `null`.',
			description_en: 'Error from the last copy operation, or `null`.',
		},
	],
};

export default function UseClipboardPage() {
	return <HookDoc config={config} />;
}
