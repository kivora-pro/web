'use client';

import Navbar from '@/src/components/Navbar';
import { Code } from '@kivora/react';
import { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

interface HookDoc {
	name: string;
	description: string;
	signature: string;
	example: string;
}

interface HookCategory {
	title: string;
	hooks: HookDoc[];
}

const HOOK_CATEGORIES: HookCategory[] = [
	{
		title: 'State Management',
		hooks: [
			{
				name: 'useCounter',
				description:
					'Manages a numeric counter with optional min/max bounds.',
				signature:
					'useCounter(initialValue?: number, options?: { min?: number; max?: number })',
				example:
					'const { count, increment, decrement, reset, set } = useCounter(0, { min: 0, max: 10 });',
			},
			{
				name: 'useDisclosure',
				description:
					'Controls boolean open/close state with optional open/close callbacks. Perfect for modals, drawers and popovers.',
				signature:
					'useDisclosure(initialState?: boolean, options?: { onOpen?: () => void; onClose?: () => void })',
				example:
					'const { opened, open, close, toggle } = useDisclosure(false);',
			},
			{
				name: 'useToggle',
				description:
					'Cycles through a fixed list of values. Defaults to [false, true].',
				signature: 'useToggle<T>(values?: readonly T[])',
				example:
					"const [value, toggle] = useToggle(['light', 'dark', 'system']);",
			},
			{
				name: 'useListState',
				description:
					'Manages an array with helpers for appending, prepending, inserting, removing and reordering items.',
				signature: 'useListState<T>(initialValue?: T[])',
				example:
					'const [list, handlers] = useListState([1, 2, 3]);\nhandlers.append(4);\nhandlers.remove(0);',
			},
			{
				name: 'useSetState',
				description:
					'useState-like hook that merges partial updates similarly to class component setState.',
				signature:
					'useSetState<T extends object>(initialState?: Partial<T>)',
				example:
					"const [state, setState] = useSetState({ name: '', age: 0 });\nsetState({ name: 'Alice' });",
			},
			{
				name: 'useInputState',
				description:
					'Manages text input state and returns a compatible onChange handler.',
				signature: 'useInputState<T>(initialValue: T)',
				example:
					"const [value, handler] = useInputState('');\n<input value={value} onChange={handler} />;",
			},
			{
				name: 'useValidatedState',
				description:
					'Tracks a value with a validation rule and exposes the last valid value alongside error state.',
				signature:
					'useValidatedState<T>(initialValue: T, validate: (value: T) => boolean)',
				example:
					'const [{ value, lastValidValue, valid }, setValue] = useValidatedState(\n  "",\n  v => v.length > 0\n);',
			},
			{
				name: 'useStateHistory',
				description:
					'Tracks a value history and exposes undo/redo helpers.',
				signature: 'useStateHistory<T>(initialValue: T)',
				example:
					'const [value, handlers, { history, current }] = useStateHistory(0);\nhandlers.set(5);\nhandlers.back();',
			},
			{
				name: 'useUncontrolled',
				description:
					'Manages controlled/uncontrolled component state with a single unified interface.',
				signature:
					'useUncontrolled<T>(options: { value?: T; defaultValue?: T; finalValue: T; onChange?: (v: T) => void })',
				example:
					'const [value, setValue] = useUncontrolled({ defaultValue: "", finalValue: "" });',
			},
			{
				name: 'usePrevious',
				description:
					'Returns the previous value of a given state or prop.',
				signature: 'usePrevious<T>(value: T)',
				example:
					'const previous = usePrevious(count); // previous render value',
			},
		],
	},
	{
		title: 'Storage',
		hooks: [
			{
				name: 'useLocalStorage',
				description:
					'Persists value in localStorage and keeps it in sync across browser tabs.',
				signature:
					'useLocalStorage<T>(options: { key: string; defaultValue?: T })',
				example:
					"const [token, setToken, removeToken] = useLocalStorage({ key: 'auth-token' });",
			},
			{
				name: 'useSessionStorage',
				description:
					'Same as useLocalStorage but backed by sessionStorage.',
				signature:
					'useSessionStorage<T>(options: { key: string; defaultValue?: T })',
				example:
					"const [draft, setDraft] = useSessionStorage({ key: 'draft', defaultValue: '' });",
			},
		],
	},
	{
		title: 'Browser & OS',
		hooks: [
			{
				name: 'useClipboard',
				description:
					'Copies text to the clipboard and exposes a copied flag that resets after a configurable timeout.',
				signature: 'useClipboard(options?: { timeout?: number })',
				example:
					'const { copy, copied, reset, error } = useClipboard({ timeout: 2000 });\n<button onClick={() => copy("Hello!")}>Copy</button>;',
			},
			{
				name: 'useDocumentTitle',
				description: 'Imperatively sets the browser tab title.',
				signature: 'useDocumentTitle(title: string)',
				example: "useDocumentTitle('My Page | Kivora');",
			},
			{
				name: 'useFavicon',
				description: 'Dynamically changes the page favicon.',
				signature: 'useFavicon(url: string)',
				example: "useFavicon('/favicon-dark.ico');",
			},
			{
				name: 'useDocumentVisibility',
				description:
					'Tracks the Page Visibility API – returns "visible" or "hidden".',
				signature: 'useDocumentVisibility()',
				example:
					"const visibility = useDocumentVisibility();\nif (visibility === 'hidden') pauseVideo();",
			},
			{
				name: 'useNetwork',
				description:
					'Exposes the Network Information API: online status, effective type and more.',
				signature: 'useNetwork()',
				example:
					'const { online, effectiveType } = useNetwork();\nif (!online) showOfflineBanner();',
			},
			{
				name: 'useOs',
				description:
					'Detects the operating system (windows, macos, linux, android, ios, undetermined).',
				signature: 'useOs()',
				example:
					"const os = useOs();\nif (os === 'macos') showCmd('\u2318K');",
			},
			{
				name: 'useFullscreen',
				description: 'Manages the browser Fullscreen API.',
				signature: 'useFullscreen()',
				example:
					'const { ref, toggle, fullscreen } = useFullscreen();\n<video ref={ref} />\n<button onClick={toggle}>{fullscreen ? "Exit" : "Enter"} fullscreen</button>;',
			},
			{
				name: 'useEyeDropper',
				description:
					'Wraps the EyeDropper API for picking colours from the screen.',
				signature: 'useEyeDropper()',
				example:
					'const { open, close } = useEyeDropper();\nconst { sRGBHex } = await open();',
			},
		],
	},
	{
		title: 'Events & Hotkeys',
		hooks: [
			{
				name: 'useEventListener',
				description:
					'Attaches an event listener to a target element and cleans it up automatically.',
				signature:
					'useEventListener<K extends keyof WindowEventMap>(eventName: K, handler: (e: WindowEventMap[K]) => void, target?: RefObject<T>)',
				example:
					"useEventListener('resize', () => console.log(window.innerWidth));",
			},
			{
				name: 'useWindowEvent',
				description:
					'Adds an event listener on the window object with automatic cleanup.',
				signature:
					'useWindowEvent<K extends keyof WindowEventMap>(type: K, listener: (e: WindowEventMap[K]) => void)',
				example: "useWindowEvent('resize', handleResize);",
			},
			{
				name: 'useHotkeys',
				description:
					'Registers keyboard shortcuts with an intuitive shorthand syntax.',
				signature:
					'useHotkeys(hotkeys: [keys: string, handler: (e: KeyboardEvent) => void][])',
				example:
					"useHotkeys([\n  ['mod+k', openSearch],\n  ['mod+shift+d', toggleDark],\n]);",
			},
			{
				name: 'usePageLeave',
				description:
					'Fires a callback when the pointer leaves the page (useful for exit-intent modals).',
				signature: 'usePageLeave(handler: () => void)',
				example: 'usePageLeave(() => showExitModal());',
			},
		],
	},
	{
		title: 'UI & Layout',
		hooks: [
			{
				name: 'useHover',
				description:
					'Tracks hover state of an element via a ref callback.',
				signature: 'useHover<T extends HTMLElement>()',
				example:
					'const { hovered, ref } = useHover();\n<div ref={ref} style={{ color: hovered ? "red" : "black" }} />;',
			},
			{
				name: 'useClickOutside',
				description:
					'Fires a callback whenever the user clicks outside the referenced element.',
				signature:
					'useClickOutside<T extends HTMLElement>(handler: () => void, events?: string[])',
				example:
					'const ref = useClickOutside(() => close());\n<div ref={ref}>{popoverContent}</div>;',
			},
			{
				name: 'useFocusTrap',
				description:
					'Traps keyboard focus within a container. Essential for modals and dialogs.',
				signature: 'useFocusTrap(active?: boolean)',
				example:
					'const trapRef = useFocusTrap();\n<div ref={trapRef}>{modalContent}</div>;',
			},
			{
				name: 'useFocusReturn',
				description:
					'Returns focus to the previously focused element on cleanup.',
				signature: 'useFocusReturn(options?: { opened: boolean })',
				example: 'useFocusReturn({ opened: isModalOpen });',
			},
			{
				name: 'useFocusWithin',
				description:
					'Tracks whether focus is anywhere inside a container.',
				signature: 'useFocusWithin()',
				example:
					'const { ref, focused } = useFocusWithin();\n<form ref={ref} style={{ outline: focused ? "2px solid blue" : "none" }} />;',
			},
			{
				name: 'useHeadroom',
				description:
					'Hides/shows an element depending on scroll direction — great for sticky headers.',
				signature: 'useHeadroom(options?: { fixedAt?: number })',
				example:
					'const pinned = useHeadroom({ fixedAt: 120 });\n<header className={pinned ? "translate-y-0" : "-translate-y-full"} />;',
			},
			{
				name: 'useInViewport',
				description:
					'Returns whether an element is visible in the viewport using IntersectionObserver.',
				signature: 'useInViewport<T extends HTMLElement>()',
				example:
					'const { ref, inViewport } = useInViewport();\n<div ref={ref}>{inViewport ? "Visible" : "Hidden"}</div>;',
			},
			{
				name: 'useScrollIntoView',
				description:
					'Smoothly scrolls an element into view with an optional offset.',
				signature:
					'useScrollIntoView<T extends HTMLElement>(options?: { offset?: number; duration?: number })',
				example:
					'const { scrollIntoView, targetRef } = useScrollIntoView({ offset: 60 });\n<div ref={targetRef} />;\n<button onClick={() => scrollIntoView()}>Scroll to</button>;',
			},
			{
				name: 'useResizeObserver',
				description:
					'Observes element size changes and returns the current DOMRect.',
				signature: 'useResizeObserver<T extends HTMLElement>()',
				example:
					'const { ref, entry } = useResizeObserver();\n<div ref={ref}>Width: {entry?.contentRect.width}</div>;',
			},
			{
				name: 'useMutationObserver',
				description:
					'Observes DOM mutations on a target element via MutationObserver.',
				signature:
					'useMutationObserver<T extends HTMLElement>(options: MutationObserverInit, callback: MutationCallback)',
				example:
					'const ref = useMutationObserver({ childList: true }, (mutations) => console.log(mutations));\n<ul ref={ref} />;',
			},
		],
	},
	{
		title: 'Media & Pointer',
		hooks: [
			{
				name: 'useMediaQuery',
				description:
					'Evaluates a CSS media query and re-renders when the result changes.',
				signature: 'useMediaQuery(query: string)',
				example:
					"const isMobile = useMediaQuery('(max-width: 768px)');",
			},
			{
				name: 'useViewportSize',
				description:
					'Returns the current window width and height, updated on resize.',
				signature: 'useViewportSize()',
				example: 'const { width, height } = useViewportSize();',
			},
			{
				name: 'useWindowScroll',
				description:
					'Exposes current scroll position and a scroll-to helper.',
				signature: 'useWindowScroll()',
				example:
					'const [{ x, y }, scrollTo] = useWindowScroll();\n<button onClick={() => scrollTo({ y: 0 })}>Back to top</button>;',
			},
			{
				name: 'useMouse',
				description:
					'Tracks the mouse position relative to a ref element or the viewport.',
				signature: 'useMouse()',
				example:
					'const { ref, x, y } = useMouse();\n<div ref={ref}>Mouse at {x}, {y}</div>;',
			},
			{
				name: 'useMove',
				description:
					'Tracks pointer movement percentage within an element – ideal for sliders and colour pickers.',
				signature:
					'useMove<T extends HTMLElement>(onChange: (v: { x: number; y: number }) => void)',
				example:
					'const { ref, active } = useMove(({ x, y }) => setValue({ x, y }));',
			},
			{
				name: 'useIntersection',
				description:
					'Lower-level IntersectionObserver hook that calls a callback with the full IntersectionObserverEntry.',
				signature:
					'useIntersection<T extends HTMLElement>(options?: IntersectionObserverInit)',
				example:
					'const { ref, entry } = useIntersection({ threshold: 0.5 });\nif (entry?.isIntersecting) startAnimation();',
			},
		],
	},
	{
		title: 'Timing & Async',
		hooks: [
			{
				name: 'useDebouncedCallback',
				description: 'Debounces a callback by a given delay.',
				signature:
					'useDebouncedCallback<T extends (...args: never[]) => unknown>(fn: T, delay: number)',
				example:
					'const debouncedSearch = useDebouncedCallback((q: string) => search(q), 400);',
			},
			{
				name: 'useDebouncedValue',
				description:
					'Debounces a value, returning the stable value after the delay elapses.',
				signature: 'useDebouncedValue<T>(value: T, delay: number)',
				example:
					'const [debounced] = useDebouncedValue(searchQuery, 300);',
			},
			{
				name: 'useDebouncedState',
				description:
					'A debounced useState — the state updates only after the delay.',
				signature:
					'useDebouncedState<T>(initialValue: T, delay: number)',
				example:
					'const [value, setValue] = useDebouncedState("", 500);',
			},
			{
				name: 'useThrottledCallback',
				description:
					'Throttles a callback to fire at most once per interval.',
				signature:
					'useThrottledCallback<T extends (...args: never[]) => unknown>(fn: T, limit: number)',
				example:
					'const throttledScroll = useThrottledCallback(handleScroll, 100);',
			},
			{
				name: 'useThrottledValue',
				description: 'Throttles a value update.',
				signature: 'useThrottledValue<T>(value: T, limit: number)',
				example: 'const throttled = useThrottledValue(mouseX, 50);',
			},
			{
				name: 'useThrottledState',
				description: 'A throttled useState.',
				signature:
					'useThrottledState<T>(initialValue: T, limit: number)',
				example: 'const [value, setValue] = useThrottledState(0, 200);',
			},
			{
				name: 'useInterval',
				description: 'Manages a setInterval with start/stop controls.',
				signature: 'useInterval(fn: () => void, interval: number)',
				example:
					'const { start, stop } = useInterval(() => tick(), 1000);\nuseEffect(() => { start(); return stop; }, []);',
			},
			{
				name: 'useTimeout',
				description: 'Manages a setTimeout with start/clear helpers.',
				signature: 'useTimeout(fn: () => void, delay: number)',
				example:
					'const { start, clear } = useTimeout(() => close(), 3000);\n<button onClick={start}>Start timer</button>;',
			},
			{
				name: 'useFetch',
				description:
					'Minimal fetch wrapper that manages loading, error and data state.',
				signature: 'useFetch<T>(url: string, options?: RequestInit)',
				example:
					"const { data, loading, error } = useFetch<User[]>('/api/users');",
			},
			{
				name: 'useIdle',
				description:
					'Detects user inactivity after a given duration (ms).',
				signature: 'useIdle(timeout?: number)',
				example:
					'const idle = useIdle(5000); // true after 5 s of inactivity',
			},
		],
	},
	{
		title: 'Lifecycle',
		hooks: [
			{
				name: 'useMounted',
				description:
					'Returns true once the component has mounted. Useful for avoiding SSR mismatches.',
				signature: 'useMounted()',
				example:
					'const mounted = useMounted();\nif (!mounted) return null;',
			},
			{
				name: 'useDidUpdate',
				description:
					'Like useEffect but skips the first render — fires only on updates.',
				signature:
					'useDidUpdate(fn: () => void | (() => void), dependencies?: DependencyList)',
				example: 'useDidUpdate(() => { logChange(value); }, [value]);',
			},
			{
				name: 'useForceUpdate',
				description:
					'Returns a function that forces a component re-render.',
				signature: 'useForceUpdate()',
				example:
					'const forceUpdate = useForceUpdate();\n<button onClick={forceUpdate}>Re-render</button>;',
			},
			{
				name: 'useIsomorphicEffect',
				description:
					'useLayoutEffect on the client, useEffect on the server. Eliminates SSR warnings.',
				signature:
					'useIsomorphicEffect(fn: () => void | (() => void), deps?: DependencyList)',
				example:
					'useIsomorphicEffect(() => { measureLayout(ref.current); }, []);',
			},
			{
				name: 'useShallowEffect',
				description:
					'useEffect that compares dependencies shallowly instead of by reference.',
				signature:
					'useShallowEffect(fn: EffectCallback, deps?: DependencyList)',
				example:
					'useShallowEffect(() => { fetchData(options); }, [options]);',
			},
		],
	},
	{
		title: 'Utilities',
		hooks: [
			{
				name: 'useId',
				description:
					'Generates a unique, stable ID that is consistent between server and client.',
				signature: 'useId(staticId?: string)',
				example:
					"const id = useId('my-input');\n<label htmlFor={id} />\n<input id={id} />;",
			},
			{
				name: 'useMergedRef',
				description: 'Merges multiple refs into a single ref callback.',
				signature: 'useMergedRef<T>(...refs: React.Ref<T>[])',
				example:
					'const ref = useMergedRef(externalRef, localRef);\n<div ref={ref} />;',
			},
			{
				name: 'usePagination',
				description:
					'Computes pagination page ranges for numerical paginators.',
				signature:
					'usePagination(options: { total: number; page?: number; siblings?: number; boundaries?: number; onChange?: (page: number) => void })',
				example:
					'const { range, active, next, previous, setPage } = usePagination({ total: 20, page: 1 });',
			},
			{
				name: 'useQueue',
				description:
					'Manages a FIFO queue with add/remove/clear helpers.',
				signature:
					'useQueue<T>(options: { initialValues?: T[]; limit?: number })',
				example:
					'const { queue, add, remove, clear } = useQueue({ limit: 5 });',
			},
			{
				name: 'useMap',
				description: 'Manages a Map with a React-friendly API.',
				signature: 'useMap<K, V>(initialValues?: Iterable<[K, V]>)',
				example:
					'const [map, actions] = useMap([[1, "one"]]);\nactions.set(2, "two");',
			},
			{
				name: 'useSet',
				description: 'Manages a Set with a React-friendly API.',
				signature: 'useSet<T>(initialValues?: T[])',
				example:
					'const [set, actions] = useSet([1, 2, 3]);\nactions.add(4);\nactions.delete(1);',
			},
			{
				name: 'useHash',
				description:
					'Reads and writes the URL fragment (#hash) and listens for changes.',
				signature: 'useHash()',
				example:
					"const [hash, setHash] = useHash();\n<button onClick={() => setHash('#section-2')}>Go</button>;",
			},
			{
				name: 'useLogger',
				description:
					'Logs component mount, unmount and re-renders with prop diffs to the console (dev-only helper).',
				signature: 'useLogger(name: string, props?: object)',
				example: "useLogger('MyComponent', { count, name });",
			},
			{
				name: 'useReducedMotion',
				description:
					'Returns true when the user prefers reduced motion.',
				signature: 'useReducedMotion()',
				example:
					'const reduced = useReducedMotion();\n<motion.div animate={reduced ? {} : { y: -10 }} />;',
			},
			{
				name: 'useTextSelection',
				description:
					'Exposes the currently selected text in the document.',
				signature: 'useTextSelection()',
				example:
					'const { text, rects } = useTextSelection();\nif (text) showTooltip(rects);',
			},
		],
	},
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
	'State Management': (
		<svg
			className='w-3.5 h-3.5'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
			/>
		</svg>
	),
	Storage: (
		<svg
			className='w-3.5 h-3.5'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375'
			/>
		</svg>
	),
	'Browser & OS': (
		<svg
			className='w-3.5 h-3.5'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3'
			/>
		</svg>
	),
	'Events & Hotkeys': (
		<svg
			className='w-3.5 h-3.5'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z'
			/>
		</svg>
	),
	'UI & Layout': (
		<svg
			className='w-3.5 h-3.5'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z'
			/>
		</svg>
	),
	'Media & Pointer': (
		<svg
			className='w-3.5 h-3.5'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59'
			/>
		</svg>
	),
	'Timing & Async': (
		<svg
			className='w-3.5 h-3.5'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
			/>
		</svg>
	),
	Lifecycle: (
		<svg
			className='w-3.5 h-3.5'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
			/>
		</svg>
	),
	Utilities: (
		<svg
			className='w-3.5 h-3.5'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.8'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
			/>
		</svg>
	),
};

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function HooksPage() {
	const [activeCategory, setActiveCategory] = useState<string>(
		HOOK_CATEGORIES[0].title,
	);
	const [search, setSearch] = useState('');
	const [expandedHook, setExpandedHook] = useState<string | null>(null);

	const filtered = HOOK_CATEGORIES.map((cat) => ({
		...cat,
		hooks: cat.hooks.filter(
			(h) =>
				!search ||
				h.name.toLowerCase().includes(search.toLowerCase()) ||
				h.description.toLowerCase().includes(search.toLowerCase()),
		),
	})).filter((cat) => cat.hooks.length > 0);

	const activeHooks = search
		? filtered.flatMap((c) => c.hooks)
		: (HOOK_CATEGORIES.find((c) => c.title === activeCategory)?.hooks ??
			[]);

	const totalCount = HOOK_CATEGORIES.reduce((s, c) => s + c.hooks.length, 0);

	return (
		<div className='min-h-screen bg-[#09090b] text-zinc-100'>
			<Navbar />

			{/* Two-column layout */}
			<div className='flex flex-1 pt-14 min-h-screen'>
				{/* Sidebar */}
				<aside
					className='hidden md:flex flex-col w-52 shrink-0 border-r border-white/6 overflow-y-auto py-6 fixed top-14 bottom-0'
					style={{ background: 'rgba(255,255,255,0.015)' }}>
					<p className='px-4 mb-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-600'>
						Categories
					</p>
					{HOOK_CATEGORIES.map((cat) => (
						<button
							key={cat.title}
							onClick={() => {
								setActiveCategory(cat.title);
								setSearch('');
							}}
							className={`flex items-center gap-2.5 px-4 py-1.5 text-sm text-left w-full transition-colors ${
								!search && activeCategory === cat.title
									? 'text-violet-400 bg-violet-500/10'
									: 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
							}`}>
							<span
								className={
									!search && activeCategory === cat.title
										? 'text-violet-400'
										: 'text-zinc-600'
								}>
								{CATEGORY_ICONS[cat.title]}
							</span>
							<span>{cat.title}</span>
							<span className='ml-auto text-[10px] text-zinc-600'>
								{cat.hooks.length}
							</span>
						</button>
					))}
					<div className='mt-auto px-4 pt-6'>
						<div className='text-[10px] text-zinc-600 font-semibold uppercase tracking-widest mb-1'>
							Total hooks
						</div>
						<div className='text-2xl font-bold text-zinc-300'>
							{totalCount}
						</div>
					</div>
				</aside>

				{/* Main content */}
				<main className='flex-1 md:ml-52 pb-24'>
					{/* Hero */}
					<div className='px-6 md:px-10 pt-12 pb-8 border-b border-white/6'>
						<div
							className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5 border border-white/10 text-zinc-400'
							style={{ background: 'rgba(255,255,255,0.04)' }}>
							Hooks
						</div>
						<h1 className='text-3xl md:text-4xl font-bold text-white mb-3 leading-tight'>
							{totalCount} utility hooks
							<br />
							<span
								className='bg-clip-text text-transparent'
								style={{
									backgroundImage:
										'linear-gradient(135deg, #7c3aed, #06b6d4)',
								}}>
								ready to use
							</span>
						</h1>
						<p className='text-zinc-400 text-base max-w-2xl mb-6'>
							Tree-shakeable React hooks extracted from{' '}
							<code className='text-violet-400 font-mono text-sm'>
								@kivora/react
							</code>
							. Import only what you need — zero overhead.
						</p>
						{/* Search */}
						<div
							className='flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 text-zinc-500 text-sm w-full max-w-md'
							style={{ background: 'rgba(255,255,255,0.04)' }}>
							<svg
								className='w-4 h-4 shrink-0'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z'
								/>
							</svg>
							<input
								className='bg-transparent outline-none w-full placeholder-zinc-600 text-zinc-300'
								placeholder='Search hooks…'
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							{search && (
								<button
									onClick={() => setSearch('')}
									className='text-zinc-500 hover:text-zinc-300'>
									<svg
										className='w-3.5 h-3.5'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2.5'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6 18 18 6M6 6l12 12'
										/>
									</svg>
								</button>
							)}
						</div>
					</div>

					{/* Hooks list */}
					<div className='px-6 md:px-10 pt-8'>
						{search && (
							<p className='text-xs text-zinc-500 mb-6'>
								{activeHooks.length} result
								{activeHooks.length !== 1 ? 's' : ''} for
								&ldquo;{search}&rdquo;
							</p>
						)}
						{!search && (
							<h2 className='text-base font-semibold text-zinc-200 mb-6 flex items-center gap-2'>
								<span className='text-violet-400'>
									{CATEGORY_ICONS[activeCategory]}
								</span>
								{activeCategory}
								<span className='text-xs text-zinc-600 font-normal ml-1'>
									({activeHooks.length})
								</span>
							</h2>
						)}
						<div className='flex flex-col gap-3'>
							{activeHooks.map((hook) => {
								const isExpanded = expandedHook === hook.name;
								return (
									<div
										key={hook.name}
										className='rounded-xl border border-white/8 overflow-hidden transition-all'
										style={{
											background:
												'rgba(255,255,255,0.025)',
										}}>
										<button
											onClick={() =>
												setExpandedHook(
													isExpanded
														? null
														: hook.name,
												)
											}
											className='w-full flex items-center gap-3 px-5 py-4 text-left group'>
											<div
												className='w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-white/10 text-violet-400'
												style={{
													background:
														'rgba(124,58,237,0.1)',
												}}>
												<svg
													className='w-3.5 h-3.5'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
													/>
												</svg>
											</div>
											<div className='flex-1 min-w-0'>
												<div className='flex items-center gap-2 mb-0.5'>
													<code className='text-sm font-semibold text-white font-mono'>
														{hook.name}
													</code>
												</div>
												<p className='text-xs text-zinc-500 truncate'>
													{hook.description}
												</p>
											</div>
											<svg
												className={`w-4 h-4 text-zinc-600 shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='m19.5 8.25-7.5 7.5-7.5-7.5'
												/>
											</svg>
										</button>
										{isExpanded && (
											<div className='border-t border-white/6 px-5 py-4 space-y-4'>
												<p className='text-sm text-zinc-400 leading-relaxed'>
													{hook.description}
												</p>
												<div>
													<p className='text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-2'>
														Signature
													</p>
													<Code
														block
														showLineNumbers
														copyable
														language='typescript'>
														{hook.signature}
													</Code>
												</div>
												<div>
													<p className='text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-2'>
														Example
													</p>
													<Code
														block
														showLineNumbers
														copyable
														language='typescript'>
														{hook.example}
													</Code>
												</div>
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
