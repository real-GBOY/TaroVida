import { FormEvent } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  variant?: 'contact' | 'partner';
  onSubmit?: (e: FormEvent) => void;
}

export default function ContactForm({ variant = 'contact', onSubmit }: ContactFormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
    alert('Thank you! We will respond within 24 hours.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-sans text-sm text-brand-warm mb-2">First Name *</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 border border-brand-purple/20 bg-white rounded-lg font-sans text-sm focus:outline-none focus:border-brand-olive"
            placeholder="Your first name"
          />
        </div>
        <div>
          <label className="block font-sans text-sm text-brand-warm mb-2">Last Name *</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 border border-brand-purple/20 bg-white rounded-lg font-sans text-sm focus:outline-none focus:border-brand-olive"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-sans text-sm text-brand-warm mb-2">Email *</label>
          <input
            required
            type="email"
            className="w-full px-4 py-3 border border-brand-purple/20 bg-white rounded-lg font-sans text-sm focus:outline-none focus:border-brand-olive"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="block font-sans text-sm text-brand-warm mb-2">Phone</label>
          <input
            type="tel"
            className="w-full px-4 py-3 border border-brand-purple/20 bg-white rounded-lg font-sans text-sm focus:outline-none focus:border-brand-olive"
            placeholder="01xxxxxxxxx"
          />
        </div>
      </div>

      {variant === 'partner' ? (
        <>
          <div>
            <label className="block font-sans text-sm text-brand-warm mb-2">Organization *</label>
            <input
              required
              type="text"
              className="w-full px-4 py-3 border border-brand-purple/20 bg-white rounded-lg font-sans text-sm focus:outline-none focus:border-brand-olive"
              placeholder="Organization name"
            />
          </div>
          <div>
            <label className="block font-sans text-sm text-brand-warm mb-2">Partnership Type *</label>
            <select
              required
              className="w-full px-4 py-3 border border-brand-purple/20 bg-white rounded-lg font-sans text-sm focus:outline-none focus:border-brand-olive"
              defaultValue=""
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="farmer">Farmers & Cooperatives</option>
              <option value="buyer">Food & Beverage Buyers</option>
              <option value="research">Universities & Research</option>
              <option value="ngo">Community & NGOs</option>
              <option value="other">Other</option>
            </select>
          </div>
        </>
      ) : (
        <>
          <div>
            <label className="block font-sans text-sm text-brand-warm mb-2">Subject *</label>
            <select
              required
              className="w-full px-4 py-3 border border-brand-purple/20 bg-white rounded-lg font-sans text-sm focus:outline-none focus:border-brand-olive"
              defaultValue=""
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="general">General Inquiry</option>
              <option value="partnership">Partnership</option>
              <option value="products">Products</option>
              <option value="orders">Orders & Samples</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block font-sans text-sm text-brand-warm mb-2">Organization (optional)</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-brand-purple/20 bg-white rounded-lg font-sans text-sm focus:outline-none focus:border-brand-olive"
              placeholder="Your organization"
            />
          </div>
        </>
      )}

      <div>
        <label className="block font-sans text-sm text-brand-warm mb-2">Message *</label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 border border-brand-purple/20 bg-white rounded-lg font-sans text-sm focus:outline-none focus:border-brand-olive resize-y"
          placeholder={
            variant === 'partner'
              ? 'Tell us about your organization and how you would like to collaborate...'
              : 'How can we help you?'
          }
        />
      </div>

      {variant === 'contact' && (
        <label className="flex items-start gap-3 font-sans text-sm text-brand-warm/70 cursor-pointer">
          <input type="checkbox" className="mt-1" />
          Keep me updated on TaroVida news and farmer initiatives
        </label>
      )}

      <div className={variant === 'partner' ? 'flex justify-center' : undefined}>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-brand-purple text-brand-cream font-sans text-sm tracking-widest uppercase px-8 py-3 hover:bg-brand-purple/90 transition-colors"
        >
          <Send size={16} />
          {variant === 'partner' ? 'Submit Partnership Request' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
