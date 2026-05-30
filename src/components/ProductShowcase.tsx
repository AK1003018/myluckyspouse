import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layout, 
  Search, 
  Award, 
  Image as ImageIcon, 
  MessageCircle, 
  Heart, 
  EyeOff, 
  UserPlus, 
  LogIn, 
  ShieldCheck, 
  ChevronRight,
  Sparkles,
  Lock,
  Compass,
  CheckCircle2,
  Users
} from 'lucide-react';

// Categories grouping
const categories = [
  { id: 'matching', name: 'Matching & Profiles', icon: Search },
  { id: 'connect', name: 'Connections & Privacy', icon: MessageCircle },
  { id: 'onboarding', name: 'Easy Onboarding', icon: UserPlus }
];

// Interactive features metadata
const features = [
  {
    id: 'dashboard',
    categoryId: 'matching',
    title: 'Matches Radar',
    icon: Layout,
    tagline: 'Tailored Hindu Connections',
    oneLiner: 'Explore matches instantly mapped by your community, subcaste, and native city using our constellation radar.',
    bullet: 'A dynamic visual grid highlights matches connecting on common native roots.'
  },
  {
    id: 'badging',
    categoryId: 'matching',
    title: 'Lifestyle Tag Revolver',
    icon: Award,
    tagline: 'Credentials at a Single Glance',
    oneLiner: 'Quickly assess occupation, education, and value compatibility tags inside a revolving 3D carousel.',
    bullet: 'Vibrant, floating tags showcase verified compatibility scores and values.'
  },
  {
    id: 'bios',
    categoryId: 'matching',
    title: 'Interactive Bio Folders',
    icon: Search,
    tagline: 'Deep Hobbies & Background Insights',
    oneLiner: 'Dive deep into comprehensive details including verified education, maternal roots, and family details.',
    bullet: 'Hover or click to unfold rich subcaste, native place, and maternal surname (Mama) directories.'
  },
  {
    id: 'galleries',
    categoryId: 'matching',
    title: 'Secure Galleries',
    icon: ImageIcon,
    tagline: 'Refined Visuals with Lock Protection',
    oneLiner: 'High-resolution, secure photo galleries displaying beautiful silhouette cards protected from screenshots.',
    bullet: 'Customizable privacy blocks let you grant viewing access only to vetted connections.'
  },
  {
    id: 'direct-connect',
    categoryId: 'connect',
    title: 'Direct Interest Pulsar',
    icon: Heart,
    tagline: 'Ignite Lasting Conversations Instantly',
    oneLiner: 'Tap the beating pulsar heart to show genuine interest and trigger an explosion of sparkles and outreach.',
    bullet: 'Send structured introduction templates to start family introductions seamlessly.'
  },
  {
    id: 'chatting',
    categoryId: 'connect',
    title: 'Typing Chat Simulator',
    icon: MessageCircle,
    tagline: 'Safe Real-Time Values & Interest Chats',
    oneLiner: 'Communicate on a safe platform without revealing your personal contact number or social handles.',
    bullet: 'Experience a live simulated chatting log typing out beautiful shared value and hobby interests.'
  },
  {
    id: 'privacy',
    categoryId: 'connect',
    title: 'Secure Agent Bridge',
    icon: EyeOff,
    tagline: 'Secure Bridge Connection',
    oneLiner: 'Keep your personal phone number strictly private—all introductions are safely facilitated through our verified official agent.',
    bullet: 'Connect directly with our agent to securely bridge the families, ensuring 100% phone number privacy.'
  },
  {
    id: 'register',
    categoryId: 'onboarding',
    title: 'Onboarding Checklist',
    icon: UserPlus,
    tagline: 'Satisfying Profile Building Flow',
    oneLiner: 'Set up your complete profile (lifestyle preference, hobbies, educational degrees) in under two minutes with dynamic checkmarks.',
    bullet: 'An interactive stepper ticks off profile categories automatically with satisfying pop animations.'
  },
  {
    id: 'login',
    categoryId: 'onboarding',
    title: 'Laser Scanning Lock',
    icon: LogIn,
    tagline: 'Biometric Encrypted Login Interface',
    oneLiner: 'Gain secure and quick access using modern biometric laser scanners and OTP authorizations.',
    bullet: 'State-of-the-art tokenized sessions keep your matches dashboard highly encrypted.'
  }
];

// Interactive Micro-Animations

// 1. Matches Radar Constellation
function MatchesRadarAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-charcoal to-charcoal/90 rounded-[2rem] flex flex-col items-center justify-center p-6 relative overflow-hidden text-white">
      {/* Radar Sweeper */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-[3px] border-coral/10 rounded-full w-[260px] h-[260px] m-auto flex items-center justify-center pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, rgba(225, 29, 72, 0.15) 0deg, transparent 90deg)'
        }}
      />
      {/* Target Concentrics */}
      <div className="absolute border border-coral/20 rounded-full w-[200px] h-[200px] m-auto pointer-events-none" />
      <div className="absolute border border-coral/10 rounded-full w-[120px] h-[120px] m-auto pointer-events-none" />
      
      {/* Center Anchor */}
      <div className="w-6 h-6 rounded-full bg-coral shadow-lg shadow-coral/50 flex items-center justify-center z-10">
        <Heart className="w-3 h-3 text-white fill-white" />
      </div>

      {/* Floating Match Nodes */}
      <motion.div
        animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 glass-card border-coral/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[10px] text-coral font-bold bg-white/10 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span>Snehal K. • 96% Match</span>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6], x: [4, -4, 4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 glass-card border-amber/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[10px] text-amber font-bold bg-white/10 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span>Rahul J. • Value Match</span>
      </motion.div>

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 glass-card border-coral/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[10px] text-white font-bold bg-white/5 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-amber-500" />
        <span>Prachi D. • Deshastha</span>
      </motion.div>

    </div>
  );
}

// 2. Lifestyle Tag Revolver
function LifestyleTagRevolverAnimation() {
  const tags = [
    { text: '98% Compatibility', color: 'from-rose-500 to-coral' },
    { text: 'INFJ Personality', color: 'from-amber to-orange-500' },
    { text: 'Lifestyle: Vegan', color: 'from-emerald-500 to-teal-600' },
    { text: 'B.E. COEP Pune', color: 'from-blue-500 to-indigo-600' },
    { text: 'Values Verified', color: 'from-purple-500 to-fuchsia-600' }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-tr from-cream to-white rounded-[2rem] flex flex-col items-center justify-center p-6 relative overflow-hidden border border-coral/10">
      <div className="relative w-full h-[220px] flex items-center justify-center">
        {tags.map((tag, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, -12, 0],
              rotate: [idx * 6 - 12, idx * 6 - 8, idx * 6 - 12],
              scale: [1, 1.03, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: idx * 0.4,
              ease: "easeInOut"
            }}
            className={`absolute px-5 py-3 rounded-2xl bg-gradient-to-r ${tag.color} text-white font-bold text-xs shadow-lg shadow-coral/5 flex items-center gap-2`}
            style={{
              top: `${20 + idx * 32}px`,
              left: `${15 + (idx % 2) * 20}%`,
              zIndex: 10 + idx
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {tag.text}
          </motion.div>
        ))}
      </div>
      <span className="text-[10px] text-brown uppercase font-bold tracking-widest mt-2 flex items-center gap-1.5">
        <Compass className="w-3.5 h-3.5 text-coral animate-spin" /> Rotational Match Tags
      </span>
    </div>
  );
}

// 3. Interactive Bio Folders
function BioFoldersAnimation() {
  const [openSection, setOpenSection] = useState('values');

  const sections = [
    {
      id: 'values',
      title: 'Values & Lifestyle',
      content: 'Lifestyle: Veg/Non-Smoker • Hobbies: Trekking/Photography • Personality Type: INFJ • Compatibility: 98% Match (Excellent)',
      color: 'bg-coral/5 border-coral/20 text-charcoal'
    },
    {
      id: 'family',
      title: 'Family & Roots',
      content: 'Native: Pune/Baramati • Subcaste: Maratha 96 Kuli • Maternal Surname (Mama): Deshmukh • Respectable Background',
      color: 'bg-amber/5 border-amber/20 text-charcoal'
    },
    {
      id: 'education',
      title: 'Education & Career',
      content: 'Degree: M.Tech Computer Science (COEP) • Occupation: Senior Software Engineer at Tech Firm, Pune',
      color: 'bg-emerald-50/50 border-emerald-200 text-charcoal'
    }
  ];

  return (
    <div className="w-full h-full bg-white rounded-[2rem] flex flex-col justify-center p-6 relative overflow-hidden border border-coral/10 shadow-inner">
      <h4 className="text-xs font-bold text-coral uppercase tracking-widest mb-4">Click Folders to Unfold</h4>
      <div className="flex flex-col gap-2.5 w-full">
        {sections.map((sec) => {
          const isOpen = openSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setOpenSection(isOpen ? '' : sec.id)}
              className={`w-full text-left border rounded-2xl p-4 transition-all duration-300 shadow-sm cursor-pointer ${
                isOpen ? 'bg-cream/40 border-coral shadow-md' : 'bg-gray-50 border-gray-100 hover:bg-gray-100/50'
              }`}
            >
              <div className="flex justify-between items-center font-bold text-xs text-charcoal mb-1">
                <span>{sec.title}</span>
                <ChevronRight className={`w-3.5 h-3.5 text-coral transition-transform ${isOpen ? 'rotate-90' : ''}`} />
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] text-text-muted mt-2 border-t border-dashed border-coral/10 pt-2 leading-relaxed"
                  >
                    {sec.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 4. 3D Secure Galleries
function SecureGalleriesAnimation() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="w-full h-full bg-gradient-to-br from-charcoal to-charcoal/90 rounded-[2rem] flex flex-col items-center justify-center p-6 relative overflow-hidden text-white">
      <div className="relative w-[180px] h-[220px] flex items-center justify-center">
        {[0, 1, 2].map((idx) => {
          const isSelected = activeCard === idx;
          const rotation = (idx - activeCard) * 12;
          const translationX = (idx - activeCard) * 24;
          const translationZ = isSelected ? 0 : -50;

          return (
            <motion.div
              key={idx}
              onClick={() => setActiveCard(idx)}
              animate={{
                rotate: rotation,
                x: translationX,
                z: translationZ,
                scale: isSelected ? 1 : 0.9,
                opacity: isSelected ? 1 : 0.6
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute w-[130px] h-[170px] rounded-[1.5rem] bg-white/10 border border-white/20 shadow-2xl flex flex-col items-center justify-center p-3 cursor-pointer backdrop-blur-md"
              style={{
                zIndex: 10 + (3 - Math.abs(idx - activeCard))
              }}
            >
              {/* Blur Shield */}
              <div className="w-full h-full rounded-xl bg-gradient-to-b from-white/10 to-transparent flex flex-col items-center justify-center relative overflow-hidden">
                <Lock className="w-8 h-8 text-coral animate-pulse" />
                <span className="text-[8px] font-bold uppercase tracking-wider text-coral mt-3">Tap to Flip</span>
                
                {/* Frosted Silhouette Glass */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[4px] pointer-events-none" />
              </div>
            </motion.div>
          );
        })}
      </div>
      <span className="text-[10px] text-coral/80 uppercase font-bold tracking-widest mt-2 flex items-center gap-1">
        <ShieldCheck className="w-3.5 h-3.5" /> Screenshot Protected Vault
      </span>
    </div>
  );
}

// 5. Beating Sparkle Heart
function BeatingHeartAnimation() {
  const [pulseCount, setPulseCount] = useState(0);

  return (
    <div className="w-full h-full bg-gradient-to-tr from-cream to-white rounded-[2rem] flex flex-col items-center justify-center p-6 relative overflow-hidden border border-coral/10">
      <motion.button
        onClick={() => setPulseCount(prev => prev + 1)}
        animate={{
          scale: [1, 1.15, 1],
          boxShadow: [
            '0 10px 25px -5px rgba(225, 29, 72, 0.1)',
            '0 20px 35px -5px rgba(225, 29, 72, 0.3)',
            '0 10px 25px -5px rgba(225, 29, 72, 0.1)'
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-24 h-24 rounded-full bg-gradient-to-r from-coral to-amber text-white flex items-center justify-center cursor-pointer shadow-xl relative border-4 border-white z-10 outline-none"
      >
        <Heart className="w-10 h-10 text-white fill-white" />
        
        {/* Sparkle Wave */}
        <AnimatePresence>
          {pulseCount > 0 && (
            <motion.div
              key={pulseCount}
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 1.6, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 bg-coral rounded-full -z-10"
            />
          )}
        </AnimatePresence>
      </motion.button>
      
      <span className="text-[10px] text-brown uppercase font-bold tracking-widest mt-6 animate-pulse">
        {pulseCount > 0 ? `Sent Interest ${pulseCount} Times!` : 'Click Heart to Send Interest'}
      </span>
      <span className="text-[9px] text-text-muted mt-1 text-center max-w-xs font-semibold">
        Triggers a direct match alert and pushes your profile to the top!
      </span>
    </div>
  );
}

// 6. Safe Real-time Chat Simulator
function ChatSimulatorAnimation() {
  const [accepted, setAccepted] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: number, text: string, isSender: boolean }>>([]);
  const [typing, setTyping] = useState(false);

  const fullConversation = [
    { text: 'Namaskar! Great to connect. Do you like hiking in the Sahyadris?', isSender: false },
    { text: 'Yes, I love trekking! Our lifestyle and hobby matches are perfect (92% compatibility!).', isSender: true },
    { text: 'That is wonderful! Let us talk about our values and other shared interests.', isSender: false },
    { text: 'That is wonderful to hear! I would love to involve our families.', isSender: true }
  ];

  useEffect(() => {
    let active = true;
    const runSim = async () => {
      while (active) {
        setAccepted(false);
        setMessages([]);
        await new Promise(r => setTimeout(r, 2500)); // wait in request state
        if (!active) return;
        setAccepted(true); // auto accept
        await new Promise(r => setTimeout(r, 1000));
        
        for (let i = 0; i < fullConversation.length; i++) {
          if (!active) return;
          setTyping(true);
          await new Promise(r => setTimeout(r, 1500));
          if (!active) return;
          setTyping(false);
          setMessages(prev => [...prev, { id: i, ...fullConversation[i] }]);
          await new Promise(r => setTimeout(r, 2000));
        }
        await new Promise(r => setTimeout(r, 5000)); // wait at end of chat before restart
      }
    };
    runSim();
    return () => { active = false; };
  }, []);

  return (
    <div className="w-full h-full bg-gray-50 rounded-[2rem] flex flex-col p-4 border border-coral/10 shadow-inner relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="request"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex-1 flex flex-col items-center justify-center text-center p-4 h-full"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-coral to-amber text-white flex items-center justify-center font-bold text-base mb-3 shadow-md">
              S
            </div>
            <h5 className="font-bold text-xs text-charcoal mb-1">Snehal Kulkarni</h5>
            <p className="text-[9px] text-text-muted mb-4 font-medium">Sent you a secure chat request</p>
            
            <div className="flex gap-3 w-full max-w-[200px]">
              <button className="flex-1 bg-white border border-coral/20 text-text-muted py-2 rounded-xl text-[10px] font-bold hover:bg-gray-50 cursor-pointer">Decline</button>
              <button 
                onClick={() => setAccepted(true)}
                className="flex-1 bg-gradient-to-r from-coral to-amber text-white py-2 rounded-xl text-[10px] font-bold shadow-md shadow-coral/10 hover:shadow-lg cursor-pointer"
              >
                Accept
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col h-full"
          >
            {/* Header bar */}
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-coral to-amber text-white flex items-center justify-center font-bold text-[10px]">
                S
              </div>
              <div>
                <h5 className="font-bold text-[10px] text-charcoal leading-none">Snehal Kulkarni</h5>
                <span className="text-[8px] text-green-500 font-bold flex items-center gap-0.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Active Now
                </span>
              </div>
            </div>

            {/* Messages thread */}
            <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto pr-1 text-[9px] font-medium leading-relaxed">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.isSender
                      ? 'self-end bg-gradient-to-r from-coral to-amber text-white rounded-tr-sm shadow-sm'
                      : 'self-start bg-white text-charcoal border border-gray-100 rounded-tl-sm shadow-sm'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {typing && (
                <div className="self-start bg-white text-text-muted p-2 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-coral animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-1 rounded-full bg-coral animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-1 rounded-full bg-coral animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// 7. Secure Agent Bridge Connection
function AgentBridgeAnimation() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div 
      className="w-full h-full bg-gradient-to-br from-charcoal to-charcoal/90 rounded-[2rem] flex flex-col items-center justify-center p-6 relative overflow-hidden text-white cursor-pointer select-none"
      onClick={() => setUnlocked(prev => !prev)}
      onMouseEnter={() => setUnlocked(true)}
      onMouseLeave={() => setUnlocked(false)}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Main Vault Icon */}
        <motion.div
          animate={{
            borderColor: unlocked ? 'rgba(34, 197, 94, 0.4)' : 'rgba(225, 29, 72, 0.3)',
            scale: unlocked ? 1.05 : 1
          }}
          className="w-20 h-20 rounded-full border-2 flex items-center justify-center relative bg-white/5 border-dashed"
        >
          <AnimatePresence mode="wait">
            {unlocked ? (
              <motion.div
                key="unlocked"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="flex flex-col items-center text-green-400"
              >
                <ShieldCheck className="w-8 h-8" />
              </motion.div>
            ) : (
              <motion.div
                key="locked"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="flex flex-col items-center text-coral"
              >
                <Lock className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {unlocked && (
          <div className="absolute border border-green-500/20 rounded-full w-28 h-28 m-auto pointer-events-none animate-ping" />
        )}
      </div>

      <div className="mt-6 text-center">
        <h5 className="font-bold text-xs text-white mb-1">
          {unlocked ? 'Official Agent Bridge Connected' : 'Personal Contact Details Private'}
        </h5>
        <p className="text-[9px] text-white/60 max-w-[220px] leading-tight mx-auto mb-3">
          {unlocked 
            ? 'Introductions are safely bridged through our verified representative.' 
            : 'Personal numbers are hidden. Call agent to request a direct connection.'}
        </p>
      </div>

      <button
        className={`px-5 py-2.5 rounded-full font-bold text-[10px] tracking-wider uppercase border-2 cursor-pointer transition-colors shadow-lg ${
          unlocked 
            ? 'bg-green-500/10 border-green-500 text-green-400' 
            : 'bg-coral/10 border-coral text-coral'
        }`}
      >
        {unlocked ? 'Call Official Agent' : 'Secure Bridge Protocol'}
      </button>
    </div>
  );
}

// 8. Onboarding Stepper Checklist
function OnboardingStepperAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { title: 'Values & Lifestyle Profile', desc: 'Hobbies, fitness habits, and relationship values input', stepIdx: 0 },
    { title: 'Education & Income Badges', desc: 'Degrees (COEP/VJTI) & Professional verifications', stepIdx: 1 },
    { title: 'Privacy Settings Vault', desc: 'Encrypt photo access & hide phone numbers', stepIdx: 2 }
  ];

  return (
    <div className="w-full h-full bg-white rounded-[2rem] flex flex-col justify-center p-6 relative overflow-hidden border border-coral/10 shadow-inner">
      <h4 className="text-xs font-bold text-coral uppercase tracking-widest mb-4">Onboarding Verification Stepper</h4>
      <div className="flex flex-col gap-4 w-full">
        {items.map((item, idx) => {
          const isDone = step > idx;
          const isActive = step === idx;

          return (
            <div
              key={idx}
              className={`flex items-start gap-4 border rounded-2xl p-3.5 transition-all duration-300 ${
                isActive 
                  ? 'border-coral bg-cream/35 shadow-md translate-x-1.5' 
                  : isDone 
                    ? 'border-green-100 bg-green-50/20 opacity-80' 
                    : 'border-gray-50 bg-gray-50/50 opacity-60'
              }`}
            >
              <div className={`mt-0.5 flex-shrink-0 rounded-full p-0.5 ${isDone ? 'text-green-500 bg-green-50' : isActive ? 'text-coral bg-coral/5 animate-pulse' : 'text-gray-300'}`}>
                <CheckCircle2 className={`w-4 h-4 ${isDone ? 'text-white fill-green-500' : ''}`} fill={isDone ? 'currentColor' : 'none'} />
              </div>
              <div className="text-left font-medium">
                <h5 className="font-bold text-[10px] text-charcoal leading-none mb-1">{item.title}</h5>
                <p className="text-[8px] text-text-muted leading-tight">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 9. Laser Scanning Biometric Lock
function LaserScannerAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-charcoal to-charcoal/90 rounded-[2rem] flex flex-col items-center justify-center p-6 relative overflow-hidden text-white">
      {/* Target Concentrics */}
      <div className="w-36 h-36 border border-white/10 rounded-full flex items-center justify-center relative bg-white/5 shadow-2xl">
        {/* Pulsing Lock Icon */}
        <Lock className="w-10 h-10 text-coral animate-pulse" />
        
        {/* Biometric Laser sweep */}
        <motion.div 
          animate={{ y: [-72, 72, -72] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-coral to-transparent shadow-[0_0_15px_rgba(225,29,72,1)]"
        />
        
        {/* Glow rings */}
        <div className="absolute inset-2 border border-coral/20 rounded-full animate-pulse" />
      </div>

      <span className="text-[10px] text-coral/80 uppercase font-bold tracking-widest mt-6 animate-pulse">
        Encrypted Session Secure
      </span>
      <span className="text-[8px] text-white/50 text-center mt-1 font-semibold max-w-[200px]">
        Vite TLS Protection & Double Token Encryption Verified
      </span>
    </div>
  );
}

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('matching');
  const [activeFeatureId, setActiveFeatureId] = useState('dashboard');

  const filteredFeatures = features.filter(f => f.categoryId === activeCategory);
  
  // Resolve current active feature
  const currentFeature = features.find(f => f.id === activeFeatureId && f.categoryId === activeCategory) 
    || filteredFeatures[0] 
    || features[0];

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    const firstFeatureOfCat = features.find(f => f.categoryId === catId);
    if (firstFeatureOfCat) {
      setActiveFeatureId(firstFeatureOfCat.id);
    }
  };

  // Switch animation component dynamically
  const renderAnimation = () => {
    switch (currentFeature.id) {
      case 'dashboard':
        return <MatchesRadarAnimation />;
      case 'badging':
        return <LifestyleTagRevolverAnimation />;
      case 'bios':
        return <BioFoldersAnimation />;
      case 'galleries':
        return <SecureGalleriesAnimation />;
      case 'direct-connect':
        return <BeatingHeartAnimation />;
      case 'chatting':
        return <ChatSimulatorAnimation />;
      case 'privacy':
        return <AgentBridgeAnimation />;
      case 'register':
        return <OnboardingStepperAnimation />;
      case 'login':
        return <LaserScannerAnimation />;
      default:
        return <MatchesRadarAnimation />;
    }
  };

  return (
    <section id="community" className="py-32 bg-cream/30 relative overflow-hidden">
      {/* Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-coral/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-amber/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 text-coral font-bold rounded-full mb-6 tracking-widest text-sm"
          >
            <Sparkles className="w-4 h-4 text-coral" />
            <span>INTERACTIVE TOOLBOX</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal font-bold mb-6"
          >
            Experience Our Innovative Toolbox
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted font-medium"
          >
            We replaced boring static previews with fully interactive, animated toolboxes. Select a tab below and interact with the animated widgets!
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer shadow-sm border ${
                  isSelected
                    ? 'bg-gradient-to-r from-coral to-amber text-white border-coral shadow-lg shadow-coral/20'
                    : 'bg-white border-coral/10 text-text-muted hover:bg-white hover:text-charcoal hover:shadow-md'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Tabs List */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              {filteredFeatures.map((feature) => {
                const IconComponent = feature.icon;
                const isActive = currentFeature.id === feature.id;

                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeatureId(feature.id)}
                    className={`flex items-center justify-between text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                      isActive
                        ? 'bg-white border-coral/30 shadow-md text-charcoal'
                        : 'bg-white/50 border-white/60 text-text-muted hover:bg-white hover:text-charcoal'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeAnimatedFeatureIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-coral to-amber"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2.5 rounded-xl transition-colors ${
                          isActive ? 'bg-coral text-white' : 'bg-coral/5 text-coral group-hover:bg-coral/10'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-0.5">{feature.title}</h4>
                        <p className="text-[10px] text-text-muted opacity-80">{feature.tagline}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-coral' : 'opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5'}`} />
                  </button>
                );
              })}
            </div>

            {/* Description Copy Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 md:p-8 relative overflow-hidden border border-coral/10"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-coral to-amber" />
                <span className="text-[10px] font-bold text-coral uppercase tracking-widest block mb-1">Interactive Feature Details</span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-charcoal mb-4 leading-tight">
                  {currentFeature.oneLiner}
                </h3>
                <div className="flex items-start gap-3 text-xs text-text-muted font-medium leading-relaxed bg-coral/5 rounded-2xl p-4 border border-coral/5 shadow-inner">
                  <div className="mt-0.5 flex-shrink-0 bg-coral text-white p-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <span>{currentFeature.bullet}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Dynamic Interactive Simulation Container */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-2 md:p-3 bg-white/40 border border-white/80 rounded-[2.5rem] shadow-2xl backdrop-blur-md"
            >
              {/* Premium Phone/Mockup Window Container */}
              <div className="bg-white rounded-[2rem] overflow-hidden border border-coral/10 shadow-xl relative">
                
                {/* Browser Toolbar Header */}
                <div className="bg-gradient-to-r from-cream to-white border-b border-coral/5 px-6 py-4 flex items-center gap-6 justify-between">
                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="bg-white/80 border border-coral/10 text-[9px] md:text-[10px] text-text-muted rounded-full py-1.5 px-6 font-medium shadow-inner flex items-center gap-1.5 min-w-[180px] md:min-w-[280px] justify-center truncate">
                    <Heart className="w-2.5 h-2.5 text-coral fill-coral/20" />
                    <span>myluckyspouse.com/toolbox/{currentFeature.id}</span>
                  </div>
                  <div className="w-10 h-1.5 rounded bg-coral/5 hidden md:block"></div>
                </div>

                {/* Animated Interactive Image Window */}
                <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden group flex items-center justify-center p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeature.id}
                      initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      {renderAnimation()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Verified Product Badge */}
              <div className="absolute bottom-[-1.2rem] right-4 bg-gradient-to-r from-coral to-amber text-white font-bold rounded-2xl px-4 py-2 shadow-lg border border-white/20 text-[10px] tracking-wider flex items-center gap-1.5 z-10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE SIMULATOR</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
