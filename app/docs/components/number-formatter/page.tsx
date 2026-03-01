'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { NumberFormatter } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'NumberFormatter',
	category: 'typography',
	status: 'stable',
	description_es:
		'Formatea números con separadores de miles, decimales, prefijos, sufijos e internacionalización. No renderiza un input, solo formatea el número como texto.',
	description_en:
		'Formats numbers with thousands separators, decimals, prefixes, suffixes and internationalization. Does not render an input, only formats the number as text.',
	controls: [
		{
			type: 'select',
			prop: 'value',
			label_es: 'Valor',
			label_en: 'Value',
			options: ['1234567.89', '0.5', '1000000', '-42.5'],
			defaultValue: '1234567.89',
		},
		{
			type: 'boolean',
			prop: 'thousandSeparator',
			label_es: 'Separador de miles',
			label_en: 'Thousand separator',
			defaultValue: true,
		},
		{
			type: 'text',
			prop: 'prefix',
			label_es: 'Prefijo',
			label_en: 'Prefix',
			defaultValue: '$',
		},
		{
			type: 'text',
			prop: 'suffix',
			label_es: 'Sufijo',
			label_en: 'Suffix',
			defaultValue: '',
		},
		{
			type: 'select',
			prop: 'decimalScale',
			label_es: 'Decimales',
			label_en: 'Decimal scale',
			options: ['0', '1', '2', '3', '4'],
			defaultValue: '2',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [`value={${v.value}}`];
		if (v.thousandSeparator) props.push('thousandSeparator');
		if (v.prefix) props.push(`prefix="${v.prefix}"`);
		if (v.suffix) props.push(`suffix="${v.suffix}"`);
		if (v.decimalScale !== '2')
			props.push(`decimalScale={${v.decimalScale}}`);
		return `import { NumberFormatter } from '@kivora/react';\n\n<NumberFormatter\n  ${props.join('\n  ')}\n/>`;
	},
	props: [
		{
			name: 'value',
			type: 'number | string',
			required: true,
			description_es: 'Valor numérico a formatear.',
			description_en: 'Numeric value to format.',
		},
		{
			name: 'thousandSeparator',
			type: 'boolean | string',
			description_es:
				'Separador de miles (true para , o un string personalizado).',
			description_en:
				'Thousands separator (true for , or a custom string).',
		},
		{
			name: 'decimalSeparator',
			type: 'string',
			defaultValue: '"."',
			description_es: 'Separador decimal.',
			description_en: 'Decimal separator.',
		},
		{
			name: 'decimalScale',
			type: 'number',
			description_es: 'Número de decimales a mostrar.',
			description_en: 'Number of decimals to show.',
		},
		{
			name: 'prefix',
			type: 'string',
			description_es: 'Texto antes del número (ej: "$", "€").',
			description_en: 'Text before the number (e.g. "$", "€").',
		},
		{
			name: 'suffix',
			type: 'string',
			description_es: 'Texto después del número (ej: "kg", "%").',
			description_en: 'Text after the number (e.g. "kg", "%").',
		},
		{
			name: 'style',
			type: '"decimal" | "currency" | "percent"',
			description_es: 'Estilo de formateo Intl.',
			description_en: 'Intl formatting style.',
		},
		{
			name: 'currency',
			type: 'string',
			description_es: 'Código de moneda ISO 4217 (ej: "USD", "EUR").',
			description_en: 'ISO 4217 currency code (e.g. "USD", "EUR").',
		},
		{
			name: 'locale',
			type: 'string',
			description_es: 'Locale para el formateo (ej: "es-ES", "en-US").',
			description_en: 'Locale for formatting (e.g. "es-ES", "en-US").',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<span className='text-2xl font-semibold'>
			<NumberFormatter
				value={Number(v.value)}
				thousandSeparator={v.thousandSeparator as boolean}
				prefix={v.prefix as string}
				suffix={v.suffix ? (v.suffix as string) : undefined}
				decimalScale={Number(v.decimalScale)}
			/>
		</span>
	);
}

export default function NumberFormatterPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
