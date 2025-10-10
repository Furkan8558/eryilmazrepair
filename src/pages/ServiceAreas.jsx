import { useState } from 'react'
import { FaMapMarkerAlt, FaCheckCircle, FaSearch } from 'react-icons/fa'
import CallToAction from '../components/CallToAction'
import { serviceAreas, checkServiceAvailability } from '../data/serviceAreas'

export default function ServiceAreas() {
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
          <h1 className="mb-4">Service Areas</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We proudly serve the greater metropolitan area and surrounding communities.
          </p>
        </div>
      </section>

      {/* ZIP Code Checker */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom max-w-2xl">
          <h2 className="text-center mb-8">Check Service Availability</h2>
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter your ZIP code"
                className="input-field flex-1"
                pattern="[0-9]{5}"
                required
              />
              <button type="submit" className="btn-primary">
                <FaSearch className="inline mr-2" />
                Check
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
                    Great News! We Service Your Area
                  </h3>
                  <p className="text-green-700 mb-4">
                    ZIP Code {searchResult.zipCode} is within our service area.
                  </p>
                  <a href="/contact" className="btn-primary">
                    Schedule Service Now
                  </a>
                </>
              ) : (
                <>
                  <div className="text-5xl mb-4">📍</div>
                  <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                    We May Still Be Able to Help
                  </h3>
                  <p className="text-yellow-700 mb-4">
                    ZIP Code {searchResult.zipCode} is outside our standard service area, 
                    but we may be able to accommodate special requests.
                  </p>
                  <a href="/contact" className="btn-outline">
                    Contact Us Anyway
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
          <h2 className="text-center mb-12">Areas We Serve</h2>
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
                  ZIP: {area.zip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="bg-secondary-50 py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="mb-6">Don't See Your Area?</h2>
          <p className="text-lg text-secondary-700 mb-8">
            Our service areas are constantly expanding. If you don't see your location listed, 
            please contact us. We may be able to accommodate your service request or will be 
            happy to recommend a trusted partner in your area.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

