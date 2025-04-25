
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, PenTool, Code, LineChart, Layers, BarChart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Business Consulting",
    description: "Strategic advice to optimize your business operations and maximize growth potential.",
    icon: LineChart,
    color: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to increase your brand visibility and reach.",
    icon: Globe,
    color: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Web Development",
    description: "Custom website development solutions tailored to your specific business needs.",
    icon: Code,
    color: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Graphic Design",
    description: "Creative design services that bring your brand vision to life with stunning visuals.",
    icon: PenTool,
    color: "bg-orange-100 dark:bg-orange-900/30",
    textColor: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Data Analytics",
    description: "In-depth data analysis to drive informed business decisions and identify opportunities.",
    icon: BarChart,
    color: "bg-cyan-100 dark:bg-cyan-900/30",
    textColor: "text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Brand Strategy",
    description: "Comprehensive brand development strategies that establish your unique market position.",
    icon: Layers,
    color: "bg-pink-100 dark:bg-pink-900/30",
    textColor: "text-pink-600 dark:text-pink-400",
  },
];

const ServicesPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of business solutions designed to help your company reach its full potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${service.color}`}>
                    <service.icon className={`h-6 w-6 ${service.textColor}`} />
                  </div>
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" asChild className="group">
                  <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help your business grow and succeed.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
