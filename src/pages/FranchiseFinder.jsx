import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaSearch, FaSpinner } from 'react-icons/fa'
import { findFranchiseByZip, findNearestFranchise, getActiveFranchises } from '../data/franchises'
import BookingForm from '../components/BookingForm'

export default function FranchiseFinder() {
  const { t } = useTranslation()
  const [zipCode, setZipCode] = useState('')
  const [selectedFranchise, setSelectedFranchise] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [detectingLocation, setDetectingLocation] = useState(false)
  
  const activeFranchises = getActiveFranchises()

  const handleZipSearch = (e) => {
    e.preventDefault()
    setError('')
    setSelectedFranchise(null)
    
    if (!zipCode.trim()) {
      setError(t('franchiseFinder.enterZipCode'))
      return
    }
    
    setLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const franchise = findFranchiseByZip(zipCode)
      
      if (franchise) {
        setSelectedFranchise(franchise)
      } else {
        setError(t('franchiseFinder.noFranchiseFound'))
      }
      
      setLoading(false)
    }, 500)
  }

  const detectUserLocation = () => {
    if (!navigator.geolocation) {
      setError(t('franchiseFinder.geolocationNotSupported'))
      return
    }
    
    setDetectingLocation(true)
    setError('')
    setSelectedFranchise(null)
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const franchise = findNearestFranchise(latitude, longitude)
        
        if (franchise) {
          setSelectedFranchise(franchise)
        } else {
          setError(t('franchiseFinder.noFranchiseNearby'))
        }
        
        setDetectingLocation(false)
      },
      (error) => {
        console.error('Geolocation error:', error)
        setError(t('franchiseFinder.locationDetectionFailed'))
        setDetectingLocation(false)
      }
    )
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="mb-4">{t('franchiseFinder.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('franchiseFinder.subtitle')}
          </p>
        </div>
      </section>

      {/* Franchise Finder */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Search Box */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {t('franchiseFinder.findYourFranchise')}
            </h2>
            
            <form onSubmit={handleZipSearch} className="mb-6">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder={t('franchiseFinder.enterZipPlaceholder')}
                  className="flex-1 px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary px-8 flex items-center justify-center min-w-[120px]"
                >
                  {loading ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <>
                      <FaSearch className="mr-2" />
                      {t('franchiseFinder.search')}
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="text-center">
              <div className="text-secondary-500 mb-3">{t('franchiseFinder.or')}</div>
              <button
                onClick={detectUserLocation}
                disabled={detectingLocation}
                className="btn-outline inline-flex items-center"
              >
                {detectingLocation ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    {t('franchiseFinder.detecting')}
                  </>
                ) : (
                  <>
                    <FaMapMarkerAlt className="mr-2" />
                    {t('franchiseFinder.useMyLocation')}
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                {error}
              </div>
            )}
          </div>

          {/* Selected Franchise */}
          {selectedFranchise && (
            <div className="card bg-primary-50 border-2 border-primary-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary-700 mb-2">
                    {t('franchiseFinder.foundFranchise')}
                  </h3>
                  <h4 className="text-xl font-semibold text-secondary-800">
                    {selectedFranchise.name}
                  </h4>
                </div>
                <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {t('franchiseFinder.serving')}
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Contact Info */}
                <div className="lg:col-span-1 space-y-4">
                  <div className="flex items-start">
                    <FaPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-secondary-800 mb-1">
                        {t('common.phone')}
                      </div>
                      <a 
                        href={`tel:${selectedFranchise.phone}`}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        {selectedFranchise.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaEnvelope className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-secondary-800 mb-1">
                        {t('common.email')}
                      </div>
                      <a 
                        href={`mailto:${selectedFranchise.email}`}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {selectedFranchise.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-secondary-800 mb-1">
                        {t('common.address')}
                      </div>
                      <p className="text-secondary-700">
                        {selectedFranchise.address.street}<br />
                        {selectedFranchise.address.district}, {selectedFranchise.address.city}<br />
                        {selectedFranchise.address.zip}, {selectedFranchise.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaClock className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-secondary-800 mb-2">
                        {t('contact.businessHours')}
                      </div>
                      <div className="text-secondary-700 space-y-1">
                        <p>{t('common.monFri')}: {selectedFranchise.hours.weekday}</p>
                        <p>{t('common.saturday')}: {selectedFranchise.hours.saturday}</p>
                        <p>{t('common.sunday')}: {selectedFranchise.hours.sunday}</p>
                      </div>
                    </div>
                  </div>

                  <a 
                    href={`tel:${selectedFranchise.phone}`}
                    className="btn-primary w-full text-center mt-4 block"
                  >
                    {t('common.callNow')}
                  </a>
                </div>

                {/* Right Column - Booking Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-secondary-800 mb-4">
                      {t('common.scheduleService')}
                    </h3>
                    <BookingForm />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Franchises List */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {t('franchiseFinder.allLocations')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {activeFranchises.map((franchise) => (
                <div 
                  key={franchise.id}
                  className="card hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedFranchise(franchise)}
                >
                  <h3 className="text-xl font-bold text-secondary-800 mb-3">
                    {franchise.name}
                  </h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-secondary-600">
                      <FaPhone className="mr-2 text-primary-600" />
                      {franchise.phone}
                    </div>
                    <div className="flex items-center text-secondary-600">
                      <FaMapMarkerAlt className="mr-2 text-primary-600" />
                      {franchise.address.city}, {franchise.address.district}
                    </div>
                  </div>
                  
                  <button className="btn-outline w-full mt-4">
                    {t('franchiseFinder.viewDetails')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold mb-4">
            {t('franchiseFinder.cantFindLocation')}
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {t('franchiseFinder.expanding')}
          </p>
          <a 
            href={`mailto:${activeFranchises[0]?.email || 'info@eryilmazrepair.com'}`}
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
          >
            {t('common.contact')}
          </a>
        </div>
      </section>
    </div>
  )
}
