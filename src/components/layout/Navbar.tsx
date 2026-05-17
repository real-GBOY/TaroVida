import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LogoMark from '../LogoMark';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Impact', path: '/impact' },
  { name: 'Partner', path: '/partner' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path: string) => {
    const active = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    return active
      ? 'text-brand-cream font-medium'
      : 'text-brand-cream/70 hover:text-brand-cream transition-colors';
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-brand-purple/95 backdrop-blur-sm border-b border-brand-mauve/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
            <LogoMark size={32} onDark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
            <span className="truncate font-serif text-lg font-semibold tracking-wide text-brand-cream sm:text-xl">
              TaroVida
            </span>
          </Link>

          <motion.div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`relative text-sm tracking-wide ${linkClass(item.path)}`}>
                {item.name}
                {(location.pathname === item.path ||
                  (item.path !== '/' && location.pathname.startsWith(item.path))) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-olive"
                  />
                )}
              </Link>
            ))}
          </motion.div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-brand-cream/80 hover:text-brand-cream"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-brand-mauve/20 pb-4 max-h-[calc(100dvh-3.5rem)] overflow-y-auto"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block px-2 py-3.5 text-base ${linkClass(item.path)}`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
