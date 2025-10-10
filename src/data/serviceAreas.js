export const serviceAreas = [
  {
    id: 1,
    name: "Bursa",
    zip: "16200",
    description: "Main service area for Bursa.",
    available: true
  },
  {
    id: 2,
    name: "Balıkesir",
    zip: "10100",
    description: "",
    available: true
  },
  {
    id: 3,
    name: "İstanbul",
    zip: "34000",
    description: "",
    available: true
  },
  {
    id: 4,
    name: "Kocaeli",
    zip: "41000",
    description: "",
    available: true
  },
]

export const checkServiceAvailability = (zipCode) => {
  return serviceAreas.some(area => area.zip === zipCode && area.available)
}

