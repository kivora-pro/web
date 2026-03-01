'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { ThemeIcon } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'ThemeIcon',
	category: 'miscellaneous',
	status: 'stable',
	description_es:
		'Contenedor circular o cuadrado para iconos con variantes de color de fondo. Ideal para mostrar iconos con consistencia visual en listas y tarjetas.',
	description_en:
		'Circular or square container for icons with background color variants. Ideal for showing icons with visual consistency in lists and cards.',
	controls: [
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['filled', 'outline', 'light', 'subtle', 'transparent'],
			defaultValue: 'filled',
		},
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
		{
			type: 'select',
			prop: 'radius',
			label_es: 'Radio',
			label_en: 'Radius',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '50%'],
			defaultValue: 'md',
		},
		{
			type: 'select',
			prop: 'color',
			label_es: 'Color',
			label_en: 'Color',
			options: [
				'blue',
				'teal',
				'green',
				'red',
				'orange',
				'grape',
				'indigo',
			],
			defaultValue: 'blue',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [];
		if (v.variant !== 'filled') props.push(`variant="${v.variant}"`);
		if (v.size !== 'md') props.push(`size="${v.size}"`);
		if (v.radius !== 'md') props.push(`radius="${v.radius}"`);
		if (v.color !== 'blue') props.push(`color="${v.color}"`);
		const propsStr = props.length ? ' ' + props.join(' ') : '';
		return `import { ThemeIcon } from '@kivora/react';\nimport { IconStar } from '@tabler/icons-react';\n\n<ThemeIcon${propsStr}>\n  <IconStar />\n</ThemeIcon>`;
	},
	props: [
		{
			name: 'variant',
			type: '"filled" | "outline" | "light" | "subtle" | "transparent"',
			defaultValue: '"filled"',
			description_es: 'Variante visual del contenedor.',
			description_en: 'Visual variant of the container.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del contenedor.',
			description_en: 'Container size.',
		},
		{
			name: 'radius',
			type: 'string | number',
			defaultValue: '"md"',
			description_es: 'Radio de borde del contenedor.',
			description_en: 'Container border radius.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color del fondo/ícono según la variante.',
			description_en: 'Background/icon color depending on variant.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Ícono o contenido dentro del contenedor.',
			description_en: 'Icon or content inside the container.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<ThemeIcon
			variant={
				v.variant as
					| 'filled'
					| 'outline'
					| 'light'
					| 'subtle'
					| 'transparent'
			}
			size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			radius={v.radius as string}
			color={v.color as string}>
			<svg
				width='60%'
				height='60%'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'>
				<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
			</svg>
		</ThemeIcon>
	);
}

export default function ThemeIconPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
