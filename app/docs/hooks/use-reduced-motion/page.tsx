'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useReducedMotion',
	description_es:
		'Detecta si el usuario prefiere movimiento reducido mediante la media query `prefers-reduced-motion`.',
	description_en:
		'Detects whether the user prefers reduced motion via the `prefers-reduced-motion` media query.',
	usage: `import { useReducedMotion } from '@kivora/react';

function Demo() {
  const reducedMotion = useReducedMotion();

  return (
    <div style={{ transition: reducedMotion ? 'none' : 'all 0.3s ease' }}>
      Animated content
    </div>
  );
}`,
	params: [
		{
			name: 'initialValue',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Valor inicial antes de que se evalúe la media query.',
			description_en:
				'Initial value before the media query is evaluated.',
		},
		{
			name: 'options.getInitialValueInEffect',
			type: 'boolean',
			defaultValue: 'true',
			description_es:
				'Si es `true`, el valor inicial se lee dentro de un efecto para evitar errores de hidratación.',
			description_en:
				'If `true`, the initial value is read inside an effect to avoid hydration mismatch.',
		},
	],
	returns: [
		{
			name: 'prefersReducedMotion',
			type: 'boolean',
			description_es:
				'`true` cuando el usuario prefiere movimiento reducido.',
			description_en: '`true` when the user prefers reduced motion.',
		},
	],
};

export default function UseReducedMotionPage() {
	return <HookDoc config={config} />;
}
