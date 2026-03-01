'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Tabs, TabsList, TabsPanel, TabsTab } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'Tabs',
	category: 'navigation',
	status: 'stable',
	description_es:
		'Navegación por pestañas accesible con animación de indicador. Admite orientación horizontal o vertical, tres variantes visuales y gestión de estado controlada o no controlada.',
	description_en:
		'Accessible tab navigation with indicator animation. Supports horizontal or vertical orientation, three visual variants and controlled or uncontrolled state.',
	controls: [
		{
			type: 'select',
			prop: 'variant',
			label_es: 'Variante',
			label_en: 'Variant',
			options: ['default', 'outline', 'pills'],
			defaultValue: 'default',
		},
		{
			type: 'select',
			prop: 'orientation',
			label_es: 'Orientación',
			label_en: 'Orientation',
			options: ['horizontal', 'vertical'],
			defaultValue: 'horizontal',
		},
	],
	codeTemplate: (v: ControlValues) =>
		`const [tab, setTab] = useState('gallery');

<Tabs value={tab} onChange={setTab} variant="${v.variant}" orientation="${v.orientation}">
  <TabsList>
    <TabsTab value="gallery">Galería</TabsTab>
    <TabsTab value="messages">Mensajes</TabsTab>
    <TabsTab value="settings">Ajustes</TabsTab>
  </TabsList>
  <TabsPanel value="gallery">Contenido de Galería</TabsPanel>
  <TabsPanel value="messages">Contenido de Mensajes</TabsPanel>
  <TabsPanel value="settings">Contenido de Ajustes</TabsPanel>
</Tabs>`,
	props: [
		{
			name: 'value',
			type: 'string',
			description_es: 'Pestaña activa (modo controlado).',
			description_en: 'Active tab (controlled mode).',
		},
		{
			name: 'defaultValue',
			type: 'string',
			description_es: 'Pestaña activa inicial (modo no controlado).',
			description_en: 'Initial active tab (uncontrolled mode).',
		},
		{
			name: 'onChange',
			type: '(value: string) => void',
			description_es: 'Callback al cambiar de pestaña.',
			description_en: 'Callback when switching tabs.',
		},
		{
			name: 'variant',
			type: '"default" | "outline" | "pills"',
			defaultValue: '"default"',
			description_es: 'Estilo visual de las pestañas.',
			description_en: 'Visual style of the tabs.',
		},
		{
			name: 'orientation',
			type: '"horizontal" | "vertical"',
			defaultValue: '"horizontal"',
			description_es: 'Dirección del layout de pestañas.',
			description_en: 'Layout direction of the tabs.',
		},
		{
			name: 'keepMounted',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Mantiene montados los paneles ocultos.',
			description_en: 'Keeps hidden panels mounted in the DOM.',
		},
		{
			name: 'allowTabDeactivation',
			type: 'boolean',
			description_es:
				'Permite desactivar la pestaña activa al hacer clic.',
			description_en: 'Allows deactivating the active tab on click.',
		},
		{
			name: 'color',
			type: 'string',
			description_es: 'Color del indicador activo.',
			description_en: 'Color of the active indicator.',
		},
	],
};

function TabsPreview({ v }: { v: ControlValues }) {
	const [tab, setTab] = useState('gallery');
	return (
		<div className='w-80'>
			<Tabs
				value={tab}
				onChange={setTab}
				variant={v.variant as 'default' | 'outline' | 'pills'}
				orientation={v.orientation as 'horizontal' | 'vertical'}>
				<TabsList>
					<TabsTab value='gallery'>Galería</TabsTab>
					<TabsTab value='messages'>Mensajes</TabsTab>
					<TabsTab value='settings'>Ajustes</TabsTab>
				</TabsList>
				<TabsPanel value='gallery'>
					<p className='p-3 text-sm text-on-surface/70'>
						Contenido de Galería
					</p>
				</TabsPanel>
				<TabsPanel value='messages'>
					<p className='p-3 text-sm text-on-surface/70'>
						Contenido de Mensajes
					</p>
				</TabsPanel>
				<TabsPanel value='settings'>
					<p className='p-3 text-sm text-on-surface/70'>
						Contenido de Ajustes
					</p>
				</TabsPanel>
			</Tabs>
		</div>
	);
}

function renderPreview(v: ControlValues) {
	return <TabsPreview v={v} />;
}

export default function TabsPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
