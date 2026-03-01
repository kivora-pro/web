'use client';

import { HookDoc } from '@/components/docs/HookDoc';
import type { HookDocConfig } from '@/components/docs/types';

const config: HookDocConfig = {
	name: 'Dates',
	description_es:
		'Suite de componentes de selección de fechas basados en react-day-picker v9 y date-fns. Incluye selector de fecha, rango, mes, calendario inline y selector de hora.',
	description_en:
		'Date selection component suite based on react-day-picker v9 and date-fns. Includes date picker, range picker, month picker, inline calendar, and time picker.',
	usage: `import {
  DatePickerInput,
  DateRangePickerInput,
  MonthPickerInput,
  InlineCalendar,
  TimePicker,
} from '@kivora/react';
import type { DateRange, TimeValue } from '@kivora/react';

// Selector de fecha simple
const [date, setDate] = useState<Date | null>(null);

<DatePickerInput
  label="Fecha de inicio"
  placeholder="Selecciona una fecha"
  value={date}
  onChange={setDate}
  clearable
/>

// Rango de fechas
const [range, setRange] = useState<DateRange>({ from: null, to: null });

<DateRangePickerInput
  label="Período"
  rangeValue={range}
  onRangeChange={setRange}
  minRangeDays={2}
  maxRangeDays={30}
  numberOfMonths={2}
/>

// Mes
const [month, setMonth] = useState<Date | null>(null);

<MonthPickerInput
  label="Mes de facturación"
  value={month}
  onChange={setMonth}
/>

// Calendario inline (sin input)
<InlineCalendar
  value={date}
  onChange={setDate}
  highlightDates={[new Date('2025-12-25')]}
/>

// Hora
const [time, setTime] = useState<TimeValue>({ hours: 9, minutes: 0 });

<TimePicker value={time} onChange={setTime} />`,
	params: [
		{
			name: 'value / rangeValue',
			type: 'Date | null / DateRange',
			description_es:
				'Valor controlado. DateRange = { from: Date | null; to: Date | null }.',
			description_en:
				'Controlled value. DateRange = { from: Date | null; to: Date | null }.',
		},
		{
			name: 'onChange / onRangeChange',
			type: '(date: Date | null) => void / (range: DateRange) => void',
			description_es: 'Callback al cambiar la selección.',
			description_en: 'Callback when the selection changes.',
		},
		{
			name: 'defaultValue',
			type: 'Date | null',
			description_es: 'Valor inicial no controlado para DatePickerInput.',
			description_en: 'Uncontrolled initial value for DatePickerInput.',
		},
		{
			name: 'minDate / maxDate',
			type: 'Date',
			description_es: 'Límites mínimo y máximo de selección.',
			description_en: 'Minimum and maximum selection limits.',
		},
		{
			name: 'disabledDates',
			type: 'Date[]',
			description_es: 'Fechas individuales a deshabilitar.',
			description_en: 'Individual dates to disable.',
		},
		{
			name: 'enabledDates',
			type: 'Date[]',
			description_es:
				'Cuando se especifica, solo estas fechas estarán habilitadas.',
			description_en: 'When specified, only these dates will be enabled.',
		},
		{
			name: 'highlightDates',
			type: 'Date[]',
			description_es: 'Fechas a resaltar visualmente en el calendario.',
			description_en: 'Dates to highlight visually on the calendar.',
		},
		{
			name: 'numberOfMonths',
			type: 'number',
			defaultValue: '1',
			description_es: 'Número de meses visibles simultáneamente.',
			description_en: 'Number of months visible at once.',
		},
		{
			name: 'weekStartsOn',
			type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
			defaultValue: '0',
			description_es:
				'Día de inicio de la semana (0 = domingo, 1 = lunes…).',
			description_en: 'Week start day (0 = Sunday, 1 = Monday…).',
		},
		{
			name: 'captionLayout',
			type: "'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years'",
			defaultValue: "'label'",
			description_es:
				'Tipo de encabezado del calendario para navegación.',
			description_en: 'Calendar caption layout for navigation.',
		},
		{
			name: 'showOutsideDays',
			type: 'boolean',
			defaultValue: 'false',
			description_es:
				'Muestra los días de meses adyacentes en el calendario.',
			description_en: 'Shows days from adjacent months on the calendar.',
		},
		{
			name: 'clearable',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra un botón para limpiar la selección.',
			description_en: 'Shows a button to clear the selection.',
		},
		{
			name: 'format',
			type: 'string',
			defaultValue: '"dd/MM/yyyy"',
			description_es:
				'Formato de fecha mostrado en el input (compatible con date-fns).',
			description_en:
				'Date format shown in the input (date-fns compatible).',
		},
		{
			name: 'label',
			type: 'string',
			description_es: 'Etiqueta del campo.',
			description_en: 'Field label.',
		},
		{
			name: 'description',
			type: 'string',
			description_es: 'Texto de ayuda bajo el campo.',
			description_en: 'Helper text below the field.',
		},
		{
			name: 'error',
			type: 'string',
			description_es: 'Mensaje de error mostrado bajo el campo.',
			description_en: 'Error message shown below the field.',
		},
		{
			name: 'placeholder',
			type: 'string',
			description_es: 'Placeholder del input.',
			description_en: 'Input placeholder.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Deshabilita el componente.',
			description_en: 'Disables the component.',
		},
		{
			name: 'readOnly',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Hace el campo de solo lectura.',
			description_en: 'Makes the field read-only.',
		},
		{
			name: 'minRangeDays / maxRangeDays',
			type: 'number',
			description_es:
				'Solo en DateRangePickerInput. Límites de días mínimo y máximo para el rango.',
			description_en:
				'DateRangePickerInput only. Minimum and maximum day limits for the range.',
		},
		{
			name: 'classNames',
			type: 'Partial<Record<string, string>>',
			description_es:
				'Clases CSS personalizadas por slot del componente.',
			description_en: 'Custom CSS classes by component slot.',
		},
	],
};

export default function DatesPage() {
	return <HookDoc config={config} />;
}
