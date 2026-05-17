/** @format */

import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Leaf } from "lucide-react";
import { getProductById } from "../data/products";
import { fadeUp, viewportOnce } from "../animations";
import NotFound from "./NotFound";

export default function ProductDetail() {
	const { id } = useParams();
	const product = id ? getProductById(id) : undefined;

	if (!product) {
		return (
			<NotFound
				title='Product Not Found'
				message='This product does not exist. Browse our taro-based product lines or return home.'
			/>
		);
	}

	const Icon = product.icon;

	return (
		<>
			<div className='bg-brand-cream pt-24 pb-4 px-6'>
				<div className='max-w-6xl mx-auto font-sans text-sm text-brand-warm/60 flex flex-wrap gap-2'>
					<Link to='/' className='hover:text-brand-purple'>
						Home
					</Link>
					<span>/</span>
					<Link to='/products' className='hover:text-brand-purple'>
						Products
					</Link>
					<span>/</span>
					<span className='text-brand-purple'>{product.name}</span>
				</div>
			</div>

			<section className='bg-brand-cream py-12 px-6'>
				<div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-12'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}>
						<div className='aspect-square overflow-hidden rounded-xl'>
							<img
								src={product.image}
								alt={product.name}
								className='w-full h-full object-contain bg-brand-cream'
							/>
						</div>
						<div className='mt-4 flex items-center gap-3 p-4 bg-brand-forest/10 border border-brand-forest/20 rounded-xl'>
							<Leaf className='text-brand-forest' size={20} />
							<div>
								<p className='font-sans text-sm font-medium text-brand-purple'>
									Zero-waste processing
								</p>
								<p className='font-sans text-xs text-brand-warm/70'>
									Sourced from Shanawan taro farmers
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						className='space-y-6'>
						<div className='flex items-center gap-2'>
							<Icon size={20} className='text-brand-olive' />
							<span className='font-sans text-xs tracking-widest uppercase text-brand-olive'>
								{product.tag}
							</span>
						</div>
						<h1 className='font-serif text-4xl font-semibold text-brand-purple'>
							{product.name}
						</h1>
						<p className='font-serif text-xl text-brand-olive'>
							{product.price}
						</p>
						<p className='font-sans text-brand-warm/80 leading-relaxed'>
							{product.description}
						</p>

						<div>
							<h2 className='font-serif text-xl font-semibold text-brand-purple mb-3'>
								Key Features
							</h2>
							<ul className='space-y-2'>
								{product.features.map((f) => (
									<li
										key={f}
										className='flex items-start gap-2 font-sans text-sm text-brand-warm/80'>
										<Check
											size={16}
											className='text-brand-olive shrink-0 mt-0.5'
										/>
										{f}
									</li>
								))}
							</ul>
						</div>

						{product.process && product.process.length > 0 && (
							<div>
								<h2 className='font-serif text-xl font-semibold text-brand-purple mb-3'>
									Processing Steps
								</h2>
								<ol className='space-y-3'>
									{product.process.map((step, index) => (
										<li
											key={step}
											className='flex gap-3 font-sans text-sm text-brand-warm/80 leading-relaxed'>
											<span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-olive/15 font-sans text-xs font-semibold text-brand-olive'>
												{index + 1}
											</span>
											<span className='pt-0.5'>{step}</span>
										</li>
									))}
								</ol>
							</div>
						)}

						<div className='flex flex-col sm:flex-row gap-4 pt-4'>
							<Link
								to='/contact'
								className='text-center bg-brand-purple text-brand-cream font-sans text-sm tracking-widest uppercase px-8 py-3 hover:bg-brand-purple/90'>
								Request Quote
							</Link>
							<Link
								to='/contact'
								className='text-center border border-brand-purple text-brand-purple font-sans text-sm tracking-widest uppercase px-8 py-3 hover:bg-brand-purple/5'>
								Request Sample
							</Link>
						</div>
					</motion.div>
				</div>

				<motion.div
					variants={fadeUp}
					initial='hidden'
					whileInView='visible'
					viewport={viewportOnce}
					className='max-w-6xl mx-auto mt-16 grid lg:grid-cols-2 gap-12'>
					<div>
						<h2 className='font-serif text-2xl font-semibold text-brand-purple mb-6'>
							Specifications
						</h2>
						<div className='space-y-3'>
							{product.specifications.map((spec) => (
								<div
									key={spec.label}
									className='flex justify-between gap-4 py-3 border-b border-brand-purple/10 font-sans text-sm'>
									<span className='text-brand-warm/70'>{spec.label}</span>
									<span className='text-brand-purple text-right'>
										{spec.value}
									</span>
								</div>
							))}
						</div>
					</div>

					<div>
						<h2 className='font-serif text-2xl font-semibold text-brand-purple mb-6'>
							Applications
						</h2>
						<ul className='space-y-2 mb-8'>
							{product.applications.map((app) => (
								<li
									key={app}
									className='flex items-center gap-2 font-sans text-sm text-brand-warm/80'>
									<span className='w-1.5 h-1.5 rounded-full bg-brand-olive' />
									{app}
								</li>
							))}
						</ul>

						<div className='bg-brand-forest/10 border border-brand-forest/20 rounded-xl p-6'>
							<h3 className='font-serif text-lg font-semibold text-brand-purple mb-3'>
								Impact
							</h3>
							<ul className='space-y-2'>
								{product.impact.map((item) => (
									<li
										key={item}
										className='font-sans text-sm text-brand-warm/80 leading-relaxed'>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</motion.div>

				<div className='max-w-6xl mx-auto mt-16 text-center'>
					<Link
						to='/products'
						className='inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-brand-purple border border-brand-purple/30 px-6 py-3 hover:bg-brand-purple/5'>
						<ArrowLeft size={16} />
						All Products
					</Link>
				</div>
			</section>
		</>
	);
}
