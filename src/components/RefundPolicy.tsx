import { motion } from 'framer-motion';

export function RefundPolicy(): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-4xl"
    >
      <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
      <p className="text-gray-400 mb-8">Effective Date: April 8, 2025</p>
      
      <p className="mb-8">
        We want you to be happy with our services. Please read the following refund terms carefully
        before making a purchase.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Eligible Refunds</h2>
        <p className="mb-4">Refunds are available only for:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>First-time customers</li>
          <li>Shared Hosting or VPS services</li>
          <li>Refund requests made within 7 days of purchase</li>
        </ul>
        <p>If you meet the above conditions, contact us to request a refund.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Non-Refundable Services</h2>
        <p className="mb-4">We do not offer refunds for:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Domain registrations or renewals</li>
          <li>Dedicated servers</li>
          <li>Add-ons or custom setups</li>
          <li>Abuse-related terminations or ToS violations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How to Request a Refund</h2>
        <p className="mb-4">Send an email to contact@devmatei.is-a.dev with:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Your order ID</li>
          <li>The service you want refunded</li>
          <li>The reason for your request</li>
        </ul>
        <p>Refunds are typically processed within 5–7 business days if approved.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Disputes and Chargebacks</h2>
        <p>
          Filing a chargeback without first contacting us is a violation of our terms and may lead
          to immediate service suspension. Always reach out to our support team first.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Final Notes</h2>
        <p>
          All services are provided "as is" with no guaranteed uptime or performance. Our refund
          policy is designed to be fair but firm. Abuse of this policy will result in account
          blacklisting.
        </p>
      </section>

      <p className="text-gray-400 italic">
        Thanks for trusting Espresso Hosting — we're here to support you, every step of the way.
      </p>
    </motion.div>
  );
}