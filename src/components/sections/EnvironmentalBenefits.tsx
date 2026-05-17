import { motion } from 'framer-motion';
import { site } from '../../data/site';
import { slideInLeft, slideInRight, viewportOnce } from '../../animations';

const benefits = [
  'Up to 30% post-harvest loss recovered through processing',
  'Full-plant use: corms, leaves, and starch streams',
  'Reduced pressure on landfill and field burning',
  'Water-smart agriculture via hydrogel soil amendments',
  'Stable farmer income decoupled from raw crop price swings',
];

export default function EnvironmentalBenefits() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-brand-olive font-medium mb-4">
            Environmental & Social Benefits
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-purple mb-6">
            A Circular Model for Rural Egypt
          </h2>
          <p className="font-sans text-brand-warm/80 leading-relaxed mb-6">
            TaroVida treats agricultural surplus as a resource — not waste. By processing taro at the source in
            Shanawan, we shorten supply chains and keep value in the community.
          </p>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 font-sans text-brand-warm/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-olive mt-2 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <img
              src={site.impactImageUrl}
              alt="TaroVida team with farmers holding taro leaves in Shanawan"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-brand-forest/25" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-brand-olive/30 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
