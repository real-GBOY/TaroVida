/** @format */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sprout, Recycle } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import { products } from "../data/products";
import { fadeUp, stagger, viewportOnce } from "../animations";

const benefits = [
	{
		icon: Sprout,
		title: "Farmer Income",
		desc: "Stable pricing beyond seasonal gluts",
	},
	{
		icon: Recycle,
		title: "Zero Waste",
		desc: "Full-plant processing in Shanawan",
	},
	{
		icon: Leaf,
		title: "Local Processing",
		desc: "Value added close to the source",
	},
];

export default function Products() {
	return (
		<>
			<PageHero
				icon={Leaf}
				title='Our Products'
				subtitle='Value-added taro innovations — from plant-based nutrition to biodegradable agriculture inputs.'
			/>

			<section className='bg-white py-16 px-6'>
				<div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
					{benefits.map((b, i) => (
						<motion.div
							key={b.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={viewportOnce}
							transition={{ delay: i * 0.1 }}
							className='text-center p-6 border border-brand-purple/10 rounded-xl'>
							<b.icon className='h-10 w-10 mx-auto mb-4 text-brand-olive' />
							<h3 className='font-serif text-lg font-semibold text-brand-purple mb-2'>
								{b.title}
							</h3>
							<p className='font-sans text-sm text-brand-warm/70'>{b.desc}</p>
						</motion.div>
					))}
				</div>
			</section>

			<section className='bg-brand-cream py-16 px-6 pb-28'>
				<motion.div
					variants={stagger}
					initial='hidden'
					whileInView='visible'
					viewport={viewportOnce}
					className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{products.map((product) => {
						const Icon = product.icon;
						return (
							<motion.div
								key={product.id}
								variants={fadeUp}
								className='bg-white overflow-hidden rounded-xl border border-brand-purple/20 group transition-all duration-300 hover:border-brand-olive/50 hover:shadow-xl'>
								<Link to={`/products/${product.id}`}>
									<div className='aspect-square overflow-hidden'>
										<img
											src={product.image}
											alt={product.name}
											className='w-full h-full object-contain bg-brand-cream group-hover:scale-105 transition-transform duration-500'
										/>
									</div>
									<div className='p-6'>
										<span className='font-sans text-xs tracking-widest uppercase text-brand-olive'>
											{product.category}
										</span>
										<div className='flex items-center gap-2 mt-2 mb-2'>
											<Icon size={16} className='text-brand-olive' />
											<h3 className='font-serif text-xl font-semibold text-brand-purple'>
												{product.name}
											</h3>
										</div>
										<p className='font-sans text-sm text-brand-warm/70 mb-4'>
											{product.shortDesc}
										</p>
										<span className='inline-flex items-center gap-1 text-brand-olive font-sans text-xs uppercase tracking-widest'>
											Learn more <ArrowRight size={14} />
										</span>
									</div>
								</Link>
							</motion.div>
						);
					})}
				</motion.div>
			</section>
		</>
	);
}
