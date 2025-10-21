import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaCheckCircle } from 'react-icons/fa'

export default function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Integrate with backend API or email service (Formspree, EmailJS, etc.)
      // Example: await sendEmail(formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      }, 3000)
    } catch (error) {
      // Handle error (could show error message to user)
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">{t('contact.messageSent')}</h3>
        <p className="text-green-700">
          {t('contact.thankYou')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
            {t('contact.name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder={t('contact.namePlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">
            {t('contact.phone')} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input-field"
            placeholder={t('contact.phonePlaceholder')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
          {t('contact.email')} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
          placeholder={t('contact.emailPlaceholder')}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-secondary-700 mb-2">
          {t('contact.subject')} *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="input-field"
          placeholder={t('contact.subjectPlaceholder')}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
          {t('contact.message')} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="textarea-field"
          placeholder={t('contact.messagePlaceholder')}
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? t('common.sending') || 'Sending...' : t('contact.send')}
      </button>
    </form>
  )
}

