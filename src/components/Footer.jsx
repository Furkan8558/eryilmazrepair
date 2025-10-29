import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaClock } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import getCompanyInfo from '../data/companyInfo'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  const companyInfo = getCompanyInfo()

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-primary-500 mb-3">{companyInfo.fullName}</h3>
            <p className="text-secondary-300 mb-3 text-xs">
              {t('common.professionalDescription')}
            </p>
            <div className="flex space-x-4">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-500 transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href={companyInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-500 transition-colors"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-500 transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-500 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">{t('footer.quickLinks')}</h4>
            <ul className="space-y-1.5">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/residential-services" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('nav.residentialServices')}
                </Link>
              </li>
              <li>
                <Link to="/commercial-services" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('nav.commercialServices')}
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('nav.whyUs')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('nav.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('nav.contactUs')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-3">{t('footer.services')}</h4>
            <ul className="space-y-1.5">
              <li>
                <Link to="/services/refrigerator-repair" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('footer.refrigeratorRepair')}
                </Link>
              </li>
              <li>
                <Link to="/services/dishwasher-repair" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('footer.dishwasherRepair')}
                </Link>
              </li>
              <li>
                <Link to="/services/oven-repair" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('footer.ovenRepair')}
                </Link>
              </li>
              <li>
                <Link to="/services/washer-repair" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('footer.washerRepair')}
                </Link>
              </li>
              <li>
                <Link to="/services/dryer-repair" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('footer.dryerRepair')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-500 hover:text-primary-400 transition-colors text-xs">
                  {t('nav.viewAllServices')} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-3">{t('footer.contactUs')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-primary-500 mr-2 flex-shrink-0 text-xs" />
                <Link to="/franchise-finder" className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {t('header.findLocation')}
                </Link>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-500 mr-2 text-xs" />
                <a href={`tel:${companyInfo.phone}`} className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-500 mr-2 text-xs" />
                <a href={`mailto:${companyInfo.email}`} className="text-secondary-300 hover:text-primary-500 transition-colors text-xs">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <FaClock className="text-primary-500 mt-0.5 mr-2 flex-shrink-0 text-xs" />
                <div className="text-secondary-300 text-xs">
                  <div>{t('common.monFri')}: {companyInfo.hours.weekday}</div>
                  <div>{t('common.saturday')}: {companyInfo.hours.saturday}</div>
                  <div>{t('common.sunday')}: {companyInfo.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-secondary-400 text-xs">
            <p>© {currentYear} {companyInfo.fullName}. {t('common.allRightsReserved')}.</p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-primary-500 transition-colors">
                {t('common.privacyPolicy')}
              </Link>
              <Link to="/terms-of-service" className="hover:text-primary-500 transition-colors">
                {t('common.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

