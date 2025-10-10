import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import * as Icons from 'react-icons/fa'

export default function ServiceCard({ service }) {
  // Dynamically get the icon component
  const IconComponent = Icons[service.icon] || Icons.FaTools

  return (
    <Link to={`/services/${service.id}`} className="card group">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-primary-100 p-4 rounded-lg group-hover:bg-primary-600 transition-colors">
          <IconComponent className="text-3xl text-primary-600 group-hover:text-white transition-colors" />
        </div>
        <span className="text-primary-600 font-semibold">{service.price}</span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-secondary-900">{service.name}</h3>
      <p className="text-secondary-600 mb-4">{service.shortDescription}</p>
      
      <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
        <span>Learn More</span>
        <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
      </div>
    </Link>
  )
}

