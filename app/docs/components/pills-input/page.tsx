'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { PillsInput } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'PillsInput',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Campo de entrada que muestra valores como píldoras (pills) dentro del input. Generalmente se usa junto con PillsInputField para construir selectores personalizados.',
	description_en:
		'Input field that displays values as pills inside the input. Usually used with PillsInputField to build custom selectors.',
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
			type: 'text',
			prop: 'label',
			label_es: 'Etiqueta',
			label_en: 'Label',
			defaultValue: 'Etiquetas',
		},
		{
			type: 'text',
			prop: 'description',
			label_es: 'Descripción',
			label_en: 'Description',
			defaultValue: '',
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
		const props: string[] = [];
		if (v.size !== 'md') props.push(`size="${v.size}"`);
		if (v.label) props.push(`label="${v.label}"`);
		if (v.description) props.push(`description="${v.description}"`);
		if (v.disabled) props.push('disabled');
		const propsStr = props.length ? '\n  ' + props.join('\n  ') : '';
		return `import { Pill, PillsInput } from '@kivora/react';\n\n<PillsInput${propsStr}>\n  <Pill.Group>\n    <Pill withRemoveButton>React</Pill>\n    <Pill withRemoveButton>TypeScript</Pill>\n    <PillsInput.Field placeholder="Agregar etiqueta" />\n  </Pill.Group>\n</PillsInput>`;
	},
	props: [
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del campo.',
			description_en: 'Field size.',
		},
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta del campo.',
			description_en: 'Field label.',
		},
		{
			name: 'description',
			type: 'ReactNode',
			description_es: 'Descripción debajo de la etiqueta.',
			description_en: 'Description below the label.',
		},
		{
			name: 'error',
			type: 'ReactNode',
			description_es: 'Mensaje de error.',
			description_en: 'Error message.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el campo.',
			description_en: 'Disables the field.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-72'>
			<PillsInput
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				label={v.label as string}
				description={
					v.description ? (v.description as string) : undefined
				}
				disabled={v.disabled as boolean}
			/>
		</div>
	);
}

export default function PillsInputPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
