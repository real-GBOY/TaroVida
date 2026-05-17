import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface PageHeroProps {
  icon?: LucideIcon;
  title: string;
  subtitle: string;
  variant?: 'purple' | 'forest';
}

export default function PageHero({
  icon: Icon,
  title,
  subtitle,
  variant = 'purple',
}: PageHeroProps) {
  const bg = variant === 'forest' ? 'bg-brand-forest' : 'bg-brand-purple';

  return (
    <section className={`${bg} text-brand-cream pt-28 pb-20 px-6`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        {Icon && <Icon className="h-14 w-14 mx-auto mb-6 text-brand-olive" strokeWidth={1.5} />}
        <h1 className="font-serif text-4xl md:text-6xl font-semibold text-brand-cream mb-6 leading-tight">
          {title}
        </h1>
        <p className="font-sans text-lg md:text-xl text-brand-cream/75 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}
