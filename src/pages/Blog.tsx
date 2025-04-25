
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Clock, User } from "lucide-react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Strategies for Business Growth in 2025",
    excerpt: "Discover the most effective strategies to accelerate your business growth in the coming year.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc.",
    author: "John Smith",
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Business Strategy",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    slug: "10-strategies-for-business-growth"
  },
  {
    id: 2,
    title: "The Future of Digital Marketing",
    excerpt: "Explore emerging trends and technologies shaping the future of digital marketing strategies.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc.",
    author: "Emily Johnson",
    date: "April 10, 2025",
    readTime: "6 min read",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80",
    slug: "future-of-digital-marketing"
  },
  {
    id: 3,
    title: "Effective Leadership in Remote Work Environments",
    excerpt: "Learn how to build and lead high-performing teams in distributed and remote work settings.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc.",
    author: "Michael Chen",
    date: "April 5, 2025",
    readTime: "10 min read",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
    slug: "effective-leadership-remote-work"
  },
  {
    id: 4,
    title: "Sustainable Business Practices for the Modern Enterprise",
    excerpt: "Implementing eco-friendly business practices that benefit both the environment and your bottom line.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc.",
    author: "Sarah Williams",
    date: "March 28, 2025",
    readTime: "7 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1464970100546-601e521a7f4b?auto=format&fit=crop&q=80",
    slug: "sustainable-business-practices"
  },
  {
    id: 5,
    title: "Financial Planning Strategies for Small Businesses",
    excerpt: "Essential financial planning tips to help small businesses maximize profits and plan for growth.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc.",
    author: "David Rodriguez",
    date: "March 20, 2025",
    readTime: "9 min read",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
    slug: "financial-planning-small-businesses"
  },
  {
    id: 6,
    title: "Customer Experience Trends for 2025",
    excerpt: "Discover the latest innovations in customer experience management that will set your business apart.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nunc.",
    author: "Jennifer Lee",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Customer Experience",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80",
    slug: "customer-experience-trends"
  },
];

const POSTS_PER_PAGE = 4;

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Handle page navigation
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, analysis, and expertise from our team to help your business succeed.
          </p>
        </div>
        
        {/* Featured Post */}
        {currentPage === 1 && (
          <div className="mb-16">
            <Link to={`/blog/${blogPosts[0].slug}`} className="block">
              <div className="grid md:grid-cols-5 gap-8 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="md:col-span-3 aspect-[16/9] md:aspect-auto bg-cover bg-center min-h-[300px]"
                  style={{ backgroundImage: `url(${blogPosts[0].image})` }}
                />
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{blogPosts[0].category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <User size={16} className="mr-2" />
                    <span className="mr-4">{blogPosts[0].author}</span>
                    <Clock size={16} className="mr-2" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Button className="mt-6 w-fit">Read More</Button>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {paginatedPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden h-full flex flex-col shadow-md hover:shadow-lg transition-shadow">
              <div 
                className="aspect-[16/9] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge>{post.category}</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
                <CardTitle>
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <User size={16} className="mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-primary">
                  <Link to={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Stay updated with the latest insights and news from our team.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-l-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;
