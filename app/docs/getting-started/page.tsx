import { CodeBlock } from '@/components/docs/CodeBlock';
import Link from 'next/link';

export default function GettingStartedPage() {
	return (
		<div className='mx-auto w-full max-w-3xl pb-20'>
			{/* Header */}
			<div className='mb-10'>
				<p className='mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
					Documentación
				</p>
				<h1 className='mb-4 text-3xl font-bold tracking-tight text-white'>
					Primeros pasos
				</h1>
				<p className='text-base leading-relaxed text-zinc-400'>
					Integra Kivora UI en tu proyecto en menos de 5 minutos. Una
					sola dependencia, API idéntica en React, React Native,
					Solid, Svelte y Vite.
				</p>
			</div>

			<div className='space-y-10'>
				{/* Step 1 */}
				<Step
					number={1}
					title='Instalar el paquete'>
					<p className='mb-4 text-sm text-zinc-400'>
						Instala el paquete principal. No requiere peer deps
						adicionales.
					</p>
					<CodeBlock
						code='npm install @kivora/react'
						language='cli'
					/>
					<p className='mt-3 text-xs text-zinc-500'>
						También disponible con pnpm, yarn o bun.
					</p>
				</Step>

				{/* Step 2 */}
				<Step
					number={2}
					title='Importar los estilos'>
					<p className='mb-4 text-sm text-zinc-400'>
						Añade esta línea una sola vez en el punto de entrada de
						tu aplicación.
					</p>
					<CodeBlock
						code={`// En app/layout.tsx, main.tsx o index.tsx\nimport '@kivora/react/styles.css';`}
					/>
				</Step>

				{/* Step 3 */}
				<Step
					number={3}
					title='Envolver la app con KivoraProvider'>
					<p className='mb-4 text-sm text-zinc-400'>
						<code className='rounded bg-brand/10 px-1.5 py-0.5 font-mono text-xs text-brand'>
							KivoraProvider
						</code>{' '}
						habilita modales imperativos, notificaciones globales y
						otros contextos.
					</p>
					<CodeBlock
						code={`import { KivoraProvider } from '@kivora/react';\n\nexport default function App({ children }) {\n  return (\n    <KivoraProvider>\n      {children}\n    </KivoraProvider>\n  );\n}`}
					/>
				</Step>

				{/* Step 4 */}
				<Step
					number={4}
					title='Usar tu primer componente'>
					<p className='mb-4 text-sm text-zinc-400'>
						Importa cualquier componente directamente y empieza a
						construir.
					</p>
					<CodeBlock
						code={`import { Button, TextInput } from '@kivora/react';\n\nexport function LoginForm() {\n  return (\n    <div className="flex flex-col gap-4">\n      <TextInput label="Email" placeholder="tu@email.com" />\n      <Button variant="solid">Entrar</Button>\n    </div>\n  );\n}`}
					/>
				</Step>
			</div>

			{/* CTA */}
			<div className='mt-12 flex flex-col gap-3 rounded-xl border border-white/8 bg-white/2 p-6 sm:flex-row sm:items-center sm:justify-between'>
				<div>
					<p className='text-sm font-semibold text-white'>
						¿Listo para explorar?
					</p>
					<p className='mt-0.5 text-xs text-zinc-500'>
						Descubre todos los componentes disponibles.
					</p>
				</div>
				<Link
					href='/docs/components'
					className='inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80'
					style={{
						background:
							'linear-gradient(135deg,#7c3aed 0%,#6366f1 100%)',
					}}>
					Ver componentes →
				</Link>
			</div>
		</div>
	);
}

function Step({
	number,
	title,
	children,
}: {
	number: number;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className='flex gap-5'>
			<div className='flex flex-col items-center'>
				<div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-sm font-bold text-brand'>
					{number}
				</div>
				<div className='mt-2 flex-1 w-px bg-white/6' />
			</div>
			<div className='pb-8 pt-0.5 min-w-0 flex-1'>
				<h2 className='mb-4 text-lg font-semibold text-white'>
					{title}
				</h2>
				{children}
			</div>
		</div>
	);
}
