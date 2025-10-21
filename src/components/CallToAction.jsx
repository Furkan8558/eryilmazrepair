import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaPhone } from 'react-icons/fa'
import { companyInfo } from '../data/companyInfo'

export default function CallToAction() {
  const { t } = useTranslation()
  
  return (
    <section className="hero-gradient text-white section-padding">
      <div className="container-custom text-center">
        <h2 className="mb-6">{t('cta.title')}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {t('cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            {t('common.scheduleService')}
          </Link>
          <a
            href={`tel:${companyInfo.phone}`}
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
          >
            <FaPhone className="inline mr-2" />
            {t('common.callNow')} {companyInfo.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

