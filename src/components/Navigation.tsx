import { motion } from 'motion/react';
import logoImg from '@/images/logo-v3.png';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 px-4 md:px-12 py-4 flex justify-between items-center bg-white/80 backdrop-blur-lg shadow-sm border-b border-coral/10"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl overflow-hidden flex items-center justify-center shadow-md bg-white border border-coral/10 hover:scale-105 transition-transform duration-300">
          <img src={logoImg} alt="MyLuckySpouse Logo" className="h-full w-full object-contain p-1" />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-2xl md:text-3xl font-bold text-brown tracking-tight leading-none">
            MyLuckySpouse
          </span>
        </div>
      </div>
      
      {/* Search and Links (Middle) */}
      <div className="hidden lg:flex items-center gap-10">
        <a href="#features" className="text-text-muted font-medium hover:text-coral transition-colors tracking-wide">Features</a>
        <a href="#community" className="text-text-muted font-medium hover:text-coral transition-colors tracking-wide">Community</a>
      </div>

      {/* Right side controls */}
      <div className="flex gap-4 md:gap-6 items-center">
        <button className="px-8 py-3 bg-gradient-to-r from-coral to-amber text-white font-semibold rounded-full shadow-lg shadow-coral/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
          Go to App
        </button>
      </div>
    </motion.nav>
  );
}

