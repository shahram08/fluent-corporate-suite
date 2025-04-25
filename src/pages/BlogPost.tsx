
import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import { Link } from "react-router-dom";

// Sample blog post data (would come from API/database in a real application)
const blogPosts = [
  {
    id: 1,
    title: "10 Strategies for Business Growth in 2025",
    content: `
      <p>In today's rapidly evolving business landscape, staying ahead requires strategic thinking and adaptability. This article explores ten proven strategies that can help your business thrive in 2025 and beyond.</p>
      
      <h2>1. Embrace Digital Transformation</h2>
      <p>Digital transformation isn't just about adopting new technologies—it's about fundamentally rethinking your business model through the lens of digital possibilities. Companies that successfully integrate digital technologies into all areas of their business see significant improvements in efficiency, customer value, and innovation capacity.</p>
      
      <h2>2. Focus on Customer Experience</h2>
      <p>Customer expectations have never been higher. Delivering exceptional customer experiences across all touchpoints is no longer optional—it's essential for business growth. This means creating personalized interactions, streamlining processes, and constantly seeking customer feedback to refine your approach.</p>
      
      <h2>3. Develop Data-Driven Decision Making</h2>
      <p>Data is the new oil. Organizations that leverage data analytics to inform their strategic decisions gain a significant competitive advantage. This involves collecting relevant data, analyzing it effectively, and using those insights to drive business decisions at all levels.</p>
      
      <h2>4. Prioritize Sustainability</h2>
      <p>Consumers and investors alike are increasingly favoring businesses with strong environmental, social, and governance (ESG) credentials. Developing sustainable business practices isn't just good for the planet—it's good for your bottom line and brand reputation.</p>
      
      <h2>5. Invest in Employee Development</h2>
      <p>Your workforce is your greatest asset. Companies that invest in continuous learning and development for their employees see higher engagement, productivity, and innovation. This includes both technical skills and soft skills like adaptability, creativity, and emotional intelligence.</p>
    `,
    author: "John Smith",
    authorTitle: "Business Strategy Director",
    authorBio: "John Smith has over 15 years of experience in business strategy and growth consulting for Fortune 500 companies.",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Business Strategy",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    slug: "10-strategies-for-business-growth",
    tags: ["Business Growth", "Strategy", "Digital Transformation", "Leadership"],
    relatedPosts: [2, 3, 5]
  },
  {
    id: 2,
    title: "The Future of Digital Marketing",
    content: `
      <p>Digital marketing continues to evolve at a breathtaking pace. This article explores the emerging trends and technologies that will shape the future of marketing strategies.</p>
      
      <h2>The Rise of AI-Powered Marketing</h2>
      <p>Artificial Intelligence is revolutionizing how marketers understand and reach their audiences. From predictive analytics to automated content creation, AI tools are becoming indispensable for modern marketing teams.</p>
      
      <h2>Voice Search Optimization</h2>
      <p>As voice assistants become increasingly prevalent, optimizing content for voice search is becoming a critical component of SEO strategy. This requires a shift toward more conversational keywords and providing direct answers to common questions.</p>
      
      <h2>Immersive Experiences</h2>
      <p>Augmented reality (AR) and virtual reality (VR) are creating new opportunities for brands to engage with consumers. These technologies allow for immersive product demonstrations and interactive brand experiences that were previously impossible.</p>
    `,
    author: "Emily Johnson",
    authorTitle: "Digital Marketing Specialist",
    authorBio: "Emily Johnson specializes in emerging digital marketing technologies and strategies for B2B companies.",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "April 10, 2025",
    readTime: "6 min read",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80",
    slug: "future-of-digital-marketing",
    tags: ["Digital Marketing", "AI", "Marketing Strategy", "Technology"],
    relatedPosts: [1, 6]
  },
  {
    id: 3,
    title: "Effective Leadership in Remote Work Environments",
    content: "<p>Sample content for leadership article...</p>",
    author: "Michael Chen",
    authorTitle: "Leadership Coach",
    authorBio: "Michael Chen helps executives develop leadership skills for the digital age.",
    authorAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
    date: "April 5, 2025",
    readTime: "10 min read",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
    slug: "effective-leadership-remote-work",
    tags: ["Leadership", "Remote Work", "Team Management"],
    relatedPosts: [1, 4]
  },
  {
    id: 4,
    title: "Sustainable Business Practices for the Modern Enterprise",
    content: "<p>Sample content for sustainability article...</p>",
    author: "Sarah Williams",
    authorTitle: "Sustainability Consultant",
    authorBio: "Sarah Williams advises businesses on implementing eco-friendly practices.",
    authorAvatar: "https://randomuser.me/api/portraits/women/28.jpg",
    date: "March 28, 2025",
    readTime: "7 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1464970100546-601e521a7f4b?auto=format&fit=crop&q=80",
    slug: "sustainable-business-practices",
    tags: ["Sustainability", "ESG", "Green Business", "Corporate Responsibility"],
    relatedPosts: [5, 3]
  },
  {
    id: 5,
    title: "Financial Planning Strategies for Small Businesses",
    content: "<p>Sample content for financial planning article...</p>",
    author: "David Rodriguez",
    authorTitle: "Financial Advisor",
    authorBio: "David Rodriguez specializes in financial strategies for small businesses and startups.",
    authorAvatar: "https://randomuser.me/api/portraits/men/67.jpg",
    date: "March 20, 2025",
    readTime: "9 min read",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
    slug: "financial-planning-small-businesses",
    tags: ["Finance", "Small Business", "Financial Planning", "Budgeting"],
    relatedPosts: [1, 4]
  },
  {
    id: 6,
    title: "Customer Experience Trends for 2025",
    content: "<p>Sample content for customer experience article...</p>",
    author: "Jennifer Lee",
    authorTitle: "CX Strategy Director",
    authorBio: "Jennifer Lee helps businesses reimagine their customer experience strategies.",
    authorAvatar: "https://randomuser.me/api/portraits/women/12.jpg",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Customer Experience",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80",
    slug: "customer-experience-trends",
    tags: ["Customer Experience", "CX", "Customer Service", "Customer Success"],
    relatedPosts: [2, 1]
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-6">Post not found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter(p => post.relatedPosts!.includes(p.id)).slice(0, 3)
    : [];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Back to Blog */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="flex items-center gap-2 text-sm">
            <Link to="/blog">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </Button>
        </div>
        
        {/* Article Header */}
        <div className="mb-8 max-w-4xl mx-auto">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto mb-16">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Share */}
        <div className="max-w-3xl mx-auto mb-16 flex justify-between items-center border-t border-b py-6 border-gray-200 dark:border-gray-800">
          <div>
            <h4 className="font-semibold mb-1">Share this article</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">If you found this article helpful</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Share2 size={16} />
            </Button>
            {/* Additional social share buttons would go here */}
          </div>
        </div>

        {/* Author Bio */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
            <img 
              src={post.authorAvatar} 
              alt={post.author}
              className="rounded-full w-24 h-24 object-cover"
            />
            <div>
              <h3 className="font-bold text-lg mb-1">{post.author}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{post.authorTitle}</p>
              <p>{post.authorBio}</p>
            </div>
          </Card>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden h-full flex flex-col">
                  <div 
                    className="aspect-[16/9] w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${relatedPost.image})` }}
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <Badge className="w-fit mb-2">{relatedPost.category}</Badge>
                    <h3 className="font-bold text-lg mb-2">
                      <Link to={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <div className="flex items-center mt-auto pt-4 text-sm text-gray-500 dark:text-gray-400">
                      <User size={16} className="mr-2" />
                      <span className="mr-4">{relatedPost.author}</span>
                      <Clock size={16} className="mr-2" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default BlogPost;
