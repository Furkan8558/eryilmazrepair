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
    
    // Set a timeout for geolocation request (10 seconds)
    const timeoutId = setTimeout(() => {
      setDetectingLocation(false)
      setError(t('franchiseFinder.locationDetectionFailed'))
    }, 10000)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        clearTimeout(timeoutId)
        const { latitude, longitude } = position.coords
        const franchise = findNearestFranchise(latitude, longitude)
        
        if (franchise) {
          setSelectedFranchise(franchise)
          setDetectingLocation(false)
        } else {
          setError(t('franchiseFinder.noFranchiseNearby'))
          setDetectingLocation(false)
        }
      },
      (error) => {
        clearTimeout(timeoutId)
        console.error('Geolocation error:', error)
        
        // Provide more specific error messages
        let errorMessage = t('franchiseFinder.locationDetectionFailed')
        if (error.code === 1) {
          errorMessage = 'Location permission denied. Please allow location access and try again.'
        } else if (error.code === 2) {
          errorMessage = 'Location information is unavailable. Please try entering your ZIP code.'
        } else if (error.code === 3) {
          errorMessage = 'Location request timed out. Please try again or enter your ZIP code.'
        }
        
        setError(errorMessage)
        setDetectingLocation(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    )
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="mb-3 md:mb-4">{t('franchiseFinder.title')}</h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto">
            {t('franchiseFinder.subtitle')}
          </p>
        </div>
      </section>

      {/* Franchise Finder */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Search Box */}
          <div className="card mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
              {t('franchiseFinder.findYourFranchise')}
            </h2>
            
            <form onSubmit={handleZipSearch} className="mb-4 md:mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder={t('franchiseFinder.enterZipPlaceholder')}
                  className="flex-1 px-4 py-3 text-base border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary px-6 sm:px-8 py-3 flex items-center justify-center min-w-[120px]"
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
              <div className="text-secondary-500 mb-3 text-sm">{t('franchiseFinder.or')}</div>
              <button
                onClick={detectUserLocation}
                disabled={detectingLocation}
                className="btn-outline inline-flex items-center py-3 px-6"
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
              <div className="mt-4 p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center text-sm">
                {error}
              </div>
            )}
          </div>

          {/* Selected Franchise */}
          {selectedFranchise && (
            <div className="card bg-primary-50 border-2 border-primary-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 md:mb-6">
                <div className="mb-3 sm:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-2">
                    {t('franchiseFinder.foundFranchise')}
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold text-secondary-800">
                    {selectedFranchise.name}
                  </h4>
                </div>
                <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold self-start">
                  {t('franchiseFinder.serving')}
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                {/* Left Column - Contact Info */}
                <div className="lg:col-span-1 space-y-4">
                  <div className="flex items-start">
                    <FaPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0 text-sm" />
                    <div className="min-w-0">
                      <div className="font-semibold text-secondary-800 mb-1 text-sm">
                        {t('common.phone')}
                      </div>
                      <a 
                        href={`tel:${selectedFranchise.phone}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm break-all"
                      >
                        {selectedFranchise.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaEnvelope className="text-primary-600 mt-1 mr-3 flex-shrink-0 text-sm" />
                    <div className="min-w-0">
                      <div className="font-semibold text-secondary-800 mb-1 text-sm">
                        {t('common.email')}
                      </div>
                      <a 
                        href={`mailto:${selectedFranchise.email}`}
                        className="text-primary-600 hover:text-primary-700 text-sm break-all"
                      >
                        {selectedFranchise.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary-600 mt-1 mr-3 flex-shrink-0 text-sm" />
                    <div className="min-w-0">
                      <div className="font-semibold text-secondary-800 mb-1 text-sm">
                        {t('common.address')}
                      </div>
                      <p className="text-secondary-700 text-sm">
                        {selectedFranchise.address.street}<br />
                        {selectedFranchise.address.district}, {selectedFranchise.address.city}<br />
                        {selectedFranchise.address.zip}, {selectedFranchise.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaClock className="text-primary-600 mt-1 mr-3 flex-shrink-0 text-sm" />
                    <div className="min-w-0">
                      <div className="font-semibold text-secondary-800 mb-2 text-sm">
                        {t('contact.businessHours')}
                      </div>
                      <div className="text-secondary-700 space-y-1 text-sm">
                        <p>{t('common.monFri')}: {selectedFranchise.hours.weekday}</p>
                        <p>{t('common.saturday')}: {selectedFranchise.hours.saturday}</p>
                        <p>{t('common.sunday')}: {selectedFranchise.hours.sunday}</p>
                      </div>
                    </div>
                  </div>

                  <a 
                    href={`tel:${selectedFranchise.phone}`}
                    className="btn-primary w-full text-center mt-4 block py-3"
                  >
                    {t('common.callNow')}
                  </a>
                </div>

                {/* Right Column - Booking Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
                    <h3 className="text-lg md:text-xl font-bold text-secondary-800 mb-4">
                      {t('common.scheduleService')}
                    </h3>
                    <BookingForm />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Franchises List */}
          <div className="mt-8 md:mt-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
              {t('franchiseFinder.allLocations')}
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {activeFranchises.map((franchise) => (
                <div 
                  key={franchise.id}
                  className="card hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedFranchise(franchise)}
                >
                  <h3 className="text-lg md:text-xl font-bold text-secondary-800 mb-3">
                    {franchise.name}
                  </h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-secondary-600">
                      <FaPhone className="mr-2 text-primary-600 flex-shrink-0" />
                      <span className="break-all">{franchise.phone}</span>
                    </div>
                    <div className="flex items-center text-secondary-600">
                      <FaMapMarkerAlt className="mr-2 text-primary-600 flex-shrink-0" />
                      <span>{franchise.address.city}, {franchise.address.district}</span>
                    </div>
                  </div>
                  
                  <button className="btn-outline w-full mt-4 py-2.5">
                    {t('franchiseFinder.viewDetails')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-10 md:py-12">
        <div className="container-custom text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            {t('franchiseFinder.cantFindLocation')}
          </h3>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
            {t('franchiseFinder.expanding')}
          </p>
          <a 
            href={`mailto:${activeFranchises[0]?.email || 'info@eryilmazteknik.com.tr'}`}
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100 py-3 px-6 inline-block"
          >
            {t('common.contact')}
          </a>
        </div>
      </section>
    </div>
  )
}
