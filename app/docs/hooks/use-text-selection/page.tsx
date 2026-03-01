'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useTextSelection',
	description_es:
		'Sigue de forma reactiva la selección de texto actual de la ventana, actualizándose en el evento `selectionchange`.',
	description_en:
		'Reactively tracks the current window text selection, updating on the `selectionchange` event.',
	usage: `import { useTextSelection } from '@kivora/react';

function Demo() {
  const { text, ranges, rects, html } = useTextSelection();

  return (
    <div>
      <p>Select some text anywhere on the page.</p>
      {text && <p>Selected: "{text}"</p>}
    </div>
  );
}`,
	params: [],
	returns: [
		{
			name: 'text',
			type: 'string',
			description_es: 'Texto plano actualmente seleccionado.',
			description_en: 'Currently selected plain text.',
		},
		{
			name: 'ranges',
			type: 'Range[]',
			description_es:
				'Array de objetos `Range` que representan la selección actual.',
			description_en:
				'Array of `Range` objects representing the current selection.',
		},
		{
			name: 'rects',
			type: 'DOMRect[]',
			description_es:
				'Array de rectángulos delimitadores de los rangos seleccionados.',
			description_en:
				'Array of bounding rectangles for the selected ranges.',
		},
		{
			name: 'html',
			type: 'string',
			description_es: 'Contenido HTML del texto seleccionado.',
			description_en: 'HTML content of the selected text.',
		},
	],
};

export default function UseTextSelectionPage() {
	return <HookDoc config={config} />;
}
