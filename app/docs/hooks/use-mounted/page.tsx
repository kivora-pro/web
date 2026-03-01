'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useMounted',
	description_es:
		'Devuelve true una vez que el componente se ha montado en el cliente. Útil para evitar errores de hidratación al renderizar contenido exclusivo del cliente.',
	description_en:
		'Returns true after the component has mounted on the client. Useful for avoiding hydration errors when rendering client-only content.',
	usage: `import { useMounted } from '@kivora/react';

function Demo() {
  const mounted = useMounted();

  if (!mounted) return null; // avoid SSR mismatch

  return <div>Client-only content: {window.innerWidth}px</div>;
}`,
	params: [],
	returns: [
		{
			name: 'mounted',
			type: 'boolean',
			description_es:
				'false durante SSR e hidratación; true después del primer montaje en el cliente.',
			description_en:
				'false during SSR and hydration; true after the first client-side mount.',
		},
	],
};

export default function UseMountedPage() {
	return <HookDoc config={config} />;
}
