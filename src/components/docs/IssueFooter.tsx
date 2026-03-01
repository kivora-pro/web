import { GITHUB_REPO } from '@/lib/constants';
import { buildIssueUrl } from '@/lib/issue';
import { useTranslations } from 'next-intl';

interface IssueFooterProps {
	section: string;
	component?: string;
}

export function IssueFooter({ section, component }: IssueFooterProps) {
	const t = useTranslations('docs');
	const bugUrl = buildIssueUrl(section, component, 'bug');
	const featureUrl = buildIssueUrl(section, component, 'feature');
	const target = component ?? t('issueDefaultTarget');

	return (
		<div className='relative mt-16 overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/3 to-white/1'>
			{/* Decorative glow */}
			<div
				aria-hidden='true'
				className='pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-3xl'
				style={{
					background:
						'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
				}}
			/>

			<div className='relative px-6 py-6 sm:px-8'>
				{/* Header */}
				<div className='flex items-start gap-4'>
					<div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10'>
						<svg
							className='h-4 w-4 text-violet-400'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth={2}>
							<circle
								cx='12'
								cy='12'
								r='10'
							/>
							<line
								x1='12'
								y1='8'
								x2='12'
								y2='12'
							/>
							<line
								x1='12'
								y1='16'
								x2='12.01'
								y2='16'
							/>
						</svg>
					</div>
					<div>
						<p className='text-sm font-semibold text-white'>
							{t('issueHeading')}
						</p>
						<p className='mt-1 text-xs leading-relaxed text-zinc-500'>
							{t.rich('issueBody', {
								target,
								highlight: (chunks) => (
									<span className='font-medium text-zinc-400'>
										{chunks}
									</span>
								),
							})}
						</p>
					</div>
				</div>

				{/* Divider */}
				<div className='my-5 h-px bg-white/6' />

				{/* Actions */}
				<div className='flex flex-wrap gap-2'>
					<a
						href={bugUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/8 px-4 py-2 text-xs font-medium text-red-400 transition-all hover:border-red-500/35 hover:bg-red-500/15 hover:text-red-300'>
						<svg
							className='h-3.5 w-3.5'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z'
							/>
						</svg>
						{t('issueBugBtn')}
					</a>
					<a
						href={featureUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 rounded-lg border border-violet-500/20 bg-violet-500/8 px-4 py-2 text-xs font-medium text-violet-400 transition-all hover:border-violet-500/35 hover:bg-violet-500/15 hover:text-violet-300'>
						<svg
							className='h-3.5 w-3.5'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M13 10V3L4 14h7v7l9-11h-7z'
							/>
						</svg>
						{t('issueFeatureBtn')}
					</a>
					<a
						href={GITHUB_REPO}
						target='_blank'
						rel='noopener noreferrer'
						className='ml-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs text-zinc-600 transition-colors hover:text-zinc-400'>
						<svg
							className='h-3.5 w-3.5'
							viewBox='0 0 24 24'
							fill='currentColor'>
							<path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
						</svg>
						{t('issueGithub')}
					</a>
				</div>
			</div>
		</div>
	);
}
