
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

// Project categories for filtering
const categories = ["All", "Web Development", "Branding", "Mobile App", "Consulting"];

// Sample portfolio data
const projects = [
  {
    id: 1,
    title: "Corporate Website Redesign",
    description: "Complete overhaul of a Fortune 500 company website with improved UX and modern design.",
    category: "Web Development",
    client: "ABC Corporation",
    year: 2023,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "User-friendly mobile banking application with secure transactions and personalized insights.",
    category: "Mobile App",
    client: "National Bank",
    year: 2023,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Brand Identity System",
    description: "Comprehensive brand identity system including logo, color palette, typography, and usage guidelines.",
    category: "Branding",
    client: "TechStart",
    year: 2022,
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Custom e-commerce solution with integrated payment processing and inventory management.",
    category: "Web Development",
    client: "Fashion Outlet",
    year: 2022,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Business Growth Strategy",
    description: "Strategic business plan that resulted in 150% revenue growth over 18 months.",
    category: "Consulting",
    client: "GrowthCo",
    year: 2022,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Social Media App",
    description: "Innovative social media platform focused on professional networking and skill sharing.",
    category: "Mobile App",
    client: "ConnectPro",
    year: 2021,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
  },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [openProject, setOpenProject] = useState<(typeof projects)[0] | null>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our collection of work and see how we've helped our clients achieve their goals.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setOpenProject(project)}
            >
              <div 
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Badge className="w-fit mb-2">{project.category}</Badge>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.client}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white"
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!openProject} onOpenChange={(open) => !open && setOpenProject(null)}>
          <DialogContent className="max-w-4xl">
            {openProject && (
              <>
                <DialogHeader>
                  <DialogTitle>{openProject.title}</DialogTitle>
                  <DialogDescription>
                    Client: {openProject.client} | Year: {openProject.year}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <div 
                    className="w-full aspect-video rounded-lg bg-cover bg-center mb-6"
                    style={{ backgroundImage: `url(${openProject.image})` }}
                  />
                  <Badge className="mb-4">{openProject.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">Project Overview</h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    {openProject.description}
                  </p>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setOpenProject(null)}>
                      Close
                    </Button>
                    <Button className="flex items-center gap-2">
                      <span>Visit Project</span>
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default PortfolioPage;
