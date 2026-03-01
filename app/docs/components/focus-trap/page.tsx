'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, FocusTrap } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'FocusTrap',
	category: 'miscellaneous',
	status: 'stable',
	description_es:
		'Atrapa el foco del teclado dentro de sus hijos mientras el prop "active" sea true. Esencial para accesibilidad en modales, drawers y diálogos.',
	description_en:
		'Traps keyboard focus within its children while the "active" prop is true. Essential for accessibility in modals, drawers and dialogs.',
	controls: [
		{
			type: 'boolean',
			prop: 'active',
			label_es: 'Activo',
			label_en: 'Active',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`import { FocusTrap, TextInput, Button } from '@kivora/react';\n\n<FocusTrap active={${v.active}}>\n  <div>\n    <TextInput label="Nombre" placeholder="Escribe tu nombre" />\n    <TextInput label="Email" placeholder="tu@email.com" mt="sm" />\n    <Button mt="md">Enviar</Button>\n  </div>\n</FocusTrap>`,
	props: [
		{
			name: 'active',
			type: 'boolean',
			required: true,
			description_es: 'Activa o desactiva la trampa de foco.',
			description_en: 'Activates or deactivates the focus trap.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			required: true,
			description_es: 'Contenido donde se encerrará el foco.',
			description_en: 'Content where focus will be trapped.',
		},
	],
};

function FocusTrapPreview({ v }: { v: ControlValues }) {
	const [active, setActive] = useState(false);
	const isActive = (v.active as boolean) || active;
	return (
		<div className='flex flex-col gap-3'>
			<Button
				onClick={() => setActive((a) => !a)}
				size='sm'>
				{active ? 'Desactivar FocusTrap' : 'Activar FocusTrap'}
			</Button>
			<FocusTrap active={isActive}>
				<div
					className={`p-4 border-2 rounded-lg flex flex-col gap-2 transition-colors ${isActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-dashed'}`}>
					{isActive && (
						<p className='text-xs text-blue-600 dark:text-blue-400 font-medium'>
							⚡ FocusTrap activo — el foco está encerrado aquí
						</p>
					)}
					<input
						className='border rounded px-3 py-1.5 text-sm w-full'
						placeholder='Campo 1'
					/>
					<input
						className='border rounded px-3 py-1.5 text-sm w-full'
						placeholder='Campo 2'
					/>
					<button className='border rounded px-3 py-1.5 text-sm bg-white dark:bg-gray-800'>
						Botón dentro del trap
					</button>
				</div>
			</FocusTrap>
		</div>
	);
}

function renderPreview(v: ControlValues) {
	return <FocusTrapPreview v={v} />;
}

export default function FocusTrapPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
