'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useTimeout',
	description_es:
		'Gestiona un timeout, devolviendo controles para iniciarlo con argumentos arbitrarios y cancelarlo antes de que se dispare.',
	description_en:
		'Manages a timeout, returning controls to start it with arbitrary arguments and clear it before it fires.',
	usage: `import { useTimeout } from '@kivora/react';

function Toast({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);

  const timeout = useTimeout(() => setVisible(false), 3000);

  useEffect(() => {
    timeout.start();
    return timeout.clear;
  }, []);

  if (!visible) return null;
  return <div>{message}</div>;
}`,
	params: [
		{
			name: 'fn',
			type: '(...args: unknown[]) => void',
			required: true,
			description_es: 'Función a ejecutar cuando finalice el delay.',
			description_en: 'Function to execute when the delay expires.',
		},
		{
			name: 'delay',
			type: 'number',
			required: true,
			description_es:
				'Tiempo de espera en milisegundos antes de invocar la función.',
			description_en:
				'Wait time in milliseconds before invoking the function.',
		},
	],
	returns: [
		{
			name: 'start',
			type: '(...args: unknown[]) => void',
			description_es:
				'Programa la ejecución de fn tras el delay. Acepta argumentos que se pasarán a fn.',
			description_en:
				'Schedules fn to execute after the delay. Accepts arguments forwarded to fn.',
		},
		{
			name: 'clear',
			type: '() => void',
			description_es: 'Cancela el timeout antes de que se dispare.',
			description_en: 'Cancels the timeout before it fires.',
		},
	],
};

export default function UseTimeoutPage() {
	return <HookDoc config={config} />;
}
