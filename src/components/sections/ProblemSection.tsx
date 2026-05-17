import { motion } from 'framer-motion';
import { TrendingDown, Users, Leaf } from 'lucide-react';
import { stagger, slideInLeft, slideInRight, viewportOnce } from '../../animations';

const problems = [
  {
    icon: TrendingDown,
    title: 'Market Oversupply',
    desc: 'Seasonal gluts crash prices, leaving farmers unable to recover production costs.',
  },
  {
    icon: Users,
    title: 'Trader Monopolies',
    desc: 'Middlemen control distribution, capturing most of the value chain profit.',
  },
  {
    icon: Leaf,
    title: 'Post-Harvest Loss',
    desc: 'Up to 30% of yield is wasted due to poor storage and lack of processing infrastructure.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-brand-cream py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Stat */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-brand-olive font-medium">
              The Challenge
            </span>
            <span className="font-serif text-8xl md:text-9xl font-semibold text-brand-purple leading-none block">
              60%
            </span>
            <p className="font-serif text-2xl md:text-3xl text-brand-warm leading-relaxed max-w-md">
              of Egypt's taro crop comes from a single village — creating extreme vulnerability.
            </p>
            <p className="font-sans text-brand-warm/70 text-base leading-relaxed max-w-md">
              Shanawan, Menoufia produces the majority of Egypt's taro, yet its farmers remain trapped in cycles of poverty, oversupply, and exploitation.
            </p>
          </motion.div>

          {/* Problem cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {problems.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={slideInRight}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(58,28,54,0.12)' }}
                className="bg-white border border-brand-purple/15 rounded-xl p-6 flex gap-5 items-start transition-shadow duration-300 cursor-default"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-brand-purple/5 border border-brand-purple/20 rounded-lg">
                  <Icon size={18} className="text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-brand-purple mb-1">{title}</h3>
                  <p className="font-sans text-brand-warm/80 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
