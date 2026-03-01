'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Code } from '@kivora/react';

const exampleCode = `import { Button } from '@kivora/react';

export function App() {
  return <Button variant="solid">Hola Kivora</Button>;
}`;

const inlineExample = `const x = 42;`;

const config: ComponentDocConfig = {
	name: 'Code',
	category: 'typography',
	status: 'stable',
	description_es:
		'Muestra código fuente con resaltado de sintaxis. En modo bloque usa react-syntax-highlighter con tema atomOneDark; en modo inline renderiza un elemento <code> con estilo monospace.',
	description_en:
		'Displays source code with syntax highlighting. Block mode uses react-syntax-highlighter with the atomOneDark theme; inline mode renders a <code> element with monospace styling.',
	controls: [
		{
			type: 'boolean',
			prop: 'block',
			label_es: 'Modo bloque',
			label_en: 'Block mode',
			defaultValue: true,
		},
		{
			type: 'select',
			prop: 'language',
			label_es: 'Lenguaje',
			label_en: 'Language',
			options: ['typescript', 'javascript', 'bash', 'json', 'css'],
			defaultValue: 'typescript',
		},
		{
			type: 'boolean',
			prop: 'showLineNumbers',
			label_es: 'Números de línea',
			label_en: 'Line numbers',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'copyable',
			label_es: 'Copiable',
			label_en: 'Copyable',
			defaultValue: true,
		},
	],
	codeTemplate: (v: ControlValues) =>
		v.block
			? `<Code\n  block\n  language="${v.language}"${v.showLineNumbers ? '\n  showLineNumbers' : ''}${v.copyable ? '\n  copyable' : ''}\n>\n  {code}\n</Code>`
			: `<Code>${inlineExample}</Code>`,
	props: [
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Contenido de código a mostrar.',
			description_en: 'Code content to display.',
		},
		{
			name: 'block',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Activa el modo bloque con resaltado de sintaxis. Por defecto es modo inline.',
			description_en:
				'Enables block mode with syntax highlighting. Defaults to inline mode.',
		},
		{
			name: 'language',
			type: 'string',
			defaultValue: '"typescript"',
			description_es: 'Lenguaje para el resaltado de sintaxis.',
			description_en: 'Language for syntax highlighting.',
		},
		{
			name: 'showLineNumbers',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra números de línea (solo en modo bloque).',
			description_en: 'Shows line numbers (block mode only).',
		},
		{
			name: 'copyable',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Muestra un botón para copiar el código al portapapeles.',
			description_en: 'Shows a button to copy the code to clipboard.',
		},
		{
			name: 'highlighterStyle',
			type: 'object',
			description_es:
				'Estilo CSS inline pasado al componente de resaltado (modo bloque).',
			description_en:
				'Inline CSS style passed to the highlighter component (block mode).',
		},
		{
			name: 'highlighterProps',
			type: 'object',
			description_es:
				'Props adicionales para react-syntax-highlighter (modo bloque).',
			description_en:
				'Additional props for react-syntax-highlighter (block mode).',
		},
		{
			name: 'className',
			type: 'string',
			description_es: 'Clases CSS adicionales para el elemento raíz.',
			description_en: 'Additional CSS classes for the root element.',
		},
		{
			name: 'style',
			type: 'CSSProperties',
			description_es: 'Estilos inline para el elemento raíz.',
			description_en: 'Inline styles for the root element.',
		},
	],
};

function renderPreview(v: ControlValues) {
	if (v.block) {
		return (
			<Code
				block
				language={v.language as string}
				showLineNumbers={v.showLineNumbers as boolean}
				copyable={v.copyable as boolean}>
				{exampleCode}
			</Code>
		);
	}
	return <Code>{inlineExample}</Code>;
}

export default function CodePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
