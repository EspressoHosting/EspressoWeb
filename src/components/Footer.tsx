import { motion } from 'framer-motion';
import { Coffee, Facebook, Github, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-100 text-white py-16 border-t border-dark-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Coffee className="w-8 h-8 text-brown-400" />
              <span className="text-xl font-bold">Espresso Hosting</span>
            </motion.div>
            <p className="text-neutral-400">Your daily dose of reliable game server hosting, powered by passion and performance.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#plans" className="text-neutral-400 hover:text-brown-400 transition-colors">Plans</a></li>
              <li><a href="#features" className="text-neutral-400 hover:text-brown-400 transition-colors">Features</a></li>
              <li><a href="#founders" className="text-neutral-400 hover:text-brown-400 transition-colors">About Us</a></li>
              <li><a href="https://panel.espressohost.xyz" className="text-neutral-400 hover:text-brown-400 transition-colors">Control Panel</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-neutral-400 hover:text-brown-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-neutral-400 hover:text-brown-400 transition-colors">Terms of Service</a></li>
              <li><a href="/refund" className="text-neutral-400 hover:text-brown-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center hover:bg-brown-600/20 transition-colors text-brown-400"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center hover:bg-brown-600/20 transition-colors text-brown-400"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center hover:bg-brown-600/20 transition-colors text-brown-400"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center hover:bg-brown-600/20 transition-colors text-brown-400"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="text-center text-neutral-400 pt-8 border-t border-dark-300">
          <p>© {currentYear} Espresso Hosting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}