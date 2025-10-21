import { useState } from 'react'
import { FaMapMarkerAlt, FaCheckCircle, FaSearch } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import CallToAction from '../components/CallToAction'
import { serviceAreas, checkServiceAvailability } from '../data/serviceAreas'

export default function ServiceAreas() {
  const { t } = useTranslation()
  const [zipCode, setZipCode] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    const isAvailable = checkServiceAvailability(zipCode)
    setSearchResult({
      zipCode,
      available: isAvailable
    })
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <FaMapMarkerAlt className="text-5xl mx-auto mb-4" />
          <h1 className="mb-4">{t('serviceAreas.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('serviceAreas.subtitle')}
          </p>
        </div>
      </section>

      {/* ZIP Code Checker */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom max-w-2xl">
          <h2 className="text-center mb-8">{t('serviceAreas.checkAvailability')}</h2>
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder={t('serviceAreas.enterZipCode')}
                className="input-field flex-1"
                pattern="[0-9]{5}"
                required
              />
              <button type="submit" className="btn-primary">
                <FaSearch className="inline mr-2" />
                {t('serviceAreas.check')}
              </button>
            </div>
          </form>

          {searchResult && (
            <div className={`p-6 rounded-lg text-center ${
              searchResult.available 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-yellow-50 border border-yellow-200'
            }`}>
              {searchResult.available ? (
                <>
                  <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    {t('serviceAreas.greatNews')}
                  </h3>
                  <p className="text-green-700 mb-4">
                    {t('serviceAreas.zipCodeAvailable', { zipCode: searchResult.zipCode })}
                  </p>
                  <a href="/contact" className="btn-primary">
                    {t('serviceAreas.scheduleNow')}
                  </a>
                </>
              ) : (
                <>
                  <div className="text-5xl mb-4">📍</div>
                  <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                    {t('serviceAreas.mayHelp')}
                  </h3>
                  <p className="text-yellow-700 mb-4">
                    {t('serviceAreas.outsideArea', { zipCode: searchResult.zipCode })}
                  </p>
                  <a href="/contact" className="btn-outline">
                    {t('serviceAreas.contactAnyway')}
                  </a>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Service Areas List */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">{t('serviceAreas.areasWeServe')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <div key={area.id} className="card">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-secondary-900">{area.name}</h3>
                  {area.available && (
                    <FaCheckCircle className="text-green-500 flex-shrink-0 ml-2" />
                  )}
                </div>
                <p className="text-secondary-600 mb-2">{area.description}</p>
                <p className="text-sm text-primary-600 font-semibold">
                  {t('serviceAreas.zip')}: {area.zip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="bg-secondary-50 py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="mb-6">{t('serviceAreas.dontSeeArea')}</h2>
          <p className="text-lg text-secondary-700 mb-8">
            {t('serviceAreas.dontSeeAreaDescription')}
          </p>
          <a href="/contact" className="btn-primary">
            {t('serviceAreas.contactUs')}
          </a>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

