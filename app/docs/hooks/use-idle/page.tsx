'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useIdle',
	description_es:
		'Detecta si el usuario ha estado inactivo durante un período de tiempo determinado, escuchando eventos del DOM.',
	description_en:
		'Detects whether the user has been idle for a given period of time by listening to DOM events.',
	usage: `import { useIdle } from '@kivora/react';

function Demo() {
  const idle = useIdle(3000);

  return <div>User is {idle ? 'idle' : 'active'}</div>;
}`,
	params: [
		{
			name: 'timeout',
			type: 'number',
			required: true,
			description_es:
				'Milisegundos de inactividad antes de que el estado cambie a inactivo.',
			description_en:
				'Milliseconds of inactivity before switching to idle state.',
		},
		{
			name: 'options.events',
			type: 'string[]',
			defaultValue:
				"['keypress','mousemove','touchmove','click','scroll']",
			description_es:
				'Lista de eventos del DOM que reinician el temporizador de inactividad.',
			description_en: 'List of DOM events that reset the idle timer.',
		},
		{
			name: 'options.initialState',
			type: 'boolean',
			defaultValue: 'true',
			description_es:
				'Estado inicial del hook antes del primer evento del usuario.',
			description_en:
				'Initial state of the hook before the first user event.',
		},
	],
	returns: [
		{
			name: 'idle',
			type: 'boolean',
			description_es: '`true` cuando el usuario está inactivo.',
			description_en: '`true` when the user is idle.',
		},
	],
};

export default function UseIdlePage() {
	return <HookDoc config={config} />;
}
