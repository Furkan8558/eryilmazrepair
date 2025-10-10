export const faqCategories = [
  {
    id: "general",
    name: "General Questions",
    questions: [
      {
        id: 1,
        question: "What areas do you service?",
        answer: "We provide appliance repair services throughout the greater metropolitan area and surrounding communities. Call us to confirm service availability in your specific location."
      },
      {
        id: 2,
        question: "Do you offer same-day service?",
        answer: "Yes! We offer same-day service for most repairs, subject to availability. Contact us early in the day for the best chance of same-day appointment."
      },
      {
        id: 3,
        question: "Are you licensed and insured?",
        answer: "Absolutely! All our technicians are fully licensed, bonded, and insured. We carry comprehensive liability insurance to protect our customers."
      },
      {
        id: 4,
        question: "What brands do you service?",
        answer: "We service all major appliance brands including Samsung, LG, Whirlpool, GE, Frigidaire, Maytag, KitchenAid, Bosch, and many more."
      }
    ]
  },
  {
    id: "pricing",
    name: "Pricing & Payment",
    questions: [
      {
        id: 5,
        question: "How much does a service call cost?",
        answer: "Our diagnostic service call fee starts at $89, which covers the technician visit and problem diagnosis. This fee is waived if you proceed with the repair."
      },
      {
        id: 6,
        question: "Do you provide upfront pricing?",
        answer: "Yes! After diagnosing the problem, we provide a clear, upfront quote before starting any work. You'll know exactly what the repair will cost."
      },
      {
        id: 7,
        question: "What payment methods do you accept?",
        answer: "We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, and checks."
      },
      {
        id: 8,
        question: "Do you offer any warranties?",
        answer: "Yes! All our repairs come with a 90-day labor warranty and manufacturer warranty on parts. We stand behind our work."
      }
    ]
  },
  {
    id: "service",
    name: "Service Details",
    questions: [
      {
        id: 9,
        question: "How quickly can you come out?",
        answer: "Most appointments can be scheduled within 24-48 hours. We also offer same-day service for emergencies when available."
      },
      {
        id: 10,
        question: "Do I need to be home during the repair?",
        answer: "Yes, someone 18 years or older needs to be present during the service call to provide access to the appliance and approve the repair."
      },
      {
        id: 11,
        question: "How long does a typical repair take?",
        answer: "Most repairs are completed within 1-2 hours. However, some complex repairs may require ordering parts or a follow-up visit."
      },
      {
        id: 12,
        question: "What if you can't fix my appliance?",
        answer: "If the appliance cannot be repaired or is not cost-effective to fix, we'll advise you honestly and only charge the diagnostic fee."
      }
    ]
  },
  {
    id: "preparation",
    name: "Preparing for Service",
    questions: [
      {
        id: 13,
        question: "What should I do to prepare for the technician's visit?",
        answer: "Please ensure the appliance is accessible, clear the area around it, and have any error codes or symptoms noted. If possible, have the model and serial number ready."
      },
      {
        id: 14,
        question: "Do I need to provide anything for the repair?",
        answer: "No, our technicians come fully equipped with tools and common parts. For specialty parts, we'll order them and schedule a follow-up appointment."
      },
      {
        id: 15,
        question: "Can you diagnose the problem over the phone?",
        answer: "While we can often provide guidance over the phone, an in-person inspection is usually necessary for accurate diagnosis and repair."
      }
    ]
  }
]

export const getAllQuestions = () => {
  return faqCategories.flatMap(category => category.questions)
}

export const searchQuestions = (query) => {
  const allQuestions = getAllQuestions()
  const lowerQuery = query.toLowerCase()
  return allQuestions.filter(q => 
    q.question.toLowerCase().includes(lowerQuery) || 
    q.answer.toLowerCase().includes(lowerQuery)
  )
}

