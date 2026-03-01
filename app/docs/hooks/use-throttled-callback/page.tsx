'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useThrottledCallback',
	description_es:
		'Devuelve una versión throttled de la función dada, garantizando que se invoque como máximo una vez por intervalo de tiempo.',
	description_en:
		'Returns a throttled version of the given function, ensuring it is called at most once per time interval.',
	usage: `import { useThrottledCallback } from '@kivora/react';

function ScrollTracker() {
  const handleScroll = useThrottledCallback(() => {
    console.log('scroll position:', window.scrollY);
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return null;
}`,
	params: [
		{
			name: 'fn',
			type: 'T extends (...args: any[]) => any',
			required: true,
			description_es: 'Función a ejecutar de forma throttled.',
			description_en: 'Function to execute in a throttled manner.',
		},
		{
			name: 'limit',
			type: 'number',
			required: true,
			description_es:
				'Intervalo mínimo en milisegundos entre invocaciones consecutivas.',
			description_en:
				'Minimum interval in milliseconds between consecutive invocations.',
		},
	],
	returns: [
		{
			name: '(throttled fn)',
			type: 'T',
			description_es:
				'La versión throttled de la función original. Descarta llamadas que ocurran dentro del intervalo.',
			description_en:
				'The throttled version of the original function. Drops calls that occur within the interval.',
		},
	],
};

export default function UseThrottledCallbackPage() {
	return <HookDoc config={config} />;
}
