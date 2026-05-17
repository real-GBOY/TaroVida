import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import LogoMark from '../LogoMark';
import { products } from '../../data/products';
import { site } from '../../data/site';

export default function Footer() {
  return (
    <footer className="bg-brand-purple text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <LogoMark size={40} onDark />
              <span className="font-serif text-xl font-semibold">TaroVida</span>
            </div>
            <p className="font-sans text-sm text-brand-cream/60 leading-relaxed max-w-xs">
              Turning Shanawan&apos;s taro harvest into zero-waste opportunity — for farmers, communities,
              and Egypt&apos;s bioeconomy.
            </p>
            <div className="flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center border border-brand-mauve/40 text-brand-cream/60 hover:text-brand-cream hover:border-brand-cream/50 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center border border-brand-mauve/40 text-brand-cream/60 hover:text-brand-cream hover:border-brand-cream/50 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="w-9 h-9 flex items-center justify-center border border-brand-mauve/40 text-brand-cream/60 hover:text-brand-cream hover:border-brand-cream/50 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-brand-olive">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { to: '/products', label: 'Products' },
                { to: '/impact', label: 'Impact' },
                { to: '/partner', label: 'Partner With Us' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-sans text-sm text-brand-cream/60 hover:text-brand-cream transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-brand-olive">Products</h3>
            <div className="flex flex-col gap-2">
              {products.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="font-sans text-sm text-brand-cream/60 hover:text-brand-cream transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-brand-olive">Contact</h3>
            <div className="space-y-3 font-sans text-sm text-brand-cream/60">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-brand-cream transition-colors">
                <Mail size={14} className="text-brand-olive shrink-0" />
                {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="flex items-center gap-2 hover:text-brand-cream transition-colors">
                <Phone size={14} className="text-brand-olive shrink-0" />
                {site.phone}
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-olive shrink-0 mt-0.5" />
                {site.location}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-mauve/30 mt-12 pt-8 text-center space-y-1">
          <p className="font-sans text-brand-cream/40 text-xs">
            An Enactus Menoufia University Project · Shanawan, Egypt
          </p>
          <p className="font-sans text-brand-cream/30 text-xs">
            © 2026 TaroVida. All rights reserved. · developed by Mahmoud Nayel
          </p>
        </div>
      </div>
    </footer>
  );
}
