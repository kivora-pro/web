'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { BackgroundImage } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'BackgroundImage',
	category: 'miscellaneous',
	status: 'stable',
	description_es:
		'Contenedor con imagen de fondo que se ajusta para cubrir el área. El contenido hijo se superpone sobre la imagen.',
	description_en:
		'Container with background image that scales to cover the area. Child content is overlaid on top of the image.',
	controls: [
		{
			type: 'select',
			prop: 'radius',
			label_es: 'Radio',
			label_en: 'Radius',
			options: ['0', 'xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [
			`src="https://picsum.photos/seed/kivora/800/400"`,
			`h={300}`,
		];
		if (v.radius !== '0') props.push(`radius="${v.radius}"`);
		return `import { BackgroundImage, Text } from '@kivora/react';\n\n<BackgroundImage\n  ${props.join('\n  ')}\n>\n  <div style={{ padding: '2rem', color: 'white' }}>\n    <Text fw={700} size="xl">Título sobre la imagen</Text>\n  </div>\n</BackgroundImage>`;
	},
	props: [
		{
			name: 'src',
			type: 'string',
			required: true,
			description_es: 'URL de la imagen de fondo.',
			description_en: 'Background image URL.',
		},
		{
			name: 'radius',
			type: 'string | number',
			description_es: 'Radio de borde del contenedor.',
			description_en: 'Container border radius.',
		},
		{
			name: 'children',
			type: 'ReactNode',
			description_es: 'Contenido superpuesto a la imagen.',
			description_en: 'Content overlaid on the image.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<BackgroundImage
			src='https://picsum.photos/seed/kivora/800/400'
			radius={v.radius as string}
			style={{ height: 200, width: '100%', maxWidth: 400 }}>
			<div
				style={{
					padding: '1.5rem',
					background: 'rgba(0,0,0,0.4)',
					height: '100%',
					borderRadius: 'inherit',
					display: 'flex',
					alignItems: 'flex-end',
				}}>
				<p style={{ color: 'white', fontWeight: 700, margin: 0 }}>
					Contenido sobre la imagen
				</p>
			</div>
		</BackgroundImage>
	);
}

export default function BackgroundImagePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
