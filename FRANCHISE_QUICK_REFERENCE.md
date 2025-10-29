# Quick Reference: Franchise System

## How to Add a New Franchise (5 minutes)

### 1. Edit the Franchise Database
Open `src/data/franchises.js` and add your franchise to the array:

```javascript
{
  id: 'your-location-slug',        // Unique ID (lowercase, kebab-case)
  name: 'City District',            // Display name
  phone: '+90 XXX XXX XXXX',        // Local phone number
  email: 'location@eryilmazrepair.com',
  address: {
    street: 'Street Address No:XX',
    district: 'District Name',
    city: 'City',
    zip: 'XXXXX',
    country: 'Türkiye'
  },
  coordinates: {
    lat: 40.XXXX,   // Latitude (get from Google Maps)
    lng: 29.XXXX    // Longitude
  },
  hours: {
    weekday: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed'
  },
  serviceAreas: ['XXXXX', 'XXXXX'],  // ZIP codes you serve
  active: true                        // Set false to hide
}
```

### 2. Get Coordinates from Google Maps
1. Go to Google Maps
2. Right-click on your location
3. Click the coordinates at the top
4. Copy lat/lng values

### 3. Test Your Franchise
1. Run `npm run dev`
2. Visit `/franchise-finder`
3. Enter a ZIP code from your serviceAreas
4. Verify your franchise appears

### 4. Deploy
```bash
npm run build
# Deploy to your hosting platform
```

## Important Files

| File | Purpose |
|------|---------|
| `src/data/franchises.js` | Franchise database |
| `src/pages/FranchiseFinder.jsx` | Location finder page |
| `src/data/companyInfo.js` | Corporate info (no location) |
| `src/pages/Contact.jsx` | Contact page with finder link |

## Key Functions

### Find Franchise by ZIP
```javascript
import { findFranchiseByZip } from './data/franchises'

const franchise = findFranchiseByZip('16200')
// Returns franchise object or null
```

### Find Nearest Franchise
```javascript
import { findNearestFranchise } from './data/franchises'

const franchise = findNearestFranchise(40.1826, 29.0670)
// Returns nearest franchise object
```

### Get All Active Franchises
```javascript
import { getActiveFranchises } from './data/franchises'

const franchises = getActiveFranchises()
// Returns array of active franchises
```

## Common Tasks

### Temporarily Disable a Franchise
Set `active: false` in the franchise object:
```javascript
{
  id: 'location-id',
  // ... other fields
  active: false  // This hides the franchise
}
```

### Update Business Hours
```javascript
{
  hours: {
    weekday: '9:00 AM - 5:00 PM',  // Monday-Friday
    saturday: '10:00 AM - 3:00 PM', // Saturday
    sunday: 'Closed'                 // Sunday
  }
}
```

### Add More Service ZIP Codes
```javascript
{
  serviceAreas: ['16200', '16000', '16100', '16300', '16400', '16500']
  // Add all ZIP codes this franchise serves
}
```

## Troubleshooting

### Franchise Not Appearing in Search
- Check `active: true` is set
- Verify ZIP code is in `serviceAreas` array
- Check for typos in ZIP code
- Ensure franchise object has all required fields

### Location Detection Not Working
- User must allow location permissions in browser
- HTTPS required for geolocation API
- Fallback to ZIP code entry always available

### Wrong Franchise Showing
- Check ZIP code mappings in `serviceAreas`
- Verify no overlapping ZIP codes between franchises
- Check coordinates are accurate

## URL Structure

- `/franchise-finder` - Main finder page
- `/contact` - Contact with finder CTA
- Header top bar - Quick finder link
- Footer - Finder link in contact section

## Translations

Both English and Turkish are fully supported:
- EN: `franchiseFinder.*` keys in i18n
- TR: `franchiseFinder.*` keys in i18n

To add more languages, edit `src/i18n.js`.

## Best Practices

1. ✅ Always add complete franchise information
2. ✅ Test ZIP code search after adding franchise
3. ✅ Use accurate GPS coordinates
4. ✅ Keep phone numbers formatted consistently
5. ✅ Use franchise-specific email addresses
6. ✅ Set realistic business hours
7. ✅ List all ZIP codes served
8. ✅ Use unique IDs (location-district format)

## Support

For questions or issues:
- Review `FRANCHISE_SYSTEM_IMPLEMENTATION.md`
- Check the code comments in `franchises.js`
- Test locally before deploying
- Verify all fields are filled correctly
