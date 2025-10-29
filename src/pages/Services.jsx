import { useTranslation } from 'react-i18next'
import ServiceCard from '../components/ServiceCard'
import CallToAction from '../components/CallToAction'
import SEO from '../components/SEO'
import getServices from '../data/services'
import { FaTools } from 'react-icons/fa'

export default function Services() {
  const { t } = useTranslation()
  
  // Get services dynamically based on current language
  const services = getServices()
  
  // Structured Data for Services page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Eryilmaz Teknik",
          "@id": "https://eryilmazteknik.com.tr/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Bursa"
        }
      }
    }))
  };
  
  // Show ALL services on the main services page
  return (
    <div>
      <SEO 
        title={t('services.title') || "Beyaz Eşya Tamir Servisleri | Kombi Klima Tamiri"}
        description={t('services.subtitle') || "Bursa'da profesyonel beyaz eşya tamir servisi. Buzdolabı, çamaşır makinesi, bulaşık makinesi, kombi, klima tamiri. Tüm markalar için uzman servis."}
        keywords={[
          'beyaz eşya servisleri bursa',
          'tamir hizmetleri bursa',
          'teknik servis hizmetleri',
          'cihaz tamir servisi',
          'ev aletleri tamiri bursa'
        ]}
        structuredData={structuredData}
      />
      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <FaTools className="text-5xl mx-auto mb-4" />
          <h1 className="mb-4">{t('services.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-secondary-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">{t('services.allMajorBrands')}</h2>
            <p className="text-lg text-secondary-700 text-center mb-8">
              {t('services.allMajorBrandsDescription')}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 'Maytag', 'KitchenAid', 'Bosch'].map((brand) => (
                <div key={brand} className="bg-white px-6 py-3 rounded-lg shadow-md font-semibold text-secondary-700">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

