'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Text } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Text',
	category: 'typography',
	status: 'stable',
	description_es:
		'Componente tipográfico polimórfico para cuerpo de texto. Renderiza un párrafo por defecto y se puede convertir en cualquier elemento HTML. Soporta tamaño, peso, color, truncado y clamp de líneas.',
	description_en:
		'Polymorphic typographic component for body text. Renders a paragraph by default and can be converted to any HTML element. Supports size, weight, color, truncation and line clamping.',
	controls: [
		{
			type: 'text',
			prop: 'children',
			label_es: 'Contenido',
			label_en: 'Content',
			defaultValue:
				'Kivora es una librería de componentes React de código abierto diseñada para construir interfaces modernas.',
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
			prop: 'fw',
			label_es: 'Peso',
			label_en: 'Weight',
			options: ['400', '500', '600', '700'],
			defaultValue: '400',
		},
		{
			type: 'boolean',
			prop: 'truncate',
			label_es: 'Truncar',
			label_en: 'Truncate',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Text
  size="${v.size}"
  fw={${v.fw}}${v.truncate ? '\n  truncate' : ''}
>
  ${v.children}
</Text>`,
	props: [
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño de la fuente.',
			description_en: 'Font size.',
		},
		{
			name: 'fw',
			type: '100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900',
			description_es: 'Peso de la fuente.',
			description_en: 'Font weight.',
		},
		{
			name: 'c',
			type: 'string',
			description_es: 'Color CSS del texto.',
			description_en: 'CSS color of the text.',
		},
		{
			name: 'truncate',
			type: 'boolean | "start" | "end"',
			description_es: 'Trunca el texto con puntos suspensivos.',
			description_en: 'Truncates text with ellipsis.',
		},
		{
			name: 'lineClamp',
			type: 'number',
			description_es: 'Limita el texto a N líneas con overflow oculto.',
			description_en: 'Limits text to N lines with hidden overflow.',
		},
		{
			name: 'inline',
			type: 'boolean',
			description_es: 'Aplica display inline en lugar de block.',
			description_en: 'Applies inline display instead of block.',
		},
		{
			name: 'span',
			type: 'boolean',
			description_es: 'Renderiza un span en lugar de un párrafo.',
			description_en: 'Renders a span instead of a paragraph.',
		},
		{
			name: 'inherit',
			type: 'boolean',
			description_es: 'Hereda los estilos tipográficos del padre.',
			description_en: 'Inherits typographic styles from the parent.',
		},
		{
			name: 'component',
			type: 'React.ElementType',
			description_es: 'Elemento raíz a renderizar.',
			description_en: 'Root element to render.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='max-w-sm'>
			<Text
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				fw={Number(v.fw) as 400 | 500 | 600 | 700}
				truncate={v.truncate as boolean}>
				{v.children as string}
			</Text>
		</div>
	);
}

export default function TextPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
