
import { useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard Redesign",
    client: "WealthWise",
    description: "Complete overhaul of a financial management platform, improving user engagement by 47%.",
    tags: ["UX Research", "UI Design", "Development"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "E-commerce User Experience",
    client: "Urban Threads",
    description: "Streamlined checkout process leading to a 23% reduction in cart abandonment.",
    tags: ["UX Audit", "User Testing", "Design System"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Healthcare App Development",
    client: "MediSync",
    description: "Patient-centered mobile application improving appointment scheduling and health monitoring.",
    tags: ["UX/UI Design", "Mobile Development", "User Research"],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
];

const Work = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="work" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-montagu mb-6">Our Work</h2>
          <p className="text-lg md:text-xl max-w-2xl opacity-80">
            We've helped businesses across industries solve complex problems and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`reveal-on-scroll overflow-hidden border-none ${
                index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <CardHeader className="pt-6 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-montagu mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.client}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="opacity-80">{project.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-white">{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            These are just a few examples of our work. Each project is tailored to meet specific business goals and user needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
