import { FaAward, FaClock, FaDollarSign, FaUserTie, FaShieldAlt, FaStar, FaCheckCircle, FaTools, FaThumbsUp } from 'react-icons/fa'
import CallToAction from '../components/CallToAction'
import { companyInfo } from '../data/companyInfo'

export default function WhyChooseUs() {
  const mainReasons = [
    {
      icon: FaUserTie,
      title: 'Qualified Experts',
      description: 'Our technicians are factory-trained, certified, and have 15+ years of experience. They stay current with the latest appliance technologies and repair techniques.',
      features: [
        'Factory-trained technicians',
        'Ongoing education & certification',
        'Background-checked professionals',
        'Courteous & respectful service'
      ]
    },
    {
      icon: FaClock,
      title: 'Scheduled Appointment Times',
      description: 'We value your time. Schedule appointments that work for you, and we\'ll arrive on time within the scheduled window. Same-day service available.',
      features: [
        'Flexible scheduling options',
        'Same-day service available',
        'On-time arrival guarantee',
        'Real-time technician tracking'
      ]
    },
    {
      icon: FaDollarSign,
      title: 'Upfront, Flat-Rate Pricing',
      description: 'No hidden fees or surprise charges. We provide clear, upfront pricing before we start any work. You\'ll know exactly what you\'ll pay.',
      features: [
        'Free diagnostic with repair',
        'Clear pricing before work begins',
        'No hidden fees',
        'Competitive rates'
      ]
    }
  ]

  const additionalBenefits = [
    {
      icon: FaShieldAlt,
      title: 'Warranty Guaranteed',
      description: '90-day labor warranty on all repairs. We stand behind our work 100%.'
    },
    {
      icon: FaStar,
      title: '5-Star Service',
      description: 'Rated 5 stars by thousands of satisfied customers across our service area.'
    },
    {
      icon: FaTools,
      title: 'All Major Brands',
      description: 'We service all major appliance brands including Samsung, LG, Whirlpool, GE, and more.'
    },
    {
      icon: FaAward,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your complete peace of mind.'
    },
    {
      icon: FaCheckCircle,
      title: 'Quality Parts',
      description: 'We use only genuine OEM parts to ensure lasting repairs and optimal performance.'
    },
    {
      icon: FaThumbsUp,
      title: '100% Satisfaction',
      description: 'Your satisfaction is our priority. We\'re not done until you\'re completely happy.'
    }
  ]

  const processSteps = [
    {
      number: '1',
      title: 'Schedule Service',
      description: 'Call us or book online at a time that works for you. We offer flexible scheduling including same-day appointments.'
    },
    {
      number: '2',
      title: 'Technician Arrival',
      description: 'Our qualified expert arrives on time, diagnoses the problem, and provides upfront, flat-rate pricing.'
    },
    {
      number: '3',
      title: 'Expert Repair',
      description: 'Once you approve, we complete the repair efficiently using quality parts and proven techniques.'
    },
    {
      number: '4',
      title: 'Quality Check',
      description: 'We test your appliance to ensure it\'s working perfectly and clean up our work area.'
    }
  ]

  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '5,000+', label: 'Happy Customers' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Emergency Service' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="mb-6">Why Choose {companyInfo.name}</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're not just another appliance repair service. We're your trusted partner 
            in keeping your appliances running smoothly. Here's what sets us apart.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">The {companyInfo.name.split(' ')[0]} Difference</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Three core principles that guide everything we do
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainReasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <reason.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary-900">{reason.title}</h3>
                <p className="text-secondary-700 mb-6">{reason.description}</p>
                <ul className="space-y-3">
                  {reason.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How Our Service Works</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              A simple, straightforward process from start to finish
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-6 mb-8 ${index !== processSteps.length - 1 ? 'pb-8 border-b border-secondary-200' : ''}`}>
                <div className="flex-shrink-0">
                  <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-secondary-900">{step.title}</h3>
                  <p className="text-lg text-secondary-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Additional Benefits</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Even more reasons to trust us with your appliance repairs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <benefit.icon className="text-2xl text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-secondary-900">{benefit.title}</h3>
                  <p className="text-secondary-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Our Commitment to You</h2>
          <div className="bg-primary-50 border-l-4 border-primary-600 p-8 rounded-r-lg text-left">
            <p className="text-lg text-secondary-700 mb-4">
              At {companyInfo.name}, we're committed to providing exceptional service on every call. 
              We treat your home and appliances with the utmost respect, arriving on time, working efficiently, 
              and leaving your space cleaner than we found it.
            </p>
            <p className="text-lg text-secondary-700 mb-4">
              Our technicians are not just skilled professionals – they're friendly neighbors who care about 
              your satisfaction. We take the time to explain the problem, answer your questions, and provide 
              honest recommendations.
            </p>
            <p className="text-lg text-secondary-700 font-semibold">
              We're not satisfied until you're completely happy with our service. That's the {companyInfo.name.split(' ')[0]} promise.
            </p>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

