import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaPhone, FaBars, FaTimes, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { companyInfo } from '../data/companyInfo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { 
      name: 'Residential', 
      path: '/residential-services',
      submenu: [
        { 
          name: 'Appliance Repair And Service',
          items: [
            { name: 'Appliance Wellness Program', path: '/services/appliance-wellness' },
            { name: 'Dishwasher Repair And Service', path: '/services/dishwasher-repair' },
            { name: 'Electric Dryer Repair And Service', path: '/services/dryer-repair' },
            { name: 'Freezer Repair And Service', path: '/services/freezer-repair' },
            { name: 'Garbage Disposal Repair And Replacement', path: '/services/garbage-disposal-repair' },
            { name: 'Gas Dryer Repair And Service', path: '/services/gas-dryer-repair' },
            { name: 'Grill And Barbeque Repair And Service', path: '/services/grill-repair' },
            { name: 'Ice Machine Repair And Service', path: '/services/ice-maker-repair' },
            { name: 'Ice Maker Repair And Service', path: '/services/ice-maker-repair' },
            { name: 'Microwave Oven Repair And Service', path: '/services/microwave-repair' },
            { name: 'Outdoor Kitchen Appliance Repair And Service', path: '/services/outdoor-kitchen-repair' },
            { name: 'Oven Repair And Service', path: '/services/oven-repair' },
            { name: 'Range And Stove Top Repair And Service', path: '/services/range-repair' },
            { name: 'Refrigerator Repair And Service', path: '/services/refrigerator-repair' },
            { name: 'Trash Compactor Repair And Service', path: '/services/trash-compactor-repair' },
            { name: 'Vent Hood Repair And Service', path: '/services/vent-hood-repair' },
            { name: 'Washing Machine Repair And Service', path: '/services/washer-repair' },
            { name: 'Wine Cooler Repair And Service', path: '/services/wine-cooler-repair' },
          ]
        },
        { name: 'Dryer Vent Cleaning', path: '/services/dryer-vent-cleaning' }
      ]
    },
    { 
      name: 'Commercial', 
      path: '/commercial-services',
      submenu: [
        { 
          name: 'Appliance Repair And Service',
          items: [
            { name: 'Dishwasher Repair And Service', path: '/services/dishwasher-repair' },
            { name: 'Freezer Repair And Service', path: '/services/freezer-repair' },
            { name: 'Gas Dryer Repair And Service', path: '/services/gas-dryer-repair' },
            { name: 'Ice Machine Repair And Service', path: '/services/ice-maker-repair' },
            { name: 'Ice Maker Repair And Service', path: '/services/ice-maker-repair' },
            { name: 'Oven Repair And Service', path: '/services/oven-repair' },
            { name: 'Refrigerator Repair And Service', path: '/services/refrigerator-repair' },
            { name: 'Washing Machine Repair And Service', path: '/services/washer-repair' },
          ]
        },
        { name: 'Dryer Vent Cleaning', path: '/services/dryer-vent-cleaning' }
      ]
    },
    { 
      name: 'Why Us', 
      path: '/why-choose-us',
      submenu: [
        { 
          name: 'Our Approach',
          items: [
            { name: 'Qualified Experts', path: '/why-choose-us#qualified-experts' },
            { name: 'Professionals', path: '/why-choose-us#professionals' },
            { name: 'Scheduled Appointment Times', path: '/why-choose-us#scheduled-appointments' },
            { name: 'Upfront Pricing', path: '/why-choose-us#upfront-pricing' },
            { name: 'Appliance Wellness Program', path: '/services/appliance-wellness' },
          ]
        },
        { 
          name: 'Our Results',
          items: [
            { name: 'Testimonials', path: '/reviews' },
          ]
        },
        { 
          name: 'Our Commitment',
          items: [
            { name: 'The Neighborly Done Right Promise®', path: '/why-choose-us#commitment' },
          ]
        }
      ]
    },
    { 
      name: 'About', 
      path: '/about',
      submenu: [
        { name: 'About Mr. Appliance', path: '/about' },
        { name: 'Our Values', path: '/about#values' },
        { name: 'Brands We Service', path: '/about#brands' },
        { name: 'A Neighborly Company', path: '/about#neighborly' },
        { name: 'The Neighborly App', path: '/about#app' },
        { name: 'Own A Franchise', path: '/franchise' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
    { 
      name: 'Resources', 
      path: '/blog',
      submenu: [
        { name: 'Blog', path: '/blog' },
        { 
          name: 'Expert Tips',
          items: [
            { name: 'Appliance Care', path: '/blog?category=appliance-care' },
            { name: 'Appliance Life Guide', path: '/blog?category=appliance-life-guide' },
            { name: 'Dryer Troubleshooting', path: '/blog?category=dryer-troubleshooting' },
            { name: 'Energy Saving Tips', path: '/blog?category=energy-saving' },
            { name: 'Frequently Asked Questions', path: '/faq' },
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
                <span>Mon-Fri: {companyInfo.hours.weekday}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-1.5 text-xs" />
                <span>{companyInfo.address.city}, {companyInfo.address.state}</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">Emergency Service Available 24/7</span>
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
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              <FaPhone className="mr-2 text-sm" />
              <span className="text-sm">{companyInfo.phone}</span>
            </a>
            <Link to="/contact" className="btn-primary text-sm py-2 px-4">
              Schedule Service
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
                Schedule Service
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

