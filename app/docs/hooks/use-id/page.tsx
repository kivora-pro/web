'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useId',
	description_es:
		'Genera un ID único y estable para el componente usando React.useId() internamente. Puedes sobreescribirlo con staticId.',
	description_en:
		'Generates a stable unique ID for the component using React.useId() internally. Can be overridden with staticId.',
	usage: `import { useId } from '@kivora/react';

function Demo() {
  const id = useId();
  const staticId = useId('my-static-id');

  return (
    <div>
      <label htmlFor={id}>Dynamic ID label</label>
      <input id={id} />

      <label htmlFor={staticId}>Static ID label</label>
      <input id={staticId} />
    </div>
  );
}`,
	params: [
		{
			name: 'staticId',
			type: 'string',
			required: false,
			description_es:
				'ID estático que reemplaza al ID generado automáticamente cuando se proporciona.',
			description_en:
				'Static ID that overrides the auto-generated ID when provided.',
		},
	],
	returns: [
		{
			name: 'id',
			type: 'string',
			description_es:
				'ID único y estable listo para usar en atributos HTML como id o htmlFor.',
			description_en:
				'Stable unique ID ready to use in HTML attributes like id or htmlFor.',
		},
	],
};

export default function UseIdPage() {
	return <HookDoc config={config} />;
}
