'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useHeadroom',
	description_es:
		'Devuelve true cuando el encabezado debe ser visible (usuario scrolleando hacia arriba o cerca del tope).',
	description_en:
		'Returns true when the header should be visible (user scrolling up or near the top).',
	usage: `import { useHeadroom } from '@kivora/react';

function Demo() {
  const pinned = useHeadroom({ fixedAt: 120 });
  return (
    <header style={{ position: 'fixed', top: 0, transform: pinned ? 'translateY(0)' : 'translateY(-100%)' }}>
      Header
    </header>
  );
}`,
	params: [
		{
			name: 'options.fixedAt',
			type: 'number',
			defaultValue: '0',
			description_es:
				'Distancia de scroll (en px) a partir de la cual el header siempre permanece visible.',
			description_en:
				'Scroll distance (in px) at which to always pin the header.',
		},
	],
	returns: [
		{
			name: 'pinned',
			type: 'boolean',
			description_es:
				'true cuando el header debe mostrarse (scroll hacia arriba o cerca del tope).',
			description_en:
				'true when the header should be shown (scrolling up or near the top).',
		},
	],
};

export default function UseHeadroomPage() {
	return <HookDoc config={config} />;
}
