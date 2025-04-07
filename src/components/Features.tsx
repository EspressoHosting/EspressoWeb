import { motion } from 'framer-motion';
import { Cpu, Globe, Headphones, Layers, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning-Fast Performance',
    description: 'Experience minimal latency with our powerful servers optimized for gaming.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'European Infrastructure',
    description: 'Strategically located servers across Europe for optimal connectivity.'
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Easy Management',
    description: 'User-friendly control panel for effortless server management.'
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: 'Dedicated Support',
    description: '24/7 responsive customer support to assist you whenever needed.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'DDoS Protection',
    description: 'Advanced protection against DDoS attacks keeps your server secure.'
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Scalable Resources',
    description: 'Easily upgrade your plan as your community grows.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-dark-200 to-dark-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Espresso Hosting?</h2>
          <p className="text-xl text-neutral-400">Brewing the perfect blend of performance and reliability</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-dark-200 border border-dark-300 hover:border-brown-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-brown-600/20 flex items-center justify-center mb-4 text-brown-400"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}