import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import SidebarSection from './components/SidebarSection';
import Footer from './components/Footer';

// Placeholder data - in a real app, this would come from an API or CMS
const featuredArticleData = {
  slug: "future-of-investment-2024",
  title: "The Future of Investment: Trends to Watch in 2024",
  imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", // Replace with a relevant, high-quality image
  date: "October 26, 2023",
  author: "Jane Doe",
  excerpt: "Dive deep into the evolving landscape of investment. Discover key trends, emerging technologies, and strategic insights that will shape financial markets in the coming year. From AI-driven analytics to sustainable investing, we cover what you need to know."
};

const recentArticlesData = [
  {
    slug: "understanding-market-volatility",
    title: "Understanding Market Volatility",
    date: "October 25, 2023",
    summary: "A brief look into the factors causing market swings and how to navigate them effectively...",
    // thumbnailUrl: "https://via.placeholder.com/300x150?text=Volatility"
  },
  {
    slug: "sustainable-investing-growth",
    title: "Sustainable Investing: A Growing Trend",
    date: "October 24, 2023",
    summary: "Exploring the rise of ESG criteria in modern investment portfolios and its impact...",
    // thumbnailUrl: "https://via.placeholder.com/300x150?text=ESG"
  },
  {
    slug: "tech-stocks-good-bet",
    title: "Tech Stocks: Still a Good Bet?",
    date: "October 23, 2023",
    summary: "An analysis of the technology sector's performance and future outlook for investors...",
    // thumbnailUrl: "https://via.placeholder.com/300x150?text=Tech"
  }
];

const categoriesData = [
  { name: "Market Analysis", href: "/categories/market-analysis", count: 12 },
  { name: "Investment Strategies", href: "/categories/investment-strategies", count: 25 },
  { name: "Financial Planning", href: "/categories/financial-planning", count: 18 },
  { name: "Industry News", href: "/categories/industry-news", count: 30 },
  { name: "Technology & Innovation", href: "/categories/technology", count: 15 },
];

const popularPostsData = [
  { name: "Top 5 Investment Mistakes to Avoid", href: "/articles/top-5-mistakes" },
  { name: "Beginner's Guide to Stock Trading", href: "/articles/beginners-guide-stocks" },
  { name: "How AI is Changing Investment", href: "/articles/ai-in-investment" },
  { name: "Retirement Planning in Your 30s", href: "/articles/retirement-30s" },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Header title="The E-Magazine" tagline="Your Daily Dose of Insight and Inspiration" />
        <NavigationBar />

        {/* Main Content Area */}
        <main className="flex flex-col lg:flex-row gap-10">
          {/* Primary Content (Articles) */}
          <section className="lg:w-2/3">
            <FeaturedArticle article={featuredArticleData} />

            {/* Recent Articles List */}
            <div className="space-y-8 mt-12">
              <h3 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-3 mb-6">
                Recent Articles
              </h3>
              {recentArticlesData.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>

          {/* Sidebar */}
     
          <aside className="lg:w-1/3 space-y-10 lg:mt-[calc(theme(spacing.16)_+_theme(spacing.6)_)]"> {/* Adjust top margin to align with featured article content */}
            <SidebarSection title="Categories" items={categoriesData} />
            <SidebarSection title="Popular Posts" items={popularPostsData} />
        
            {/* Example of another sidebar section */}
            <div className="p-6 bg-blue-500 text-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Subscribe to our Newsletter</h3>
                <p className="text-sm mb-4 opacity-90">Get the latest articles and insights directly in your inbox.</p>
                <form className="flex flex-col space-y-3">
                    <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-blue-300 outline-none" />
                    <button type="submit" className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-50 transition-colors">
                        Subscribe
                    </button>
                </form>
            </div>
                      {/* Quiz and Poll Section */}
      <section className="flex flex-col items-center justify-center my-10 gap-8">
        {/* Quiz Section */}
        <div className="w-full max-w-xl bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Quick Quiz</h2>
          <form>
            <p className="mb-2">Which of the following is a key benefit of diversified investing?</p>
            <div className="flex flex-col gap-2 mb-4">
              <label><input type="radio" name="quiz" value="a" /> Higher risk</label>
              <label><input type="radio" name="quiz" value="b" /> Lower risk</label>
              <label><input type="radio" name="quiz" value="c" /> Fewer investment options</label>
              <label><input type="radio" name="quiz" value="d" /> None of the above</label>
            </div>
            <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
          </form>
        </div>
        {/* Poll Section */}
        <div className="w-full max-w-xl bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Poll</h2>
          <form>
            <p className="mb-2">What financial topic would you like to read more about?</p>
            <div className="flex flex-col gap-2 mb-4">
              <label><input type="radio" name="poll" value="retirement" /> Retirement Planning</label>
              <label><input type="radio" name="poll" value="investing" /> Investing Basics</label>
              <label><input type="radio" name="poll" value="taxes" /> Tax Strategies</label>
              <label><input type="radio" name="poll" value="estate" /> Estate Planning</label>
            </div>
            <button type="button" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Vote</button>
          </form>
        </div>
      </section>
          </aside>
        </main>

        <Footer magazineName="The E-Magazine" poweredBy="Powered by Your Investment Firm" />
      </div>
    </div>
  );
}
