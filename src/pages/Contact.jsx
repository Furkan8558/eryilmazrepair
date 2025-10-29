import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import getCompanyInfo from '../data/companyInfo'

export default function Contact() {
  const { t } = useTranslation()
  const companyInfo = getCompanyInfo()
  
  // Structured Data for Contact page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Eryilmaz Teknik",
      "telephone": companyInfo.phone,
      "email": companyInfo.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bursa",
        "addressRegion": "Marmara",
        "addressCountry": "TR"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": companyInfo.phone,
        "contactType": "Customer Service",
        "areaServed": "TR",
        "availableLanguage": ["Turkish", "English"]
      }
    }
  };
  
  return (
    <div>
      <SEO 
        title={t('nav.contactUs') || "İletişim | Eryilmaz Teknik Bursa"}
        description={t('contact.getInTouchDescription') || "Eryilmaz Teknik ile iletişime geçin. Bursa beyaz eşya, kombi, klima tamir servisi. 7/24 acil servis için hemen arayın!"}
        keywords={[
          'eryilmaz teknik iletişim',
          'bursa teknik servis iletişim',
          'beyaz eşya tamirci telefon',
          'bursa kombi servisi telefon',
          'acil tamir servisi bursa',
          'beyaz eşya servisi randevu'
        ]}
        structuredData={structuredData}
        ogType="website"
      />
      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="mb-4">{t('nav.contactUs')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('contact.getInTouchDescription')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8">{t('contact.getInTouch')}</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-4 rounded-lg mr-4">
                    <FaPhone className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('common.phone')}</h3>
                    <a href={`tel:${companyInfo.phone}`} className="text-secondary-600 hover:text-primary-600 transition-colors text-lg font-medium">
                      {companyInfo.phone}
                    </a>
                    <p className="text-sm text-secondary-500 mt-1">
                      {t('common.emergency')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-4 rounded-lg mr-4">
                    <FaEnvelope className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('common.email')}</h3>
                    <a href={`mailto:${companyInfo.email}`} className="text-secondary-600 hover:text-primary-600 transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-4 rounded-lg mr-4">
                    <FaClock className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('contact.businessHours')}</h3>
                    <div className="text-secondary-600">
                      <p>{t('common.monFri')}: {companyInfo.hours.weekday}</p>
                      <p>{t('common.saturday')}: {companyInfo.hours.saturday}</p>
                      <p>{t('common.sunday')}: {companyInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Find Your Location CTA */}
              <div className="card bg-primary-50 border-2 border-primary-200">
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-3xl text-primary-600 mr-3" />
                  <h3 className="text-xl font-bold text-secondary-800">
                    {t('contact.findYourLocation')}
                  </h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  {t('contact.multipleLocations')}
                </p>
                <Link to="/franchise-finder" className="btn-primary w-full text-center">
                  {t('contact.findNearestFranchise')}
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card">
                <h2 className="mb-6">{t('contact.sendMessage')}</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold mb-4">{t('contact.needEmergency')}</h3>
          <p className="text-lg mb-6">{t('contact.emergency247')}</p>
          <a href={`tel:${companyInfo.emergencyPhone}`} className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            {t('contact.callEmergency')}: {companyInfo.emergencyPhone}
          </a>
        </div>
      </section>
    </div>
  )
}

