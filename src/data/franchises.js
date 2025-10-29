// Franchise locations for Eryilmaz Teknik
export const franchises = [
  {
    id: 'bursa-osmangazi',
    name: 'Bursa Osmangazi',
    phone: '+90 541 632 6796',
    email: 'info@eryilmazteknik.com.tr',
    address: {
      street: 'Soğanlı mah. 7. güngör sok. No:19/B',
      district: 'Osmangazi',
      city: 'Bursa',
      zip: '16200',
      country: 'Türkiye'
    },
    coordinates: {
      lat: 40.1826,
      lng: 29.0670
    },
    hours: {
      weekday: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 4:00 PM',
      sunday: 'Closed'
    },
    serviceAreas: ['16200', '16000', '16100', '16300', '16400'],
    active: true
  },
  // Add more franchises as they become available
  // Example structure for future franchises:
  // {
  //   id: 'istanbul-kadikoy',
  //   name: 'Istanbul Kadıköy',
  //   phone: '+90 XXX XXX XXXX',
  //   email: 'istanbul@eryilmazrepair.com',
  //   address: {
  //     street: 'Street Address',
  //     district: 'Kadıköy',
  //     city: 'Istanbul',
  //     zip: '34XXX',
  //     country: 'Türkiye'
  //   },
  //   coordinates: {
  //     lat: 40.9XXX,
  //     lng: 29.0XXX
  //   },
  //   hours: {
  //     weekday: '8:00 AM - 6:00 PM',
  //     saturday: '9:00 AM - 4:00 PM',
  //     sunday: 'Closed'
  //   },
  //   serviceAreas: ['34XXX', '34XXX'],
  //   active: true
  // }
]

/**
 * Find franchise by ZIP code
 * @param {string} zipCode - ZIP/Postal code to search
 * @returns {object|null} - Franchise object or null if not found
 */
export const findFranchiseByZip = (zipCode) => {
  if (!zipCode) return null
  
  const cleanZip = zipCode.toString().trim()
  return franchises.find(franchise => 
    franchise.active && franchise.serviceAreas.some(zip => 
      zip === cleanZip || cleanZip.startsWith(zip.substring(0, 3))
    )
  ) || null
}

/**
 * Find nearest franchise by coordinates
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @returns {object|null} - Nearest franchise object
 */
export const findNearestFranchise = (lat, lng) => {
  if (!lat || !lng) return null
  
  const activeFranchises = franchises.filter(f => f.active)
  if (activeFranchises.length === 0) return null
  
  // Calculate distance using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371 // Radius of Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return R * c
  }
  
  let nearest = activeFranchises[0]
  let minDistance = calculateDistance(
    lat, lng, 
    nearest.coordinates.lat, 
    nearest.coordinates.lng
  )
  
  for (let i = 1; i < activeFranchises.length; i++) {
    const distance = calculateDistance(
      lat, lng,
      activeFranchises[i].coordinates.lat,
      activeFranchises[i].coordinates.lng
    )
    if (distance < minDistance) {
      minDistance = distance
      nearest = activeFranchises[i]
    }
  }
  
  return nearest
}

/**
 * Get all active franchises
 * @returns {array} - Array of active franchise objects
 */
export const getActiveFranchises = () => {
  return franchises.filter(f => f.active)
}

/**
 * Get franchise by ID
 * @param {string} id - Franchise ID
 * @returns {object|null} - Franchise object or null
 */
export const getFranchiseById = (id) => {
  return franchises.find(f => f.id === id && f.active) || null
}

/**
 * Check if ZIP code is served by any franchise
 * @param {string} zipCode - ZIP/Postal code
 * @returns {boolean} - True if served, false otherwise
 */
export const isZipCodeServed = (zipCode) => {
  return findFranchiseByZip(zipCode) !== null
}
