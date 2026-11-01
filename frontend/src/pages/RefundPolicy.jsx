const RefundPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10">

        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Refund Policy
        </h1>

        <p className="text-gray-700 mb-4">
          Prescripto aims to provide a smooth and reliable appointment booking
          experience for all users.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Refund Eligibility</h2>

        <p className="text-gray-700 mb-4">
          If a payment is made for booking an appointment and the appointment
          is cancelled within the allowed cancellation period, the user may be
          eligible for a refund.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Refund Processing</h2>

        <p className="text-gray-700 mb-4">
          Approved refunds will be processed through the original payment
          method used for the transaction.
        </p>

        <p className="text-gray-700 mb-4">
          Refunds typically take between
          <span className="font-semibold text-blue-500"> 5–7 business days </span>
          to be reflected in the user’s account depending on the payment
          gateway and banking system.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Support</h2>

        <p className="text-gray-700">
          If you have questions regarding refunds, please contact our support
          team through the Contact page.
        </p>

      </div>

    </div>
  )
}

export default RefundPolicy
