import { Link } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa'
import { companyInfo } from '../data/companyInfo'

export default function CallToAction() {
  return (
    <section className="hero-gradient text-white section-padding">
      <div className="container-custom text-center">
        <h2 className="mb-6">Need Appliance Repair? We're Here to Help!</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Don't let broken appliances disrupt your life. Our expert technicians are ready 
          to fix your appliances quickly and affordably. Schedule your service today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Schedule Service Now
          </Link>
          <a
            href={`tel:${companyInfo.phone}`}
            className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600"
          >
            <FaPhone className="inline mr-2" />
            Call {companyInfo.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

