import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../../animations';
import { partners } from '../../data/partners';

export default function PartnersSection() {
  const featured = partners.slice(0, 3);

  return (
    <section id="partners" className="bg-brand-cream border-t border-brand-warm/10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-brand-olive font-medium mb-4">
            Supported By
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-purple">
            Our Partners & Supporters
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {featured.map(({ name, type, icon: Icon }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center p-8 border border-brand-warm/15 bg-white/60 gap-4 rounded-xl transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-brand-purple/5 border border-brand-purple/15 rounded-full">
                <Icon size={18} className="text-brand-purple" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-brand-purple mb-1">{name}</h3>
                <p className="font-sans text-brand-warm/60 text-xs tracking-wide uppercase">{type}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center">
          <Link
            to="/partner"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-brand-olive hover:gap-3 transition-all"
          >
            View all partners <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </section>
  );
}
