import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import TestimonialCard from '../components/TestimonialCard'
import CallToAction from '../components/CallToAction'
import { testimonials, getAverageRating, getTotalReviews } from '../data/testimonials'

export default function Reviews() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex text-yellow-400 text-3xl">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
          <h1 className="mb-4">Customer Reviews</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Read what our satisfied customers have to say about our appliance repair services.
          </p>
          <div className="mt-6">
            <div className="text-4xl font-bold mb-2">{getAverageRating()} / 5.0</div>
            <div className="text-lg">Based on {getTotalReviews()}+ reviews</div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="bg-secondary-50 py-16">
        <div className="container-custom text-center">
          <FaQuoteLeft className="text-5xl text-primary-600 mx-auto mb-6" />
          <h2 className="mb-4">Share Your Experience</h2>
          <p className="text-lg text-secondary-700 mb-8 max-w-2xl mx-auto">
            We'd love to hear about your experience with our service. Your feedback helps 
            us improve and helps others make informed decisions.
          </p>
          <button className="btn-primary">
            Leave a Review
          </button>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

