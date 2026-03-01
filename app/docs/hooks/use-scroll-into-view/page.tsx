'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useScrollIntoView',
	description_es:
		'Desplaza un elemento a la vista de forma animada con control total del comportamiento.',
	description_en:
		'Scrolls an element into view with animation and full behavior control.',
	usage: `import { useScrollIntoView } from '@kivora/react';

function Demo() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  return (
    <>
      <button onClick={() => scrollIntoView()}>Scroll to element</button>
      <div ref={targetRef}>Target</div>
    </>
  );
}`,
	params: [
		{
			name: 'options.offset',
			type: 'number',
			defaultValue: '0',
			description_es:
				'Desplazamiento en píxeles desde el borde del elemento al hacer scroll.',
			description_en:
				'Pixel offset from the element edge when scrolling.',
		},
		{
			name: 'options.isList',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Activa el comportamiento optimizado para listas.',
			description_en: 'Enables optimized behavior for lists.',
		},
		{
			name: 'options.duration',
			type: 'number',
			defaultValue: '1250',
			description_es:
				'Duración de la animación de scroll en milisegundos.',
			description_en: 'Scroll animation duration in milliseconds.',
		},
		{
			name: 'options.easing',
			type: '(t: number) => number',
			defaultValue: 'easeInOutQuad',
			description_es: 'Función de easing para la animación.',
			description_en: 'Easing function for the animation.',
		},
		{
			name: 'options.cancelable',
			type: 'boolean',
			defaultValue: 'true',
			description_es:
				'Permite cancelar el scroll al interactuar con el usuario.',
			description_en: 'Allows canceling scroll on user interaction.',
		},
		{
			name: 'options.onScrollFinish',
			type: '() => void',
			defaultValue: 'undefined',
			description_es:
				'Callback ejecutado al finalizar la animación de scroll.',
			description_en:
				'Callback called when the scroll animation finishes.',
		},
		{
			name: 'options.axis',
			type: "'x' | 'y'",
			defaultValue: "'y'",
			description_es:
				"Eje de scroll: 'x' para horizontal, 'y' para vertical.",
			description_en:
				"Scroll axis: 'x' for horizontal, 'y' for vertical.",
		},
	],
	returns: [
		{
			name: 'scrollIntoView',
			type: '(opts?: { alignment?: Alignment }) => void',
			description_es:
				'Función que inicia el scroll animado hasta el elemento objetivo.',
			description_en:
				'Function that starts the animated scroll to the target element.',
		},
		{
			name: 'cancel',
			type: '() => void',
			description_es: 'Cancela el scroll animado en curso.',
			description_en: 'Cancels the ongoing animated scroll.',
		},
		{
			name: 'targetRef',
			type: 'React.RefObject<T | null>',
			description_es:
				'Ref que se adjunta al elemento destino del scroll.',
			description_en: 'Ref to attach to the scroll target element.',
		},
		{
			name: 'scrollableRef',
			type: 'React.RefObject<HTMLElement | null>',
			description_es:
				'Ref opcional para el contenedor desplazable; si no se asigna, se usa window.',
			description_en:
				'Optional ref for the scrollable container; defaults to window if not assigned.',
		},
	],
};

export default function UseScrollIntoViewPage() {
	return <HookDoc config={config} />;
}
