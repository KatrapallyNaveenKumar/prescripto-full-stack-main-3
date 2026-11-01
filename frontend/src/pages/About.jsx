const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-10">

        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          About Prescripto
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Prescripto is an online doctor appointment booking platform designed
          to simplify the process of connecting patients with healthcare
          professionals. Our platform enables users to easily browse available
          doctors, view their profiles, and schedule appointments conveniently
          through a secure and user-friendly interface.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Our goal is to reduce waiting times and improve accessibility to
          healthcare services by offering a streamlined appointment booking
          experience. Patients can book appointments from the comfort of their
          homes without the hassle of visiting clinics for scheduling.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Our Mission
        </h2>

        <p className="text-gray-700 mb-6">
          Our mission is to make healthcare more accessible by providing a
          digital platform that simplifies doctor appointment scheduling.
          Prescripto aims to improve the healthcare experience for patients by
          reducing waiting times and offering an efficient booking process.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Our Services
        </h2>

        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Online doctor appointment booking</li>
          <li>Easy access to doctor profiles and availability</li>
          <li>Secure online payment for appointment confirmation</li>
          <li>User-friendly platform for quick scheduling</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Why Choose Prescripto
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Convenient appointment booking from anywhere</li>
          <li>Secure and reliable platform</li>
          <li>Trusted by patients for easy healthcare access</li>
          <li>Fast and simple scheduling process</li>
        </ul>

      </div>

    </div>
  )
}

export default About
