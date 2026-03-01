'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Tree } from '@kivora/react';

const DEMO_DATA = [
	{
		value: 'src',
		label: 'src/',
		children: [
			{
				value: 'components',
				label: 'components/',
				children: [
					{ value: 'Button.tsx', label: 'Button.tsx' },
					{ value: 'Input.tsx', label: 'Input.tsx' },
				],
			},
			{ value: 'utils.ts', label: 'utils.ts' },
		],
	},
	{
		value: 'public',
		label: 'public/',
		children: [{ value: 'index.html', label: 'index.html' }],
	},
];

const config: ComponentDocConfig = {
	name: 'Tree',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Componente de árbol jerárquico para mostrar datos anidados como estructuras de directorios, categorías o jerarquías organizacionales.',
	description_en:
		'Hierarchical tree component for displaying nested data like directory structures, categories or organizational hierarchies.',
	controls: [
		{
			type: 'select',
			prop: 'levelOffset',
			label_es: 'Sangría por nivel',
			label_en: 'Level offset',
			options: ['12', '16', '20', '24', '32'],
			defaultValue: '20',
		},
		{
			type: 'boolean',
			prop: 'selectOnClick',
			label_es: 'Seleccionar al clic',
			label_en: 'Select on click',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'clearSelectionOnOutsideClick',
			label_es: 'Limpiar selección fuera',
			label_en: 'Clear selection outside',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props = [`data={treeData}`, `levelOffset={${v.levelOffset}}`];
		if (v.selectOnClick) props.push('selectOnClick');
		if (v.clearSelectionOnOutsideClick)
			props.push('clearSelectionOnOutsideClick');
		return `import { Tree } from '@kivora/react';\nimport type { TreeNodeData } from '@kivora/react';\n\nconst treeData: TreeNodeData[] = [\n  {\n    value: 'src',\n    label: 'src/',\n    children: [\n      { value: 'App.tsx', label: 'App.tsx' },\n    ],\n  },\n];\n\n<Tree\n  ${props.join('\n  ')}\n/>`;
	},
	props: [
		{
			name: 'data',
			type: 'TreeNodeData[]',
			required: true,
			description_es:
				'Datos del árbol. Cada nodo tiene value, label y opcionalmente children.',
			description_en:
				'Tree data. Each node has value, label and optionally children.',
		},
		{
			name: 'levelOffset',
			type: 'number',
			defaultValue: '20',
			description_es: 'Sangría horizontal por nivel en píxeles.',
			description_en: 'Horizontal indent per level in pixels.',
		},
		{
			name: 'selectOnClick',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Selecciona el nodo al hacer clic.',
			description_en: 'Selects node on click.',
		},
		{
			name: 'clearSelectionOnOutsideClick',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Limpia la selección al clicar fuera del árbol.',
			description_en: 'Clears selection when clicking outside the tree.',
		},
		{
			name: 'renderNode',
			type: '(payload: RenderTreeNodePayload) => ReactNode',
			description_es: 'Función personalizada para renderizar cada nodo.',
			description_en: 'Custom function to render each node.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Tree
			data={DEMO_DATA}
			levelOffset={Number(v.levelOffset)}
			selectOnClick={v.selectOnClick as boolean}
			clearSelectionOnOutsideClick={
				v.clearSelectionOnOutsideClick as boolean
			}
		/>
	);
}

export default function TreePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
