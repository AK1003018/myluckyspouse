import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-coral rounded-full opacity-20 blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], x: [0, 100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-50%] left-[-10%] w-[500px] h-[500px] bg-amber rounded-full opacity-20 blur-[100px] pointer-events-none"
      />
      <div className="bg-pattern opacity-10 mix-blend-overlay"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif text-white font-bold mb-6"
        >
          Ready to Explore More?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/80 mb-12 font-medium"
        >
          Reconnect with the features waiting for you. Dive into your matches.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
        >
          <button className="px-10 py-5 bg-gradient-to-r from-coral to-amber text-white font-bold rounded-full text-lg shadow-2xl shadow-coral/30 hover:shadow-coral/50 hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto group">
            Start Exploring
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
