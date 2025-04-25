
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  // Team members
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      bio: "Sarah has over 20 years of experience in corporate leadership and strategy development.",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "Michael leads our technology initiatives with 15 years of experience in software development and IT strategy.",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      name: "Emily Rodriguez",
      position: "Chief Marketing Officer",
      bio: "Emily brings 12 years of marketing expertise with a focus on digital transformation and brand strategy.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "David Wilson",
      position: "Chief Financial Officer",
      bio: "David has managed financial operations for Fortune 500 companies for over 18 years.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Lisa Chang",
      position: "Head of Customer Success",
      bio: "Lisa ensures our clients achieve their goals with her 10 years of experience in customer relations.",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
    },
    {
      name: "Robert Taylor",
      position: "Head of Product Development",
      bio: "Robert leads our product team with 14 years of experience in building innovative business solutions.",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
    },
  ];

  // Core values
  const coreValues = [
    {
      title: "Innovation",
      description: "We embrace new ideas and technologies to continuously improve our services and solutions.",
    },
    {
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency in all our dealings.",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering the highest quality services to our clients.",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership to achieve exceptional results.",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">About CorporatePro</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're a team of dedicated professionals committed to helping businesses reach their full potential through innovative solutions and strategic guidance.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4">
              <p>
                Founded in 2010, CorporatePro began with a simple mission: to provide businesses with the tools and strategies they need to thrive in an increasingly competitive landscape.
              </p>
              <p>
                What started as a small consulting firm has grown into a comprehensive business solutions provider, serving clients across multiple industries and countries. Throughout our journey, we've remained committed to our founding principles of innovation, integrity, and client success.
              </p>
              <p>
                Today, we're proud to be a trusted partner to hundreds of businesses, from emerging startups to established enterprises. Our diverse team of experts brings together decades of experience across business strategy, technology, marketing, and finance to deliver holistic solutions that drive meaningful results.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-10 mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To empower businesses with innovative solutions and expert guidance that drive sustainable growth and operational excellence. We are committed to understanding each client's unique challenges and delivering tailored strategies that create lasting value.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the global leader in business solutions, recognized for our commitment to excellence, innovation, and client success. We envision a world where every business has access to the tools and expertise needed to realize its full potential.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4 text-corporate-500">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-corporate-500 dark:text-corporate-300 mb-4">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:dark:via-gray-700 before:to-transparent">
            {[
              { year: "2010", title: "Founded", description: "CorporatePro was established with a focus on business consulting." },
              { year: "2013", title: "Expansion", description: "Expanded service offerings to include digital marketing and technology solutions." },
              { year: "2016", title: "Global Reach", description: "Opened our first international office and began serving clients worldwide." },
              { year: "2019", title: "Technology Focus", description: "Launched our innovative technology solutions division." },
              { year: "2022", title: "Industry Recognition", description: "Recognized as a top business solutions provider by Industry Leaders Magazine." },
              { year: "2025", title: "Present Day", description: "Continuing to innovate and help businesses thrive in an evolving landscape." },
            ].map((event, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-corporate-500 text-white shrink-0 md:mx-auto md:relative md:z-10">
                  {index + 1}
                </div>
                <div className={`flex-grow ml-6 md:w-[45%] md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                    <span className="text-corporate-500 dark:text-corporate-300 font-bold">{event.year}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 dark:bg-gray-800 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help your business reach its full potential with our tailored solutions and expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
