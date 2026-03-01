'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Autocomplete } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Autocomplete',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Campo de texto con sugerencias desplegables basadas en la entrada del usuario. Admite datos estáticos o filtrado personalizado.',
	description_en:
		'Text input with dropdown suggestions based on user input. Supports static data or custom filtering.',
	controls: [
		{
			type: 'text',
			prop: 'placeholder',
			label_es: 'Placeholder',
			label_en: 'Placeholder',
			defaultValue: 'Buscar...',
		},
		{
			type: 'text',
			prop: 'label',
			label_es: 'Etiqueta',
			label_en: 'Label',
			defaultValue: 'País',
		},
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const parts: string[] = [
			`data={['España', 'Francia', 'Alemania', 'Italia']}`,
		];
		if (v.placeholder !== 'Buscar...')
			parts.push(`placeholder="${v.placeholder}"`);
		if (v.label) parts.push(`label="${v.label}"`);
		if (v.size !== 'md') parts.push(`size="${v.size}"`);
		return [
			`import { Autocomplete } from '@kivora/react';`,
			'',
			`<Autocomplete`,
			...parts.map((p) => `  ${p}`),
			`/>`,
		].join('\n');
	},
	props: [
		{
			name: 'data',
			type: 'string[]',
			description_es: 'Opciones de sugerencia.',
			description_en: 'Suggestion options.',
		},
		{
			name: 'value',
			type: 'string',
			description_es: 'Valor controlado.',
			description_en: 'Controlled value.',
		},
		{
			name: 'defaultValue',
			type: 'string',
			description_es: 'Valor inicial no controlado.',
			description_en: 'Uncontrolled initial value.',
		},
		{
			name: 'onChange',
			type: '(value: string) => void',
			description_es: 'Callback al cambiar el valor.',
			description_en: 'Callback on value change.',
		},
		{
			name: 'placeholder',
			type: 'string',
			description_es: 'Texto de marcador.',
			description_en: 'Placeholder text.',
		},
		{
			name: 'label',
			type: 'React.ReactNode',
			description_es: 'Etiqueta del campo.',
			description_en: 'Field label.',
		},
		{
			name: 'size',
			type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			defaultValue: "'md'",
			description_es: 'Tamaño del input.',
			description_en: 'Input size.',
		},
		{
			name: 'limit',
			type: 'number',
			description_es: 'Número máximo de sugerencias visibles.',
			description_en: 'Max number of visible suggestions.',
		},
		{
			name: 'onOptionSubmit',
			type: '(value: string) => void',
			description_es: 'Callback al seleccionar una opción.',
			description_en: 'Callback when an option is selected.',
		},
	],
};

export default function AutocompletePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<Autocomplete
					data={[
						'España',
						'Francia',
						'Alemania',
						'Italia',
						'Portugal',
						'Suecia',
					]}
					placeholder={v.placeholder as string}
					label={v.label as string}
					size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				/>
			)}
		/>
	);
}
