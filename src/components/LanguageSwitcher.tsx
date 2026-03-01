'use client';

import { useRouter } from 'next/navigation';

export function LanguageSwitcher() {
	const router = useRouter();

	const setLang = async (lang: 'es' | 'en') => {
		await fetch('/api/lang', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ lang }),
		});

		router.refresh();
	};

	return (
		<div>
			<button onClick={() => setLang('es')}>ES</button>
			<button onClick={() => setLang('en')}>EN</button>
		</div>
	);
}
