import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, MessageCircle, UserSearch, Sparkles, Zap, Lock, ShieldCheck, Heart } from 'lucide-react';

// Feature 1 Graphic: Matches Constellation Radar Scanner
function MatchesRadarGraphic() {
  return (
    <div className="w-full h-[320px] bg-gradient-to-br from-charcoal to-charcoal/90 rounded-[2rem] flex flex-col items-center justify-center p-6 relative overflow-hidden text-white shadow-2xl">
      {/* Radar Sweeper */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-[3px] border-coral/10 rounded-full w-[240px] h-[240px] m-auto flex items-center justify-center pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, rgba(225, 29, 72, 0.15) 0deg, transparent 90deg)'
        }}
      />
      {/* Target Concentrics */}
      <div className="absolute border border-coral/20 rounded-full w-[180px] h-[180px] m-auto pointer-events-none" />
      <div className="absolute border border-coral/10 rounded-full w-[100px] h-[100px] m-auto pointer-events-none" />
      
      {/* Center Anchor */}
      <div className="w-5 h-5 rounded-full bg-coral shadow-lg shadow-coral/50 flex items-center justify-center z-10">
        <Heart className="w-2.5 h-2.5 text-white fill-white" />
      </div>

      {/* Floating Match Nodes */}
      <motion.div
        animate={{ y: [-4, 4, -4], x: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 glass-card border-coral/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[9px] text-coral font-bold bg-white/10 backdrop-blur-md"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span>Snehal K. • 96% Match</span>
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 glass-card border-amber/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[9px] text-amber font-bold bg-white/10 backdrop-blur-md"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span>Rahul J. • Value Match</span>
      </motion.div>

    </div>
  );
}

// Feature 2 Graphic: Self-Typing Chat Simulator
function ChatSimulatorGraphic() {
  const [accepted, setAccepted] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: number, text: string, isSender: boolean }>>([]);
  const [typing, setTyping] = useState(false);

  const fullConversation = [
    { text: 'Namaskar! Great to connect. Do you like hiking in the Sahyadris?', isSender: false },
    { text: 'Yes, I love trekking! Our lifestyle and hobby matches are perfect (92% compatibility!).', isSender: true },
    { text: 'That is wonderful! Let us talk about our values and other shared interests.', isSender: false }
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
    <div className="w-full h-[320px] bg-gray-50 rounded-[2rem] flex flex-col p-4 border border-coral/10 shadow-2xl relative overflow-hidden">
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
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-coral to-amber text-white flex items-center justify-center font-bold text-[9px]">
                S
              </div>
              <div>
                <h5 className="font-bold text-[10px] text-charcoal leading-none">Snehal Kulkarni</h5>
                <span className="text-[8px] text-green-500 font-bold flex items-center gap-0.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Active Now
                </span>
              </div>
            </div>

            {/* Messages Thread */}
            <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1 text-[8px] font-medium leading-relaxed">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[85%] p-2.5 rounded-2xl ${
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
                  <span className="w-1.5 h-1.5 rounded-full bg-coral animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-coral animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-coral animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Feature 3 Graphic: Secure Agent Bridge Connection
function AgentBridgeGraphic() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div 
      className="w-full h-[320px] bg-gradient-to-br from-charcoal to-charcoal/90 rounded-[2rem] flex flex-col items-center justify-center p-6 relative overflow-hidden text-white shadow-2xl cursor-pointer select-none"
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
          className="w-16 h-16 rounded-full border-2 flex items-center justify-center relative bg-white/5 border-dashed"
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
                <ShieldCheck className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="locked"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="flex flex-col items-center text-coral"
              >
                <Lock className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {unlocked && (
          <div className="absolute border border-green-500/20 rounded-full w-24 h-24 m-auto pointer-events-none animate-ping" />
        )}
      </div>

      <div className="mt-6 text-center">
        <h5 className="font-bold text-xs text-white mb-1">
          {unlocked ? 'Official Agent Bridge Connected' : 'Personal Contact Details Private'}
        </h5>
        <p className="text-[9px] text-white/60 max-w-[200px] leading-tight mx-auto mb-3">
          {unlocked 
            ? 'Introductions are safely bridged through our verified representative.' 
            : 'Personal numbers are hidden. Call agent to request a direct connection.'}
        </p>
      </div>

      <button
        className={`px-4 py-2 rounded-full font-bold text-[9px] tracking-wider uppercase border-2 cursor-pointer transition-colors shadow-lg ${
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

export default function Features() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div id="features" className="bg-background py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-amber/10 text-amber font-bold rounded-full mb-6 tracking-widest text-sm"
          >
            DISCOVER THE ECOSYSTEM
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal font-bold mb-6"
          >
            Engagement, Elevated
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted font-medium"
          >
            Reconnect with verified profiles using direct engagement tools designed to help you communicate safely and match perfectly.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32"
        >
          {/* Feature 1: Matches Constellation */}
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="max-w-sm mx-auto w-full">
                <MatchesRadarGraphic />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="w-14 h-14 bg-gradient-to-br from-amber to-coral text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-coral/30">
                <UserSearch className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-coral uppercase tracking-widest block mb-2">Smart Profile Constellation</span>
              <h3 className="text-3xl md:text-4xl font-serif text-charcoal font-bold mb-4">Matches Radar Constellation</h3>
              <p className="text-xl text-brown font-medium mb-6 leading-snug">
                "Browse daily verified matches filtered by compatibility, education, and lifestyle tags instantly."
              </p>
              <div className="flex items-center gap-2 text-sm text-text-muted font-semibold bg-coral/5 rounded-xl p-3 border border-coral/5 shadow-inner w-fit">
                <Zap className="w-4 h-4 text-coral" />
                <span>Filter instantly by occupation, interests, and lifestyle habits.</span>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Safe Real-Time Chat */}
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="max-w-sm mx-auto w-full">
                <ChatSimulatorGraphic />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="w-14 h-14 bg-gradient-to-br from-coral to-amber text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-coral/30">
                <MessageCircle className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-coral uppercase tracking-widest block mb-2">Encrypted Communication</span>
              <h3 className="text-3xl md:text-4xl font-serif text-charcoal font-bold mb-4">Safe Real-Time Chat Simulator</h3>
              <p className="text-xl text-brown font-medium mb-6 leading-snug">
                "Initiate secure chats with active profiles instantly, without sharing phone numbers."
              </p>
              <div className="flex items-center gap-2 text-sm text-text-muted font-semibold bg-coral/5 rounded-xl p-3 border border-coral/5 shadow-inner w-fit">
                <Zap className="w-4 h-4 text-coral" />
                <span>Verify compatibility through secure direct chats on the platform.</span>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Strict Contact Privacy */}
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="max-w-sm mx-auto w-full">
                <AgentBridgeGraphic />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="w-14 h-14 bg-gradient-to-br from-amber to-coral text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber/30">
                <Shield className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-coral uppercase tracking-widest block mb-2">Absolute Vault Security</span>
              <h3 className="text-3xl md:text-4xl font-serif text-charcoal font-bold mb-4">Guaranteed Contact Details Privacy</h3>
              <p className="text-xl text-brown font-medium mb-6 leading-snug">
                "Keep your phone number strictly private—all introductions are safely facilitated through our verified official agent."
              </p>
              <div className="flex items-center gap-2 text-sm text-text-muted font-semibold bg-coral/5 rounded-xl p-3 border border-coral/5 shadow-inner w-fit">
                <Zap className="w-4 h-4 text-coral" />
                <span>Introductions are bridged securely through our official agent to connect both families.</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
