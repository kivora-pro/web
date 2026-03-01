'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Table, Tbody, Td, Th, Thead, Tr } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Table',
	category: 'data-display',
	status: 'stable',
	description_es:
		'Tabla de datos con soporte para filas de cabecera sticky, bordes configurables, filas alternadas y resaltado al hover. Usa compound components: Table, Thead, Tbody, Tr, Th, Td.',
	description_en:
		'Data table with sticky header rows, configurable borders, alternating rows and hover highlight. Uses compound components: Table, Thead, Tbody, Tr, Th, Td.',
	controls: [
		{
			type: 'boolean',
			prop: 'striped',
			label_es: 'Filas alternadas',
			label_en: 'Striped rows',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'highlightOnHover',
			label_es: 'Resaltar al hover',
			label_en: 'Highlight on hover',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'withTableBorder',
			label_es: 'Borde exterior',
			label_en: 'Table border',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'withColumnBorders',
			label_es: 'Bordes columna',
			label_en: 'Column borders',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Table
  ${v.striped ? 'striped' : ''}${v.highlightOnHover ? '\n  highlightOnHover' : ''}${v.withTableBorder ? '\n  withTableBorder' : ''}${v.withColumnBorders ? '\n  withColumnBorders' : ''}
>
  <Thead>
    <Tr>
      <Th>Nombre</Th>
      <Th>Rol</Th>
      <Th>Estado</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Ana García</Td>
      <Td>Admin</Td>
      <Td>Activo</Td>
    </Tr>
    <Tr>
      <Td>Luis Pérez</Td>
      <Td>Editor</Td>
      <Td>Inactivo</Td>
    </Tr>
  </Tbody>
</Table>`,
	props: [
		{
			name: 'striped',
			type: 'boolean | "odd" | "even"',
			description_es: 'Alterna el color de fondo de las filas.',
			description_en: 'Alternates background color of rows.',
		},
		{
			name: 'highlightOnHover',
			type: 'boolean',
			description_es: 'Resalta la fila al hacer hover.',
			description_en: 'Highlights the row on hover.',
		},
		{
			name: 'withTableBorder',
			type: 'boolean',
			description_es: 'Añade borde exterior a la tabla.',
			description_en: 'Adds outer border to the table.',
		},
		{
			name: 'withColumnBorders',
			type: 'boolean',
			description_es: 'Añade bordes verticales entre columnas.',
			description_en: 'Adds vertical borders between columns.',
		},
		{
			name: 'withRowBorders',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Añade bordes horizontales entre filas.',
			description_en: 'Adds horizontal borders between rows.',
		},
		{
			name: 'stickyHeader',
			type: 'boolean',
			description_es: 'Fija la cabecera al hacer scroll.',
			description_en: 'Makes the header sticky on scroll.',
		},
		{
			name: 'stickyHeaderOffset',
			type: 'number',
			description_es: 'Desplazamiento top de la cabecera sticky.',
			description_en: 'Top offset for sticky header.',
		},
		{
			name: 'horizontalSpacing',
			type: 'number | string',
			defaultValue: '"0.5rem"',
			description_es: 'Padding horizontal de celdas.',
			description_en: 'Horizontal padding of cells.',
		},
		{
			name: 'verticalSpacing',
			type: 'number | string',
			defaultValue: '"0.5rem"',
			description_es: 'Padding vertical de celdas.',
			description_en: 'Vertical padding of cells.',
		},
		{
			name: 'captionSide',
			type: '"top" | "bottom"',
			defaultValue: '"bottom"',
			description_es: 'Posición del elemento caption.',
			description_en: 'Position of the caption element.',
		},
	],
};

const ROWS = [
	{ name: 'Ana García', role: 'Admin', status: 'Activo' },
	{ name: 'Luis Pérez', role: 'Editor', status: 'Inactivo' },
	{ name: 'María López', role: 'Viewer', status: 'Activo' },
];

function renderPreview(v: ControlValues) {
	return (
		<Table
			striped={v.striped as boolean}
			highlightOnHover={v.highlightOnHover as boolean}
			withTableBorder={v.withTableBorder as boolean}
			withColumnBorders={v.withColumnBorders as boolean}>
			<Thead>
				<Tr>
					<Th>Nombre</Th>
					<Th>Rol</Th>
					<Th>Estado</Th>
				</Tr>
			</Thead>
			<Tbody>
				{ROWS.map((row) => (
					<Tr key={row.name}>
						<Td>{row.name}</Td>
						<Td>{row.role}</Td>
						<Td>{row.status}</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	);
}

export default function TablePage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
