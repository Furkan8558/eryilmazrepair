import { Link } from 'react-router-dom'
import { FaBuilding, FaCheckCircle, FaClock, FaTools, FaShieldAlt } from 'react-icons/fa'
import CallToAction from '../components/CallToAction'
import { companyInfo } from '../data/companyInfo'

export default function CommercialServices() {
  const commercialServices = [
    {
      id: 'commercial-refrigeration',
      name: 'Commercial Refrigeration',
      description: 'Walk-in coolers, reach-in refrigerators, display cases, and more.',
      icon: FaTools
    },
    {
      id: 'commercial-ice-machines',
      name: 'Ice Machine Repair',
      description: 'Keep your ice machines running efficiently for your business needs.',
      icon: FaTools
    },
    {
      id: 'commercial-dishwashers',
      name: 'Commercial Dishwasher Repair',
      description: 'Restaurant and commercial dishwasher repair and maintenance.',
      icon: FaTools
    },
    {
      id: 'commercial-ovens',
      name: 'Commercial Oven & Range Repair',
      description: 'Professional repair for commercial cooking equipment.',
      icon: FaTools
    },
    {
      id: 'commercial-washers-dryers',
      name: 'Commercial Laundry Equipment',
      description: 'Washers and dryers for laundromats, hotels, and multi-family buildings.',
      icon: FaTools
    },
    {
      id: 'commercial-freezers',
      name: 'Commercial Freezer Repair',
      description: 'Walk-in and reach-in freezer repair and maintenance services.',
      icon: FaTools
    }
  ]

  const industries = [
    'Restaurants & Cafes',
    'Hotels & Hospitality',
    'Healthcare Facilities',
    'Schools & Universities',
    'Multi-Family Housing',
    'Retail Stores',
    'Office Buildings',
    'Laundromats',
    'Food Service',
    'Property Management'
  ]

  const benefits = [
    {
      icon: FaClock,
      title: 'Minimize Downtime',
      description: 'Fast response times and efficient repairs to keep your business running.'
    },
    {
      icon: FaShieldAlt,
      title: 'Commercial Expertise',
      description: 'Specialized training in commercial-grade appliances and equipment.'
    },
    {
      icon: FaTools,
      title: 'Preventive Maintenance',
      description: 'Regular maintenance programs to prevent costly breakdowns.'
    },
    {
      icon: FaCheckCircle,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for commercial operations.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaBuilding className="text-6xl mx-auto mb-6" />
            <h1 className="mb-6">Commercial Appliance Repair Services</h1>
            <p className="text-xl mb-8">
              Professional repair and maintenance for commercial appliances. Minimize downtime 
              and keep your business operations running smoothly with our expert technicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Request Commercial Service
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                Call {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Commercial Services</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive repair and maintenance services for all types of commercial appliances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service) => (
              <div key={service.id} className="card group hover:border-primary-500 border-2 border-transparent transition-colors">
                <div className="bg-primary-100 p-4 rounded-lg mb-4 inline-block group-hover:bg-primary-600 transition-colors">
                  <service.icon className="text-3xl text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">{service.name}</h3>
                <p className="text-secondary-600 mb-4">{service.description}</p>
                <Link to="/contact" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                  Get Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Commercial */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Businesses Choose Us</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We understand that appliance downtime means lost revenue. 
              Our commercial service is designed to get you back in business fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-3xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Trusted by businesses across multiple industries for reliable commercial appliance repair.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-secondary-50 rounded-lg p-4 text-center font-semibold text-secondary-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Preventive Maintenance Plans</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Protect your investment with regular maintenance. Prevent costly breakdowns 
              and extend the life of your commercial appliances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Basic Plan</h3>
              <div className="text-4xl font-bold mb-4">$199<span className="text-xl text-secondary-600">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Quarterly inspections</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>10% parts discount</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-outline w-full text-center">
                Get Started
              </Link>
            </div>

            <div className="bg-primary-600 text-white rounded-xl p-8 shadow-xl transform md:scale-105">
              <div className="bg-white text-primary-600 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Plan</h3>
              <div className="text-4xl font-bold mb-4">$399<span className="text-xl opacity-90">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-white mt-1 mr-3 flex-shrink-0" />
                  <span>Monthly inspections</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-white mt-1 mr-3 flex-shrink-0" />
                  <span>24/7 emergency service</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-white mt-1 mr-3 flex-shrink-0" />
                  <span>20% parts discount</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-white mt-1 mr-3 flex-shrink-0" />
                  <span>Free labor on covered repairs</span>
                </li>
              </ul>
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg block text-center transition-colors">
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Enterprise Plan</h3>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Custom schedule</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Dedicated technician</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>25% parts discount</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Annual equipment review</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-outline w-full text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

