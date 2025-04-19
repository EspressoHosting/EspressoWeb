import { motion } from 'framer-motion';
import { Server, Zap, Coffee } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Hero() {
  return (
    <section className="min-h-screen pt-36 pb-16 relative overflow-hidden bg-gradient-to-b from-dark-200 to-dark-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(161,128,114,0.15),rgba(0,0,0,0))]" />
        
        {/* Coffee beans floating animation */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0,
              scale: 0.5
            }}
            animate={{ 
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              rotate: 360,
              scale: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Coffee className="w-6 h-6 text-brown-600/20" />
          </motion.div>
        ))}

        {/* Glowing orbs */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-4 h-4 rounded-full bg-gradient-radial from-brown-400/20 to-transparent"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="mb-8 relative inline-block"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Coffee className="w-20 h-20 text-brown-400 mx-auto" />
            {/* Steam animation */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute -top-4 left-1/2 w-2 h-2 bg-brown-400/20 rounded-full"
                initial={{ y: 0, opacity: 0.5, scale: 1 }}
                animate={{
                  y: -30,
                  opacity: 0,
                  scale: 2,
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  },
                }}
              />
            ))}
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-brown-400 to-brown-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', bounce: 0.4 }}
          >
            Your Daily Dose of Reliable Hosting
          </motion.h1>
          
          <motion.p
            className="text-xl text-neutral-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring', bounce: 0.4 }}
          >
            Power Up Your Game, Right Here in Europe. Get lightning-fast, reliable game server hosting strategically located across Europe for a low-latency experience. Just like a perfect shot of espresso, we deliver the concentrated performance your European players demand.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: 'spring', bounce: 0.4 }}
          >
            <motion.a
              href="#plans"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-brown-600 to-brown-700 text-white font-medium flex items-center gap-2 group hover:shadow-lg hover:shadow-brown-600/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Server className="w-5 h-5" />
              <span>Explore Server Plans</span>
            </motion.a>
            
            <motion.a
              href="#features"
              className="px-8 py-3 rounded-lg border border-brown-400 text-brown-400 font-medium flex items-center gap-2 hover:bg-brown-400/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5" />
              <span>Learn More</span>
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}