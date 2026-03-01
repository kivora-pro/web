'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Divider } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Divider',
	category: 'miscellaneous',
	status: 'stable',
	description_es:
		'Separador horizontal o vertical con soporte para etiqueta, variantes de estilo (sólido, discontinuo, punteado) y posición de etiqueta.',
	description_en:
		'Horizontal or vertical separator with label support, style variants (solid, dashed, dotted) and label position.',
	controls: [
		{
			type: 'select',
			prop: 'orientation',
			label_es: 'Orientación',
			label_en: 'Orientation',
			options: ['horizontal', 'vertical'],
			defaultValue: 'horizontal',
		},
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['solid', 'dashed', 'dotted'],
			defaultValue: 'solid',
		},
		{
			type: 'select',
			prop: 'size',
			label_es: 'Grosor',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'sm',
		},
		{
			type: 'text',
			prop: 'label',
			label_es: 'Etiqueta',
			label_en: 'Label',
			defaultValue: '',
		},
		{
			type: 'select',
			prop: 'labelPosition',
			label_es: 'Posición etiqueta',
			label_en: 'Label position',
			options: ['left', 'center', 'right'],
			defaultValue: 'center',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [];
		if (v.orientation !== 'horizontal')
			props.push(`orientation="${v.orientation}"`);
		if (v.variant !== 'solid') props.push(`variant="${v.variant}"`);
		if (v.size !== 'sm') props.push(`size="${v.size}"`);
		if (v.label) props.push(`label="${v.label}"`);
		if (v.labelPosition !== 'center')
			props.push(`labelPosition="${v.labelPosition}"`);
		const propsStr = props.length ? ' ' + props.join(' ') : '';
		return `import { Divider } from '@kivora/react';\n\n<Divider${propsStr} />`;
	},
	props: [
		{
			name: 'orientation',
			type: '"horizontal" | "vertical"',
			defaultValue: '"horizontal"',
			description_es: 'Orientación del separador.',
			description_en: 'Separator orientation.',
		},
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta centrada en el separador.',
			description_en: 'Label centered on the separator.',
		},
		{
			name: 'labelPosition',
			type: '"left" | "center" | "right"',
			defaultValue: '"center"',
			description_es: 'Posición de la etiqueta.',
			description_en: 'Label position.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"xs"',
			description_es: 'Grosor de la línea.',
			description_en: 'Line thickness.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color de la línea.',
			description_en: 'Line color.',
		},
		{
			name: 'variant',
			type: '"solid" | "dashed" | "dotted"',
			defaultValue: '"solid"',
			description_es: 'Estilo de la línea.',
			description_en: 'Line style.',
		},
		{
			name: 'my',
			type: 'string | number',
			description_es: 'Margen vertical (margin-block).',
			description_en: 'Vertical margin (margin-block).',
		},
		{
			name: 'mx',
			type: 'string | number',
			description_es: 'Margen horizontal (margin-inline).',
			description_en: 'Horizontal margin (margin-inline).',
		},
	],
};

function renderPreview(v: ControlValues) {
	if (v.orientation === 'vertical') {
		return (
			<div
				style={{
					display: 'flex',
					gap: '1rem',
					alignItems: 'stretch',
					height: 80,
				}}>
				<span>Izquierda</span>
				<Divider
					orientation='vertical'
					variant={v.variant as 'solid' | 'dashed' | 'dotted'}
					size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				/>
				<span>Derecha</span>
			</div>
		);
	}
	return (
		<div className='w-full max-w-xs'>
			<Divider
				variant={v.variant as 'solid' | 'dashed' | 'dotted'}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				label={v.label ? (v.label as string) : undefined}
				labelPosition={v.labelPosition as 'left' | 'center' | 'right'}
			/>
		</div>
	);
}

export default function DividerPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
