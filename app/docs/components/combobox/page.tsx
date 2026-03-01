'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import {
	Combobox,
	ComboboxDropdown,
	ComboboxOption,
	ComboboxOptions,
	ComboboxTarget,
	InputBase,
	useCombobox,
} from '@kivora/react';
import { useState } from 'react';

const DEMO_OPTIONS = [
	'React',
	'Vue',
	'Angular',
	'Svelte',
	'Solid',
	'Qwik',
	'Astro',
	'Next.js',
];

const config: ComponentDocConfig = {
	name: 'Combobox',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Componente composable para construir selectores personalizados. Se compone de Combobox, ComboboxTarget, ComboboxDropdown, ComboboxOptions y ComboboxOption para máxima flexibilidad.',
	description_en:
		'Composable component for building custom selectors. Composed of Combobox, ComboboxTarget, ComboboxDropdown, ComboboxOptions and ComboboxOption for maximum flexibility.',
	controls: [
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
			prop: 'readOnly',
			label_es: 'Solo lectura',
			label_en: 'Read only',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'withinPortal',
			label_es: 'Dentro de portal',
			label_en: 'Within portal',
			defaultValue: true,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const comboboxProps: string[] = [];
		if (!v.withinPortal) comboboxProps.push('withinPortal={false}');
		const propsStr = comboboxProps.length
			? '\n  ' + comboboxProps.join('\n  ')
			: '';
		return `import { useCombobox, Combobox, ComboboxTarget, ComboboxDropdown, ComboboxOptions, ComboboxOption, InputBase } from '@kivora/react';\n\nconst [value, setValue] = useState<string | null>(null);\nconst combobox = useCombobox();\nconst options = ['React', 'Vue', 'Angular', 'Svelte'];\n\n<Combobox\n  store={combobox}\n  onOptionSubmit={(val) => {\n    setValue(val);\n    combobox.closeDropdown();\n  }}${propsStr}\n>\n  <ComboboxTarget>\n    <InputBase\n      size="${v.size}"\n      component="button"\n      pointer\n      rightSection={<Combobox.Chevron />}\n      onClick={() => combobox.toggleDropdown()}\n    >\n      {value ?? 'Seleccionar framework'}\n    </InputBase>\n  </ComboboxTarget>\n  <ComboboxDropdown>\n    <ComboboxOptions>\n      {options.map((opt) => (\n        <ComboboxOption key={opt} value={opt}>{opt}</ComboboxOption>\n      ))}\n    </ComboboxOptions>\n  </ComboboxDropdown>\n</Combobox>`;
	},
	props: [
		{
			name: 'store',
			type: 'ComboboxStore',
			required: true,
			description_es: 'Estado del combobox obtenido de useCombobox().',
			description_en: 'Combobox state obtained from useCombobox().',
		},
		{
			name: 'onOptionSubmit',
			type: '(value: string) => void',
			required: true,
			description_es: 'Callback cuando se selecciona una opción.',
			description_en: 'Callback when an option is selected.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es:
				'Tamaño del combobox (se pasa a los subcomponentes).',
			description_en: 'Combobox size (passed to subcomponents).',
		},
		{
			name: 'readOnly',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Hace el combobox de solo lectura.',
			description_en: 'Makes the combobox read-only.',
		},
		{
			name: 'withinPortal',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Renderiza el dropdown dentro de un portal.',
			description_en: 'Renders dropdown inside a portal.',
		},
		{
			name: 'dropdownPadding',
			type: 'number',
			description_es: 'Padding interno del dropdown.',
			description_en: 'Dropdown inner padding.',
		},
	],
};

function ComboboxPreview({ v }: { v: ControlValues }) {
	const [value, setValue] = useState<string | null>(null);
	const combobox = useCombobox();

	const options = DEMO_OPTIONS.map((opt) => (
		<ComboboxOption
			key={opt}
			value={opt}>
			{opt}
		</ComboboxOption>
	));

	return (
		<div className='w-64'>
			<Combobox
				store={combobox}
				onOptionSubmit={(val) => {
					setValue(val);
					combobox.closeDropdown();
				}}
				withinPortal={v.withinPortal as boolean}>
				<ComboboxTarget>
					<InputBase
						size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
						component='button'
						pointer
						rightSection={<Combobox.Chevron />}
						onClick={() =>
							!v.readOnly && combobox.toggleDropdown()
						}>
						{value ?? 'Seleccionar framework'}
					</InputBase>
				</ComboboxTarget>
				<ComboboxDropdown>
					<ComboboxOptions>{options}</ComboboxOptions>
				</ComboboxDropdown>
			</Combobox>
		</div>
	);
}

function renderPreview(v: ControlValues) {
	return <ComboboxPreview v={v} />;
}

export default function ComboboxPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
