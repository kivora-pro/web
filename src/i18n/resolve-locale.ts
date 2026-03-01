import { cookies, headers } from 'next/headers';
import { defaultLocale, isLocale, type Locale } from './config';

function detectFromHeader(header: string | null): Locale {
	if (!header) return defaultLocale;

	const first = header.split(',')[0]?.toLowerCase();
	const base = first?.split('-')[0];

	return isLocale(base) ? base : defaultLocale;
}

export async function resolveLocale(): Promise<Locale> {
	const cookieStore = await cookies();
	const cookieLang = cookieStore.get('lang')?.value;
	if (isLocale(cookieLang)) return cookieLang;

	const headersList = await headers();
	const headerLang = headersList.get('accept-language');
	return detectFromHeader(headerLang);
}
