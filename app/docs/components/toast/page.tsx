'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, Toaster, toast } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Toast',
	category: 'feedback',
	status: 'stable',
	description_es:
		'Notificaciones toast no intrusivas basadas en Sonner. Requiere montar <Toaster /> una vez en el layout raíz y llamar a toast() para mostrar mensajes.',
	description_en:
		'Non-intrusive toast notifications based on Sonner. Requires mounting <Toaster /> once in the root layout and calling toast() to show messages.',
	controls: [
		{
			type: 'select',
			prop: 'type',
			label_es: 'Tipo',
			label_en: 'Type',
			options: ['default', 'success', 'error', 'warning', 'info'],
			defaultValue: 'default',
		},
		{
			type: 'text',
			prop: 'message',
			label_es: 'Mensaje',
			label_en: 'Message',
			defaultValue: '¡Cambios guardados!',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const fn =
			v.type === 'default'
				? `toast('${v.message}')`
				: `toast.${v.type}('${v.message}')`;
		return [
			`// En el layout raíz:`,
			`import { Toaster } from '@kivora/react';`,
			`<Toaster />`,
			``,
			`// Para mostrar un toast:`,
			`import { toast } from '@kivora/react';`,
			``,
			fn,
		].join('\n');
	},
	props: [
		{
			name: 'Toaster.position',
			type: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",
			defaultValue: "'bottom-right'",
			description_es: 'Posición del contenedor de toasts.',
			description_en: 'Position of the toast container.',
		},
		{
			name: 'Toaster.richColors',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Activa colores ricos para éxito, error y advertencia.',
			description_en:
				'Enables rich colors for success, error and warning.',
		},
		{
			name: 'Toaster.expand',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Expande todos los toasts apilados.',
			description_en: 'Expands all stacked toasts.',
		},
		{
			name: 'toast(message)',
			type: 'string | React.ReactNode',
			description_es: 'Muestra un toast por defecto.',
			description_en: 'Shows a default toast.',
		},
		{
			name: 'toast.success()',
			type: 'string | React.ReactNode',
			description_es: 'Muestra un toast de éxito.',
			description_en: 'Shows a success toast.',
		},
		{
			name: 'toast.error()',
			type: 'string | React.ReactNode',
			description_es: 'Muestra un toast de error.',
			description_en: 'Shows an error toast.',
		},
		{
			name: 'toast.warning()',
			type: 'string | React.ReactNode',
			description_es: 'Muestra un toast de advertencia.',
			description_en: 'Shows a warning toast.',
		},
	],
};

export default function ToastPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<div className='flex flex-wrap gap-3'>
					<Toaster />
					<Button
						variant='outline'
						size='sm'
						onClick={() => {
							const msg = v.message as string;
							const type = v.type as string;
							if (type === 'success') toast.success(msg);
							else if (type === 'error') toast.error(msg);
							else if (type === 'warning') toast.warning(msg);
							else if (type === 'info') toast.info(msg);
							else toast(msg);
						}}>
						Mostrar toast ({v.type as string})
					</Button>
				</div>
			)}
		/>
	);
}
