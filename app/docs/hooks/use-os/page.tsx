'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useOs',
	description_es:
		'Detecta el sistema operativo del usuario analizando el `userAgent` del navegador.',
	description_en:
		"Detects the user's operating system by parsing the browser `userAgent`.",
	usage: `import { useOs } from '@kivora/react';

function Demo() {
  const os = useOs();

  return <div>Your OS: {os}</div>;
}`,
	params: [],
	returns: [
		{
			name: 'os',
			type: "'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'",
			description_es: 'Sistema operativo detectado del usuario.',
			description_en: 'Detected operating system of the user.',
		},
	],
};

export default function UseOsPage() {
	return <HookDoc config={config} />;
}
