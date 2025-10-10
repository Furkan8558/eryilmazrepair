import { Link } from 'react-router-dom'
import { FaPhone, FaCheckCircle } from 'react-icons/fa'
import { companyInfo } from '../data/companyInfo'

export default function Hero() {
  return (
    <div className="hero-gradient text-white section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="mb-6 leading-tight">
              Professional Appliance Repair Services
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Fast, reliable, and affordable appliance repair for all major brands. 
              Same-day service available. Licensed and insured technicians.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {companyInfo.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right Content - Image/Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold mb-2">5K+</div>
                    <div className="text-sm">Happy Customers</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-sm">Emergency Service</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

