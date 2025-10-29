import { Link } from 'react-router-dom'
import { FaHome, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ServiceCard from '../components/ServiceCard'
import CallToAction from '../components/CallToAction'
import getServices from '../data/services'
import getCompanyInfo from '../data/companyInfo'

export default function ResidentialServices() {
  const { t } = useTranslation()
  const companyInfo = getCompanyInfo()
  
  // Get services dynamically based on current language
  const services = getServices()
  
  // Show the same 6 featured services as homepage
  const featuredServices = services.filter(s => 
    ['refrigerator-repair', 'dishwasher-repair', 'oven-repair', 
     'washer-repair', 'combi-boiler-repair', 'air-conditioner-repair'].includes(s.id)
  )

  const benefits = [
    {
      title: t('residential.benefit1Title'),
      description: t('residential.benefit1Description')
    },
    {
      title: t('residential.benefit2Title'),
      description: t('residential.benefit2Description')
    },
    {
      title: t('residential.benefit3Title'),
      description: t('residential.benefit3Description')
    },
    {
      title: t('residential.benefit4Title'),
      description: t('residential.benefit4Description')
    },
    {
      title: t('residential.benefit5Title'),
      description: t('residential.benefit5Description')
    },
    {
      title: t('residential.benefit6Title'),
      description: t('residential.benefit6Description')
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaHome className="text-6xl mx-auto mb-6" />
            <h1 className="mb-6">{t('residential.title')}</h1>
            <p className="text-xl mb-8">
              {t('residential.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/franchise-finder" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                {t('residential.scheduleRepair')}
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                {t('residential.call')} {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('residential.ourServices')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('residential.ourServicesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Residential */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('residential.whyChoose')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('residential.whyChooseDescription')}
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
            <h2 className="mb-4">{t('residential.howItWorks')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('residential.howItWorksDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">{t('residential.step1Title')}</h3>
              <p className="text-secondary-600">
                {t('residential.step1Description')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">{t('residential.step2Title')}</h3>
              <p className="text-secondary-600">
                {t('residential.step2Description')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">{t('residential.step3Title')}</h3>
              <p className="text-secondary-600">
                {t('residential.step3Description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="bg-secondary-50 py-16">
        <div className="container-custom">
          <h2 className="text-center mb-8">{t('residential.brandsWeService')}</h2>
          <p className="text-center text-lg text-secondary-700 mb-8">
            {t('residential.brandsWeServiceDescription')}
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

