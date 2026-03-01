'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { ColorSwatch } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'ColorSwatch',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Muestra una muestra de color como un cuadro o círculo. Útil para paletas de colores, selectores y previsualizaciones.',
	description_en:
		'Displays a color swatch as a square or circle. Useful for color palettes, selectors and previews.',
	controls: [
		{
			type: 'text',
			prop: 'color',
			label_es: 'Color',
			label_en: 'Color',
			defaultValue: '#1c7ed6',
		},
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['20', '28', '36', '44', '52'],
			defaultValue: '28',
		},
		{
			type: 'boolean',
			prop: 'withShadow',
			label_es: 'Con sombra',
			label_en: 'With shadow',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [`color="${v.color}"`];
		if (v.size !== '28') props.push(`size={${v.size}}`);
		if (v.withShadow) props.push('withShadow');
		return `import { ColorSwatch } from '@kivora/react';\n\n<ColorSwatch ${props.join(' ')} />`;
	},
	props: [
		{
			name: 'color',
			type: 'string',
			required: true,
			description_es: 'Valor CSS del color a mostrar.',
			description_en: 'CSS color value to display.',
		},
		{
			name: 'size',
			type: 'number | string',
			defaultValue: '28',
			description_es: 'Tamaño del swatch en píxeles.',
			description_en: 'Swatch size in pixels.',
		},
		{
			name: 'radius',
			type: 'string | number',
			description_es: 'Border radius del swatch.',
			description_en: 'Border radius of the swatch.',
		},
		{
			name: 'withShadow',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Añade sombra alrededor del swatch.',
			description_en: 'Adds shadow around the swatch.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<ColorSwatch
			color={v.color as string}
			size={Number(v.size)}
			withShadow={v.withShadow as boolean}
		/>
	);
}

export default function ColorSwatchPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
