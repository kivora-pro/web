'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Pagination } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'Pagination',
	category: 'navigation',
	status: 'stable',
	description_es:
		'Control de paginación que genera automáticamente los botones de páginas con puntos suspensivos para rangos largos. Soporta navegación por teclado y estado controlado.',
	description_en:
		'Pagination control that automatically generates page buttons with ellipsis for long ranges. Supports keyboard navigation and controlled state.',
	controls: [
		{
			type: 'range',
			prop: 'total',
			label_es: 'Total páginas',
			label_en: 'Total pages',
			min: 3,
			max: 30,
			step: 1,
			defaultValue: 10,
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
			prop: 'withEdges',
			label_es: 'Botones inicio/fin',
			label_en: 'Edge buttons',
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
	codeTemplate: (v: ControlValues) =>
		`const [page, setPage] = useState(1);

<Pagination
  total={${v.total}}
  value={page}
  onChange={setPage}
  size="${v.size}"${v.withEdges ? '\n  withEdges' : ''}${v.disabled ? '\n  disabled' : ''}
/>`,
	props: [
		{
			name: 'total',
			type: 'number',
			required: true,
			description_es: 'Número total de páginas.',
			description_en: 'Total number of pages.',
		},
		{
			name: 'value',
			type: 'number',
			description_es: 'Página activa (modo controlado).',
			description_en: 'Active page (controlled mode).',
		},
		{
			name: 'defaultValue',
			type: 'number',
			defaultValue: '1',
			description_es: 'Página inicial (modo no controlado).',
			description_en: 'Initial page (uncontrolled mode).',
		},
		{
			name: 'onChange',
			type: '(page: number) => void',
			description_es: 'Callback al cambiar de página.',
			description_en: 'Callback when changing page.',
		},
		{
			name: 'siblings',
			type: 'number',
			defaultValue: '1',
			description_es: 'Páginas visibles a cada lado de la activa.',
			description_en: 'Pages visible on each side of active.',
		},
		{
			name: 'boundaries',
			type: 'number',
			defaultValue: '1',
			description_es: 'Páginas siempre visibles en los extremos.',
			description_en: 'Pages always visible at the edges.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño de los botones de página.',
			description_en: 'Size of page buttons.',
		},
		{
			name: 'withEdges',
			type: 'boolean',
			description_es: 'Muestra botones para ir a primera/última página.',
			description_en: 'Shows buttons to go to first/last page.',
		},
		{
			name: 'withControls',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Muestra botones de página anterior/siguiente.',
			description_en: 'Shows previous/next page buttons.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita toda la paginación.',
			description_en: 'Disables all pagination.',
		},
	],
};

function PaginationPreview({ v }: { v: ControlValues }) {
	const [page, setPage] = useState(1);
	return (
		<Pagination
			total={v.total as number}
			value={page}
			onChange={setPage}
			size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			withEdges={v.withEdges as boolean}
			disabled={v.disabled as boolean}
		/>
	);
}

function renderPreview(v: ControlValues) {
	return <PaginationPreview v={v} />;
}

export default function PaginationPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
