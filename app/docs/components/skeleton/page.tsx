'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Skeleton } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Skeleton',
	category: 'feedback',
	status: 'stable',
	description_es:
		'Placeholder animado que simula la forma del contenido mientras carga. Soporta formas rectangulares, circulares y puede envolver contenido real para mostrarlo cuando esté disponible.',
	description_en:
		'Animated placeholder that simulates the shape of content while it loads. Supports rectangular and circular shapes, and can wrap real content to reveal it when available.',
	controls: [
		{
			type: 'boolean',
			prop: 'animate',
			label_es: 'Animado',
			label_en: 'Animate',
			defaultValue: true,
		},
		{
			type: 'boolean',
			prop: 'circle',
			label_es: 'Circular',
			label_en: 'Circle',
			defaultValue: false,
		},
		{
			type: 'range',
			prop: 'radius',
			label_es: 'Radio (px)',
			label_en: 'Radius (px)',
			min: 0,
			max: 20,
			step: 2,
			defaultValue: 4,
		},
	],
	codeTemplate: (v: ControlValues) =>
		v.circle
			? `<Skeleton circle animate={${v.animate}} height={56} width={56} />`
			: `<Skeleton animate={${v.animate}} height={12} width="100%" radius={${v.radius}} />`,
	props: [
		{
			name: 'height',
			type: 'number | string',
			description_es: 'Alto del skeleton.',
			description_en: 'Skeleton height.',
		},
		{
			name: 'width',
			type: 'number | string',
			description_es: 'Ancho del skeleton.',
			description_en: 'Skeleton width.',
		},
		{
			name: 'circle',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Hace el skeleton completamente circular.',
			description_en: 'Makes the skeleton fully circular.',
		},
		{
			name: 'radius',
			type: 'number | string',
			description_es: 'Radio de borde. Se ignora cuando circle es true.',
			description_en: 'Border radius. Ignored when circle is true.',
		},
		{
			name: 'animate',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Activa o desactiva la animación de pulso.',
			description_en: 'Enables or disables the pulse animation.',
		},
		{
			name: 'visible',
			type: 'boolean',
			defaultValue: 'true',
			description_es:
				'Cuando es false y hay children, los renderiza en lugar del skeleton.',
			description_en:
				'When false and children exist, renders them instead of the skeleton.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			description_es:
				'Contenido real que se muestra cuando visible es false.',
			description_en: 'Real content shown when visible is false.',
		},
	],
};

function renderPreview(v: ControlValues) {
	const animate = v.animate as boolean;
	const circle = v.circle as boolean;
	const radius = v.radius as number;

	if (circle) {
		return (
			<div className='flex items-center gap-3'>
				<Skeleton
					circle
					animate={animate}
					height={56}
					width={56}
				/>
				<div className='flex flex-col gap-2'>
					<Skeleton
						animate={animate}
						height={12}
						width={120}
						radius={radius}
					/>
					<Skeleton
						animate={animate}
						height={10}
						width={80}
						radius={radius}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className='flex w-64 flex-col gap-2.5'>
			<Skeleton
				animate={animate}
				height={14}
				width='100%'
				radius={radius}
			/>
			<Skeleton
				animate={animate}
				height={10}
				width='80%'
				radius={radius}
			/>
			<Skeleton
				animate={animate}
				height={10}
				width='90%'
				radius={radius}
			/>
			<Skeleton
				animate={animate}
				height={10}
				width='60%'
				radius={radius}
			/>
		</div>
	);
}

export default function SkeletonPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
