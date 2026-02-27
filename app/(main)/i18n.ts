'use client';

import { startTransition, useEffect, useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type Locale = 'en' | 'es';

export interface Translation {
	nav: {
		docs: string;
		components: string;
		roadmap: string;
		getStarted: string;
	};
	slideLabels: [string, string, string, string, string];
	scroll: string;
	hero: {
		badge: string;
		h1Line1: string;
		h1Line2: string;
		desc: string;
		ctaPrimary: string;
		ctaSecondary: string;
	};
	browser: {
		components: string;
		forms: string;
		overlay: string;
		preview: string;
		code: string;
		title: string;
	};
	useCases: {
		label: string;
		title: string;
		subtitle: string;
		items: Array<{ title: string; desc: string }>;
	};
	ecosystem: {
		label: string;
		title: string;
		subtitle: string;
		install: string;
		highlights: string;
		frameworks: Array<{
			tagline: string;
			features: [string, string, string, string];
		}>;
	};
	dx: {
		label: string;
		title: string;
		titleHighlight: string;
		subtitle: string;
		features: Array<{ title: string; desc: string }>;
	};
	getStarted: {
		label: string;
		title: string;
		titleHighlight: string;
		subtitle: string;
		steps: Array<{ title: string; note: string }>;
		links: [string, string, string, string, string, string];
		copyHint: string;
		copied: string;
		readDocs: string;
	};
}

// ─────────────────────────────────────────────────────────────────────────────
// English
// ─────────────────────────────────────────────────────────────────────────────

const en: Translation = {
	nav: {
		docs: 'Docs',
		components: 'Components',
		roadmap: 'Roadmap',
		getStarted: 'Get Started',
	},
	slideLabels: ['Home', 'Use Cases', 'Ecosystem', 'Dev XP', 'Get Started'],
	scroll: 'scroll',
	hero: {
		badge: 'Multi-framework · Open Source · v1.0 beta',
		h1Line1: 'One library.',
		h1Line2: 'Every framework.',
		desc: 'Kivora UI is the first truly multi-framework component library. Write once, ship to React, React Native, Solid, Svelte and Vite — identical APIs, perfect accessibility.',
		ctaPrimary: 'Get Started →',
		ctaSecondary: 'Browse Components',
	},
	browser: {
		components: 'Components',
		forms: 'Forms',
		overlay: 'Overlay',
		preview: 'Preview',
		code: 'Code',
		title: 'kivora ui — component explorer',
	},
	useCases: {
		label: 'Use Cases',
		title: 'Built for every product.',
		subtitle:
			'From streaming platforms to enterprise dashboards, Kivora adapts to your domain without compromise.',
		items: [
			{
				title: 'OTT & Streaming',
				desc: 'Media players, content grids, paywall flows — pixel-perfect from 4K TV to mobile.',
			},
			{
				title: 'CMS & Editorial',
				desc: 'Rich-text editors, media managers, and publishing workflows built for content teams.',
			},
			{
				title: 'E-Commerce',
				desc: 'Product listings, shopping carts, checkout and review systems optimised to convert.',
			},
			{
				title: 'Analytics Dashboard',
				desc: 'Data tables, chart wrappers, KPI cards and filter panels for data-dense enterprise apps.',
			},
			{
				title: 'Mobile-First Apps',
				desc: 'The same API on React Native: bottom tabs, drawers, lists and gestures that feel native.',
			},
			{
				title: 'Enterprise SaaS',
				desc: 'Complex forms, permission-aware components and audit logs for large organisations.',
			},
		],
	},
	ecosystem: {
		label: 'Ecosystem',
		title: 'Native to your stack.',
		subtitle:
			'The same component. The same API. A first-class citizen in every framework.',
		install: 'Install',
		highlights: 'Highlights',
		frameworks: [
			{
				tagline: 'The OG. Hooks, Suspense and RSC.',
				features: [
					'Server Components ready',
					'Suspense streaming',
					'Concurrent transitions',
					'DevTools integration',
				],
			},
			{
				tagline: 'Native feel, web-like workflow.',
				features: [
					'Animated.Value wrappers',
					'Expo compatible',
					'Platform-adaptive styles',
					'Accessibility labels auto-applied',
				],
			},
			{
				tagline: 'Fine-grained reactivity. Zero VDOM.',
				features: [
					'Signal-aware props',
					'createEffect integration',
					'Minimal re-renders',
					'SSR with SolidStart',
				],
			},
			{
				tagline: 'Compiled. Tiny bundles. Pure magic.',
				features: [
					'Svelte stores',
					'Slot composition',
					'No runtime overhead',
					'Svelte 5 Runes ready',
				],
			},
			{
				tagline: 'Framework-agnostic. Dev-first.',
				features: [
					'Auto-import plugin',
					'Design token HMR',
					'Bundle analyser',
					'Works with any framework',
				],
			},
		],
	},
	dx: {
		label: 'Developer Experience',
		title: 'Built with devs',
		titleHighlight: 'in mind.',
		subtitle:
			'From zero-config setup to advanced customisation, DX is a feature — not an afterthought.',
		features: [
			{
				title: 'TypeScript Native',
				desc: 'Every prop, variant, and event is strictly typed. Autocomplete that actually knows your design system.',
			},
			{
				title: 'Accessibility First',
				desc: 'WAI-ARIA patterns baked in. Keyboard navigation, screen-reader support and focus management — done.',
			},
			{
				title: 'Design Token Theming',
				desc: 'Swap themes at runtime. CSS variables power everything: colors, spacing, radius, shadows.',
			},
			{
				title: 'Tree-Shakeable',
				desc: 'Import only what you use. Each component is independently bundled with zero side effects.',
			},
			{
				title: 'HMR Design Tokens',
				desc: 'Change a token file and every component updates instantly across ALL frameworks — no page reload.',
			},
			{
				title: 'Testing Utilities',
				desc: 'Pre-built helpers for React Testing Library, Playwright, Vitest and Storybook interaction tests.',
			},
		],
	},
	getStarted: {
		label: 'Ready to ship?',
		title: 'Up in',
		titleHighlight: '3 steps.',
		subtitle:
			'No boilerplate, no ceremony. Beautiful, accessible components from the very first line of code.',
		steps: [
			{ title: 'Install', note: 'or solid, svelte, react-native' },
			{ title: 'Import', note: 'styles once · components anywhere' },
			{ title: 'Ship', note: 'accessible by default' },
		],
		links: [
			'Documentation',
			'GitHub',
			'Discord',
			'Figma Kit',
			'Storybook',
			'Changelog',
		],
		copyHint: '⌘C',
		copied: '✓ copied',
		readDocs: 'Read the docs →',
	},
};

// ─────────────────────────────────────────────────────────────────────────────
// Spanish
// ─────────────────────────────────────────────────────────────────────────────

const es: Translation = {
	nav: {
		docs: 'Docs',
		components: 'Componentes',
		roadmap: 'Roadmap',
		getStarted: 'Empezar',
	},
	slideLabels: ['Inicio', 'Casos de uso', 'Ecosistema', 'Dev XP', 'Empezar'],
	scroll: 'desplaza',
	hero: {
		badge: 'Multi-framework · Open Source · v1.0 beta',
		h1Line1: 'Una librería.',
		h1Line2: 'Cualquier framework.',
		desc: 'Kivora UI es la primera librería de componentes verdaderamente multi-framework. Escribe una vez, publica en React, React Native, Solid, Svelte y Vite — APIs idénticas, accesibilidad perfecta.',
		ctaPrimary: 'Empezar →',
		ctaSecondary: 'Ver componentes',
	},
	browser: {
		components: 'Componentes',
		forms: 'Formularios',
		overlay: 'Superposición',
		preview: 'Vista previa',
		code: 'Código',
		title: 'kivora ui — explorador de componentes',
	},
	useCases: {
		label: 'Casos de uso',
		title: 'Creado para cada producto.',
		subtitle:
			'Desde plataformas de streaming hasta paneles empresariales, Kivora se adapta a tu dominio sin concesiones.',
		items: [
			{
				title: 'OTT & Streaming',
				desc: 'Reproductores, grillas de contenido y flujos de pago — perfecto desde TV 4K hasta móvil.',
			},
			{
				title: 'CMS & Editorial',
				desc: 'Editores de texto enriquecido, gestores de medios y flujos de publicación para equipos de contenido.',
			},
			{
				title: 'E-Commerce',
				desc: 'Listados de productos, carritos, checkout y reseñas optimizados para la conversión.',
			},
			{
				title: 'Panel de Analíticas',
				desc: 'Tablas de datos, gráficos, tarjetas KPI y paneles de filtros para apps empresariales.',
			},
			{
				title: 'Apps Mobile-First',
				desc: 'La misma API en React Native: tabs, cajones, listas y gestos con sensación nativa.',
			},
			{
				title: 'SaaS Empresarial',
				desc: 'Formularios complejos, componentes con permisos y registros de auditoría para grandes organizaciones.',
			},
		],
	},
	ecosystem: {
		label: 'Ecosistema',
		title: 'Nativo en tu stack.',
		subtitle:
			'El mismo componente. La misma API. Un ciudadano de primera clase en cada framework.',
		install: 'Instalar',
		highlights: 'Destacados',
		frameworks: [
			{
				tagline: 'El OG. Hooks, Suspense y RSC.',
				features: [
					'Listo para Server Components',
					'Streaming con Suspense',
					'Transiciones concurrentes',
					'Integración con DevTools',
				],
			},
			{
				tagline: 'Sensación nativa, flujo web.',
				features: [
					'Wrappers de Animated.Value',
					'Compatible con Expo',
					'Estilos adaptativos por plataforma',
					'Labels de accesibilidad automáticos',
				],
			},
			{
				tagline: 'Reactividad fina. Sin VDOM.',
				features: [
					'Props conscientes de señales',
					'Integración con createEffect',
					'Re-renders mínimos',
					'SSR con SolidStart',
				],
			},
			{
				tagline: 'Compilado. Bundles pequeños. Magia pura.',
				features: [
					'Svelte stores',
					'Composición con slots',
					'Sin overhead en runtime',
					'Listo para Svelte 5 Runes',
				],
			},
			{
				tagline: 'Agnóstico de framework. Dev-first.',
				features: [
					'Plugin de auto-import',
					'HMR de design tokens',
					'Analizador de bundle',
					'Funciona con cualquier framework',
				],
			},
		],
	},
	dx: {
		label: 'Experiencia de desarrollo',
		title: 'Creado pensando',
		titleHighlight: 'en los devs.',
		subtitle:
			'Desde configuración cero hasta personalización avanzada, la DX es una función — no un añadido.',
		features: [
			{
				title: 'TypeScript nativo',
				desc: 'Cada prop, variante y evento está tipado estrictamente. Autocompletado que conoce tu sistema de diseño.',
			},
			{
				title: 'Accesibilidad primero',
				desc: 'Patrones WAI-ARIA integrados. Navegación por teclado, soporte para lectores de pantalla y gestión del foco — resuelto.',
			},
			{
				title: 'Theming con tokens',
				desc: 'Cambia temas en tiempo de ejecución. Variables CSS controlan colores, espaciado, radio y sombras.',
			},
			{
				title: 'Tree-Shakeable',
				desc: 'Importa solo lo que usas. Cada componente se empaqueta de forma independiente, sin efectos secundarios.',
			},
			{
				title: 'HMR de Design Tokens',
				desc: 'Cambia un archivo de tokens y todos los componentes se actualizan instantáneamente en TODOS los frameworks.',
			},
			{
				title: 'Utilidades de testing',
				desc: 'Helpers para React Testing Library, Playwright, Vitest y tests de interacción en Storybook.',
			},
		],
	},
	getStarted: {
		label: '¿Listo para publicar?',
		title: 'En marcha en',
		titleHighlight: '3 pasos.',
		subtitle:
			'Sin boilerplate, sin ceremonia. Componentes bellos y accesibles desde la primera línea de código.',
		steps: [
			{ title: 'Instalar', note: 'o solid, svelte, react-native' },
			{
				title: 'Importar',
				note: 'estilos una vez · componentes en cualquier lugar',
			},
			{ title: 'Publicar', note: 'accesible por defecto' },
		],
		links: [
			'Documentación',
			'GitHub',
			'Discord',
			'Kit Figma',
			'Storybook',
			'Novedades',
		],
		copyHint: '⌘C',
		copied: '✓ copiado',
		readDocs: 'Leer la documentación →',
	},
};

// ─────────────────────────────────────────────────────────────────────────────
// Registry & hook
// ─────────────────────────────────────────────────────────────────────────────

export const translations: Record<Locale, Translation> = { en, es };

function detectLocale(): Locale {
	if (typeof navigator === 'undefined') return 'en';
	const lang = navigator.language?.slice(0, 2).toLowerCase();
	return lang === 'es' ? 'es' : 'en';
}

export function useLocale() {
	const [locale, setLocaleState] = useState<Locale>('en');

	useEffect(() => {
		const stored = localStorage.getItem('kivora-locale') as Locale | null;
		startTransition(() => {
			setLocaleState(stored ?? detectLocale());
		});
	}, []);

	const setLocale = (next: Locale) => {
		setLocaleState(next);
		localStorage.setItem('kivora-locale', next);
	};

	return { locale, setLocale, t: translations[locale] };
}
