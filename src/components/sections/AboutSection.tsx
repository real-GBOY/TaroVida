import { motion } from 'framer-motion';
import LogoMark from '../LogoMark';
import { site } from '../../data/site';
import { slideInLeft, slideInRight, viewportOnce } from '../../animations';

export default function AboutSection() {
  return (
    <section id="about" className="bg-brand-cream py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="pl-6 border-l-4 border-brand-olive space-y-6"
        >
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-brand-olive font-medium">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-purple leading-tight">
            Born in Shanawan,<br />Built for Egypt
          </h2>
          <p className="font-sans text-brand-warm/80 text-base leading-[1.8]">
            Shanawan is a small village in the Menoufia Governorate that supplies over 60% of Egypt's taro crop. Despite this extraordinary agricultural concentration, its farmers have long been trapped by market volatility and intermediary exploitation.
          </p>
          <p className="font-sans text-brand-warm/80 text-base leading-[1.8]">
            TaroVida was founded to transform this vulnerability into strength. By processing the entire taro plant — corm, leaves, and starch — into marketable value-added products, we create stable income streams that are independent of commodity price swings.
          </p>
          <p className="font-sans text-brand-warm/80 text-base leading-[1.8]">
            Behind TaroVida is the Enactus Menoufia University team — a group of students committed to building sustainable, community-driven enterprises that leave a lasting mark on rural Egypt.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <div className="w-10 h-10 bg-brand-purple/10 rounded-full flex items-center justify-center overflow-hidden">
              <LogoMark size={28} />
            </div>
            <div>
              <p className="font-serif italic text-brand-purple text-sm">Enactus Menoufia University</p>
              <p className="font-sans text-brand-warm/50 text-xs">Social Enterprise Team</p>
            </div>
          </div>

        </motion.div>

        {/* Image */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <img
              src={site.aboutImageUrl}
              alt="Fresh taro leaves and stems harvested in Shanawan"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-brand-forest/20" />
          </div>
          {/* Decorative offset border */}
          <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-brand-olive/30 -z-10" />
          {/* Caption */}
          <div className="absolute bottom-4 left-4 bg-brand-purple/80 backdrop-blur-sm text-brand-cream px-4 py-2 rounded-lg">
            <p className="font-sans text-xs text-brand-cream/80">Shanawan, Menoufia Governorate, Egypt</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
