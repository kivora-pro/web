'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { AspectRatio } from '@kivora/react';

const RATIO_MAP: Record<string, number> = {
	'1:1': 1,
	'16:9': 16 / 9,
	'4:3': 4 / 3,
	'3:4': 3 / 4,
	'21:9': 21 / 9,
	'9:16': 9 / 16,
};

const config: ComponentDocConfig = {
	name: 'AspectRatio',
	category: 'layouts',
	status: 'stable',
	description_es:
		'Mantiene una relación de aspecto fija para su contenido hijo. Útil para imágenes, vídeos e iframes responsivos.',
	description_en:
		'Maintains a fixed aspect ratio for its child content. Useful for responsive images, videos and iframes.',
	controls: [
		{
			type: 'select',
			prop: 'ratio',
			label_es: 'Relación de aspecto',
			label_en: 'Ratio',
			options: Object.keys(RATIO_MAP),
			defaultValue: '16:9',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const numeric = RATIO_MAP[v.ratio] ?? 1;
		const fraction = v.ratio.replace(':', '/');
		return [
			`import { AspectRatio } from '@kivora/react';`,
			'',
			`<AspectRatio ratio={${fraction}} {/* ${numeric.toFixed(4)} */}>`,
			`  <img src="..." alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />`,
			`</AspectRatio>`,
		].join('\n');
	},
	props: [
		{
			name: 'ratio',
			type: 'number',
			defaultValue: '1',
			description_es: 'Relación ancho/alto. Ej: 16/9 ≈ 1.7778.',
			description_en: 'Width-to-height ratio. E.g. 16/9 ≈ 1.7778.',
		},
		{
			name: 'children',
			type: 'React.ReactNode',
			description_es:
				'Contenido que se escala para ajustarse a la relación.',
			description_en: 'Content scaled to fit the ratio.',
		},
	],
};

export default function AspectRatioPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={(v) => (
				<div className='w-full max-w-xs'>
					<AspectRatio ratio={RATIO_MAP[v.ratio] ?? 1}>
						<div className='flex h-full w-full items-center justify-center rounded-lg bg-muted text-sm text-muted'>
							{v.ratio}
						</div>
					</AspectRatio>
				</div>
			)}
		/>
	);
}
