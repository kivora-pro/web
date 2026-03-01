'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Rating } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'Rating',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Selector de valoración con estrellas (u otros símbolos). Soporta fracciones, símbolos personalizados, modo solo lectura y múltiples tamaños.',
	description_en:
		'Star rating selector (or other symbols). Supports fractions, custom symbols, read-only mode and multiple sizes.',
	controls: [
		{
			type: 'range',
			prop: 'count',
			label_es: 'Cantidad',
			label_en: 'Count',
			min: 3,
			max: 10,
			step: 1,
			defaultValue: 5,
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
			prop: 'highlightSelectedOnly',
			label_es: 'Solo resaltar seleccionado',
			label_en: 'Highlight selected only',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'readOnly',
			label_es: 'Solo lectura',
			label_en: 'Read only',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`const [value, setValue] = useState(3);

<Rating
  value={value}
  onChange={setValue}
  count={${v.count}}
  size="${v.size}"${v.highlightSelectedOnly ? '\n  highlightSelectedOnly' : ''}${v.readOnly ? '\n  readOnly' : ''}
/>`,
	props: [
		{
			name: 'value',
			type: 'number',
			description_es: 'Valor actual (modo controlado).',
			description_en: 'Current value (controlled mode).',
		},
		{
			name: 'defaultValue',
			type: 'number',
			description_es: 'Valor inicial (modo no controlado).',
			description_en: 'Initial value (uncontrolled mode).',
		},
		{
			name: 'onChange',
			type: '(value: number) => void',
			description_es: 'Callback llamado al cambiar la valoración.',
			description_en: 'Callback called when rating changes.',
		},
		{
			name: 'count',
			type: 'number',
			defaultValue: '5',
			description_es: 'Número de símbolos a mostrar.',
			description_en: 'Number of symbols to display.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl" | number',
			defaultValue: '"md"',
			description_es: 'Tamaño de los símbolos.',
			description_en: 'Symbol size.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color de los símbolos rellenos.',
			description_en: 'Color of filled symbols.',
		},
		{
			name: 'fractions',
			type: 'number',
			defaultValue: '1',
			description_es:
				'Divisiones por símbolo para valoraciones parciales.',
			description_en: 'Divisions per symbol for partial ratings.',
		},
		{
			name: 'highlightSelectedOnly',
			type: 'boolean',
			description_es: 'Solo resalta el símbolo seleccionado.',
			description_en: 'Highlight only the selected symbol.',
		},
		{
			name: 'emptySymbol',
			type: 'ReactNode | ReactNode[]',
			description_es: 'Símbolo para estado vacío.',
			description_en: 'Symbol for empty state.',
		},
		{
			name: 'fullSymbol',
			type: 'ReactNode | ReactNode[]',
			description_es: 'Símbolo para estado relleno.',
			description_en: 'Symbol for filled state.',
		},
		{
			name: 'readOnly',
			type: 'boolean',
			description_es: 'Deshabilita la interacción del usuario.',
			description_en: 'Disables user interaction.',
		},
		{
			name: 'name',
			type: 'string',
			description_es: 'Atributo name para los inputs de radio internos.',
			description_en: 'Name attribute for internal radio inputs.',
		},
	],
};

function RatingPreview({ v }: { v: ControlValues }) {
	const [value, setValue] = useState(3);
	return (
		<Rating
			value={value}
			onChange={setValue}
			count={v.count as number}
			size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			highlightSelectedOnly={v.highlightSelectedOnly as boolean}
			readOnly={v.readOnly as boolean}
		/>
	);
}

function renderPreview(v: ControlValues) {
	return <RatingPreview v={v} />;
}

export default function RatingPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
