'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useDocumentTitle',
	description_es:
		'Establece `document.title` al montarse y restaura el título anterior al desmontarse.',
	description_en:
		'Sets `document.title` on mount and restores the previous title on unmount.',
	usage: `import { useDocumentTitle } from '@kivora/react';

function Demo() {
  useDocumentTitle('My Page Title');

  return <div>Page content</div>;
}`,
	params: [
		{
			name: 'title',
			type: 'string',
			required: true,
			description_es: 'Título que se asignará a `document.title`.',
			description_en: 'Title to assign to `document.title`.',
		},
	],
	returns: [
		{
			name: '',
			type: 'void',
			description_es: 'Este hook no retorna ningún valor.',
			description_en: 'This hook does not return a value.',
		},
	],
};

export default function UseDocumentTitlePage() {
	return <HookDoc config={config} />;
}
