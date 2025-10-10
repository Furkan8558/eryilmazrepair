import { Link } from 'react-router-dom'
import { FaHome, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import ServiceCard from '../components/ServiceCard'
import CallToAction from '../components/CallToAction'
import { services } from '../data/services'
import { companyInfo } from '../data/companyInfo'

export default function ResidentialServices() {
  const residentialServices = services.filter(s => 
    ['refrigerator-repair', 'dishwasher-repair', 'oven-repair', 'washer-repair', 
     'dryer-repair', 'microwave-repair', 'ice-maker-repair', 'garbage-disposal-repair'].includes(s.id)
  )

  const benefits = [
    {
      title: "Same-Day Service Available",
      description: "We understand appliance emergencies. Get fast, reliable service when you need it most."
    },
    {
      title: "All Major Brands",
      description: "Our technicians are trained to service all major appliance brands and models."
    },
    {
      title: "Upfront Pricing",
      description: "No surprises. We provide clear pricing before we start any work."
    },
    {
      title: "Licensed & Insured",
      description: "All our technicians are fully licensed, certified, and insured for your peace of mind."
    },
    {
      title: "Warranty Guaranteed",
      description: "90-day labor warranty on all residential repairs. We stand behind our work."
    },
    {
      title: "Experienced Technicians",
      description: "15+ years of experience fixing residential appliances quickly and correctly."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaHome className="text-6xl mx-auto mb-6" />
            <h1 className="mb-6">Residential Appliance Repair Services</h1>
            <p className="text-xl mb-8">
              Expert repair services for all your home appliances. Fast, reliable, and affordable 
              solutions to keep your household running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Schedule Repair Service
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                Call {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Residential Services</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From kitchen appliances to laundry equipment, we repair it all. 
              Professional service for every appliance in your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Residential */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Us for Your Home</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We're committed to providing the best residential appliance repair service. 
              Here's what makes us the trusted choice for homeowners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start mb-4">
                  <FaCheckCircle className="text-green-500 text-2xl mr-3 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-secondary-900">{benefit.title}</h3>
                </div>
                <p className="text-secondary-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How Our Service Works</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Getting your appliances repaired is easy with our simple 3-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Schedule Service</h3>
              <p className="text-secondary-600">
                Contact us by phone or online to schedule a convenient appointment time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Diagnosis</h3>
              <p className="text-secondary-600">
                Our technician arrives, diagnoses the problem, and provides upfront pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Repair</h3>
              <p className="text-secondary-600">
                We complete the repair efficiently and ensure your appliance works perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="bg-secondary-50 py-16">
        <div className="container-custom">
          <h2 className="text-center mb-8">Brands We Service</h2>
          <p className="text-center text-lg text-secondary-700 mb-8">
            We repair all major residential appliance brands
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 'Maytag', 'KitchenAid', 'Bosch', 
              'Electrolux', 'Kenmore', 'Amana', 'Hotpoint'].map((brand) => (
              <div key={brand} className="bg-white px-6 py-3 rounded-lg shadow-md font-semibold text-secondary-700">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

