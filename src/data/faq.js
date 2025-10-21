import i18n from '../i18n'

export const getFaqCategories = () => {
  return [
    {
      id: "general",
      name: i18n.t('faq.categories.general'),
      questions: [
        {
          id: 1,
          question: i18n.t('faq.questions.q1.question'),
          answer: i18n.t('faq.questions.q1.answer')
        },
        {
          id: 2,
          question: i18n.t('faq.questions.q2.question'),
          answer: i18n.t('faq.questions.q2.answer')
        },
        {
          id: 3,
          question: i18n.t('faq.questions.q3.question'),
          answer: i18n.t('faq.questions.q3.answer')
        },
        {
          id: 4,
          question: i18n.t('faq.questions.q4.question'),
          answer: i18n.t('faq.questions.q4.answer')
        }
      ]
    },
    {
      id: "pricing",
      name: i18n.t('faq.categories.pricing'),
      questions: [
        {
          id: 5,
          question: i18n.t('faq.questions.q5.question'),
          answer: i18n.t('faq.questions.q5.answer')
        },
        {
          id: 6,
          question: i18n.t('faq.questions.q6.question'),
          answer: i18n.t('faq.questions.q6.answer')
        },
        {
          id: 7,
          question: i18n.t('faq.questions.q7.question'),
          answer: i18n.t('faq.questions.q7.answer')
        },
        {
          id: 8,
          question: i18n.t('faq.questions.q8.question'),
          answer: i18n.t('faq.questions.q8.answer')
        }
      ]
    },
    {
      id: "service",
      name: i18n.t('faq.categories.service'),
      questions: [
        {
          id: 9,
          question: i18n.t('faq.questions.q9.question'),
          answer: i18n.t('faq.questions.q9.answer')
        },
        {
          id: 10,
          question: i18n.t('faq.questions.q10.question'),
          answer: i18n.t('faq.questions.q10.answer')
        },
        {
          id: 11,
          question: i18n.t('faq.questions.q11.question'),
          answer: i18n.t('faq.questions.q11.answer')
        },
        {
          id: 12,
          question: i18n.t('faq.questions.q12.question'),
          answer: i18n.t('faq.questions.q12.answer')
        }
      ]
    },
    {
      id: "preparation",
      name: i18n.t('faq.categories.preparation'),
      questions: [
        {
          id: 13,
          question: i18n.t('faq.questions.q13.question'),
          answer: i18n.t('faq.questions.q13.answer')
        },
        {
          id: 14,
          question: i18n.t('faq.questions.q14.question'),
          answer: i18n.t('faq.questions.q14.answer')
        },
        {
          id: 15,
          question: i18n.t('faq.questions.q15.question'),
          answer: i18n.t('faq.questions.q15.answer')
        }
      ]
    }
  ]
}

export const faqCategories = getFaqCategories()

export const getAllQuestions = () => {
  return getFaqCategories().flatMap(category => category.questions)
}

export const searchQuestions = (query) => {
  const allQuestions = getAllQuestions()
  const lowerQuery = query.toLowerCase()
  return allQuestions.filter(q => 
    q.question.toLowerCase().includes(lowerQuery) || 
    q.answer.toLowerCase().includes(lowerQuery)
  )
}

