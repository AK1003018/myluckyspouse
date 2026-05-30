import { motion } from 'motion/react';
import { MessageSquareQuote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Aditya Deshmukh",
    city: "Pune",
    quote: "Easy to connect with like-minded people. The matching algorithm works effortlessly.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
  },
  {
    name: "Vaishnavi Shinde",
    city: "Nashik",
    quote: "The experience feels smooth and engaging. Great way to discover new profiles securely.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
  },
  {
    name: "Tejas Patil",
    city: "Kolhapur",
    quote: "Love the privacy controls and chat requests. Feels extremely secure.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-coral/10 text-coral font-bold rounded-full mb-6 tracking-widest text-sm"
          >
            COMMUNITY FIRST
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-charcoal font-bold"
          >
            Loved by the Community
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card bg-cream/30 p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 relative group"
            >
              <MessageSquareQuote className="w-10 h-10 text-amber/20 absolute top-6 right-6 group-hover:scale-110 transition-transform" />
              <div className="flex gap-1 text-gold mb-6">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4" fill="currentColor" />)}
              </div>
              <p className="text-lg text-brown font-medium italic mb-8 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img referrerPolicy="no-referrer" src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-charcoal text-sm">{t.name}</h4>
                  <p className="text-xs text-text-muted">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl"></div>
    </section>
  );
}
