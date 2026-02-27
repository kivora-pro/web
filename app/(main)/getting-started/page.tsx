'use client';

import Navbar from '@/src/components/Navbar';
import Link from 'next/link';
import React, { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface CodeBlockProps {
	code: string;
	language?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function useClipboardCopy(timeout = 2000) {
	const [copied, setCopied] = useState(false);
	const copy = (text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), timeout);
		});
	};
	return { copied, copy };
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function CopyBtn({ text }: { text: string }) {
	const { copied, copy } = useClipboardCopy();
	return (
		<button
			onClick={() => copy(text)}
			style={{
				position: 'absolute',
				top: '0.6rem',
				right: '0.6rem',
				background: copied
					? 'rgba(16,185,129,0.12)'
					: 'rgba(255,255,255,0.06)',
				border: copied
					? '1px solid rgba(16,185,129,0.3)'
					: '1px solid rgba(255,255,255,0.12)',
				color: copied ? '#6ee7b7' : '#a1a1aa',
				borderRadius: '0.4rem',
				padding: '0.2rem 0.55rem',
				fontSize: '0.7rem',
				fontFamily: 'var(--font-geist-mono, monospace)',
				cursor: 'pointer',
				transition: 'all 0.15s',
				letterSpacing: '0.02em',
			}}>
			{copied ? '✓ Copiado' : 'Copiar'}
		</button>
	);
}

function CodeBlock({ code, language = 'bash' }: CodeBlockProps) {
	return (
		<div
			style={{
				position: 'relative',
				background: '#09090b',
				border: '1px solid rgba(255,255,255,0.08)',
				borderRadius: '0.75rem',
				padding: '1rem 1.1rem',
				paddingRight: '5.5rem',
			}}>
			{language && (
				<span
					style={{
						position: 'absolute',
						top: '0.55rem',
						left: '1.1rem',
						fontSize: '0.65rem',
						color: '#52525b',
						fontFamily: 'var(--font-geist-mono, monospace)',
						textTransform: 'uppercase',
						letterSpacing: '0.06em',
					}}>
					{language}
				</span>
			)}
			<pre
				style={{
					margin: 0,
					marginTop: language ? '1rem' : 0,
					fontFamily: 'var(--font-geist-mono, monospace)',
					fontSize: '0.82rem',
					lineHeight: 1.6,
					color: '#e4e4e7',
					whiteSpace: 'pre',
					overflowX: 'auto',
				}}>
				<code>{code}</code>
			</pre>
			<CopyBtn text={code} />
		</div>
	);
}

function SectionAnchor({ id }: { id: string }) {
	return (
		<span
			id={id}
			style={{ scrollMarginTop: '5rem' }}
		/>
	);
}

function StepBadge({ n }: { n: number }) {
	return (
		<span
			style={{
				display: 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '1.6rem',
				height: '1.6rem',
				borderRadius: '50%',
				background: 'rgba(124,58,237,0.18)',
				border: '1px solid rgba(124,58,237,0.35)',
				color: '#a78bfa',
				fontSize: '0.7rem',
				fontWeight: 700,
				flexShrink: 0,
			}}>
			{n}
		</span>
	);
}

function SectionTitle({ children }: { children: React.ReactNode }) {
	return (
		<h2
			style={{
				fontSize: '1.25rem',
				fontWeight: 700,
				color: '#e4e4e7',
				margin: 0,
				letterSpacing: '-0.01em',
			}}>
			{children}
		</h2>
	);
}

function Divider() {
	return (
		<hr
			style={{
				border: 'none',
				borderTop: '1px solid rgba(255,255,255,0.06)',
			}}
		/>
	);
}

// ─── Package manager tabs ─────────────────────────────────────────────────────

const PKG_MANAGERS = [
	{ id: 'npm', cmd: 'npm install @kivora/react' },
	{ id: 'pnpm', cmd: 'pnpm add @kivora/react' },
	{ id: 'yarn', cmd: 'yarn add @kivora/react' },
	{ id: 'bun', cmd: 'bun add @kivora/react' },
] as const;

function InstallTabs() {
	const [active, setActive] = useState<string>('npm');
	const current = PKG_MANAGERS.find((p) => p.id === active)!;

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
			<div style={{ display: 'flex', gap: '0.25rem' }}>
				{PKG_MANAGERS.map((pm) => (
					<button
						key={pm.id}
						onClick={() => setActive(pm.id)}
						style={{
							padding: '0.3rem 0.8rem',
							borderRadius: '0.45rem',
							border:
								active === pm.id
									? '1px solid rgba(124,58,237,0.4)'
									: '1px solid rgba(255,255,255,0.08)',
							background:
								active === pm.id
									? 'rgba(124,58,237,0.12)'
									: 'transparent',
							color: active === pm.id ? '#c4b5fd' : '#71717a',
							fontSize: '0.75rem',
							fontWeight: 500,
							cursor: 'pointer',
							transition: 'all 0.15s',
							fontFamily: 'var(--font-geist-mono, monospace)',
						}}>
						{pm.id}
					</button>
				))}
			</div>
			<CodeBlock
				code={current.cmd}
				language='bash'
			/>
		</div>
	);
}

// ─── Sidebar nav ─────────────────────────────────────────────────────────────

const NAV_ITEMS = [
	{ id: 'intro', label: 'Introducción' },
	{ id: 'installation', label: 'Instalación' },
	{ id: 'setup', label: 'Configuración' },
	{ id: 'first-component', label: 'Primer componente' },
	{ id: 'typescript', label: 'TypeScript' },
	{ id: 'theming', label: 'Temas' },
	{ id: 'next-steps', label: 'Próximos pasos' },
] as const;

// ─── Main page ────────────────────────────────────────────────────────────────

export default function GettingStartedPage() {
	const [activeNav, setActiveNav] = useState('intro');

	const handleNavClick = (id: string) => {
		setActiveNav(id);
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<div
			style={{
				fontFamily: 'var(--font-geist-sans, sans-serif)',
				color: '#e4e4e7',
				minHeight: '100vh',
				background: '#09090b',
			}}>
			<Navbar />
			<div style={{ display: 'flex', paddingTop: '3.5rem' }}>
				{/* ── Sidebar ───────────────────────────────────────────────── */}
				<aside
					style={{
						width: '13rem',
						flexShrink: 0,
						position: 'sticky',
						top: '3.5rem',
						height: 'calc(100vh - 3.5rem)',
						overflowY: 'auto',
						padding: '2rem 0.75rem 2rem 1.5rem',
						borderRight: '1px solid rgba(255,255,255,0.06)',
						background: 'rgba(255,255,255,0.015)',
					}}>
					<p
						style={{
							fontSize: '0.65rem',
							fontWeight: 600,
							textTransform: 'uppercase',
							letterSpacing: '0.1em',
							color: '#52525b',
							marginBottom: '0.75rem',
							paddingLeft: '0.4rem',
						}}>
						En esta página
					</p>
					<nav
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0.15rem',
						}}>
						{NAV_ITEMS.map((item) => (
							<button
								key={item.id}
								onClick={() => handleNavClick(item.id)}
								style={{
									textAlign: 'left',
									background: 'transparent',
									border: 'none',
									cursor: 'pointer',
									padding: '0.35rem 0.6rem',
									borderRadius: '0.4rem',
									fontSize: '0.8rem',
									fontWeight:
										activeNav === item.id ? 600 : 400,
									color:
										activeNav === item.id
											? '#c4b5fd'
											: '#71717a',
									transition: 'all 0.15s',
									fontFamily: 'inherit',
								}}>
								{item.label}
							</button>
						))}
					</nav>

					{/* Back to docs */}
					<div style={{ marginTop: '2.5rem', paddingLeft: '0.4rem' }}>
						<Link
							href='/docs'
							style={{
								fontSize: '0.73rem',
								color: '#52525b',
								textDecoration: 'none',
								display: 'flex',
								alignItems: 'center',
								gap: '0.3rem',
								transition: 'color 0.15s',
							}}>
							← Volver a docs
						</Link>
					</div>
				</aside>

				{/* ── Content ───────────────────────────────────────────────── */}
				<main className='flex-1 min-w-0'>
					{/* ── Hero ─────────────────────────────────────────── */}
					<div className='px-6 md:px-10 pt-12 pb-8 border-b border-white/6'>
						<SectionAnchor id='intro' />
						<div
							className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5 border border-white/10 text-zinc-400'
							style={{ background: 'rgba(255,255,255,0.04)' }}>
							Get started
						</div>
						<h1 className='text-3xl md:text-4xl font-bold text-white mb-3 leading-tight'>
							Empezando con{' '}
							<span
								className='bg-clip-text text-transparent'
								style={{
									backgroundImage:
										'linear-gradient(135deg, #7c3aed, #06b6d4)',
								}}>
								Kivora UI
							</span>
						</h1>
						<p className='text-zinc-400 text-base max-w-2xl'>
							Kivora UI es una librería de componentes
							multi-framework con APIs idénticas entre React,
							Solid, Svelte y más. Esta guía cubre la instalación
							y los primeros pasos para React.
						</p>
					</div>
					<div className='px-6 md:px-10 pb-24'>
						{/* ── Installation ───────────────────────────────────── */}
						<section
							style={{
								marginTop: '2.5rem',
								display: 'flex',
								flexDirection: 'column',
								gap: '1rem',
							}}>
							<SectionAnchor id='installation' />
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '0.6rem',
								}}>
								<StepBadge n={1} />
								<SectionTitle>Instalación</SectionTitle>
							</div>

							<p
								style={{
									margin: 0,
									color: '#a1a1aa',
									fontSize: '0.9rem',
									lineHeight: 1.65,
								}}>
								Añade{' '}
								<code
									style={{
										fontFamily:
											'var(--font-geist-mono, monospace)',
										background: 'rgba(255,255,255,0.06)',
										border: '1px solid rgba(255,255,255,0.1)',
										borderRadius: '0.3rem',
										padding: '0.1em 0.4em',
										fontSize: '0.82em',
										color: '#c4b5fd',
									}}>
									@kivora/react
								</code>{' '}
								a tu proyecto usando tu gestor de paquetes
								preferido:
							</p>

							<InstallTabs />
						</section>

						<div style={{ marginTop: '2.5rem' }}>
							<Divider />
						</div>

						{/* ── Setup ────────────────────────────────────────────── */}
						<section
							style={{
								marginTop: '2.5rem',
								display: 'flex',
								flexDirection: 'column',
								gap: '1rem',
							}}>
							<SectionAnchor id='setup' />
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '0.6rem',
								}}>
								<StepBadge n={2} />
								<SectionTitle>Configuración</SectionTitle>
							</div>

							<p
								style={{
									margin: 0,
									color: '#a1a1aa',
									fontSize: '0.9rem',
									lineHeight: 1.65,
								}}>
								Importa la hoja de estilos de Kivora UI una sola
								vez en el punto de entrada de tu aplicación,
								antes de cualquier otro CSS global.
							</p>

							{/* Next.js layout */}
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: '0.4rem',
								}}>
								<p
									style={{
										margin: 0,
										fontSize: '0.78rem',
										color: '#52525b',
										fontFamily:
											'var(--font-geist-mono, monospace)',
									}}>
									app/layout.tsx — Next.js
								</p>
								<CodeBlock
									language='tsx'
									code={`// Importa los estilos base una sola vez
import '@kivora/react/styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}`}
								/>
							</div>

							{/* Vite */}
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: '0.4rem',
								}}>
								<p
									style={{
										margin: 0,
										fontSize: '0.78rem',
										color: '#52525b',
										fontFamily:
											'var(--font-geist-mono, monospace)',
									}}>
									main.tsx — Vite / CRA
								</p>
								<CodeBlock
									language='tsx'
									code={`import '@kivora/react/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}
								/>
							</div>

							<div
								style={{
									background: 'rgba(245,158,11,0.06)',
									border: '1px solid rgba(245,158,11,0.2)',
									borderRadius: '0.65rem',
									padding: '0.75rem 1rem',
									fontSize: '0.82rem',
									color: '#fcd34d',
									display: 'flex',
									gap: '0.6rem',
									alignItems: 'flex-start',
								}}>
								<span
									style={{
										flexShrink: 0,
										marginTop: '0.05rem',
									}}>
									⚠
								</span>
								<span>
									Sin la importación de estilos los
									componentes se renderizarán sin su
									apariencia correcta. Sólo necesitas
									importarlos una vez en toda la aplicación.
								</span>
							</div>
						</section>

						<div style={{ marginTop: '2.5rem' }}>
							<Divider />
						</div>

						{/* ── First component ──────────────────────────────────── */}
						<section
							style={{
								marginTop: '2.5rem',
								display: 'flex',
								flexDirection: 'column',
								gap: '1rem',
							}}>
							<SectionAnchor id='first-component' />
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '0.6rem',
								}}>
								<StepBadge n={3} />
								<SectionTitle>
									Tu primer componente
								</SectionTitle>
							</div>

							<p
								style={{
									margin: 0,
									color: '#a1a1aa',
									fontSize: '0.9rem',
									lineHeight: 1.65,
								}}>
								Con los estilos configurados, importa y usa
								cualquier componente directamente desde{' '}
								<code
									style={{
										fontFamily:
											'var(--font-geist-mono, monospace)',
										background: 'rgba(255,255,255,0.06)',
										border: '1px solid rgba(255,255,255,0.1)',
										borderRadius: '0.3rem',
										padding: '0.1em 0.4em',
										fontSize: '0.82em',
										color: '#c4b5fd',
									}}>
									@kivora/react
								</code>
								. No hay provider ni wrapper necesario.
							</p>

							<CodeBlock
								language='tsx'
								code={`import { Button, TextInput, Stack } from '@kivora/react';

export default function LoginForm() {
  return (
    <Stack gap="md" style={{ maxWidth: 320 }}>
      <TextInput
        label="Correo electrónico"
        placeholder="tu@email.com"
        type="email"
      />
      <TextInput
        label="Contraseña"
        placeholder="••••••••"
        type="password"
      />
      <Button variant="solid" fullWidth>
        Iniciar sesión
      </Button>
    </Stack>
  );
}`}
							/>

							{/* Live preview */}
							<div
								style={{
									background: 'rgba(255,255,255,0.025)',
									border: '1px solid rgba(255,255,255,0.07)',
									borderRadius: '0.75rem',
									padding: '1.5rem',
								}}>
								<p
									style={{
										margin: '0 0 1rem 0',
										fontSize: '0.7rem',
										color: '#52525b',
										textTransform: 'uppercase',
										letterSpacing: '0.08em',
										fontFamily:
											'var(--font-geist-mono, monospace)',
									}}>
									Vista previa
								</p>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										gap: '0.85rem',
										maxWidth: '20rem',
									}}>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '0.3rem',
										}}>
										<label
											style={{
												fontSize: '0.82rem',
												fontWeight: 500,
												color: '#d4d4d8',
											}}>
											Correo electrónico
										</label>
										<input
											type='email'
											placeholder='tu@email.com'
											style={{
												background:
													'rgba(255,255,255,0.05)',
												border: '1px solid rgba(255,255,255,0.12)',
												borderRadius: '0.5rem',
												padding: '0.5rem 0.75rem',
												color: '#e4e4e7',
												fontSize: '0.875rem',
												outline: 'none',
												width: '100%',
												boxSizing: 'border-box',
												fontFamily: 'inherit',
											}}
										/>
									</div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '0.3rem',
										}}>
										<label
											style={{
												fontSize: '0.82rem',
												fontWeight: 500,
												color: '#d4d4d8',
											}}>
											Contraseña
										</label>
										<input
											type='password'
											placeholder='••••••••'
											style={{
												background:
													'rgba(255,255,255,0.05)',
												border: '1px solid rgba(255,255,255,0.12)',
												borderRadius: '0.5rem',
												padding: '0.5rem 0.75rem',
												color: '#e4e4e7',
												fontSize: '0.875rem',
												outline: 'none',
												width: '100%',
												boxSizing: 'border-box',
												fontFamily: 'inherit',
											}}
										/>
									</div>
									<button
										style={{
											background: '#7c3aed',
											border: 'none',
											borderRadius: '0.5rem',
											color: 'white',
											fontWeight: 600,
											fontSize: '0.875rem',
											padding: '0.55rem 1rem',
											cursor: 'pointer',
											width: '100%',
											fontFamily: 'inherit',
										}}>
										Iniciar sesión
									</button>
								</div>
							</div>
						</section>

						<div style={{ marginTop: '2.5rem' }}>
							<Divider />
						</div>

						{/* ── TypeScript ───────────────────────────────────────── */}
						<section
							style={{
								marginTop: '2.5rem',
								display: 'flex',
								flexDirection: 'column',
								gap: '1rem',
							}}>
							<SectionAnchor id='typescript' />
							<SectionTitle>TypeScript</SectionTitle>

							<p
								style={{
									margin: 0,
									color: '#a1a1aa',
									fontSize: '0.9rem',
									lineHeight: 1.65,
								}}>
								Kivora UI está escrito completamente en
								TypeScript. Los tipos se exportan de forma
								automática junto a cada componente, no es
								necesario instalar paquetes adicionales de
								tipos.
							</p>

							<CodeBlock
								language='tsx'
								code={`import { Button } from '@kivora/react';
// ButtonProps está disponible implicitamente
import type { ButtonProps } from '@kivora/react';

function MyButton(props: ButtonProps) {
  return <Button variant="outline" {...props} />;
}`}
							/>

							<div
								style={{
									background: 'rgba(99,102,241,0.06)',
									border: '1px solid rgba(99,102,241,0.2)',
									borderRadius: '0.65rem',
									padding: '0.75rem 1rem',
									fontSize: '0.82rem',
									color: '#a5b4fc',
									display: 'flex',
									gap: '0.6rem',
									alignItems: 'flex-start',
								}}>
								<span
									style={{
										flexShrink: 0,
										marginTop: '0.05rem',
									}}>
									ℹ
								</span>
								<span>
									Todos los componentes extienden los
									atributos HTML nativos de su elemento raíz,
									por lo que obtienes autocompletado completo
									en tu editor.
								</span>
							</div>
						</section>

						<div style={{ marginTop: '2.5rem' }}>
							<Divider />
						</div>

						{/* ── Theming ──────────────────────────────────────────── */}
						<section
							style={{
								marginTop: '2.5rem',
								display: 'flex',
								flexDirection: 'column',
								gap: '1rem',
							}}>
							<SectionAnchor id='theming' />
							<SectionTitle>Temas y personalización</SectionTitle>

							<p
								style={{
									margin: 0,
									color: '#a1a1aa',
									fontSize: '0.9rem',
									lineHeight: 1.65,
								}}>
								Los estilos de Kivora UI se basan en variables
								CSS que puedes sobrescribir en tu hoja de
								estilos global. El color de acento por defecto
								es violeta; aquí puedes cambiarlo a cualquier
								color:
							</p>

							<CodeBlock
								language='css'
								code={`/* globals.css */
:root {
  --kv-color-brand-hue: 217;       /* tono HSL del color de acento */
  --kv-color-brand-saturation: 91%;
  --kv-radius-default: 0.5rem;     /* radio de borde global */
  --kv-font-sans: 'Inter', sans-serif;
}`}
							/>

							<p
								style={{
									margin: 0,
									color: '#a1a1aa',
									fontSize: '0.9rem',
									lineHeight: 1.65,
								}}>
								Para personalización avanzada consulta la página
								de{' '}
								<Link
									href='/theming'
									style={{
										color: '#a78bfa',
										textDecoration: 'none',
										borderBottom:
											'1px solid rgba(167,139,250,0.4)',
									}}>
									Temas
								</Link>
								.
							</p>
						</section>

						<div style={{ marginTop: '2.5rem' }}>
							<Divider />
						</div>

						{/* ── Next steps ───────────────────────────────────────── */}
						<section
							style={{
								marginTop: '2.5rem',
								display: 'flex',
								flexDirection: 'column',
								gap: '1.25rem',
							}}>
							<SectionAnchor id='next-steps' />
							<SectionTitle>Próximos pasos</SectionTitle>

							<div
								style={{
									display: 'grid',
									gridTemplateColumns:
										'repeat(auto-fill, minmax(210px, 1fr))',
									gap: '0.85rem',
								}}>
								{[
									{
										href: '/components',
										icon: '⬡',
										title: 'Componentes',
										desc: 'Explora todos los componentes con ejemplos interactivos.',
									},
									{
										href: '/theming',
										icon: '◑',
										title: 'Theming',
										desc: 'Personaliza tokens de diseño, radios y paleta de color.',
									},
									{
										href: '/hooks',
										icon: '⎇',
										title: 'Hooks',
										desc: 'useClipboard, useTheme, useMediaQuery y más utilidades.',
									},
									{
										href: '/docs',
										icon: '☰',
										title: 'Documentación',
										desc: 'Referencia completa de la API y guías avanzadas.',
									},
								].map((card) => (
									<Link
										key={card.href}
										href={card.href}
										style={{ textDecoration: 'none' }}>
										<div
											style={{
												background:
													'rgba(255,255,255,0.025)',
												border: '1px solid rgba(255,255,255,0.08)',
												borderRadius: '0.75rem',
												padding: '1.1rem',
												cursor: 'pointer',
												transition: 'all 0.15s',
												height: '100%',
												boxSizing: 'border-box',
											}}
											onMouseEnter={(e) => {
												(
													e.currentTarget as HTMLDivElement
												).style.background =
													'rgba(124,58,237,0.07)';
												(
													e.currentTarget as HTMLDivElement
												).style.borderColor =
													'rgba(124,58,237,0.25)';
											}}
											onMouseLeave={(e) => {
												(
													e.currentTarget as HTMLDivElement
												).style.background =
													'rgba(255,255,255,0.025)';
												(
													e.currentTarget as HTMLDivElement
												).style.borderColor =
													'rgba(255,255,255,0.08)';
											}}>
											<div
												style={{
													fontSize: '1.25rem',
													marginBottom: '0.5rem',
												}}>
												{card.icon}
											</div>
											<p
												style={{
													margin: '0 0 0.3rem 0',
													fontSize: '0.88rem',
													fontWeight: 600,
													color: '#e4e4e7',
												}}>
												{card.title}
											</p>
											<p
												style={{
													margin: 0,
													fontSize: '0.78rem',
													color: '#71717a',
													lineHeight: 1.5,
												}}>
												{card.desc}
											</p>
										</div>
									</Link>
								))}
							</div>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}
