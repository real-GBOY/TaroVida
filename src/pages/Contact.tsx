import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import ContactForm from '../components/forms/ContactForm';
import { site } from '../data/site';
import { fadeUp, viewportOnce } from '../animations';

const contactCards = [
  { icon: Mail, title: 'Email', detail: site.email, href: `mailto:${site.email}` },
  { icon: Phone, title: 'Phone', detail: site.phone, href: `tel:${site.phone}` },
  { icon: MapPin, title: 'Location', detail: site.location },
  { icon: Clock, title: 'Hours', detail: site.hours },
];

const faqs = [
  {
    q: 'What products does TaroVida offer?',
    a: 'We produce Taro Milk, Wariqa herbal tea, taro leaf powder, hydrogel (gel and powder forms), and bio leather — all from surplus and by-product streams of Shanawan taro.',
  },
  {
    q: 'How can farmers join the network?',
    a: 'Contact us through the partnership form. We work with cooperatives and individual growers on collection and processing pilots.',
  },
  {
    q: 'Do you offer product samples?',
    a: 'Yes — reach out via the contact form with your organization details and product interest. Sample availability depends on production batch.',
  },
  {
    q: 'Where is TaroVida based?',
    a: 'Our project operates from Shanawan, Menoufia Governorate, with support from Enactus Menoufia University.',
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        icon={MessageCircle}
        title="Get in Touch"
        subtitle="Questions about products, partnerships, or visiting our pilot site — we would love to hear from you."
      />

      <section className="bg-brand-cream py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-6 border border-brand-purple/10 rounded-xl text-center"
            >
              <card.icon className="h-8 w-8 mx-auto mb-3 text-brand-olive" />
              <h3 className="font-serif text-lg font-semibold text-brand-purple mb-2">{card.title}</h3>
              {card.href ? (
                <a href={card.href} className="font-sans text-sm text-brand-warm/70 hover:text-brand-purple">
                  {card.detail}
                </a>
              ) : (
                <p className="font-sans text-sm text-brand-warm/70">{card.detail}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto bg-white p-8 border border-brand-purple/10 rounded-xl"
        >
          <h2 className="font-serif text-2xl font-semibold text-brand-purple mb-8 text-center">Send a Message</h2>
          <ContactForm variant="contact" />
        </motion.div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-semibold text-brand-purple">FAQ</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.06 }}
                className="p-6 border border-brand-purple/10 bg-brand-cream/50 rounded-xl"
              >
                <h3 className="font-serif text-lg font-semibold text-brand-purple mb-2">{faq.q}</h3>
                <p className="font-sans text-sm text-brand-warm/80 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
