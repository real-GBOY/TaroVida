import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { LogoWatermark } from '../LogoMark';
import { fadeUp, stagger, viewportOnce } from '../../animations';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 5,   suffix: '',    label: 'Farmers Directly Impacted' },
  { value: 600, suffix: ' kg', label: 'Waste Converted' },
  { value: 6,   suffix: '',    label: 'Products Developed' },
  { value: 25,  suffix: '+',   label: 'Lives Improved' },
];

const sdgs = [
  { num: 1,  label: 'No Poverty',        bg: '#E5243B' },
  { num: 2,  label: 'Zero Hunger',       bg: '#DDA63A' },
  { num: 8,  label: 'Decent Work',       bg: '#A21942' },
  { num: 12, label: 'Responsible Consumption', bg: '#BF8B2E' },
  { num: 15, label: 'Life on Land',      bg: '#56C02B' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl font-semibold text-brand-cream tabular-nums">
      {count}{suffix}
    </span>
  );
}

interface ImpactSectionProps {
  hideIntro?: boolean;
}

export default function ImpactSection({ hideIntro = false }: ImpactSectionProps) {
  return (
    <section id="impact" className="bg-brand-purple py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <LogoWatermark size={720} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {!hideIntro && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-brand-olive font-medium mb-4">
              Our Impact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-cream leading-tight">
              Measured in Lives,<br />Not Just Numbers
            </h2>
          </motion.div>
        )}

        {/* Counters */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map(({ value, suffix, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="text-center space-y-2 p-6 border border-brand-mauve/30 rounded-xl"
            >
              <Counter value={value} suffix={suffix} />
              <p className="font-sans text-brand-cream/55 text-sm leading-relaxed">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* SDG badges */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.p variants={fadeUp} className="w-full text-center font-sans text-brand-cream/40 text-xs tracking-widest uppercase mb-2">
            Contributing to the UN Sustainable Development Goals
          </motion.p>
          {sdgs.map(({ num, label, bg }) => (
            <motion.div
              key={num}
              variants={fadeUp}
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10"
              style={{ backgroundColor: `${bg}25` }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold font-sans"
                style={{ backgroundColor: bg }}
              >
                {num}
              </div>
              <span className="font-sans text-brand-cream/70 text-xs">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
