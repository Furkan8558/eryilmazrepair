import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  structuredData = null
}) => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  
  // Base keywords that appear on every page
  const baseKeywords = [
    // Turkish Keywords - Primary
    'beyaz eşya tamir servisi',
    'tamirci',
    'kombi klima tamir bakım servisi',
    'teknik servis',
    'bursa beyaz eşya servis',
    'bursa teknik servis',
    'bursa tamirci',
    'bursa kombi tamiri',
    'bursa klima tamiri',
    
    // Bursa District-Specific
    'nilüfer beyaz eşya tamiri',
    'osmangazi teknik servis',
    'yıldırım tamirci',
    'mudanya beyaz eşya servisi',
    'gemlik teknik servis',
    'gürsu tamirci',
    'kestel beyaz eşya tamiri',
    'inegöl teknik servis',
    'karacabey tamirci',
    'mustafakemalpaşa beyaz eşya servisi',
    
    // Appliance-Specific Turkish
    'buzdolabı tamiri bursa',
    'çamaşır makinesi tamiri bursa',
    'bulaşık makinesi tamiri bursa',
    'fırın tamiri bursa',
    'kurutma makinesi tamiri bursa',
    'kombi bakımı bursa',
    'klima bakımı bursa',
    'klima montajı bursa',
    
    // Service Types Turkish
    'beyaz eşya servisi bursa',
    'kombi servisi bursa',
    'klima servisi bursa',
    'teknik servis bursa',
    'tamir servisi bursa',
    'bakım servisi bursa',
    '7/24 teknik servis bursa',
    'acil tamirci bursa',
    
    // Brand-Specific Turkish
    'arçelik servisi bursa',
    'beko servisi bursa',
    'bosch servisi bursa',
    'siemens servisi bursa',
    'vestel servisi bursa',
    'lg servisi bursa',
    'samsung servisi bursa',
    'profilo servisi bursa',
    'grundig servisi bursa',
    'altus servisi bursa',
    'whirlpool servisi bursa',
    'electrolux servisi bursa',
    'vaillant servisi bursa',
    'baymak servisi bursa',
    'eca servisi bursa',
    'demirdöküm servisi bursa',
    'protherm servisi bursa',
    'buderus servisi bursa',
    'airfel servisi bursa',
    'ferroli servisi bursa',
    'daikin servisi bursa',
    'mitsubishi servisi bursa',
    'carrier servisi bursa',
    'alarko servisi bursa',
    
    // Problem-Specific Turkish
    'buzdolabı soğutmuyor bursa',
    'çamaşır makinesi çalışmıyor bursa',
    'bulaşık makinesi su almıyor bursa',
    'kombi ısıtmıyor bursa',
    'klima soğutmuyor bursa',
    'fırın ısınmıyor bursa',
    'kurutma makinesi kurutmuyor bursa',
    'beyaz eşya arıza servisi bursa',
    
    // Commercial Turkish
    'otel beyaz eşya tamiri bursa',
    'restoran mutfak tamiri bursa',
    'hastane teknik servis bursa',
    'fabrika beyaz eşya servisi bursa',
    'işyeri klima bakımı bursa',
    'toplu taşıma klima servisi bursa',
    
    // Quality & Urgency Turkish
    'garantili beyaz eşya tamiri',
    'hızlı teknik servis bursa',
    'profesyonel tamirci bursa',
    'uygun fiyat tamir servisi',
    'aynı gün tamir servisi bursa',
    'uzman teknisyen bursa',
    'kaliteli tamir servisi',
    
    // Seasonal Turkish
    'kış klima bakımı bursa',
    'yaz klima servisi bursa',
    'kombi kış bakımı bursa',
    'klima temizliği bursa',
    'kombi petek temizliği bursa',
    
    // Long-Tail Turkish
    'bursa da beyaz eşya tamircisi',
    'bursa en iyi teknik servis',
    'bursa güvenilir tamirci',
    'bursa beyaz eşya tamir fiyatları',
    'bursa kombi bakım fiyatları',
    'bursa klima montaj fiyatları',
    'bursa teknik servis randevu',
    'bursa acil beyaz eşya tamiri',
    
    // English Keywords
    'appliance repair bursa',
    'refrigerator repair bursa',
    'washing machine repair bursa',
    'dishwasher repair bursa',
    'oven repair bursa',
    'dryer repair bursa',
    'boiler repair bursa',
    'air conditioner repair bursa',
    'hvac service bursa',
    'appliance service bursa',
    'technical service bursa',
    '24/7 appliance repair',
    'emergency repair bursa',
    
    // Additional Turkish Variants
    'beyaz eşya onarım bursa',
    'cihaz tamiri bursa',
    'ev aletleri tamiri bursa',
    'elektronik tamiri bursa',
    'mekanik tamir bursa',
    'soğutma sistemleri bursa',
    'ısıtma sistemleri bursa',
    'iklimlendirme sistemleri bursa',
    
    // Location + Service Combinations
    'nilüfer kombi servisi',
    'osmangazi klima servisi',
    'yıldırım beyaz eşya tamiri',
    'mudanya teknik servis',
    'gemlik tamirci',
    'bursa merkez beyaz eşya servisi',
    
    // Question-Based Keywords
    'bursa da beyaz eşya tamircisi var mı',
    'bursa da en iyi teknik servis hangisi',
    'bursa beyaz eşya tamiri kaç lira',
    'kombi bakımı ne kadar bursa',
    'klima montajı nasıl yapılır',
    
    // Service Area Combinations
    'bursa çevre beyaz eşya servisi',
    'bursa banliyö tamirci',
    'bursa köy teknik servis',
    'bursa sanayi bölgesi tamir',
    
    // Multi-Service
    'kombi klima beyaz eşya servisi',
    'ısıtma soğutma sistemleri bursa',
    'ev tamirci servisi bursa',
    
    // Urgency & Quality Combined
    '7/24 acil tamirci bursa',
    'aynı gün garantili tamir bursa',
    'hızlı profesyonel servis bursa',
    
    // Additional Problem-Specific
    'kombi su akıtıyor bursa',
    'klima su damlatıyor bursa',
    'buzdolabı gürültü yapıyor bursa',
    'çamaşır makinesi titriyor bursa',
    'bulaşık makinesi koku yapıyor bursa',
    
    // Installation Services
    'kombi montaj bursa',
    'klima kurulum bursa',
    'beyaz eşya kurulum servisi',
    'yeni cihaz montajı bursa',
    
    // Maintenance Services
    'periyodik bakım servisi bursa',
    'yıllık bakım sözleşmesi',
    'koruyucu bakım bursa',
    'önleyici bakım servisi',
    
    // Parts & Warranty
    'yedek parça servisi bursa',
    'orijinal yedek parça bursa',
    'garantili yedek parça',
    'uygun fiyat yedek parça bursa'
  ];

  const allKeywords = [...new Set([...baseKeywords, ...keywords])];
  
  const currentUrl = `https://eryilmazteknik.com.tr${location.pathname}`;
  const siteName = 'Eryilmaz Teknik';
  const fullTitle = `${title} | ${siteName}`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Set or update meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic Meta Tags
    setMetaTag('description', description);
    setMetaTag('keywords', allKeywords.join(', '));
    setMetaTag('author', 'Eryilmaz Teknik');
    setMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Language & Location
    setMetaTag('language', lang === 'tr' ? 'Turkish' : 'English');
    setMetaTag('geo.region', 'TR-16');
    setMetaTag('geo.placename', 'Bursa');
    setMetaTag('geo.position', '40.1826;29.0665');
    setMetaTag('ICBM', '40.1826, 29.0665');
    
    // Open Graph Tags
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', currentUrl, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', `https://eryilmazteknik.com.tr${ogImage}`, true);
    setMetaTag('og:site_name', siteName, true);
    setMetaTag('og:locale', lang === 'tr' ? 'tr_TR' : 'en_US', true);
    
    // Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', `https://eryilmazteknik.com.tr${ogImage}`);
    
    // Business & Contact
    setMetaTag('business:contact_data:street_address', 'Bursa, Türkiye');
    setMetaTag('business:contact_data:locality', 'Bursa');
    setMetaTag('business:contact_data:region', 'Marmara');
    setMetaTag('business:contact_data:postal_code', '16000');
    setMetaTag('business:contact_data:country_name', 'Turkey');
    
    // Mobile App Capable
    setMetaTag('mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    setMetaTag('apple-mobile-web-app-title', siteName);
    
    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);
    
    // Alternate Language Links
    let alternateTR = document.querySelector('link[hreflang="tr"]');
    if (!alternateTR) {
      alternateTR = document.createElement('link');
      alternateTR.setAttribute('rel', 'alternate');
      alternateTR.setAttribute('hreflang', 'tr');
      document.head.appendChild(alternateTR);
    }
    alternateTR.setAttribute('href', currentUrl);
    
    let alternateEN = document.querySelector('link[hreflang="en"]');
    if (!alternateEN) {
      alternateEN = document.createElement('link');
      alternateEN.setAttribute('rel', 'alternate');
      alternateEN.setAttribute('hreflang', 'en');
      document.head.appendChild(alternateEN);
    }
    alternateEN.setAttribute('href', currentUrl);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }

  }, [title, description, allKeywords, currentUrl, fullTitle, lang, ogImage, ogType, structuredData]);

  return null;
};

export default SEO;
