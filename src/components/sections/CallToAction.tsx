import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LogoWatermark } from '../LogoMark';
import { fadeUp, viewportOnce } from '../../animations';

export default function CallToAction() {
  return (
    <section className="bg-brand-forest py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <LogoWatermark size={520} />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-cream mb-6 leading-tight">
          Grow the Bioeconomy With Us
        </h2>
        <p className="font-sans text-brand-cream/70 text-lg mb-10 leading-relaxed">
          Whether you are a farmer, buyer, researcher, or community leader — partner with TaroVida to turn
          Shanawan&apos;s taro into lasting opportunity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/partner"
            className="inline-flex items-center gap-2 bg-brand-olive text-brand-cream font-sans text-sm tracking-widest uppercase px-8 py-3 hover:bg-brand-olive/90 transition-colors"
          >
            Become a Partner
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-brand-cream/40 text-brand-cream font-sans text-sm tracking-widest uppercase px-8 py-3 hover:bg-brand-cream/10 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
