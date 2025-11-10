import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import TestimonialCard from '../components/TestimonialCard'
import CallToAction from '../components/CallToAction'
import SEO from '../components/SEO'
import { testimonials, getAverageRating, getTotalReviews } from '../data/testimonials'

export default function Reviews() {
  const { t } = useTranslation()
  
  // AggregateRating Schema for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Eryilmaz Teknik",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": getAverageRating(),
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": getTotalReviews()
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": "5"
      },
      "reviewBody": testimonial.text
    }))
  }
  
  return (
    <div>
      <SEO 
        title={t('reviews.title') || "Müşteri Yorumları | Eryilmaz Teknik"}
        description={`${getAverageRating()}/5 puan ile ${getTotalReviews()}+ memnun müşteri. Bursa'nın en beğenilen beyaz eşya tamir servisi.`}
        keywords={[
          'eryilmaz teknik yorumlar',
          'bursa teknik servis müşteri yorumları',
          'beyaz eşya tamirci değerlendirme',
          'güvenilir tamirci referans',
          'müşteri memnuniyeti bursa',
          'teknik servis puanları',
          'eryılmaz teknik şikayet',
          'iyi tamirci bursa'
        ]}
        structuredData={structuredData}
        ogType="website"
      />
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
          <h1 className="mb-4">{t('reviews.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('reviews.subtitle')}
          </p>
          <div className="mt-6">
            <div className="text-4xl font-bold mb-2">{getAverageRating()} / 5.0</div>
            <div className="text-lg">{t('reviews.basedOn')} {getTotalReviews()}+ {t('reviews.reviews')}</div>
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

      <CallToAction />
    </div>
  )
}

