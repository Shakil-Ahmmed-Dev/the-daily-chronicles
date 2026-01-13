import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Search, Cloud, Menu, X, User, Share2, Bookmark, Play, TrendingUp, ChevronRight, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

// Mock data
const breakingNews = [
  "Major Supreme Court Decision Expected Today on Healthcare Reform",
  "Stock Markets Reach Record Highs Amid Economic Recovery",
  "New Climate Agreement Signed at International Summit",
  "Technology Giants Face New Regulatory Challenges"
]

const weatherData = {
  temperature: 72,
  condition: "Partly Cloudy",
  location: "Washington, DC",
  icon: "⛅"
}

const featuredStory = {
  title: "Historic Climate Legislation Passes Congress in Landmark Vote",
  excerpt: "In a bipartisan effort that spanned months of negotiations, Congress today passed what lawmakers are calling the most significant climate legislation in a generation. The bill aims to cut carbon emissions by 40% by 2030.",
  author: "Sarah Mitchell",
  date: "January 13, 2026",
  image: "https://images.unsplash.com/photo-1569163139394-de39cb174b4f?q=80&w=1200",
  category: "Politics",
  readTime: "8 min read"
}

const articles = {
  politics: [
    {
      title: "Senate Committee Approves Infrastructure Spending Bill",
      excerpt: "The $1.2 trillion proposal now heads to the full Senate for debate next week.",
      author: "Michael Chen",
      time: "2 hours ago"
    },
    {
      title: "State Governors Meet to Discuss Education Reform",
      excerpt: "Annual gathering focuses on post-pandemic learning recovery and funding.",
      author: "Jennifer Walsh",
      time: "4 hours ago"
    }
  ],
  business: [
    {
      title: "Tech Giants Report Record Quarterly Earnings",
      excerpt: "Major technology companies exceed analyst expectations amid AI boom.",
      author: "David Kumar",
      time: "1 hour ago"
    },
    {
      title: "Federal Reserve Signals Interest Rate Decision",
      excerpt: "Central bank hints at possible rate cuts in coming months.",
      author: "Robert Thompson",
      time: "3 hours ago"
    }
  ],
  technology: [
    {
      title: "Breakthrough in Quantum Computing Announced",
      excerpt: "Research team achieves major milestone in processing power.",
      author: "Lisa Park",
      time: "30 minutes ago"
    },
    {
      title: "AI Regulations Face Congressional Review",
      excerpt: "Lawmakers debate oversight framework for artificial intelligence development.",
      author: "James Wilson",
      time: "2 hours ago"
    }
  ],
  sports: [
    {
      title: "National Championship: Underdogs Shock Favorite",
      excerpt: "Incredible comeback stuns fans at sold-out stadium.",
      author: "Carlos Rodriguez",
      time: "1 hour ago"
    },
    {
      title: "Olympic Committee Announces Host City Selection",
      excerpt: "International Olympic Committee makes decision for 2032 Summer Games.",
      author: "Amanda Foster",
      time: "5 hours ago"
    }
  ]
}

const opinionArticles = [
  {
    title: "Why Democracy Requires More Than Just Voting",
    excerpt: "Citizen engagement must extend beyond the ballot box for a healthy republic.",
    author: "Dr. Eleanor Vance",
    role: "Political Analyst",
    time: "Today"
  },
  {
    title: "The Hidden Costs of Urban Development",
    excerpt: "Gentrification continues to displace longtime residents from their communities.",
    author: "Marcus Johnson",
    role: "Urban Planning Expert",
    time: "Yesterday"
  },
  {
    title: "Technology's Promise and Peril in Education",
    excerpt: "Digital tools offer opportunities but also risk widening achievement gaps.",
    author: "Prof. Amanda Liu",
    role: "Education Policy Specialist",
    time: "2 days ago"
  }
]

const videos = [
  {
    title: "Breaking Down the Climate Bill: What You Need to Know",
    duration: "5:42",
    thumbnail: "https://images.unsplash.com/photo-1569163139394-de39cb174b4f?q=80&w=600",
    views: "125K"
  },
  {
    title: "Exclusive Interview: Treasury Secretary on Economy",
    duration: "12:18",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
    views: "89K"
  },
  {
    title: "Inside the Lab: Revolutionary Medical Research",
    duration: "8:25",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600",
    views: "67K"
  },
  {
    title: "Special Report: Future of Renewable Energy",
    duration: "15:03",
    thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600",
    views: "203K"
  }
]

function BreakingNewsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % breakingNews.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPaused])

  return (
    <div 
      className="bg-red-600 text-white py-2 px-4 overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center max-w-7xl mx-auto">
        <span className="bg-red-800 px-3 py-1 rounded text-sm font-bold mr-4 whitespace-nowrap">
          BREAKING
        </span>
        <div className="flex-1 overflow-hidden">
          <p className="whitespace-nowrap animate-pulse">
            {breakingNews[currentIndex]}
          </p>
        </div>
      </div>
    </div>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  return (
    <>
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>Vol. 145, No. 37</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span>{weatherData.icon}</span>
              <span>{weatherData.temperature}°F</span>
              <span>{weatherData.location}</span>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-serif text-slate-900">The Daily Chronicles</h1>
              <nav className="hidden lg:flex space-x-6">
                {['Politics', 'Business', 'Technology', 'Sports', 'Culture', 'World'].map((item) => (
                  <button key={item} className="text-gray-700 hover:text-slate-900 font-medium transition-colors">
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              {showSearch && (
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                  <Search className="w-4 h-4 text-gray-500 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search news..."
                    className="bg-transparent outline-none text-sm w-64"
                    autoFocus
                  />
                </div>
              )}
              
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden pb-4 border-t">
              {['Politics', 'Business', 'Technology', 'Sports', 'Culture', 'World'].map((item) => (
                <button key={item} className="block w-full text-left py-2 px-4 hover:bg-gray-50">
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  )
}

interface Article {
  title: string
  excerpt: string
  author: string
  time?: string
  date?: string
  category?: string
  readTime?: string
  image?: string
}

interface OpinionArticle {
  title: string
  excerpt: string
  author: string
  role: string
  time: string
}

interface Video {
  title: string
  duration: string
  thumbnail: string
  views: string
}

function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  if (featured) {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">{article.category}</span>
            <span className="text-xs text-gray-500">{article.readTime}</span>
          </div>
          <h2 className="text-2xl font-serif text-slate-900 mb-3">{article.title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">{article.author}</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <Bookmark className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <Share2 className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
      <h3 className="font-serif text-lg text-slate-900 mb-2 line-clamp-2">{article.title}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{article.author}</span>
        <span>{article.time}</span>
      </div>
    </div>
  )
}

function OpinionCard({ article }: { article: OpinionArticle }) {
  return (
    <div className="bg-linear-to-r from-slate-50 to-white border-l-4 border-slate-900 rounded p-6">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-serif text-xl text-slate-900 mb-2">{article.title}</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="font-medium">{article.author}</span>
            <span>•</span>
            <span>{article.role}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-3">{article.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{article.time}</span>
        <ChevronRight className="w-4 h-4 text-slate-900" />
      </div>
    </div>
  )
}

function VideoCard({ video }: { video: Video }) {
  return (
    <div className="relative group cursor-pointer">
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <h4 className="mt-2 font-serif text-sm text-slate-900 line-clamp-2 group-hover:text-slate-700 transition-colors">
        {video.title}
      </h4>
      <p className="text-xs text-gray-500 mt-1">{video.views} views</p>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreakingNewsBanner />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <ArticleCard article={featuredStory} featured />
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            {/* Politics Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif text-slate-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Politics
              </h2>
              <div className="space-y-4">
                {articles.politics.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
              </div>
            </section>

            {/* Business Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif text-slate-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Business
              </h2>
              <div className="space-y-4">
                {articles.business.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
              </div>
            </section>

            {/* Technology Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif text-slate-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Technology
              </h2>
              <div className="space-y-4">
                {articles.technology.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Sports Section */}
            <section>
              <h2 className="text-xl font-serif text-slate-900 mb-4">Sports</h2>
              <div className="space-y-4">
                {articles.sports.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
              </div>
            </section>

            {/* Weather Widget */}
            <section className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif text-lg text-slate-900 mb-4 flex items-center">
                <Cloud className="w-5 h-5 mr-2" />
                Weather
              </h3>
              <div className="text-center">
                <div className="text-4xl mb-2">{weatherData.icon}</div>
                <div className="text-2xl font-bold text-slate-900">{weatherData.temperature}°F</div>
                <div className="text-gray-600">{weatherData.condition}</div>
                <div className="text-sm text-gray-500 mt-2">{weatherData.location}</div>
              </div>
            </section>
          </div>
        </div>

        {/* Opinion Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-slate-900 mb-6">Opinion & Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opinionArticles.map((article, index) => (
              <OpinionCard key={index} article={article} />
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-slate-900 mb-6">Video News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-2xl mb-4 text-white">The Daily Chronicles</h3>
              <p className="text-slate-400 text-sm">
                Your trusted source for national news, politics, business, and cultural insights since 1881.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Sections</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Politics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Culture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">World</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Advertise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-slate-400">
                Subscribe to our newsletter for daily updates
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2026 The Daily Chronicles. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}