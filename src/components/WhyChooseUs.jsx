import { FaCertificate, FaClock, FaTools, FaShieldAlt, FaDollarSign, FaThumbsUp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function WhyChooseUs() {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: FaCertificate,
      title: t('whyChooseUs.feature1Title'),
      description: t('whyChooseUs.feature1Desc')
    },
    {
      icon: FaClock,
      title: t('whyChooseUs.feature2Title'),
      description: t('whyChooseUs.feature2Desc')
    },
    {
      icon: FaTools,
      title: t('whyChooseUs.feature3Title'),
      description: t('whyChooseUs.feature3Desc')
    },
    {
      icon: FaShieldAlt,
      title: t('whyChooseUs.feature4Title'),
      description: t('whyChooseUs.feature4Desc')
    },
    {
      icon: FaDollarSign,
      title: t('whyChooseUs.feature5Title'),
      description: t('whyChooseUs.feature5Desc')
    },
    {
      icon: FaThumbsUp,
      title: t('whyChooseUs.feature6Title'),
      description: t('whyChooseUs.feature6Desc')
    }
  ]

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('whyChooseUs.title')}</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            {t('whyChooseUs.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-900">{feature.title}</h3>
              <p className="text-secondary-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

