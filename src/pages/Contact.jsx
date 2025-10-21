import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import { companyInfo } from '../data/companyInfo'

export default function Contact() {
  const { t } = useTranslation()
  
  return (
    <div>
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
                    <a href={`tel:${companyInfo.phone}`} className="text-secondary-600 hover:text-primary-600 transition-colors">
                      {companyInfo.phone}
                    </a>
                    <p className="text-sm text-secondary-500 mt-1">
                      {t('common.emergency')}: {companyInfo.emergencyPhone}
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
                    <FaMapMarkerAlt className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('common.address')}</h3>
                    <p className="text-secondary-600">
                      {companyInfo.address.street}<br />
                      {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                    </p>
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

              {/* Google Map */}
              <div className="rounded-lg h-64 overflow-hidden shadow-md">
                <iframe
                  title="Eryilmaz Appliance Repair Location"
                  src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'}&q=${encodeURIComponent(
                    `${companyInfo.address.street}, ${companyInfo.address.city}, ${companyInfo.address.state}`
                  )}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card">
                <h2 className="mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold mb-4">Need Emergency Service?</h3>
          <p className="text-lg mb-6">We offer 24/7 emergency appliance repair services</p>
          <a href={`tel:${companyInfo.emergencyPhone}`} className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Call Emergency Line: {companyInfo.emergencyPhone}
          </a>
        </div>
      </section>
    </div>
  )
}

