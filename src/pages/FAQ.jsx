import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import CallToAction from '../components/CallToAction'
import SEO from '../components/SEO'
import getCompanyInfo from '../data/companyInfo'
import { getFaqCategories } from '../data/faq'

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-secondary-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-secondary-50 transition-colors text-left"
      >
        <span className="font-semibold text-secondary-900 pr-4">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-primary-600 flex-shrink-0" />
        ) : (
          <FaChevronDown className="text-secondary-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 bg-secondary-50">
          <p className="text-secondary-700">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const { t } = useTranslation()
  const companyInfo = getCompanyInfo()
  const faqCategories = getFaqCategories()

  // FAQPage Schema for rich search results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  }

  return (
    <div>
      <SEO 
        title={t('faq.title') || "Sıkça Sorulan Sorular | Eryilmaz Teknik"}
        description={t('faq.subtitle') || "Beyaz eşya tamiri, kombi bakımı ve klima servisi hakkında tüm sorularınızın cevapları burada."}
        keywords={[
          'beyaz eşya tamiri sss',
          'kombi bakımı sorular',
          'klima servisi faq',
          'tamir fiyatları',
          'garanti şartları',
          'acil servis nasıl',
          'randevu alma',
          'teknik servis soruları',
          'bursa tamirci sss'
        ]}
        structuredData={structuredData}
        ogType="website"
      />
      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <FaQuestionCircle className="text-5xl mx-auto mb-4" />
          <h1 className="mb-4">{t('faq.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {faqCategories.map((category) => (
            <div key={category.id} className="mb-12">
              <h2 className="mb-6">{category.name}</h2>
              <div>
                {category.questions.map((item) => (
                  <FAQItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-secondary-50 py-16">
        <div className="container-custom text-center">
          <h2 className="mb-4">{t('faq.stillHaveQuestions')}</h2>
          <p className="text-lg text-secondary-700 mb-8 max-w-2xl mx-auto">
            {t('faq.stillHaveQuestionsDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              {t('faq.contactUs')}
            </a>
            <a href={`tel:${companyInfo.phone}`} className="btn-outline">
              {t('faq.callUs')}
            </a>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

