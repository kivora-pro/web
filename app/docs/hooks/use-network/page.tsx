'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useNetwork',
	description_es:
		'Retorna información reactiva sobre el estado de la conexión de red usando la Network Information API.',
	description_en:
		'Returns reactive information about the network connection state using the Network Information API.',
	usage: `import { useNetwork } from '@kivora/react';

function Demo() {
  const { online, effectiveType, downlink, saveData, rtt } = useNetwork();

  return (
    <div>
      <p>Online: {String(online)}</p>
      <p>Type: {effectiveType}</p>
      <p>Downlink: {downlink} Mbps</p>
    </div>
  );
}`,
	params: [],
	returns: [
		{
			name: 'online',
			type: 'boolean',
			description_es: '`true` si el navegador tiene conexión a la red.',
			description_en: '`true` if the browser has a network connection.',
		},
		{
			name: 'effectiveType',
			type: 'string',
			description_es:
				'Tipo de conexión efectiva: `"slow-2g"`, `"2g"`, `"3g"` o `"4g"`.',
			description_en:
				'Effective connection type: `"slow-2g"`, `"2g"`, `"3g"`, or `"4g"`.',
		},
		{
			name: 'downlink',
			type: 'number',
			description_es: 'Ancho de banda estimado de bajada en Mbps.',
			description_en: 'Estimated downlink bandwidth in Mbps.',
		},
		{
			name: 'saveData',
			type: 'boolean',
			description_es:
				'`true` si el usuario ha activado el modo de ahorro de datos.',
			description_en:
				'`true` if the user has enabled the data-saving mode.',
		},
		{
			name: 'rtt',
			type: 'number',
			description_es:
				'Tiempo de ida y vuelta estimado de la conexión en milisegundos.',
			description_en:
				'Estimated round-trip time of the connection in milliseconds.',
		},
	],
};

export default function UseNetworkPage() {
	return <HookDoc config={config} />;
}
