
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 Strategies for Business Growth in 2024",
    excerpt: "Discover the key strategies that successful businesses are implementing to drive growth in the competitive landscape of 2024.",
    category: "Business Strategy",
    date: "May 15, 2024",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "/blog/10-strategies-business-growth-2023",
  },
  {
    id: 2,
    title: "The Impact of AI on Modern Business Operations",
    excerpt: "Explore how artificial intelligence is transforming business operations across industries and creating new opportunities for innovation.",
    category: "Technology",
    date: "May 8, 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "/blog/impact-ai-modern-business-operations",
  },
  {
    id: 3,
    title: "Building a Resilient Corporate Culture",
    excerpt: "Learn how leading companies are fostering resilient, adaptable corporate cultures that thrive even during challenging times.",
    category: "Corporate Culture",
    date: "May 2, 2024",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "/blog/building-resilient-corporate-culture",
  },
];

const LatestBlogPosts = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Stay updated with our latest articles, industry insights, and expert advice.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="outline" asChild>
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:-translate-y-1 hover:shadow-lg">
              <Link to={post.slug} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-corporate-500 dark:bg-corporate-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-3 hover:text-corporate-500 dark:hover:text-corporate-300 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="inline-flex items-center text-corporate-500 dark:text-corporate-300 font-medium">
                    Read more <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
