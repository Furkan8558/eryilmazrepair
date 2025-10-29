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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
    <form 
      action="https://formsubmit.co/furkaneryilmaz201@gmail.com" 
      method="POST"
      className="space-y-6"
    >
      {/* FormSubmit Configuration */}
      <input type="hidden" name="_subject" value="New Contact Form Submission - Eryilmaz Teknik" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://www.eryilmazteknik.com.tr/contact?success=true" />
      
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
        className="btn-primary w-full"
      >
        {t('contact.send')}
      </button>
    </form>
  )
}

