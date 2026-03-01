'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
  name: 'useDisclosure',
  description_es: 'Gestiona el estado abierto/cerrado de modales, drawers, popovers y otros componentes que se muestran u ocultan.',
  description_en: 'Manages the open/closed state of modals, drawers, popovers, and other components that show or hide.',
  usage: `import { useDisclosure } from '@kivora/react';

function Demo() {
  const { opened, open, close, toggle } = useDisclosure(false, {
    onOpen: () => console.log('Opened'),
    onClose: () => console.log('Closed'),
  });

  return (
    <div>
      <button onClick={open}>Open modal</button>
      {opened && (
        <div>
          <p>Modal content</p>
          <button onClick={close}>Close</button>
        </div>
      )}
    </div>
  );
}`,
  params: [
    {
      name: 'initialState',
      type: 'boolean',
      defaultValue: 'false',
      description_es: 'Estado inicial de la revelación.',
      description_en: 'Initial open/closed state.',
    },
    {
      name: 'options.onOpen',
      type: '() => void',
      description_es: 'Callback que se ejecuta cuando se abre.',
      description_en: 'Callback called when the disclosure opens.',
    },
    {
      name: 'options.onClose',
      type: '() => void',
      description_es: 'Callback que se ejecuta cuando se cierra.',
      description_en: 'Callback called when the disclosure closes.',
    },
  ],
  returns: [
    {
      name: 'opened',
      type: 'boolean',
      description_es: 'Estado actual: `true` si está abierto, `false` si está cerrado.',
      description_en: 'Current state: `true` if open, `false` if closed.',
    },
    {
      name: 'open',
      type: '() => void',
      description_es: 'Establece el estado en abierto.',
      description_en: 'Sets the state to open.',
    },
    {
      name: 'close',
      type: '() => void',
      description_es: 'Establece el estado en cerrado.',
      description_en: 'Sets the state to closed.',
    },
    {
      name: 'toggle',
      type: '() => void',
      description_es: 'Alterna entre abierto y cerrado.',
      description_en: 'Toggles between open and closed.',
    },
  ],
};

export default function UseDisclosurePage() {
  return <HookDoc config={config} />;
}
