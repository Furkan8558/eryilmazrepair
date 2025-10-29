import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Eager load critical pages
import Home from './pages/Home'

// Lazy load other pages for better performance
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const ResidentialServices = lazy(() => import('./pages/ResidentialServices'))
const CommercialServices = lazy(() => import('./pages/CommercialServices'))
const WhyChooseUs = lazy(() => import('./pages/WhyChooseUs'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const FAQ = lazy(() => import('./pages/FAQ'))
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'))
const Reviews = lazy(() => import('./pages/Reviews'))
const ApplianceCare = lazy(() => import('./pages/ApplianceCare'))
const ApplianceLifeGuide = lazy(() => import('./pages/ApplianceLifeGuide'))
const EnergySavingTips = lazy(() => import('./pages/EnergySavingTips'))
const FranchiseFinder = lazy(() => import('./pages/FranchiseFinder'))

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      <p className="mt-4 text-secondary-600">Yükleniyor...</p>
    </div>
  </div>
)

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/residential-services" element={<ResidentialServices />} />
            <Route path="/commercial-services" element={<CommercialServices />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/franchise-finder" element={<FranchiseFinder />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/appliance-care" element={<ApplianceCare />} />
            <Route path="/appliance-life-guide" element={<ApplianceLifeGuide />} />
            <Route path="/energy-saving-tips" element={<EnergySavingTips />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App

