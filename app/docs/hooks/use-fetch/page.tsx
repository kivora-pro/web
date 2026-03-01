'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'useFetch',
	description_es:
		'Realiza peticiones HTTP con estado de carga, error y datos. Se re-ejecuta automáticamente cuando cambia la URL u opciones, y soporta AbortController.',
	description_en:
		'Performs HTTP requests with loading, error and data state. Re-runs automatically when the URL or options change, and supports AbortController.',
	usage: `import { useFetch } from '@kivora/react';

interface User {
  id: number;
  name: string;
}

function UserProfile({ id }: { id: number }) {
  const { data, loading, error, refetch, abort } = useFetch<User>(
    \`https://api.example.com/users/\${id}\`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} <button onClick={refetch}>Retry</button></p>;

  return (
    <>
      <p>{data?.name}</p>
      <button onClick={abort}>Cancel</button>
    </>
  );
}`,
	params: [
		{
			name: 'url',
			type: 'string',
			required: true,
			description_es: 'URL del endpoint a solicitar.',
			description_en: 'URL of the endpoint to request.',
		},
		{
			name: 'options',
			type: 'RequestInit',
			defaultValue: 'undefined',
			description_es:
				'Opciones nativas de fetch (method, headers, body, etc.). Un cambio de referencia re-dispara la petición.',
			description_en:
				'Native fetch options (method, headers, body, etc.). A reference change re-triggers the request.',
		},
	],
	returns: [
		{
			name: 'data',
			type: 'T | null',
			description_es:
				'Datos de la respuesta deserializados como JSON, o null si aún no se han recibido.',
			description_en:
				'Response data deserialized as JSON, or null if not yet received.',
		},
		{
			name: 'loading',
			type: 'boolean',
			description_es: 'true mientras la petición está en curso.',
			description_en: 'true while the request is in progress.',
		},
		{
			name: 'error',
			type: 'Error | null',
			description_es:
				'Error de red o de la petición, o null si no hubo error.',
			description_en:
				'Network or request error, or null if there was no error.',
		},
		{
			name: 'refetch',
			type: '() => void',
			description_es: 'Vuelve a ejecutar la petición manualmente.',
			description_en: 'Manually re-executes the request.',
		},
		{
			name: 'abort',
			type: '() => void',
			description_es:
				'Cancela la petición en curso mediante AbortController.',
			description_en: 'Cancels the ongoing request via AbortController.',
		},
	],
};

export default function UseFetchPage() {
	return <HookDoc config={config} />;
}
