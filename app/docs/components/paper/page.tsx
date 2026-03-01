'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Paper } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Paper',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Superficie elevada con sombra, borde y radio configurables. Base para cards y paneles.',
	description_en:
		'Elevated surface with configurable shadow, border and radius. Base for cards and panels.',
	controls: [
		{
			type: 'select',
			prop: 'shadow',
			label_es: 'Sombra',
			label_en: 'Shadow',
			options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'sm',
		},
		{
			type: 'select',
			prop: 'radius',
			label_es: 'Radio',
			label_en: 'Radius',
			options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
		{
			type: 'boolean',
			prop: 'withBorder',
			label_es: 'withBorder',
			label_en: 'withBorder',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const parts: string[] = [];
		if (v.shadow !== 'sm') parts.push(`shadow="${v.shadow}"`);
		if (v.radius !== 'md') parts.push(`radius="${v.radius}"`);
		if (v.withBorder) parts.push('withBorder');
		const propsStr = parts.length ? ' ' + parts.join(' ') : '';
		return [
			`import { Paper } from '@kivora/react';`,
			'',
			`<Paper${propsStr} p="md">`,
			`  Content`,
			`</Paper>`,
		].join('\n');
	},
	props: [
		{
			name: 'shadow',
			type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			defaultValue: "'sm'",
			description_es: 'Nivel de sombra.',
			description_en: 'Shadow level.',
		},
		{
			name: 'radius',
			type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			defaultValue: "'sm'",
			description_es: 'Radio de borde.',
			description_en: 'Border radius.',
		},
		{
			name: 'withBorder',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra un borde alrededor del paper.',
			description_en: 'Shows a border around the paper.',
		},
		{
			name: 'p',
			type: 'number | string',
			description_es: 'Padding interior.',
			description_en: 'Inner padding.',
		},
		{
			name: 'component',
			type: 'React.ElementType',
			defaultValue: "'div'",
			description_es: 'Elemento HTML o componente.',
			description_en: 'HTML element or component.',
		},
	],
};

export default function PaperPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<Paper
					shadow={v.shadow as 'sm' | 'md' | 'lg'}
					radius={v.radius as 'sm' | 'md' | 'lg'}
					withBorder={v.withBorder as boolean}
					p='md'
					className='w-full'>
					<p className='text-sm text-on-surface'>
						Paper surface content
					</p>
				</Paper>
			)}
		/>
	);
}
