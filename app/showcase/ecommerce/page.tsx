'use client';

import {
	ActionIcon,
	Badge,
	Breadcrumbs,
	Button,
	Checkbox,
	CheckboxGroup,
	Notification,
	Pagination,
	Progress,
	Rating,
	Select,
	Stepper,
	StepperCompleted,
	StepperStep,
} from '@kivora/react';
import { useState } from 'react';

// ── Types & Data ──────────────────────────────────────────────────────────────

interface Product {
	id: number;
	name: string;
	brand: string;
	price: number;
	originalPrice?: number;
	rating: number;
	reviews: number;
	badge?: string;
	badgeColor?: string;
	accent: string;
	category: string;
	sizes: string[];
}

const PRODUCTS: Product[] = [
	{
		id: 1,
		name: 'Sneaker Air Dusk',
		brand: 'KOVA',
		price: 129,
		originalPrice: 179,
		rating: 4.7,
		reviews: 342,
		badge: 'Oferta',
		badgeColor: 'red',
		accent: 'from-orange-500/30 to-red-500/10',
		category: 'Zapatillas',
		sizes: ['38', '39', '40', '41', '42'],
	},
	{
		id: 2,
		name: 'Chaqueta Alpine',
		brand: 'NŌRD',
		price: 219,
		rating: 4.5,
		reviews: 128,
		badge: 'Nuevo',
		badgeColor: 'green',
		accent: 'from-sky-500/30 to-blue-500/10',
		category: 'Chaquetas',
		sizes: ['S', 'M', 'L', 'XL'],
	},
	{
		id: 3,
		name: 'Mochila Vertex 30L',
		brand: 'TRECK',
		price: 89,
		rating: 4.8,
		reviews: 511,
		accent: 'from-amber-500/30 to-yellow-500/10',
		category: 'Mochilas',
		sizes: ['Única'],
	},
	{
		id: 4,
		name: 'Jersey Merino Slim',
		brand: 'KOVA',
		price: 74,
		originalPrice: 99,
		rating: 4.3,
		reviews: 76,
		badge: 'Oferta',
		badgeColor: 'red',
		accent: 'from-violet-500/30 to-purple-500/10',
		category: 'Ropa',
		sizes: ['S', 'M', 'L'],
	},
	{
		id: 5,
		name: 'Short Kinetic 7"',
		brand: 'MOVE',
		price: 49,
		rating: 4.6,
		reviews: 203,
		badge: 'Nuevo',
		badgeColor: 'green',
		accent: 'from-emerald-500/30 to-teal-500/10',
		category: 'Ropa',
		sizes: ['S', 'M', 'L', 'XL', 'XXL'],
	},
	{
		id: 6,
		name: 'Gorra Trail Shield',
		brand: 'TRECK',
		price: 34,
		rating: 4.2,
		reviews: 89,
		accent: 'from-rose-500/30 to-pink-500/10',
		category: 'Accesorios',
		sizes: ['Única'],
	},
];

const CATEGORIES = [
	'Zapatillas',
	'Chaquetas',
	'Mochilas',
	'Ropa',
	'Accesorios',
];
const BRANDS = ['KOVA', 'NŌRD', 'TRECK', 'MOVE'];

interface CartItem {
	product: Product;
	size: string;
	qty: number;
}

type CheckoutStep = 0 | 1 | 2 | 3;

// ── Component ─────────────────────────────────────────────────────────────────

export default function EcommercePage() {
	const [cart, setCart] = useState<CartItem[]>([]);
	const [wishlist, setWishlist] = useState<number[]>([]);
	const [filterCat, setFilterCat] = useState<string[]>([]);
	const [filterBrand, setFilterBrand] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState<string | null>(null);
	const [page, setPage] = useState(1);
	const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>(0);
	const [showCart, setShowCart] = useState(false);
	const [notification, setNotification] = useState<string | null>(null);

	function addToCart(product: Product) {
		setCart((prev) => {
			const existing = prev.find((i) => i.product.id === product.id);
			if (existing) {
				return prev.map((i) =>
					i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i,
				);
			}
			return [...prev, { product, size: product.sizes[0], qty: 1 }];
		});
		setNotification(product.name);
		setTimeout(() => setNotification(null), 2500);
	}

	function toggleWishlist(id: number) {
		setWishlist((prev) =>
			prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
		);
	}

	function removeFromCart(id: number) {
		setCart((prev) => prev.filter((i) => i.product.id !== id));
	}

	const cartTotal = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
	const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

	let visible = PRODUCTS.filter((p) => {
		const matchCat =
			filterCat.length === 0 || filterCat.includes(p.category);
		const matchBrand =
			filterBrand.length === 0 || filterBrand.includes(p.brand);
		return matchCat && matchBrand;
	});

	if (sortBy === 'price_asc')
		visible = [...visible].sort((a, b) => a.price - b.price);
	if (sortBy === 'price_desc')
		visible = [...visible].sort((a, b) => b.price - a.price);
	if (sortBy === 'rating')
		visible = [...visible].sort((a, b) => b.rating - a.rating);

	const freeShippingThreshold = 150;
	const freeShippingProgress = Math.min(
		(cartTotal / freeShippingThreshold) * 100,
		100,
	);

	return (
		<div className='min-h-screen bg-[#0a0a12] pt-10'>
			{/* Top notification */}
			{notification && (
				<div className='fixed right-4 top-14 z-[60] w-72'>
					<Notification
						color='green'
						title='Añadido al carrito'
						withCloseButton
						onClose={() => setNotification(null)}>
						{notification}
					</Notification>
				</div>
			)}

			{/* Header */}
			<div className='border-b border-white/8 bg-[#07070f] px-6 py-4'>
				<div className='flex items-center justify-between'>
					<div>
						<Breadcrumbs
							separator='/'
							items={[
								{ label: 'Inicio', href: '/showcase' },
								{ label: 'Tienda', href: '#' },
								{ label: 'Todos los productos', href: '#' },
							]}
						/>
					</div>
					<div className='flex items-center gap-3'>
						<ActionIcon
							variant='subtle'
							aria-label='Favoritos'
							size='md'>
							<svg
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={1.8}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
								/>
							</svg>
						</ActionIcon>
						<button
							onClick={() => setShowCart(!showCart)}
							className='relative flex items-center gap-2 rounded-lg border border-white/8 px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/6'>
							<svg
								className='h-4 w-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={1.8}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
								/>
							</svg>
							Carrito
							{cartCount > 0 && (
								<span className='flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white'>
									{cartCount}
								</span>
							)}
						</button>
					</div>
				</div>
			</div>

			<div className='flex'>
				{/* ── Filters sidebar ── */}
				<aside className='hidden w-56 shrink-0 border-r border-white/8 px-5 py-6 lg:block'>
					<p className='mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
						Filtros
					</p>

					<div className='mb-5'>
						<p className='mb-2 text-xs font-medium text-zinc-400'>
							Categoría
						</p>
						<CheckboxGroup
							value={filterCat}
							onChange={setFilterCat}>
							{CATEGORIES.map((cat) => (
								<Checkbox
									key={cat}
									value={cat}
									label={cat}
									size='xs'
								/>
							))}
						</CheckboxGroup>
					</div>

					<div className='mb-5'>
						<p className='mb-2 text-xs font-medium text-zinc-400'>
							Marca
						</p>
						<CheckboxGroup
							value={filterBrand}
							onChange={setFilterBrand}>
							{BRANDS.map((b) => (
								<Checkbox
									key={b}
									value={b}
									label={b}
									size='xs'
								/>
							))}
						</CheckboxGroup>
					</div>

					<button
						onClick={() => {
							setFilterCat([]);
							setFilterBrand([]);
						}}
						className='text-xs text-zinc-600 underline hover:text-zinc-400'>
						Limpiar filtros
					</button>
				</aside>

				{/* ── Products ── */}
				<div className='flex-1 px-5 py-6'>
					{/* Sort row */}
					<div className='mb-5 flex items-center justify-between'>
						<p className='text-sm text-zinc-500'>
							{visible.length} productos
						</p>
						<Select
							placeholder='Ordenar por'
							value={sortBy}
							onChange={setSortBy}
							clearable
							size='sm'
							className='w-44'
							data={[
								{
									value: 'price_asc',
									label: 'Precio: menor a mayor',
								},
								{
									value: 'price_desc',
									label: 'Precio: mayor a menor',
								},
								{ value: 'rating', label: 'Mejor valorados' },
							]}
						/>
					</div>

					{/* Grid */}
					<div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
						{visible.map((product) => (
							<div
								key={product.id}
								className='group overflow-hidden rounded-2xl border border-white/8 bg-white/2 transition-all hover:border-white/16'>
								{/* Image placeholder */}
								<div
									className={`relative aspect-square bg-linear-to-br ${product.accent}`}>
									{product.badge && (
										<div className='absolute left-3 top-3'>
											<Badge
												size='xs'
												color={
													product.badgeColor as any
												}
												variant='filled'>
												{product.badge}
											</Badge>
										</div>
									)}
									<ActionIcon
										variant='subtle'
										size='sm'
										className='absolute right-3 top-3'
										aria-label='Favorito'
										onClick={() =>
											toggleWishlist(product.id)
										}>
										<svg
											className='h-4 w-4'
											fill={
												wishlist.includes(product.id)
													? 'currentColor'
													: 'none'
											}
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={1.8}
											style={{
												color: wishlist.includes(
													product.id,
												)
													? '#f472b6'
													: undefined,
											}}>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
											/>
										</svg>
									</ActionIcon>

									{/* Brand label */}
									<div className='absolute bottom-3 left-3'>
										<span className='font-mono text-xs font-bold tracking-widest text-white/30'>
											{product.brand}
										</span>
									</div>
								</div>

								{/* Info */}
								<div className='p-4'>
									<p className='mb-0.5 truncate text-sm font-semibold text-white'>
										{product.name}
									</p>
									<div className='mb-3 flex items-center gap-1.5'>
										<Rating
											value={product.rating}
											readOnly
											size='xs'
											fractions={2}
										/>
										<span className='text-[10px] text-zinc-600'>
											({product.reviews})
										</span>
									</div>
									<div className='flex items-center justify-between'>
										<div>
											<span className='text-base font-bold text-white'>
												{product.price}€
											</span>
											{product.originalPrice && (
												<span className='ml-1.5 text-xs text-zinc-600 line-through'>
													{product.originalPrice}€
												</span>
											)}
										</div>
										<Button
											size='xs'
											onClick={() => addToCart(product)}>
											Añadir
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Pagination */}
					<div className='mt-8 flex justify-center'>
						<Pagination
							total={3}
							value={page}
							onChange={setPage}
							size='sm'
						/>
					</div>
				</div>

				{/* ── Cart drawer ── */}
				{showCart && (
					<div className='hidden w-80 shrink-0 border-l border-white/8 bg-[#07070f] px-5 py-6 lg:flex lg:flex-col'>
						<div className='mb-4 flex items-center justify-between'>
							<h2 className='text-sm font-bold text-white'>
								Carrito ({cartCount})
							</h2>
							<button
								onClick={() => setShowCart(false)}
								className='text-zinc-600 hover:text-zinc-300'>
								<svg
									className='h-4 w-4'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>

						{/* Free shipping bar */}
						<div className='mb-4 rounded-lg border border-white/8 bg-white/2 p-3'>
							<p className='mb-1.5 text-xs text-zinc-500'>
								{freeShippingProgress >= 100
									? '¡Envío gratis desbloqueado!'
									: `${(freeShippingThreshold - cartTotal).toFixed(0)}€ para envío gratis`}
							</p>
							<Progress
								value={freeShippingProgress}
								size='xs'
								color={
									freeShippingProgress >= 100
										? 'green'
										: 'brand'
								}
							/>
						</div>

						{/* Items */}
						<div className='flex-1 space-y-3 overflow-y-auto'>
							{cart.length === 0 ? (
								<p className='py-6 text-center text-sm text-zinc-600'>
									Tu carrito está vacío
								</p>
							) : (
								cart.map((item) => (
									<div
										key={item.product.id}
										className='flex items-start gap-3 rounded-xl border border-white/6 p-3'>
										<div
											className={`h-12 w-12 shrink-0 rounded-lg bg-linear-to-br ${item.product.accent}`}
										/>
										<div className='min-w-0 flex-1'>
											<p className='truncate text-xs font-medium text-white'>
												{item.product.name}
											</p>
											<p className='text-[10px] text-zinc-500'>
												Talla {item.size} · x{item.qty}
											</p>
											<p className='text-xs font-bold text-white'>
												{(
													item.product.price *
													item.qty
												).toFixed(0)}
												€
											</p>
										</div>
										<ActionIcon
											variant='subtle'
											size='xs'
											color='red'
											onClick={() =>
												removeFromCart(item.product.id)
											}>
											<svg
												className='h-3.5 w-3.5'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												strokeWidth={2}>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M6 18L18 6M6 6l12 12'
												/>
											</svg>
										</ActionIcon>
									</div>
								))
							)}
						</div>

						{/* Checkout stepper */}
						{cart.length > 0 && (
							<div className='mt-4 border-t border-white/8 pt-4'>
								<Stepper
									active={checkoutStep}
									size='xs'
									orientation='vertical'
									className='mb-4'>
									<StepperStep
										label='Carrito'
										description='Revisa tus productos'
									/>
									<StepperStep
										label='Envío'
										description='Dirección de entrega'
									/>
									<StepperStep
										label='Pago'
										description='Método de pago'
									/>
									<StepperCompleted>
										<p className='text-xs text-zinc-400'>
											¡Pedido confirmado!
										</p>
									</StepperCompleted>
								</Stepper>

								<div className='flex items-center justify-between'>
									<div>
										<p className='text-xs text-zinc-500'>
											Total
										</p>
										<p className='text-lg font-bold text-white'>
											{cartTotal.toFixed(0)}€
										</p>
									</div>
									<Button
										size='sm'
										onClick={() =>
											setCheckoutStep((s) =>
												Math.min(
													3,
													(s + 1) as CheckoutStep,
												),
											)
										}>
										{checkoutStep === 0
											? 'Finalizar compra'
											: checkoutStep === 3
												? 'Hecho'
												: 'Continuar'}
									</Button>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
