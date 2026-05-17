/** @format */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "../../data/products";
import { fadeUp, stagger, viewportOnce } from "../../animations";

interface ProductsSectionProps {
	compact?: boolean;
}

export default function ProductsSection({
	compact = false,
}: ProductsSectionProps) {
	const list = compact ? products.slice(0, 3) : products;

	return (
		<section
			id='products'
			className='bg-brand-cream py-28 px-6 relative overflow-hidden'>
			<div
				className='absolute inset-0 opacity-[0.03] pointer-events-none'
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
				}}
			/>

			<div className='max-w-6xl mx-auto relative z-10'>
				<motion.div
					variants={fadeUp}
					initial='hidden'
					whileInView='visible'
					viewport={viewportOnce}
					className='text-center mb-16'>
					<span className='inline-block font-sans text-xs tracking-[0.3em] uppercase text-brand-olive font-medium mb-4'>
						Our Products
					</span>
					<h2 className='font-serif text-4xl md:text-5xl font-semibold text-brand-purple leading-tight'>
						Nature Processed With Purpose
					</h2>
				</motion.div>

				<motion.div
					variants={stagger}
					initial='hidden'
					whileInView='visible'
					viewport={viewportOnce}
					className='grid md:grid-cols-3 gap-6'>
					{list.map((product) => {
						const Icon = product.icon;
						return (
							<motion.div
								key={product.id}
								variants={fadeUp}
								whileHover={{
									y: -8,
									boxShadow: "0 24px 64px rgba(58,28,54,0.15)",
								}}
								className='bg-white overflow-hidden rounded-xl border border-brand-purple/20 group transition-all duration-300 hover:border-brand-olive/50'>
								<Link to={`/products/${product.id}`} className='block'>
									<div className='relative h-52 overflow-hidden'>
										<img
											src={product.image}
											alt={product.name}
											className='w-full h-full object-contain bg-brand-cream transition-transform duration-700 group-hover:scale-105'
										/>
										<div className='absolute inset-0 bg-brand-purple/20 group-hover:bg-brand-purple/10 transition-colors duration-300' />
										<div className='absolute top-0 left-0 right-0 h-1 bg-brand-olive' />
									</div>

									<div className='p-6'>
										<div className='flex items-center gap-3 mb-3'>
											<div className='w-8 h-8 flex items-center justify-center bg-brand-olive/10 rounded-lg'>
												<Icon size={15} className='text-brand-olive' />
											</div>
											<span className='font-sans text-xs tracking-widest uppercase text-brand-olive/80 font-medium'>
												{product.tag}
											</span>
										</div>
										<h3 className='font-serif text-xl font-semibold text-brand-purple mb-2'>
											{product.name}
										</h3>
										<p className='font-sans text-brand-warm/70 text-sm leading-relaxed mb-4'>
											{product.shortDesc}
										</p>
										<span className='inline-flex items-center gap-1 font-sans text-xs tracking-widest uppercase text-brand-olive group-hover:gap-2 transition-all'>
											Learn more <ArrowRight size={14} />
										</span>
									</div>
								</Link>
							</motion.div>
						);
					})}
				</motion.div>

				{compact && (
					<motion.div
						variants={fadeUp}
						initial='hidden'
						whileInView='visible'
						viewport={viewportOnce}
						className='text-center mt-12'>
						<Link
							to='/products'
							className='inline-flex items-center gap-2 border border-brand-purple/30 text-brand-purple font-sans text-sm tracking-widest uppercase px-8 py-3 hover:bg-brand-purple/5 transition-colors'>
							View All Products
							<ArrowRight size={16} />
						</Link>
					</motion.div>
				)}
			</div>
		</section>
	);
}
