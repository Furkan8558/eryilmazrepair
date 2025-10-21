import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaArrowRight } from 'react-icons/fa'
import * as Icons from 'react-icons/fa'

export default function ServiceCard({ service }) {
  const { t, i18n } = useTranslation()
  // Dynamically get the icon component
  const IconComponent = Icons[service.icon] || Icons.FaTools
  
  // Get translated service name and description
  const translationKey = `services.${service.id.replace(/-/g, '')}`
  const serviceName = t(`${translationKey}.name`, service.name)
  const serviceDescription = t(`${translationKey}.shortDescription`, service.shortDescription)

  return (
    <Link to={`/services/${service.id}`} className="card group overflow-hidden p-0">
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={serviceName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            // Fallback to gradient background if image fails to load
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary-500', 'to-primary-700');
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/90 p-2 rounded-lg">
            <IconComponent className="text-2xl text-primary-600" />
          </div>
        </div>
      </div>

      {/* Service Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3 text-secondary-900">{serviceName}</h3>
        <p className="text-secondary-600 mb-4">{serviceDescription}</p>
        
        <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
          <span>{t('common.learnMore')}</span>
          <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </Link>
  )
}

