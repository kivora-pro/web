'use client';

import {
Avatar,
Badge,
Card,
Group,
Kbd,
Progress,
RingProgress,
Stack,
Switch,
Text,
} from '@kivora/react';

/* --- Layout ------------------------------------------------- */
const COL  = '13rem';
const CGAP = '1rem';
const RGAP = '1rem';
const R1   = '7rem';
const R2   = '9.5rem';
const R3   = '8rem';

/* --- Cards -------------------------------------------------- */

/** Span 2, Fila 1: instalacion + ecosistema */
function CardInstall() {
return (
<Card withBorder radius='xl' padding='1.1rem'
className='h-full border-white/10 bg-[#07071a]/90 backdrop-blur-xl'>
<Stack gap='sm' style={{ height: '100%', justifyContent: 'space-between' }}>
<div className='flex items-center gap-2 rounded-xl border border-violet-500/20 bg-violet-500/8 px-3 py-2 font-mono'>
<Text size='xs' c='#a78bfa' span fw={700}>$</Text>
<Text size='xs' c='#d4d4d8' span>npm i @kivora/react</Text>
</div>
<Group gap='xs'>
{['React 18+', 'Next.js', 'Vite', 'TypeScript'].map((t) => (
<Badge key={t} variant='light' size='xs'>{t}</Badge>
))}
</Group>
</Stack>
</Card>
);
}

/** Span 1, Fila 1: RingProgress TypeScript */
function CardRing() {
return (
<Card withBorder radius='xl' padding='1.1rem'
className='h-full border-white/10 bg-[#07071a]/90 backdrop-blur-xl'>
<Group gap='md' style={{ height: '100%', alignItems: 'center' }}>
<RingProgress
size={64} thickness={7} roundCaps
rootColor='rgba(255,255,255,0.06)'
sections={[{ value: 100, color: '#818cf8' }]}
label={
<Text size='xs' c='#818cf8' fw={800} style={{ textAlign: 'center', lineHeight: 1 }}>
100%
</Text>
}
/>
<Stack gap={2}>
<Text size='xs' fw={700} c='#e4e4e7'>TypeScript</Text>
<Text size='xs' c='#52525b'>100% tipado</Text>
<Badge variant='light' size='xs' style={{ marginTop: 2 }}>strict mode</Badge>
</Stack>
</Group>
</Card>
);
}

/** Span 1, Fila 2: equipo */
function CardTeam() {
const users = [
{ i: 'AK', c: '#818cf8' },
{ i: 'MR', c: '#34d399' },
{ i: 'LP', c: '#f472b6' },
{ i: 'JD', c: '#fb923c' },
];
return (
<Card withBorder radius='xl' padding='1.1rem'
className='h-full border-white/10 bg-[#07071a]/90 backdrop-blur-xl'>
<Stack gap='sm' style={{ height: '100%', justifyContent: 'space-between' }}>
<Text size='xs' c='#71717a' fw={500}>Equipo</Text>
<Group gap='xs'>
{users.map(({ i, c }) => (
<Avatar key={i} size='md' radius='xl'
style={{ background: `${c}18`, border: `1.5px solid ${c}45`, color: c, fontWeight: 700, fontSize: 12 }}>
{i}
</Avatar>
))}
</Group>
<Group gap='xs'>
<span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
<Text size='xs' c='#52525b'>4 activos ahora</Text>
</Group>
</Stack>
</Card>
);
}

/** Span 2, Fila 2: Switch toggles */
function CardFeatures() {
const items = [
{ label: 'Modo oscuro', on: true },
{ label: 'Animaciones', on: true },
{ label: 'RTL support', on: false },
];
return (
<Card withBorder radius='xl' padding='1.1rem'
className='h-full border-white/10 bg-[#07071a]/90 backdrop-blur-xl'>
<Stack gap='sm' style={{ height: '100%', justifyContent: 'space-between' }}>
<Text size='xs' c='#71717a' fw={500}>Caracteristicas</Text>
<Stack gap='xs'>
{items.map(({ label, on }) => (
<Group key={label} gap='sm' style={{ justifyContent: 'space-between' }}>
<Text size='xs' c={on ? '#d4d4d8' : '#52525b'}>{label}</Text>
<Switch size='xs' defaultChecked={on} readOnly />
</Group>
))}
</Stack>
</Stack>
</Card>
);
}

/** Span 1, Fila 3: Badge variants */
function CardBadges() {
return (
<Card withBorder radius='xl' padding='1.1rem'
className='h-full border-white/10 bg-[#07071a]/90 backdrop-blur-xl'>
<Stack gap='sm' style={{ height: '100%', justifyContent: 'space-between' }}>
<Text size='xs' c='#71717a' fw={500}>Badge</Text>
<Group gap='xs' style={{ flexWrap: 'wrap' }}>
<Badge variant='filled'  size='sm'>filled</Badge>
<Badge variant='light'   size='sm'>light</Badge>
<Badge variant='outline' size='sm'>outline</Badge>
<Badge variant='dot'     size='sm'>dot</Badge>
</Group>
</Stack>
</Card>
);
}

/** Span 1, Fila 3: Kbd shortcuts */
function CardKbd() {
const shortcuts = [
{ keys: ['Cmd', 'K'], label: 'Spotlight' },
{ keys: ['Cmd', '/'], label: 'Comandos' },
];
return (
<Card withBorder radius='xl' padding='1.1rem'
className='h-full border-white/10 bg-[#07071a]/90 backdrop-blur-xl'>
<Stack gap='sm' style={{ height: '100%', justifyContent: 'space-between' }}>
<Text size='xs' c='#71717a' fw={500}>Kbd</Text>
<Stack gap='xs'>
{shortcuts.map(({ keys, label }) => (
<Group key={label} gap='sm' style={{ justifyContent: 'space-between' }}>
<Group gap='xs'>
{keys.map((k) => <Kbd key={k} size='xs'>{k}</Kbd>)}
</Group>
<Text size='xs' c='#52525b'>{label}</Text>
</Group>
))}
</Stack>
</Stack>
</Card>
);
}

/** Span 1, Fila 3: Progress */
function CardProgress() {
return (
<Card withBorder radius='xl' padding='1.1rem'
className='h-full border-white/10 bg-[#07071a]/90 backdrop-blur-xl'>
<Stack gap='sm' style={{ height: '100%', justifyContent: 'space-between' }}>
<Text size='xs' c='#71717a' fw={500}>Progress</Text>
<Stack gap='sm'>
{[
{ label: 'A11y',     value: 87, color: '#34d399' },
{ label: 'Coverage', value: 72, color: '#f59e0b' },
].map(({ label, value, color }) => (
<Stack key={label} gap='xs'>
<Group gap='xs' style={{ justifyContent: 'space-between' }}>
<Text size='xs' c='#d4d4d8'>{label}</Text>
<Text size='xs' c='#52525b'>{value}%</Text>
</Group>
<Progress value={value} size='xs' color={color} />
</Stack>
))}
</Stack>
</Stack>
</Card>
);
}

/* --- Bento block 3x3 --------------------------------------- */

function BentoBlock() {
return (
<div className='shrink-0' style={{
display: 'grid',
gridTemplateColumns: `${COL} ${COL} ${COL}`,
gridTemplateRows: `${R1} ${R2} ${R3}`,
columnGap: CGAP,
rowGap: RGAP,
}}>
<div style={{ gridColumn: 'span 2', gridRow: '1' }}><CardInstall /></div>
<div style={{ gridColumn: 'span 1', gridRow: '1' }}><CardRing /></div>

<div style={{ gridColumn: 'span 1', gridRow: '2' }}><CardTeam /></div>
<div style={{ gridColumn: 'span 2', gridRow: '2' }}><CardFeatures /></div>

<div style={{ gridColumn: 'span 1', gridRow: '3' }}><CardBadges /></div>
<div style={{ gridColumn: 'span 1', gridRow: '3' }}><CardKbd /></div>
<div style={{ gridColumn: 'span 1', gridRow: '3' }}><CardProgress /></div>
</div>
);
}

/* --- Marquee ----------------------------------------------- */

export function BentoCarousel() {
return (
<>
<style>{`
@keyframes bento-scroll {
0%   { transform: translateX(0); }
100% { transform: translateX(-50%); }
}
.bento-track {
display: flex;
align-items: center;
gap: ${CGAP};
width: max-content;
animation: bento-scroll 55s linear infinite;
}
`}</style>

<div style={{
height: '100%',
display: 'flex',
alignItems: 'center',
overflow: 'hidden',
WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
}}>
<div className='bento-track'>
{Array.from({ length: 6 }).map((_, i) => (
<BentoBlock key={i} />
))}
</div>
</div>
</>
);
}
