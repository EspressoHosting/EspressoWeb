import { motion } from 'framer-motion';
import { Coffee, Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-dark-100 text-white flex items-center justify-center p-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative inline-block mb-8">
            <Coffee className="w-24 h-24 text-brown-400 mx-auto" />
            <div className="absolute inset-0 bg-gradient-to-b from-brown-400/10 to-transparent rounded-full" />
          </div>

          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-neutral-400 mb-8">This page seems to have evaporated like morning mist...</p>

          <motion.a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-5 h-5" />
            Return to Home
          </motion.a>

          <div className="mt-16 p-6 bg-dark-200 rounded-xl border border-dark-300">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Coffee className="w-6 h-6 text-brown-400" />
              <h2 className="text-lg font-semibold">Did You Know?</h2>
            </motion.div>
            <p className="text-neutral-400">
              The name "Espresso Host" was inspired by our founder's love for
              <span className="text-brown-400"> Sabrina Carpenter's 'Espresso' </span>
              - a track that fueled countless late-night coding sessions as we built this platform!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}