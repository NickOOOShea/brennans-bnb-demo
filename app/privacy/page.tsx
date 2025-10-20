import Header from '@/components/Header'
import Footer from '@/components/Footer'
import bnbInfo from '@/app/data/bnb-info.json'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 mb-12">
            Last updated: October 20, 2025
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                {bnbInfo.name} ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or stay at our B&B.
              </p>
              <p className="text-slate-700 leading-relaxed">
                By using our services, you consent to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Personal Information</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                When you make a booking or contact us, we may collect:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>Name and contact details (email, phone number, postal address)</li>
                <li>Payment information (credit/debit card details, billing address)</li>
                <li>Booking preferences (room type, dates, special requirements)</li>
                <li>Dietary requirements or allergies</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Automatically Collected Information</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Device information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We use your personal information to:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Process and manage your bookings</li>
                <li>Provide accommodation and related services</li>
                <li>Communicate with you about your stay</li>
                <li>Send booking confirmations and invoices</li>
                <li>Respond to your inquiries and requests</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We may share your information with trusted third-party service providers:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li><strong>Booking.com:</strong> For online reservations (<a href="https://www.booking.com/content/privacy.html" className="text-coastal-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
                <li><strong>Payment processors:</strong> For secure payment processing</li>
                <li><strong>Email services:</strong> For booking confirmations and communications</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                These providers are contractually obligated to protect your data and use it only for the purposes we specify.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                5. Data Retention
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Booking information is typically retained for 7 years for accounting and tax purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                6. Your Rights Under GDPR
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                As a resident of the EU/EEA, you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li><strong>Right to access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to rectification:</strong> Correct inaccurate personal data</li>
                <li><strong>Right to erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong>Right to restrict processing:</strong> Limit how we use your data</li>
                <li><strong>Right to data portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Right to object:</strong> Object to processing of your personal data</li>
                <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time</li>
                <li><strong>Right to lodge a complaint:</strong> Contact the Data Protection Commission</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at <a href={`mailto:${bnbInfo.contact.email}`} className="text-coastal-600 hover:underline">{bnbInfo.contact.email}</a>. We will respond within 30 days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                7. Data Security
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                8. Cookies
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. You can control cookies through your browser settings. For more information, see our Cookie Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Our services are not directed to children under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="text-slate-700 mb-2"><strong>{bnbInfo.name}</strong></p>
                <p className="text-slate-700 mb-2">{bnbInfo.address.street}, {bnbInfo.address.village}</p>
                <p className="text-slate-700 mb-2">{bnbInfo.address.county}, {bnbInfo.address.eircode}</p>
                <p className="text-slate-700 mb-2">Email: <a href={`mailto:${bnbInfo.contact.email}`} className="text-coastal-600 hover:underline">{bnbInfo.contact.email}</a></p>
                <p className="text-slate-700">Phone: <a href={`tel:${bnbInfo.contact.phone}`} className="text-coastal-600 hover:underline">{bnbInfo.contact.phone}</a></p>
              </div>
              <p className="text-slate-700 leading-relaxed mt-4">
                <strong>Data Protection Commission (Ireland):</strong><br />
                Website: <a href="https://www.dataprotection.ie" className="text-coastal-600 hover:underline" target="_blank" rel="noopener noreferrer">www.dataprotection.ie</a><br />
                Phone: +353 57 868 4800
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
