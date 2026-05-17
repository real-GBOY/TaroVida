import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Globe, Users, Award, Heart } from 'lucide-react';
import LogoMark from '../components/LogoMark';
import { fadeUp, stagger, viewportOnce } from '../animations';
import { products } from '../data/products';

const values = [
  {
    icon: Globe,
    title: 'Rural Resilience',
    description: 'Building economic stability for Shanawan farmers beyond commodity price cycles.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Keeping processing and value creation close to the people who grow the crop.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Turning agricultural by-products into nutrition, wellness, and agri-tech solutions.',
  },
  {
    icon: Heart,
    title: 'Social Enterprise',
    description: 'Powered by Enactus Menoufia — impact measured in lives, not only revenue.',
  },
];

export default function About() {
  return (
    <>
      <section className="bg-brand-purple text-brand-cream pt-28 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <LogoMark size={80} onDark className="mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-6">About TaroVida</h1>
          <p className="font-sans text-lg text-brand-cream/75 max-w-2xl mx-auto leading-relaxed">
            An Enactus Menoufia project transforming Egypt&apos;s taro heartland into a model bioeconomy —
            one plant, many products, zero waste.
          </p>
        </motion.div>
      </section>

      <section className="bg-brand-cream py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-10"
          >
            <div className="flex gap-4">
              <Target className="text-brand-olive shrink-0" size={28} />
              <div>
                <h2 className="font-serif text-2xl font-semibold text-brand-purple mb-3">Our Mission</h2>
                <p className="font-sans text-brand-warm/80 leading-relaxed">
                  To transform Shanawan&apos;s taro oversupply into stable farmer income through zero-waste
                  processing — creating nutrition, wellness, and sustainable agriculture products while
                  strengthening rural Egypt.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Eye className="text-brand-olive shrink-0" size={28} />
              <div>
                <h2 className="font-serif text-2xl font-semibold text-brand-purple mb-3">Our Vision</h2>
                <p className="font-sans text-brand-warm/80 leading-relaxed">
                  A thriving bioeconomy where every part of the taro plant creates value — making Shanawan a
                  reference model for circular agriculture across Egypt and the region.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative aspect-[4/5] overflow-hidden rounded-xl"
          >
            <img
              src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Taro fields"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-brand-cream p-8 border border-brand-purple/10 rounded-xl"
          >
            <h3 className="font-serif text-2xl font-semibold text-brand-purple mb-4">The Problem We Found</h3>
            <p className="font-sans text-brand-warm/80 leading-relaxed mb-6">
              Shanawan supplies over 60% of Egypt&apos;s taro, yet farmers face crushing oversupply, trader
              monopolies, and up to 30% post-harvest loss — trapping communities in poverty despite abundant harvests.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-serif text-3xl font-semibold text-brand-olive">60%</p>
                <p className="font-sans text-xs text-brand-warm/60 mt-1">National taro share</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-brand-olive">30%</p>
                <p className="font-sans text-xs text-brand-warm/60 mt-1">Post-harvest loss</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-brand-olive">3</p>
                <p className="font-sans text-xs text-brand-warm/60 mt-1">Product lines</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-brand-forest/5 p-8 border border-brand-forest/20 rounded-xl"
          >
            <h3 className="font-serif text-2xl font-semibold text-brand-purple mb-4">Our Solution</h3>
            <p className="font-sans text-brand-warm/80 leading-relaxed mb-6">
              We process corms, leaves, and starch into marketable products — decoupling farmer income from raw
              crop prices and eliminating field waste.
            </p>
            <div className="flex flex-wrap gap-3">
              {products.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="font-sans text-sm text-brand-olive border border-brand-olive/40 px-4 py-2 hover:bg-brand-olive/10"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-cream py-24 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <h2 className="font-serif text-3xl font-semibold text-brand-purple">Our Values</h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              className="bg-white p-8 border border-brand-purple/10 rounded-xl flex gap-4"
            >
              <v.icon className="text-brand-olive shrink-0" size={24} />
              <div>
                <h3 className="font-serif text-lg font-semibold text-brand-purple mb-2">{v.title}</h3>
                <p className="font-sans text-sm text-brand-warm/80 leading-relaxed">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-brand-purple py-20 px-6 text-center">
        <h2 className="font-serif text-3xl text-brand-cream mb-6">Join Our Mission</h2>
        <p className="font-sans text-brand-cream/70 max-w-xl mx-auto mb-8">
          Partner with us or get in touch to support Shanawan&apos;s farmers and Egypt&apos;s bioeconomy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/partner"
            className="bg-brand-olive text-brand-cream font-sans text-sm tracking-widest uppercase px-8 py-3"
          >
            Partner With Us
          </Link>
          <Link
            to="/contact"
            className="border border-brand-cream/40 text-brand-cream font-sans text-sm tracking-widest uppercase px-8 py-3 hover:bg-brand-cream/10"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
