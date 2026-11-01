const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10">

        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 mb-4">
          These Terms and Conditions govern the use of the Prescripto platform.
          By accessing or using our website, you agree to comply with these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Platform Overview</h2>

        <p className="text-gray-700 mb-4">
          Prescripto is an online doctor appointment booking platform that
          allows users to browse available doctors and schedule appointments
          conveniently.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">User Responsibilities</h2>

        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Provide accurate personal information.</li>
          <li>Respect appointment timings.</li>
          <li>Follow the policies of respective clinics and doctors.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Service Disclaimer</h2>

        <p className="text-gray-700 mb-4">
          Prescripto only facilitates appointment bookings and does not provide
          medical advice or treatment. Medical services are provided directly
          by the respective doctors or healthcare providers.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Limitation of Liability</h2>

        <p className="text-gray-700">
          Prescripto is not responsible for delays, cancellations, or medical
          outcomes resulting from services provided by doctors or clinics.
        </p>

      </div>

    </div>
  )
}

export default Terms
