import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Logo / Name */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">
            Prescripto
          </h2>

          <p className="text-gray-500 mt-2 text-sm">
            Secure doctor appointment booking platform
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 flex-wrap text-gray-600 text-sm">

          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>

          <Link to="/privacy-policy" className="hover:text-blue-600">
            Privacy Policy
          </Link>

          <Link to="/terms" className="hover:text-blue-600">
            Terms
          </Link>

          <Link to="/refund-policy" className="hover:text-blue-600">
            Refund Policy
          </Link>

          <Link to="/cancellation-policy" className="hover:text-blue-600">
            Cancellation Policy
          </Link>

          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>

        </div>

        {/* Divider */}
        <div className="border-t mt-8 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © 2026 Prescripto. All rights reserved.
          </p>

          <p className="text-gray-400 text-xs mt-2">
            Secure payments powered by trusted payment gateway partners.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
