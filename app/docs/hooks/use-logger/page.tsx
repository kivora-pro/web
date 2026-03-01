'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useLogger',
	description_es:
		'Registra en consola los eventos de montaje, desmontaje y actualización del componente durante el desarrollo.',
	description_en:
		'Logs component mount, unmount and update events to the console during development.',
	usage: `import { useLogger } from '@kivora/react';

function Demo({ count, name }: { count: number; name: string }) {
  useLogger('Demo', { count, name });

  return <div>{name}: {count}</div>;
}`,
	params: [
		{
			name: 'componentName',
			type: 'string',
			required: true,
			description_es:
				'Nombre del componente que se mostrará en los mensajes de consola.',
			description_en: 'Name of the component shown in console messages.',
		},
		{
			name: 'props',
			type: 'Record<string, unknown>',
			required: true,
			description_es:
				'Props del componente registradas en cada actualización.',
			description_en: 'Component props logged on every update.',
		},
	],
	returns: [],
};

export default function UseLoggerPage() {
	return <HookDoc config={config} />;
}
