import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import WhyChooseUs from '../components/WhyChooseUs'
import CallToAction from '../components/CallToAction'
import SEO from '../components/SEO'
import getServices from '../data/services'
import { testimonials } from '../data/testimonials'
import { blogPosts } from '../data/blogPosts'
import { faqCategories } from '../data/faq'
import { FaStar, FaArrowRight, FaBook, FaCalendar, FaClock, FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'

export default function Home() {
  const { t } = useTranslation()
  
  // Get services dynamically based on current language
  const services = getServices()
  
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

  // Structured Data for Homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://eryilmazteknik.com.tr/#organization",
        "name": "Eryilmaz Teknik",
        "url": "https://eryilmazteknik.com.tr",
        "logo": "https://eryilmazteknik.com.tr/logo.png",
        "image": "https://eryilmazteknik.com.tr/og-image.jpg",
        "description": "Bursa'nın en güvenilir beyaz eşya tamir servisi. Kombi, klima, buzdolabı, çamaşır makinesi tamiri ve bakım hizmetleri.",
        "priceRange": "$$",
        "telephone": "+90-XXX-XXX-XXXX",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bursa",
          "addressRegion": "Marmara",
          "postalCode": "16000",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.1826",
          "longitude": "29.0665"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://eryilmazteknik.com.tr/#website",
        "url": "https://eryilmazteknik.com.tr",
        "name": "Eryilmaz Teknik",
        "inLanguage": "tr-TR",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://eryilmazteknik.com.tr/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://eryilmazteknik.com.tr/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": featuredFAQs.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Service",
        "serviceType": "Beyaz Eşya Tamir Servisi",
        "provider": {
          "@id": "https://eryilmazteknik.com.tr/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Bursa"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Teknik Servis Hizmetleri",
          "itemListElement": featuredServices.map((service, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.description
            }
          }))
        }
      }
    ]
  };

  return (
    <div>
      <SEO 
        title={t('home.metaTitle') || "Bursa Beyaz Eşya Tamir Servisi | Kombi Klima Teknik Servis"}
        description={t('home.metaDescription') || "Bursa'nın en güvenilir beyaz eşya tamir servisi. Kombi, klima, buzdolabı, çamaşır makinesi tamiri. 7/24 acil teknik servis. Hemen arayın!"}
        keywords={[
          'bursa beyaz eşya servisi ana sayfa',
          'bursa teknik servis anasayfa',
          'eryilmaz teknik',
          'bursa en iyi tamirci',
          'bursa 7/24 teknik servis',
          'acil beyaz eşya tamiri bursa'
        ]}
        structuredData={structuredData}
      />
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
                {t('home.viewAllResidentialServices')} <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
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
                {t('home.viewAllCommercialServices')} <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

