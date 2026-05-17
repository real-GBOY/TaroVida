import { motion } from 'framer-motion';
import { Sprout, Users, FlaskConical, TrendingUp } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../../animations';

const milestones = [
  {
    year: '2024',
    title: 'Project Founded',
    description:
      'Enactus Menoufia students identified Shanawan\'s taro oversupply crisis and began designing a zero-waste processing model.',
    icon: Sprout,
  },
  {
    year: '2025 Q1',
    title: 'Farmer Pilot Network',
    description:
      'Partnered with local farmers to collect surplus corms and leaves, establishing the first processing trials.',
    icon: Users,
  },
  {
    year: '2025 Q2',
    title: 'Product Development',
    description:
      'Developed Taro Milk, herbal leaf products, and starch-based hydrogel prototypes with university research support.',
    icon: FlaskConical,
  },
  {
    year: '2025 Q3',
    title: 'Scaling Impact',
    description:
      'Expanding partnerships with industry and academia to grow processing capacity and farmer income stability.',
    icon: TrendingUp,
  },
];

export default function ImpactTimeline() {
  return (
    <section className="bg-brand-cream py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-brand-olive font-medium mb-4">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-purple">
            From Field Research to Bioeconomy
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-8"
        >
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              variants={fadeUp}
              className="flex gap-6 items-start bg-white border border-brand-purple/10 rounded-xl p-6"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brand-purple/10 rounded-full">
                <m.icon size={22} className="text-brand-purple" />
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-brand-olive mb-1">{m.year}</p>
                <h3 className="font-serif text-xl font-semibold text-brand-purple mb-2">{m.title}</h3>
                <p className="font-sans text-brand-warm/80 text-sm leading-relaxed">{m.description}</p>
              </div>
              {i < milestones.length - 1 && (
                <span className="sr-only">Step {i + 1} of {milestones.length}</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
