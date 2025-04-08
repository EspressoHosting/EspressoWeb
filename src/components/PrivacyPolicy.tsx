import { motion } from 'framer-motion';
import { Coffee, ChevronRight } from 'lucide-react';

export function PrivacyPolicy() {
  const sections = [
    { id: 'information', title: '1. Information We Collect' },
    { id: 'usage', title: '2. How We Use Your Data' },
    { id: 'cookies', title: '3. Cookies and Tracking' },
    { id: 'sharing', title: '4. Data Sharing and Disclosure' },
    { id: 'security', title: '5. Data Security' },
    { id: 'rights', title: '6. Your Rights' },
    { id: 'retention', title: '7. Data Retention' },
    { id: 'changes', title: '8. Changes to This Policy' },
  ];

  return (
    <div className="min-h-screen bg-dark-100 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Coffee className="w-12 h-12 text-brown-400" />
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        </motion.div>

        <div className="grid lg:grid-cols-[300px,1fr] gap-8">
          {/* Table of Contents */}
          <motion.div
            className="lg:sticky lg:top-24 h-fit bg-dark-200 rounded-lg p-6 border border-dark-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-neutral-400 hover:text-brown-400 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Preamble */}
            <div className="bg-dark-200 rounded-lg p-8 border border-dark-300">
              <p className="text-neutral-400 mb-6 text-sm font-medium">Effective Date: April 8, 2025</p>
              <p className="text-lg text-neutral-300">
                At Espresso Hosting, we care about your privacy. This Privacy Policy explains what data we collect, how we use it, and how we protect it. By using our services, you agree to the practices described here.
              </p>
            </div>

            <div id="information" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">1. Information We Collect</h2>
              <p className="text-neutral-400 mb-4">We may collect the following data when you use our services:</p>
              <ul className="list-disc list-inside text-neutral-400 mb-4 ml-4">
                <li>Your name, email address, and billing information</li>
                <li>Server and service usage data</li>
                <li>IP address, device info, and access logs</li>
              </ul>
              <p className="text-neutral-400 mb-4">
                We do not store full payment card details. All payments are processed securely via third-party providers.
              </p>
            </div>

            <div id="usage" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">2. How We Use Your Data</h2>
              <p className="text-neutral-400 mb-4">We use your data to:</p>
              <ul className="list-disc list-inside text-neutral-400 mb-4 ml-4">
                <li>Provide and manage hosting services</li>
                <li>Respond to support inquiries</li>
                <li>Improve service performance and security</li>
                <li>Prevent abuse and ensure fair usage</li>
              </ul>
              <p className="text-neutral-400 mb-4">
                We will never sell your personal data to third parties.
              </p>
            </div>

            <div id="cookies" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">3. Cookies and Tracking</h2>
              <p className="text-neutral-400 mb-4">We may use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside text-neutral-400 mb-4 ml-4">
                <li>Keep you logged in</li>
                <li>Remember preferences</li>
                <li>Analyze site traffic</li>
              </ul>
              <p className="text-neutral-400 mb-4">
                You can disable cookies in your browser settings, but this may limit functionality.
              </p>
            </div>

            <div id="sharing" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">4. Data Sharing and Disclosure</h2>
              <p className="text-neutral-400 mb-4">We may share limited data:</p>
              <ul className="list-disc list-inside text-neutral-400 mb-4 ml-4">
                <li>With law enforcement, if required by law</li>
                <li>With payment processors and infrastructure providers to deliver our services</li>
              </ul>
              <p className="text-neutral-400 mb-4">
                We do not share or sell your data for advertising purposes.
              </p>
            </div>

            <div id="security" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">5. Data Security</h2>
              <p className="text-neutral-400 mb-4">
                We implement standard security practices to protect your data. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute protection.
              </p>
            </div>

            <div id="rights" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">6. Your Rights</h2>
              <p className="text-neutral-400 mb-4">You can request:</p>
              <ul className="list-disc list-inside text-neutral-400 mb-4 ml-4">
                <li>Access to your data</li>
                <li>Correction of incorrect info</li>
                <li>Deletion of your account and related data (where legally permitted)</li>
              </ul>
              <p className="text-neutral-400 mb-4">
                Contact us at contact@devmatei.is-a.dev to make a request.
              </p>
            </div>

            <div id="retention" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">7. Data Retention</h2>
              <p className="text-neutral-400 mb-4">
                We retain data as long as your account is active, or as required by law. After account deletion, backups may persist for up to 30 days before being purged.
              </p>
            </div>

            <div id="changes" className="bg-dark-200 rounded-lg p-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">8. Changes to This Policy</h2>
              <p className="text-neutral-400 mb-4">
                We may update this Privacy Policy at any time. Changes will be posted at https://espressohost.xyz. Continued use of services implies acceptance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}