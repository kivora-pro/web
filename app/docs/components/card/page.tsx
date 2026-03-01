'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Badge, Card, CardSection } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Card',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Contenedor de contenido con animación de entrada, sombra configurable y radio de borde. Admite secciones que pueden sangrar hasta el borde del card (CardSection) y polimorfismo mediante la prop component.',
	description_en:
		'Content container with entry animation, configurable shadow and border radius. Supports sections that can bleed to the card edge (CardSection) and polymorphism via the component prop.',
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
			label_es: 'Radio de borde',
			label_en: 'Border radius',
			options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
		{
			type: 'boolean',
			prop: 'withBorder',
			label_es: 'Con borde',
			label_en: 'With border',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Card
  shadow="${v.shadow}"
  radius="${v.radius}"${v.withBorder ? '\n  withBorder' : ''}
>
  <CardSection withBorder>
    <img src="/placeholder.jpg" alt="portada" className="w-full h-40 object-cover" />
  </CardSection>
  <div className="mt-3">
    <div className="flex justify-between items-center">
      <p className="font-semibold">Kivora UI</p>
      <Badge variant="light">Stable</Badge>
    </div>
    <p className="text-sm text-on-surface/60 mt-1">
      Librería de componentes React para construir interfaces modernas.
    </p>
  </div>
</Card>`,
	props: [
		{
			name: 'shadow',
			type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"sm"',
			description_es: 'Nivel de sombra del card.',
			description_en: 'Shadow level of the card.',
		},
		{
			name: 'radius',
			type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Radio de las esquinas.',
			description_en: 'Corner radius.',
		},
		{
			name: 'withBorder',
			type: 'boolean',
			description_es: 'Añade borde exterior al card.',
			description_en: 'Adds outer border to the card.',
		},
		{
			name: 'padding',
			type: 'number | string',
			defaultValue: '"1rem"',
			description_es: 'Relleno interno del card.',
			description_en: 'Inner padding of the card.',
		},
		{
			name: 'component',
			type: 'React.ElementType',
			description_es:
				'Componente raíz (p.ej. "a" para hacer el card un enlace).',
			description_en:
				'Root component (e.g. "a" to make the card a link).',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-64'>
			<Card
				shadow={v.shadow as 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				radius={v.radius as 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				withBorder={v.withBorder as boolean}
				padding={0}>
				<CardSection>
					<div className='w-full h-32 bg-linear-to-br from-brand/30 to-brand/60' />
				</CardSection>
				<div className='p-4'>
					<div className='flex justify-between items-center'>
						<p className='font-semibold text-sm'>Kivora UI</p>
						<Badge
							variant='light'
							size='sm'>
							Stable
						</Badge>
					</div>
					<p className='text-xs text-on-surface/60 mt-1'>
						Librería de componentes React para construir interfaces
						modernas.
					</p>
				</div>
			</Card>
		</div>
	);
}

export default function CardPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
