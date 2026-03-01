'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useFocusTrap',
	description_es:
		'Adjunta un ref a un contenedor para atrapar la navegación con Tab dentro de él mientras está activo.',
	description_en:
		'Attaches a ref to a container to trap Tab navigation inside it while active.',
	usage: `import { useFocusTrap } from '@kivora/react';

function Demo() {
  const trapRef = useFocusTrap();
  return (
    <div ref={trapRef}>
      <input placeholder="First" />
      <input placeholder="Second" />
      <button>Submit</button>
    </div>
  );
}`,
	params: [
		{
			name: 'active',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Si es false, el trap de foco se desactiva.',
			description_en: 'If false, the focus trap is disabled.',
		},
	],
	returns: [
		{
			name: 'ref',
			type: 'React.RefObject<HTMLElement | null>',
			description_es:
				'Ref que se adjunta al contenedor donde se atrapa el foco.',
			description_en:
				'Ref to attach to the container where focus is trapped.',
		},
	],
};

export default function UseFocusTrapPage() {
	return <HookDoc config={config} />;
}
