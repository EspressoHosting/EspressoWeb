import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

export function PaymentProcessing() {
  return (
    <div className="min-h-screen bg-dark-200 pt-36 pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Complete Your Purchase</h1>
          <p className="text-xl text-neutral-400 mb-12">
            To finalize your purchase, please join our Discord server. Our team will assist you with the payment process and server setup.
          </p>

          <div className="space-y-8">
            <motion.a
              href="https://discord.gg/M78RXaw7na"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-brown-600 to-brown-700 text-white font-medium flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-brown-600/20 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-6 h-6" />
              Join Our Discord Server
            </motion.a>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-dark-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-neutral-400 bg-dark-200">Or contact via email</span>
              </div>
            </div>

            <motion.a
              href="mailto:matei@espressohost.xyz"
              className="w-full py-4 px-6 rounded-lg border border-brown-400 text-brown-400 font-medium flex items-center justify-center gap-3 hover:bg-brown-400/10 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-6 h-6" />
              matei@espressohost.xyz
            </motion.a>
          </div>

          <p className="mt-8 text-sm text-neutral-500">
            After joining Discord or sending an email, our team will guide you through the payment process and help you get started with your new server.
          </p>
        </motion.div>
      </div>
    </div>
  );
}