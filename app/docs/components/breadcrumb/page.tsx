'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Anchor, Breadcrumbs } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Breadcrumbs',
	category: 'navigation',
	status: 'stable',
	description_es:
		'Navegación de migas de pan que muestra la jerarquía de la página actual. Inserta automáticamente un separador configurable entre cada elemento hijo.',
	description_en:
		'Breadcrumb navigation showing the hierarchy of the current page. Automatically inserts a configurable separator between each child element.',
	controls: [
		{
			type: 'text',
			prop: 'separator',
			label_es: 'Separador',
			label_en: 'Separator',
			defaultValue: '/',
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Breadcrumbs separator="${v.separator}">
  <Anchor href="#">Inicio</Anchor>
  <Anchor href="#">Documentación</Anchor>
  <Anchor href="#">Componentes</Anchor>
  <span>Breadcrumbs</span>
</Breadcrumbs>`,
	props: [
		{
			name: 'separator',
			type: 'ReactNode',
			defaultValue: '"/"',
			description_es: 'Elemento separador entre cada item.',
			description_en: 'Separator element between each item.',
		},
		{
			name: 'separatorMargin',
			type: 'number | string',
			defaultValue: '"0.375rem"',
			description_es: 'Margen horizontal del separador.',
			description_en: 'Horizontal margin of the separator.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Items del breadcrumb (típicamente Anchor o span).',
			description_en: 'Breadcrumb items (typically Anchor or span).',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Breadcrumbs separator={v.separator as string}>
			<Anchor href='#'>Inicio</Anchor>
			<Anchor href='#'>Documentación</Anchor>
			<Anchor href='#'>Componentes</Anchor>
			<span className='text-on-surface/50 text-sm'>Breadcrumbs</span>
		</Breadcrumbs>
	);
}

export default function BreadcrumbPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
