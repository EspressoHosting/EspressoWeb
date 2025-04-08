import { motion } from 'framer-motion';
import { Code, Database, Scale, Coffee } from 'lucide-react';

const founders = [
  {
    name: 'Matei',
    title: 'Lead Developer & Founder',
    description: 'The visionary behind Espresso Hosting\'s success story. Matei, the lead developer and founder, brings a wealth of experience and a passion for innovation to the table. With a keen eye for detail and a commitment to excellence, Matei ensures our platform is not just functional but also user-friendly and aesthetically pleasing.',
    image: 'https://cdn.discordapp.com/avatars/784443338627612673/ece15e450a7e1b6cc644fe819c1e72f6?size=1024',
    icon: <Code className="w-6 h-6" />,
    link: 'https://devmatei.is-a.dev'
  },
  {
    name: 'Krishna',
    title: 'VPS Manager & Investor & Founder',
    description: 'As our dedicated VPS manager and key investor, Krishna plays a vital role in overseeing our server infrastructure and business growth. His strategic investments and expertise in managing virtual private servers ensure our hosting services maintain the highest standards of reliability and performance.',
    image: 'https://cdn.discordapp.com/avatars/1329892250494308372/a_cc92dcabd8013f64d3cff3652bc8bdec?size=1024',
    icon: <Database className="w-6 h-6" />
  },
  {
    name: 'Divyanshu',
    title: 'Lead Developer & Founder',
    description: 'A backend virtuoso and the architectural mastermind of Espresso Hosting. Divyanshu, the lead developer and founder, specializes in building robust server infrastructures and optimizing database performance, ensuring our platform operates with maximum efficiency and scalability.',
    image: 'https://cdn.discordapp.com/avatars/1268498855083638828/a_63b1c5a96e89ad160d89a4140d040cf7?size=1024',
    icon: <Code className="w-6 h-6" />
  }
];

export function Founders() {
  return (
    <section id="founders" className="py-24 bg-dark-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Meet the Founders</h2>
          <p className="text-xl text-neutral-400">The team brewing your success</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="rounded-2xl bg-dark-200 p-8 border border-dark-300 hover:border-brown-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 to-transparent" />
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark-200/90 flex items-center justify-center text-brown-400"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {founder.icon}
                </motion.div>
              </motion.div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                <p className="text-brown-400 font-medium mb-4">{founder.title}</p>
                <p className="text-neutral-400 mb-4">{founder.description}</p>
                {founder.link && (
                  <motion.a
                    href={founder.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brown-400 hover:text-brown-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Portfolio
                    <Code className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}