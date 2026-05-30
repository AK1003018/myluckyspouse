import logoImg from '@/images/logo-v3.png';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-white/10 p-1">
            <img src={logoImg} alt="MyLuckySpouse Logo" className="h-full w-full object-contain" />
          </div>
          <span className="font-serif text-2xl font-bold text-white">MyLuckySpouse</span>
        </div>
        <p className="text-sm opacity-60 font-serif italic text-white/80">
          © {new Date().getFullYear()} MyLuckySpouse Matrimony. Inspiring lasting bonds.
        </p>
      </div>
    </footer>
  );
}

