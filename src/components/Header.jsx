import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaPhone, FaBars, FaTimes, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { companyInfo } from '../data/companyInfo'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const navigation = [
    { 
      name: t('nav.residential'), 
      path: '/residential-services',
      submenu: [
        { 
          name: t('nav.applianceRepair'),
          items: [
            { name: t('services.dishwasherrepair.name'), path: '/services/dishwasher-repair' },
            { name: t('services.dryerrepair.name'), path: '/services/dryer-repair' },
            { name: t('services.garbagedisposalrepair.name'), path: '/services/garbage-disposal-repair' },
            { name: t('services.icemakerrepair.name'), path: '/services/ice-maker-repair' },
            { name: t('services.microwaverepair.name'), path: '/services/microwave-repair' },
            { name: t('services.ovenrepair.name'), path: '/services/oven-repair' },
            { name: t('services.refrigeratorrepair.name'), path: '/services/refrigerator-repair' },
            { name: t('services.washerrepair.name'), path: '/services/washer-repair' },
          ]
        },
        { 
          name: t('nav.heatingCooling'),
          items: [
            { name: t('services.combiboilerrepair.name'), path: '/services/combi-boiler-repair' },
            { name: t('services.airconditionerrepair.name'), path: '/services/air-conditioner-repair' },
            { name: t('services.radiatorrepair.name'), path: '/services/radiator-repair' },
          ]
        }
      ]
    },
    { 
      name: t('nav.commercial'), 
      path: '/commercial-services',
      submenu: [
        { 
          name: t('nav.applianceRepair'),
          items: [
            { name: t('services.dishwasherrepair.name'), path: '/services/dishwasher-repair' },
            { name: t('services.icemakerrepair.name'), path: '/services/ice-maker-repair' },
            { name: t('services.ovenrepair.name'), path: '/services/oven-repair' },
            { name: t('services.refrigeratorrepair.name'), path: '/services/refrigerator-repair' },
            { name: t('services.washerrepair.name'), path: '/services/washer-repair' },
            { name: t('services.dryerrepair.name'), path: '/services/dryer-repair' },
          ]
        }
      ]
    },
    { 
      name: t('nav.whyUs'), 
      path: '/why-choose-us',
      submenu: [
        { 
          name: t('nav.ourApproach'),
          items: [
            { name: t('nav.qualifiedExperts'), path: '/why-choose-us#qualified-experts' },
            { name: t('nav.professionals'), path: '/why-choose-us#professionals' },
            { name: t('nav.scheduledAppointments'), path: '/why-choose-us#scheduled-appointments' },
            { name: t('nav.upfrontPricing'), path: '/why-choose-us#upfront-pricing' },
          ]
        },
        { 
          name: t('nav.ourResults'),
          items: [
            { name: t('nav.testimonials'), path: '/reviews' },
          ]
        }
      ]
    },
    { 
      name: t('nav.about'), 
      path: '/about',
      submenu: [
        { name: t('nav.eryilmazService'), path: '/about' },
        { name: t('nav.ourValues'), path: '/about#values' },
        { name: t('nav.brandsWeService'), path: '/about#brands' },
        { name: t('nav.contactUs'), path: '/contact' },
      ]
    },
    { 
      name: t('nav.resources'), 
      path: '/blog',
      submenu: [
        { name: t('nav.blog'), path: '/blog' },
        { 
          name: t('nav.expertTips'),
          items: [
            { name: t('nav.applianceCare'), path: '/appliance-care' },
            { name: t('nav.applianceLifeGuide'), path: '/appliance-life-guide' },
            { name: t('nav.energySavingTips'), path: '/energy-saving-tips' },
            { name: t('nav.faq'), path: '/faq' },
          ]
        }
      ]
    },
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-1.5 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaClock className="mr-1.5 text-xs" />
                <span>{t('common.monFri')}: {companyInfo.hours.weekday}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-1.5 text-xs" />
                <span>{companyInfo.address.city}, {companyInfo.address.state}</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">{t('common.emergency')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-lg md:text-xl font-bold text-primary-600">
              <span className="text-gradient">{companyInfo.name}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navigation.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 px-2 py-1 ${
                    isActive(item.path) ? 'text-primary-600' : 'text-secondary-700'
                  }`}
                >
                  {item.name}
                </Link>
                 {item.submenu && (
                   // Check if submenu has nested items (categories) or simple list
                   item.submenu.some(subItem => subItem.items) ? (
                     // Multi-column layout for menus with categories (Residential, Commercial, Why Us, Resources)
                     <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-secondary-200">
                       <div className="py-4 px-8">
                         <div className="flex gap-12 justify-start">
                           {item.submenu.map((subItem, idx) => (
                             <div key={idx}>
                               {subItem.items ? (
                                 <div className="min-w-[200px]">
                                   <div className="font-semibold text-primary-600 text-xs mb-2 uppercase">
                                     {subItem.name}
                                   </div>
                                   <div className="space-y-1">
                                     {subItem.items.map((nestedItem) => (
                                       <Link
                                         key={nestedItem.path}
                                         to={nestedItem.path}
                                         className="block text-xs text-secondary-700 hover:text-primary-600 transition-colors py-1 whitespace-nowrap"
                                       >
                                         {nestedItem.name}
                                       </Link>
                                     ))}
                                   </div>
                                 </div>
                               ) : (
                                 <div className="min-w-[180px]">
                                   <Link
                                     to={subItem.path}
                                     className="block text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors whitespace-nowrap"
                                   >
                                     {subItem.name}
                                   </Link>
                                 </div>
                               )}
                             </div>
                           ))}
                         </div>
                       </div>
                     </div>
                   ) : (
                     // Single column layout for simple lists (About menu)
                     <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[240px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-secondary-200">
                       <div className="py-3 px-4">
                         <div className="space-y-1">
                           {item.submenu.map((subItem, idx) => (
                             <Link
                               key={idx}
                               to={subItem.path}
                               className="block text-xs text-secondary-700 hover:text-primary-600 hover:bg-primary-50 transition-colors py-2 px-3 rounded whitespace-nowrap"
                             >
                               {subItem.name}
                             </Link>
                           ))}
                         </div>
                       </div>
                     </div>
                   )
                 )}
              </div>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageSwitcher />
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              <FaPhone className="mr-2 text-sm" />
              <span className="text-sm">{companyInfo.phone}</span>
            </a>
            <Link to="/contact" className="btn-primary text-sm py-2 px-4">
              {t('common.scheduleService')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-secondary-700 hover:text-primary-600 transition-colors"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-secondary-200 pt-4 max-h-96 overflow-y-auto">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                    className={`font-semibold transition-colors hover:text-primary-600 block ${
                      isActive(item.path) ? 'text-primary-600' : 'text-secondary-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, idx) => (
                        <div key={idx}>
                          {subItem.items ? (
                            <div className="mb-2">
                              <div className="font-semibold text-primary-600 text-sm mb-1">
                                {subItem.name}
                              </div>
                              {subItem.items.map((nestedItem) => (
                                <Link
                                  key={nestedItem.path}
                                  to={nestedItem.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block text-secondary-600 hover:text-primary-600 transition-colors text-sm py-1 pl-2"
                                >
                                  {nestedItem.name}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link
                              to={subItem.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-secondary-700 hover:text-primary-600 transition-colors text-sm font-semibold"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 space-y-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center text-primary-600 font-semibold"
              >
                <FaPhone className="mr-2" />
                {companyInfo.phone}
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary block text-center"
              >
                {t('common.scheduleService')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

