
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "User Research",
    description: "Discover what your users really need through interviews, usability testing, and data analysis."
  },
  {
    id: 2,
    title: "Competitor Audit",
    description: "Understand your market position and identify opportunities through comprehensive competitor analysis."
  },
  {
    id: 3,
    title: "Design System Rework",
    description: "Create consistent, scalable design systems that improve development efficiency and user experience."
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Improve visibility and drive organic traffic with our data-driven SEO strategies."
  },
  {
    id: 5,
    title: "Custom Development",
    description: "Transform designs into reality with clean, efficient, and maintainable code."
  }
];

const Services = () => {
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
    <section id="services" className="py-24 md:py-32 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-montagu mb-6">Our Services</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
            We help businesses create exceptional digital experiences through these core offerings:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="reveal-on-scroll border-none shadow-md hover:shadow-lg transition-shadow" style={{ transitionDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-montagu">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <p className="text-lg mb-6 opacity-80">Need something specific? We offer custom services tailored to your needs.</p>
          <a href="#contact" className="inline-block text-capitari-blue font-medium border-b-2 border-capitari-blue hover:border-capitari-magenta hover:text-capitari-magenta transition-colors">
            Let's discuss your project →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
