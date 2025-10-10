export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Downtown Area",
    rating: 5,
    date: "2024-01-15",
    service: "Refrigerator Repair",
    text: "Excellent service! The technician arrived on time, diagnosed the problem quickly, and had my refrigerator working perfectly within an hour. Very professional and reasonably priced.",
    avatar: "/images/avatars/avatar1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "West Side",
    rating: 5,
    date: "2024-01-10",
    service: "Dishwasher Repair",
    text: "I called them for my dishwasher that wasn't draining. They came the same day and fixed it perfectly. The technician was knowledgeable and explained everything clearly. Highly recommend!",
    avatar: "/images/avatars/avatar2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "North District",
    rating: 5,
    date: "2024-01-08",
    service: "Oven Repair",
    text: "Outstanding service from start to finish. My oven wasn't heating properly, and they had it fixed within 24 hours. The price was fair and the work was guaranteed. Very satisfied!",
    avatar: "/images/avatars/avatar3.jpg"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "East End",
    rating: 5,
    date: "2024-01-05",
    service: "Washing Machine Repair",
    text: "My washing machine was leaking everywhere. They came out quickly, found the issue, and repaired it on the spot. Great communication and professional service. Will definitely use again!",
    avatar: "/images/avatars/avatar4.jpg"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    location: "South Bay",
    rating: 5,
    date: "2024-01-03",
    service: "Dryer Repair",
    text: "Very impressed with their service! My dryer wasn't heating, and they diagnosed and fixed the problem in less than an hour. The technician was friendly and efficient. Five stars!",
    avatar: "/images/avatars/avatar5.jpg"
  },
  {
    id: 6,
    name: "James Wilson",
    location: "Central City",
    rating: 5,
    date: "2023-12-28",
    service: "Microwave Repair",
    text: "Quick, professional, and affordable. My microwave stopped working completely, and they had it repaired the same day I called. Excellent customer service!",
    avatar: "/images/avatars/avatar6.jpg"
  }
]

export const getAverageRating = () => {
  const total = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0)
  return (total / testimonials.length).toFixed(1)
}

export const getTotalReviews = () => {
  return testimonials.length
}

