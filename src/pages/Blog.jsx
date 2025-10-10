import { Link } from 'react-router-dom'
import { FaClock, FaUser, FaArrowRight, FaRss } from 'react-icons/fa'
import CallToAction from '../components/CallToAction'
import { blogPosts } from '../data/blogPosts'

function BlogCard({ post }) {
  return (
    <article className="card group">
      <div className="bg-secondary-200 h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <span className="text-secondary-400">Blog Image</span>
      </div>
      
      <div className="flex items-center text-sm text-secondary-500 mb-3">
        <FaUser className="mr-2" />
        <span>{post.author}</span>
        <span className="mx-3">•</span>
        <FaClock className="mr-2" />
        <span>{post.readTime}</span>
      </div>

      <div className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
        {post.category}
      </div>

      <h3 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </h3>

      <p className="text-secondary-600 mb-4">{post.excerpt}</p>

      <Link
        to={`/blog/${post.id}`}
        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
      >
        Read More
        <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
      </Link>
    </article>
  )
}

export default function Blog() {
  const categories = [...new Set(blogPosts.map(post => post.category))]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom text-center">
          <FaRss className="text-5xl mx-auto mb-4" />
          <h1 className="mb-4">Blog & Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tips, guides, and expert advice for maintaining and repairing your appliances.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold">
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-lg font-semibold hover:bg-secondary-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

