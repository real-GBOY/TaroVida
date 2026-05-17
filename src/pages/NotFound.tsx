import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Leaf } from 'lucide-react';
import LogoMark from '../components/LogoMark';
import { fadeUp } from '../animations';

interface NotFoundProps {
  title?: string;
  message?: string;
}

export default function NotFound({
  title = 'Page Not Found',
  message = "The page you're looking for doesn't exist or may have been moved.",
}: NotFoundProps) {
  useEffect(() => {
    document.title = '404 — TaroVida';
    return () => {
      document.title = 'TaroVida — From Waste to Worth';
    };
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 pt-24 pb-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-lg w-full text-center"
      >
        <div className="mx-auto mb-8 w-fit rounded-full bg-brand-purple/5 p-4">
          <LogoMark size={56} />
        </div>
        <p className="font-serif text-8xl font-semibold text-brand-purple/20 leading-none mb-2">404</p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-brand-purple mb-4">{title}</h1>
        <p className="font-sans text-brand-warm/70 leading-relaxed mb-10">{message}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-purple text-brand-cream font-sans text-sm tracking-widest uppercase px-8 py-3 rounded-xl hover:bg-brand-purple/90 transition-colors"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border border-brand-purple/30 text-brand-purple font-sans text-sm tracking-widest uppercase px-8 py-3 rounded-xl hover:bg-brand-purple/5 transition-colors"
          >
            <Leaf size={16} />
            View Products
          </Link>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-1 mt-8 font-sans text-sm text-brand-olive hover:underline"
        >
          <ArrowLeft size={14} />
          Contact us if you need help
        </Link>
      </motion.div>
    </section>
  );
}
