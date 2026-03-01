'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Image } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Image',
	category: 'miscellaneous',
	status: 'stable',
	description_es:
		'Componente de imagen con soporte para radio de borde, ajuste de fit, dimensiones y fallback en caso de error de carga.',
	description_en:
		'Image component with border radius support, fit adjustment, dimensions and fallback on load error.',
	controls: [
		{
			type: 'select',
			prop: 'fit',
			label_es: 'Object fit',
			label_en: 'Object fit',
			options: ['cover', 'contain', 'fill', 'none'],
			defaultValue: 'cover',
		},
		{
			type: 'select',
			prop: 'radius',
			label_es: 'Radio',
			label_en: 'Radius',
			options: ['0', 'xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: '0',
		},
		{
			type: 'select',
			prop: 'h',
			label_es: 'Alto (px)',
			label_en: 'Height (px)',
			options: ['80', '120', '160', '200', '240'],
			defaultValue: '160',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [
			`src="https://picsum.photos/seed/kivora/400/200"`,
			`alt="Demo de imagen"`,
			`h={${v.h}}`,
		];
		if (v.fit !== 'cover') props.push(`fit="${v.fit}"`);
		if (v.radius !== '0') props.push(`radius="${v.radius}"`);
		return `import { Image } from '@kivora/react';\n\n<Image\n  ${props.join('\n  ')}\n/>`;
	},
	props: [
		{
			name: 'src',
			type: 'string',
			description_es: 'URL de la imagen.',
			description_en: 'Image URL.',
		},
		{
			name: 'alt',
			type: 'string',
			description_es: 'Texto alternativo de la imagen.',
			description_en: 'Image alt text.',
		},
		{
			name: 'h',
			type: 'string | number',
			description_es: 'Alto de la imagen.',
			description_en: 'Image height.',
		},
		{
			name: 'w',
			type: 'string | number',
			description_es: 'Ancho de la imagen.',
			description_en: 'Image width.',
		},
		{
			name: 'radius',
			type: 'string | number',
			description_es: 'Radio de borde de la imagen.',
			description_en: 'Image border radius.',
		},
		{
			name: 'fit',
			type: '"cover" | "contain" | "fill" | "none"',
			defaultValue: '"cover"',
			description_es: 'Propiedad object-fit de la imagen.',
			description_en: 'Image object-fit property.',
		},
		{
			name: 'fallbackSrc',
			type: 'string',
			description_es: 'URL alternativa si la imagen falla al cargar.',
			description_en: 'Fallback URL if the image fails to load.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Image
			src='https://picsum.photos/seed/kivora/400/200'
			alt='Demo de imagen'
			h={Number(v.h)}
			w='100%'
			fit={v.fit as 'cover' | 'contain' | 'fill' | 'none'}
			radius={v.radius as string}
			style={{ maxWidth: 400 }}
		/>
	);
}

export default function ImagePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
