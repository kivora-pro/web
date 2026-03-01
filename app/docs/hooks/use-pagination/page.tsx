'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'usePagination',
	description_es:
		'Calcula el rango de páginas a mostrar en un paginador, incluyendo puntos suspensivos ("dots"), y expone acciones para navegar entre páginas.',
	description_en:
		'Calculates the page range to display in a paginator, including ellipsis dots, and exposes actions to navigate between pages.',
	usage: `import { usePagination } from '@kivora/react';

function Demo() {
  const { range, active, setPage, next, previous, first, last } = usePagination({
    total: 20,
    siblings: 1,
    boundaries: 1,
    initialPage: 1,
  });

  return (
    <div>
      {range.map((page, i) =>
        page === 'dots' ? (
          <span key={i}>…</span>
        ) : (
          <button key={i} onClick={() => setPage(page)} disabled={page === active}>
            {page}
          </button>
        )
      )}
      <button onClick={previous}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
}`,
	params: [
		{
			name: 'total',
			type: 'number',
			required: true,
			description_es: 'Número total de páginas.',
			description_en: 'Total number of pages.',
		},
		{
			name: 'siblings',
			type: 'number',
			required: false,
			defaultValue: '1',
			description_es:
				'Número de páginas visibles a cada lado de la página activa.',
			description_en:
				'Number of pages visible on each side of the active page.',
		},
		{
			name: 'boundaries',
			type: 'number',
			required: false,
			defaultValue: '1',
			description_es:
				'Número de páginas visibles al inicio y al final del rango.',
			description_en:
				'Number of pages visible at the start and end of the range.',
		},
		{
			name: 'page',
			type: 'number',
			required: false,
			description_es: 'Página activa controlada externamente.',
			description_en: 'Externally controlled active page.',
		},
		{
			name: 'initialPage',
			type: 'number',
			required: false,
			defaultValue: '1',
			description_es:
				'Página activa inicial cuando el componente no es controlado.',
			description_en:
				'Initial active page when the component is uncontrolled.',
		},
		{
			name: 'onChange',
			type: '(page: number) => void',
			required: false,
			description_es: 'Callback llamado cuando la página activa cambia.',
			description_en: 'Callback called when the active page changes.',
		},
	],
	returns: [
		{
			name: 'range',
			type: "(number | 'dots')[]",
			description_es:
				'Array con los números de página y puntos suspensivos a renderizar.',
			description_en: 'Array of page numbers and dots entries to render.',
		},
		{
			name: 'active',
			type: 'number',
			description_es: 'Número de la página actualmente activa.',
			description_en: 'Currently active page number.',
		},
		{
			name: 'setPage',
			type: '(page: number) => void',
			description_es: 'Navega a una página concreta.',
			description_en: 'Navigates to a specific page.',
		},
		{
			name: 'next',
			type: '() => void',
			description_es: 'Avanza a la página siguiente.',
			description_en: 'Moves to the next page.',
		},
		{
			name: 'previous',
			type: '() => void',
			description_es: 'Retrocede a la página anterior.',
			description_en: 'Moves to the previous page.',
		},
		{
			name: 'first',
			type: '() => void',
			description_es: 'Navega a la primera página.',
			description_en: 'Navigates to the first page.',
		},
		{
			name: 'last',
			type: '() => void',
			description_es: 'Navega a la última página.',
			description_en: 'Navigates to the last page.',
		},
	],
};

export default function UsePaginationPage() {
	return <HookDoc config={config} />;
}
