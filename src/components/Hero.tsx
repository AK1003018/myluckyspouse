import { motion } from 'motion/react';
import { Heart, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import coupleImg from '@/images/couple.png';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden pt-20">
      <div className="bg-pattern opacity-30" />

      {/* High-dimensional Floating Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-coral/20 to-amber/20 rounded-full blur-[80px] -z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-amber/20 to-coral/10 rounded-full blur-[80px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-[50%] text-center lg:text-left pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 text-brown font-semibold mb-8 backdrop-blur-md border border-coral/20 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber" />
            <span className="text-sm">Experience the New Era of Matchmaking</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-[76px] font-serif text-charcoal leading-[1.1] mb-6 drop-shadow-sm"
          >
            Everything You Need to Build <br />
            <span className="italic font-light text-coral relative inline-block mt-2">
              Meaningful Connections
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-amber/40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00033 6.94052C63.8566 -1.63756 137.954 -1.77663 198.055 8.01633" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/></svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
          >
            Discover powerful tools designed to help you connect, communicate, and engage effortlessly with verified individuals who share your values.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
          >
            <a href="#features" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
              Explore Features
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#community" className="btn-secondary w-full sm:w-auto flex items-center justify-center">
              See What's New
            </a>
          </motion.div>
        </div>

        {/* Right Floating Gallery Area */}
        <div className="w-full lg:w-[50%] h-[600px] relative hidden md:block">
          {/* Central Main Depth Layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-[10%] left-[10%] w-[340px] h-[480px] rounded-[40px] overflow-hidden border-8 border-white/50 shadow-2xl z-20 backdrop-blur-sm"
          >
            <motion.img 
              referrerPolicy="no-referrer"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              src={coupleImg} 
              alt="Romantic Engagement" 
              className="w-full h-full object-cover"
            />
            {/* Inner Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
          </motion.div>

          {/* Floating UI Card - Chat Request */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute top-[20%] right-[-5%] w-[240px] glass-card p-4 z-30"
          >
            <div className="flex items-center gap-3 mb-3">
              <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" alt="Aditya" />
              <div>
                <p className="text-sm font-bold text-charcoal">Aditya Deshmukh</p>
                <p className="text-[10px] text-text-muted">Sent you a chat request</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-coral text-white text-xs py-2 rounded-xl font-bold hover:bg-coral-light hover:text-coral transition-colors">Accept</button>
            </div>
          </motion.div>

          {/* Floating Image - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            animate={{ opacity: 1, y: [0, -15, 0], rotate: -5 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[5%] left-[-5%] w-[180px] h-[220px] rounded-[30px] overflow-hidden border-4 border-white shadow-xl z-30"
          >
            <img 
              referrerPolicy="no-referrer"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" 
              alt="Vaishnavi" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating UI Card - Match */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[15%] right-[5%] w-[200px] glass-card p-4 z-30 flex items-center gap-4"
          >
            <div className="bg-amber/20 p-3 rounded-full text-amber">
              <Heart className="w-6 h-6" fill="currentColor" />
            </div>
            <div>
              <p className="text-sm font-bold text-charcoal m-0">98% Value Match</p>
              <p className="text-xs text-text-muted m-0">Hobbies: Trekking • Pune</p>
            </div>
          </motion.div>
          
        </div>

      </div>
    </div>
  );
}

