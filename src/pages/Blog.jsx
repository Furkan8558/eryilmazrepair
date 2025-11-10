import { Link } from 'react-router-dom'
import { FaClock, FaUser, FaArrowRight, FaRss } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import CallToAction from '../components/CallToAction'
import SEO from '../components/SEO'
import { blogPosts, getPostsByCategory } from '../data/blogPosts'

function BlogCard({ post }) {
  const { t } = useTranslation()
  
  // Get category display name based on language
  const getCategoryName = (category) => {
    const categoryMap = {
      'maintenance': { en: 'Maintenance Tips', tr: 'Bakım İpuçları' },
      'how-to': { en: 'How-To Guides', tr: 'Nasıl Yapılır' },
      'troubleshooting': { en: 'Troubleshooting', tr: 'Sorun Giderme' }
    };
    const lang = t('nav.home') === 'Home' ? 'en' : 'tr';
    return categoryMap[category]?.[lang] || category;
  };
  
  return (
    <article className="card group p-0 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            // Fallback to gradient background if image fails to load
            e.target.style.display = 'none';
            const parentElement = e.target.parentElement;
            parentElement.classList.add('bg-gradient-to-br', 'from-primary-500', 'to-primary-700', 'flex', 'items-center', 'justify-center');
            
            // Safely create and append text element (prevents XSS)
            const span = document.createElement('span');
            span.className = 'text-white text-lg';
            span.textContent = t('blog.blogImage');
            parentElement.appendChild(span);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {getCategoryName(post.category)}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-sm text-secondary-500 mb-3">
          <FaUser className="mr-2" />
          <span>{post.author}</span>
          <span className="mx-3">•</span>
          <FaClock className="mr-2" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>

        <p className="text-secondary-600 mb-4">{post.excerpt}</p>

        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
        >
          {t('blog.readMore')}
          <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </article>
  )
}

export default function Blog() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const filteredPosts = getPostsByCategory(selectedCategory)
  
  const categories = [
    { id: 'all', name: t('blog.allPosts') || 'Tüm Yazılar' },
    { id: 'maintenance', name: t('blog.maintenance') || 'Bakım İpuçları' },
    { id: 'how-to', name: t('blog.howTo') || 'Nasıl Yapılır' },
    { id: 'troubleshooting', name: t('blog.troubleshooting') || 'Sorun Giderme' }
  ]

  // Blog Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Eryilmaz Teknik Blog",
    "description": "Beyaz eşya bakımı, tamir ipuçları ve nasıl yapılır rehberleri",
    "publisher": {
      "@type": "Organization",
      "name": "Eryilmaz Teknik"
    }
  }

  return (
    <div>
      <SEO 
        title={t('blog.title') || "Blog | Eryilmaz Teknik"}
        description={t('blog.subtitle') || "Beyaz eşya bakımı, tamir ipuçları ve kullanım rehberleri. Cihazlarınızın ömrünü uzatın."}
        keywords={[
          'beyaz eşya bakım ipuçları',
          'kombi bakımı nasıl yapılır',
          'klima temizliği',
          'buzdolabı bakımı',
          'çamaşır makinesi temizliği',
          'enerji tasarrufu ipuçları',
          'cihaz ömrü uzatma',
          'tamir rehberi'
        ]}
        structuredData={structuredData}
        ogType="blog"
      />
      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <FaRss className="text-5xl mx-auto mb-4" />
          <h1 className="mb-4">{t('blog.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 hover:shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary-600 text-lg">{t('blog.noPosts') || 'Bu kategoride yazı bulunamadı.'}</p>
            </div>
          )}
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

