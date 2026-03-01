import { CodeBlock } from '@/components/docs/CodeBlock';
import Link from 'next/link';

export default function InstallationPage() {
	return (
		<div className='mx-auto w-full max-w-3xl pb-20'>
			<div className='mb-10'>
				<p className='mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
					Primeros pasos
				</p>
				<h1 className='mb-4 text-3xl font-bold tracking-tight text-white'>
					Instalación
				</h1>
				<p className='text-base leading-relaxed text-zinc-400'>
					Kivora UI se distribuye como un único paquete npm.
					Compatible con Node.js 18+ y cualquier bundler moderno
					(Vite, Webpack, Turbopack, esbuild).
				</p>
			</div>

			<div className='space-y-10'>
				{/* Requisitos */}
				<section>
					<h2 className='mb-4 text-lg font-semibold text-white'>
						Requisitos
					</h2>
					<div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
						{[
							{ label: 'Node.js', value: '≥ 18.0' },
							{ label: 'React', value: '≥ 18.0' },
							{ label: 'TypeScript', value: '≥ 5.0 (opcional)' },
						].map((req) => (
							<div
								key={req.label}
								className='rounded-xl border border-white/8 bg-white/2 px-4 py-3'>
								<p className='text-xs font-medium text-zinc-500'>
									{req.label}
								</p>
								<p className='mt-1 text-sm font-semibold text-white'>
									{req.value}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* npm */}
				<section>
					<h2 className='mb-1 text-lg font-semibold text-white'>
						npm
					</h2>
					<p className='mb-4 text-sm text-zinc-400'>
						Recomendado para la mayoría de proyectos.
					</p>
					<CodeBlock
						code='npm install @kivora/react'
						language='cli'
					/>
				</section>

				{/* pnpm */}
				<section>
					<h2 className='mb-1 text-lg font-semibold text-white'>
						pnpm
					</h2>
					<p className='mb-4 text-sm text-zinc-400'>
						Ideal en monorepos o proyectos con workspace.
					</p>
					<CodeBlock
						code='pnpm add @kivora/react'
						language='cli'
					/>
				</section>

				{/* yarn */}
				<section>
					<h2 className='mb-1 text-lg font-semibold text-white'>
						yarn
					</h2>
					<CodeBlock
						code='yarn add @kivora/react'
						language='cli'
					/>
				</section>

				{/* bun */}
				<section>
					<h2 className='mb-1 text-lg font-semibold text-white'>
						bun
					</h2>
					<CodeBlock
						code='bun add @kivora/react'
						language='cli'
					/>
				</section>

				{/* Importar estilos */}
				<section>
					<h2 className='mb-1 text-lg font-semibold text-white'>
						Importar estilos
					</h2>
					<p className='mb-4 text-sm text-zinc-400'>
						Añade esta línea{' '}
						<strong className='text-white'>una sola vez</strong> en
						el punto de entrada de tu aplicación (por ejemplo{' '}
						<code className='rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-zinc-300'>
							main.tsx
						</code>
						,{' '}
						<code className='rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-zinc-300'>
							app/layout.tsx
						</code>{' '}
						o{' '}
						<code className='rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-zinc-300'>
							index.ts
						</code>
						).
					</p>
					<CodeBlock
						code={`import '@kivora/react/styles.css';`}
						language='ts'
					/>
				</section>

				{/* Verificar */}
				<section>
					<h2 className='mb-1 text-lg font-semibold text-white'>
						Verificar la instalación
					</h2>
					<p className='mb-4 text-sm text-zinc-400'>
						Renderiza un botón de prueba para confirmar que todo
						funciona correctamente.
					</p>
					<CodeBlock
						language='ts'
						code={`import { Button } from '@kivora/react';\n\nexport function App() {\n  return <Button>¡Funciona! 🎉</Button>;\n}`}
					/>
				</section>
			</div>

			{/* Nav footer */}
			<div className='mt-14 flex items-center justify-between border-t border-white/8 pt-6'>
				<Link
					href='/docs/getting-started'
					className='flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white'>
					<span>←</span>
					<span>Introducción</span>
				</Link>
				<Link
					href='/docs/getting-started/configuration'
					className='flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white'>
					<span>Configuración</span>
					<span>→</span>
				</Link>
			</div>
		</div>
	);
}
