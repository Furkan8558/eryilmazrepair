import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { FaCheckCircle, FaArrowLeft, FaPhone, FaWrench, FaStar, FaBook, FaCalendar, FaClock, FaChevronDown, FaArrowRight } from 'react-icons/fa'
import * as Icons from 'react-icons/fa'
import BookingForm from '../components/BookingForm'
import CallToAction from '../components/CallToAction'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import { getServiceById, services } from '../data/services'
import { testimonials } from '../data/testimonials'
import { blogPosts } from '../data/blogPosts'
import { companyInfo } from '../data/companyInfo'

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const service = getServiceById(serviceId)
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  if (!service) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h2 className="mb-4">Service Not Found</h2>
          <p className="text-xl text-secondary-600 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = Icons[service.icon] || Icons.FaTools
  const otherServices = services.filter(s => s.id !== service.id).slice(0, 6)
  const relatedTestimonials = testimonials.slice(0, 3)
  const relatedBlogPosts = blogPosts.slice(0, 3)

  return (
    <div>
      {/* Service Header */}
      <section className="bg-gradient-primary text-white py-12">
        <div className="container-custom">
          <Link to="/services" className="inline-flex items-center text-white mb-6 hover:text-gray-200 transition-colors text-sm">
            <FaArrowLeft className="mr-2" />
            Back to Services
          </Link>
          <div className="flex items-center mb-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg mr-4">
              <IconComponent className="text-4xl" />
            </div>
            <div>
              <h1 className="mb-2">{service.name} Service</h1>
              <p className="text-lg">{service.shortDescription}</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-bold bg-white text-primary-600 px-6 py-2 rounded-lg">
              {service.price}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Service Details */}
            <div className="lg:col-span-2">
              
              {/* About This Service */}
              <div className="mb-12">
                <h2 className="mb-6">About {service.name} Service</h2>
                <p className="text-base text-secondary-700 mb-6">{service.description}</p>
                
                <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                  <p className="font-semibold text-primary-800 text-sm">
                    Need immediate assistance? Call us now for same-day service!
                  </p>
                  <a href={`tel:${companyInfo.phone}`} className="text-xl font-bold text-primary-600 mt-2 inline-flex items-center">
                    <FaPhone className="mr-3" />
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              {/* Common Problems We Fix */}
              <div className="mb-12">
                <h2 className="mb-6">Common {service.name.replace(' Repair', '').replace(' & Stove', '')} Problems We Fix</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.commonIssues.map((issue, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repair Services We Provide */}
              {service.repairServices && (
                <div className="mb-12">
                  <h2 className="mb-6">{service.name} Services We Provide</h2>
                  <div className="bg-white border border-secondary-200 rounded-xl p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.repairServices.map((repairService, index) => (
                        <div key={index} className="flex items-start">
                          <FaWrench className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-secondary-700 text-sm">{repairService}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Brands We Service */}
              <div className="mb-12">
                <h3 className="mb-6">Brands We Service</h3>
                <div className="flex flex-wrap gap-3">
                  {service.brands.map((brand, index) => (
                    <span key={index} className="bg-secondary-100 px-4 py-2 rounded-lg font-semibold text-secondary-700 text-sm">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="card">
                  <h3 className="mb-6 text-lg">Schedule Service</h3>
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Repair All Major Appliances */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Appliance Repair Services</h2>
            <p className="text-base text-secondary-600 max-w-3xl mx-auto">
              Expert repair services for all major appliance brands. Fast, reliable, and affordable solutions for your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((otherService) => (
              <ServiceCard key={otherService.id} service={otherService} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-flex items-center">
              View All Services
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400 text-2xl">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="ml-3 text-lg font-semibold text-secondary-700">
                5.0 Rating
              </span>
            </div>
            <h2 className="mb-4">Customer Reviews</h2>
            <p className="text-base text-secondary-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our {service.name.toLowerCase()} services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/reviews" className="btn-outline inline-flex items-center">
              Read More Reviews
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <FaBook className="text-2xl text-primary-600" />
            </div>
            <h2 className="mb-4">Helpful Resources</h2>
            <p className="text-base text-secondary-600 max-w-3xl mx-auto">
              Expert tips and advice to help you maintain your appliances and troubleshoot common issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <FaBook className="text-6xl text-white opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-secondary-500 mb-3 gap-4">
                    <span className="inline-flex items-center">
                      <FaCalendar className="mr-1.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="inline-flex items-center">
                      <FaClock className="mr-1.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-primary-600 font-semibold text-sm inline-flex items-center">
                    Read More <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/blog" className="btn-primary inline-flex items-center">
              View All Resources
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">FAQs About {service.name} and Service</h2>
              <p className="text-base text-secondary-600 max-w-3xl mx-auto">
                Find answers to common questions about our {service.name.toLowerCase()} services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <h3 className="text-sm font-semibold text-secondary-800 pr-8">
                        {faq.question}
                      </h3>
                      <FaChevronDown 
                        className={`text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                          openFAQ === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        openFAQ === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-5 text-sm text-secondary-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link to="/faq" className="btn-outline inline-flex items-center">
                  View All FAQs
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <CallToAction />
    </div>
  )
}
