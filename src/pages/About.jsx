import { FaAward, FaUsers, FaShieldAlt, FaHeart, FaHandshake, FaWrench, FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CallToAction from '../components/CallToAction'
import SEO from '../components/SEO'
import getCompanyInfo from '../data/companyInfo'

export default function About() {
  const { t } = useTranslation()
  const companyInfo = getCompanyInfo()
  
  // Structured Data for About page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Eryilmaz Teknik",
      "foundingDate": "2010",
      "description": "15+ yıllık deneyimi ile Bursa'nın en güvenilir beyaz eşya tamir servisi",
      "knowsAbout": ["Beyaz Eşya Tamiri", "Kombi Bakımı", "Klima Servisi", "Teknik Servis"],
      "areaServed": {
        "@type": "City",
        "name": "Bursa"
      }
    }
  }
  
  const stats = [
    { number: "15+", label: t('about.stat1Label') },
    { number: "5000+", label: t('about.stat2Label') },
    { number: "99%", label: t('about.stat3Label') },
    { number: "24/7", label: t('about.stat4Label') }
  ]

  const team = [
    {
      name: "Süleyman Eryılmaz",
      role: t('about.team1Role'),
      experience: t('about.team1Experience'),
      description: t('about.team1Description')
    },
    {
      name: "Ersel Eryılmaz",
      role: t('about.team2Role'),
      experience: t('about.team2Experience'),
      description: t('about.team2Description')
    }
  ]

  const brandsWeService = [
    'Arçelik', 'Beko', 'Vestel', 'Bosch', 'Siemens', 
    'Samsung', 'LG', 'Profilo', 'Altus', 'Grundig',
    'Whirlpool', 'Electrolux', 'Vaillant', 'Baymak', 'Eca',
    'Demirdöküm', 'Protherm', 'Buderus', 'Airfel', 'Ferroli',
    'Daikin', 'Mitsubishi', 'Alarko', 'Regal'
  ]

  return (
    <div>
      <SEO 
        title={t('nav.about') || "Hakkımızda | Eryilmaz Teknik"}
        description={t('about.introduction') || "15+ yıllık deneyimi ile Bursa'nın en güvenilir beyaz eşya tamir servisi. Profesyonel ekibimiz ve kaliteli hizmetimizle yanınızdayız."}
        keywords={[
          'eryilmaz teknik hakkında',
          'bursa teknik servis hakkımızda',
          'beyaz eşya tamircisi kimdir',
          'bursa tamirci deneyim',
          'profesyonel teknik servis ekibi',
          'eryılmaz teknik referanslar',
          '15 yıllık tecrübe',
          'güvenilir tamirci bursa'
        ]}
        structuredData={structuredData}
        ogType="website"
      />
      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="mb-4">{t('about.title')} {companyInfo.name}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('about.subtitle')}
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
              <h2 className="mb-6">{t('about.ourStory')}</h2>
              <div className="space-y-4 text-lg text-secondary-700">
                <p>
                  {t('about.storyParagraph1')}
                </p>
                <p>
                  {t('about.storyParagraph2')}
                </p>
                <p>
                  {t('about.storyParagraph3')}
                </p>
              </div>
            </div>
            <div className="bg-secondary-100 rounded-xl h-96 flex items-center justify-center p-8">
              <img 
                src="/logo.png" 
                alt="Eryilmaz Teknik Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-6">{t('about.whatWeDo')}</h2>
            <p className="text-xl text-secondary-700">
              {t('about.whatWeDoDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/residential-services" className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow group">
              <FaHeart className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{t('about.residentialServices')}</h3>
              <p className="text-secondary-700 mb-4">
                {t('about.residentialServicesDescription')}
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center">
                {t('common.learnMore')} →
              </span>
            </Link>

            <Link to="/commercial-services" className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow group">
              <FaWrench className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{t('about.commercialServices')}</h3>
              <p className="text-secondary-700 mb-4">
                {t('about.commercialServicesDescription')}
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center">
                {t('common.learnMore')} →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('about.brandsWeService')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('about.brandsWeServiceDescription')}
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
              {t('about.dontSeeBrand')} <Link to="/contact" className="text-primary-600 font-semibold hover:underline">{t('common.contact')}</Link> – {t('about.weServiceIt')}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">{t('about.ourValues')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.value1Title')}</h3>
              <p className="text-secondary-600">
                {t('about.value1Description')}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.value2Title')}</h3>
              <p className="text-secondary-600">
                {t('about.value2Description')}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.value3Title')}</h3>
              <p className="text-secondary-600">
                {t('about.value3Description')}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('about.value4Title')}</h3>
              <p className="text-secondary-600">
                {t('about.value4Description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">{t('about.meetOurTeam')}</h2>
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

