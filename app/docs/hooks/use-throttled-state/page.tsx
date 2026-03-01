'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useThrottledState',
	description_es:
		'Similar a useState pero el setter aplica throttle, limitando la frecuencia de actualizaciones de estado.',
	description_en:
		'Similar to useState but the setter is throttled, limiting the frequency of state updates.',
	usage: `import { useThrottledState } from '@kivora/react';

function MouseTracker() {
  const [position, setPosition] = useThrottledState({ x: 0, y: 0 }, 100);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [setPosition]);

  return <p>X: {position.x} Y: {position.y}</p>;
}`,
	params: [
		{
			name: 'initialValue',
			type: 'T',
			required: true,
			description_es: 'Valor inicial del estado.',
			description_en: 'Initial state value.',
		},
		{
			name: 'limit',
			type: 'number',
			required: true,
			description_es:
				'Intervalo mínimo en milisegundos entre actualizaciones de estado consecutivas.',
			description_en:
				'Minimum interval in milliseconds between consecutive state updates.',
		},
	],
	returns: [
		{
			name: '[value, setValue]',
			type: '[T, React.Dispatch<React.SetStateAction<T>>]',
			description_es: 'El valor actual del estado y un setter throttled.',
			description_en: 'The current state value and a throttled setter.',
		},
	],
};

export default function UseThrottledStatePage() {
	return <HookDoc config={config} />;
}
