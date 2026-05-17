import { motion } from 'framer-motion';
import { Handshake, Award, Users, CheckCircle } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import ContactForm from '../components/forms/ContactForm';
import { partners, partnershipTypes } from '../data/partners';
import { fadeUp, stagger, viewportOnce } from '../animations';

const whyPartner = [
  { icon: Award, title: 'Proven Pilot', description: 'Active processing trials with Shanawan farmers and university support.' },
  { icon: Users, title: 'Community Network', description: 'Connect with Enactus, cooperatives, and industry partners across Menoufia.' },
  { icon: CheckCircle, title: 'Measurable Impact', description: 'Track waste diverted, farmers supported, and SDG-aligned outcomes.' },
];

const steps = [
  { num: '01', title: 'Reach Out', description: 'Contact us via the form or email with your partnership interest.' },
  { num: '02', title: 'Discovery', description: 'We assess fit — supply, distribution, research, or community collaboration.' },
  { num: '03', title: 'Agreement', description: 'Define roles, timelines, and mutual benefits for both parties.' },
  { num: '04', title: 'Launch', description: 'Begin collaboration with TaroVida team support on the ground.' },
];

export default function Partner() {
  return (
    <>
      <PageHero
        icon={Handshake}
        title="Partner With Us"
        subtitle="Join farmers, industry, universities, and communities building Shanawan's taro bioeconomy."
      />

      <section className="bg-brand-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-semibold text-brand-purple mb-4">Why TaroVida?</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {whyPartner.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-white border border-brand-purple/10 rounded-xl"
              >
                <item.icon className="h-10 w-10 mx-auto mb-4 text-brand-olive" />
                <h3 className="font-serif text-lg font-semibold text-brand-purple mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-brand-warm/70">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-semibold text-brand-purple mb-4">Partnership Opportunities</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {partnershipTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-brand-purple/10 rounded-xl overflow-hidden"
              >
                <div className="bg-brand-forest p-6 text-brand-cream">
                  <h3 className="font-serif text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="font-sans text-sm text-brand-cream/80">{type.description}</p>
                </div>
                <ul className="p-6 space-y-2">
                  {type.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 font-sans text-sm text-brand-warm/80">
                      <CheckCircle size={16} className="text-brand-olive shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-semibold text-brand-purple mb-4">How It Works</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <p className="font-serif text-3xl text-brand-olive mb-2">{step.num}</p>
                <h3 className="font-serif text-lg font-semibold text-brand-purple mb-2">{step.title}</h3>
                <p className="font-sans text-sm text-brand-warm/70">{step.description}</p>
              </div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-semibold text-brand-purple mb-4">Our Partners</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {partners.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className="bg-white p-6 border border-brand-purple/10 rounded-xl text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-brand-purple/5 rounded-full">
                  <p.icon size={20} className="text-brand-purple" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-purple mb-1">{p.name}</h3>
                <p className="font-sans text-xs uppercase tracking-wide text-brand-olive mb-2">{p.type}</p>
                <p className="font-sans text-sm text-brand-warm/70">{p.impact}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="w-full bg-white p-8 md:p-10 border border-brand-purple/10 rounded-xl"
          >
            <h2 className="font-serif text-2xl font-semibold text-brand-purple mb-2 text-center">Ready to Partner?</h2>
            <p className="font-sans text-sm text-brand-warm/70 text-center mb-8">
              We respond within 24 hours.
            </p>
            <ContactForm variant="partner" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
