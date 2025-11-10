import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaPhone, FaBars, FaTimes, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import getCompanyInfo from '../data/companyInfo'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()
  const companyInfo = getCompanyInfo()

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
              <Link to="/service-finder" className="flex items-center hover:text-primary-100 transition-colors">
                <FaMapMarkerAlt className="mr-1.5 text-xs" />
                <span>{t('header.findLocation')}</span>
              </Link>
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
            <div className="text-xl md:text-2xl font-bold text-primary-600">
              <span className="text-gradient">Eryilmaz Teknik</span>
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
                     <div className="absolute left-0 top-full mt-2 w-[600px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-4 border-primary-500">
                       <div className="px-8 py-6">
                         <div className="flex gap-12 justify-start">
                           {item.submenu.map((subItem, idx) => (
                             <div key={idx}>
                               {subItem.items ? (
                                 <div className="min-w-[220px]">
                                   <div className="font-bold text-primary-600 text-base mb-3 uppercase tracking-wide">
                                     {subItem.name}
                                   </div>
                                   <div className="space-y-1.5">
                                     {subItem.items.map((nestedItem) => (
                                       <Link
                                         key={nestedItem.path}
                                         to={nestedItem.path}
                                         className="block text-sm text-secondary-700 hover:text-primary-600 hover:translate-x-1 transition-all py-1.5 whitespace-nowrap"
                                       >
                                         {nestedItem.name}
                                       </Link>
                                     ))}
                                   </div>
                                 </div>
                               ) : (
                                 <div className="min-w-[220px]">
                                   <Link
                                     to={subItem.path}
                                     className="block text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors whitespace-nowrap"
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
                     // Single column layout for simple lists (About menu) - SAME WIDTH AS MULTI-COLUMN
                     <div className="absolute left-0 top-full mt-2 w-[600px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-4 border-primary-500">
                       <div className="px-8 py-6">
                         <div className="space-y-1.5">
                           {item.submenu.map((subItem, idx) => (
                             <Link
                               key={idx}
                               to={subItem.path}
                               className="block text-sm text-secondary-700 hover:text-primary-600 hover:translate-x-1 transition-all py-1.5 whitespace-nowrap"
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
            <Link to="/service-finder" className="btn-primary text-sm py-2 px-4 flex items-center justify-center text-center">
              {t('common.scheduleService')}
            </Link>
          </div>

          {/* Mobile Language Switcher & Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-secondary-700 hover:text-primary-600 transition-colors"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-secondary-200 pt-4 max-h-[70vh] overflow-y-auto">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                    className={`text-base font-semibold transition-colors hover:text-primary-600 block ${
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
                            <div className="mb-3">
                              <div className="font-medium text-primary-600 text-sm mb-1.5 uppercase tracking-wide">
                                {subItem.name}
                              </div>
                              {subItem.items.map((nestedItem) => (
                                <Link
                                  key={nestedItem.path}
                                  to={nestedItem.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block text-secondary-600 hover:text-primary-600 transition-colors text-sm py-1.5 pl-2 font-normal"
                                >
                                  {nestedItem.name}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link
                              to={subItem.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-secondary-700 hover:text-primary-600 transition-colors text-sm font-normal py-1"
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
            <div className="mt-6 pt-4 border-t border-secondary-200 space-y-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center text-primary-600 font-semibold text-base"
              >
                <FaPhone className="mr-2" />
                {companyInfo.phone}
              </a>
              <Link
                to="/service-finder"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary block text-center py-3"
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

