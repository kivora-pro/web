'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useFavicon',
	description_es:
		'Establece dinámicamente el favicon de la página a la URL proporcionada.',
	description_en: 'Dynamically sets the page favicon to the provided URL.',
	usage: `import { useFavicon } from '@kivora/react';

function Demo() {
  useFavicon('/icons/favicon-active.png');

  return <div>Page with custom favicon</div>;
}`,
	params: [
		{
			name: 'url',
			type: 'string',
			required: true,
			description_es: 'URL de la imagen que se usará como favicon.',
			description_en: 'URL of the image to use as the favicon.',
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

export default function UseFaviconPage() {
	return <HookDoc config={config} />;
}
