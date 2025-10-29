import { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function BookingForm() {
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
        <h3 className="text-2xl font-bold text-green-800 mb-2">Booking Received!</h3>
        <p className="text-green-700">
          Thank you for your booking request. We'll contact you shortly to confirm your appointment.
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
      <input type="hidden" name="_subject" value="New Service Booking Request - Eryilmaz Teknik" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://www.eryilmazteknik.com.tr/franchise-finder?success=true" />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-secondary-700 mb-2">
          Service Address *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="123 Main St, City, State, ZIP"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-secondary-700 mb-2">
          Service Needed *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="">Select a service...</option>
          <option value="refrigerator">Refrigerator Repair</option>
          <option value="dishwasher">Dishwasher Repair</option>
          <option value="oven">Oven/Stove Repair</option>
          <option value="washer">Washing Machine Repair</option>
          <option value="dryer">Dryer Repair</option>
          <option value="microwave">Microwave Repair</option>
          <option value="ice-maker">Ice Maker Repair</option>
          <option value="disposal">Garbage Disposal Repair</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-semibold text-secondary-700 mb-2">
            Preferred Date *
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-semibold text-secondary-700 mb-2">
            Preferred Time *
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select a time...</option>
            <option value="morning">Morning (8 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 6 PM)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="textarea-field"
          placeholder="Please describe the issue with your appliance..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="btn-primary w-full"
      >
        Schedule Service Appointment
      </button>

      <p className="text-sm text-secondary-600 text-center">
        * Required fields. We'll contact you to confirm your appointment.
      </p>
    </form>
  )
}

