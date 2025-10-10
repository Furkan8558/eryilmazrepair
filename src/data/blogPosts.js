export const blogPosts = [
  {
    id: "refrigerator-maintenance-tips",
    title: "10 Essential Refrigerator Maintenance Tips",
    excerpt: "Learn how to keep your refrigerator running efficiently and extend its lifespan with these simple maintenance tips.",
    content: "Regular maintenance of your refrigerator can save you money on energy bills and prevent costly repairs...",
    image: "/images/blog/fridge-maintenance.jpg",
    author: "John Smith",
    category: "Maintenance Tips",
    date: "2024-01-20",
    readTime: "5 min read",
    tags: ["refrigerator", "maintenance", "tips"]
  },
  {
    id: "dishwasher-cleaning-guide",
    title: "How to Deep Clean Your Dishwasher",
    excerpt: "A step-by-step guide to thoroughly cleaning your dishwasher for optimal performance and longevity.",
    content: "Your dishwasher works hard to keep your dishes clean, but it needs cleaning too...",
    image: "/images/blog/dishwasher-clean.jpg",
    author: "Sarah Miller",
    category: "How-To Guides",
    date: "2024-01-18",
    readTime: "6 min read",
    tags: ["dishwasher", "cleaning", "how-to"]
  },
  {
    id: "washing-machine-troubleshooting",
    title: "Common Washing Machine Problems and Solutions",
    excerpt: "Troubleshoot common washing machine issues before calling a repair technician.",
    content: "Washing machines are essential appliances, but they can develop problems over time...",
    image: "/images/blog/washer-troubleshoot.jpg",
    author: "Mike Johnson",
    category: "Troubleshooting",
    date: "2024-01-15",
    readTime: "7 min read",
    tags: ["washing machine", "troubleshooting", "repair"]
  },
  {
    id: "energy-efficient-appliances",
    title: "How to Make Your Appliances More Energy Efficient",
    excerpt: "Simple tricks to reduce your energy consumption and lower your utility bills.",
    content: "Energy-efficient appliances can save you hundreds of dollars per year...",
    image: "/images/blog/energy-efficient.jpg",
    author: "Emily Davis",
    category: "Energy Saving",
    date: "2024-01-12",
    readTime: "5 min read",
    tags: ["energy efficiency", "savings", "tips"]
  },
  {
    id: "dryer-safety-tips",
    title: "Dryer Safety: Preventing Fire Hazards",
    excerpt: "Important safety tips to prevent dryer fires and keep your family safe.",
    content: "Dryers are one of the leading causes of home fires. Here's how to prevent them...",
    image: "/images/blog/dryer-safety.jpg",
    author: "Robert Brown",
    category: "Safety",
    date: "2024-01-10",
    readTime: "4 min read",
    tags: ["dryer", "safety", "prevention"]
  },
  {
    id: "when-to-repair-or-replace",
    title: "When to Repair vs. Replace Your Appliance",
    excerpt: "Learn when it makes more sense to repair your appliance versus buying a new one.",
    content: "Deciding whether to repair or replace an appliance can be challenging...",
    image: "/images/blog/repair-vs-replace.jpg",
    author: "Jennifer Lee",
    category: "Advice",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["repair", "replace", "advice"]
  }
]

export const getPostById = (id) => {
  return blogPosts.find(post => post.id === id)
}

export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category)
}

export const getRecentPosts = (limit = 3) => {
  return blogPosts.slice(0, limit)
}

