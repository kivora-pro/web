'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useFullscreen',
	description_es:
		'Gestiona el modo de pantalla completa para un elemento del DOM usando la Fullscreen API.',
	description_en:
		'Manages fullscreen mode for a DOM element using the Fullscreen API.',
	usage: `import { useFullscreen } from '@kivora/react';

function Demo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <div ref={ref}>
      <button onClick={toggle}>
        {fullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      </button>
    </div>
  );
}`,
	params: [],
	returns: [
		{
			name: 'ref',
			type: 'React.RefObject<HTMLElement | null>',
			description_es:
				'Ref que debe asignarse al elemento que entrará en modo pantalla completa.',
			description_en:
				'Ref to attach to the element that should enter fullscreen mode.',
		},
		{
			name: 'toggle',
			type: '() => Promise<void>',
			description_es: 'Alterna entre modo pantalla completa y normal.',
			description_en: 'Toggles between fullscreen and normal mode.',
		},
		{
			name: 'fullscreen',
			type: 'boolean',
			description_es:
				'`true` cuando el elemento está en modo pantalla completa.',
			description_en: '`true` when the element is in fullscreen mode.',
		},
	],
};

export default function UseFullscreenPage() {
	return <HookDoc config={config} />;
}
