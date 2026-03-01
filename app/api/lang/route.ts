import { isLocale } from '@/i18n/config';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const { lang } = await req.json();

	if (!isLocale(lang)) {
		return NextResponse.json({ ok: false }, { status: 400 });
	}

	const res = NextResponse.json({ ok: true });

	res.cookies.set('lang', lang, {
		path: '/',
		sameSite: 'lax',
		maxAge: 60 * 60 * 24 * 365,
	});

	return res;
}
