'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useQueue',
	description_es:
		'Gestiona una cola con un límite de elementos visibles. Los elementos que superan el límite se almacenan en una cola de desbordamiento y se muestran automáticamente cuando hay espacio disponible.',
	description_en:
		'Manages a queue with a visible items limit. Items exceeding the limit are stored in an overflow queue and are shown automatically when space becomes available.',
	usage: `import { useQueue } from '@kivora/react';

function NotificationsDemo() {
  const { state, queue, add, cleanQueue } = useQueue({
    initialValues: ['First notification'],
    limit: 3,
  });

  return (
    <div>
      <p>Visible ({state.length}): {state.join(', ')}</p>
      <p>Queued ({queue.length}): {queue.join(', ')}</p>
      <button onClick={() => add(\`Notification \${Date.now()}\`)}>
        Add notification
      </button>
      <button onClick={cleanQueue}>Clear queue</button>
    </div>
  );
}`,
	params: [
		{
			name: 'initialValues',
			type: 'T[]',
			defaultValue: '[]',
			description_es: 'Valores con los que inicializar la cola.',
			description_en: 'Initial values to populate the queue with.',
		},
		{
			name: 'limit',
			type: 'number',
			required: true,
			description_es:
				'Número máximo de elementos visibles simultáneamente.',
			description_en: 'Maximum number of simultaneously visible items.',
		},
	],
	returns: [
		{
			name: 'state',
			type: 'T[]',
			description_es: 'Elementos actualmente visibles (hasta el límite).',
			description_en: 'Currently visible items (up to the limit).',
		},
		{
			name: 'queue',
			type: 'T[]',
			description_es: 'Elementos en espera que superaron el límite.',
			description_en: 'Overflow items waiting to become visible.',
		},
		{
			name: 'add',
			type: '(...items: T[]) => void',
			description_es:
				'Agrega uno o más elementos. Si hay espacio visible, se muestran; de lo contrario van a la cola.',
			description_en:
				'Adds one or more items. If visible space is available they appear immediately; otherwise they are queued.',
		},
		{
			name: 'update',
			type: '(fn: (state: T[], queue: T[]) => { state: T[], queue: T[] }) => void',
			description_es:
				'Actualiza el estado y la cola con una función actualizadora personalizada.',
			description_en:
				'Updates the state and queue with a custom updater function.',
		},
		{
			name: 'cleanQueue',
			type: '() => void',
			description_es:
				'Vacía la cola de desbordamiento sin afectar a los elementos visibles.',
			description_en:
				'Empties the overflow queue without affecting visible items.',
		},
	],
};

export default function UseQueuePage() {
	return <HookDoc config={config} />;
}
