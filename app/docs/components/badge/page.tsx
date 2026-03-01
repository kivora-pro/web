'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Badge } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Badge',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Etiqueta compacta para mostrar estados, categorías o contadores. Soporta cinco variantes visuales, múltiples tamaños, secciones izquierda/derecha y modo circular.',
	description_en:
		'Compact label for displaying statuses, categories or counters. Supports five visual variants, multiple sizes, left/right sections and circle mode.',
	controls: [
		{
			type: 'text',
			prop: 'children',
			label_es: 'Texto',
			label_en: 'Text',
			defaultValue: 'Nuevo',
		},
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['filled', 'light', 'outline', 'dot', 'transparent'],
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
			type: 'boolean',
			prop: 'circle',
			label_es: 'Circular',
			label_en: 'Circle',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'fullWidth',
			label_es: 'Ancho completo',
			label_en: 'Full width',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Badge
  variant="${v.variant}"
  size="${v.size}"${v.circle ? '\n  circle' : ''}${v.fullWidth ? '\n  fullWidth' : ''}
>
  ${v.children}
</Badge>`,
	props: [
		{
			name: 'variant',
			type: '"filled" | "light" | "outline" | "dot" | "transparent"',
			defaultValue: '"filled"',
			description_es: 'Estilo visual del badge.',
			description_en: 'Visual style of the badge.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del badge.',
			description_en: 'Badge size.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color personalizado del badge.',
			description_en: 'Custom badge color.',
		},
		{
			name: 'radius',
			type: 'string',
			defaultValue: '"2rem"',
			description_es: 'Radio de borde CSS.',
			description_en: 'CSS border radius.',
		},
		{
			name: 'circle',
			type: 'boolean',
			description_es: 'Convierte el badge en un círculo.',
			description_en: 'Turns the badge into a circle.',
		},
		{
			name: 'fullWidth',
			type: 'boolean',
			description_es: 'Hace que el badge ocupe todo el ancho disponible.',
			description_en: 'Makes the badge take full available width.',
		},
		{
			name: 'leftSection',
			type: 'ReactNode',
			description_es: 'Elemento a la izquierda del texto.',
			description_en: 'Element to the left of the text.',
		},
		{
			name: 'rightSection',
			type: 'ReactNode',
			description_es: 'Elemento a la derecha del texto.',
			description_en: 'Element to the right of the text.',
		},
		{
			name: 'component',
			type: 'React.ElementType',
			description_es: 'Componente raíz para renderizar (ej: "a", Link).',
			description_en: 'Root component to render (e.g. "a", Link).',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Badge
			variant={
				v.variant as
					| 'filled'
					| 'light'
					| 'outline'
					| 'dot'
					| 'transparent'
			}
			size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			circle={v.circle as boolean}
			fullWidth={v.fullWidth as boolean}>
			{v.children as string}
		</Badge>
	);
}

export default function BadgePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
