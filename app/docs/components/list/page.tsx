'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { List, ListItem } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'List',
	category: 'typography',
	status: 'stable',
	description_es:
		'Componente de lista ordenada o no ordenada. Soporta padding, espaciado entre items, íconos personalizados y alineación central del texto.',
	description_en:
		'Ordered or unordered list component. Supports padding, item spacing, custom icons and center text alignment.',
	controls: [
		{
			type: 'select',
			prop: 'type',
			label_es: 'Tipo',
			label_en: 'Type',
			options: ['unordered', 'ordered'],
			defaultValue: 'unordered',
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
			prop: 'spacing',
			label_es: 'Espaciado',
			label_en: 'Spacing',
			options: ['0', 'xs', 'sm', 'md', 'lg'],
			defaultValue: 'xs',
		},
		{
			type: 'boolean',
			prop: 'withPadding',
			label_es: 'Con padding',
			label_en: 'With padding',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'center',
			label_es: 'Centrar texto',
			label_en: 'Center text',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [];
		if (v.type !== 'unordered') props.push(`type="${v.type}"`);
		if (v.size !== 'md') props.push(`size="${v.size}"`);
		if (v.spacing !== 'xs') props.push(`spacing="${v.spacing}"`);
		if (v.withPadding) props.push('withPadding');
		if (v.center) props.push('center');
		const propsStr = props.length ? ' ' + props.join(' ') : '';
		return `import { List, ListItem } from '@kivora/react';\n\n<List${propsStr}>\n  <ListItem>Primer elemento</ListItem>\n  <ListItem>Segundo elemento</ListItem>\n  <ListItem>Tercer elemento</ListItem>\n</List>`;
	},
	props: [
		{
			name: 'type',
			type: '"ordered" | "unordered"',
			defaultValue: '"unordered"',
			description_es: 'Tipo de lista.',
			description_en: 'List type.',
		},
		{
			name: 'withPadding',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Añade padding izquierdo a la lista.',
			description_en: 'Adds left padding to the list.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del texto de los items.',
			description_en: 'Item text size.',
		},
		{
			name: 'spacing',
			type: 'string | number',
			description_es: 'Espaciado vertical entre items.',
			description_en: 'Vertical spacing between items.',
		},
		{
			name: 'center',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Centra el contenido del item.',
			description_en: 'Centers item content.',
		},
		{
			name: 'icon',
			type: 'ReactNode',
			description_es: 'Ícono global para todos los items.',
			description_en: 'Global icon for all items.',
		},
		{
			name: 'listStyleType',
			type: 'string',
			description_es: 'Propiedad CSS list-style-type.',
			description_en: 'CSS list-style-type property.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<List
			type={v.type as 'ordered' | 'unordered'}
			size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			spacing={v.spacing as string}
			withPadding={v.withPadding as boolean}
			center={v.center as boolean}>
			<ListItem>Primer elemento de la lista</ListItem>
			<ListItem>Segundo elemento de la lista</ListItem>
			<ListItem>Tercer elemento de la lista</ListItem>
		</List>
	);
}

export default function ListPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
