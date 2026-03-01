'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
	label: string;
	href: string;
}

export function DocsNavLinks({ links }: { links: NavLink[] }) {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				const active = pathname.startsWith(link.href);
				return (
					<Link
						key={link.href}
						href={link.href}
						className={[
							'rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors',
							active
								? 'bg-white/10 text-white'
								: 'text-white/60 hover:bg-white/8 hover:text-white',
						].join(' ')}>
						{link.label}
					</Link>
				);
			})}
		</>
	);
}
