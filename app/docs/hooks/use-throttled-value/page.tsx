'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useThrottledValue',
	description_es:
		'Retorna la versión throttled del valor de entrada; solo se propaga una vez por intervalo aunque el valor cambie más seguido.',
	description_en:
		'Returns the throttled version of the input value; it only propagates once per interval even if the value changes more frequently.',
	usage: `import { useThrottledValue } from '@kivora/react';

function LivePrice({ price }: { price: number }) {
  const throttledPrice = useThrottledValue(price, 500);

  return <span>Price: {throttledPrice}</span>;
}`,
	params: [
		{
			name: 'value',
			type: 'T',
			required: true,
			description_es: 'El valor al que se le aplicará el throttle.',
			description_en: 'The value to throttle.',
		},
		{
			name: 'limit',
			type: 'number',
			required: true,
			description_es:
				'Intervalo mínimo en milisegundos entre propagaciones del valor.',
			description_en:
				'Minimum interval in milliseconds between value propagations.',
		},
	],
	returns: [
		{
			name: 'throttledValue',
			type: 'T',
			description_es: 'La versión throttled del valor de entrada.',
			description_en: 'The throttled version of the input value.',
		},
	],
};

export default function UseThrottledValuePage() {
	return <HookDoc config={config} />;
}
