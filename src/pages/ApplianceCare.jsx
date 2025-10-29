import { Link } from 'react-router-dom'
import { FaCheckCircle, FaWrench, FaBook, FaLightbulb, FaPhone } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import CallToAction from '../components/CallToAction'
import { companyInfo } from '../data/companyInfo'

export default function ApplianceCare() {
  const { t } = useTranslation()
  
  const careCategories = [
    {
      id: 'refrigerator',
      name: t('applianceCare.refrigerator'),
      icon: '🧊',
      tips: [
        t('applianceCare.refrigeratorTip1'),
        t('applianceCare.refrigeratorTip2'),
        t('applianceCare.refrigeratorTip3'),
        t('applianceCare.refrigeratorTip4')
      ],
      link: '/services/refrigerator-repair'
    },
    {
      id: 'dishwasher',
      name: t('applianceCare.dishwasher'),
      icon: '🍽️',
      tips: [
        t('applianceCare.dishwasherTip1'),
        t('applianceCare.dishwasherTip2'),
        t('applianceCare.dishwasherTip3'),
        t('applianceCare.dishwasherTip4')
      ],
      link: '/services/dishwasher-repair'
    },
    {
      id: 'oven',
      name: t('applianceCare.oven'),
      icon: '🔥',
      tips: [
        t('applianceCare.ovenTip1'),
        t('applianceCare.ovenTip2'),
        t('applianceCare.ovenTip3'),
        t('applianceCare.ovenTip4')
      ],
      link: '/services/oven-repair'
    },
    {
      id: 'garbage-disposal',
      name: t('applianceCare.garbageDisposal'),
      icon: '🗑️',
      tips: [
        t('applianceCare.garbageDisposalTip1'),
        t('applianceCare.garbageDisposalTip2'),
        t('applianceCare.garbageDisposalTip3'),
        t('applianceCare.garbageDisposalTip4')
      ],
      link: '/services/garbage-disposal-repair'
    },
    {
      id: 'microwave',
      name: t('applianceCare.microwave'),
      icon: '📻',
      tips: [
        t('applianceCare.microwaveTip1'),
        t('applianceCare.microwaveTip2'),
        t('applianceCare.microwaveTip3'),
        t('applianceCare.microwaveTip4')
      ],
      link: '/services/microwave-repair'
    },
    {
      id: 'washing-machine',
      name: t('applianceCare.washingMachine'),
      icon: '👕',
      tips: [
        t('applianceCare.washingMachineTip1'),
        t('applianceCare.washingMachineTip2'),
        t('applianceCare.washingMachineTip3'),
        t('applianceCare.washingMachineTip4')
      ],
      link: '/services/washer-repair'
    },
    {
      id: 'dryer',
      name: t('applianceCare.dryer'),
      icon: '🌀',
      tips: [
        t('applianceCare.dryerTip1'),
        t('applianceCare.dryerTip2'),
        t('applianceCare.dryerTip3'),
        t('applianceCare.dryerTip4')
      ],
      link: '/services/dryer-repair'
    },
    {
      id: 'combi-boiler',
      name: t('applianceCare.combiBoiler'),
      icon: '🔥',
      tips: [
        t('applianceCare.combiBoilerTip1'),
        t('applianceCare.combiBoilerTip2'),
        t('applianceCare.combiBoilerTip3'),
        t('applianceCare.combiBoilerTip4')
      ],
      link: '/services/combi-boiler-repair'
    },
    {
      id: 'air-conditioner',
      name: t('applianceCare.airConditioner'),
      icon: '❄️',
      tips: [
        t('applianceCare.airConditionerTip1'),
        t('applianceCare.airConditionerTip2'),
        t('applianceCare.airConditionerTip3'),
        t('applianceCare.airConditionerTip4'),
        t('applianceCare.airConditionerTip5')
      ],
      link: '/services/air-conditioner-repair'
    }
  ]

  const specialtyTools = [
    t('applianceCare.tool1'),
    t('applianceCare.tool2'),
    t('applianceCare.tool3'),
    t('applianceCare.tool4'),
    t('applianceCare.tool5'),
    t('applianceCare.tool6'),
    t('applianceCare.tool7'),
    t('applianceCare.tool8'),
    t('applianceCare.tool9'),
    t('applianceCare.tool10'),
    t('applianceCare.tool11'),
    t('applianceCare.tool12')
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaWrench className="text-6xl mx-auto mb-6" />
            <h1 className="mb-6">{t('applianceCare.title')}</h1>
            <p className="text-xl mb-8">
              {t('applianceCare.heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/franchise-finder" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                {t('applianceCare.scheduleMaintenance')}
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                <FaPhone className="inline mr-2" />
                {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-6">{t('applianceCare.professionalServices')}</h2>
            <p className="text-lg text-secondary-700">
              {t('applianceCare.professionalServicesDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Home Appliance Care Hacks */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <FaLightbulb className="text-5xl text-primary-600 mx-auto mb-4" />
            <h2 className="mb-4">{t('applianceCare.careHacks')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('applianceCare.careHacksDescription')}
            </p>
          </div>

          <div className="space-y-8">
            {careCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{category.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900">{category.name}</h3>
                    {category.link && (
                      <Link 
                        to={category.link} 
                        className="text-primary-600 hover:text-primary-700 text-sm font-semibold inline-flex items-center mt-1"
                      >
                        {t('applianceCare.viewRepairService')} →
                      </Link>
                    )}
                  </div>
                </div>
                <ul className="space-y-3">
                  {category.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-secondary-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Perform Appliance Maintenance */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">{t('applianceCare.whyMaintenance')}</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-secondary-50 rounded-xl p-6">
                <FaCheckCircle className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('applianceCare.preventBreakdowns')}</h3>
                <p className="text-secondary-700">
                  {t('applianceCare.preventBreakdownsDescription')}
                </p>
              </div>
              <div className="bg-secondary-50 rounded-xl p-6">
                <FaCheckCircle className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('applianceCare.lowerBills')}</h3>
                <p className="text-secondary-700">
                  {t('applianceCare.lowerBillsDescription')}
                </p>
              </div>
              <div className="bg-secondary-50 rounded-xl p-6">
                <FaCheckCircle className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('applianceCare.extendLifespan')}</h3>
                <p className="text-secondary-700">
                  {t('applianceCare.extendLifespanDescription')}
                </p>
              </div>
              <div className="bg-secondary-50 rounded-xl p-6">
                <FaCheckCircle className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('applianceCare.improveSafety')}</h3>
                <p className="text-secondary-700">
                  {t('applianceCare.improveSafetyDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Tools */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <FaBook className="text-5xl text-primary-600 mx-auto mb-4" />
              <h2 className="mb-4">{t('applianceCare.specialtyTools')}</h2>
              <p className="text-lg text-secondary-700">
                {t('applianceCare.specialtyToolsDescription')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {specialtyTools.map((tool, index) => (
                  <div key={index} className="flex items-center">
                    <FaWrench className="text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-secondary-700 mb-6">
                <strong>{t('applianceCare.expertsHelp')}</strong> {t('applianceCare.expertsHelpDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/franchise-finder" className="btn-primary">
                  {t('applianceCare.scheduleServiceOnline')}
                </Link>
                <a href={`tel:${companyInfo.phone}`} className="btn-outline">
                  <FaPhone className="inline mr-2" />
                  {t('applianceCare.call')} {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding bg-secondary-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">{t('applianceCare.additionalResources')}</h2>
            <p className="text-lg text-secondary-700 mb-8">
              {t('applianceCare.additionalResourcesDescription')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/faq" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {t('applianceCare.faqTroubleshooting')}
                </h3>
                <p className="text-secondary-600">
                  {t('applianceCare.faqTroubleshootingDescription')}
                </p>
              </Link>
              <Link to="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {t('applianceCare.blogTips')}
                </h3>
                <p className="text-secondary-600">
                  {t('applianceCare.blogTipsDescription')}
                </p>
              </Link>
              <Link to="/services" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {t('applianceCare.repairServices')}
                </h3>
                <p className="text-secondary-600">
                  {t('applianceCare.repairServicesDescription')}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}
