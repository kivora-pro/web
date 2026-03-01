'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
name: 'useElementSize',
description_es: 'Devuelve las dimensiones reactivas (ancho y alto) de un elemento del DOM.',
description_en: 'Returns the reactive dimensions (width and height) of a DOM element.',
usage: `import { useElementSize } from '@kivora/react';

function Demo() {
  const [ref, { width, height }] = useElementSize<HTMLDivElement>();
  return (
    <div ref={ref}>
      Width: {width}px, Height: {height}px
    </div>
  );
}`,
params: [],
returns: [
{
name: '[0] ref',
type: 'React.RefObject<T | null>',
description_es: 'Ref que se adjunta al elemento a medir.',
description_en: 'Ref to attach to the element to measure.',
},
{
name: '[1].width',
type: 'number',
description_es: 'Ancho actual del elemento en pixeles.',
description_en: 'Current element width in pixels.',
},
{
name: '[1].height',
type: 'number',
description_es: 'Alto actual del elemento en pixeles.',
description_en: 'Current element height in pixels.',
},
],
};

export default function UseElementSizePage() {
return <HookDoc config={config} />;
}
