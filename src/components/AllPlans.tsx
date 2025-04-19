import { motion } from 'framer-motion';
import { Coffee, CoffeeIcon, Cpu, Database, Globe, Shield, Gamepad, Server } from 'lucide-react';
import { useState } from 'react';

const gameCategories = [
  {
    name: 'Minecraft',
    plans: [
      {
        name: 'The Single Shot',
        price: '€3.99',
        discountedPrice: '€3.59',
        features: [
          '2 GB RAM',
          '1vcore',
          '20gb nvme',
          '10 Player Slots',
          'DDoS Protection',
          '24/7 Support (Discord)'
        ],
        icon: <Gamepad className="w-6 h-6" />
      },
      {
        name: 'The Double Shot',
        price: '€5.99',
        discountedPrice: '€5.39',
        features: [
          '4 GB RAM',
          '2vcore',
          '40gb nvme',
          '25 Player Slots',
          'DDoS Protection',
          '24/7 Priority Support'
        ],
        icon: <Server className="w-6 h-6" />,
        popular: true
      },
      {
        name: 'The Latte',
        price: '€9.99',
        discountedPrice: '€8.99',
        features: [
          '8 GB RAM',
          '5vcore',
          '60 GB SSD',
          '50 Player Slots',
          'DDoS Protection',
          '24/7 VIP Support'
        ],
        icon: <Cpu className="w-6 h-6" />
      }
    ]
  },
  {
    name: 'Discord Bot (Python)',
    plans: [
      {
        name: 'Espresso Shot',
        price: '€4.99',
        discountedPrice: '€4.49',
        features: [
          '1 GB RAM',
          '1vcore',
          '20gb SSD',
          '3 Concurrent Bots',
          'API Rate Limit Handling',
          '99.9% Uptime',
          'Python 3.11+ Support',
          'Basic Support'
        ],
        icon: <CoffeeIcon className="w-6 h-6" />
      },
      {
        name: 'Cappuccino',
        price: '€7.99',
        discountedPrice: '€7.19',
        features: [
          '2 GB RAM',
          '2vcore',
          '40gb SSD',
          '10 Concurrent Bots',
          'Database Integration',
          'Advanced Monitoring',
          'Priority Queue',
          '24/7 Support'
        ],
        icon: <CoffeeIcon className="w-6 h-6" />,
        popular: true
      },
      {
        name: 'Mocha Latte',
        price: '€10.99',
        discountedPrice: '€9.89',
        features: [
          '4 GB RAM',
          '3vcore',
          '80gb SSD',
          '25 Concurrent Bots',
          'Auto-scaling',
          'Dedicated IP',
          'Webhook Support',
          'VIP Support'
        ],
        icon: <CoffeeIcon className="w-6 h-6" />
      }
    ]
  },
  {
    name: 'Discord Bot (TypeScript)',
    plans: [
      {
        name: 'Macchiato',
        price: '€1.99',
        discountedPrice: '€1.49',
        features: [
          '1 GB RAM',
          '1vcore',
          '20gb SSD',
          'Node.js 20+',
          '24/7 Support'
        ],
        icon: <CoffeeIcon className="w-6 h-6" />
      },
      {
        name: 'Flat White',
        price: '€2.99',
        discountedPrice: '€2.49',
        features: [
          '2 GB RAM',
          '2vcore',
          '40gb SSD',
          'Node.js 20+',
          'Priority 24/7 Support'
        ],
        icon: <CoffeeIcon className="w-6 h-6" />,
        popular: true
      },
      {
        name: 'Affogato',
        price: '€3.99',
        discountedPrice: '€2.99',
        features: [
          '4 GB RAM',
          '3vcore',
          '80gb SSD',
          '24/7 Support'
        ],
        icon: <CoffeeIcon className="w-6 h-6" />
      }
    ]
  }
];


export function AllPlans() {
  const [hoveredPlan, setHoveredPlan] = useState<{category: number, plan: number} | null>(null);

  return (
    <div className="min-h-screen bg-dark-200 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Espresso-Powered Hosting Plans</h1>
          <p className="text-xl text-neutral-400">Brew the perfect server blend for your needs</p>
        </motion.div>

        {gameCategories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8"
            >
              {category.name} Servers
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {category.plans.map((plan, planIndex) => (
                <motion.div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 bg-dark-100 ${plan.popular ? 'border-2 border-brown-600' : 'border border-dark-300'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: planIndex * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    rotateY: hoveredPlan?.category === categoryIndex && hoveredPlan?.plan === planIndex ? 5 : 0
                  }}
                  onHoverStart={() => setHoveredPlan({ category: categoryIndex, plan: planIndex })}
                  onHoverEnd={() => setHoveredPlan(null)}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brown-600 to-brown-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <motion.div
                    className="flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-brown-600/20 flex items-center justify-center text-brown-400">
                      {plan.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
                  <div className="text-center mb-6">
                <p className="text-3xl font-bold text-brown-400">
                  <span className="line-through text-neutral-500">{plan.price}</span>
                  <span className="ml-2">{plan.discountedPrice}</span>
                  <span className="text-sm text-neutral-400">/month</span>
                </p>
                <p className="text-sm text-green-400 mt-1">10% OFF</p>
              </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2 text-neutral-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Shield className="w-5 h-5 text-brown-400" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    href="/payment"
                    className={`w-full py-3 rounded-lg ${plan.popular
                      ? 'bg-gradient-to-r from-brown-600 to-brown-700 text-white hover:shadow-lg hover:shadow-brown-600/20'
                      : 'border border-brown-400 text-brown-400 hover:bg-brown-400/10'
                    } font-medium transition-all text-center block`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Select Plan
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}