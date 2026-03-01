'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, Notification } from '@kivora/react';
import { useState } from 'react';

const BellIcon = () => (
	<svg
		className='h-5 w-5'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}>
		<path d='M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9' />
		<path d='M13.73 21a2 2 0 01-3.46 0' />
	</svg>
);

const config: ComponentDocConfig = {
	name: 'Notification',
	category: 'feedback',
	status: 'stable',
	description_es:
		'Componente de notificación con animación de entrada/salida, soporte para icono, estado de carga, botón de cierre y borde opcional. Pensado para usarse dentro de sistemas de toast o como notificación estática.',
	description_en:
		'Notification component with enter/exit animation, icon support, loading state, close button and optional border. Designed for use inside toast systems or as a static notification.',
	controls: [
		{
			type: 'text',
			prop: 'title',
			label_es: 'Título',
			label_en: 'Title',
			defaultValue: 'Notificación',
		},
		{
			type: 'text',
			prop: 'message',
			label_es: 'Mensaje',
			label_en: 'Message',
			defaultValue: 'Tu operación se completó correctamente.',
		},
		{
			type: 'boolean',
			prop: 'withCloseButton',
			label_es: 'Botón cerrar',
			label_en: 'Close button',
			defaultValue: true,
		},
		{
			type: 'boolean',
			prop: 'withBorder',
			label_es: 'Con borde',
			label_en: 'With border',
			defaultValue: true,
		},
		{
			type: 'boolean',
			prop: 'loading',
			label_es: 'Loading',
			label_en: 'Loading',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Notification
  title="${v.title}"
  withCloseButton={${v.withCloseButton}}
  withBorder={${v.withBorder}}${v.loading ? '\n  loading' : ''}
>
  ${v.message}
</Notification>`,
	props: [
		{
			name: 'title',
			type: 'ReactNode',
			description_es: 'Título de la notificación.',
			description_en: 'Notification title.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			description_es: 'Cuerpo/mensaje de la notificación.',
			description_en: 'Notification body/message.',
		},
		{
			name: 'icon',
			type: 'ReactNode',
			description_es: 'Icono mostrado a la izquierda del contenido.',
			description_en: 'Icon displayed on the left side of the content.',
		},
		{
			name: 'loading',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Reemplaza el icono con un spinner de carga.',
			description_en: 'Replaces the icon with a loading spinner.',
		},
		{
			name: 'withCloseButton',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Muestra el botón para cerrar la notificación.',
			description_en: 'Shows the close button.',
		},
		{
			name: 'onClose',
			type: '() => void',
			description_es: 'Callback ejecutado al pulsar el botón de cierre.',
			description_en: 'Callback fired when the close button is clicked.',
		},
		{
			name: 'withBorder',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Añade un borde alrededor de la notificación.',
			description_en: 'Adds a border around the notification.',
		},
		{
			name: 'color',
			type: 'string',
			description_es:
				'Color de acento (aplica al icono o borde izquierdo).',
			description_en: 'Accent color (applies to icon or left border).',
		},
		{
			name: 'radius',
			type: 'string',
			description_es: 'Radio de borde personalizado.',
			description_en: 'Custom border radius.',
		},
	],
};

function NotificationPreview({ v }: { v: ControlValues }) {
	const [visible, setVisible] = useState(true);

	return (
		<div className='flex w-full max-w-sm flex-col items-center gap-4'>
			{visible ? (
				<Notification
					title={v.title as string}
					icon={!v.loading ? <BellIcon /> : undefined}
					loading={v.loading as boolean}
					withCloseButton={v.withCloseButton as boolean}
					withBorder={v.withBorder as boolean}
					onClose={() => setVisible(false)}>
					{v.message as string}
				</Notification>
			) : (
				<p className='text-sm text-zinc-500'>Notificación cerrada</p>
			)}
			{!visible && (
				<Button
					size='sm'
					variant='subtle'
					onClick={() => setVisible(true)}>
					Mostrar de nuevo
				</Button>
			)}
		</div>
	);
}

export default function NotificationPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => <NotificationPreview v={v} />}
		/>
	);
}
