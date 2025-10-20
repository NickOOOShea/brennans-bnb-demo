import Header from '@/components/Header'
import Footer from '@/components/Footer'
import bnbInfo from '@/app/data/bnb-info.json'
import policies from '@/app/data/policies.json'

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600 mb-12">
            Last updated: October 20, 2025
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                1. Booking Terms
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                By making a reservation at {bnbInfo.name}, you agree to be bound by these Terms of Service.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">1.1 Reservations</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>All reservations are subject to availability</li>
                <li>A deposit of {policies.payment.deposit} is required to secure your booking</li>
                <li>The remaining balance is due on arrival</li>
                <li>Valid photo ID is required for all guests at check-in</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">1.2 Pricing</h3>
              <p className="text-slate-700 leading-relaxed">
                Room rates are quoted in EUR and vary by season. Prices are per room per night and include VAT. Breakfast is included in all room rates.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                2. Check-In and Check-Out
              </h2>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 mb-4">
                <p className="text-slate-700 mb-2"><strong>Check-In:</strong> {policies.checkIn.standard} - {policies.checkIn.latest}</p>
                <p className="text-slate-700"><strong>Check-Out:</strong> {policies.checkOut.standard}</p>
              </div>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>{policies.checkIn.early}</li>
                <li>{policies.checkIn.lateArrival}</li>
                <li>{policies.checkOut.late}</li>
                <li>{policies.checkOut.luggage}</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                3. Cancellation Policy
              </h2>
              <div className="bg-coastal-50 rounded-lg p-6 border border-coastal-200 mb-4">
                <p className="text-slate-700 mb-2"><strong>Free Cancellation:</strong> {policies.cancellation.standard.policy}</p>
                <p className="text-slate-700 mb-2"><strong>Late Cancellation:</strong> {policies.cancellation.standard.penalty}</p>
                <p className="text-slate-700"><strong>No-Show:</strong> {policies.cancellation.noShow}</p>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                {policies.cancellation.amendments}
              </p>
              <p className="text-slate-700 leading-relaxed">
                {policies.cancellation.weather}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                4. House Rules
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To ensure a pleasant stay for all guests, we ask that you respect the following house rules:
              </p>
              <div className="grid gap-4">
                {policies.houseRules.map((rule, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">{rule.title}</h4>
                    <p className="text-slate-700 text-sm">{rule.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                5. Children and Extra Beds
              </h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Children of all ages are welcome</li>
                <li>Cribs available free of charge for children up to {policies.childrenAndBeds.cribs.ageLimit}</li>
                <li>{policies.childrenAndBeds.childPricing}</li>
                <li>{policies.childrenAndBeds.extraBeds.note}</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                6. Payment Methods
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We accept the following payment methods:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                {policies.payment.methods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
              <p className="text-slate-700 leading-relaxed">
                <strong>Direct Booking Benefits:</strong> {policies.payment.directBookingBenefit}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                7. Guest Responsibilities
              </h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Guests are responsible for any damage to the property or furnishings</li>
                <li>Please report any damage or issues immediately to reception</li>
                <li>Lost keys will incur a replacement charge</li>
                <li>Guests must not disturb other guests or neighbors</li>
                <li>Illegal activities are strictly prohibited</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                8. Breakfast Service
              </h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Breakfast served daily from 08:00 to 10:00</li>
                <li>Earlier breakfast times available by request for early departures</li>
                <li>Please inform us of any dietary requirements or allergies in advance</li>
                <li>Vegetarian, vegan, and gluten-free options available</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                9. Liability
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                While we take every precaution to ensure your safety and security:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>We are not liable for loss or damage to guests' personal belongings</li>
                <li>Valuables should be stored securely in your room</li>
                <li>We recommend travel insurance for all guests</li>
                <li>Our liability is limited to the extent permitted by Irish law</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                10. Accessibility
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {policies.accessibility.wheelchairAccess} {policies.accessibility.assistance}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                11. Force Majeure
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We shall not be liable for any failure to perform our obligations where such failure is due to circumstances beyond our reasonable control, including but not limited to severe weather, natural disasters, government restrictions, or other force majeure events.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                12. Governing Law
              </h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of Ireland. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the Irish courts.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                14. Contact Information
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="text-slate-700 mb-2"><strong>{bnbInfo.name}</strong></p>
                <p className="text-slate-700 mb-2">{bnbInfo.address.street}, {bnbInfo.address.village}</p>
                <p className="text-slate-700 mb-2">{bnbInfo.address.county}, {bnbInfo.address.eircode}</p>
                <p className="text-slate-700 mb-2">Email: <a href={`mailto:${bnbInfo.contact.email}`} className="text-coastal-600 hover:underline">{bnbInfo.contact.email}</a></p>
                <p className="text-slate-700">Phone: <a href={`tel:${bnbInfo.contact.phone}`} className="text-coastal-600 hover:underline">{bnbInfo.contact.phone}</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
