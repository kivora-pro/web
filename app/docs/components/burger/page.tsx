'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Burger } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'Burger',
	category: 'buttons',
	status: 'stable',
	description_es:
		'Icono de menú hamburguesa animado. Al cambiar la prop opened las tres líneas se transforman en una X con transición CSS. Ideal para sidebars y menús móviles.',
	description_en:
		'Animated hamburger menu icon. When opened changes, the three lines transform into an X with a CSS transition. Ideal for sidebars and mobile menus.',
	controls: [
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['sm', 'md', 'lg'],
			defaultValue: 'md',
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
		const parts: string[] = [
			'opened={opened}',
			'onClick={() => setOpened(o => !o)}',
		];
		if (v.size !== 'md') parts.push(`size="${v.size}"`);
		if (v.disabled) parts.push('disabled');
		return [
			`import { useState } from 'react';`,
			`import { Burger } from '@kivora/react';`,
			'',
			`const [opened, setOpened] = useState(false);`,
			'',
			`<Burger`,
			`  ${parts.join('\n  ')}`,
			`/>`,
		].join('\n');
	},
	props: [
		{
			name: 'opened',
			type: 'boolean',
			required: true,
			description_es:
				'Estado actual del menú. Controla la animación hamburguesa → X.',
			description_en:
				'Current menu open state. Controls the hamburger → X animation.',
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			defaultValue: "'md'",
			description_es: 'Tamaño del icono en píxeles (18 / 24 / 32).',
			description_en: 'Icon size in pixels (18 / 24 / 32).',
		},
		{
			name: 'lineSize',
			type: 'number',
			description_es:
				'Grosor de cada línea en píxeles. Por defecto es size / 8.',
			description_en:
				'Thickness of each line in pixels. Defaults to size / 8.',
		},
		{
			name: 'aria-label',
			type: 'string',
			description_es:
				'Etiqueta accesible. Por defecto cambia según el estado.',
			description_en:
				'Accessible label. Defaults to a value based on the current state.',
		},
	],
};

function BurgerPreview(v: ControlValues) {
	const [opened, setOpened] = useState(false);
	return (
		<Burger
			opened={opened}
			size={v.size as never}
			disabled={v.disabled as boolean}
			onClick={() => setOpened((o) => !o)}
		/>
	);
}

export default function BurgerPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => <BurgerPreview {...v} />}
		/>
	);
}
