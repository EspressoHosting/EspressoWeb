import { motion } from 'framer-motion';
import { Coffee, ChevronRight } from 'lucide-react';

export function TermsOfService() {
  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'eligibility', title: '2. Eligibility' },
    { id: 'account', title: '3. Account Registration and Responsibility' },
    { id: 'prohibited', title: '4. Prohibited Uses' },
    { id: 'resource', title: '5. Resource Usage' },
    { id: 'payment', title: '6. Payment and Refund Policy' },
    { id: 'backups', title: '7. Backups and Data' },
    { id: 'support', title: '8. Support' },
    { id: 'suspension', title: '9. Suspension and Termination' },
    { id: 'liability', title: '10. Limitation of Liability' },
    { id: 'indemnification', title: '11. Indemnification' },
    { id: 'changes', title: '12. Changes to Terms' },
    { id: 'law', title: '13. Governing Law' },
    { id: 'contact', title: '14. Contact' },
    { id: 'fair-usage', title: '15. Fair Usage Policy' },
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
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
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
                Welcome to Espresso Hosting — Your Daily Dose of Reliable Hosting. By using any part of our services, you agree to the following Terms of Service. If you disagree, do not use our services.
              </p>
            </div>

            <div id="acceptance" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">1. Acceptance of Terms</h2>
              <p className="text-neutral-400 mb-4">
                By accessing or using any part of Espresso Hosting services—including hosting, domain registration, support, or any associated products ("Services")—you agree to comply with and be legally bound by these Terms of Service and our Privacy Policy. All usage is undertaken at your own risk. You explicitly waive any right to hold us liable for your actions or outcomes resulting from use of our services.
              </p>
            </div>

            <div id="eligibility" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">2. Eligibility</h2>
              <p className="text-neutral-400 mb-4">
                You must be at least 13 years old to use our services. Users under 18 must have parental or legal guardian consent. By using our services, you confirm that you meet these requirements.
              </p>
            </div>

            <div id="account" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">3. Account Registration and Responsibility</h2>
              <p className="text-neutral-400 mb-4">
                You agree to provide accurate, current, and complete information. You are solely responsible for safeguarding your login credentials and for all activity occurring under your account. Espresso Hosting assumes no liability for any loss, misuse, or unauthorized access.
              </p>
            </div>

            <div id="prohibited" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">4. Prohibited Uses</h2>
              <p className="text-neutral-400 mb-4">You may not use our services to:</p>
              <ul className="list-disc list-inside text-neutral-400 mb-4 ml-4">
                <li>Host or distribute malware, viruses, or malicious scripts</li>
                <li>Launch DDoS attacks or attempt to disrupt any system</li>
                <li>Host adult content, spam, or pirated/copyrighted material</li>
                <li>Run any form of cryptocurrency mining (e.g., Bitcoin, Ethereum, Monero, etc.)</li>
                <li>Engage in phishing, fraud, scams, or any illegal activity</li>
              </ul>
              <p className="text-neutral-400 mb-4">
                We reserve the right to immediately suspend or terminate accounts in violation of this section, without refund or warning. All determinations of violations are made at our sole discretion.
              </p>
            </div>

            <div id="resource" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">5. Resource Usage</h2>
              <p className="text-neutral-400 mb-4">
                You agree to maintain reasonable, non-abusive usage. Abuse of CPU, memory, or storage—especially for unauthorized tasks like crypto-mining, botnets, or cracking tools—will result in throttling, suspension, or permanent ban. We reserve the right to take any necessary action to protect our infrastructure and clients.
              </p>
            </div>

            <div id="payment" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">6. Payment and Refund Policy</h2>
              <p className="text-neutral-400 mb-4">
                All payments must be made in advance. We offer a 7-day refund only to first-time customers purchasing shared or VPS hosting. Dedicated servers, domains, and addons are non-refundable under any circumstances. All services are provided as-is with no guaranteed uptime or performance.
              </p>
            </div>

            <div id="backups" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">7. Backups and Data</h2>
              <p className="text-neutral-400 mb-4">
                While Espresso Hosting may conduct periodic backups, we offer no guarantee of data recovery. Clients are responsible for maintaining their own backups. We are not liable for any data loss or corruption.
              </p>
            </div>

            <div id="support" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">8. Support</h2>
              <p className="text-neutral-400 mb-4">
                Support is available via our official ticketing system or Discord server. We do not guarantee response times or outcomes. Any advice from our support team is non-binding, and we are not liable for consequences resulting from it.
              </p>
            </div>

            <div id="suspension" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">9. Suspension and Termination</h2>
              <p className="text-neutral-400 mb-4">We reserve the right to suspend, restrict, or terminate access to any service at any time, without refund, particularly in cases where:</p>
              <ul className="list-disc list-inside text-neutral-400 mb-4 ml-4">
                <li>You violate any part of the ToS</li>
                <li>You engage in harmful or disruptive behavior</li>
                <li>Your use poses a threat to our clients or infrastructure</li>
              </ul>
              <p className="text-neutral-400 mb-4">
                Espresso Hosting holds absolute discretion to act in protection of the network, including disabling, limiting, or deleting accounts or content.
              </p>
            </div>

            <div id="liability" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">10. Limitation of Liability</h2>
              <p className="text-neutral-400 mb-4">To the maximum extent permitted by applicable law, Espresso Hosting, its staff, affiliates, and partners shall not be held liable for:</p>
              <ul className="list-disc list-inside text-neutral-400 mb-4 ml-4">
                <li>Data loss</li>
                <li>Downtime</li>
                <li>Lost revenue, business, or opportunity</li>
                <li>Legal disputes or proceedings</li>
                <li>Emotional distress or incidental damages</li>
              </ul>
              <p className="text-neutral-400 mb-4">
                By using our services, you fully release Espresso Hosting from all liability arising from your usage.
              </p>
            </div>

            <div id="indemnification" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">11. Indemnification</h2>
              <p className="text-neutral-400 mb-4">
                You agree to indemnify, defend, and hold harmless Espresso Hosting and its affiliates from any claim, demand, loss, or liability—including reasonable legal fees—arising from your use of our services, your violation of these terms, or your infringement of any rights.
              </p>
            </div>

            <div id="changes" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">12. Changes to Terms</h2>
              <p className="text-neutral-400 mb-4">
                We may update these Terms at any time, without prior notice. Revisions will be posted at https://espressohost.xyz. Continued use of the services signifies your acceptance of any changes.
              </p>
            </div>

            <div id="law" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">13. Governing Law</h2>
              <p className="text-neutral-400 mb-4">
                These Terms are governed by the laws of Moldova. All legal matters must be resolved in courts within that jurisdiction. By using our services, you waive the right to participate in class actions or group litigation.
              </p>
            </div>

            <div id="contact" className="bg-dark-200 rounded-lg p-8 mb-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">14. Contact</h2>
              <p className="text-neutral-400 mb-4">
                For questions or concerns, please contact us at contact@devmatei.is-a.dev (subject to change).
              </p>
            </div>

            <div id="fair-usage" className="bg-dark-200 rounded-lg p-8 border border-dark-300 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-white">15. Fair Usage Policy</h2>
              <p className="text-neutral-400 mb-4">
                To ensure equitable service delivery and consistent performance for all users, Espresso Hosting enforces a Fair Usage Policy. While our services are designed to be flexible and scalable, they are not intended to support abusive or enterprise-level workloads without prior consultation.
              </p>
              <p className="text-neutral-400 mb-4">Resource usage that compromises server integrity or negatively impacts other clients may result in corrective action, including:</p>
              <ul className="list-disc list-inside text-neutral-400 mb-4 ml-4">
                <li>Throttling of allocated resources</li>
                <li>Suspension of specific services or containers</li>
                <li>Upgrade recommendations or enforced migration to a higher-tier plan</li>
              </ul>
              <p className="text-neutral-400 mb-4">We continuously monitor for irregular usage patterns, such as:</p>
              <ul className="list-disc list-inside text-neutral-400 mb-4 ml-4">
                <li>Excessive I/O operations or disproportionate database activity</li>
                <li>Unauthorized outbound email campaigns (e.g., unsolicited bulk emails)</li>
                <li>Persistent, resource-heavy background processes unrelated to typical hosting usage</li>
              </ul>
              <p className="text-neutral-400 mb-4">
                Clients found in violation will be contacted for remediation. Repeated or intentional violations may lead to service suspension or termination without refund eligibility.
              </p>
              <p className="text-neutral-400 mt-8">
                Thank you for choosing Espresso Hosting — where performance meets responsibility and your game gets the boost it needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}