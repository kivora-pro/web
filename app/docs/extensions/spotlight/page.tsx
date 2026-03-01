'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'SpotlightProvider',
	description_es:
		'Paleta de comandos / búsqueda rápida estilo VS Code. Envuelve la aplicación con SpotlightProvider y controla la apertura mediante el objeto imperativo spotlight.',
	description_en:
		'Command palette / quick-search overlay in VS Code style. Wrap the app with SpotlightProvider and control it imperatively with the spotlight object.',
	usage: `import { SpotlightProvider, spotlight } from '@kivora/react';

// 1. Wrap your app (e.g. in layout.tsx)
export default function RootLayout({ children }) {
  return (
    <SpotlightProvider
      actions={[
        {
          id: 'home',
          label: 'Inicio',
          description: 'Ir a la página de inicio',
          onClick: () => router.push('/'),
        },
        {
          id: 'docs',
          label: 'Documentación',
          keywords: ['docs', 'guía'],
          onClick: () => router.push('/docs'),
        },
      ]}
      shortcut="mod+k"
    >
      {children}
    </SpotlightProvider>
  );
}

// 2. Open programmatically from anywhere
spotlight.open();
spotlight.close();
spotlight.toggle();

// 3. Or with a button
<Button onClick={() => spotlight.open()}>Buscar</Button>`,
	params: [
		{
			name: 'actions',
			type: 'SpotlightAction[]',
			required: true,
			description_es: 'Lista de acciones disponibles en el spotlight.',
			description_en: 'List of actions available in the spotlight.',
		},
		{
			name: 'searchProps',
			type: 'React.InputHTMLAttributes<HTMLInputElement>',
			description_es: 'Props adicionales para el input de búsqueda.',
			description_en: 'Additional props for the search input.',
		},
		{
			name: 'limit',
			type: 'number',
			defaultValue: '10',
			description_es:
				'Número máximo de resultados a mostrar al mismo tiempo.',
			description_en: 'Maximum number of results to display at once.',
		},
		{
			name: 'nothingFound',
			type: 'React.ReactNode',
			defaultValue: '"Nothing found"',
			description_es: 'Contenido mostrado cuando no hay resultados.',
			description_en: 'Content shown when no results are found.',
		},
		{
			name: 'filter',
			type: '(query: string, action: SpotlightAction) => boolean',
			description_es:
				'Función de filtrado personalizada para las acciones.',
			description_en: 'Custom filter function for actions.',
		},
		{
			name: 'shortcut',
			type: 'string',
			defaultValue: '"mod+k"',
			description_es:
				'Atajo de teclado que abre el spotlight (mod = Ctrl en Windows/Linux, Cmd en Mac).',
			description_en:
				'Keyboard shortcut to open spotlight (mod = Ctrl on Windows/Linux, Cmd on Mac).',
		},
	],
	returns: [
		{
			name: 'spotlight.open',
			type: '() => void',
			description_es: 'Abre el spotlight.',
			description_en: 'Opens the spotlight.',
		},
		{
			name: 'spotlight.close',
			type: '() => void',
			description_es: 'Cierra el spotlight.',
			description_en: 'Closes the spotlight.',
		},
		{
			name: 'spotlight.toggle',
			type: '() => void',
			description_es: 'Alterna el estado abierto/cerrado del spotlight.',
			description_en: 'Toggles the spotlight open/closed state.',
		},
		{
			name: 'spotlight.subscribe',
			type: '(fn: (opened: boolean) => void) => () => void',
			description_es:
				'Suscribe un listener al estado del spotlight. Devuelve función de desuscripción.',
			description_en:
				'Subscribes a listener to the spotlight state. Returns an unsubscribe function.',
		},
	],
};

export default function SpotlightPage() {
	return <HookDoc config={config} />;
}
