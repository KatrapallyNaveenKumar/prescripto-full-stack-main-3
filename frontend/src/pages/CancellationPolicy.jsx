const CancellationPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10">

        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Cancellation Policy
        </h1>

        <p className="text-gray-700 mb-4">
          Prescripto allows users to cancel doctor appointments through the
          platform before the scheduled consultation time.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Appointment Cancellation
        </h2>

        <p className="text-gray-700 mb-4">
          Users may cancel appointments based on the cancellation policy of
          the respective doctor or clinic.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Refund After Cancellation
        </h2>

        <p className="text-gray-700 mb-4">
          If the cancellation is made within the permitted time, the user may
          be eligible for a refund according to our refund policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Policy Updates
        </h2>

        <p className="text-gray-700">
          Prescripto reserves the right to update this policy to ensure smooth
          operation of the platform.
        </p>

      </div>

    </div>
  )
}

export default CancellationPolicy
