'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useEyeDropper',
	description_es:
		'Expone la EyeDropper API del navegador para muestrear colores de la pantalla.',
	description_en:
		'Exposes the browser EyeDropper API for sampling colors from the screen.',
	usage: `import { useEyeDropper } from '@kivora/react';

function Demo() {
  const { open, supported } = useEyeDropper();

  const pickColor = async () => {
    const result = await open();
    if (result) console.log(result.sRGBHex);
  };

  if (!supported) return <p>EyeDropper is not supported in this browser.</p>;

  return <button onClick={pickColor}>Pick color</button>;
}`,
	params: [],
	returns: [
		{
			name: 'open',
			type: '(options?: { signal?: AbortSignal }) => Promise<{ sRGBHex: string } | undefined>',
			description_es:
				'Abre el selector de color. Resuelve con el color seleccionado en formato `sRGBHex`, o `undefined` si se cancela.',
			description_en:
				'Opens the color picker. Resolves with the picked color as `sRGBHex`, or `undefined` if cancelled.',
		},
		{
			name: 'icon',
			type: 'string',
			description_es: 'Icono SVG del cuentagotas como cadena de texto.',
			description_en: 'SVG icon of the eyedropper as a string.',
		},
		{
			name: 'supported',
			type: 'boolean',
			description_es:
				'`true` si la EyeDropper API está disponible en el navegador actual.',
			description_en:
				'`true` if the EyeDropper API is available in the current browser.',
		},
	],
};

export default function UseEyeDropperPage() {
	return <HookDoc config={config} />;
}
