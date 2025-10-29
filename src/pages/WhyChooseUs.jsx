import { FaAward, FaClock, FaDollarSign, FaUserTie, FaShieldAlt, FaStar, FaCheckCircle, FaTools, FaThumbsUp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import CallToAction from '../components/CallToAction'
import getCompanyInfo from '../data/companyInfo'

export default function WhyChooseUs() {
  const { t } = useTranslation()
  const companyInfo = getCompanyInfo()
  const mainReasons = [
    {
      icon: FaUserTie,
      title: t('whyUs.qualifiedExperts'),
      description: t('whyUs.qualifiedExpertsDescription'),
      features: [
        t('whyUs.qualifiedExpertsFeature1'),
        t('whyUs.qualifiedExpertsFeature2'),
        t('whyUs.qualifiedExpertsFeature3'),
        t('whyUs.qualifiedExpertsFeature4')
      ]
    },
    {
      icon: FaClock,
      title: t('whyUs.scheduledTimes'),
      description: t('whyUs.scheduledTimesDescription'),
      features: [
        t('whyUs.scheduledTimesFeature1'),
        t('whyUs.scheduledTimesFeature2'),
        t('whyUs.scheduledTimesFeature3'),
        t('whyUs.scheduledTimesFeature4')
      ]
    },
    {
      icon: FaDollarSign,
      title: t('whyUs.upfrontPricing'),
      description: t('whyUs.upfrontPricingDescription'),
      features: [
        t('whyUs.upfrontPricingFeature1'),
        t('whyUs.upfrontPricingFeature2'),
        t('whyUs.upfrontPricingFeature3'),
        t('whyUs.upfrontPricingFeature4')
      ]
    }
  ]

  const additionalBenefits = [
    {
      icon: FaShieldAlt,
      title: t('whyUs.warrantyGuaranteed'),
      description: t('whyUs.warrantyGuaranteedDescription')
    },
    {
      icon: FaStar,
      title: t('whyUs.fiveStarService'),
      description: t('whyUs.fiveStarServiceDescription')
    },
    {
      icon: FaTools,
      title: t('whyUs.allMajorBrands'),
      description: t('whyUs.allMajorBrandsDescription')
    },
    {
      icon: FaAward,
      title: t('whyUs.licensedInsured'),
      description: t('whyUs.licensedInsuredDescription')
    },
    {
      icon: FaCheckCircle,
      title: t('whyUs.qualityParts'),
      description: t('whyUs.qualityPartsDescription')
    },
    {
      icon: FaThumbsUp,
      title: t('whyUs.satisfaction'),
      description: t('whyUs.satisfactionDescription')
    }
  ]

  const processSteps = [
    {
      number: '1',
      title: t('whyUs.step1Title'),
      description: t('whyUs.step1Description')
    },
    {
      number: '2',
      title: t('whyUs.step2Title'),
      description: t('whyUs.step2Description')
    },
    {
      number: '3',
      title: t('whyUs.step3Title'),
      description: t('whyUs.step3Description')
    },
    {
      number: '4',
      title: t('whyUs.step4Title'),
      description: t('whyUs.step4Description')
    }
  ]

  const stats = [
    { number: '15+', label: t('whyUs.yearsExcellence') },
    { number: '5,000+', label: t('whyUs.happyCustomers') },
    { number: '99%', label: t('whyUs.successRate') },
    { number: '24/7', label: t('whyUs.emergencyService') }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="mb-6">{t('whyUs.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {t('whyUs.subtitle')}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section id="professionals" className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('whyUs.theDifference')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('whyUs.differenceDescription')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainReasons.map((reason, index) => {
              // Generate ID from title
              const sectionId = reason.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
              <div key={index} id={sectionId} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <reason.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary-900">{reason.title}</h3>
                <p className="text-secondary-700 mb-6">{reason.description}</p>
                <ul className="space-y-3">
                  {reason.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('whyUs.howItWorks')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('whyUs.howItWorksDescription')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-6 mb-8 ${index !== processSteps.length - 1 ? 'pb-8 border-b border-secondary-200' : ''}`}>
                <div className="flex-shrink-0">
                  <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-secondary-900">{step.title}</h3>
                  <p className="text-lg text-secondary-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('whyUs.additionalBenefits')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('whyUs.additionalBenefitsDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <benefit.icon className="text-2xl text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-secondary-900">{benefit.title}</h3>
                  <p className="text-secondary-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

