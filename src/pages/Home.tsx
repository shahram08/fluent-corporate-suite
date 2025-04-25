
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LatestBlogPosts from "@/components/home/LatestBlogPosts";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <LatestBlogPosts />
      <CTASection />
    </PageLayout>
  );
};

export default Home;
