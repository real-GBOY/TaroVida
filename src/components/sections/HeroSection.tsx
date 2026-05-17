import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LogoMark from '../LogoMark';
import { site } from '../../data/site';
import { scaleIn, fadeUp, stagger } from '../../animations';

const heroStats = [
  { number: '60%', label: "Of Egypt's taro from Shanawan" },
  { number: '6', label: 'Value-added product lines' },
  { number: '5+', label: 'Farmers in our pilot network' },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${site.heroImageUrl})` }}
        role="img"
        aria-label="TaroVida team with farmers in a taro field in Shanawan"
      />
      <div className="absolute inset-0 bg-brand-forest/80" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-28 md:pt-32"
      >
        <motion.div variants={scaleIn} className="mb-5 sm:mb-8">
          <LogoMark
            size={128}
            onDark
            className="h-20 w-20 drop-shadow-lg sm:h-28 sm:w-28 md:h-32 md:w-32"
          />
        </motion.div>

        <motion.div variants={fadeUp} className="mb-2">
          <span className="font-serif text-[10px] tracking-[0.25em] uppercase text-brand-cream/60 sm:text-sm sm:tracking-[0.35em]">
            Est. Shanawan, Egypt
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-5xl font-semibold leading-none tracking-tight text-brand-cream sm:text-7xl md:text-8xl lg:text-9xl"
        >
          TaroVida
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-3 max-w-md font-serif text-base italic leading-relaxed text-brand-cream/80 sm:mt-4 sm:max-w-xl sm:text-xl md:text-2xl"
        >
          From Waste to Worth — A Bioeconomy Born in Shanawan
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
        >
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 bg-brand-olive px-6 py-3 font-sans text-xs tracking-widest uppercase text-brand-cream transition-colors hover:bg-brand-olive/90 sm:px-8 sm:text-sm"
          >
            Explore Products
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/#about"
            className="inline-flex items-center justify-center gap-2 border border-brand-cream/40 px-6 py-3 font-sans text-xs tracking-widest uppercase text-brand-cream/80 transition-colors hover:bg-brand-cream/10 sm:px-8 sm:text-sm"
          >
            Our Story
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-brand-cream/20 bg-brand-cream/5 px-4 py-3 text-center backdrop-blur-sm sm:px-6 sm:py-4"
            >
              <p className="font-serif text-2xl font-semibold text-brand-cream sm:text-3xl">{stat.number}</p>
              <p className="mt-1 font-sans text-[11px] leading-relaxed text-brand-cream/60 sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-brand-cream to-transparent sm:h-32" />
    </section>
  );
}
