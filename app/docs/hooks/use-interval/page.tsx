'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useInterval',
	description_es:
		'Gestiona un intervalo de tiempo, permitiendo ejecutar una función periódicamente con controles para iniciarlo, detenerlo o alternarlo.',
	description_en:
		'Manages a time interval, allowing a function to run periodically with controls to start, stop, or toggle it.',
	usage: `import { useInterval } from '@kivora/react';

function Timer() {
  const [count, setCount] = useState(0);

  const interval = useInterval(() => setCount((c) => c + 1), 1000, {
    autoInvoke: true,
  });

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={interval.toggle}>
        {interval.active ? 'Pause' : 'Resume'}
      </button>
      <button onClick={interval.stop}>Reset</button>
    </>
  );
}`,
	params: [
		{
			name: 'fn',
			type: '() => void',
			required: true,
			description_es: 'Función a ejecutar en cada tick del intervalo.',
			description_en: 'Function to execute on each interval tick.',
		},
		{
			name: 'interval',
			type: 'number',
			required: true,
			description_es: 'Duración en milisegundos entre cada ejecución.',
			description_en: 'Duration in milliseconds between each execution.',
		},
		{
			name: 'options.autoInvoke',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Si es true, el intervalo arranca automáticamente al montar el componente.',
			description_en:
				'If true, the interval starts automatically when the component mounts.',
		},
	],
	returns: [
		{
			name: 'start',
			type: '() => void',
			description_es: 'Inicia el intervalo.',
			description_en: 'Starts the interval.',
		},
		{
			name: 'stop',
			type: '() => void',
			description_es: 'Detiene el intervalo.',
			description_en: 'Stops the interval.',
		},
		{
			name: 'toggle',
			type: '() => void',
			description_es: 'Alterna entre iniciar y detener el intervalo.',
			description_en: 'Toggles the interval between started and stopped.',
		},
		{
			name: 'active',
			type: 'boolean',
			description_es:
				'Indica si el intervalo está activo en este momento.',
			description_en:
				'Indicates whether the interval is currently active.',
		},
	],
};

export default function UseIntervalPage() {
	return <HookDoc config={config} />;
}
