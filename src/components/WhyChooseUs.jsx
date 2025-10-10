import { FaCertificate, FaClock, FaTools, FaShieldAlt, FaDollarSign, FaThumbsUp } from 'react-icons/fa'

export default function WhyChooseUs() {
  const features = [
    {
      icon: FaCertificate,
      title: "Licensed & Certified",
      description: "All our technicians are fully licensed, certified, and background-checked professionals."
    },
    {
      icon: FaClock,
      title: "Same-Day Service",
      description: "We offer same-day service for most repairs. Emergency service available 24/7."
    },
    {
      icon: FaTools,
      title: "Expert Technicians",
      description: "15+ years of experience with all major appliance brands and models."
    },
    {
      icon: FaShieldAlt,
      title: "Warranty Guaranteed",
      description: "90-day labor warranty on all repairs. We stand behind our work."
    },
    {
      icon: FaDollarSign,
      title: "Upfront Pricing",
      description: "No hidden fees. Clear, upfront pricing before we start any work."
    },
    {
      icon: FaThumbsUp,
      title: "100% Satisfaction",
      description: "Your satisfaction is our priority. We're not done until you're happy."
    }
  ]

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Why Choose Us</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality appliance repair services 
            with professionalism, integrity, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-900">{feature.title}</h3>
              <p className="text-secondary-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

