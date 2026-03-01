interface BackgroundProps {
	animated?: boolean;
}

export function Background({ animated = true }: BackgroundProps) {
	return (
		<div
			aria-hidden
			className='pointer-events-none fixed inset-0 w-full h-full overflow-hidden'>
			{/* Base */}
			<div className='absolute inset-0 bg-[#07070f]' />

			{/* Focal 1 — violet, top-left */}
			<div
				className='absolute -left-32 -top-32 h-[640px] w-[640px] rounded-full'
				style={{
					background:
						'radial-gradient(circle, rgba(124,58,237,0.45) 0%, transparent 65%)',
					filter: 'blur(80px)',
					...(animated && {
						animation: 'focal-drift-1 18s ease-in-out infinite',
					}),
				}}
			/>

			{/* Focal 2 — indigo, bottom-right */}
			<div
				className='absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full'
				style={{
					background:
						'radial-gradient(circle, rgba(79,70,229,0.40) 0%, transparent 65%)',
					filter: 'blur(80px)',
					...(animated && {
						animation: 'focal-drift-2 22s ease-in-out infinite',
					}),
				}}
			/>

			{/* Focal 3 — violet-soft, top-right */}
			<div
				className='absolute -right-24 top-20 h-[420px] w-[420px] rounded-full'
				style={{
					background:
						'radial-gradient(circle, rgba(167,139,250,0.28) 0%, transparent 65%)',
					filter: 'blur(64px)',
					...(animated && {
						animation: 'focal-drift-3 15s ease-in-out infinite',
					}),
				}}
			/>

			{/* Focal 4 — indigo-cyan, bottom-left */}
			<div
				className='absolute bottom-12 left-12 h-[360px] w-[360px] rounded-full'
				style={{
					background:
						'radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 65%)',
					filter: 'blur(64px)',
					...(animated && {
						animation: 'focal-drift-4 20s ease-in-out infinite',
					}),
				}}
			/>
		</div>
	);
}
