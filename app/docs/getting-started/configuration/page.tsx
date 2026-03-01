import { CodeBlock } from '@/components/docs/CodeBlock';
import Link from 'next/link';

export default function ConfigurationPage() {
	return (
		<div className='mx-auto w-full max-w-3xl pb-20'>
			<div className='mb-10'>
				<p className='mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
					Primeros pasos
				</p>
				<h1 className='mb-4 text-3xl font-bold tracking-tight text-white'>
					Configuración
				</h1>
				<p className='text-base leading-relaxed text-zinc-400'>
					Configura Kivora UI para que se integre perfectamente con el
					design system de tu proyecto. Puedes sobreescribir tokens,
					activar el modo oscuro y personalizar el proveedor global.
				</p>
			</div>

			<div className='space-y-10'>
				{/* KivoraProvider */}
				<section>
					<h2 className='mb-1 text-lg font-semibold text-white'>
						KivoraProvider
					</h2>
					<p className='mb-4 text-sm text-zinc-400'>
						Envuelve tu aplicación con{' '}
						<code className='rounded bg-brand/10 px-1.5 py-0.5 font-mono text-xs text-brand'>
							KivoraProvider
						</code>{' '}
						para habilitar modales imperativos, notificaciones
						globales y el sistema de temas. Es obligatorio si usas
						cualquiera de estas funcionalidades.
					</p>
					<CodeBlock
						code={`// app/layout.tsx (Next.js App Router)\nimport { KivoraProvider } from '@kivora/react';\nimport '@kivora/react/styles.css';\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang="es">\n      <body>\n        <KivoraProvider>\n          {children}\n        </KivoraProvider>\n      </body>\n    </html>\n  );\n}`}
					/>
				</section>

				{/* Design tokens */}
				<section>
					<h2 className='mb-1 text-lg font-semibold text-white'>
						Tokens de diseño
					</h2>
					<p className='mb-4 text-sm text-zinc-400'>
						Kivora UI usa variables CSS como tokens. Puedes
						sobreescribirlas en tu hoja de estilos global para
						adaptar colores, tipografía y superficies a tu marca.
					</p>
					<CodeBlock
						language='css'
						code={`:root {\n  /* Color principal */\n  --color-brand:     #7c3aed;\n  --color-brand-50:  #f5f3ff;\n  --color-brand-100: #ede9fe;\n  --color-brand-200: #ddd6fe;\n  --color-brand-300: #c4b5fd;\n  --color-brand-400: #a78bfa;\n  --color-brand-500: #7c3aed;\n  --color-brand-600: #6d28d9;\n  --color-brand-700: #5b21b6;\n  --color-brand-800: #4c1d95;\n  --color-brand-900: #3b0764;\n\n  /* Superficies */\n  --color-surface:          #ffffff;\n  --color-surface-elevated: #f9fafb;\n  --color-on-surface:       #111827;\n\n  /* Neutros */\n  --color-muted:  #6b7280;\n  --color-border: rgba(0, 0, 0, 0.1);\n}`}
					/>
				</section>

				{/* Dark mode */}
				<section>
					<h2 className='mb-1 text-lg font-semibold text-white'>
						Modo oscuro
					</h2>
					<p className='mb-4 text-sm text-zinc-400'>
						El modo oscuro se activa añadiendo la clase{' '}
						<code className='rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-zinc-300'>
							dark
						</code>{' '}
						al elemento raíz{' '}
						<code className='rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-zinc-300'>
							{'<html>'}
						</code>
						. Sobreescribe los tokens dentro de{' '}
						<code className='rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-zinc-300'>
							.dark
						</code>{' '}
						para definir la paleta oscura.
					</p>
					<CodeBlock
						language='css'
						code={`.dark {\n  --color-surface:          #07070f;\n  --color-surface-elevated: #111120;\n  --color-on-surface:       #e4e4e7;\n  --color-muted:            #71717a;\n  --color-border:           rgba(255, 255, 255, 0.1);\n}`}
					/>
				</section>

				{/* Tailwind */}
				<section>
					<h2 className='mb-1 text-lg font-semibold text-white'>
						Integración con Tailwind CSS
					</h2>
					<p className='mb-4 text-sm text-zinc-400'>
						Si usas Tailwind CSS v4, añade los tokens como colores
						de tema para poder usarlos con clases utilitarias{' '}
						<code className='rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-zinc-300'>
							text-brand
						</code>
						,{' '}
						<code className='rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-zinc-300'>
							bg-surface
						</code>
						, etc.
					</p>
					<CodeBlock
						language='css'
						code={`/* globals.css */\n@import 'tailwindcss';\n\n@theme inline {\n  --color-brand:   var(--color-brand);\n  --color-surface: var(--color-surface);\n  --color-muted:   var(--color-muted);\n  --color-border:  var(--color-border);\n}`}
					/>
				</section>

				{/* TypeScript */}
				<section>
					<h2 className='mb-1 text-lg font-semibold text-white'>
						TypeScript
					</h2>
					<p className='mb-4 text-sm text-zinc-400'>
						Todas las props están completamente tipadas y
						exportadas. No necesitas ninguna configuración
						adicional; los tipos se incluyen en el paquete.
					</p>
					<CodeBlock
						code={`import type { ButtonProps, ButtonVariant, ButtonSize } from '@kivora/react';\n\nfunction MyButton({ variant }: { variant: ButtonVariant }) {\n  return <Button variant={variant}>Acción</Button>;\n}`}
					/>
				</section>
			</div>

			{/* Nav footer */}
			<div className='mt-14 flex items-center justify-between border-t border-white/8 pt-6'>
				<Link
					href='/docs/getting-started/installation'
					className='flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white'>
					<span>←</span>
					<span>Instalación</span>
				</Link>
				<Link
					href='/docs/components'
					className='flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white'>
					<span>Componentes</span>
					<span>→</span>
				</Link>
			</div>
		</div>
	);
}
