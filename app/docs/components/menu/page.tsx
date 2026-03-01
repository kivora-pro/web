'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import {
	Button,
	Menu,
	MenuDivider,
	MenuDropdown,
	MenuItem,
	MenuLabel,
	MenuTarget,
} from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'Menu',
	category: 'overlays',
	status: 'stable',
	description_es:
		'Menú desplegable accesible con soporte para elementos, etiquetas de grupo, separadores y navegación por teclado. Usa el patrón compound component: Menu.Target, Menu.Dropdown, Menu.Item, Menu.Label y Menu.Divider.',
	description_en:
		'Accessible dropdown menu with support for items, group labels, dividers and keyboard navigation. Uses the compound component pattern: Menu.Target, Menu.Dropdown, Menu.Item, Menu.Label and Menu.Divider.',
	controls: [
		{
			type: 'boolean',
			prop: 'closeOnItemClick',
			label_es: 'Cerrar al seleccionar',
			label_en: 'Close on item click',
			defaultValue: true,
		},
		{
			type: 'boolean',
			prop: 'withArrow',
			label_es: 'Con flecha',
			label_en: 'With arrow',
			defaultValue: false,
		},
		{
			type: 'select',
			prop: 'position',
			label_es: 'Posición',
			label_en: 'Position',
			options: [
				'bottom',
				'bottom-start',
				'bottom-end',
				'top',
				'top-start',
				'top-end',
			],
			defaultValue: 'bottom-start',
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Menu
  position="${v.position}"${!v.closeOnItemClick ? '\n  closeOnItemClick={false}' : ''}${v.withArrow ? '\n  withArrow' : ''}
>
  <MenuTarget>
    <Button>Abrir Menú</Button>
  </MenuTarget>
  <MenuDropdown>
    <MenuLabel>Cuenta</MenuLabel>
    <MenuItem>Perfil</MenuItem>
    <MenuItem>Configuración</MenuItem>
    <MenuDivider />
    <MenuItem>Cerrar sesión</MenuItem>
  </MenuDropdown>
</Menu>`,
	props: [
		{
			name: 'opened',
			type: 'boolean',
			description_es: 'Estado controlado del menú.',
			description_en: 'Controlled open state of the menu.',
		},
		{
			name: 'defaultOpened',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Estado inicial (modo no controlado).',
			description_en: 'Initial state (uncontrolled mode).',
		},
		{
			name: 'onChange',
			type: '(opened: boolean) => void',
			description_es: 'Callback al cambiar el estado.',
			description_en: 'Callback on state change.',
		},
		{
			name: 'closeOnItemClick',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Cierra el menú al hacer clic en un item.',
			description_en: 'Closes menu when clicking an item.',
		},
		{
			name: 'closeOnEscape',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Cierra con la tecla Escape.',
			description_en: 'Closes with the Escape key.',
		},
		{
			name: 'position',
			type: '"bottom" | "bottom-start" | "bottom-end" | "top" | "top-start" | "top-end"',
			defaultValue: '"bottom"',
			description_es: 'Posición del menú respecto al trigger.',
			description_en: 'Menu position relative to the trigger.',
		},
		{
			name: 'width',
			type: 'number | string',
			description_es: 'Anchura del dropdown del menú.',
			description_en: 'Width of the menu dropdown.',
		},
		{
			name: 'withArrow',
			type: 'boolean',
			description_es: 'Muestra flecha apuntando al trigger.',
			description_en: 'Shows arrow pointing to trigger.',
		},
		{
			name: 'shadow',
			type: 'string',
			description_es: 'Sombra CSS del menú.',
			description_en: 'CSS shadow of the menu.',
		},
		{
			name: 'offset',
			type: 'number',
			description_es: 'Distancia entre el trigger y el menú.',
			description_en: 'Distance between trigger and menu.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<Menu
			position={
				v.position as
					| 'bottom'
					| 'bottom-start'
					| 'bottom-end'
					| 'top'
					| 'top-start'
					| 'top-end'
			}
			closeOnItemClick={v.closeOnItemClick as boolean}
			withArrow={v.withArrow as boolean}>
			<MenuTarget>
				<Button>Abrir Menú</Button>
			</MenuTarget>
			<MenuDropdown>
				<MenuLabel>Cuenta</MenuLabel>
				<MenuItem>Perfil</MenuItem>
				<MenuItem>Configuración</MenuItem>
				<MenuDivider />
				<MenuItem>Cerrar sesión</MenuItem>
			</MenuDropdown>
		</Menu>
	);
}

export default function MenuPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
