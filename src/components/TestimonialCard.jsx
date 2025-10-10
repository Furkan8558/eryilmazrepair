import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card">
      <div className="flex items-center mb-4">
        <FaQuoteLeft className="text-3xl text-primary-200 mr-3" />
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>
      </div>
      
      <p className="text-secondary-700 mb-4 italic">"{testimonial.text}"</p>
      
      <div className="flex items-center border-t border-secondary-200 pt-4">
        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-secondary-900">{testimonial.name}</div>
          <div className="text-sm text-secondary-600">{testimonial.location}</div>
          <div className="text-xs text-primary-600">{testimonial.service}</div>
        </div>
      </div>
    </div>
  )
}

