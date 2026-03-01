'use client';

import {
	SegmentedControl,
	Select,
	Slider,
	Switch,
	TextInput,
} from '@kivora/react';
import { useState } from 'react';
import { CodeBlock } from './CodeBlock';
import type { ControlDef, ControlValues } from './types';

interface PlaygroundProps {
	controls: ControlDef[];
	codeTemplate: (values: ControlValues) => string;
	renderPreview: (values: ControlValues) => React.ReactNode;
}

export function Playground({
	controls,
	codeTemplate,
	renderPreview,
}: PlaygroundProps) {
	const defaults = (): ControlValues => {
		const init: ControlValues = {};
		for (const c of controls) init[c.prop] = c.defaultValue;
		return init;
	};

	const [values, setValues] = useState<ControlValues>(defaults);
	const [tab, setTab] = useState<'preview' | 'code'>('preview');

	const set = (prop: string, value: string | boolean | number) =>
		setValues((prev) => ({ ...prev, [prop]: value }));

	const hasControls = controls.length > 0;

	return (
		<div className='mt-2 rounded-xl border border-white/8 bg-[#0a0a17]'>
			{/* ── Tab bar ─────────────────────────────────────────── */}
			<div className='flex items-center justify-between rounded-t-xl border-b border-white/8 px-4 py-2.5'>
				<SegmentedControl
					data={[
						{ value: 'preview', label: 'Vista previa' },
						{ value: 'code', label: 'Código' },
					]}
					value={tab}
					onChange={(v) => setTab(v as 'preview' | 'code')}
					size='xs'
				/>
				{hasControls && tab === 'preview' && (
					<button
						onClick={() => setValues(defaults())}
						className='text-[11px] text-zinc-500 transition-colors hover:text-zinc-300'>
						Restablecer
					</button>
				)}
			</div>

			{/* ── Preview + Controls side-by-side ─────────────────── */}
			{tab === 'preview' && (
				<div className='flex min-h-52'>
					{/* Preview area */}
					<div className='flex flex-1 items-center justify-center p-10'>
						{renderPreview(values)}
					</div>

					{/* Controls panel */}
					{hasControls && (
						<aside className='w-56 shrink-0 border-l border-white/8 bg-white/1.5'>
							<p className='border-b border-white/8 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-600'>
								Controles
							</p>
							<div className='flex flex-col divide-y divide-white/5'>
								{controls.map((ctrl) => (
									<ControlInput
										key={ctrl.prop}
										control={ctrl}
										value={values[ctrl.prop]}
										onChange={(v) => set(ctrl.prop, v)}
									/>
								))}
							</div>
						</aside>
					)}
				</div>
			)}

			{/* ── Code tab ────────────────────────────────────────── */}
			{tab === 'code' && (
				<div className='overflow-hidden rounded-b-xl p-4'>
					<CodeBlock code={codeTemplate(values)} />
				</div>
			)}
		</div>
	);
}

// ─── Individual control renderer ──────────────────────────────────────────────

interface ControlInputProps {
	control: ControlDef;
	value: string | boolean | number;
	onChange: (v: string | boolean | number) => void;
}

function ControlInput({ control, value, onChange }: ControlInputProps) {
	const label = control.label_es;

	if (control.type === 'boolean') {
		return (
			<div className='flex items-center justify-between gap-2 px-4 py-3'>
				<span className='text-xs text-zinc-400'>{label}</span>
				<Switch
					size='xs'
					checked={value as boolean}
					onChange={(e) => onChange(e.target.checked)}
				/>
			</div>
		);
	}

	if (control.type === 'select') {
		return (
			<div className='px-4 py-3'>
				<Select
					label={label}
					data={control.options}
					value={value as string}
					onChange={(v) => onChange(v ?? '')}
					size='xs'
					searchable={false}
					clearable={false}
				/>
			</div>
		);
	}

	if (control.type === 'text') {
		return (
			<div className='px-4 py-3'>
				<TextInput
					label={label}
					value={value as string}
					onChange={(e) => onChange(e.target.value)}
					size='xs'
				/>
			</div>
		);
	}

	if (control.type === 'range') {
		return (
			<div className='px-4 py-3'>
				<div className='mb-3 flex items-center justify-between'>
					<span className='text-xs text-zinc-400'>{label}</span>
					<span className='tabular-nums text-[11px] text-zinc-500'>
						{value}
					</span>
				</div>
				<Slider
					value={value as number}
					onChange={(v) => onChange(v)}
					min={control.min}
					max={control.max}
					step={control.step}
					size='xs'
				/>
			</div>
		);
	}

	return null;
}
