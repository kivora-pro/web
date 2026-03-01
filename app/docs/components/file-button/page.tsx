'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, FileButton } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'FileButton',
	category: 'buttons',
	status: 'stable',
	description_es:
		'Componente headless que dispara un selector de archivos del sistema. Usa render-prop: recibe onClick y tú decides qué elemento renderizar como disparador.',
	description_en:
		'Headless component that triggers the system file picker. Uses a render-prop: receives onClick and lets you decide which element to render as the trigger.',
	controls: [
		{
			type: 'boolean',
			prop: 'multiple',
			label_es: 'multiple',
			label_en: 'multiple',
			defaultValue: false,
		},
		{
			type: 'text',
			prop: 'accept',
			label_es: 'accept',
			label_en: 'accept',
			defaultValue: '',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const parts: string[] = ['onChange={setFile}'];
		if (v.multiple) parts.push('multiple');
		if (v.accept) parts.push(`accept="${v.accept}"`);
		return [
			`import { useState } from 'react';`,
			`import { FileButton, Button } from '@kivora/react';`,
			'',
			`const [file, setFile] = useState<File | null>(null);`,
			'',
			`<FileButton ${parts.join(' ')}>`,
			`  {({ onClick }) => (`,
			`    <Button variant="outline" onClick={onClick}>`,
			`      Seleccionar archivo`,
			`    </Button>`,
			`  )}`,
			`</FileButton>`,
		].join('\n');
	},
	props: [
		{
			name: 'onChange',
			type: '(files: File | File[] | null) => void',
			required: true,
			description_es:
				'Callback que recibe el archivo seleccionado. Si multiple=true recibe un array.',
			description_en:
				'Callback receiving the selected file. When multiple=true receives an array.',
		},
		{
			name: 'accept',
			type: 'string',
			description_es:
				'Tipos MIME o extensiones aceptadas (ej: "image/*" o ".pdf,.docx").',
			description_en:
				'Accepted MIME types or extensions (e.g. "image/*" or ".pdf,.docx").',
		},
		{
			name: 'multiple',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Permite seleccionar múltiples archivos.',
			description_en: 'Allows selecting multiple files.',
		},
		{
			name: 'capture',
			type: "'user' | 'environment'",
			description_es:
				'En móviles, activa la cámara frontal (user) o trasera (environment).',
			description_en:
				'On mobile, activates the front (user) or rear (environment) camera.',
		},
		{
			name: 'resetRef',
			type: 'React.Ref<() => void>',
			description_es:
				'Ref que expone una función reset() para limpiar el input y permitir reseleccionar el mismo archivo.',
			description_en:
				'Ref exposing a reset() function to clear the input and allow reselecting the same file.',
		},
		{
			name: 'children',
			type: '(props: { onClick: () => void }) => React.ReactNode',
			required: true,
			description_es: 'Render-prop que recibe { onClick }.',
			description_en: 'Render-prop receiving { onClick }.',
		},
	],
};

function FileButtonPreview({ v }: { v: ControlValues }) {
	const [file, setFile] = useState<File | File[] | null>(null);
	const name = file
		? Array.isArray(file)
			? `${file.length} archivo(s)`
			: file.name
		: null;

	return (
		<div className='flex flex-col items-center gap-3'>
			<FileButton
				onChange={setFile}
				multiple={v.multiple as boolean}
				accept={(v.accept as string) || undefined}>
				{({ onClick }) => (
					<Button
						variant='outline'
						onClick={onClick}>
						Seleccionar archivo
					</Button>
				)}
			</FileButton>
			{name && (
				<p className='text-xs text-zinc-400'>
					Seleccionado: <span className='text-white'>{name}</span>
				</p>
			)}
		</div>
	);
}

export default function FileButtonPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => <FileButtonPreview v={v} />}
		/>
	);
}
