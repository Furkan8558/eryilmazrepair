import { Link } from 'react-router-dom'
import { FaBuilding, FaCheckCircle, FaClock, FaTools, FaShieldAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import CallToAction from '../components/CallToAction'
import { companyInfo } from '../data/companyInfo'

export default function CommercialServices() {
  const { t } = useTranslation()
  
  const commercialServices = [
    {
      id: 'commercial-refrigeration',
      name: t('commercial.service1Name'),
      description: t('commercial.service1Description'),
      icon: FaTools
    },
    {
      id: 'commercial-ice-machines',
      name: t('commercial.service2Name'),
      description: t('commercial.service2Description'),
      icon: FaTools
    },
    {
      id: 'commercial-dishwashers',
      name: t('commercial.service3Name'),
      description: t('commercial.service3Description'),
      icon: FaTools
    },
    {
      id: 'commercial-ovens',
      name: t('commercial.service4Name'),
      description: t('commercial.service4Description'),
      icon: FaTools
    },
    {
      id: 'commercial-washers-dryers',
      name: t('commercial.service5Name'),
      description: t('commercial.service5Description'),
      icon: FaTools
    },
    {
      id: 'commercial-freezers',
      name: t('commercial.service6Name'),
      description: t('commercial.service6Description'),
      icon: FaTools
    }
  ]

  const industries = [
    t('commercial.industry1'),
    t('commercial.industry2'),
    t('commercial.industry3'),
    t('commercial.industry4'),
    t('commercial.industry5'),
    t('commercial.industry6'),
    t('commercial.industry7'),
    t('commercial.industry8'),
    t('commercial.industry9'),
    t('commercial.industry10'),
  ]

  const benefits = [
    {
      icon: FaClock,
      title: t('commercial.benefit1Title'),
      description: t('commercial.benefit1Description')
    },
    {
      icon: FaShieldAlt,
      title: t('commercial.benefit2Title'),
      description: t('commercial.benefit2Description')
    },
    {
      icon: FaTools,
      title: t('commercial.benefit3Title'),
      description: t('commercial.benefit3Description')
    },
    {
      icon: FaCheckCircle,
      title: t('commercial.benefit4Title'),
      description: t('commercial.benefit4Description')
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaBuilding className="text-6xl mx-auto mb-6" />
            <h1 className="mb-6">{t('commercial.title')}</h1>
            <p className="text-xl mb-8">
              {t('commercial.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                {t('commercial.requestService')}
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                {t('residential.call')} {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('commercial.ourServices')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('commercial.ourServicesDescription')}
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
                  {t('commercial.getQuote')} →
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
            <h2 className="mb-4">{t('commercial.whyBusinesses')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('commercial.whyBusinessesDescription')}
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
            <h2 className="mb-4">{t('commercial.industriesWeServe')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('commercial.industriesWeServeDescription')}
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
            <h2 className="mb-4">{t('commercial.maintenancePlans')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('commercial.maintenancePlansDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">{t('commercial.basicPlan')}</h3>
              <div className="text-4xl font-bold mb-4">$199<span className="text-xl text-secondary-600">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{t('commercial.basicFeature1')}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{t('commercial.basicFeature2')}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{t('commercial.basicFeature3')}</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-outline w-full text-center">
                {t('commercial.getStarted')}
              </Link>
            </div>

            <div className="bg-primary-600 text-white rounded-xl p-8 shadow-xl transform md:scale-105">
              <div className="bg-white text-primary-600 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {t('commercial.mostPopular')}
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('commercial.professionalPlan')}</h3>
              <div className="text-4xl font-bold mb-4">$399<span className="text-xl opacity-90">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-white mt-1 mr-3 flex-shrink-0" />
                  <span>{t('commercial.proFeature1')}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-white mt-1 mr-3 flex-shrink-0" />
                  <span>{t('commercial.proFeature2')}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-white mt-1 mr-3 flex-shrink-0" />
                  <span>{t('commercial.proFeature3')}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-white mt-1 mr-3 flex-shrink-0" />
                  <span>{t('commercial.proFeature4')}</span>
                </li>
              </ul>
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg block text-center transition-colors">
                {t('commercial.getStarted')}
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">{t('commercial.enterprisePlan')}</h3>
              <div className="text-4xl font-bold mb-4">{t('commercial.custom')}</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{t('commercial.enterpriseFeature1')}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{t('commercial.enterpriseFeature2')}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{t('commercial.enterpriseFeature3')}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{t('commercial.enterpriseFeature4')}</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-outline w-full text-center">
                {t('commercial.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

