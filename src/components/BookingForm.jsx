import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaCheckCircle } from 'react-icons/fa'
import { sanitizeInput, sanitizeMessage, validateEmail, validatePhone, validateName, validateDate } from '../utils/sanitize'

export default function BookingForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    // Sanitize input based on field type
    if (name === 'message') {
      sanitizedValue = sanitizeMessage(value);
    } else if (name !== 'email' && name !== 'phone' && name !== 'preferredDate' && name !== 'service' && name !== 'preferredTime') {
      sanitizedValue = sanitizeInput(value);
    }

    setFormData({
      ...formData,
      [name]: sanitizedValue
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  }

  const validateForm = () => {
    const newErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = 'Please enter a valid name (2-50 characters, letters only)';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.address.length < 10) {
      newErrors.address = 'Please enter a complete address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!validateDate(formData.preferredDate)) {
      newErrors.preferredDate = 'Please select a valid date (today or future)';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    if (!validateForm()) {
      e.preventDefault();
      return false;
    }
    // Form will submit to FormSubmit if validation passes
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">{t('bookingForm.bookingReceived')}</h3>
        <p className="text-green-700">
          {t('bookingForm.thankYouMessage')}
        </p>
      </div>
    )
  }

  return (
    <form 
      action="https://formsubmit.co/info@eryilmazteknik.com.tr" 
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* FormSubmit Configuration */}
      <input type="hidden" name="_subject" value="New Service Booking Request - Eryilmaz Teknik" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://www.eryilmazteknik.com.tr/franchise-finder?success=true" />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
            {t('bookingForm.fullName')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength="50"
            className={`input-field ${errors.name ? 'border-red-500' : ''}`}
            placeholder={t('bookingForm.fullNamePlaceholder')}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">
            {t('bookingForm.phoneNumber')} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength="20"
            className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
            placeholder={t('bookingForm.phoneNumberPlaceholder')}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
          {t('bookingForm.emailAddress')} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength="254"
          className={`input-field ${errors.email ? 'border-red-500' : ''}`}
          placeholder={t('bookingForm.emailPlaceholder')}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-secondary-700 mb-2">
          {t('bookingForm.serviceAddress')} *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          maxLength="200"
          className={`input-field ${errors.address ? 'border-red-500' : ''}`}
          placeholder={t('bookingForm.serviceAddressPlaceholder')}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-secondary-700 mb-2">
          {t('bookingForm.serviceNeeded')} *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className={`input-field ${errors.service ? 'border-red-500' : ''}`}
        >
          <option value="">{t('bookingForm.selectService')}</option>
          <option value="refrigerator">{t('bookingForm.refrigeratorRepair')}</option>
          <option value="dishwasher">{t('bookingForm.dishwasherRepair')}</option>
          <option value="oven">{t('bookingForm.ovenRepair')}</option>
          <option value="washer">{t('bookingForm.washerRepair')}</option>
          <option value="dryer">{t('bookingForm.dryerRepair')}</option>
          <option value="microwave">{t('bookingForm.microwaveRepair')}</option>
          <option value="ice-maker">{t('bookingForm.iceMakerRepair')}</option>
          <option value="disposal">{t('bookingForm.disposalRepair')}</option>
          <option value="other">{t('bookingForm.other')}</option>
        </select>
        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-semibold text-secondary-700 mb-2">
            {t('bookingForm.preferredDate')} *
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className={`input-field ${errors.preferredDate ? 'border-red-500' : ''}`}
          />
          {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-semibold text-secondary-700 mb-2">
            {t('bookingForm.preferredTime')} *
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            className={`input-field ${errors.preferredTime ? 'border-red-500' : ''}`}
          >
            <option value="">{t('bookingForm.selectTime')}</option>
            <option value="morning">{t('bookingForm.morning')}</option>
            <option value="afternoon">{t('bookingForm.afternoon')}</option>
            <option value="evening">{t('bookingForm.evening')}</option>
          </select>
          {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
          {t('bookingForm.additionalDetails')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          maxLength="5000"
          className="textarea-field"
          placeholder={t('bookingForm.additionalDetailsPlaceholder')}
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="btn-primary w-full"
      >
        {t('bookingForm.scheduleAppointment')}
      </button>

      <p className="text-sm text-secondary-600 text-center">
        {t('bookingForm.requiredFields')}
      </p>
    </form>
  )
}

