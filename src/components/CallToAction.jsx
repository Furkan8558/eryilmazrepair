import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaPhone } from 'react-icons/fa'
import getCompanyInfo from '../data/companyInfo'

export default function CallToAction() {
  const { t } = useTranslation()
  const companyInfo = getCompanyInfo()
  
  return (
    <section className="hero-gradient text-white section-padding">
      <div className="container-custom text-center">
        <h2 className="mb-6">{t('cta.title')}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {t('cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/service-finder" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            {t('common.scheduleService')}
          </Link>
          <a
            href={`tel:${companyInfo.phone}`}
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-base inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
          >
            <span className="inline-flex items-center gap-2">
              <FaPhone />
              {t('common.callNow')}
            </span>
            <span className="font-bold">{companyInfo.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

