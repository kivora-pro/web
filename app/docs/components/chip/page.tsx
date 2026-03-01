'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Chip } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Chip',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Elemento de selección tipo chip con soporte de checked controlado, variantes y grupos.',
	description_en:
		'Chip-style selection element with controlled checked support, variants and groups.',
	controls: [
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['filled', 'outline', 'light'],
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
			type: 'text',
			prop: 'children',
			label_es: 'Contenido',
			label_en: 'Content',
			defaultValue: 'React',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const parts: string[] = [];
		if (v.variant !== 'filled') parts.push(`variant="${v.variant}"`);
		if (v.size !== 'md') parts.push(`size="${v.size}"`);
		const propsStr = parts.length ? ' ' + parts.join(' ') : '';
		return [
			`import { Chip } from '@kivora/react';`,
			'',
			`<Chip${propsStr}>${v.children}</Chip>`,
		].join('\n');
	},
	props: [
		{
			name: 'checked',
			type: 'boolean',
			description_es: 'Estado de selección controlado.',
			description_en: 'Controlled checked state.',
		},
		{
			name: 'defaultChecked',
			type: 'boolean',
			description_es: 'Estado inicial no controlado.',
			description_en: 'Uncontrolled initial state.',
		},
		{
			name: 'onChange',
			type: '(checked: boolean) => void',
			description_es: 'Callback al cambiar el estado.',
			description_en: 'Callback on state change.',
		},
		{
			name: 'variant',
			type: "'filled' | 'outline' | 'light'",
			defaultValue: "'filled'",
			description_es: 'Variante visual.',
			description_en: 'Visual variant.',
		},
		{
			name: 'size',
			type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			defaultValue: "'md'",
			description_es: 'Tamaño del chip.',
			description_en: 'Chip size.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color del chip cuando está activo.',
			description_en: 'Chip color when active.',
		},
		{
			name: 'radius',
			type: 'string',
			description_es: 'Radio de borde.',
			description_en: 'Border radius.',
		},
		{
			name: 'icon',
			type: 'React.ReactNode',
			description_es: 'Icono personalizado al seleccionar.',
			description_en: 'Custom icon when selected.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el chip.',
			description_en: 'Disables the chip.',
		},
	],
};

export default function ChipPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<div className='flex flex-wrap gap-2'>
					{['React', 'Vue', 'Angular', 'Svelte'].map((fw) => (
						<Chip
							key={fw}
							variant={
								v.variant as 'filled' | 'outline' | 'light'
							}
							size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}>
							{fw}
						</Chip>
					))}
				</div>
			)}
		/>
	);
}
