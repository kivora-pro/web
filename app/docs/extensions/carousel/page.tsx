'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'Carousel',
	description_es:
		'Carrusel de diapositivas construido sobre Swiper. Usa Carousel.Slide como hijo directo para cada elemento. Soporta controles, indicadores, bucle, reproducción automática y más.',
	description_en:
		'Slide carousel built on top of Swiper. Use Carousel.Slide as direct children for each item. Supports controls, indicators, loop, autoplay, and more.',
	usage: `import { Carousel } from '@kivora/react';

// Básico
<Carousel withIndicators>
  <Carousel.Slide>
    <img src="/slide1.jpg" alt="Slide 1" className="w-full h-64 object-cover" />
  </Carousel.Slide>
  <Carousel.Slide>
    <img src="/slide2.jpg" alt="Slide 2" className="w-full h-64 object-cover" />
  </Carousel.Slide>
  <Carousel.Slide>
    <img src="/slide3.jpg" alt="Slide 3" className="w-full h-64 object-cover" />
  </Carousel.Slide>
</Carousel>

// Múltiples slides visibles con bucle y autoplay
<Carousel
  slidesPerView={3}
  slideGap={24}
  loop
  withControls
  withIndicators
  autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
  onSlideChange={(index) => console.log('Slide activo:', index)}
>
  {items.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card>{item.title}</Card>
    </Carousel.Slide>
  ))}
</Carousel>`,
	params: [
		{
			name: 'children',
			type: 'React.ReactNode',
			required: true,
			description_es:
				'Slides del carrusel. Usa Carousel.Slide para cada elemento.',
			description_en:
				'Carousel slides. Use Carousel.Slide for each item.',
		},
		{
			name: 'slidesPerView',
			type: "number | 'auto'",
			defaultValue: '1',
			description_es:
				"Número de slides visibles a la vez. 'auto' ajusta según el ancho de cada slide.",
			description_en:
				"Number of visible slides at once. 'auto' adjusts to each slide's width.",
		},
		{
			name: 'slideGap',
			type: 'number',
			defaultValue: '16',
			description_es: 'Espacio entre slides en píxeles.',
			description_en: 'Gap between slides in pixels.',
		},
		{
			name: 'orientation',
			type: "'horizontal' | 'vertical'",
			defaultValue: "'horizontal'",
			description_es: 'Dirección del desplazamiento del carrusel.',
			description_en: 'Scrolling direction of the carousel.',
		},
		{
			name: 'loop',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Habilita el desplazamiento infinito (el último slide conecta con el primero).',
			description_en:
				'Enables infinite scrolling (last slide connects back to first).',
		},
		{
			name: 'dragFree',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Permite desplazamiento libre sin ajuste automático a un slide.',
			description_en:
				'Allows free-form scrolling without snapping to a slide.',
		},
		{
			name: 'withControls',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Muestra botones de navegación anterior/siguiente.',
			description_en: 'Shows previous/next navigation buttons.',
		},
		{
			name: 'withIndicators',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Muestra indicadores de posición (puntos) debajo del carrusel.',
			description_en:
				'Shows position indicators (dots) below the carousel.',
		},
		{
			name: 'initialSlide',
			type: 'number',
			defaultValue: '0',
			description_es: 'Índice del slide activo al montar el componente.',
			description_en:
				'Index of the active slide when the component mounts.',
		},
		{
			name: 'slidesToScroll',
			type: 'number',
			defaultValue: '1',
			description_es: 'Número de slides que avanza cada vez al navegar.',
			description_en: 'Number of slides to advance on each navigation.',
		},
		{
			name: 'autoplay',
			type: 'boolean | { delay: number; pauseOnMouseEnter?: boolean }',
			description_es:
				'Activa el avance automático. Con objeto, configura el delay (ms) y si pausa al pasar el ratón.',
			description_en:
				'Enables automatic advancement. With an object, configure delay (ms) and whether it pauses on hover.',
		},
		{
			name: 'onSlideChange',
			type: '(index: number) => void',
			description_es:
				'Callback que se ejecuta cuando cambia el slide activo.',
			description_en:
				'Callback that fires when the active slide changes.',
		},
		{
			name: 'swiperProps',
			type: 'Omit<SwiperProps, ...>',
			description_es:
				'Props adicionales de Swiper, para configuración avanzada.',
			description_en:
				'Additional Swiper props for advanced configuration.',
		},
	],
};

export default function CarouselPage() {
	return <HookDoc config={config} />;
}
