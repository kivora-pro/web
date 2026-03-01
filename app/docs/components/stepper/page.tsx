'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Button, Stepper, StepperCompleted, StepperStep } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'Stepper',
	category: 'navigation',
	status: 'stable',
	description_es:
		'Indicador de progreso por pasos con estados completo, en progreso y pendiente. Admite navegación interactiva entre pasos, orientación horizontal o vertical, e icono personalizable.',
	description_en:
		'Step-by-step progress indicator with completed, in-progress and upcoming states. Supports interactive step navigation, horizontal or vertical orientation and customizable icons.',
	controls: [
		{
			type: 'select',
			prop: 'orientation',
			label_es: 'Orientación',
			label_en: 'Orientation',
			options: ['horizontal', 'vertical'],
			defaultValue: 'horizontal',
		},
		{
			type: 'boolean',
			prop: 'allowNextStepsSelect',
			label_es: 'Ir a pasos futuros',
			label_en: 'Allow future steps',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`const [active, setActive] = useState(1);

<Stepper
  active={active}
  onStepClick={setActive}
  orientation="${v.orientation}"${v.allowNextStepsSelect ? '\n  allowNextStepsSelect' : ''}
>
  <StepperStep label="Información" description="Datos básicos" />
  <StepperStep label="Cuenta" description="Credenciales" />
  <StepperStep label="Confirmación" description="Revisar y enviar" />
  <StepperCompleted>¡Todo listo!</StepperCompleted>
</Stepper>

<div className="flex gap-2 mt-4">
  <Button variant="outline" onClick={() => setActive(a => Math.max(0, a - 1))}>
    Atrás
  </Button>
  <Button onClick={() => setActive(a => Math.min(3, a + 1))}>
    {active === 3 ? 'Finalizar' : 'Siguiente'}
  </Button>
</div>`,
	props: [
		{
			name: 'active',
			type: 'number',
			required: true,
			description_es: 'Índice del paso activo (0-based).',
			description_en: 'Index of the active step (0-based).',
		},
		{
			name: 'onStepClick',
			type: '(step: number) => void',
			description_es: 'Callback al hacer clic en un paso.',
			description_en: 'Callback when clicking a step.',
		},
		{
			name: 'orientation',
			type: '"horizontal" | "vertical"',
			defaultValue: '"horizontal"',
			description_es: 'Dirección del layout del stepper.',
			description_en: 'Layout direction of the stepper.',
		},
		{
			name: 'iconSize',
			type: 'number',
			defaultValue: '38',
			description_es: 'Tamaño en px de los iconos de paso.',
			description_en: 'Size in px of step icons.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño general del stepper.',
			description_en: 'Overall size of the stepper.',
		},
		{
			name: 'allowNextStepsSelect',
			type: 'boolean',
			description_es: 'Permite navegar a pasos futuros haciendo clic.',
			description_en: 'Allows clicking to navigate to future steps.',
		},
		{
			name: 'completedIcon',
			type: 'ReactNode',
			description_es: 'Icono global para pasos completados.',
			description_en: 'Global icon for completed steps.',
		},
	],
};

function StepperPreview({ v }: { v: ControlValues }) {
	const [active, setActive] = useState(1);
	return (
		<div className='flex flex-col gap-4 w-full max-w-lg'>
			<Stepper
				active={active}
				onStepClick={setActive}
				orientation={v.orientation as 'horizontal' | 'vertical'}
				allowNextStepsSelect={v.allowNextStepsSelect as boolean}>
				<StepperStep
					label='Información'
					description='Datos básicos'
				/>
				<StepperStep
					label='Cuenta'
					description='Credenciales'
				/>
				<StepperStep
					label='Confirmación'
					description='Revisar y enviar'
				/>
				<StepperCompleted>
					<p className='text-center text-sm text-on-surface/70 py-2'>
						¡Todo listo!
					</p>
				</StepperCompleted>
			</Stepper>
			<div className='flex gap-2'>
				<Button
					variant='outline'
					onClick={() => setActive((a) => Math.max(0, a - 1))}>
					Atrás
				</Button>
				<Button onClick={() => setActive((a) => Math.min(3, a + 1))}>
					{active === 3 ? 'Finalizar' : 'Siguiente'}
				</Button>
			</div>
		</div>
	);
}

function renderPreview(v: ControlValues) {
	return <StepperPreview v={v} />;
}

export default function StepperPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
