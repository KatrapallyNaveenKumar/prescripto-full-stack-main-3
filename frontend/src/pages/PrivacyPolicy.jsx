const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10">

        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-4">
          At Prescripto, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy explains how we
          collect, use, and safeguard the information you provide while using
          our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Information We Collect</h2>

        <p className="text-gray-700 mb-4">
          When users create an account or book an appointment on Prescripto,
          we may collect certain information including your name, phone number,
          email address, and appointment details.
        </p>

        <p className="text-gray-700 mb-4">
          This information helps us connect patients with doctors and
          facilitate appointment scheduling through our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">How We Use Information</h2>

        <p className="text-gray-700 mb-4">
          The information collected is used for the following purposes:
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>To enable doctor appointment booking.</li>
          <li>To improve user experience on our platform.</li>
          <li>To communicate appointment confirmations and updates.</li>
          <li>To maintain security and prevent misuse of the platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Payment Security</h2>

        <p className="text-gray-700 mb-4">
          Payments made on Prescripto are processed through secure third-party
          payment gateway partners. We do not store sensitive payment
          information such as card details on our servers.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Data Protection</h2>

        <p className="text-gray-700 mb-4">
          We implement reasonable security measures to protect personal data
          from unauthorized access, alteration, or misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Changes to Policy</h2>

        <p className="text-gray-700">
          Prescripto reserves the right to update this Privacy Policy at any
          time. Continued use of the platform indicates acceptance of the
          updated policy.
        </p>

      </div>

    </div>
  )
}

export default PrivacyPolicy
