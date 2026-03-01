'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { UnstyledButton } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'UnstyledButton',
	category: 'buttons',
	status: 'stable',
	description_es:
		'Botón sin estilos visuales. Punto de partida para construir botones completamente personalizados manteniendo accesibilidad, foco y soporte polimórfico.',
	description_en:
		'Button with no visual styles. The starting point for building fully custom buttons while keeping accessibility, focus handling and polymorphic support.',
	controls: [
		{
			type: 'text',
			prop: 'children',
			label_es: 'Contenido',
			label_en: 'Content',
			defaultValue: 'Botón personalizado',
		},
		{
			type: 'boolean',
			prop: 'disabled',
			label_es: 'disabled',
			label_en: 'disabled',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const parts: string[] = ['onClick={() => {}}'];
		if (v.disabled) parts.push('disabled');
		return [
			`import { UnstyledButton } from '@kivora/react';`,
			'',
			`<UnstyledButton`,
			`  ${parts.join('\n  ')}`,
			`  className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/8"`,
			`>`,
			`  ${v.children}`,
			`</UnstyledButton>`,
		].join('\n');
	},
	props: [
		{
			name: 'component',
			type: 'React.ElementType',
			defaultValue: "'button'",
			description_es:
				'Elemento o componente renderizado internamente. Permite polimorfismo completo.',
			description_en:
				'Element or component rendered internally. Enables full polymorphism.',
		},
		{
			name: 'href',
			type: 'string',
			description_es: 'Si se pasa, se renderiza como <a>.',
			description_en: 'When provided, renders as an <a> element.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el botón.',
			description_en: 'Disables the button.',
		},
		{
			name: 'children',
			type: 'React.ReactNode',
			description_es: 'Contenido del botón.',
			description_en: 'Button content.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<UnstyledButton
			disabled={v.disabled as boolean}
			className='rounded-lg border border-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/8'>
			{v.children as string}
		</UnstyledButton>
	);
}

export default function UnstyledButtonPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
