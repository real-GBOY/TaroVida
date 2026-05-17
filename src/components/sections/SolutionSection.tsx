import { motion } from 'framer-motion';
import { LogoWatermark } from '../LogoMark';
import { fadeUp, stagger, viewportOnce } from '../../animations';

const pairs = [
  { source: 'Taro Corm', target: 'Taro Milk' },
  { source: 'Taro Leaves', target: 'Herbal Products' },
  { source: 'Taro Stem', target: 'Hydrogel + Bio-Leather' },
];

const pillBase =
  'inline-block max-w-full rounded-full border font-sans tracking-wide text-center whitespace-normal px-4 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm md:text-base';

export default function SolutionSection() {
  return (
    <section id="solution" className="relative overflow-hidden bg-brand-forest px-4 py-16 sm:px-6 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <LogoWatermark size={640} className="scale-75 sm:scale-100" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10 text-center sm:mb-16"
        >
          <span className="mb-3 inline-block font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-brand-olive sm:mb-4 sm:text-xs sm:tracking-[0.3em]">
            Zero Waste Model
          </span>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-brand-cream sm:text-4xl md:text-5xl lg:text-6xl">
            Every Part of the Plant
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Has a Purpose
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto flex max-w-md flex-col gap-8 sm:max-w-lg md:max-w-none md:gap-6"
        >
          {pairs.map(({ source, target }, i) => (
            <motion.div
              key={source}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="flex w-full flex-col items-center gap-3 md:flex-row md:justify-center md:gap-0"
            >
              <div className="w-full text-center md:w-auto md:flex-shrink-0">
                <span
                  className={`${pillBase} border-brand-olive/60 bg-brand-olive/15 font-medium text-brand-cream/90`}
                >
                  {source}
                </span>
              </div>

              <div className="flex shrink-0 items-center justify-center md:mx-4">
                <span className="text-lg text-brand-cream/40 md:hidden" aria-hidden>
                  ↓
                </span>
                <motion.div className="hidden items-center md:flex">
                  <motion.div
                    className="h-px bg-gradient-to-r from-brand-olive/40 to-brand-cream/60"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                  />
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-brand-cream/50"
                    aria-hidden
                  >
                    <path
                      d="M3 8 L13 8 M9 4 L13 8 L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>

              <div className="w-full text-center md:w-auto md:max-w-none md:flex-shrink-0">
                <span
                  className={`${pillBase} border-brand-cream/40 bg-brand-cream/10 font-semibold text-brand-cream`}
                >
                  {target}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-10 max-w-lg px-2 text-center font-sans text-xs leading-relaxed text-brand-cream/50 sm:mt-16 sm:text-sm"
        >
          Through circular processing, TaroVida extracts value from every component of the taro plant —
          eliminating waste while creating multiple revenue streams for farmers.
        </motion.p>
      </div>
    </section>
  );
}
