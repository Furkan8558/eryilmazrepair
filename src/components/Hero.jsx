import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaPhone, FaCheckCircle } from 'react-icons/fa'
import { companyInfo } from '../data/companyInfo'

export default function Hero() {
  const { t } = useTranslation()
  
  return (
    <div className="relative text-white section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-technician.jpg" 
          alt="Eryilmaz Teknik Professional Technician"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to gradient if image not found
            e.target.parentElement.classList.add('hero-gradient');
            e.target.style.display = 'none';
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            {t('home.heroTitle')}
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            {t('home.heroSubtitle')}
          </p>
          
          {/* Features with Checkmarks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {companyInfo.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-3 flex-shrink-0 text-xl" />
                <span className="text-base">{feature}</span>
              </div>
            ))}
            <div className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-3 flex-shrink-0 text-xl" />
              <span className="text-base">{t('nav.upfrontPricing')}</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-3 flex-shrink-0 text-xl" />
              <span className="text-base">{t('whyUs.yearsExcellence')}</span>
            </div>
          </div>

          {/* Phone Number - Always Visible */}
          <div className="mb-6">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center text-2xl font-bold text-white hover:text-green-400 transition-colors"
            >
              <FaPhone className="mr-3" />
              {companyInfo.phone}
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              {t('common.scheduleService')}
            </Link>
            <Link to="/services" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm">
              {t('common.viewAll')} {t('footer.services')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

