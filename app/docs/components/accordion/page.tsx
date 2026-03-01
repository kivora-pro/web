'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import {
	Accordion,
	AccordionControl,
	AccordionItem,
	AccordionPanel,
} from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Accordion',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Componente de acordeón que expande y colapsa secciones de contenido. Soporta modo multiple, distintas variantes visuales y posición del chevron.',
	description_en:
		'Accordion component that expands and collapses content sections. Supports multiple mode, different visual variants and chevron position.',
	controls: [
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['default', 'contained', 'filled', 'separated'],
			defaultValue: 'default',
		},
		{
			type: 'select',
			prop: 'chevronPosition',
			label_es: 'Posición chevron',
			label_en: 'Chevron position',
			options: ['right', 'left'],
			defaultValue: 'right',
		},
		{
			type: 'boolean',
			prop: 'multiple',
			label_es: 'Múltiple',
			label_en: 'Multiple',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [];
		if (v.variant !== 'default') props.push(`variant="${v.variant}"`);
		if (v.chevronPosition !== 'right')
			props.push(`chevronPosition="${v.chevronPosition}"`);
		if (v.multiple) props.push('multiple');
		const propsStr = props.length ? '\n  ' + props.join('\n  ') : '';
		return `import { Accordion, AccordionItem, AccordionControl, AccordionPanel } from '@kivora/react';\n\n<Accordion${propsStr}>\n  <AccordionItem value="item-1">\n    <AccordionControl>Sección 1</AccordionControl>\n    <AccordionPanel>Contenido de la sección 1.</AccordionPanel>\n  </AccordionItem>\n  <AccordionItem value="item-2">\n    <AccordionControl>Sección 2</AccordionControl>\n    <AccordionPanel>Contenido de la sección 2.</AccordionPanel>\n  </AccordionItem>\n</Accordion>`;
	},
	props: [
		{
			name: 'value',
			type: 'string | string[] | null',
			description_es: 'Item(s) expandido(s) (modo controlado).',
			description_en: 'Expanded item(s) (controlled mode).',
		},
		{
			name: 'defaultValue',
			type: 'string | string[] | null',
			description_es: 'Item(s) expandido(s) inicialmente.',
			description_en: 'Initially expanded item(s).',
		},
		{
			name: 'onChange',
			type: '(value: string | string[] | null) => void',
			description_es: 'Callback al cambiar la selección.',
			description_en: 'Callback when selection changes.',
		},
		{
			name: 'multiple',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Permite expandir múltiples items simultaneamente.',
			description_en: 'Allows expanding multiple items simultaneously.',
		},
		{
			name: 'variant',
			type: '"default" | "contained" | "filled" | "separated"',
			defaultValue: '"default"',
			description_es: 'Variante visual del acordeón.',
			description_en: 'Visual variant of the accordion.',
		},
		{
			name: 'chevronPosition',
			type: '"right" | "left"',
			defaultValue: '"right"',
			description_es: 'Posición del icono de chevron.',
			description_en: 'Position of the chevron icon.',
		},
		{
			name: 'order',
			type: '2 | 3 | 4 | 5 | 6',
			defaultValue: '3',
			description_es:
				'Nivel de heading HTML para los controles (accesibilidad).',
			description_en: 'HTML heading level for controls (accessibility).',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-80'>
			<Accordion
				variant={
					v.variant as
						| 'default'
						| 'contained'
						| 'filled'
						| 'separated'
				}
				chevronPosition={v.chevronPosition as 'right' | 'left'}
				multiple={v.multiple as boolean}>
				<AccordionItem value='item-1'>
					<AccordionControl>¿Qué es Kivora?</AccordionControl>
					<AccordionPanel>
						Kivora es una librería de componentes UI para React.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionControl>¿Cómo instalarla?</AccordionControl>
					<AccordionPanel>
						Ejecuta <code>npm install @kivora/react</code> en tu
						proyecto.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='item-3'>
					<AccordionControl>
						¿Tiene soporte TypeScript?
					</AccordionControl>
					<AccordionPanel>
						Sí, todos los componentes incluyen tipos TypeScript
						completos.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default function AccordionPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
