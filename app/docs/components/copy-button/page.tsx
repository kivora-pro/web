'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { ActionIcon, CopyButton } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'CopyButton',
	category: 'buttons',
	status: 'stable',
	description_es:
		'Componente headless que gestiona el estado de copiado al portapapeles. Usa el patrón render-prop: aporta la función copy y el booleano copied, y tú decides cómo renderizarlo.',
	description_en:
		'Headless component that manages clipboard copy state. Uses a render-prop pattern: provides the copy function and the copied boolean, letting you decide how to render.',
	controls: [
		{
			type: 'text',
			prop: 'value',
			label_es: 'Texto a copiar',
			label_en: 'Value to copy',
			defaultValue: 'npm install @kivora/react',
		},
		{
			type: 'range',
			prop: 'timeout',
			label_es: 'Timeout (ms)',
			label_en: 'Timeout (ms)',
			min: 500,
			max: 5000,
			step: 500,
			defaultValue: 2000,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const parts: string[] = [`value="${v.value}"`];
		if (v.timeout !== 2000) parts.push(`timeout={${v.timeout}}`);
		return [
			`import { CopyButton, ActionIcon } from '@kivora/react';`,
			'',
			`<CopyButton ${parts.join(' ')}>`,
			`  {({ copied, copy }) => (`,
			`    <ActionIcon`,
			`      aria-label={copied ? 'Copiado' : 'Copiar'}`,
			`      variant={copied ? 'solid' : 'subtle'}`,
			`      onClick={copy}`,
			`    >`,
			`      {copied ? <CheckIcon /> : <CopyIcon />}`,
			`    </ActionIcon>`,
			`  )}`,
			`</CopyButton>`,
		].join('\n');
	},
	props: [
		{
			name: 'value',
			type: 'string',
			required: true,
			description_es:
				'Texto que se copia al portapapeles al invocar copy().',
			description_en:
				'Text to copy to the clipboard when copy() is called.',
		},
		{
			name: 'timeout',
			type: 'number',
			defaultValue: '2000',
			description_es:
				'Tiempo en ms que copied permanece true tras copiar.',
			description_en:
				'Duration in ms that copied stays true after copying.',
		},
		{
			name: 'children',
			type: '(props: { copied: boolean; copy: () => void }) => React.ReactNode',
			required: true,
			description_es:
				'Render-prop que recibe { copied, copy }. Úsalo para renderizar el botón con el estado visual que prefieras.',
			description_en:
				'Render-prop receiving { copied, copy }. Use it to render the button with the visual state you prefer.',
		},
	],
};

function CopyIcon() {
	return (
		<svg
			className='h-4 w-4'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeWidth={2}>
			<rect
				x='9'
				y='9'
				width='13'
				height='13'
				rx='2'
			/>
			<path d='M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1' />
		</svg>
	);
}

function CheckIcon() {
	return (
		<svg
			className='h-4 w-4'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeWidth={2.5}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M4.5 12.75l6 6 9-13.5'
			/>
		</svg>
	);
}

function renderPreview(v: ControlValues) {
	return (
		<div className='flex items-center gap-3 rounded-lg border border-white/8 bg-white/3 px-4 py-3'>
			<code className='flex-1 font-mono text-xs text-zinc-300'>
				{v.value as string}
			</code>
			<CopyButton
				value={v.value as string}
				timeout={v.timeout as number}>
				{({ copied, copy }) => (
					<ActionIcon
						aria-label={copied ? 'Copiado' : 'Copiar'}
						variant={copied ? 'solid' : 'subtle'}
						size='sm'
						onClick={copy}>
						{copied ? <CheckIcon /> : <CopyIcon />}
					</ActionIcon>
				)}
			</CopyButton>
		</div>
	);
}

export default function CopyButtonPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
