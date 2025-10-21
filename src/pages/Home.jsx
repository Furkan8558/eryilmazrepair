import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import WhyChooseUs from '../components/WhyChooseUs'
import CallToAction from '../components/CallToAction'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import { blogPosts } from '../data/blogPosts'
import { faqCategories } from '../data/faq'
import { FaStar, FaArrowRight, FaBook, FaCalendar, FaClock, FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'

export default function Home() {
  const { t } = useTranslation()
  // Show specific 6 services on homepage
  const featuredServices = services.filter(s => 
    ['refrigerator-repair', 'dishwasher-repair', 'oven-repair', 
     'washer-repair', 'combi-boiler-repair', 'air-conditioner-repair'].includes(s.id)
  )
  const featuredTestimonials = testimonials.slice(0, 3)
  const featuredBlogPosts = blogPosts.slice(0, 3)
  const featuredFAQs = faqCategories[0].questions.slice(0, 4) // First 4 general questions
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('home.ourServices')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('home.servicesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn-primary inline-flex items-center">
              {t('home.viewAllServices')}
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400 text-2xl">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="ml-3 text-xl font-semibold text-secondary-700">
                5.0 {t('common.rating')}
              </span>
            </div>
            <h2 className="mb-4">{t('home.testimonials')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('home.testimonialsDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/reviews" className="btn-outline inline-flex items-center">
              {t('home.readMoreReviews')}
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Helpful Resources Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <FaBook className="text-3xl text-primary-600" />
            </div>
            <h2 className="mb-4">{t('home.helpfulResources')}</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('home.resourcesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredBlogPosts.map((post) => (
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
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-primary-600 font-semibold text-sm inline-flex items-center">
                    {t('home.readFullArticle')} <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog" className="btn-primary inline-flex items-center">
              {t('common.viewAll')} {t('nav.resources')}
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('nav.faq')}</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('home.faqDescription')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {featuredFAQs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <h3 className="text-base font-semibold text-secondary-800 pr-8">
                      {faq.question}
                    </h3>
                    <FaChevronDown 
                      className={`text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === faq.id ? 'max-h-96' : 'max-h-0'
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
                {t('common.viewAll')} {t('nav.faq')}
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Residential & Commercial Services */}
      <section className="bg-secondary-100 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('home.servicesForEveryNeed')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('home.servicesForEveryNeedDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link to="/residential-services" className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all group">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                {t('nav.residentialServices')}
              </h3>
              <p className="text-secondary-700 mb-4">
                {t('home.residentialServicesDescription')}
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center">
                {t('common.viewAll')} {t('nav.residentialServices')} <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            <Link to="/commercial-services" className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all group">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                {t('nav.commercialServices')}
              </h3>
              <p className="text-secondary-700 mb-4">
                {t('home.commercialServicesDescription')}
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center">
                {t('common.viewAll')} {t('nav.commercialServices')} <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

