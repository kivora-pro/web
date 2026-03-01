'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Avatar, AvatarGroup } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Avatar',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Imagen de perfil circular con fallback a iniciales o icono. Soporta cuatro variantes visuales, tamaños predefinidos o numéricos y permite agrupar varios avatares superpuestos con AvatarGroup.',
	description_en:
		'Circular profile image with fallback to initials or icon. Supports four visual variants, predefined or numeric sizes and allows stacking multiple avatars with AvatarGroup.',
	controls: [
		{
			type: 'text',
			prop: 'alt',
			label_es: 'Iniciales / Alt',
			label_en: 'Initials / Alt',
			defaultValue: 'Juan García',
		},
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['filled', 'light', 'outline', 'transparent'],
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
	],
	codeTemplate: (v: ControlValues) =>
		`<Avatar
  alt="${v.alt}"
  variant="${v.variant}"
  size="${v.size}"
/>`,
	props: [
		{
			name: 'src',
			type: 'string | null',
			description_es: 'URL de la imagen. Si es null muestra el fallback.',
			description_en: 'Image URL. If null shows the fallback.',
		},
		{
			name: 'alt',
			type: 'string',
			description_es:
				'Texto alternativo; la primera letra se usa como inicial.',
			description_en: 'Alt text; the first letter is used as initial.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl" | number',
			defaultValue: '"md"',
			description_es: 'Tamaño del avatar.',
			description_en: 'Avatar size.',
		},
		{
			name: 'radius',
			type: 'string | number',
			defaultValue: '"50%"',
			description_es: 'Radio de borde CSS.',
			description_en: 'CSS border radius.',
		},
		{
			name: 'variant',
			type: '"filled" | "light" | "outline" | "transparent"',
			defaultValue: '"filled"',
			description_es: 'Estilo visual del fallback.',
			description_en: 'Visual style of the fallback.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color personalizado del fondo fallback.',
			description_en: 'Custom fallback background color.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			description_es: 'Contenido manual del fallback (icono, texto).',
			description_en: 'Manual fallback content (icon, text).',
		},
		{
			name: 'component',
			type: 'React.ElementType',
			description_es: 'Componente raíz a renderizar.',
			description_en: 'Root component to render.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='flex flex-col gap-4 items-center'>
			<Avatar
				alt={v.alt as string}
				variant={
					v.variant as 'filled' | 'light' | 'outline' | 'transparent'
				}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			/>
			<AvatarGroup>
				<Avatar alt='Ana' />
				<Avatar alt='Luis' />
				<Avatar alt='María' />
				<Avatar alt='+5' />
			</AvatarGroup>
		</div>
	);
}

export default function AvatarPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
