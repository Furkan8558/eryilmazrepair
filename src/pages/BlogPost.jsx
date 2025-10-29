import { useParams, Link } from 'react-router-dom'
import { FaClock, FaUser, FaArrowLeft, FaTag } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import CallToAction from '../components/CallToAction'
import { getPostById, getRecentPosts } from '../data/blogPosts'

export default function BlogPost() {
  const { t } = useTranslation()
  const { postId } = useParams()
  const post = getPostById(postId)
  const recentPosts = getRecentPosts(3).filter(p => p.id !== postId)

  if (!post) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h2 className="mb-4">{t('blogPost.notFound')}</h2>
          <p className="text-xl text-secondary-600 mb-8">
            {t('blogPost.notFoundMessage')}
          </p>
          <Link to="/blog" className="btn-primary">
            {t('blogPost.backToBlog')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Article Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-white mb-6 hover:text-gray-200 transition-colors">
            <FaArrowLeft className="mr-2" />
            {t('blogPost.backToBlog')}
          </Link>
          
          <div className="inline-block bg-white bg-opacity-20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
            {post.category}
          </div>
          
          <h1 className="mb-6">{post.title}</h1>
          
          <div className="flex items-center text-gray-200">
            <FaUser className="mr-2" />
            <span className="mr-4">{post.author}</span>
            <FaClock className="mr-2" />
            <span className="mr-4">{post.readTime}</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-secondary-200 h-96 rounded-lg mb-8 flex items-center justify-center">
                <span className="text-secondary-400 text-xl">{t('blogPost.featuredImage')}</span>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-secondary-700 mb-6">{post.excerpt}</p>
                <p className="text-secondary-700 mb-4">{post.content}</p>
                
                {/* Add more content paragraphs here */}
                <p className="text-secondary-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 className="mt-8 mb-4">{t('blogPost.keyTakeaways')}</h2>
                <ul className="list-disc pl-6 mb-6 text-secondary-700">
                  <li>{t('blogPost.takeaway1')}</li>
                  <li>{t('blogPost.takeaway2')}</li>
                  <li>{t('blogPost.takeaway3')}</li>
                  <li>{t('blogPost.takeaway4')}</li>
                </ul>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-secondary-200">
                <div className="flex items-center flex-wrap gap-2">
                  <FaTag className="text-secondary-400" />
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Recent Posts */}
                <div className="card mb-8">
                  <h3 className="text-xl font-bold mb-4">{t('blogPost.recentPosts')}</h3>
                  <div className="space-y-4">
                    {recentPosts.map((recentPost) => (
                      <Link
                        key={recentPost.id}
                        to={`/blog/${recentPost.id}`}
                        className="block group"
                      >
                        <h4 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors mb-1">
                          {recentPost.title}
                        </h4>
                        <p className="text-sm text-secondary-600">{recentPost.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-primary-600 text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">{t('blogPost.needHelp')}</h3>
                  <p className="mb-4">
                    {t('blogPost.needHelpDescription')}
                  </p>
                  <Link to="/franchise-finder" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 w-full text-center">
                    {t('blogPost.scheduleService')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}

