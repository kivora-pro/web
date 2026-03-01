'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';

const config: ComponentDocConfig = {
	name: 'AppShell',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Estructura de página completa con cabecera, navbar lateral, aside, footer y área de contenido principal. Gestiona automáticamente los offsets y colapsos responsivos.',
	description_en:
		'Full page layout with header, navbar, aside, footer and main content area. Automatically manages offsets and responsive collapsing.',
	controls: [
		{
			type: 'text',
			prop: 'children',
			label_es: 'Contenido',
			label_en: 'Content',
			defaultValue: 'Main content',
		},
	],
	codeTemplate: (_v: ControlValues) => {
		return [
			`import { AppShell } from '@kivora/react';`,
			'',
			`<AppShell`,
			`  header={{ height: 60 }}`,
			`  navbar={{ width: 240, breakpoint: 'sm' }}`,
			`  padding="md"`,
			`>`,
			`  <AppShell.Header>Header</AppShell.Header>`,
			`  <AppShell.Navbar>Sidebar</AppShell.Navbar>`,
			`  <AppShell.Main>Content</AppShell.Main>`,
			`</AppShell>`,
		].join('\n');
	},
	props: [
		{
			name: 'header',
			type: '{ height: number | string }',
			description_es: 'Configuración de la cabecera con su altura.',
			description_en: 'Header configuration with its height.',
		},
		{
			name: 'navbar',
			type: '{ width: number | string; breakpoint?: string; collapsed?: { mobile?: boolean } }',
			description_es: 'Configuración del navbar lateral.',
			description_en: 'Sidebar navbar configuration.',
		},
		{
			name: 'aside',
			type: '{ width: number | string; breakpoint?: string; collapsed?: { mobile?: boolean } }',
			description_es: 'Configuración del panel aside.',
			description_en: 'Aside panel configuration.',
		},
		{
			name: 'footer',
			type: '{ height: number | string }',
			description_es: 'Configuración del footer.',
			description_en: 'Footer configuration.',
		},
		{
			name: 'padding',
			type: 'number | string',
			description_es: 'Padding interior del área de contenido principal.',
			description_en: 'Inner padding of the main content area.',
		},
	],
};

export default function AppShellPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={() => (
				<div className='flex h-40 w-full overflow-hidden rounded-lg border border-border text-xs'>
					<div className='flex w-28 flex-col border-r border-border'>
						<div className='border-b border-border p-2 font-semibold text-on-surface'>
							Sidebar
						</div>
						<div className='p-2 text-muted'>Nav item</div>
					</div>
					<div className='flex flex-1 flex-col'>
						<div className='border-b border-border p-2 font-semibold text-on-surface'>
							Header
						</div>
						<div className='flex-1 p-3 text-muted'>
							Main content
						</div>
					</div>
				</div>
			)}
		/>
	);
}
