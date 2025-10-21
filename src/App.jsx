import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import ResidentialServices from './pages/ResidentialServices'
import CommercialServices from './pages/CommercialServices'
import WhyChooseUs from './pages/WhyChooseUs'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import FAQ from './pages/FAQ'
import ServiceAreas from './pages/ServiceAreas'
import Reviews from './pages/Reviews'
import ApplianceCare from './pages/ApplianceCare'
import ApplianceLifeGuide from './pages/ApplianceLifeGuide'
import EnergySavingTips from './pages/EnergySavingTips'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/residential-services" element={<ResidentialServices />} />
          <Route path="/commercial-services" element={<CommercialServices />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/appliance-care" element={<ApplianceCare />} />
          <Route path="/appliance-life-guide" element={<ApplianceLifeGuide />} />
          <Route path="/energy-saving-tips" element={<EnergySavingTips />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

