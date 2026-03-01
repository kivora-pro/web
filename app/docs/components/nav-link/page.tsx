'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { NavLink } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'NavLink',
	category: 'navigation',
	status: 'stable',
	description_es:
		'Elemento de navegación estilo sidebar con soporte para etiqueta, descripción, secciones izquierda/derecha, estado activo y variantes visuales.',
	description_en:
		'Sidebar-style navigation element with support for label, description, left/right sections, active state and visual variants.',
	controls: [
		{
			type: 'text',
			prop: 'label',
			label_es: 'Etiqueta',
			label_en: 'Label',
			defaultValue: 'Configuración',
		},
		{
			type: 'text',
			prop: 'description',
			label_es: 'Descripción',
			label_en: 'Description',
			defaultValue: '',
		},
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['filled', 'light', 'subtle'],
			defaultValue: 'subtle',
		},
		{
			type: 'boolean',
			prop: 'active',
			label_es: 'Activo',
			label_en: 'Active',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'disabled',
			label_es: 'Deshabilitado',
			label_en: 'Disabled',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [`label="${v.label}"`];
		if (v.description) props.push(`description="${v.description}"`);
		if (v.variant !== 'subtle') props.push(`variant="${v.variant}"`);
		if (v.active) props.push('active');
		if (v.disabled) props.push('disabled');
		return `import { NavLink } from '@kivora/react';\n\n<NavLink\n  ${props.join('\n  ')}\n  href="/settings"\n/>`;
	},
	props: [
		{
			name: 'label',
			type: 'ReactNode',
			required: true,
			description_es: 'Texto principal del enlace.',
			description_en: 'Main link text.',
		},
		{
			name: 'description',
			type: 'ReactNode',
			description_es: 'Texto secundario debajo de la etiqueta.',
			description_en: 'Secondary text below the label.',
		},
		{
			name: 'leftSection',
			type: 'ReactNode',
			description_es: 'Contenido a la izquierda (icono).',
			description_en: 'Content on the left (icon).',
		},
		{
			name: 'rightSection',
			type: 'ReactNode',
			description_es: 'Contenido a la derecha.',
			description_en: 'Content on the right.',
		},
		{
			name: 'active',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Marca el enlace como activo.',
			description_en: 'Marks the link as active.',
		},
		{
			name: 'href',
			type: 'string',
			description_es: 'URL de destino.',
			description_en: 'Destination URL.',
		},
		{
			name: 'variant',
			type: '"filled" | "light" | "subtle"',
			defaultValue: '"subtle"',
			description_es: 'Variante visual.',
			description_en: 'Visual variant.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color del enlace activo.',
			description_en: 'Active link color.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el enlace.',
			description_en: 'Disables the link.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-64'>
			<NavLink
				label={v.label as string}
				description={
					v.description ? (v.description as string) : undefined
				}
				variant={v.variant as 'filled' | 'light' | 'subtle'}
				active={v.active as boolean}
				disabled={v.disabled as boolean}
				href='#'
			/>
		</div>
	);
}

export default function NavLinkPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
