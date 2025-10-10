import { FaAward, FaUsers, FaShieldAlt, FaHeart, FaHandshake, FaWrench, FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CallToAction from '../components/CallToAction'
import { companyInfo } from '../data/companyInfo'

export default function About() {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Emergency Service" }
  ]

  const team = [
    {
      name: "John Smith",
      role: "Master Technician",
      experience: "15+ years",
      description: "Specialist in refrigeration and HVAC systems"
    },
    {
      name: "Sarah Johnson",
      role: "Senior Technician",
      experience: "10+ years",
      description: "Expert in laundry appliances and dishwashers"
    },
    {
      name: "Michael Chen",
      role: "Lead Technician",
      experience: "12+ years",
      description: "Specialist in cooking appliances and ovens"
    }
  ]

  const brandsWeService = [
    'Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 'Maytag', 
    'KitchenAid', 'Bosch', 'Electrolux', 'Kenmore', 'Amana', 
    'Hotpoint', 'Viking', 'Sub-Zero', 'Thermador', 'Wolf'
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="mb-4">About {companyInfo.name}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted appliance repair partner with over 15 years of experience 
            serving the community with excellence and integrity.
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

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-secondary-700">
                <p>
                  Founded in 2009, {companyInfo.name} started with a simple mission: to provide 
                  honest, reliable, and professional appliance repair services to our community. 
                  What began as a one-person operation has grown into a team of highly skilled 
                  technicians serving thousands of satisfied customers.
                </p>
                <p>
                  We understand how important your appliances are to your daily life. That's why 
                  we're committed to providing fast, efficient, and affordable repair services. 
                  Our technicians are not just skilled professionals – they're friendly neighbors 
                  who care about your satisfaction and peace of mind.
                </p>
                <p>
                  Over the years, we've built our reputation on expertise, integrity, and 
                  exceptional customer service. Every member of our team is thoroughly trained, 
                  background-checked, and committed to upholding the highest standards.
                </p>
              </div>
            </div>
            <div className="bg-secondary-200 rounded-xl h-96 flex items-center justify-center">
              <span className="text-secondary-400 text-xl">Company Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-6">What We Do</h2>
            <p className="text-xl text-secondary-700">
              We specialize in repairing all major household and commercial appliances. 
              From refrigerators to dishwashers, washers to dryers, ovens to microwaves – 
              if it's broken, we can fix it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/residential-services" className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow group">
              <FaHeart className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Residential Services</h3>
              <p className="text-secondary-700 mb-4">
                Expert repair for all your home appliances. Fast, reliable service to keep 
                your household running smoothly.
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center">
                Learn More →
              </span>
            </Link>

            <Link to="/commercial-services" className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow group">
              <FaWrench className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Commercial Services</h3>
              <p className="text-secondary-700 mb-4">
                Minimize downtime with our commercial appliance repair. Trusted by businesses 
                across multiple industries.
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center">
                Learn More →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Brands We Service</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our technicians are trained and experienced in servicing all major appliance brands
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {brandsWeService.map((brand) => (
              <div key={brand} className="bg-white border border-secondary-200 px-6 py-3 rounded-lg font-semibold text-secondary-700 hover:border-primary-600 hover:text-primary-600 transition-colors">
                {brand}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-secondary-600">
              Don't see your brand? <Link to="/contact" className="text-primary-600 font-semibold hover:underline">Contact us</Link> – we likely service it!
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-secondary-600">
                We strive for excellence in every repair, ensuring quality workmanship.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-secondary-600">
                Honest pricing, transparent service, and ethical business practices.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-secondary-600">
                We're proud to serve our community and give back whenever possible.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Care</h3>
              <p className="text-secondary-600">
                Your satisfaction and peace of mind are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Meet Our Expert Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="text-primary-600 font-semibold mb-1">{member.role}</div>
                <div className="text-secondary-500 text-sm mb-3">{member.experience}</div>
                <p className="text-secondary-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

